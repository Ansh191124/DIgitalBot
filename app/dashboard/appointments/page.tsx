"use client";
import Sidebar from "@/components/Sidebar";
import { AlertCircle, Calendar, ChevronLeft, ChevronRight, Clock, FileText, Mail, RefreshCw, Search, Settings, User, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface Appointment {
  _id: string;
  id: string;
  client_name: string;
  phone: string;
  email?: string;
  reason: string;
  status: "Confirmed" | "Pending" | "Rescheduled" | "Cancelled";
  date: string;
  time: string;
  insurance: string;
  duration_seconds: number;
  priority?: "High Priority";
  call_sid?: string;
  created_at: string;
  updated_at: string;
  notes?: string;
}

type AppointmentStats = {
  total: number;
  confirmed: number;
  pending: number;
  rescheduled: number;
  cancelled: number;
  today: number;
  high_priority: number;
};

interface PaginationInfo {
  current_page: number;
  total_pages: number;
  total_appointments: number;
  per_page: number;
}

const API_BASE_URL =process.env.NEXT_PUBLIC_API_URL || "https://digital-api-tef8.onrender.com";

// Runtime helper to get Authorization headers (safe for client-side only)
function getAuthHeaders() {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  try {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }
  } catch (e) {
    // ignore localStorage errors
  }
  return headers;
}

// --- Utility Components for Styling ---

const statusStyles: Record<Appointment['status'], string> = {
  Confirmed: "bg-green-100 text-green-700 border-green-300",
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Rescheduled: "bg-blue-100 text-blue-700 border-blue-300",
  Cancelled: "bg-red-100 text-red-700 border-red-300",
};

const statusColors: Record<Appointment['status'], string> = {
  Confirmed: "green",
  Pending: "yellow",
  Rescheduled: "blue",
  Cancelled: "red",
};

function StatusBadge({ status }: { status: Appointment['status'] }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

// --- Main Component ---

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [calendarAppointments, setCalendarAppointments] = useState<Appointment[]>([]); 
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [stats, setStats] = useState<AppointmentStats>({
    total: 0, confirmed: 0, pending: 0, rescheduled: 0, cancelled: 0, today: 0, high_priority: 0,
  });

  const [filterStatus, setFilterStatus] = useState<"All" | Appointment['status']>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [showPromptModal, setShowPromptModal] = useState(false);
  // WebSocket state for real-time updates
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [wsRetryCount, setWsRetryCount] = useState(0);

  // WebSocket connection setup
  useEffect(() => {
    const setupWebSocket = () => {
      try {
        const wsUrl = `${API_BASE_URL.replace('http', 'ws')}/ws`;
        const ws = new WebSocket(wsUrl);
        
        ws.onopen = () => {
          console.log('✅ WebSocket connected');
          setWsRetryCount(0); // Reset retry count on successful connection
        };
        
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.type === 'new_appointment') {
            console.log('📅 New appointment received:', data);
            fetchAppointments();
            fetchCalendarAppointments(currentMonth);
            setLastUpdate(new Date());
          }
        };
        
        ws.onerror = (error) => {
          console.error('❌ WebSocket error:', error);
        };
        
        ws.onclose = () => {
          console.log('⚠️ WebSocket disconnected');
          // Attempt to reconnect with exponential backoff
          const retryDelay = Math.min(1000 * Math.pow(2, wsRetryCount), 30000);
          setTimeout(() => {
            setWsRetryCount(prev => prev + 1);
            setupWebSocket();
          }, retryDelay);
        };
        
        setSocket(ws);
        
        return () => {
          ws.close();
        };
      } catch (error) {
        console.error('Failed to setup WebSocket:', error);
        // Retry setup after delay
        setTimeout(setupWebSocket, 5000);
      }
    };

    setupWebSocket();
  }, [currentMonth, wsRetryCount]);

  const [aiPrompt, setAiPrompt] = useState(`Analyze this call and extract:
1. Is this a potential sales lead? (true/false)
2. Customer name (if mentioned)
3. Customer phone number (if different from caller)
4. Product or service they're interested in
5. Specific customer needs or requirements mentioned
6. Confidence score (0-1) - how confident you are this is a qualified lead

Please respond in JSON format with these exact keys:
{
  "is_lead": boolean,
  "customer_name": "string",
  "phone_number": "string",
  "product_interest": "string",
  "customer_need": "string",
  "confidence_score": number,
  "is_appointment": boolean
}

Transcription: {TRANSCRIPTION_PLACEHOLDER}`);

  // 1. Function to fetch the paginated list and stats
  const fetchAppointments = useCallback(async () => {
    let retries = 3;
    while (retries > 0) {
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
      if (searchTerm) {
        params.append("client_name", searchTerm);
      }
      if (selectedDate) {
        params.append("date", selectedDate);
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
      // Normalize appointments so frontend always has `id` (fallback to Mongo `_id`)
      const normalized = (data.appointments || []).map((a: any) => ({ ...a, id: a.id || a._id }));
      setAppointments(normalized);
      setStats(data.stats || {
        total: 0, confirmed: 0, pending: 0, rescheduled: 0, cancelled: 0, today: 0, high_priority: 0,
      });
      setPagination(data.pagination || null);
    } catch (err) {
        retries--;
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch appointments";
        if (retries === 0) {
          console.error('Failed to fetch appointments after 3 retries:', errorMessage);
          setError(`${errorMessage}. Please refresh the page or try again later.`);
          setAppointments([]);
        } else {
          console.log(`Retrying fetch... ${retries} attempts remaining`);
          // Wait 2 seconds before retrying
          await new Promise(resolve => setTimeout(resolve, 2000));
          continue;
        }
      }
      break; // Success, exit retry loop
    }
    setLoading(false);
  }, [page, filterStatus, searchTerm, selectedDate]);

  // 2. Function to fetch all appointments for the calendar month (unpaginated)
  const fetchCalendarAppointments = useCallback(async (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    try {
      const params = new URLSearchParams({
        year: year.toString(),
        month: month.toString(),
        view: 'month_summary' 
      });
      
  const url = `${API_BASE_URL}/api/appointments/calendar?${params.toString()}`;
  const response = await fetch(url, { headers: getAuthHeaders() });
      
      if (!response.ok) {
        throw new Error("Failed to fetch calendar data");
      }
      
  const data = await response.json();
  const normalized = (data.appointments || []).map((a: any) => ({ ...a, id: a.id || a._id }));
  setCalendarAppointments(normalized);
    } catch (err) {
      console.error("Calendar fetch error:", err);
    }
  }, []);

  /**
   * AI LOGIC: Frontend triggers status update. Backend sends emails when status is "Confirmed".
   */
  const updateAppointmentStatus = async (appointmentId: string | undefined, newStatus: Appointment['status']) => {
    if (!appointmentId) {
      setError("Invalid appointment id - update cancelled");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments/${appointmentId}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update");
      
      let notificationMessage = `Appointment status set to ${newStatus.toLowerCase()} successfully!`;
      
      // AI Logic: When confirmed, the backend handles sending the Doctor/Staff alert AND Patient confirmation.
      if (newStatus === "Confirmed") {
        notificationMessage = `Appointment confirmed! System-wide confirmation and staff alert emails were sent automatically by the server.`;
      }
      
      setSuccessMessage(notificationMessage);
      setTimeout(() => setSuccessMessage(null), 7000);
      
      setError(null);
      setSelectedAppointment(null); // Close modal
      await fetchAppointments();
      await fetchCalendarAppointments(currentMonth); // Refresh calendar
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update appointment");
    }
  };

  // Initial data fetch and setup polling
  useEffect(() => {
    const initialize = async () => {
      await fetchAppointments();
      await fetchCalendarAppointments(currentMonth);
    };

    initialize();

    // Fallback polling mechanism in case WebSocket fails
    const timer = setInterval(() => {
      console.log('🔄 Polling for updates...');
      if (!socket || socket.readyState !== WebSocket.OPEN) {
        console.log('📡 WebSocket not connected, using polling fallback');
        fetchAppointments();
        fetchCalendarAppointments(currentMonth);
      }
    }, 30000);

    return () => clearInterval(timer);
  }, [fetchAppointments, fetchCalendarAppointments, currentMonth, socket]);

  // Initial data fetch
  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  // Fetch calendar data when month changes
  useEffect(() => {
    fetchCalendarAppointments(currentMonth);
  }, [currentMonth, fetchCalendarAppointments]);

  // Load AI prompt from backend on mount
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
        setSuccessMessage("AI prompt saved successfully! It will be used for all future call analysis.");
        setTimeout(() => setSuccessMessage(null), 5000);
        setShowPromptModal(false);
      } else {
        setError("Failed to save prompt. Please try again.");
      }
    } catch (error) {
      setError("Failed to save prompt. Please check your connection.");
    }
  };

  const resetPrompt = () => {
    const defaultPrompt = `Analyze this call and extract:
1. Is this a potential sales lead? (true/false)
2. Customer name (if mentioned)
3. Customer phone number (if different from caller)
4. Product or service they're interested in
5. Specific customer needs or requirements mentioned
6. Confidence score (0-1) - how confident you are this is a qualified lead

Please respond in JSON format with these exact keys:
{
  "is_lead": boolean,
  "customer_name": "string",
  "phone_number": "string",
  "product_interest": "string",
  "customer_need": "string",
  "confidence_score": number,
  "is_appointment": boolean
}

Transcription: {TRANSCRIPTION_PLACEHOLDER}`;
    setAiPrompt(defaultPrompt);
  };

  const todayAppointments = useMemo(() => appointments.filter(apt => 
    new Date(apt.date).toDateString() === new Date().toDateString()
  ), [appointments]);

  const getAppointmentsForDate = useCallback((date: Date) => {
    return calendarAppointments.filter(apt => {
      // Create date objects without time component for accurate comparison
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

    // Fill in leading empty days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg"></div>);
    }

    // Render days of the month
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
                  key={apt.id}
                  className={`text-xs px-1.5 py-0.5 rounded truncate ${
                    isSelected 
                      ? "bg-white/20 text-white" 
                      : statusStyles[apt.status]
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAppointment(apt);
                  }}
                >
                  {apt.client_name}
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

  if (loading && appointments.length === 0) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Sidebar />
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
      <Sidebar />
      <main className="flex-1 ml-60 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Appointment Management</h1>
                <p className="text-blue-100 mt-2 text-lg">Manage and track all your appointments</p>
              </div>
              <button
                onClick={() => setShowPromptModal(true)}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition backdrop-blur-sm"
              >
                <Settings className="w-5 h-5" />
                <span className="font-semibold">AI Prompt</span>
              </button>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
              <Mail className="w-5 h-5" />
              {successMessage}
            </div>
          )}
          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total */}
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
            {/* Confirmed */}
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-green-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Confirmed</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.confirmed}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl text-green-600">✓</span>
                </div>
              </div>
            </div>
            {/* Pending */}
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-yellow-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Pending</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.pending}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
            {/* High Priority */}
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-red-500 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">High Priority</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.high_priority}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Calendar & Today's */}
            <div className="lg:col-span-1 space-y-4">
              {/* Mini Calendar */}
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
                        Clear Date Filter
                      </button>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={handlePrevMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition">
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition">
                      <ChevronRight className="w-5 h-5 text-gray-600" />
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
                        key={apt.id}
                        className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition"
                        onClick={() => setSelectedAppointment(apt)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-gray-900">{apt.client_name}</div>
                          <StatusBadge status={apt.status} />
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {new Date(apt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700 truncate">
                          {apt.reason}
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

            {/* Right Column - Appointments List */}
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
                    Showing {appointments.length} appointment(s)
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
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Rescheduled">Rescheduled</option>
                      <option value="Cancelled">Cancelled</option>
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
                      appointments.map(apt => (
                        <div
                          key={apt.id}
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
                                  <div className="font-bold text-lg text-gray-900">{apt.client_name}</div>
                                  <div className="text-sm text-gray-500">{apt.phone}</div>
                                </div>
                              </div>
                              <div className="ml-12 space-y-1">
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    {new Date(apt.date).toLocaleDateString()}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-blue-500" />
                                    {new Date(apt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-sm text-gray-700">
                                  <FileText className="w-4 h-4 text-blue-500" />
                                  {apt.reason}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <StatusBadge status={apt.status} />
                              {apt.priority && (
                                <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                                  <AlertCircle className="w-3 h-3" />
                                  High
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
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

        {/* AI PROMPT CUSTOMIZATION MODAL */}
        {showPromptModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Customize AI Analysis Prompt</h2>
                <button 
                  onClick={() => setShowPromptModal(false)} 
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
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
                    Use <code className="bg-gray-100 px-2 py-1 rounded">{"{TRANSCRIPTION_PLACEHOLDER}"}</code> where you want the call transcription to be inserted.
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

function AppointmentModal({ apt, onClose, onUpdate }: {
  apt: Appointment;
  onClose: () => void;
  onUpdate: (id: string, newStatus: Appointment['status']) => void;
}) {
  const color = statusColors[apt.status] || "gray";

  const headerClass = `bg-gradient-to-r ${color === 'green' ? 'from-green-600 to-green-500' : 
                                       color === 'yellow' ? 'from-yellow-600 to-yellow-500' :
                                       color === 'blue' ? 'from-blue-600 to-blue-500' :
                                       color === 'red' ? 'from-red-600 to-red-500' : 
                                       'from-gray-600 to-gray-500'} p-6 flex justify-between items-center`;
                                       
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        <div className={headerClass}>
          <h2 className="text-2xl font-bold text-white">Appointment Details</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]"> 
          {/* Patient Info */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-xl border-2 border-blue-100">
            <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Patient Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-medium">Name</p>
                <p className="text-lg font-bold text-gray-900">{apt.client_name}</p>
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
              <div className="col-span-2">
                <p className="text-sm text-gray-600 font-medium">Insurance</p>
                <p className="text-lg font-bold text-gray-900">{apt.insurance || "Not Specified"}</p>
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-xl border-2 border-purple-100">
            <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Booking Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-medium">Date</p>
                <p className="text-lg font-bold text-gray-900">{new Date(apt.date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Time</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(apt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600 font-medium">Reason for Visit</p>
                <p className="text-lg font-bold text-gray-900">{apt.reason}</p>
              </div>
              {apt.notes && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 font-medium">Internal Notes</p>
                  <p className="text-base text-gray-800 italic bg-gray-50 p-3 rounded-lg border border-gray-200">{apt.notes}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Status and Actions */}
          <div className="bg-white p-5 rounded-xl border-2 border-gray-200 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                Current Status:
              </h3>
              <StatusBadge status={apt.status} />
            </div>

            {/* Status Update Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => onUpdate(apt.id, "Confirmed")}
                disabled={apt.status === "Confirmed"}
                className="w-full px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-green-500 text-white hover:bg-green-600 shadow-md"
              >
                Confirm
              </button>
              <button
                onClick={() => onUpdate(apt.id, "Pending")}
                disabled={apt.status === "Pending"}
                className="w-full px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-yellow-500 text-white hover:bg-yellow-600 shadow-md"
              >
                Mark Pending
              </button>
              <button
                onClick={() => onUpdate(apt.id, "Rescheduled")}
                disabled={apt.status === "Rescheduled"}
                className="w-full px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-600 shadow-md"
              >
                Reschedule
              </button>
              <button
                onClick={() => onUpdate(apt.id, "Cancelled")}
                disabled={apt.status === "Cancelled"}
                className="w-full px-3 py-2 text-sm font-semibold rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-red-500 text-white hover:bg-red-600 shadow-md"
              >
                Cancel
              </button>
            </div>

            {/* Notification Note */}
            <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-500 mt-0.5" />
                    Changing the status to <strong>Confirmed</strong> will automatically trigger email notifications for the patient and staff/doctor via the backend system.
                </p>
            </div>
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