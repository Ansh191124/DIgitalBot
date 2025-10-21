"use client";
import Sidebar from "@/components/Sidebar";
import { AlertCircle, Calendar, CheckCircle, ChevronLeft, ChevronRight, Clock, FileText, Mail, Menu, Phone, RefreshCw, Search, Settings, User, X, Zap } from "lucide-react";
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

interface Call {
  Sid: string;
  From: string;
  To: string;
  Status: string;
  StartTime: string;
  Duration: number;
  transcription?: string;
  is_appointment?: boolean;
  appointment_details?: any;
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

const API_BASE_URL = "http://localhost:4000";

// Token management - align with backend and other frontend code (use localStorage key "token")
function setAuthToken(token: string) {
  try {
    localStorage.setItem("token", token);
  } catch (e) {
    // ignore (safety for non-browser envs)
  }
}

function getAuthHeaders() {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  try {
    const t = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (t) headers["Authorization"] = `Bearer ${t}`;
  } catch (e) {}
  return headers;
}

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

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [calendarAppointments, setCalendarAppointments] = useState<Appointment[]>([]);
  const [calls, setCalls] = useState<Call[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [converting, setConverting] = useState(false);
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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tokenInput, setTokenInput] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : ""
  );
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"appointments" | "calls">("appointments");

  const [aiPrompt, setAiPrompt] = useState(`आप एक क्लिनिक अपॉइंटमेंट बुकिंग कॉल का विश्लेषण कर रहे हैं।

कार्य: यह निर्धारित करें कि क्या मरीज डॉक्टर के साथ अपॉइंटमेंट का अनुरोध कर रहा है।

इन बातों पर ध्यान दें:
- मरीज अपॉइंटमेंट मांग रहा है
- डॉक्टर का नाम बताया गया है
- तारीख/समय की प्राथमिकताएं
- मरीज की पुष्टि
- संपर्क विवरण (नाम, फोन)

केवल इस JSON FORMAT में जवाब दें (कोई अतिरिक्त टेक्स्ट नहीं):
{
  "is_appointment": true/false,
  "customer_name": "मरीज का नाम या खाली स्ट्रिंग",
  "phone_number": "10-अंक नंबर या खाली स्ट्रिंग",
  "doctor_name": "अगर बताया गया हो तो डॉक्टर का नाम",
  "appointment_date": "अनुरोधित तारीख/समय या खाली स्ट्रिंग",
  "appointment_time": "अनुरोधित समय या खाली स्ट्रिंग",
  "is_confirmed": true/false,
  "confidence_score": 0.0-1.0,
  "reason_for_visit": "संक्षिप्त कारण",
  "notes": "कोई अन्य विवरण"
}`);

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

      if (response.status === 401) {
        setError("⚠️ Session expired. Please log in again.");
        setAppointments([]);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      const normalized = (data.appointments || []).map((a: any) => ({ ...a, id: a.id || a._id }));
      setAppointments(normalized);
      setStats(data.stats || {
        total: 0, confirmed: 0, pending: 0, rescheduled: 0, cancelled: 0, today: 0, high_priority: 0,
      });
      setPagination(data.pagination || null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch appointments";
      setError(`${errorMessage}. Retrying...`);
      setAppointments([]);
    }
    setLoading(false);
  }, [page, filterStatus, searchTerm, selectedDate]);


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

  const fetchCalls = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/calls`, {
        headers: getAuthHeaders(),
      });

      if (response.status === 401) {
        console.warn("Auth token invalid");
        return;
      }

      if (!response.ok) throw new Error("Failed to fetch calls");

      const data = await response.json();
      setCalls(data.calls || []);
    } catch (err) {
      console.error("Failed to fetch calls:", err);
    }
  }, []);

  const analyzeCallForAppointment = async (call: Call) => {
    if (!call.transcription) {
      setError("No transcription available for this call");
      return;
    }

    setAnalyzing(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/analyze-for-appointment`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          callSid: call.Sid,
          transcription: call.transcription,
        }),
      });

      if (!response.ok) throw new Error("Analysis failed");

      const analysis = await response.json();

      setCalls(prevCalls =>
        prevCalls.map(c =>
          c.Sid === call.Sid
            ? { ...c, is_appointment: analysis.is_appointment, appointment_details: analysis }
            : c
        )
      );

      setSuccessMessage(
        analysis.is_appointment
          ? `✅ Appointment detected! Confidence: ${(analysis.confidence_score * 100).toFixed(0)}%`
          : "❌ This call is not an appointment request"
      );

      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (err) {
      setError("Failed to analyze call");
    } finally {
      setAnalyzing(false);
    }
  };

  const convertCallToAppointment = async (call: Call) => {
    if (!call.is_appointment) {
      setError("Please analyze the call first to confirm it's an appointment");
      return;
    }

    setConverting(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/calls/${call.Sid}/convert-to-appointment`, {
        method: "POST",
        headers: getAuthHeaders(),
      });

      if (!response.ok) throw new Error("Conversion failed");

      setSuccessMessage("✅ Appointment created successfully!");
      setTimeout(() => setSuccessMessage(null), 5000);

      setSelectedCall(null);
      await fetchAppointments();
      await fetchCalendarAppointments(currentMonth);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to convert call");
    } finally {
      setConverting(false);
    }
  };

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

      let notificationMessage = `Appointment status updated to ${newStatus.toLowerCase()}!`;

      if (newStatus === "Confirmed") {
        notificationMessage = `✅ Appointment confirmed! Email notifications sent automatically.`;
      }

      setSuccessMessage(notificationMessage);
      setTimeout(() => setSuccessMessage(null), 7000);

      setError(null);
      setSelectedAppointment(null);
      await fetchAppointments();
      await fetchCalendarAppointments(currentMonth);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update appointment");
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchCalendarAppointments(currentMonth);
    fetchCalls();
  }, [fetchAppointments, fetchCalendarAppointments, currentMonth]);

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
    const defaultPrompt = `आप एक क्लिनिक अपॉइंटमेंट बुकिंग कॉल का विश्लेषण कर रहे हैं।

कार्य: यह निर्धारित करें कि क्या मरीज डॉक्टर के साथ अपॉइंटमेंट का अनुरोध कर रहा है।

इन बातों पर ध्यान दें:
- मरीज अपॉइंटमेंट मांग रहा है
- डॉक्टर का नाम बताया गया है
- तारीख/समय की प्राथमिकताएं
- मरीज की पुष्टि
- संपर्क विवरण (नाम, फोन)

केवल इस JSON FORMAT में जवाब दें (कोई अतिरिक्त टेक्स्ट नहीं):
{
  "is_appointment": true/false,
  "customer_name": "मरीज का नाम या खाली स्ट्रिंग",
  "phone_number": "10-अंक नंबर या खाली स्ट्रिंग",
  "doctor_name": "अगर बताया गया हो तो डॉक्टर का नाम",
  "appointment_date": "अनुरोधित तारीख/समय या खाली स्ट्रिंग",
  "appointment_time": "अनुरोधित समय या खाली स्ट्रिंग",
  "is_confirmed": true/false,
  "confidence_score": 0.0-1.0,
  "reason_for_visit": "संक्षिप्त कारण",
  "notes": "कोई अन्य विवरण"
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
          className={`h-24 p-2 rounded-lg cursor-pointer transition-all border-2 ${isSelected
            ? "bg-blue-500 border-blue-600 shadow-lg scale-105"
            : isToday
              ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400 shadow-md"
              : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"
            }`}
        >
          <div className={`text-sm font-bold mb-1 ${isSelected ? "text-white" : isToday ? "text-blue-700" : "text-gray-700"
            }`}>
            {day}
          </div>

          {dateAppts.length > 0 && (
            <div className="space-y-1">
              <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-blue-600"}`}>
                {dateAppts.length} {dateAppts.length === 1 ? 'apt' : 'apts'}
              </div>
              {dateAppts.slice(0, 2).map((apt) => (
                <div
                  key={apt.id}
                  className={`text-xs px-1.5 py-0.5 rounded truncate ${isSelected
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
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <main className="flex-1 p-6">
          <div className="text-center mt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading appointments...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Mobile menu toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-white rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5 text-slate-700" />
      </button>

      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out w-60`}>
        <Sidebar />
      </div>

      <main className="w-full md:ml-60 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-3">
                  <Calendar className="w-10 h-10" />
                  Appointment Management
                </h1>
                <p className="text-blue-100 mt-2 text-lg">Manage appointments and analyze calls</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition backdrop-blur-sm border border-white/30"
                >
                  <User className="w-5 h-5" />
                  <span className="font-semibold">Auth</span>
                </button>
                <button
                  onClick={() => setShowPromptModal(true)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition backdrop-blur-sm border border-white/30"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-semibold">AI Prompt</span>
                </button>
              </div>
            </div>
          </div>

          {/* Success/Error Messages */}
          {successMessage && (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
              <CheckCircle className="w-5 h-5" />
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition">
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
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Confirmed</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.confirmed}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-lg transition">
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
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-lg transition">
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

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-md p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${activeTab === "appointments"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              📅 Appointments ({appointments.length})
            </button>
            <button
              onClick={() => setActiveTab("calls")}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${activeTab === "calls"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              📞 Analyze Calls ({calls.filter(c => c.is_appointment).length})
            </button>
          </div>

          {/* Main Content */}
          {activeTab === "appointments" ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar & Today's */}
              <div className="lg:col-span-1 space-y-4">
                {/* Mini Calendar */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-purple-500">
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
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
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

              {/* Appointments List */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
          ) : (
            /* Calls Analysis Tab */
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Analyze Calls for Appointments</h2>
                  <p className="text-sm text-gray-600 mt-1">Review and convert appointment calls</p>
                </div>
                <button
                  onClick={fetchCalls}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Calls
                </button>
              </div>

              <div className="space-y-3 max-h-[700px] overflow-y-auto">
                {calls.map(call => (
                  <div
                    key={call.Sid}
                    className={`p-5 rounded-xl border-2 transition cursor-pointer ${call.is_appointment
                      ? "bg-gradient-to-r from-green-50 to-white border-green-300 hover:border-green-400"
                      : "bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:border-purple-300"
                      }`}
                    onClick={() => setSelectedCall(call)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${call.is_appointment ? "bg-green-100" : "bg-purple-100"
                            }`}>
                            <Phone className={`w-5 h-5 ${call.is_appointment ? "text-green-600" : "text-purple-600"
                              }`} />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              {call.From} → {call.To}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(call.StartTime).toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {call.is_appointment && call.appointment_details && (
                          <div className="ml-12 bg-green-50 p-3 rounded-lg border border-green-200">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-600">Patient:</span>
                                <span className="ml-2 font-semibold text-gray-900">
                                  {call.appointment_details.customer_name || "N/A"}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">Phone:</span>
                                <span className="ml-2 font-semibold text-gray-900">
                                  {call.appointment_details.phone_number || "N/A"}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">Date:</span>
                                <span className="ml-2 font-semibold text-gray-900">
                                  {call.appointment_details.appointment_date || "N/A"}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">Confidence:</span>
                                <span className="ml-2 font-semibold text-green-700">
                                  {(call.appointment_details.confidence_score * 100).toFixed(0)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        {call.is_appointment ? (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold border-2 border-green-300">
                            <CheckCircle className="w-4 h-4" />
                            Appointment
                          </div>
                        ) : (
                          <div className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold border-2 border-gray-300">
                            Not Analyzed
                          </div>
                        )}
                        <div className="text-xs text-gray-500 text-right">
                          Duration: {call.Duration}s
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {calls.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Phone className="w-16 h-16 mx-auto text-gray-300 mb-3" />
                    <p className="text-lg font-medium">No calls found</p>
                    <p className="text-sm mt-1">Calls will appear here for analysis</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.total_pages > 1 && !selectedDate && activeTab === "appointments" && (
            <div className="flex justify-between items-center bg-white rounded-xl shadow-md p-4">
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

        {/* CALL ANALYSIS MODAL */}
        {selectedCall && (
          <CallAnalysisModal
            call={selectedCall}
            analyzing={analyzing}
            converting={converting}
            onClose={() => setSelectedCall(null)}
            onAnalyze={analyzeCallForAppointment}
            onConvert={convertCallToAppointment}
          />
        )}

        {/* AUTH MODAL */}
        {showAuthModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Authentication</h2>
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    API Token
                  </label>
                  <input
                    type="password"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="Enter your API token"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    This token is stored locally and sent with API requests.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Current:</strong> {(typeof window !== "undefined" ? (localStorage.getItem("token") || "").substring(0, 10) : "")}...
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowAuthModal(false)}
                    className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setAuthToken(tokenInput);
                      setSuccessMessage("Token updated successfully!");
                      setTimeout(() => setSuccessMessage(null), 3000);
                      setShowAuthModal(false);
                      fetchAppointments();
                      fetchCalls();
                    }}
                    className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
                  >
                    Save Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
                    AI Analysis Prompt Template (Hindi/English Mix)
                  </label>
                  <textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full h-96 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 font-mono text-sm"
                    placeholder="Enter your custom AI prompt..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    This prompt will be used to analyze calls for appointment detection. The AI will process transcriptions and extract appointment details.
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

          <div className="bg-white p-5 rounded-xl border-2 border-gray-200 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                Current Status:
              </h3>
              <StatusBadge status={apt.status} />
            </div>

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

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 flex items-start gap-2">
                <Mail className="w-4 h-4 text-purple-500 mt-0.5" />
                Changing status to <strong>Confirmed</strong> will automatically send email notifications to patient and staff.
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

function CallAnalysisModal({ call, analyzing, converting, onClose, onAnalyze, onConvert }: {
  call: Call;
  analyzing: boolean;
  converting: boolean;
  onClose: () => void;
  onAnalyze: (call: Call) => void;
  onConvert: (call: Call) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Call Analysis</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-xl border-2 border-purple-100">
            <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
              <Phone className="w-5 h-5 text-purple-600" />
              Call Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-medium">From</p>
                <p className="text-lg font-bold text-gray-900">{call.From}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">To</p>
                <p className="text-lg font-bold text-gray-900">{call.To}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Duration</p>
                <p className="text-lg font-bold text-gray-900">{call.Duration} seconds</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Time</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(call.StartTime).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {call.transcription && (
            <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-xl border-2 border-blue-100">
              <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Transcription
              </h3>
              <div className="bg-white p-4 rounded-lg border border-blue-200 max-h-48 overflow-y-auto">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{call.transcription}</p>
              </div>
            </div>
          )}

          {call.is_appointment && call.appointment_details && (
            <div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-xl border-2 border-green-200">
              <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                AI Analysis Results
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Patient Name</p>
                  <p className="text-lg font-bold text-gray-900">
                    {call.appointment_details.customer_name || "Not detected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone Number</p>
                  <p className="text-lg font-bold text-gray-900">
                    {call.appointment_details.phone_number || "Not detected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Appointment Date</p>
                  <p className="text-lg font-bold text-gray-900">
                    {call.appointment_details.appointment_date || "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Confidence Score</p>
                  <p className="text-lg font-bold text-green-700">
                    {(call.appointment_details.confidence_score * 100).toFixed(0)}%
                  </p>
                </div>
                {call.appointment_details.reason_for_visit && (
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600 font-medium">Reason for Visit</p>
                    <p className="text-lg font-bold text-gray-900">{call.appointment_details.reason_for_visit}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition"
          >
            Close
          </button>
          {!call.is_appointment && call.transcription && (
            <button
              onClick={() => onAnalyze(call)}
              disabled={analyzing}
              className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {analyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Analyze Call
                </>
              )}
            </button>
          )}
          {call.is_appointment && (
            <button
              onClick={() => onConvert(call)}
              disabled={converting}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {converting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Converting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Create Appointment
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
