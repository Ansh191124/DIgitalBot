'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Alert,
  CircularProgress,
  AppBar,
  Toolbar,
  Paper,
  IconButton,
  Divider,
  Avatar
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Phone as PhoneIcon,
  AccessTime as TimeIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  VolumeUp as VolumeIcon,
  Description as TranscriptIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { callsAPI } from '@/lib/api';

interface CallDetail {
  id: string;
  session_id?: string;
  call_id?: string;
  phone_number?: string;
  direction?: string;
  status?: string;
  duration?: number;
  start_time?: string;
  end_time?: string;
  agent_id?: string;
  agent_config?: any;
  metadata?: any;
  recording_url?: string;
  recording?: any;
  cost_breakdown?: any[];
  chat?: string | any[];
  transcription?: string | any[];
}

export default function CallDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [call, setCall] = useState<CallDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchCallDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await callsAPI.getCall(params.id);
      const callData = response.data.data || response.data;
      
      // Log the call data for debugging
      console.log('Call data received:', callData);
      console.log('Recording info:', {
        has_recording: !!callData.recording,
        has_recording_url: !!callData.recording_url,
        recording: callData.recording,
        recording_url: callData.recording_url
      });
      console.log('Chat field type:', typeof callData.chat);
      console.log('Chat field value:', callData.chat);
      
      setCall(callData);
      
    } catch (err: any) {
      console.error('Failed to fetch call details:', err);
      setError('Failed to load call details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchTranscription = async () => {
    try {
      const response = await callsAPI.getCallTranscription(params.id);
      setTranscription(response.data.transcription || response.data.data?.transcription || '');
    } catch (err: any) {
      console.warn('Transcription not available:', err.message);
      setTranscription('Transcription not available for this call.');
    }
  };

  useEffect(() => {
    if (mounted) {
      fetchCallDetail();
      fetchTranscription();
    }
  }, [mounted, params.id]);

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

  const handlePlayPause = () => {
    // Try to get recording URL from call data or construct it
    const recordingUrl = call?.recording_url || 
                        (call?.recording && typeof call.recording === 'object' && (call.recording as any).url) ||
                        callsAPI.getCallRecordingUrl(params.id);
    
    if (!recordingUrl && !call?.recording_url) {
      setError('Recording not available for this call.');
      return;
    }
    
    if (!audioRef) {
      const audio = new Audio(recordingUrl);
      setAudioRef(audio);
      audio.play().catch(err => {
        console.error('Failed to play audio:', err);
        setError('Failed to play recording. The audio file may not be available or you may need to download it separately.');
      });
      setIsPlaying(true);
      
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setError('Failed to load recording. The audio file may not be available.');
        setIsPlaying(false);
      };
    } else {
      if (isPlaying) {
        audioRef.pause();
        setIsPlaying(false);
      } else {
        audioRef.play().catch(err => {
          console.error('Failed to play audio:', err);
          setError('Failed to play recording.');
        });
        setIsPlaying(true);
      }
    }
  };

  if (!mounted) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error && !call) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button 
          variant="contained" 
          startIcon={<BackIcon />}
          onClick={() => router.push('/')}
        >
          Back to Dashboard
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => router.push('/')}
            sx={{ mr: 2 }}
          >
            <BackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Call Details - {call?.id || params.id}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {call && (
          <>
            {/* Call Overview Card */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2}>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      {call.phone_number || 'Unknown Number'}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Chip
                        label={call.direction || 'Unknown'}
                        size="small"
                        color={call.direction === 'inbound' ? 'primary' : 'secondary'}
                      />
                      <Chip
                        label={call.status || 'Unknown'}
                        size="small"
                        color={getStatusColor(call.status)}
                      />
                    </Box>
                  </Box>
                  
                  <Box display="flex" flexDirection="column" alignItems="flex-end" gap={1}>
                    <Typography variant="h4">
                      {formatDuration(call.duration)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Duration
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" flexWrap="wrap" gap={3}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TimeIcon fontSize="small" />
                    <Typography variant="body2">
                      Start: {call.start_time ? new Date(call.start_time).toLocaleString() : 'N/A'}
                    </Typography>
                  </Box>
                  
                  {call.end_time && (
                    <Box display="flex" alignItems="center" gap={1}>
                      <TimeIcon fontSize="small" />
                      <Typography variant="body2">
                        End: {new Date(call.end_time).toLocaleString()}
                      </Typography>
                    </Box>
                  )}
                  
                  {call.agent_id && (
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar sx={{ width: 24, height: 24 }}>AI</Avatar>
                      <Typography variant="body2">
                        Agent: {call.agent_id}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>

            {/* Recording Card */}
            <Card sx={{ mb: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <CardContent>
                <Typography variant="h6" display="flex" alignItems="center" gap={1} mb={3} sx={{ color: 'white', fontWeight: 600 }}>
                  <VolumeIcon sx={{ fontSize: 28 }} />
                  Call Recording
                </Typography>
                
                <Box>
                  {(() => {
                    const recordingUrl = call.recording_url || 
                                        (call.recording && typeof call.recording === 'object' && 
                                         ((call.recording as any).url || (call.recording as any).recording_url));
                    
                    const hasRecordingInfo = call.recording || recordingUrl;
                    
                    // Check if recording is enabled in agent config
                    const recordingEnabled = call.agent_config?.call_settings?.enable_recording === true;
                    
                    if (hasRecordingInfo && recordingUrl) {
                      return (
                        <Box sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 2, p: 3 }}>
                          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                            <Button
                              variant="contained"
                              size="large"
                              startIcon={isPlaying ? <PauseIcon /> : <PlayIcon />}
                              onClick={handlePlayPause}
                              sx={{ 
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                                  boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                                }
                              }}
                            >
                              {isPlaying ? 'Pause' : 'Play'} Recording
                            </Button>
                            
                            <Button
                              variant="outlined"
                              size="large"
                              onClick={() => window.open(recordingUrl, '_blank')}
                              sx={{
                                borderColor: '#667eea',
                                color: '#667eea',
                                '&:hover': {
                                  borderColor: '#764ba2',
                                  backgroundColor: 'rgba(102, 126, 234, 0.05)',
                                }
                              }}
                            >
                              Download Recording
                            </Button>
                          </Box>
                        </Box>
                      );
                    } else if (recordingEnabled) {
                      return (
                        <Alert 
                          severity="info" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            '& .MuiAlert-icon': { color: '#2196f3' }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                            ✅ Recording Enabled - Processing
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            Recording is enabled for this agent. The recording may still be processing or will be available soon.
                          </Typography>
                          <Typography variant="body2">
                            Check your <strong>
                              <a 
                                href="https://dashboard.millis.ai" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#667eea' }}
                              >
                                Millis AI Dashboard →
                              </a>
                            </strong> for the recording once it's ready.
                          </Typography>
                        </Alert>
                      );
                    } else if (hasRecordingInfo && !recordingUrl) {
                      return (
                        <Alert 
                          severity="warning" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            '& .MuiAlert-icon': { color: '#f57c00' }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                            Recording Available in Millis AI Dashboard
                          </Typography>
                          <Typography variant="body2">
                            The call was recorded, but the recording URL is not provided through the API. 
                            Access it directly from your{' '}
                            <strong>
                              <a 
                                href="https://dashboard.millis.ai" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#667eea' }}
                              >
                                Millis AI Dashboard →
                              </a>
                            </strong>
                          </Typography>
                        </Alert>
                      );
                    } else {
                      return (
                        <Alert 
                          severity="info" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            '& .MuiAlert-icon': { color: '#2196f3' }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                            No Recording Available
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            This call was not recorded. To enable recording for future calls:
                          </Typography>
                          <Box 
                            component="ol" 
                            sx={{ 
                              margin: 0, 
                              paddingLeft: 2.5, 
                              '& li': { marginBottom: 0.5, fontSize: '0.875rem' },
                              '& a': { color: '#667eea', fontWeight: 600, textDecoration: 'none' },
                              '& code': { backgroundColor: 'rgba(0,0,0,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }
                            }}
                          >
                            <li>Open your <a href="https://dashboard.millis.ai" target="_blank" rel="noopener noreferrer">Millis AI Dashboard</a></li>
                            <li>Navigate to your Agent configuration</li>
                            <li>Enable <code>enable_recording: true</code> in Call Settings</li>
                          </Box>
                        </Alert>
                      );
                    }
                  })()}
                </Box>
              </CardContent>
            </Card>

            {/* Transcription Card */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" display="flex" alignItems="center" gap={1} mb={2}>
                  <TranscriptIcon />
                  Call Transcription
                </Typography>
                
                <Paper variant="outlined" sx={{ p: 2, maxHeight: 400, overflow: 'auto' }}>
                  {call.chat || call.transcription ? (
                    <Box>
                      {(() => {
                        try {
                          // Parse the chat data - it comes as a JSON string
                          let chatData = call.chat || call.transcription;
                          
                          console.log('Processing chat data, type:', typeof chatData);
                          console.log('Chat data value:', chatData);
                          
                          // First, check if it's a string and try to parse it
                          if (typeof chatData === 'string') {
                            // Check if it's already formatted text (not JSON)
                            if (!chatData.trim().startsWith('[') && !chatData.trim().startsWith('{')) {
                              // It's plain text transcription
                              return (
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                                  {chatData}
                                </Typography>
                              );
                            }
                            
                            try {
                              // Parse the JSON string to get the array
                              chatData = JSON.parse(chatData);
                              console.log('Successfully parsed chat data:', chatData);
                            } catch (parseError) {
                              console.error('Failed to parse chat JSON:', parseError);
                              console.error('Chat string:', chatData);
                              return (
                                <Alert severity="error">
                                  Failed to parse transcription data. Raw data: {typeof chatData === 'string' ? chatData.substring(0, 200) : String(chatData)}...
                                </Alert>
                              );
                            }
                          }
                          
                          // Now chatData should be an array
                          if (Array.isArray(chatData)) {
                            return chatData.map((message: any, index: number) => {
                              // Skip tool messages
                              if (message.role === 'tool') return null;
                              
                              return (
                                <Box 
                                  key={index} 
                                  sx={{ 
                                    mb: 2, 
                                    p: 2, 
                                    borderRadius: 2, 
                                    backgroundColor: message.role === 'assistant' ? '#e3f2fd' : '#f1f8e9',
                                    border: '1px solid',
                                    borderColor: message.role === 'assistant' ? '#90caf9' : '#aed581'
                                  }}
                                >
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      fontWeight: 'bold', 
                                      color: message.role === 'assistant' ? '#1976d2' : '#558b2f', 
                                      mb: 1,
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 1
                                    }}
                                  >
                                    {message.role === 'assistant' ? '🤖 Agent' : '👤 User'}
                                  </Typography>
                                  <Typography 
                                    variant="body1" 
                                    sx={{ 
                                      whiteSpace: 'pre-wrap', 
                                      lineHeight: 1.8,
                                      fontSize: '1rem'
                                    }}
                                  >
                                    {message.content}
                                  </Typography>
                                </Box>
                              );
                            }).filter(Boolean);
                          } else {
                            console.error('Chat data is not an array:', chatData);
                            return (
                              <Alert severity="warning">
                                Unexpected transcription format. Data type: {typeof chatData}
                              </Alert>
                            );
                          }
                        } catch (e) {
                          console.error('Error rendering chat data:', e);
                          return (
                            <Alert severity="error">
                              Failed to display transcription: {e instanceof Error ? e.message : String(e)}
                            </Alert>
                          );
                        }
                      })()}
                    </Box>
                  ) : (
                    <Alert severity="info">
                      <Typography variant="body2">
                        No transcription available for this call.
                      </Typography>
                    </Alert>
                  )}
                </Paper>
              </CardContent>
            </Card>

            {/* Metadata Card */}
            {call.metadata && (
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" display="flex" alignItems="center" gap={1} mb={2}>
                    <AnalyticsIcon />
                    Call Metadata
                  </Typography>
                  
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      {JSON.stringify(call.metadata, null, 2)}
                    </pre>
                  </Paper>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}