'use client';

import Sidebar from '@/components/Sidebar';
import { callsAPI } from '@/lib/api';
import { Call, CallStats } from '@/types';
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  PlayArrow as PlayIcon,
  Refresh as RefreshIcon,
  Search as SearchIcon,
  Description as TranscriptIcon
} from '@mui/icons-material';
import {
  Alert,
  AppBar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for testing when API is not available
const mockCalls: Call[] = [
  {
    id: "call_001",
    phone_number: "+1234567890",
    direction: "inbound",
    status: "completed",
    duration: 125,
    start_time: "2024-10-24T10:00:00Z",
    end_time: "2024-10-24T10:02:05Z"
  },
  {
    id: "call_002",
    phone_number: "+1987654321",
    direction: "outbound",
    status: "completed",
    duration: 89,
    start_time: "2024-10-24T11:30:00Z",
    end_time: "2024-10-24T11:31:29Z"
  },
  {
    id: "call_003",
    phone_number: "+1555666777",
    direction: "inbound",
    status: "missed",
    duration: 0,
    start_time: "2024-10-24T14:15:00Z"
  }
];

const mockStats: CallStats = {
  total_calls: 25,
  completed_calls: 22,
  missed_calls: 3,
  total_duration: 3456,
  average_duration: 138,
  calls_by_direction: {
    inbound: 15,
    outbound: 10
  }
};

const Dashboard = () => {
  const router = useRouter();
  const [calls, setCalls] = useState<Call[]>([]);
  const [allCalls, setAllCalls] = useState<Call[]>([]); // Store unfiltered calls
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState<CallStats | null>(null);
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedCall, setExpandedCall] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [availableAgents, setAvailableAgents] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Real-time data fetching states
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(true);
  const [lastRefreshTime, setLastRefreshTime] = useState<Date | null>(null);
  const [refreshInterval, setRefreshInterval] = useState(30000); // 30 seconds default
  const [isBackgroundFetching, setIsBackgroundFetching] = useState(false);
  const [newCallsCount, setNewCallsCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchCalls = async (page = 1, limit = 100, search = '', isBackground = false) => {
    try {
      if (!isBackground) {
        setLoading(true);
      } else {
        setIsBackgroundFetching(true);
      }
      setError(null);

      // First try the health check
      await callsAPI.healthCheck();

      // If health check passes, try to fetch real data
      let response;
      if (search) {
        response = await callsAPI.searchCalls(search, { page, limit });
      } else {
        response = await callsAPI.getCalls({ page, limit });
      }

      const callsData = response.data.data?.calls || response.data.data || [];

      // Check for new calls if this is a background fetch
      if (isBackground && calls.length > 0) {
        const newCalls = callsData.filter((newCall: Call) =>
          !calls.some(existingCall => existingCall.id === newCall.id)
        );
        setNewCallsCount(newCalls.length);

        // Show notification for new calls
        if (newCalls.length > 0) {
          console.log(`${newCalls.length} new call(s) received`);
        }
      }

      setCalls(callsData);
      setAllCalls(callsData); // Store unfiltered calls
      setIsUsingMockData(false);
      setLastRefreshTime(new Date());

    } catch (err: any) {
      console.warn('API not available, using mock data:', err.message);
      // Fall back to mock data
      setCalls(mockCalls);
      setAllCalls(mockCalls); // Store unfiltered mock calls
      setIsUsingMockData(true);
      setError(null); // Clear error since we're using mock data
      setLastRefreshTime(new Date());
    } finally {
      if (!isBackground) {
        setLoading(false);
      } else {
        setIsBackgroundFetching(false);
      }
    }
  };

  const fetchAgents = async () => {
    try {
      const response = await callsAPI.getAgents();
      const agentList = response.data.data || [];
      // Extract agent names
      const agentNames = agentList.map((agent: any) => agent.name);
      setAvailableAgents(agentNames);
    } catch (err: any) {
      console.warn('Could not fetch agents:', err.message);
      // Fallback to extracting from calls if agents fetch fails
      const agents = [...new Set(calls.map((call: Call) => call.agent_id).filter(Boolean))];
      setAvailableAgents(agents as string[]);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await callsAPI.getStats();
      setStats(response.data.data);
    } catch (err: any) {
      console.warn('Stats API not available, using mock data');
      setStats(mockStats);
    }
  };

  useEffect(() => {
    if (mounted) {
      fetchCalls();
      fetchStats();
      fetchAgents();
    }
  }, [mounted]);

  // Real-time polling effect
  useEffect(() => {
    if (!mounted || !isAutoRefreshEnabled) return;

    const interval = setInterval(() => {
      // Only do background fetch if not currently loading
      if (!loading) {
        fetchCalls(1, 100, searchQuery, true); // Background fetch
        fetchStats();
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [mounted, isAutoRefreshEnabled, refreshInterval, loading, searchQuery]);

  // Reset new calls count when user interacts
  useEffect(() => {
    setNewCallsCount(0);
  }, [expandedCall]);

  const handleSearch = () => {
    if (isUsingMockData) {
      // Filter mock data
      const filtered = mockCalls.filter(call =>
        call.phone_number?.includes(searchQuery) ||
        call.id.includes(searchQuery) ||
        call.status?.includes(searchQuery.toLowerCase())
      );
      setCalls(filtered);
    } else {
      fetchCalls(1, 100, searchQuery);
    }
  };

  const handleApplyFilters = () => {
    // Start with all calls
    let filteredCalls = [...allCalls];

    // Filter by agent
    if (selectedAgent) {
      filteredCalls = filteredCalls.filter(call => call.agent_id === selectedAgent);
    }

    // Filter by status
    if (selectedStatus) {
      filteredCalls = filteredCalls.filter(call =>
        call.status === selectedStatus
      );
    }

    // Filter by phone number
    if (phoneFilter) {
      filteredCalls = filteredCalls.filter(call =>
        call.phone_number?.includes(phoneFilter)
      );
    }

    // Filter by date range
    if (startDate) {
      const startTime = new Date(startDate).getTime();
      filteredCalls = filteredCalls.filter(call => {
        const callTime = new Date(call.start_time || '').getTime();
        return callTime >= startTime;
      });
    }

    if (endDate) {
      const endTime = new Date(endDate).getTime();
      filteredCalls = filteredCalls.filter(call => {
        const callTime = new Date(call.start_time || '').getTime();
        return callTime <= endTime;
      });
    }

    setCalls(filteredCalls);
  };

  const handleClearFilters = () => {
    setSelectedAgent('');
    setSelectedStatus('');
    setPhoneFilter('');
    setStartDate('');
    setEndDate('');
    // Restore all calls
    setCalls(allCalls);
  };

  const handleRefresh = () => {
    setNewCallsCount(0);
    fetchCalls();
    fetchStats();
    fetchAgents();
  };

  const toggleAutoRefresh = () => {
    setIsAutoRefreshEnabled(!isAutoRefreshEnabled);
    if (!isAutoRefreshEnabled) {
      setLastRefreshTime(new Date());
    }
  };

  const changeRefreshInterval = (newInterval: number) => {
    setRefreshInterval(newInterval);
  };

  const formatLastRefreshTime = () => {
    if (!lastRefreshTime) return '';
    const now = new Date();
    const diffMs = now.getTime() - lastRefreshTime.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);

    if (diffSeconds < 60) return `${diffSeconds}s ago`;
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    return `${diffHours}h ago`;
  };

  const handleCallClick = async (callId: string) => {
    if (expandedCall === callId) {
      setExpandedCall(null);
    } else {
      setExpandedCall(callId);
      // Fetch full call details if needed
      try {
        const response = await callsAPI.getCall(callId);
        const callData = response.data.data || response.data;
        // Update the call in the list with full details
        setCalls(calls.map(c => c.id === callId ? { ...c, ...callData } : c));
      } catch (err) {
        console.error('Failed to fetch call details:', err);
      }
    }
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'N/A';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'success' as const;
      case 'missed':
        return 'error' as const;
      case 'ongoing':
        return 'warning' as const;
      default:
        return 'default' as const;
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)' }}>
      {/* Mobile Menu Button */}
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1300,
          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
          color: '#fff',
          '&:hover': { background: 'linear-gradient(135deg, #0284c7, #0369a1)' },
          boxShadow: '0 8px 32px rgba(14, 165, 233, 0.3)',
          borderRadius: 2
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <Box
          onClick={() => setSidebarOpen(false)}
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(14, 165, 233, 0.3)',
            zIndex: 1200,
            backdropFilter: 'blur(4px)'
          }}
        />
      )}

      {/* Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: 240,
          transform: {
            xs: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            md: 'translateX(0)'
          },
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1250
        }}
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </Box>

      {/* Main Content */}
      <Box sx={{
        width: '100%',
        ml: { xs: 0, md: '240px' },
        pt: { xs: '80px', md: 0 }
      }}>
        {!mounted ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <CircularProgress sx={{ color: '#4ade80' }} size={60} />
          </Box>
        ) : (
          <>
            <AppBar
              position="static"
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                borderBottom: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.1)'
              }}
            >
              <Toolbar sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    borderRadius: 2,
                    p: 1,
                    mr: 2,
                    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 24, color: '#fff' }} />
                </Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.5rem'
                  }}
                >
                  Call Logs
                </Typography>
                <IconButton
                  sx={{
                    color: '#64748b',
                    background: 'rgba(14, 165, 233, 0.1)',
                    '&:hover': {
                      color: '#0ea5e9',
                      background: 'rgba(14, 165, 233, 0.2)',
                      transform: 'rotate(180deg)'
                    },
                    transition: 'all 0.3s ease',
                    borderRadius: 2
                  }}
                  onClick={handleRefresh}
                >
                  <RefreshIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              {/* API Status Alert */}
              {isUsingMockData && (
                <Alert severity="warning" sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                  borderColor: '#f59e0b',
                  color: '#92400e',
                  border: '1px solid #f59e0b',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
                }}>
                  <strong>Demo Mode:</strong> Unable to connect to Millis AI API. Showing sample data.
                  Please configure your API key in server/.env to see real data.
                </Alert>
              )}

              {/* Filters Section - Millis AI Style */}
              <Paper sx={{
                p: 3,
                mb: 3,
                background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 32px rgba(14, 165, 233, 0.1)'
              }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={showFilters ? 2 : 0}>
                  <Typography variant="h6" sx={{
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 700
                  }}>
                    <SearchIcon sx={{ color: '#0ea5e9' }} /> Filters
                  </Typography>
                  <Button
                    onClick={() => setShowFilters(!showFilters)}
                    sx={{
                      color: '#0ea5e9',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'rgba(14, 165, 233, 0.1)'
                      }
                    }}
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </Button>
                </Box>

                <Collapse in={showFilters}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                    <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
                      <FormControl fullWidth size="small">
                        <InputLabel sx={{ color: '#64748b' }}>Agent</InputLabel>
                        <Select
                          value={selectedAgent}
                          label="Agent"
                          onChange={(e) => setSelectedAgent(e.target.value)}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: '#ffffff',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
                                '& .MuiMenuItem-root': {
                                  color: '#0f172a',
                                  '&:hover': {
                                    bgcolor: '#f1f5f9'
                                  },
                                  '&.Mui-selected': {
                                    bgcolor: '#e0f2fe',
                                    '&:hover': {
                                      bgcolor: '#bae6fd'
                                    }
                                  }
                                }
                              }
                            }
                          }}
                          sx={{
                            color: '#0f172a',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#e2e8f0' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' },
                            '.MuiSvgIcon-root': { color: '#64748b' },
                            background: '#ffffff'
                          }}
                        >
                          <MenuItem value="">All</MenuItem>
                          {availableAgents.map((agent) => (
                            <MenuItem key={agent} value={agent}>
                              {agent}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
                      <FormControl fullWidth size="small">
                        <InputLabel sx={{ color: '#64748b' }}>Call Status</InputLabel>
                        <Select
                          value={selectedStatus}
                          label="Call Status"
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: '#ffffff',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
                                '& .MuiMenuItem-root': {
                                  color: '#0f172a',
                                  '&:hover': {
                                    bgcolor: '#f1f5f9'
                                  },
                                  '&.Mui-selected': {
                                    bgcolor: '#e0f2fe',
                                    '&:hover': {
                                      bgcolor: '#bae6fd'
                                    }
                                  }
                                }
                              }
                            }
                          }}
                          sx={{
                            color: '#0f172a',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#e2e8f0' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' },
                            '.MuiSvgIcon-root': { color: '#64748b' },
                            background: '#ffffff'
                          }}
                        >
                          <MenuItem value="">All Status</MenuItem>
                          <MenuItem value="completed">Completed</MenuItem>
                          <MenuItem value="agent-ended">Agent Ended</MenuItem>
                          <MenuItem value="user-ended">User Ended</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ flex: '2 1 300px', minWidth: '200px' }}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Phone Number"
                        value={phoneFilter}
                        onChange={(e) => setPhoneFilter(e.target.value)}
                        sx={{
                          '.MuiOutlinedInput-root': {
                            color: '#0f172a',
                            background: '#ffffff',
                            '& fieldset': { borderColor: '#e2e8f0' },
                            '&:hover fieldset': { borderColor: '#0ea5e9' },
                            '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                          },
                          '.MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
                      <TextField
                        fullWidth
                        size="small"
                        type="datetime-local"
                        label="Start Time"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true, sx: { color: '#64748b' } }}
                        sx={{
                          '.MuiOutlinedInput-root': {
                            color: '#0f172a',
                            background: '#ffffff',
                            '& fieldset': { borderColor: '#e2e8f0' },
                            '&:hover fieldset': { borderColor: '#0ea5e9' },
                            '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                          }
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
                      <TextField
                        fullWidth
                        size="small"
                        type="datetime-local"
                        label="End Time"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{ shrink: true, sx: { color: '#64748b' } }}
                        sx={{
                          '.MuiOutlinedInput-root': {
                            color: '#0f172a',
                            background: '#ffffff',
                            '& fieldset': { borderColor: '#e2e8f0' },
                            '&:hover fieldset': { borderColor: '#0ea5e9' },
                            '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                          }
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: '0 0 auto', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Button
                        variant="outlined"
                        onClick={handleClearFilters}
                        sx={{
                          color: '#64748b',
                          borderColor: '#e2e8f0',
                          background: '#ffffff',
                          '&:hover': {
                            borderColor: '#0ea5e9',
                            color: '#0ea5e9',
                            background: 'rgba(14, 165, 233, 0.1)'
                          }
                        }}
                      >
                        Clear All
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleApplyFilters}
                        sx={{
                          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                          color: '#ffffff',
                          fontWeight: 600,
                          '&:hover': {
                            background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(14, 165, 233, 0.4)'
                          },
                          transition: 'all 0.3s ease',
                          borderRadius: 2
                        }}
                      >
                        Apply Filters
                      </Button>
                    </Box>
                  </Box>
                </Collapse>
              </Paper>

              {/* Error Alert */}
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              {/* Call History - Millis AI Style */}
              <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
                Call History
              </Typography>

              {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                  <CircularProgress sx={{ color: '#4ade80' }} size={60} />
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                  {calls.map((call: any) => (
                    <Paper key={call.id} sx={{
                      background: '#1a1d2e',
                      borderRadius: 2,
                      border: '1px solid #2a2d3e',
                      overflow: 'hidden'
                    }}>
                      {/* Call Summary Row - Clickable */}
                      <Box
                        sx={{
                          p: 2.5,
                          cursor: 'pointer',
                          '&:hover': { background: '#212438' },
                          transition: 'background 0.2s'
                        }}
                        onClick={() => handleCallClick(call.id)}
                      >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                          <Box sx={{ flex: '1 1 150px', minWidth: '120px' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                ID
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                                {call.session_id || call.id}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ flex: '1 1 150px', minWidth: '120px' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                Agent
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#fff' }}>
                                {call.agent_id || 'dr appointment'}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ flex: '1 1 150px', minWidth: '120px' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                Phone #
                              </Typography>
                              <Box display="flex" alignItems="center" gap={0.5}>
                                <Typography variant="body2" sx={{ color: '#fff' }}>
                                  {call.phone_number || 'Unknown'}
                                </Typography>
                                {call.direction === 'inbound' && (
                                  <Chip label="→" size="small" sx={{ height: 20, fontSize: '0.7rem', background: '#3b82f6', color: '#fff' }} />
                                )}
                              </Box>
                            </Box>
                          </Box>

                          <Box sx={{ flex: '1 1 120px', minWidth: '100px' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                Status
                              </Typography>
                              <Chip
                                label={call.status || call.call_status || 'completed'}
                                size="small"
                                sx={{
                                  background: '#065f46',
                                  color: '#fff',
                                  fontSize: '0.75rem',
                                  height: 24
                                }}
                              />
                            </Box>
                          </Box>

                          <Box sx={{ flex: '1 1 100px', minWidth: '80px' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                Duration
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#fff' }}>
                                {formatDuration(call.duration)}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ flex: '1 1 150px', minWidth: '120px', textAlign: 'right' }}>
                            <Box>
                              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                                Timestamp
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                                {call.start_time ? new Date(call.start_time).toLocaleString() : 'N/A'}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      {/* Expanded Details - Recordings & Transcription */}
                      <Collapse in={expandedCall === call.id}>
                        <Divider sx={{ borderColor: '#2a2d3e' }} />
                        <Box sx={{ p: 3, background: '#151824' }}>
                          {/* Recordings & AI Analysis Section */}
                          <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PlayIcon /> Recordings & AI Analysis
                          </Typography>

                          {call.recording_url || (call.recording && (call.recording.url || call.recording.recording_url)) ? (
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="body2" sx={{ color: '#9ca3af', fontFamily: 'monospace', mb: 1, fontSize: '0.85rem' }}>
                                {call.recording_url || call.recording.url || call.recording.recording_url}
                              </Typography>
                              <audio
                                controls
                                style={{ width: '100%', marginTop: 8 }}
                                src={call.recording_url || call.recording.url || call.recording.recording_url}
                              >
                                Your browser does not support the audio element.
                              </audio>
                            </Box>
                          ) : call.agent_config?.call_settings?.enable_recording ? (
                            <Alert
                              severity="info"
                              sx={{
                                mb: 3,
                                background: '#1e293b',
                                border: '1px solid #334155',
                                color: '#cbd5e1',
                                '& .MuiAlert-icon': { color: '#60a5fa' }
                              }}
                            >
                              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                ✅ Recording Enabled - Processing
                              </Typography>
                              <Typography variant="caption">
                                Recording is enabled for this call. It may still be processing. Check your <a href="https://dashboard.millis.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontWeight: 'bold' }}>Millis Dashboard</a> for the recording.
                              </Typography>
                            </Alert>
                          ) : (
                            <Alert
                              severity="info"
                              sx={{
                                mb: 3,
                                background: '#1e293b',
                                border: '1px solid #334155',
                                color: '#cbd5e1',
                                '& .MuiAlert-icon': { color: '#60a5fa' }
                              }}
                            >
                              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                No Recording Available
                              </Typography>
                              <Typography variant="caption">
                                Recording was not enabled for this call. Enable <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: 4 }}>enable_recording: true</code> in agent settings.
                              </Typography>
                            </Alert>
                          )}

                          {/* Call Transcription */}
                          {call.chat || call.transcription ? (
                            <Box>
                              <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TranscriptIcon /> Call Transcription
                              </Typography>
                              <Paper sx={{
                                p: 2,
                                background: '#0f1117',
                                border: '1px solid #1f2937',
                                maxHeight: 400,
                                overflow: 'auto'
                              }}>
                                {(() => {
                                  try {
                                    let chatData = call.chat || call.transcription;

                                    if (typeof chatData === 'string') {
                                      if (!chatData.trim().startsWith('[') && !chatData.trim().startsWith('{')) {
                                        return (
                                          <Typography variant="body2" sx={{ color: '#e5e7eb', whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                                            {chatData}
                                          </Typography>
                                        );
                                      }

                                      try {
                                        chatData = JSON.parse(chatData);
                                      } catch (parseError) {
                                        return (
                                          <Alert severity="error" sx={{ background: '#7f1d1d', borderColor: '#991b1b' }}>
                                            Failed to parse transcription
                                          </Alert>
                                        );
                                      }
                                    }

                                    if (Array.isArray(chatData)) {
                                      return chatData.map((message: any, index: number) => {
                                        if (message.role === 'tool') return null;

                                        return (
                                          <Box
                                            key={index}
                                            sx={{
                                              mb: 1.5,
                                              p: 1.5,
                                              borderRadius: 1,
                                              background: message.role === 'assistant' ? '#1e3a8a' : '#065f46',
                                              border: '1px solid',
                                              borderColor: message.role === 'assistant' ? '#1e40af' : '#047857'
                                            }}
                                          >
                                            <Typography
                                              variant="caption"
                                              sx={{
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                display: 'block',
                                                mb: 0.5,
                                                opacity: 0.8
                                              }}
                                            >
                                              {message.role === 'assistant' ? '🤖 Agent' : '👤 User'}
                                            </Typography>
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                color: '#fff',
                                                whiteSpace: 'pre-wrap',
                                                lineHeight: 1.6,
                                                fontSize: '0.9rem'
                                              }}
                                            >
                                              {message.content}
                                            </Typography>
                                          </Box>
                                        );
                                      }).filter(Boolean);
                                    }

                                    return (
                                      <Alert severity="warning" sx={{ background: '#78350f', borderColor: '#92400e' }}>
                                        Unexpected transcription format
                                      </Alert>
                                    );
                                  } catch (e) {
                                    return (
                                      <Alert severity="error" sx={{ background: '#7f1d1d', borderColor: '#991b1b' }}>
                                        Failed to display transcription
                                      </Alert>
                                    );
                                  }
                                })()}
                              </Paper>
                            </Box>
                          ) : (
                            <Alert
                              severity="info"
                              sx={{
                                background: '#1e293b',
                                border: '1px solid #334155',
                                color: '#cbd5e1',
                                '& .MuiAlert-icon': { color: '#60a5fa' }
                              }}
                            >
                              No transcription available for this call
                            </Alert>
                          )}
                        </Box>
                      </Collapse>
                    </Paper>
                  ))}

                  {calls.length === 0 && !loading && (
                    <Paper sx={{ p: 4, textAlign: 'center' }}>
                      <Typography variant="h6" color="textSecondary">
                        No calls found
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {isUsingMockData
                          ? "Try adjusting your search criteria"
                          : "Configure your Millis AI API key to load call data"
                        }
                      </Typography>
                    </Paper>
                  )}
                </Box>
              )}
            </Container>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;