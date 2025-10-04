"use client";
import { useState, useEffect } from "react";
import { Phone, Search, Filter, Play, FileText, Brain, ChevronLeft, ChevronRight, Calendar, Clock, User, Users, PhoneCall, PhoneIncoming, PhoneOutgoing, CheckCircle, XCircle, AlertCircle, Loader2, BarChart3, PieChart as PieChartIcon, TrendingUp, TrendingDown, Activity, Zap, LineChart as LineChartIcon } from "lucide-react";

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
import Sidebar from "@/components/Sidebar";


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
    console.log("Fetching ALL calls from MongoDB...");
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

  const getStatusData = () => {
    const completed = allCalls.filter(c => c.Status === 'completed').length;
    const failed = allCalls.filter(c => c.Status === 'failed').length;
    const busy = allCalls.filter(c => c.Status === 'busy').length;
    const total = allCalls.length;
    
    return [
      { name: 'Completed', value: completed, percentage: total ? (completed/total*100).toFixed(1) : '0', color: '#10b981', darkColor: '#059669' },
      { name: 'Failed', value: failed, percentage: total ? (failed/total*100).toFixed(1) : '0', color: '#ef4444', darkColor: '#dc2626' },
      { name: 'Busy', value: busy, percentage: total ? (busy/total*100).toFixed(1) : '0', color: '#f59e0b', darkColor: '#d97706' },
    ];
  };

  const getHourlyData = () => {
    const hourCounts = new Array(24).fill(0);
    allCalls.forEach(call => {
      const hour = new Date(call.StartTime).getHours();
      hourCounts[hour]++;
    });
    
    return hourCounts.map((count, hour) => ({
      hour: `${hour.toString().padStart(2, '0')}:00`,
      calls: count,
      hourNum: hour
    }));
  };

  const getDailyData = () => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      const dayCalls = allCalls.filter(call => new Date(call.StartTime).toDateString() === dateStr);
      
      last7Days.push({
        date: date.toLocaleDateString('en-US', { weekday: 'short' }),
        calls: dayCalls.length,
        completed: dayCalls.filter(c => c.Status === 'completed').length
      });
    }
    return last7Days;
  };

  const EnhancedDonutChart = ({ data, title }: { data: any[], title: string }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    
    const slices = data.map(item => {
      const percentage = total > 0 ? (item.value / total) * 100 : 0;
      const angle = (percentage / 100) * 360;
      const slice = {
        ...item,
        percentage,
        startAngle: currentAngle,
        endAngle: currentAngle + angle
      };
      currentAngle += angle;
      return slice;
    });

    const createPath = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
      const start = polarToCartesian(centerX, centerY, radius, endAngle);
      const end = polarToCartesian(centerX, centerY, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      return `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
    };

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    };

    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <PieChartIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{title}</h3>
              <p className="text-sm text-slate-500">Real-time call analytics</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="relative group">
              <svg width="240" height="240" viewBox="0 0 240 240" className="transform -rotate-90 drop-shadow-xl">
                <defs>
                  {slices.map((slice, index) => (
                    <linearGradient key={`gradient-${index}`} id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: slice.color, stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: slice.darkColor || slice.color, stopOpacity: 0.8 }} />
                    </linearGradient>
                  ))}
                </defs>
                
                {slices.map((slice, index) => (
                  <path
                    key={index}
                    d={createPath(120, 120, 90, slice.startAngle, slice.endAngle)}
                    fill={`url(#grad-${index})`}
                    className="hover:scale-105 transition-all duration-300 cursor-pointer filter hover:brightness-110"
                  />
                ))}
                
                <circle cx="120" cy="120" r="50" fill="white" className="drop-shadow-lg" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">{total}</div>
                  <div className="text-sm text-slate-500 font-medium">Total Calls</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300">
                  <div 
                    className="w-6 h-6 rounded-lg shadow-md" 
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}, ${item.darkColor || item.color})` 
                    }}
                  ></div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">{item.name}</div>
                    <div className="text-sm text-slate-600">{item.value} calls</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-800">{item.percentage}%</div>
                    <div className="text-xs text-slate-500">of total</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EnhancedHorizontalBarChart = ({ data, title }: { data: any[], title: string }) => {
    const maxValue = Math.max(...data.map(d => d.calls || 0), 1);
    
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{title}</h3>
              <p className="text-sm text-slate-500">24-hour activity pattern</p>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {data.slice(0, 24).map((item, index) => {
                const width = maxValue > 0 ? (item.calls / maxValue) * 100 : 0;
                const isPeak = item.calls === maxValue && maxValue > 0;
                
                return (
                  <div key={index} className="group">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium text-slate-700 flex-shrink-0">
                        {item.hour}
                      </div>
                      
                      <div className="flex-1 relative">
                        <div className="bg-slate-200 rounded-full h-6 overflow-hidden relative">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out relative ${
                              isPeak ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400' :
                              item.calls > maxValue * 0.7 ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400' :
                              item.calls > maxValue * 0.4 ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-400' :
                              'bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400'
                            }`}
                            style={{ width: `${width}%` }}
                          >
                            {width > 15 && (
                              <div className="absolute inset-0 flex items-center px-3">
                                <span className="text-white text-sm font-semibold">
                                  {item.calls}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {width <= 15 && (
                        <div className="w-8 text-sm font-semibold text-slate-800 text-right flex-shrink-0">
                          {item.calls}
                        </div>
                      )}
                      
                      {isPeak && (
                        <div className="flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EnhancedTrendChart = ({ data, title }: { data: any[], title: string }) => {
    const maxValue = Math.max(...data.map(d => d.calls || 0), 1);
    const chartHeight = 250;
    const chartWidth = 500;
    const padding = 50;
    
    const points = data.map((item, index) => {
      const x = padding + (index / Math.max(data.length - 1, 1)) * (chartWidth - 2 * padding);
      const y = chartHeight - padding - ((item.calls || 0) / maxValue) * (chartHeight - 2 * padding);
      return { x, y, ...item };
    });

    const pathPoints = points.map(p => `${p.x},${p.y}`).join(' ');
    const areaPoints = `${padding},${chartHeight - padding} ` + pathPoints + ` ${chartWidth - padding},${chartHeight - padding}`;

    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{title}</h3>
              <p className="text-sm text-slate-500">Weekly performance trends</p>
            </div>
          </div>
          
          <div className="relative">
            <svg width={chartWidth} height={chartHeight} className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.05 }} />
                </linearGradient>
                
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                  <stop offset="50%" style={{ stopColor: '#8b5cf6' }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899' }} />
                </linearGradient>
              </defs>
              
              <polygon
                points={areaPoints}
                fill="url(#areaGradient)"
              />
              
              <polyline
                points={pathPoints}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {points.map((point, index) => (
                <g key={index}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="white"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    className="hover:r-8 transition-all duration-300 cursor-pointer"
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill="#8b5cf6"
                  />
                </g>
              ))}
            </svg>
            
            <div className="flex justify-between mt-4 px-12">
              {data.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-slate-700">{item.date}</div>
                  <div className="text-xs text-slate-500">{item.calls} calls</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Sidebar />

      <main className="flex-1 pl-64 pr-8 py-4">
        <div className="container mx-auto max-w-7xl">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Call Analytics & Management
                </h1>
                <p className="text-slate-600">Advanced call insights with AI-powered analysis</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/50 shadow-md">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-sm">Live Updates</span>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/50 shadow-md">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-sm">{total} Total Calls</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Filter className="w-3 h-3 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Smart Filters</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Search by SID</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter SID..."
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/50 border border-slate-200 rounded-lg text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-white/50 border border-slate-200 rounded-lg text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  >
                    <option value="">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="busy">Busy</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Direction</label>
                  <select
                    value={directionFilter}
                    onChange={(e) => setDirectionFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-white/50 border border-slate-200 rounded-lg text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  >
                    <option value="">All Directions</option>
                    <option value="inbound">Inbound</option>
                    <option value="outbound">Outbound</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/50 border border-slate-200 rounded-lg text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/50 border border-slate-200 rounded-lg text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                  onClick={() => {
                    setPage(1);
                    fetchCalls();
                    fetchAllCalls();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Apply Filters & Refresh Analytics
                </button>
                
                <div className="flex items-center gap-3">
                  <label className="text-slate-700 font-medium">Show:</label>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setLimit(Number(e.target.value));
                      setPage(1);
                    }}
                    className="px-3 py-2 bg-white/50 border border-slate-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                  <span className="text-slate-700">per page</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-800">Call Records & AI Analysis</h2>
              <div className="text-sm text-slate-600">
                Showing {calls.length} of {total} calls
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-48 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-3" />
                  <p className="text-lg text-slate-600 font-medium">Loading call data...</p>
                </div>
              </div>
            ) : calls.length === 0 ? (
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-lg text-slate-500 font-medium">No calls found</p>
                <p className="text-slate-400 text-sm">Try adjusting your filters to see call data</p>
              </div>
            ) : (
              <div className="space-y-3">
                {calls.map((call) => (
                  <div key={call.Sid} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            call.Status === 'completed' ? 'bg-green-400' :
                            call.Status === 'failed' ? 'bg-red-400' :
                            call.Status === 'busy' ? 'bg-yellow-400' : 'bg-gray-400'
                          } shadow-sm`}></div>
                          <span className="font-mono text-xs text-slate-600">SID: {call.Sid}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-slate-500" />
                            <span className="font-medium text-slate-700 text-sm">From: {call.From}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-slate-500" />
                            <span className="font-medium text-slate-700 text-sm">To: {call.To}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-500" />
                            <span className="text-slate-600 text-sm">Duration: {call.Duration}s</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {getDirectionIcon(call.Direction)}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              call.Direction === 'inbound' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {call.Direction}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-1">
                          {getStatusIcon(call.Status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            call.Status === 'completed' ? 'bg-green-100 text-green-700' :
                            call.Status === 'failed' ? 'bg-red-100 text-red-700' :
                            call.Status === 'busy' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {call.Status.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="text-xs text-slate-600 space-y-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>Start: {new Date(call.StartTime).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>End: {new Date(call.EndTime).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {call.recordings && call.recordings.length > 0 ? (
                      <div className="border-t border-slate-200 pt-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Play className="w-4 h-4 text-blue-500" />
                          <h3 className="font-bold text-slate-800 text-sm">Recordings & AI Analysis</h3>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2 text-sm">
                            {call.recordings.map((rec) => (
                              <a
                                key={rec.Sid}
                                href={`https://digital-api-tef8.onrender.com/api/recording/${rec.Sid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 hover:text-slate-900 transition-all duration-200 group/link"
                              >
                                <Play className="w-3 h-3 group-hover/link:text-blue-500 transition-colors" />
                                <span className="font-mono text-xs">{rec.Sid}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleToggleTranscription(call)}
                            disabled={processing[call.Sid] === 'transcribing'}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${
                              visibleContent[call.Sid] === 'transcription' 
                                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md' 
                                : 'bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-sm hover:shadow-md'
                            }`}
                          >
                            {processing[call.Sid] === 'transcribing' ? (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                Transcribing...
                              </>
                            ) : (
                              <>
                                <FileText className="w-3 h-3" />
                                Transcription
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={() => handleToggleSummarization(call)}
                            disabled={processing[call.Sid] === 'summarizing' || !call.transcription}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${
                              visibleContent[call.Sid] === 'summary' 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                                : 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm hover:shadow-md'
                            }`}
                          >
                            {processing[call.Sid] === 'summarizing' ? (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                Summarizing...
                              </>
                            ) : (
                              <>
                                <Brain className="w-3 h-3" />
                                AI Summary
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-t border-slate-200 pt-3">
                        <p className="text-slate-500 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          No recordings available for this call
                        </p>
                      </div>
                    )}

                    {visibleContent[call.Sid] === 'transcription' && call.transcription && (
                      <div className="mt-3 p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                        <div className="flex items-center gap-1 mb-2">
                          <FileText className="w-3 h-3 text-violet-600" />
                          <h4 className="font-bold text-violet-800 text-sm">Transcription</h4>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">{call.transcription}</p>
                        </div>
                      </div>
                    )}

                    {visibleContent[call.Sid] === 'summary' && call.summary && (
                      <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-1 mb-2">
                          <Brain className="w-3 h-3 text-amber-600" />
                          <h4 className="font-bold text-amber-800 text-sm">AI Summary</h4>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">{call.summary}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className="flex justify-between items-center mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex items-center gap-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-sm rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3 h-3" />
              Previous
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-600 font-medium text-sm">
                Page {page} of {Math.ceil(total / limit) || 1}
              </span>
              <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
                <span>Total: {total} calls analyzed</span>
              </div>
            </div>
            
            <button
              disabled={page >= Math.ceil(total / limit)}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-sm rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <section className="mt-8 mb-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Complete Analytics Dashboard</h2>
                <p className="text-slate-500">
                  Comprehensive insights from all {allCalls.length} calls in your database
                  {analyticsLoading && <span className="ml-2 text-blue-500">• Updating...</span>}
                </p>
              </div>
            </div>
            
            {analyticsLoading ? (
              <div className="flex justify-center items-center h-48 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-3" />
                  <p className="text-lg text-slate-600 font-medium">Loading complete analytics...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 mb-8">
                  <EnhancedDonutChart data={getStatusData()} title="Call Status Distribution (All Calls)" />
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <EnhancedHorizontalBarChart data={getHourlyData()} title="Hourly Call Distribution (24H Pattern)" />
                  <EnhancedTrendChart data={getDailyData()} title="7-Day Call Trends" />
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}