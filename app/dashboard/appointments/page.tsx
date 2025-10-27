"use client";
import Sidebar from "@/components/Sidebar";
import { AlertCircle, Calendar, ChevronLeft, ChevronRight, Clock, FileText, Mail, Phone, RefreshCw, Search, Settings, User, X, Zap } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface Appointment {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  purpose: string;
  status: "scheduled" | "confirmed" | "completed" | "cancelled" | "no-show" | "rescheduled";
  date: string;
  time: string;
  callId?: string;
  source: "millis_ai_auto" | "manual" | "web" | "api";
  notes?: string;
  transcription?: any;
  metadata?: {
    call_duration?: number;
    agent_id?: string;
    agent_name?: string;
    call_direction?: string;
    confidence_score?: number;
    doctor_name?: string;
  };
  createdAt: string;
  updatedAt: string;
}

type AppointmentStats = {
  total: number;
  today: number;
  scheduled: number;
  completed: number;
  cancelled: number;
  auto_created: number;
  manual_created: number;
};

interface PaginationInfo {
  current_page: number;
  total_pages: number;
  total_appointments: number;
  per_page: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://digital-api-tef8.onrender.com";

function getAuthHeaders() {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  try {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") || "demo-token";
      headers["Authorization"] = `Bearer ${token}`;
    } else {
      // Server-side fallback
      headers["Authorization"] = `Bearer demo-token`;
    }
  } catch (e) {
    // Fallback to demo token
    headers["Authorization"] = `Bearer demo-token`;
  }
  return headers;
}

const statusStyles: Record<Appointment['status'], string> = {
  scheduled: "bg-blue-100 text-blue-700 border-blue-300",
  confirmed: "bg-green-100 text-green-700 border-green-300",
  completed: "bg-purple-100 text-purple-700 border-purple-300",
  cancelled: "bg-red-100 text-red-700 border-red-300",
  "no-show": "bg-gray-100 text-gray-700 border-gray-300",
  rescheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
};

const statusColors: Record<Appointment['status'], string> = {
  scheduled: "blue",
  confirmed: "green",
  completed: "purple",
  cancelled: "red",
  "no-show": "gray",
  rescheduled: "yellow",
};

const sourceIcons: Record<Appointment['source'], React.ReactNode> = {
  millis_ai_auto: <Zap className="w-4 h-4" />,
  manual: <User className="w-4 h-4" />,
  web: <FileText className="w-4 h-4" />,
  api: <Settings className="w-4 h-4" />,
};

const sourceLabels: Record<Appointment['source'], string> = {
  millis_ai_auto: "Auto-Created (AI)",
  manual: "Manual Entry",
  web: "Web Booking",
  api: "API Created",
};

function StatusBadge({ status }: { status: Appointment['status'] }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function SourceBadge({ source }: { source: Appointment['source'] }) {
  return (
    <span className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
      source === 'millis_ai_auto' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
    }`}>
      {sourceIcons[source]}
      {source === 'millis_ai_auto' ? 'AI Auto' : sourceLabels[source]}
    </span>
  );
}

// Add this function to detect recently created appointments
function isRecentlyCreated(createdAt: string): { isRecent: boolean; label: string; className: string } {
  const now = new Date();
  const created = new Date(createdAt);
  const diffMinutes = (now.getTime() - created.getTime()) / (1000 * 60);
  
  if (diffMinutes < 60) {
    return {
      isRecent: true,
      label: "Just Created",
      className: "bg-green-100 text-green-700 border-green-300 animate-pulse"
    };
  } else if (diffMinutes < 24 * 60) {
    return {
      isRecent: true,
      label: "Today",
      className: "bg-blue-100 text-blue-700 border-blue-300"
    };
  }
  
  return { isRecent: false, label: "", className: "" };
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [calendarAppointments, setCalendarAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [stats, setStats] = useState<AppointmentStats>({
    total: 0, today: 0, scheduled: 0, completed: 0, cancelled: 0, auto_created: 0, manual_created: 0,
  });

  const [filterStatus, setFilterStatus] = useState<"All" | Appointment['status']>("All");
  const [filterSource, setFilterSource] = useState<"All" | Appointment['source']>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [wsRetryCount, setWsRetryCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [aiPrompt, setAiPrompt] = useState(`You are analyzing a clinic appointment booking call.

TASK: Determine if patient is requesting an appointment with a doctor.

Look for:
- Patient asking for appointment
- Doctor's name mentioned
- Date/time preferences
- Patient confirmation
- Contact details (name, phone)

RESPOND ONLY IN THIS JSON FORMAT (NO EXTRA TEXT):
{
  "is_appointment": true/false,
  "customer_name": "patient name or empty string",
  "phone_number": "10-digit number or empty string",
  "doctor_name": "doctor name if mentioned",
  "appointment_date": "requested date/time or empty string",
  "appointment_time": "requested time or empty string",
  "is_confirmed": true/false,
  "confidence_score": 0.0-1.0,
  "reason_for_visit": "brief reason",
  "notes": "any other details"
}`);

  // Mount state to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // WebSocket setup
  useEffect(() => {
    if (!mounted) return;
    
    const setupWebSocket = () => {
      try {
        const wsUrl = `${API_BASE_URL.replace('http', 'ws')}/ws`;
        console.log('Attempting WebSocket connection to:', wsUrl);
        const ws = new WebSocket(wsUrl);
        
        ws.onopen = () => {
          console.log('✅ WebSocket connected');
          setWsRetryCount(0);
        };
        
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.type === 'new_appointment' || data.type === 'appointment_updated') {
            console.log('📅 Appointment update received:', data);
            fetchAppointments();
            fetchCalendarAppointments(currentMonth);
            setLastUpdate(new Date());
            
            if (data.type === 'new_appointment') {
              setSuccessMessage('🎉 New appointment auto-created from call!');
              setTimeout(() => setSuccessMessage(null), 5000);
            }
          }
        };
        
        ws.onerror = (error) => {
          console.warn('⚠️ WebSocket error (live updates disabled):', error);
        };
        
        ws.onclose = () => {
          console.log('⚠️ WebSocket disconnected');
          // Only retry a few times, then give up gracefully
          if (wsRetryCount < 3) {
            const retryDelay = Math.min(1000 * Math.pow(2, wsRetryCount), 10000);
            setTimeout(() => {
              setWsRetryCount(prev => prev + 1);
              setupWebSocket();
            }, retryDelay);
          } else {
            console.log('WebSocket max retries reached, continuing without live updates');
          }
        };
        
        setSocket(ws);
        
        return () => {
          ws.close();
        };
      } catch (error) {
        console.warn('WebSocket setup failed, continuing without live updates:', error);
      }
    };

    setupWebSocket();
  }, [mounted, wsRetryCount]);

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "50",
      });

      if (filterStatus !== "All") {
        params.append("status", filterStatus);
      }
      if (filterSource !== "All") {
        params.append("source", filterSource);
      }
      if (searchTerm) {
        params.append("name", searchTerm);
      }
      if (selectedDate) {
        params.append("from_date", selectedDate);
        params.append("to_date", selectedDate);
      }

      const url = `${API_BASE_URL}/api/appointments?${params.toString()}`;
      const response = await fetch(url, {
        method: "GET",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        // ✅ Sort appointments by creation date (newest first) on frontend
        const sortedAppointments = (data.appointments || []).sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA; // Newest first
        });

        console.log('🆕 Appointments sorted by creation date (newest first)');
        console.log('📅 Most recent appointments:', sortedAppointments.slice(0, 3).map((apt: { name: any; createdAt: any; source: any; }) => ({
          name: apt.name,
          created: apt.createdAt,
          source: apt.source
        })));

        setAppointments(sortedAppointments);
        setStats(data.stats || {
          total: 0, today: 0, scheduled: 0, completed: 0, cancelled: 0, auto_created: 0, manual_created: 0,
        });
        setPagination(data.pagination || null);
      } else {
        throw new Error(data.message || 'Failed to fetch appointments');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch appointments";
      console.error('Failed to fetch appointments:', errorMessage);
      setError(`${errorMessage}. Please refresh the page.`);
      setAppointments([]);
    }
    setLoading(false);
  }, [page, filterStatus, filterSource, searchTerm, selectedDate]);

  const fetchCalendarAppointments = useCallback(async (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    try {
      const params = new URLSearchParams({
        year: year.toString(),
        month: month.toString(),
      });
      
      const url = `${API_BASE_URL}/api/appointments/calendar?${params.toString()}`;
      const response = await fetch(url, { headers: getAuthHeaders() });
      
      if (!response.ok) {
        throw new Error("Failed to fetch calendar data");
      }
      
      const data = await response.json();
      if (data.success) {
        setCalendarAppointments(data.appointments || []);
      }
    } catch (err) {
      console.error("Calendar fetch error:", err);
    }
  }, []);

  const updateAppointmentStatus = async (appointmentId: string | undefined, newStatus: Appointment['status']) => {
    if (!appointmentId) {
      setError("Invalid appointment id");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments/${appointmentId}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update");
      
      const data = await response.json();
      
      if (data.success) {
        let notificationMessage = `Appointment status updated to ${newStatus}!`;
        
        if (newStatus === "confirmed") {
          notificationMessage = `✅ Appointment confirmed! Email notification sent to doctor.`;
        }
        
        setSuccessMessage(notificationMessage);
        setTimeout(() => setSuccessMessage(null), 5000);
        
        setError(null);
        setSelectedAppointment(null);
        await fetchAppointments();
        await fetchCalendarAppointments(currentMonth);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update appointment");
    }
  };

  // Initial fetch
  useEffect(() => {
    const initialize = async () => {
      await fetchAppointments();
      await fetchCalendarAppointments(currentMonth);
    };

    initialize();

    const timer = setInterval(() => {
      if (!socket || socket.readyState !== WebSocket.OPEN) {
        fetchAppointments();
        fetchCalendarAppointments(currentMonth);
      }
    }, 30000);

    return () => clearInterval(timer);
  }, [fetchAppointments, fetchCalendarAppointments, currentMonth, socket]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  useEffect(() => {
    fetchCalendarAppointments(currentMonth);
  }, [currentMonth, fetchCalendarAppointments]);

  // Load AI prompt
  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/analysis-prompts`);
        if (response.ok) {
          const data = await response.json();
          setAiPrompt(data.appointment_prompt || aiPrompt);
        }
      } catch (error) {
        console.error("Failed to fetch prompt:", error);
      }
    };
    fetchPrompt();
  }, []);

  const saveAiPrompt = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/analysis-prompts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appointment_prompt: aiPrompt })
      });

      if (response.ok) {
        setSuccessMessage("✅ AI prompt saved successfully!");
        setTimeout(() => setSuccessMessage(null), 5000);
        setShowPromptModal(false);
      } else {
        setError("Failed to save prompt");
      }
    } catch (error) {
      setError("Failed to save prompt");
    }
  };

  const resetPrompt = () => {
    const defaultPrompt = `You are analyzing a clinic appointment booking call.

TASK: Determine if patient is requesting an appointment with a doctor.

Look for:
- Patient asking for appointment
- Doctor's name mentioned
- Date/time preferences
- Patient confirmation
- Contact details (name, phone)

RESPOND ONLY IN THIS JSON FORMAT (NO EXTRA TEXT):
{
  "is_appointment": true/false,
  "customer_name": "patient name or empty string",
  "phone_number": "10-digit number or empty string",
  "doctor_name": "doctor name if mentioned",
  "appointment_date": "requested date/time or empty string",
  "appointment_time": "requested time or empty string",
  "is_confirmed": true/false,
  "confidence_score": 0.0-1.0,
  "reason_for_visit": "brief reason",
  "notes": "any other details"
}`;
    setAiPrompt(defaultPrompt);
  };

  const todayAppointments = useMemo(() => appointments.filter(apt => 
    new Date(apt.date).toDateString() === new Date().toDateString()
  ), [appointments]);

  const getAppointmentsForDate = useCallback((date: Date) => {
    return calendarAppointments.filter(apt => {
      const appointmentDate = new Date(apt.date);
      appointmentDate.setHours(0, 0, 0, 0);
      
      const compareDate = new Date(date);
      compareDate.setHours(0, 0, 0, 0);
      
      return appointmentDate.getTime() === compareDate.getTime();
    });
  }, [calendarAppointments]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleDateClick = (dateStr: string) => {
    setSearchTerm("");
    setFilterStatus("All");

    if (selectedDate === dateStr) {
      setSelectedDate(null);
    } else {
      setSelectedDate(dateStr);
      setPage(1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateStr = date.toISOString().split("T")[0];
      const dateAppts = getAppointmentsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate === dateStr;

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(dateStr)}
          className={`h-24 p-2 rounded-lg cursor-pointer transition-all border-2 ${
            isSelected
              ? "bg-blue-500 border-blue-600 shadow-lg scale-105"
              : isToday 
              ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400 shadow-md" 
              : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"
          }`}
        >
          <div className={`text-sm font-bold mb-1 ${
            isSelected ? "text-white" : isToday ? "text-blue-700" : "text-gray-700"
          }`}>
            {day}
          </div>
          
          {dateAppts.length > 0 && (
            <div className="space-y-1">
              <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-blue-600"}`}>
                {dateAppts.length} {dateAppts.length === 1 ? 'apt' : 'apts'}
              </div>
              {dateAppts.slice(0, 2).map((apt, idx) => (
                <div
                  key={apt._id}
                  className={`text-xs px-1.5 py-0.5 rounded truncate flex items-center gap-1 ${
                    isSelected 
                      ? "bg-white/20 text-white" 
                      : statusStyles[apt.status]
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAppointment(apt);
                  }}
                >
                  {apt.source === 'millis_ai_auto' && <Zap className="w-3 h-3" />}
                  {apt.name}
                </div>
              ))}
              {dateAppts.length > 2 && (
                <div className={`text-xs ${isSelected ? "text-white" : "text-blue-600"}`}>
                  +{dateAppts.length - 2} more
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  // Prevent hydration mismatch by ensuring component is mounted
  if (!mounted) {
    return null;
  }

  if (loading && appointments.length === 0) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 ml-60 p-6">
          <div className="text-center mt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading appointments...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 ml-60 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Appointment Management</h1>
                <p className="text-blue-100 mt-2 text-lg">Manage appointments using Auto-Appointment System</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <div className={`w-2 h-2 rounded-full ${socket?.readyState === WebSocket.OPEN ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <span>{socket?.readyState === WebSocket.OPEN ? 'Live Updates Active' : 'Connecting...'}</span>
                  </div>
                  <span className="text-xs">Last updated: {lastUpdate.toLocaleTimeString()}</span>
                </div>
              </div>
              <button
                onClick={() => setShowPromptModal(true)}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition backdrop-blur-sm"
              >
                <Settings className="w-5 h-5" />
                <span className="font-semibold">AI Settings</span>
              </button>
            </div>
          </div>

          {/* Success/Error Messages */}
          {successMessage && (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
              <Mail className="w-5 h-5" />
              {successMessage}
            </div>
          )}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-green-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Today</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.today}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-yellow-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Scheduled</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.scheduled}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-purple-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">AI Auto-Created</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.auto_created}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-gray-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Manual</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.manual_created}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left - Calendar & Today */}
            <div className="lg:col-span-1 space-y-4">
              {/* Calendar */}
              <div className="bg-white rounded-xl shadow-sm p-5 border-t-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </h3>
                    {selectedDate && (
                      <button
                        onClick={() => handleDateClick("")}
                        className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                      >
                        Clear Filter
                      </button>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={handlePrevMonth} className="p-1.5 hover:bg-gray-100 rounded-lg">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-100 rounded-lg">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="text-center text-xs font-semibold text-gray-600 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar()}
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Today's Schedule</h3>
                </div>
                
                {todayAppointments.length > 0 ? (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {todayAppointments.map(apt => (
                      <div
                        key={apt._id}
                        className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition"
                        onClick={() => setSelectedAppointment(apt)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-gray-900">{apt.name}</div>
                          <StatusBadge status={apt.status} />
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                          <SourceBadge source={apt.source} />
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {new Date(apt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700 truncate">
                          {apt.purpose}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p>No appointments today</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right - Appointments List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b-2 border-blue-100 p-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedDate 
                      ? `Appointments on ${new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                      : "All Appointments"
                    }
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Showing {appointments.length} appointment(s) • Sorted by creation date (newest first)
                  </p>
                </div>

                <div className="p-6">
                  {/* Search & Filters */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex-1 min-w-64 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search patient name..."
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          setPage(1);
                        }}
                        className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => {
                        setFilterStatus(e.target.value as any);
                        setPage(1);
                      }}
                      className="px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium"
                    >
                      <option value="All">All Status</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="no-show">No Show</option>
                      <option value="rescheduled">Rescheduled</option>
                    </select>
                    <select
                      value={filterSource}
                      onChange={(e) => {
                        setFilterSource(e.target.value as any);
                        setPage(1);
                      }}
                      className="px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium"
                    >
                      <option value="All">All Sources</option>
                      <option value="millis_ai_auto">AI Auto-Created</option>
                      <option value="manual">Manual Entry</option>
                      <option value="web">Web Booking</option>
                      <option value="api">API Created</option>
                    </select>
                    <button
                      onClick={() => fetchAppointments()}
                      className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Appointments List */}
                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {appointments.length > 0 ? (
                      appointments.map(apt => {
                        const recentInfo = isRecentlyCreated(apt.createdAt);
                        
                        return (
                          <div
                            key={apt._id}
                            className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-md transition cursor-pointer"
                            onClick={() => setSelectedAppointment(apt)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="bg-blue-100 p-2 rounded-lg">
                                    <User className="w-5 h-5 text-blue-600" />
                                  </div>
                                  <div>
                                    <div className="font-bold text-lg text-gray-900">{apt.name}</div>
                                    <div className="text-sm text-gray-500 flex items-center gap-1">
                                      <Phone className="w-3 h-3" />
                                      {apt.phone}
                                    </div>
                                  </div>
                                </div>
                                <div className="ml-12 space-y-2">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <SourceBadge source={apt.source} />
                                    {/* ✅ Add Recently Created Badge */}
                                    {recentInfo.isRecent && (
                                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${recentInfo.className}`}>
                                        🆕 {recentInfo.label}
                                      </span>
                                    )}
                                    {apt.metadata?.confidence_score && (
                                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                        {Math.round(apt.metadata.confidence_score * 100)}% confidence
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1.5">
                                      <Calendar className="w-4 h-4 text-blue-500" />
                                      {new Date(apt.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <Clock className="w-4 h-4 text-blue-500" />
                                      {apt.time || new Date(apt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-sm text-gray-700">
                                    <FileText className="w-4 h-4 text-blue-500" />
                                    {apt.purpose}
                                  </div>
                                  {/* ✅ Add Creation Timestamp */}
                                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    Created: {new Date(apt.createdAt).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <StatusBadge status={apt.status} />
                                {apt.callId && (
                                  <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                                    <Phone className="w-3 h-3" />
                                    Linked Call
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-3" />
                        <p className="text-lg font-medium">
                          {selectedDate ? "No appointments on this date" : "No appointments found"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          {pagination && pagination.total_pages > 1 && !selectedDate && (
            <div className="flex justify-between items-center bg-white rounded-xl shadow-sm p-4">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:bg-gray-300 hover:bg-blue-700 transition font-semibold"
              >
                Previous
              </button>
              <span className="text-gray-700 font-medium">
                Page {page} of {pagination.total_pages}
              </span>
              <button
                onClick={() => setPage(Math.min(pagination.total_pages, page + 1))}
                disabled={page === pagination.total_pages}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:bg-gray-300 hover:bg-blue-700 transition font-semibold"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* APPOINTMENT MODAL */}
        {selectedAppointment && (
          <AppointmentModal
            apt={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
            onUpdate={updateAppointmentStatus}
          />
        )}

        {/* AI PROMPT MODAL */}
        {showPromptModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">AI Analysis Settings</h2>
                  <p className="text-purple-100 text-sm mt-1">Customize how Millis AI analyzes calls for appointments</p>
                </div>
                <button 
                  onClick={() => setShowPromptModal(false)} 
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">How it works:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Calls are automatically transcribed by Millis AI</li>
                    <li>• The transcription is analyzed using your custom prompt</li>
                    <li>• If an appointment is detected, it's automatically created</li>
                    <li>• Email notifications are sent to the doctor</li>
                  </ul>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    AI Analysis Prompt Template
                  </label>
                  <textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full h-96 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 font-mono text-sm"
                    placeholder="Enter your custom AI prompt..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    The AI will use this prompt to analyze call transcriptions and extract appointment details.
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <button
                    onClick={resetPrompt}
                    className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition"
                  >
                    Reset to Default
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowPromptModal(false)}
                      className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveAiPrompt}
                      className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition shadow-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// --- Appointment Modal Component ---
// Updated AppointmentModal Component with Doctor Name Display

function AppointmentModal({ apt, onClose, onUpdate }: {
  apt: Appointment;
  onClose: () => void;
  onUpdate: (id: string, newStatus: Appointment['status']) => void;
}) {
  const color = statusColors[apt.status] || "gray";

  const headerClass = `bg-gradient-to-r ${
    color === 'green' ? 'from-green-600 to-green-500' : 
    color === 'yellow' ? 'from-yellow-600 to-yellow-500' :
    color === 'blue' ? 'from-blue-600 to-blue-500' :
    color === 'red' ? 'from-red-600 to-red-500' :
    color === 'purple' ? 'from-purple-600 to-purple-500' :
    'from-gray-600 to-gray-500'
  } p-6 flex justify-between items-center`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all">
        <div className={headerClass}>
          <div>
            <h2 className="text-2xl font-bold text-white">Appointment Details</h2>
            {apt.source === 'millis_ai_auto' && (
              <div className="flex items-center gap-2 mt-2 bg-white/20 px-3 py-1 rounded-full w-fit">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Auto-Created by AI</span>
              </div>
            )}
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* AI Metadata (if auto-created) */}
          {apt.source === 'millis_ai_auto' && apt.metadata && (
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
              <h3 className="text-lg font-bold mb-3 text-purple-900 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                AI Analysis Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {apt.metadata.confidence_score && (
                  <div>
                    <p className="text-purple-700 font-medium">Confidence Score</p>
                    <p className="text-purple-900 font-bold text-lg">
                      {Math.round(apt.metadata.confidence_score * 100)}%
                    </p>
                  </div>
                )}
                {apt.metadata.doctor_name && (
                  <div>
                    <p className="text-purple-700 font-medium">Doctor Requested</p>
                    <p className="text-purple-900 font-bold">{apt.metadata.doctor_name}</p>
                  </div>
                )}
                {apt.metadata.agent_name && (
                  <div>
                    <p className="text-purple-700 font-medium">AI Agent</p>
                    <p className="text-purple-900 font-bold">{apt.metadata.agent_name}</p>
                  </div>
                )}
                {apt.metadata.call_duration && (
                  <div>
                    <p className="text-purple-700 font-medium">Call Duration</p>
                    <p className="text-purple-900 font-bold">{Math.floor(apt.metadata.call_duration / 60)} min</p>
                  </div>
                )}
                {apt.metadata.call_direction && (
                  <div>
                    <p className="text-purple-700 font-medium">Call Type</p>
                    <p className="text-purple-900 font-bold capitalize">{apt.metadata.call_direction}</p>
                  </div>
                )}
                {apt.callId && (
                  <div className="col-span-2">
                    <p className="text-purple-700 font-medium">Linked Call ID</p>
                    <p className="text-purple-900 font-mono text-xs">{apt.callId}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Patient Info */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-xl border-2 border-blue-100">
            <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Patient Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-medium">Name</p>
                <p className="text-lg font-bold text-gray-900">{apt.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Phone</p>
                <p className="text-lg font-bold text-gray-900">{apt.phone}</p>
              </div>
              {apt.email && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-lg font-bold text-gray-900">{apt.email}</p>
                </div>
              )}
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-xl border-2 border-green-100">
            <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Appointment Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {apt.metadata?.doctor_name && (
                <div className="col-span-2 bg-green-100 border border-green-300 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Doctor Requested
                  </p>
                  <p className="text-xl font-bold text-green-900 mt-1">{apt.metadata.doctor_name}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600 font-medium">Date</p>
                <p className="text-lg font-bold text-gray-900">{new Date(apt.date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Time</p>
                <p className="text-lg font-bold text-gray-900">{apt.time}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600 font-medium">Purpose</p>
                <p className="text-lg font-bold text-gray-900">{apt.purpose}</p>
              </div>
              {apt.notes && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 font-medium">Notes</p>
                  <p className="text-base text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">{apt.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Transcription Preview */}
          {apt.transcription && (
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" />
                Call Transcription
              </h3>
              <div className="text-sm text-gray-700 max-h-40 overflow-y-auto bg-white p-3 rounded border border-gray-200">
                {typeof apt.transcription === 'string' 
                  ? apt.transcription 
                  : JSON.stringify(apt.transcription, null, 2)}
              </div>
            </div>
          )}

          {/* Status and Actions */}
          <div className="bg-white p-5 rounded-xl border-2 border-gray-200 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="text-lg font-bold text-gray-900">Current Status:</h3>
              <StatusBadge status={apt.status} />
            </div>

            {/* Status Update Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                onClick={() => onUpdate(apt._id, "scheduled")}
                disabled={apt.status === "scheduled"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-600"
              >
                Schedule
              </button>
              <button
                onClick={() => onUpdate(apt._id, "confirmed")}
                disabled={apt.status === "confirmed"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-green-500 text-white hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={() => onUpdate(apt._id, "completed")}
                disabled={apt.status === "completed"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-purple-500 text-white hover:bg-purple-600"
              >
                Complete
              </button>
              <button
                onClick={() => onUpdate(apt._id, "rescheduled")}
                disabled={apt.status === "rescheduled"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Reschedule
              </button>
              <button
                onClick={() => onUpdate(apt._id, "no-show")}
                disabled={apt.status === "no-show"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-gray-500 text-white hover:bg-gray-600"
              >
                No Show
              </button>
              <button
                onClick={() => onUpdate(apt._id, "cancelled")}
                disabled={apt.status === "cancelled"}
                className="px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>

            {/* Notification Note */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-500 mt-0.5" />
                Confirming this appointment will automatically send an email notification to the doctor.
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="text-xs text-gray-500 flex justify-between border-t pt-3">
            <span>Created: {new Date(apt.createdAt).toLocaleString()}</span>
            <span>Updated: {new Date(apt.updatedAt).toLocaleString()}</span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}