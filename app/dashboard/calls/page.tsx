"use client";
import { useState, useEffect } from "react";
import { Phone, Search, Filter, Play, FileText, Brain, ChevronLeft, ChevronRight, Calendar, Clock, User, Users, PhoneCall, PhoneIncoming, PhoneOutgoing, CheckCircle, XCircle, AlertCircle, Loader2, BarChart3, PieChart as PieChartIcon, TrendingUp, TrendingDown, Activity, Zap, LineChart as LineChartIcon, Target, Award, Sparkles, Menu } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, ComposedChart, Scatter, ScatterChart, ZAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Sidebar from "@/components/Sidebar";

interface Call {
  Sid: string;
  From: string;
  To: string;
  Status: string;
  StartTime: string;
  EndTime: string;
  Duration: string;
  Direction: string;
  recordings: any[];
  transcription?: string;
  summary?: string;
}

export default function CallAnalytics() {
  const [calls, setCalls] = useState<Call[]>([]);
  const [allCalls, setAllCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(false);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [directionFilter, setDirectionFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [processing, setProcessing] = useState<Record<string, 'transcribing' | 'summarizing' | null>>({});
  const [visibleContent, setVisibleContent] = useState<Record<string, 'transcription' | 'summary' | null>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState("");

  const chartColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const fetchCalls = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchId) params.append("searchId", searchId);
      if (statusFilter) params.append("status", statusFilter);
      if (directionFilter) params.append("direction", directionFilter);
      if (startDate) params.append("startDate", startDate);
      if (endDate) params.append("endDate", endDate);
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      const res = await fetch(`https://digital-api-tef8.onrender.com/api/calls?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch calls: ${res.status}`);
      }
      
      const data = await res.json();
      setCalls(data.calls || []);
      setTotal(data.total || 0);
      
    } catch (err) {
      console.error("Error in fetchCalls:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCalls = async () => {
    setAnalyticsLoading(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      const res = await fetch(`https://digital-api-tef8.onrender.com/api/calls?limit=0`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch calls: ${res.status}`);
      }
      
      const data = await res.json();
      setAllCalls(data.calls || []);
    } catch (err) {
      console.error("Error in fetchCalls:", err);
    } finally {
      setAnalyticsLoading(false);
    }
  };

  useEffect(() => {
    fetchCalls();
    fetchAllCalls();
    
    const interval = setInterval(() => {
      fetchCalls();
      fetchAllCalls();
    }, 30000);
    return () => clearInterval(interval);
  }, [page, limit]);

  const handleToggleTranscription = async (call: Call) => {
    if (processing[call.Sid]) return;
    if (visibleContent[call.Sid] === 'transcription') {
      setVisibleContent(prev => ({ ...prev, [call.Sid]: null }));
      return;
    }
    if (call.transcription) {
      setVisibleContent(prev => ({ ...prev, [call.Sid]: 'transcription' }));
      return;
    }
    setProcessing(prev => ({ ...prev, [call.Sid]: 'transcribing' }));
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      const res = await fetch(`https://digital-api-tef8.onrender.com/api/transcribe/${call.Sid}`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      if (res.ok) {
        setCalls(prevCalls =>
          prevCalls.map(c =>
            c.Sid === call.Sid ? { ...c, transcription: data.text } : c
          )
        );
        setVisibleContent(prev => ({ ...prev, [call.Sid]: 'transcription' }));
      } else {
        alert(`Transcription failed: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to transcribe call.");
    } finally {
      setProcessing(prev => ({ ...prev, [call.Sid]: null }));
    }
  };

  const handleToggleSummarization = async (call: Call) => {
    if (processing[call.Sid]) return;
    if (visibleContent[call.Sid] === 'summary') {
      setVisibleContent(prev => ({ ...prev, [call.Sid]: null }));
      return;
    }
    if (call.summary) {
      setVisibleContent(prev => ({ ...prev, [call.Sid]: 'summary' }));
      return;
    }
    if (!call.transcription) {
      alert("Please transcribe the call first before summarizing.");
      return;
    }
    setProcessing(prev => ({ ...prev, [call.Sid]: 'summarizing' }));
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      const res = await fetch("https://digital-api-tef8.onrender.com/api/summarize", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: call.transcription }),
      });
      const data = await res.json();
      if (res.ok) {
        setCalls(prevCalls =>
          prevCalls.map(c =>
            c.Sid === call.Sid ? { ...c, summary: data.summary } : c
          )
        );
        setVisibleContent(prev => ({ ...prev, [call.Sid]: 'summary' }));
      } else {
        alert(`Summarization failed: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to summarize text.");
    } finally {
      setProcessing(prev => ({ ...prev, [call.Sid]: null }));
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshMessage("");
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      const res = await fetch("https://digital-api-tef8.onrender.com/api/calls/refresh", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ limit: 20 })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setRefreshMessage(data.message || "Data refreshed successfully!");
        await fetchCalls();
        await fetchAllCalls();
      } else {
        setRefreshMessage(data.error || "Failed to refresh data");
      }
    } catch (err) {
      console.error("Error refreshing data:", err);
      setRefreshMessage("Failed to refresh data");
    } finally {
      setRefreshing(false);
      setTimeout(() => setRefreshMessage(""), 5000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return <CheckCircle className="w-3 h-3" />;
      case 'failed': return <XCircle className="w-3 h-3" />;
      case 'busy': return <AlertCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const getDirectionIcon = (direction: string) => {
    return direction === 'inbound' ? <PhoneIncoming className="w-3 h-3" /> : <PhoneOutgoing className="w-3 h-3" />;
  };

  const getCallJourneyData = () => {
    const dailyData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      const dayCalls = allCalls.filter(call => new Date(call.StartTime).toDateString() === dateStr);
      
      dailyData.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        inbound: dayCalls.filter(c => c.Direction === 'inbound').length,
        outbound: dayCalls.filter(c => c.Direction === 'outbound').length,
        total: dayCalls.length
      });
    }
    return dailyData;
  };

  const getDurationPatternsData = () => {
    const patterns = [
      { range: 'Quick\n(0-30s)', min: 0, max: 30, count: 0, color: '#ef4444' },
      { range: 'Brief\n(30s-1m)', min: 30, max: 60, count: 0, color: '#f59e0b' },
      { range: 'Short\n(1-2m)', min: 60, max: 120, count: 0, color: '#fbbf24' },
      { range: 'Medium\n(2-5m)', min: 120, max: 300, count: 0, color: '#10b981' },
      { range: 'Long\n(5-10m)', min: 300, max: 600, count: 0, color: '#3b82f6' },
      { range: 'Extended\n(10m+)', min: 600, max: Infinity, count: 0, color: '#8b5cf6' }
    ];

    allCalls.forEach(call => {
      const duration = parseInt(call.Duration);
      const pattern = patterns.find(p => duration > p.min && duration <= p.max);
      if (pattern) pattern.count++;
    });

    return patterns;
  };

  const getSuccessJourneyData = () => {
    const hourlySuccess = [];
    for (let hour = 0; hour < 24; hour++) {
      const hourCalls = allCalls.filter(call => new Date(call.StartTime).getHours() === hour);
      const completed = hourCalls.filter(c => c.Status === 'completed').length;
      const total = hourCalls.length;
      
      hourlySuccess.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        successRate: total > 0 ? (completed / total) * 100 : 0,
        total: total,
        completed: completed,
        failed: hourCalls.filter(c => c.Status === 'failed').length
      });
    }
    return hourlySuccess;
  };

  const getAIPipelineData = () => {
    const totalWithRecordings = allCalls.filter(c => c.recordings && c.recordings.length > 0).length;
    const transcribed = allCalls.filter(c => c.transcription).length;
    const summarized = allCalls.filter(c => c.summary).length;
    
    return [
      { stage: 'Recordings', value: totalWithRecordings, percentage: 100 },
      { stage: 'Transcribed', value: transcribed, percentage: totalWithRecordings > 0 ? (transcribed / totalWithRecordings) * 100 : 0 },
      { stage: 'Summarized', value: summarized, percentage: totalWithRecordings > 0 ? (summarized / totalWithRecordings) * 100 : 0 }
    ];
  };

  const getCallFlowCorrelation = () => {
    return allCalls.slice(0, 50).map(call => ({
      duration: parseInt(call.Duration),
      hour: new Date(call.StartTime).getHours(),
      status: call.Status === 'completed' ? 1 : 0,
      direction: call.Direction
    }));
  };

  const getKeyInsights = () => {
    const total = allCalls.length;
    const completed = allCalls.filter(c => c.Status === 'completed').length;
    const avgDuration = allCalls.reduce((sum, c) => sum + parseInt(c.Duration), 0) / total || 0;
    const inbound = allCalls.filter(c => c.Direction === 'inbound').length;
    
    const peakHour = getSuccessJourneyData().reduce((max, curr) => 
      curr.total > max.total ? curr : max, { hour: '00:00', total: 0 }
    );

    return {
      successRate: total > 0 ? ((completed / total) * 100).toFixed(1) : '0',
      avgDuration: Math.round(avgDuration),
      topDirection: inbound > (total - inbound) ? 'Inbound' : 'Outbound',
      peakHour: peakHour.hour,
      transcriptionRate: allCalls.filter(c => c.transcription).length
    };
  };

  const insights = getKeyInsights();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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

      <main className="w-full md:ml-60 p-4 sm:p-6 lg:p-8 pt-20 md:pt-8">
        <div className="container mx-auto max-w-7xl">
          
          {refreshMessage && (
            <div className={`mb-4 p-4 rounded-xl border ${
              refreshMessage.includes('Failed') || refreshMessage.includes('error')
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-green-50 border-green-200 text-green-800'
            } animate-fade-in`}>
              <div className="flex items-center gap-2">
                {refreshMessage.includes('Failed') || refreshMessage.includes('error') ? (
                  <XCircle className="w-5 h-5" />
                ) : (
                  <CheckCircle className="w-5 h-5" />
                )}
                <span className="font-medium">{refreshMessage}</span>
              </div>
            </div>
          )}
          
          <header className="mb-6 sm:mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Call Story Analytics
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg">Every call tells a story - let's discover the narrative in your data</p>
                </div>
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                >
                  {refreshing ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span className="text-sm sm:text-base">Syncing...</span>
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Refresh Data</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between sm:justify-start gap-3">
                <div className="bg-white rounded-xl px-4 sm:px-5 py-2 sm:py-3 border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                    <span className="font-semibold text-sm sm:text-base">{allCalls.length} Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-6 sm:mb-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">Filter Your Story</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Search by SID</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter SID..."
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  >
                    <option value="">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="busy">Busy</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Direction</label>
                  <select
                    value={directionFilter}
                    onChange={(e) => setDirectionFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  >
                    <option value="">All Directions</option>
                    <option value="inbound">Inbound</option>
                    <option value="outbound">Outbound</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    setPage(1);
                    fetchCalls();
                    fetchAllCalls();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                  Apply Filters
                </button>
                
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <label className="text-slate-700 font-medium text-xs sm:text-sm">Show:</label>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setLimit(Number(e.target.value));
                      setPage(1);
                    }}
                    className="px-3 sm:px-4 py-2 bg-white border border-slate-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-xs sm:text-sm"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                  <span className="text-slate-700 text-xs sm:text-sm">per page</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  Call Recordings and Transcription
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">Dive deep into each conversation with AI-powered insights</p>
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Showing {calls.length} of {total} calls
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-48 bg-white rounded-2xl border border-slate-200 shadow-lg">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-3" />
                  <p className="text-base sm:text-lg text-slate-600 font-medium">Loading call stories...</p>
                </div>
              </div>
            ) : calls.length === 0 ? (
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
                <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-base sm:text-lg text-slate-500 font-medium">No calls found</p>
                <p className="text-slate-400 text-xs sm:text-sm">Try adjusting your filters to see call data</p>
              </div>
            ) : (
              <div className="space-y-4">
                {calls.map((call) => (
                  <div key={call.Sid} className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full shadow-sm ${
                            call.Status === 'completed' ? 'bg-green-500' :
                            call.Status === 'failed' ? 'bg-red-500' :
                            call.Status === 'busy' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                          <span className="font-mono text-xs text-slate-500 break-all">SID: {call.Sid}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span className="font-semibold text-xs sm:text-sm text-slate-700 break-all">From: {call.From}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span className="font-semibold text-xs sm:text-sm text-slate-700 break-all">To: {call.To}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-600 font-medium text-xs sm:text-sm">{call.Duration}s</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getDirectionIcon(call.Direction)}
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${
                              call.Direction === 'inbound' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {call.Direction.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(call.Status)}
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-black ${
                            call.Status === 'completed' ? 'bg-green-100 text-green-700' :
                            call.Status === 'failed' ? 'bg-red-100 text-red-700' :
                            call.Status === 'busy' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {call.Status.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="text-xs text-slate-600 space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium break-all">Start: {new Date(call.StartTime).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium break-all">End: {new Date(call.EndTime).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {call.recordings && call.recordings.length > 0 ? (
                      <div className="border-t border-slate-200 pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                          <h3 className="font-bold text-sm sm:text-base text-slate-800">Recordings & AI Analysis</h3>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {call.recordings.map((rec) => (
                              <a
                                key={rec.Sid}
                                href={`https://digital-api-tef8.onrender.com/api/recording/${rec.Sid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 hover:text-slate-900 transition-all duration-200"
                              >
                                <Play className="w-4 h-4 flex-shrink-0" />
                                <span className="font-mono text-xs break-all">{rec.Sid}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                          <button
                            onClick={() => handleToggleTranscription(call)}
                            disabled={processing[call.Sid] === 'transcribing'}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${
                              visibleContent[call.Sid] === 'transcription' 
                                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg' 
                                : 'bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-md hover:shadow-lg'
                            }`}
                          >
                            {processing[call.Sid] === 'transcribing' ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Transcribing...
                              </>
                            ) : (
                              <>
                                <FileText className="w-4 h-4" />
                                {call.transcription ? 'View Transcription' : 'Generate Transcription'}
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={() => handleToggleSummarization(call)}
                            disabled={processing[call.Sid] === 'summarizing' || !call.transcription}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${
                              visibleContent[call.Sid] === 'summary' 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                                : 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md hover:shadow-lg'
                            }`}
                          >
                            {processing[call.Sid] === 'summarizing' ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Summarizing...
                              </>
                            ) : (
                              <>
                                <Brain className="w-4 h-4" />
                                {call.summary ? 'View AI Summary' : 'Generate AI Summary'}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-slate-500 text-xs sm:text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          No recordings available for this call
                        </p>
                      </div>
                    )}

                    {visibleContent[call.Sid] === 'transcription' && call.transcription && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                        <div className="flex items-center gap-2 mb-3">
                          <FileText className="w-4 h-4 text-violet-600" />
                          <h4 className="font-bold text-sm sm:text-base text-violet-800">Transcription</h4>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap text-slate-700 leading-relaxed text-xs sm:text-sm">{call.transcription}</p>
                        </div>
                      </div>
                    )}

                    {visibleContent[call.Sid] === 'summary' && call.summary && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className="w-4 h-4 text-amber-600" />
                          <h4 className="font-bold text-sm sm:text-base text-amber-800">AI Summary</h4>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap text-slate-700 leading-relaxed text-xs sm:text-sm">{call.summary}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {!analyticsLoading && allCalls.length > 0 && (
            <>
              <section className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                    <h2 className="text-2xl sm:text-3xl font-bold">The Story at a Glance</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-1">Success Rate</div>
                      <div className="text-2xl sm:text-4xl font-black">{insights.successRate}%</div>
                      <div className="text-white/70 text-xs mt-1">Overall Performance</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-1">Avg Duration</div>
                      <div className="text-2xl sm:text-4xl font-black">{insights.avgDuration}s</div>
                      <div className="text-white/70 text-xs mt-1">Per Conversation</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-1">Peak Hour</div>
                      <div className="text-2xl sm:text-4xl font-black">{insights.peakHour}</div>
                      <div className="text-white/70 text-xs mt-1">Busiest Time</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-1">Top Direction</div>
                      <div className="text-xl sm:text-3xl font-black">{insights.topDirection}</div>
                      <div className="text-white/70 text-xs mt-1">Dominant Flow</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 col-span-2 md:col-span-1">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-1">AI Processed</div>
                      <div className="text-2xl sm:text-4xl font-black">{insights.transcriptionRate}</div>
                      <div className="text-white/70 text-xs mt-1">Transcriptions</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Chapter 1</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-800">How Calls Begin</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-base mb-6 ml-0 sm:ml-13">The journey starts with understanding where your conversations originate - inbound inquiries or outbound outreach.</p>
                  
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={getCallJourneyData()}>
                      <defs>
                        <linearGradient id="inboundGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="outboundGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                      <YAxis stroke="#64748b" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          fontSize: '12px'
                        }} 
                      />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Area type="monotone" dataKey="inbound" stroke="#3b82f6" fill="url(#inboundGrad)" strokeWidth={2} name="Inbound Calls" />
                      <Area type="monotone" dataKey="outbound" stroke="#8b5cf6" fill="url(#outboundGrad)" strokeWidth={2} name="Outbound Calls" />
                    </AreaChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-4 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-xs sm:text-sm text-blue-800"><strong>Insight:</strong> Track how your call mix evolves. A balanced approach often indicates healthy customer engagement.</p>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Chapter 2</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-800">The Conversation</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-base mb-6 ml-0 sm:ml-13">Duration reveals engagement. Quick calls might signal efficiency or missed opportunities. Longer calls show deeper connections.</p>
                  
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={getDurationPatternsData()} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" stroke="#64748b" fontSize={10} />
                      <YAxis type="category" dataKey="range" stroke="#64748b" fontSize={9} width={70} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          fontSize: '12px'
                        }} 
                      />
                      <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                        {getDurationPatternsData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-4 p-3 sm:p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-xs sm:text-sm text-amber-800"><strong>Insight:</strong> Most calls fall in the medium range (2-5 minutes), suggesting meaningful but efficient conversations.</p>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Chapter 3</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-800">Success Through Time</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-base mb-6 ml-0 sm:ml-13">Not all hours are equal. Discover when your team shines brightest and when challenges emerge.</p>
                  
                  <ResponsiveContainer width="100%" height={250}>
                    <ComposedChart data={getSuccessJourneyData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="hour" stroke="#64748b" fontSize={9} angle={-45} textAnchor="end" height={80} />
                      <YAxis yAxisId="left" stroke="#64748b" fontSize={10} />
                      <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          fontSize: '12px'
                        }} 
                      />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar yAxisId="left" dataKey="total" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Total Calls" />
                      <Line yAxisId="right" type="monotone" dataKey="successRate" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 3 }} name="Success Rate %" />
                    </ComposedChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-4 p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-xs sm:text-sm text-green-800"><strong>Insight:</strong> Peak hours around {insights.peakHour} show maximum activity. Success rates reveal your team's optimal performance windows.</p>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Chapter 4</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-800">The AI Intelligence Layer</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-base mb-6 ml-0 sm:ml-13">From raw audio to actionable insights - watch how AI transforms conversations into knowledge.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                    {getAIPipelineData().map((stage, index) => (
                      <div key={index} className="relative">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-200">
                          <div className="text-xs sm:text-sm text-purple-600 font-bold mb-2 uppercase">Stage {index + 1}</div>
                          <div className="text-lg sm:text-2xl font-black text-slate-800 mb-1">{stage.stage}</div>
                          <div className="text-3xl sm:text-4xl font-black text-purple-600 mb-2">{stage.value}</div>
                          <div className="text-xs sm:text-sm text-slate-600">Calls processed</div>
                          <div className="mt-3 pt-3 border-t border-purple-200">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-slate-600">Conversion</span>
                              <span className="text-xs font-bold text-purple-600">{stage.percentage.toFixed(1)}%</span>
                            </div>
                            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                                style={{ width: `${stage.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        {index < 2 && (
                          <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <p className="text-xs sm:text-sm text-purple-800"><strong>Insight:</strong> The AI pipeline shows {getAIPipelineData()[1].percentage.toFixed(0)}% transcription rate and {getAIPipelineData()[2].percentage.toFixed(0)}% summarization completion - your intelligence conversion funnel.</p>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Chapter 5</div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-800">Hidden Patterns</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-base mb-6 ml-0 sm:ml-13">Correlation between duration and success across different hours reveals optimal calling strategies.</p>
                  
                  <ResponsiveContainer width="100%" height={250}>
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" dataKey="hour" name="Hour" domain={[0, 23]} stroke="#64748b" fontSize={10} label={{ value: 'Hour of Day', position: 'insideBottom', offset: -5, fontSize: 11 }} />
                      <YAxis type="number" dataKey="duration" name="Duration" stroke="#64748b" fontSize={10} label={{ value: 'Duration (seconds)', angle: -90, position: 'insideLeft', fontSize: 11 }} />
                      <ZAxis type="number" dataKey="status" range={[30, 200]} />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          fontSize: '12px'
                        }}
                        formatter={(value: any, name: string) => {
                          if (name === 'Hour') return [value, 'Hour'];
                          if (name === 'Duration') return [`${value}s`, 'Duration'];
                          return [value === 1 ? 'Completed' : 'Failed', 'Status'];
                        }}
                      />
                      <Scatter name="Calls" data={getCallFlowCorrelation()} fill="#6366f1">
                        {getCallFlowCorrelation().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.status === 1 ? '#10b981' : '#ef4444'} />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-green-50 rounded-xl border border-green-200 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-semibold text-green-800">Completed Calls</span>
                    </div>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-200 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-semibold text-red-800">Failed Calls</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 sm:p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                    <p className="text-xs sm:text-sm text-indigo-800"><strong>Insight:</strong> Longer calls during business hours (9-17) tend to succeed more. Quick calls outside hours often fail - timing matters!</p>
                  </div>
                </div>
              </section>
            </>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-slate-700 font-semibold text-sm sm:text-base">
                Page {page} of {Math.ceil(total / limit) || 1}
              </span>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                <span>Total: {total} calls</span>
              </div>
            </div>
            
            <button
              disabled={page >= Math.ceil(total / limit)}
              onClick={() => setPage((p) => p + 1)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}