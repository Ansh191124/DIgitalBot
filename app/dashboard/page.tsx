"use client";
import { useState, useEffect } from "react";
import { Phone, TrendingUp, Activity, Clock, PhoneCall, PhoneIncoming, PhoneOutgoing, CheckCircle, XCircle, AlertCircle, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Brain, FileText, Loader2, Award, Headphones, Zap, MessageSquare } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
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

interface Analytics {
  totalCalls: number;
  completedCalls: number;
  failedCalls: number;
  avgDuration: number;
  inboundCalls: number;
  outboundCalls: number;
  busyCalls: number;
  transcribedCalls: number;
  summarizedCalls: number;
  todaysCalls: number;
  weeklyGrowth: number;
  monthlyGrowth: number;
  peakHours: { hour: number; count: number }[];
  dailyStats: { date: string; calls: number; completed: number; failed: number }[];
  statusDistribution: { status: string; count: number; percentage: number }[];
  hourlyDistribution: { hour: string; calls: number }[];
  durationAnalysis: { range: string; count: number }[];
  weeklyComparison: { week: string; calls: number; successRate: number }[];
}

export default function AnalyticsOverview() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState("7");
  const [recentCalls, setRecentCalls] = useState<Call[]>([]);
  const [toNumber, setToNumber] = useState("");
  const [callStatus, setCallStatus] = useState("");

  const chartColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      params.append("limit", "1000");
      const res = await fetch(`https://digital-api-tef8.onrender.com/api/calls?${params.toString()}`, {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const data = await res.json();
      const calls = data.calls || [];
      const now = new Date();
      const filterDays = parseInt(dateFilter);
      const filterDate = new Date(now.getTime() - (filterDays * 24 * 60 * 60 * 1000));
      const filteredCalls = calls.filter((call: Call) => new Date(call.StartTime) >= filterDate);
      const completed = filteredCalls.filter((c: Call) => c.Status === 'completed').length;
      const failed = filteredCalls.filter((c: Call) => c.Status === 'failed').length;
      const busy = filteredCalls.filter((c: Call) => c.Status === 'busy').length;
      const inbound = filteredCalls.filter((c: Call) => c.Direction === 'inbound').length;
      const outbound = filteredCalls.filter((c: Call) => c.Direction === 'outbound').length;
      const transcribed = filteredCalls.filter((c: Call) => c.transcription).length;
      const summarized = filteredCalls.filter((c: Call) => c.summary).length;
      const totalDuration = filteredCalls.reduce((sum: number, call: Call) => sum + parseInt(call.Duration || '0'), 0);
      const avgDuration = filteredCalls.length > 0 ? totalDuration / filteredCalls.length : 0;
      const today = new Date().toDateString();
      const todaysCalls = filteredCalls.filter((call: Call) => new Date(call.StartTime).toDateString() === today).length;
      const hourCounts: { [key: number]: number } = {};
      filteredCalls.forEach((call: Call) => {
        const hour = new Date(call.StartTime).getHours();
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
      });
      const peakHours = Object.entries(hourCounts).map(([hour, count]) => ({ hour: parseInt(hour), count })).sort((a, b) => b.count - a.count).slice(0, 5);
      const dailyStats = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
        const dateStr = date.toDateString();
        const dayCalls = filteredCalls.filter((call: Call) => new Date(call.StartTime).toDateString() === dateStr);
        dailyStats.push({
          date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          calls: dayCalls.length,
          completed: dayCalls.filter((c: Call) => c.Status === 'completed').length,
          failed: dayCalls.filter((c: Call) => c.Status === 'failed').length
        });
      }
      const statusCounts: { [key: string]: number } = {};
      filteredCalls.forEach((call: Call) => { statusCounts[call.Status] = (statusCounts[call.Status] || 0) + 1; });
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({ status, count, percentage: filteredCalls.length > 0 ? (count / filteredCalls.length) * 100 : 0 }));
      const hourlyDistribution = Array.from({ length: 24 }, (_, hour) => ({ hour: `${hour.toString().padStart(2, '0')}:00`, calls: hourCounts[hour] || 0 }));
      const durationAnalysis = [
        { range: '0-30s', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) <= 30).length },
        { range: '30s-1m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 30 && parseInt(c.Duration) <= 60).length },
        { range: '1-2m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 60 && parseInt(c.Duration) <= 120).length },
        { range: '2-5m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 120 && parseInt(c.Duration) <= 300).length },
        { range: '5-10m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 300 && parseInt(c.Duration) <= 600).length },
        { range: '10m+', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 600).length }
      ];
      const weeklyComparison = Array.from({ length: 4 }, (_, i) => {
        const weekStart = new Date(now.getTime() - ((i + 1) * 7 * 24 * 60 * 60 * 1000));
        const weekEnd = new Date(weekStart.getTime() + (7 * 24 * 60 * 60 * 1000));
        const weekCalls = filteredCalls.filter((call: Call) => {
          const callDate = new Date(call.StartTime);
          return callDate >= weekStart && callDate < weekEnd;
        });
        const weekCompleted = weekCalls.filter((c: Call) => c.Status === 'completed').length;
        return { week: `Week ${i + 1}`, calls: weekCalls.length, successRate: weekCalls.length > 0 ? (weekCompleted / weekCalls.length) * 100 : 0 };
      }).reverse();
      const prevPeriodStart = new Date(now.getTime() - (filterDays * 2 * 24 * 60 * 60 * 1000));
      const prevPeriodEnd = new Date(now.getTime() - (filterDays * 24 * 60 * 60 * 1000));
      const prevPeriodCalls = calls.filter((call: Call) => {
        const callDate = new Date(call.StartTime);
        return callDate >= prevPeriodStart && callDate < prevPeriodEnd;
      }).length;
      const weeklyGrowth = prevPeriodCalls > 0 ? ((filteredCalls.length - prevPeriodCalls) / prevPeriodCalls) * 100 : 0;
      const monthlyGrowth = Math.random() * 30 - 15;
      const analyticsData: Analytics = { totalCalls: filteredCalls.length, completedCalls: completed, failedCalls: failed, avgDuration, inboundCalls: inbound, outboundCalls: outbound, busyCalls: busy, transcribedCalls: transcribed, summarizedCalls: summarized, todaysCalls, weeklyGrowth, monthlyGrowth, peakHours, dailyStats, statusDistribution, hourlyDistribution, durationAnalysis, weeklyComparison };
      setAnalytics(analyticsData);
      setRecentCalls(calls.slice(0, 5));
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAnalytics(); }, [dateFilter]);

  const handleOutboundCall = async () => {
    if (!toNumber) return alert("Please enter a number to call.");
    setCallStatus("Calling...");
    try {
      const token = localStorage.getItem('token');
      const res = await fetch("https://digital-api-tef8.onrender.com/api/outbound-call", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ toNumber }),
      });
      const data = await res.json();
      if (res.ok) {
        setCallStatus("Call initiated successfully!");
        fetchAnalytics();
        setToNumber("");
      } else {
        setCallStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setCallStatus("Failed to initiate call.");
    }
  };

  const MetricCard = ({ title, value, icon: Icon, trend, trendValue, color = "blue", subtitle }: any) => (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-800 mb-1">{value}</p>
          {subtitle && <p className="text-slate-500 text-xs">{subtitle}</p>}
        </div>
        <div className={`w-14 h-14 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
      {trend && trendValue && (
        <div className="flex items-center gap-1 mt-3 pt-3 border-t border-slate-200">
          {trend === "up" && <ArrowUp className="w-4 h-4 text-green-500" />}
          {trend === "down" && <ArrowDown className="w-4 h-4 text-red-500" />}
          {trend === "neutral" && <Minus className="w-4 h-4 text-slate-500" />}
          <span className={`text-sm font-semibold ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-slate-600"}`}>{trendValue}</span>
          <span className="text-slate-500 text-xs ml-1">vs last period</span>
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Sidebar />
        <main className="flex-1 ml-60 p-8">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
              <p className="text-lg text-slate-600 font-medium">Loading analytics...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Sidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Analytics Dashboard
                </h1>
                <p className="text-slate-600 text-lg">Real-time insights into your AI call center performance</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={dateFilter} 
                  onChange={(e) => setDateFilter(e.target.value)} 
                  className="px-5 py-3 bg-white rounded-xl border border-slate-300 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-700 font-medium"
                >
                  <option value="1">Last 24 hours</option>
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                </select>
              </div>
            </div>
          </header>

          {/* Quick Call Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Quick Call</h2>
                  <p className="text-slate-600 text-sm">Start a new AI conversation instantly</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="Enter number (e.g., +91XXXXXXXXXX)" 
                    value={toNumber} 
                    onChange={(e) => setToNumber(e.target.value)} 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <button 
                  onClick={handleOutboundCall} 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </button>
              </div>
              {callStatus && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 font-medium text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {callStatus}
                  </p>
                </div>
              )}
            </div>
          </section>

          {analytics && (
            <>
              {/* Key Metrics */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  Key Performance Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MetricCard 
                    title="Total Calls" 
                    value={analytics.totalCalls} 
                    icon={PhoneCall} 
                    trend={analytics.weeklyGrowth > 0 ? "up" : analytics.weeklyGrowth < 0 ? "down" : "neutral"} 
                    trendValue={`${Math.abs(analytics.weeklyGrowth).toFixed(1)}%`} 
                    color="blue" 
                  />
                  <MetricCard 
                    title="Success Rate" 
                    value={`${analytics.totalCalls > 0 ? ((analytics.completedCalls / analytics.totalCalls) * 100).toFixed(1) : 0}%`} 
                    icon={CheckCircle} 
                    subtitle={`${analytics.completedCalls} completed`} 
                    color="green" 
                  />
                  <MetricCard 
                    title="Average Duration" 
                    value={`${Math.round(analytics.avgDuration)}s`} 
                    icon={Clock} 
                    subtitle="Per call" 
                    color="purple" 
                  />
                  <MetricCard 
                    title="Today's Calls" 
                    value={analytics.todaysCalls} 
                    icon={Activity} 
                    trend={analytics.todaysCalls > 10 ? "up" : analytics.todaysCalls < 5 ? "down" : "neutral"} 
                    trendValue="Active" 
                    color="orange" 
                  />
                </div>
              </section>

              {/* Call Direction & Status */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  Call Analytics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MetricCard 
                    title="Inbound Calls" 
                    value={analytics.inboundCalls} 
                    icon={PhoneIncoming} 
                    subtitle={`${analytics.totalCalls > 0 ? ((analytics.inboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total`} 
                    color="blue" 
                  />
                  <MetricCard 
                    title="Outbound Calls" 
                    value={analytics.outboundCalls} 
                    icon={PhoneOutgoing} 
                    subtitle={`${analytics.totalCalls > 0 ? ((analytics.outboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total`} 
                    color="purple" 
                  />
                  <MetricCard 
                    title="Busy Calls" 
                    value={analytics.busyCalls} 
                    icon={AlertCircle} 
                    subtitle={`${analytics.totalCalls > 0 ? ((analytics.busyCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total`} 
                    color="yellow" 
                  />
                </div>
              </section>

              {/* Charts Grid 1 - Area & Bar Charts */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-green-500" />
                  Trend Analysis
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Area Chart - Call Volume */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-800">Call Volume Trend</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">Area Chart</span>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                      <AreaChart data={analytics.dailyStats}>
                        <defs>
                          <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                          }} 
                        />
                        <Legend wrapperStyle={{ paddingTop: '20px' }} />
                        <Area 
                          type="monotone" 
                          dataKey="calls" 
                          stroke="#3b82f6" 
                          fillOpacity={1} 
                          fill="url(#callsGradient)" 
                          strokeWidth={3} 
                          name="Total Calls" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="completed" 
                          stroke="#10b981" 
                          fillOpacity={1} 
                          fill="url(#completedGradient)" 
                          strokeWidth={2} 
                          name="Completed" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Column Chart - Hourly Distribution */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-6 h-6 text-purple-500" />
                        <h3 className="text-xl font-bold text-slate-800">Hourly Distribution</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">Column Chart</span>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={analytics.hourlyDistribution}>
                        <defs>
                          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.8} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis 
                          dataKey="hour" 
                          stroke="#64748b" 
                          fontSize={11} 
                          angle={-45} 
                          textAnchor="end" 
                          height={80} 
                        />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                          }} 
                        />
                        <Bar dataKey="calls" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                </div>
              </section>

              {/* Charts Grid 2 - Horizontal Bar & Line Charts */}
              <section className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Horizontal Bar Chart - Duration Analysis */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-indigo-500" />
                        <h3 className="text-xl font-bold text-slate-800">Duration Analysis</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-semibold">Bar Chart</span>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={analytics.durationAnalysis} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis type="number" stroke="#64748b" fontSize={12} />
                        <YAxis 
                          type="category" 
                          dataKey="range" 
                          stroke="#64748b" 
                          fontSize={12} 
                          width={80} 
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                          }} 
                        />
                        <Bar dataKey="count" fill="#6366f1" radius={[0, 8, 8, 0]}>
                          {analytics.durationAnalysis.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Line Chart - Weekly Performance */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-green-500" />
                        <h3 className="text-xl font-bold text-slate-800">Weekly Performance</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Line Chart</span>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                      <LineChart data={analytics.weeklyComparison}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                          }} 
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px' }} />
                        <Line 
                          type="monotone" 
                          dataKey="calls" 
                          stroke="#3b82f6" 
                          strokeWidth={3} 
                          dot={{ fill: '#3b82f6', r: 5 }} 
                          activeDot={{ r: 7 }} 
                          name="Total Calls" 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="successRate" 
                          stroke="#10b981" 
                          strokeWidth={3} 
                          dot={{ fill: '#10b981', r: 5 }} 
                          activeDot={{ r: 7 }} 
                          name="Success Rate %" 
                          strokeDasharray="5 5" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                </div>
              </section>

              {/* Donut Chart & Call Direction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <PieChart className="w-6 h-6 text-pink-500" />
                  Distribution & Breakdown
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Donut Chart - Status Distribution */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <PieChart className="w-6 h-6 text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-800">Call Status Distribution</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">Donut Chart</span>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                      <RechartsPieChart>
                        <Pie 
                          dataKey="count" 
                          data={analytics.statusDistribution} 
                          cx="50%" 
                          cy="50%" 
                          innerRadius={70} 
                          outerRadius={110} 
                          paddingAngle={5} 
                          label={(entry: any) => `${entry.payload.status}: ${entry.value}`} 
                          labelLine={{ stroke: '#64748b', strokeWidth: 1 }}
                        >
                          {analytics.statusDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                          }} 
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                    <div className="text-center mt-4">
                      <div className="text-3xl font-black text-slate-800">{analytics.totalCalls}</div>
                      <div className="text-sm text-slate-500 font-medium">Total Calls</div>
                    </div>
                  </div>

                  {/* Call Direction Breakdown */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-green-500" />
                        <h3 className="text-xl font-bold text-slate-800">Call Direction Breakdown</h3>
                      </div>
                      <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Progress Bars</span>
                    </div>
                    <div className="space-y-6 mb-6">
                      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
                        <div className="flex items-center gap-3">
                          <PhoneIncoming className="w-7 h-7 text-blue-600" />
                          <span className="font-bold text-slate-800 text-lg">Inbound</span>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-blue-600">{analytics.inboundCalls}</div>
                          <div className="text-sm font-semibold text-slate-600">
                            {analytics.totalCalls > 0 ? ((analytics.inboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
                        <div className="flex items-center gap-3">
                          <PhoneOutgoing className="w-7 h-7 text-purple-600" />
                          <span className="font-bold text-slate-800 text-lg">Outbound</span>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-purple-600">{analytics.outboundCalls}</div>
                          <div className="text-sm font-semibold text-slate-600">
                            {analytics.totalCalls > 0 ? ((analytics.outboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-xs font-semibold text-blue-600">Inbound</div>
                          <div className="text-xs font-semibold text-blue-600">
                            {analytics.totalCalls > 0 ? ((analytics.inboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}%
                          </div>
                        </div>
                        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-blue-100">
                          <div 
                            style={{ width: `${analytics.totalCalls > 0 ? (analytics.inboundCalls / analytics.totalCalls) * 100 : 0}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                          ></div>
                        </div>
                      </div>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-xs font-semibold text-purple-600">Outbound</div>
                          <div className="text-xs font-semibold text-purple-600">
                            {analytics.totalCalls > 0 ? ((analytics.outboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}%
                          </div>
                        </div>
                        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-purple-100">
                          <div 
                            style={{ width: `${analytics.totalCalls > 0 ? (analytics.outboundCalls / analytics.totalCalls) * 100 : 0}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* AI Analysis Performance */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-violet-500" />
                  AI Analysis Performance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Transcribed Calls */}
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl flex items-center justify-center shadow-md">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-violet-600">{analytics.transcribedCalls}</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-700 font-bold text-lg mb-1">Transcribed Calls</p>
                      <p className="text-slate-600 text-sm font-semibold">
                        {analytics.totalCalls > 0 ? ((analytics.transcribedCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total calls processed
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-violet-200">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-violet-200">
                          <div 
                            style={{ width: `${analytics.totalCalls > 0 ? (analytics.transcribedCalls / analytics.totalCalls) * 100 : 0}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-violet-400 to-violet-600 rounded-full transition-all duration-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summarized Calls */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                        <Brain className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-amber-600">{analytics.summarizedCalls}</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-700 font-bold text-lg mb-1">Summarized Calls</p>
                      <p className="text-slate-600 text-sm font-semibold">
                        {analytics.transcribedCalls > 0 ? ((analytics.summarizedCalls / analytics.transcribedCalls) * 100).toFixed(1) : 0}% of transcribed calls
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-amber-200">
                          <div 
                            style={{ width: `${analytics.transcribedCalls > 0 ? (analytics.summarizedCalls / analytics.transcribedCalls) * 100 : 0}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Processing Rate */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-emerald-600">
                          {analytics.transcribedCalls > 0 ? ((analytics.summarizedCalls / analytics.transcribedCalls) * 100).toFixed(1) : 0}%
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-700 font-bold text-lg mb-1">Processing Rate</p>
                      <p className="text-slate-600 text-sm font-semibold">AI summary completion rate</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-200">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-emerald-200">
                          <div 
                            style={{ width: `${analytics.transcribedCalls > 0 ? (analytics.summarizedCalls / analytics.transcribedCalls) * 100 : 0}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Peak Hours */}
              {analytics.peakHours.length > 0 && (
                <section className="mb-8">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-6 h-6 text-indigo-500" />
                      <h3 className="text-2xl font-bold text-slate-800">Peak Call Hours</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {analytics.peakHours.map((peak, index) => (
                        <div 
                          key={peak.hour} 
                          className="text-center p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="text-3xl font-black text-indigo-600 mb-2">{peak.hour}:00</div>
                          <div className="text-slate-700 text-lg font-bold">{peak.count} calls</div>
                          <div className="text-xs text-slate-500 mt-2 font-semibold">Rank #{index + 1}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Recent Calls */}
              <section className="mb-8">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                      <h3 className="text-2xl font-bold text-slate-800">Recent Calls</h3>
                    </div>
                    <a 
                      href="/calls" 
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors flex items-center gap-1"
                    >
                      View All 
                      <ArrowUp className="w-4 h-4 rotate-45" />
                    </a>
                  </div>
                  {recentCalls.length > 0 ? (
                    <div className="space-y-3">
                      {recentCalls.map((call) => (
                        <div 
                          key={call.Sid} 
                          className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              {call.Direction === 'inbound' ? (
                                <PhoneIncoming className="w-5 h-5 text-blue-500" />
                              ) : (
                                <PhoneOutgoing className="w-5 h-5 text-purple-500" />
                              )}
                              <span className="font-semibold text-slate-800">{call.From} → {call.To}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {call.Status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                              {call.Status === 'failed' && <XCircle className="w-4 h-4 text-red-500" />}
                              {call.Status === 'busy' && <AlertCircle className="w-4 h-4 text-yellow-500" />}
                              <span 
                                className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  call.Status === 'completed' 
                                    ? 'bg-green-100 text-green-700' 
                                    : call.Status === 'failed' 
                                    ? 'bg-red-100 text-red-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {call.Status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-800">{call.Duration}s</div>
                            <div className="text-xs text-slate-500">{new Date(call.StartTime).toLocaleTimeString()}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <PhoneCall className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500 text-lg font-medium">No recent calls found</p>
                    </div>
                  )}
                </div>
              </section>

            </>
          )}
        </div>
      </main>
    </div>
  );
}