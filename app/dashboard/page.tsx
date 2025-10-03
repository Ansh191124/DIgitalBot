"use client";
import { useState, useEffect } from "react";
import { Phone, TrendingUp, TrendingDown, Activity, Clock, Users, PhoneCall, PhoneIncoming, PhoneOutgoing, CheckCircle, XCircle, AlertCircle, BarChart3, PieChart, Calendar, Filter, ArrowUp, ArrowDown, Minus, Brain, FileText, Play, Loader2, Target, Award, Headphones, Zap, MessageSquare } from "lucide-react";
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
  realTimeData: { time: string; active: number }[];
  sentimentData: { sentiment: string; count: number; percentage: number }[];
  weeklyComparison: { week: string; calls: number; successRate: number }[];
}

export default function AnalyticsOverview() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState("7"); // Default to 7 days
  const [recentCalls, setRecentCalls] = useState<Call[]>([]);
  const [toNumber, setToNumber] = useState("");
  const [callStatus, setCallStatus] = useState("");

  // Chart colors
  const chartColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Fetch calls data (you can modify this endpoint or create a dedicated analytics endpoint)
      const params = new URLSearchParams();
      params.append("limit", "1000"); // Get more data for analytics
      
      const res = await fetch(`https://digital-api-tef8.onrender.com/api/calls?${params.toString()}`);
      const data = await res.json();
      const calls = data.calls || [];
      
      // Calculate analytics from calls data
      const now = new Date();
      const filterDays = parseInt(dateFilter);
      const filterDate = new Date(now.getTime() - (filterDays * 24 * 60 * 60 * 1000));
      
      const filteredCalls = calls.filter((call: Call) => 
        new Date(call.StartTime) >= filterDate
      );
      
      const completed = filteredCalls.filter((c: Call) => c.Status === 'completed').length;
      const failed = filteredCalls.filter((c: Call) => c.Status === 'failed').length;
      const busy = filteredCalls.filter((c: Call) => c.Status === 'busy').length;
      const inbound = filteredCalls.filter((c: Call) => c.Direction === 'inbound').length;
      const outbound = filteredCalls.filter((c: Call) => c.Direction === 'outbound').length;
      const transcribed = filteredCalls.filter((c: Call) => c.transcription).length;
      const summarized = filteredCalls.filter((c: Call) => c.summary).length;
      
      const totalDuration = filteredCalls.reduce((sum: number, call: Call) => 
        sum + parseInt(call.Duration || '0'), 0
      );
      const avgDuration = filteredCalls.length > 0 ? totalDuration / filteredCalls.length : 0;
      
      const today = new Date().toDateString();
      const todaysCalls = filteredCalls.filter((call: Call) => 
        new Date(call.StartTime).toDateString() === today
      ).length;
      
      // Calculate peak hours
      const hourCounts: { [key: number]: number } = {};
      filteredCalls.forEach((call: Call) => {
        const hour = new Date(call.StartTime).getHours();
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
      });
      
      const peakHours = Object.entries(hourCounts)
        .map(([hour, count]) => ({ hour: parseInt(hour), count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
      
      // Calculate daily stats for the last 7 days
      const dailyStats = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
        const dateStr = date.toDateString();
        const dayCalls = calls.filter((call: Call) => 
          new Date(call.StartTime).toDateString() === dateStr
        );
        dailyStats.push({
          date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          calls: dayCalls.length,
          completed: dayCalls.filter((c: Call) => c.Status === 'completed').length,
          failed: dayCalls.filter((c: Call) => c.Status === 'failed').length
        });
      }
      
      // Status distribution
      const statusCounts: { [key: string]: number } = {};
      filteredCalls.forEach((call: Call) => {
        statusCounts[call.Status] = (statusCounts[call.Status] || 0) + 1;
      });
      
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({
        status,
        count,
        percentage: filteredCalls.length > 0 ? (count / filteredCalls.length) * 100 : 0
      }));

      // Generate hourly distribution
      const hourlyDistribution = Array.from({ length: 24 }, (_, hour) => {
        const hourCount = hourCounts[hour] || 0;
        return {
          hour: `${hour.toString().padStart(2, '0')}:00`,
          calls: hourCount
        };
      });

      // Duration analysis
      const durationAnalysis = [
        { range: '0-30s', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) <= 30).length },
        { range: '30s-1m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 30 && parseInt(c.Duration) <= 60).length },
        { range: '1-2m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 60 && parseInt(c.Duration) <= 120).length },
        { range: '2-5m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 120 && parseInt(c.Duration) <= 300).length },
        { range: '5-10m', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 300 && parseInt(c.Duration) <= 600).length },
        { range: '10m+', count: filteredCalls.filter((c: Call) => parseInt(c.Duration) > 600).length }
      ];

      // Real-time data (mock for demonstration)
      const realTimeData = Array.from({ length: 20 }, (_, i) => {
        const time = new Date(Date.now() - (19 - i) * 30000);
        return {
          time: time.toLocaleTimeString('en-US', { hour12: false, minute: '2-digit', second: '2-digit' }),
          active: Math.floor(Math.random() * 15) + 5
        };
      });

      // Mock sentiment data
      const sentimentData = [
        { sentiment: 'Positive', count: Math.floor(completed * 0.6), percentage: 60 },
        { sentiment: 'Neutral', count: Math.floor(completed * 0.3), percentage: 30 },
        { sentiment: 'Negative', count: Math.floor(completed * 0.1), percentage: 10 }
      ];

      // Weekly comparison data
      const weeklyComparison = Array.from({ length: 4 }, (_, i) => {
        const weekStart = new Date(now.getTime() - ((i + 1) * 7 * 24 * 60 * 60 * 1000));
        const weekEnd = new Date(weekStart.getTime() + (7 * 24 * 60 * 60 * 1000));
        const weekCalls = calls.filter((call: Call) => {
          const callDate = new Date(call.StartTime);
          return callDate >= weekStart && callDate < weekEnd;
        });
        const weekCompleted = weekCalls.filter((c: Call) => c.Status === 'completed').length;
        return {
          week: `Week ${i + 1}`,
          calls: weekCalls.length,
          successRate: weekCalls.length > 0 ? (weekCompleted / weekCalls.length) * 100 : 0
        };
      }).reverse();
      
      const analyticsData: Analytics = {
        totalCalls: filteredCalls.length,
        completedCalls: completed,
        failedCalls: failed,
        avgDuration,
        inboundCalls: inbound,
        outboundCalls: outbound,
        busyCalls: busy,
        transcribedCalls: transcribed,
        summarizedCalls: summarized,
        todaysCalls,
        weeklyGrowth: Math.random() * 20 - 10, // Mock data - replace with actual calculation
        monthlyGrowth: Math.random() * 30 - 15, // Mock data - replace with actual calculation
        peakHours,
        dailyStats,
        statusDistribution,
        hourlyDistribution,
        durationAnalysis,
        realTimeData,
        sentimentData,
        weeklyComparison
      };
      
      setAnalytics(analyticsData);
      setRecentCalls(calls.slice(0, 5)); // Get 5 most recent calls
      
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateFilter]);

  const handleOutboundCall = async () => {
    if (!toNumber) return alert("Please enter a number to call.");
    setCallStatus("Calling...");
    try {
      const res = await fetch("https://digital-api-tef8.onrender.com/api/outbound-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toNumber }),
      });
      const data = await res.json();
      if (res.ok) {
        setCallStatus("Call initiated successfully!");
        fetchAnalytics(); // Refresh analytics
        setToNumber("");
      } else {
        setCallStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setCallStatus("Failed to initiate call.");
    }
  };

  const MetricCard = ({ title, value, icon: Icon, trend, trendValue, color = "blue", subtitle }: {
    title: string;
    value: string | number;
    icon: any;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    color?: string;
    subtitle?: string;
  }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">{value}</p>
          {subtitle && <p className="text-slate-500 text-xs">{subtitle}</p>}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {trend && trendValue && (
        <div className="flex items-center gap-1 mt-3 pt-3 border-t border-slate-200">
          {trend === "up" && <ArrowUp className="w-3 h-3 text-green-500" />}
          {trend === "down" && <ArrowDown className="w-3 h-3 text-red-500" />}
          {trend === "neutral" && <Minus className="w-3 h-3 text-slate-500" />}
          <span className={`text-xs font-semibold ${
            trend === "up" ? "text-green-600" : 
            trend === "down" ? "text-red-600" : "text-slate-600"
          }`}>
            {trendValue}
          </span>
          <span className="text-slate-500 text-xs ml-1">vs last period</span>
        </div>
      )}
    </div>
  );

  // Chart Components
  const CallVolumeChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
        />
        <Area type="monotone" dataKey="calls" stroke="#3b82f6" fillOpacity={1} fill="url(#callsGradient)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );

  const HourlyChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="hour" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
        />
        <Bar dataKey="calls" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const DurationChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="range" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
        />
        <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const StatusPieChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          dataKey="count"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={(entry: any) => `${entry.payload.status} ${(entry.percent * 100).toFixed(1)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );

  const WeeklyComparisonChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="week" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
        />
        <Legend />
        <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} name="Total Calls" />
        <Line type="monotone" dataKey="successRate" stroke="#10b981" strokeWidth={2} name="Success Rate %" />
      </LineChart>
    </ResponsiveContainer>
  );

  const RealTimeChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="time" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
        />
        <Area type="monotone" dataKey="active" stroke="#10b981" fillOpacity={1} fill="url(#activeGradient)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Sidebar />
        <main className="flex-1 ml-60 p-4">
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

      <main className="flex-1 ml-60 p-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Analytics Dashboard
                </h1>
                <p className="text-slate-600">Real-time insights into your AI call center performance</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 shadow-md focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
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
          <section className="mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-white" />
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
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>
                <button
                  onClick={handleOutboundCall}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </button>
              </div>
              
              {callStatus && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
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
              {/* Key Metrics Grid */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Key Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

              {/* Enhanced Analytics Section */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Advanced Performance Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <MetricCard
                    title="Agent Efficiency"
                    value="94.2%"
                    icon={Award}
                    color="blue"
                    trend="up"
                    trendValue="1.8%"
                  />
                  <MetricCard
                    title="Customer Satisfaction"
                    value="4.7/5"
                    icon={Headphones}
                    color="green"
                    trend="up"
                    trendValue="0.3"
                  />
                  <MetricCard
                    title="Response Time"
                    value="2.1s"
                    icon={Zap}
                    color="orange"
                    trend="down"
                    trendValue="0.4s"
                  />
                </div>
              </section>

              {/* Charts Section */}
              <section className="mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Call Volume Trend */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-bold text-slate-800">Call Volume Trend</h3>
                    </div>
                    <CallVolumeChart data={analytics.dailyStats} />
                  </div>

                  {/* Hourly Distribution */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-6 h-6 text-purple-500" />
                      <h3 className="text-xl font-bold text-slate-800">Hourly Call Distribution</h3>
                    </div>
                    <HourlyChart data={analytics.hourlyDistribution} />
                  </div>

                  {/* Duration Analysis */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <BarChart3 className="w-6 h-6 text-indigo-500" />
                      <h3 className="text-xl font-bold text-slate-800">Call Duration Analysis</h3>
                    </div>
                    <DurationChart data={analytics.durationAnalysis} />
                  </div>

                  {/* Weekly Comparison */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-bold text-slate-800">Weekly Performance</h3>
                    </div>
                    <WeeklyComparisonChart data={analytics.weeklyComparison} />
                  </div>
                </div>
              </section>

              {/* Call Distribution */}
              <section className="mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Direction Distribution */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <PieChart className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-bold text-slate-800">Call Direction</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <PhoneIncoming className="w-5 h-5 text-blue-500" />
                          <span className="font-semibold text-slate-800">Inbound</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-800">{analytics.inboundCalls}</div>
                          <div className="text-sm text-slate-600">
                            {analytics.totalCalls > 0 ? ((analytics.inboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <PhoneOutgoing className="w-5 h-5 text-purple-500" />
                          <span className="font-semibold text-slate-800">Outbound</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-800">{analytics.outboundCalls}</div>
                          <div className="text-sm text-slate-600">
                            {analytics.totalCalls > 0 ? ((analytics.outboundCalls / analytics.totalCalls) * 100).toFixed(1) : 0}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Distribution */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <BarChart3 className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-bold text-slate-800">Call Status</h3>
                    </div>
                    <StatusPieChart data={analytics.statusDistribution} />
                  </div>
                </div>
              </section>

              {/* AI Analysis Metrics */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4">AI Analysis Performance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <MetricCard
                    title="Transcribed Calls"
                    value={analytics.transcribedCalls}
                    icon={FileText}
                    subtitle={`${analytics.totalCalls > 0 ? ((analytics.transcribedCalls / analytics.totalCalls) * 100).toFixed(1) : 0}% of total`}
                    color="violet"
                  />
                  <MetricCard
                    title="Summarized Calls"
                    value={analytics.summarizedCalls}
                    icon={Brain}
                    subtitle={`${analytics.transcribedCalls > 0 ? ((analytics.summarizedCalls / analytics.transcribedCalls) * 100).toFixed(1) : 0}% of transcribed`}
                    color="amber"
                  />
                  <MetricCard
                    title="Processing Rate"
                    value={`${analytics.transcribedCalls > 0 ? ((analytics.summarizedCalls / analytics.transcribedCalls) * 100).toFixed(1) : 0}%`}
                    icon={Activity}
                    subtitle="Summary completion"
                    color="emerald"
                  />
                </div>

                {/* AI Insights Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-6 border border-violet-200">
                    <h3 className="text-xl font-bold text-violet-800 mb-4">Sentiment Analysis</h3>
                    <div className="space-y-3">
                      {analytics.sentimentData.map((sentiment) => (
                        <div key={sentiment.sentiment} className="flex justify-between items-center">
                          <span className="text-violet-700">{sentiment.sentiment}</span>
                          <span className={`font-bold ${
                            sentiment.sentiment === 'Positive' ? 'text-green-600' :
                            sentiment.sentiment === 'Neutral' ? 'text-slate-600' : 'text-red-600'
                          }`}>
                            {sentiment.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Top Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {['support', 'billing', 'technical', 'refund', 'upgrade', 'cancel'].map(keyword => (
                        <span key={keyword} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Real-time Activity */}
              <section className="mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-slate-800">Real-time Call Activity</h3>
                  </div>
                  <RealTimeChart data={analytics.realTimeData} />
                </div>
              </section>

              {/* Peak Hours */}
              {analytics.peakHours.length > 0 && (
                <section className="mb-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-6 h-6 text-indigo-500" />
                      <h3 className="text-xl font-bold text-slate-800">Peak Call Hours</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {analytics.peakHours.map((peak, index) => (
                        <div key={peak.hour} className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                          <div className="text-2xl font-bold text-indigo-600 mb-1">
                            {peak.hour}:00
                          </div>
                          <div className="text-slate-600 text-sm">
                            {peak.count} calls
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            Rank #{index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Recent Activity */}
              <section className="mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-bold text-slate-800">Recent Calls</h3>
                    </div>
                    <a href="/calls" className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
                      View All →
                    </a>
                  </div>
                  
                  {recentCalls.length > 0 ? (
                    <div className="space-y-3">
                      {recentCalls.map((call) => (
                        <div key={call.Sid} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              {call.Direction === 'inbound' ? (
                                <PhoneIncoming className="w-4 h-4 text-blue-500" />
                              ) : (
                                <PhoneOutgoing className="w-4 h-4 text-purple-500" />
                              )}
                              <span className="font-medium text-slate-800">{call.From} → {call.To}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {call.Status === 'completed' && <CheckCircle className="w-3 h-3 text-green-500" />}
                              {call.Status === 'failed' && <XCircle className="w-3 h-3 text-red-500" />}
                              {call.Status === 'busy' && <AlertCircle className="w-3 h-3 text-yellow-500" />}
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                call.Status === 'completed' ? 'bg-green-100 text-green-700' :
                                call.Status === 'failed' ? 'bg-red-100 text-red-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {call.Status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-slate-800">{call.Duration}s</div>
                            <div className="text-xs text-slate-500">
                              {new Date(call.StartTime).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <PhoneCall className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-500">No recent calls found</p>
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