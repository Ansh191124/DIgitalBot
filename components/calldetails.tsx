// 'use client';

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid2 as Grid,
//   Tabs,
//   Tab,
//   Chip,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   IconButton,
//   Stack
// } from '@mui/material';
// import {
//   Phone,
//   AccessTime,
//   CallMade,
//   CallReceived,
//   PlayArrow,
//   Pause,
//   VolumeUp
// } from '@mui/icons-material';
// import { format } from 'date-fns';
// import { Call, CallAnalytics, CallTranscription } from '@/types';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel({ children, value, index, ...other }: TabPanelProps) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`call-tabpanel-${index}`}
//       aria-labelledby={`call-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// interface CallDetailsProps {
//   call: Call;
//   onClose?: () => void;
// }

// const CallDetails: React.FC<CallDetailsProps> = ({ call, onClose }) => {
//   const [tabValue, setTabValue] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [analytics, setAnalytics] = useState<CallAnalytics | null>(null);
//   const [transcription, setTranscription] = useState<CallTranscription | null>(null);

//   useEffect(() => {
//     // Mock analytics data
//     setAnalytics({
//       call_id: call.id,
//       sentiment: {
//         overall: 'positive',
//         confidence: 0.75
//       },
//       keywords: ['support', 'billing', 'account'],
//       summary: 'Customer inquiry about billing details and account status.'
//     });

//     // Mock transcription data
//     setTranscription({
//       call_id: call.id,
//       segments: [
//         {
//           speaker: 'agent',
//           text: 'Hello, thank you for calling. How can I help you today?',
//           start_time: 0,
//           end_time: 3
//         },
//         {
//           speaker: 'customer',
//           text: 'Hi, I have a question about my recent bill.',
//           start_time: 4,
//           end_time: 7
//         }
//       ],
//       text: 'Hello, thank you for calling. How can I help you today? Hi, I have a question about my recent bill.'
//     });
//   }, [call.id]);

//   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   const togglePlayback = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const formatDuration = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'completed': return 'success';
//       case 'missed': return 'error';
//       case 'ongoing': return 'warning';
//       default: return 'default';
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: 2 }}>
//       <Card>
//         <CardContent>
//           {/* Header */}
//           <Box sx={{ mb: 3 }}>
//             <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
//               <Typography variant="h5" component="h1">
//                 Call Details
//               </Typography>
//               <Chip 
//                 label={call.status} 
//                 color={getStatusColor(call.status) as any}
//                 variant="outlined"
//               />
//             </Stack>
            
//             <Grid container spacing={3}>
//               <Grid xs={12} md={8}>
//                 <Card variant="outlined">
//                   <CardContent>
//                     <Grid container spacing={2}>
//                       <Grid xs={12} sm={6}>
//                         <Stack direction="row" alignItems="center" spacing={1}>
//                           <Phone color="primary" />
//                           <Box>
//                             <Typography variant="body2" color="text.secondary">
//                               Phone Number
//                             </Typography>
//                             <Typography variant="body1">
//                               {call.phone_number}
//                             </Typography>
//                           </Box>
//                         </Stack>
//                       </Grid>
                      
//                       <Grid xs={12} sm={6}>
//                         <Stack direction="row" alignItems="center" spacing={1}>
//                           {call.direction === 'inbound' ? <CallReceived color="primary" /> : <CallMade color="primary" />}
//                           <Box>
//                             <Typography variant="body2" color="text.secondary">
//                               Direction
//                             </Typography>
//                             <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
//                               {call.direction}
//                             </Typography>
//                           </Box>
//                         </Stack>
//                       </Grid>
                      
//                       <Grid xs={12} sm={6}>
//                         <Stack direction="row" alignItems="center" spacing={1}>
//                           <AccessTime color="primary" />
//                           <Box>
//                             <Typography variant="body2" color="text.secondary">
//                               Start Time
//                             </Typography>
//                             <Typography variant="body1">
//                               {call.start_time ? format(new Date(call.start_time), 'MMM dd, yyyy HH:mm') : 'N/A'}
//                             </Typography>
//                           </Box>
//                         </Stack>
//                       </Grid>
                      
//                       <Grid xs={12} sm={6}>
//                         <Stack direction="row" alignItems="center" spacing={1}>
//                           <AccessTime color="primary" />
//                           <Box>
//                             <Typography variant="body2" color="text.secondary">
//                               Duration
//                             </Typography>
//                             <Typography variant="body1">
//                               {call.duration ? formatDuration(call.duration) : 'N/A'}
//                             </Typography>
//                           </Box>
//                         </Stack>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>
              
//               <Grid xs={12} md={4}>
//                 <Card variant="outlined">
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>
//                       Audio Playback
//                     </Typography>
//                     <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
//                       <IconButton onClick={togglePlayback} color="primary">
//                         {isPlaying ? <Pause /> : <PlayArrow />}
//                       </IconButton>
//                       <VolumeUp color="action" />
//                       <Typography variant="body2" color="text.secondary">
//                         {call.recording_url ? 'Audio available' : 'No recording'}
//                       </Typography>
//                     </Stack>
//                     {call.recording_url && (
//                       <audio 
//                         controls 
//                         style={{ width: '100%' }}
//                         src={call.recording_url}
//                       >
//                         Your browser does not support the audio element.
//                       </audio>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>

//           {/* Tabs */}
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={tabValue} onChange={handleTabChange}>
//               <Tab label="Analytics" />
//               <Tab label="Transcription" />
//               <Tab label="Notes" />
//             </Tabs>
//           </Box>

//           {/* Tab Panels */}
//           <TabPanel value={tabValue} index={0}>
//             {analytics && (
//               <Grid container spacing={3}>
//                 <Grid xs={12} md={6}>
//                   <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom>
//                       Sentiment Analysis
//                     </Typography>
//                     <Stack direction="row" alignItems="center" spacing={2}>
//                       <Chip 
//                         label={analytics.sentiment?.overall} 
//                         color={analytics.sentiment?.overall === 'positive' ? 'success' : analytics.sentiment?.overall === 'negative' ? 'error' : 'default'}
//                       />
//                       <Typography variant="body2">
//                         Score: {analytics.sentiment?.confidence ? (analytics.sentiment.confidence * 100).toFixed(0) : 0}%
//                       </Typography>
//                     </Stack>
//                   </Paper>
//                 </Grid>
                
//                 <Grid xs={12} md={6}>
//                   <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom>
//                       Keywords
//                     </Typography>
//                     <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
//                       {analytics.keywords?.map((keyword, index) => (
//                         <Chip key={index} label={keyword} variant="outlined" size="small" />
//                       ))}
//                     </Stack>
//                   </Paper>
//                 </Grid>
                
//                 <Grid xs={12}>
//                   <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom>
//                       Summary
//                     </Typography>
//                     <Typography variant="body1">
//                       {analytics.summary}
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             )}
//           </TabPanel>

//           <TabPanel value={tabValue} index={1}>
//             {transcription && (
//               <Grid container spacing={3}>
//                 <Grid xs={12}>
//                   <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom>
//                       Conversation Transcript
//                     </Typography>
//                     <List>
//                       {transcription.segments?.map((segment, index) => (
//                         <React.Fragment key={index}>
//                           <ListItem alignItems="flex-start">
//                             <ListItemText
//                               primary={
//                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                   <Chip 
//                                     label={segment.speaker} 
//                                     size="small" 
//                                     color={segment.speaker === 'agent' ? 'primary' : 'secondary'}
//                                   />
//                                   <Typography variant="caption" color="text.secondary">
//                                     {segment.start_time}s - {segment.end_time}s
//                                   </Typography>
//                                 </Stack>
//                               }
//                               secondary={
//                                 <Typography variant="body1" sx={{ mt: 1 }}>
//                                   {segment.text}
//                                 </Typography>
//                               }
//                             />
//                           </ListItem>
//                           {transcription.segments && index < transcription.segments.length - 1 && <Divider />}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             )}
//           </TabPanel>

//           <TabPanel value={tabValue} index={2}>
//             <Paper sx={{ p: 2 }}>
//               <Typography variant="h6" gutterBottom>
//                 Call Notes
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 No notes available for this call.
//               </Typography>
//             </Paper>
//           </TabPanel>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default CallDetails;

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// const CallDetails = ({ callId }: CallDetailsProps) => {
//   const router = useRouter();
//   const [call, setCall] = useState<Call | null>(null);
//   const [transcription, setTranscription] = useState<CallTranscription | null>(null);
//   const [analytics, setAnalytics] = useState<CallAnalytics | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [audioPlaying, setAudioPlaying] = useState(false);
//   const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

//   const fetchCallDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch call details
//       const callResponse = await callsAPI.getCall(callId);
//       setCall(callResponse.data.data);

//       // Fetch transcription
//       try {
//         const transcriptionResponse = await callsAPI.getCallTranscription(callId);
//         setTranscription(transcriptionResponse.data.data);
//       } catch (err: any) {
//         console.warn('Transcription not available:', err.message);
//       }

//       // Fetch analytics
//       try {
//         const analyticsResponse = await callsAPI.getCallAnalytics(callId);
//         setAnalytics(analyticsResponse.data.data);
//       } catch (err: any) {
//         console.warn('Analytics not available:', err.message);
//       }

//     } catch (err: any) {
//       console.error('Error fetching call details:', err);
//       setError(err.response?.data?.error || 'Failed to fetch call details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (callId) {
//       fetchCallDetails();
//     }
//   }, [callId]);

//   const formatDuration = (seconds?: number) => {
//     if (!seconds) return 'N/A';
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   const getStatusColor = (status?: string) => {
//     switch (status?.toLowerCase()) {
//       case 'completed':
//         return 'success' as const;
//       case 'missed':
//         return 'error' as const;
//       case 'ongoing':
//         return 'warning' as const;
//       default:
//         return 'default' as const;
//     }
//   };

//   const handleAudioPlay = () => {
//     if (audioRef) {
//       if (audioPlaying) {
//         audioRef.pause();
//       } else {
//         audioRef.play();
//       }
//       setAudioPlaying(!audioPlaying);
//     }
//   };

//   const downloadRecording = () => {
//     const recordingUrl = callsAPI.getCallRecordingUrl(callId);
//     window.open(recordingUrl, '_blank');
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         <Alert severity="error">{error}</Alert>
//         <Button onClick={() => router.push('/')} sx={{ mt: 2 }}>
//           Back to Dashboard
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Box>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={() => router.push('/')}
//             sx={{ mr: 2 }}
//           >
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Call Details - {callId}
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
//         {call && (
//           <Grid container spacing={3}>
//             {/* Call Overview */}
//             <Grid item xs={12} md={8}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>
//                     Call Information
//                   </Typography>
                  
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <Box display="flex" alignItems="center" gap={1} mb={2}>
//                         <PhoneIcon />
//                         <Typography variant="body1">
//                           <strong>Phone:</strong> {call.phone_number || 'Unknown'}
//                         </Typography>
//                       </Box>
                      
//                       <Box display="flex" alignItems="center" gap={1} mb={2}>
//                         <PersonIcon />
//                         <Typography variant="body1">
//                           <strong>Direction:</strong>
//                           <Chip
//                             label={call.direction || 'Unknown'}
//                             size="small"
//                             color={call.direction === 'inbound' ? 'primary' : 'secondary'}
//                             sx={{ ml: 1 }}
//                           />
//                         </Typography>
//                       </Box>
//                     </Grid>
                    
//                     <Grid item xs={12} sm={6}>
//                       <Box display="flex" alignItems="center" gap={1} mb={2}>
//                         <SettingsIcon />
//                         <Typography variant="body1">
//                           <strong>Status:</strong>
//                           <Chip
//                             label={call.status || 'Unknown'}
//                             size="small"
//                             color={getStatusColor(call.status)}
//                             sx={{ ml: 1 }}
//                           />
//                         </Typography>
//                       </Box>
                      
//                       <Box display="flex" alignItems="center" gap={1} mb={2}>
//                         <TimeIcon />
//                         <Typography variant="body1">
//                           <strong>Duration:</strong> {formatDuration(call.duration)}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </Grid>

//                   {call.start_time && (
//                     <Typography variant="body1" mb={2}>
//                       <strong>Start Time:</strong> {format(new Date(call.start_time), 'PPpp')}
//                     </Typography>
//                   )}

//                   {call.end_time && (
//                     <Typography variant="body1" mb={2}>
//                       <strong>End Time:</strong> {format(new Date(call.end_time), 'PPpp')}
//                     </Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Audio Player */}
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     Recording
//                   </Typography>
                  
//                   <Box display="flex" flexDirection="column" gap={2}>
//                     <audio
//                       ref={setAudioRef}
//                       controls
//                       style={{ width: '100%' }}
//                       onPlay={() => setAudioPlaying(true)}
//                       onPause={() => setAudioPlaying(false)}
//                       onEnded={() => setAudioPlaying(false)}
//                     >
//                       <source src={callsAPI.getCallRecordingUrl(callId)} type="audio/mpeg" />
//                       Your browser does not support the audio element.
//                     </audio>
                    
//                     <Box display="flex" gap={1}>
//                       <Button
//                         variant="contained"
//                         startIcon={audioPlaying ? <PauseIcon /> : <PlayIcon />}
//                         onClick={handleAudioPlay}
//                         fullWidth
//                       >
//                         {audioPlaying ? 'Pause' : 'Play'}
//                       </Button>
                      
//                       <Button
//                         variant="outlined"
//                         startIcon={<DownloadIcon />}
//                         onClick={downloadRecording}
//                       >
//                         Download
//                       </Button>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Tabs for Transcription and Analytics */}
//             <Grid item xs={12}>
//               <Paper>
//                 <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
//                   <Tab label="Transcription" />
//                   <Tab label="Analytics" />
//                   <Tab label="Raw Data" />
//                 </Tabs>

//                 <TabPanel value={activeTab} index={0}>
//                   {transcription ? (
//                     <Box>
//                       <Typography variant="h6" gutterBottom>
//                         Call Transcription
//                       </Typography>
                      
//                       {transcription.segments ? (
//                         <List>
//                           {transcription.segments.map((segment, index) => (
//                             <ListItem key={index}>
//                               <ListItemText
//                                 primary={
//                                   <Box display="flex" alignItems="center" gap={1}>
//                                     <Chip
//                                       label={segment.speaker || 'Unknown'}
//                                       size="small"
//                                       color={segment.speaker === 'agent' ? 'primary' : 'secondary'}
//                                     />
//                                     <Typography variant="body2" color="textSecondary">
//                                       {segment.timestamp && format(new Date(segment.timestamp), 'mm:ss')}
//                                     </Typography>
//                                   </Box>
//                                 }
//                                 secondary={segment.text}
//                               />
//                             </ListItem>
//                           ))}
//                         </List>
//                       ) : (
//                         <Typography variant="body1">
//                           {transcription.text || 'No transcription text available'}
//                         </Typography>
//                       )}
//                     </Box>
//                   ) : (
//                     <Alert severity="info">
//                       Transcription not available for this call
//                     </Alert>
//                   )}
//                 </TabPanel>

//                 <TabPanel value={activeTab} index={1}>
//                   {analytics ? (
//                     <Box>
//                       <Typography variant="h6" gutterBottom>
//                         Call Analytics
//                       </Typography>
                      
//                       <Grid container spacing={2}>
//                         {analytics.sentiment && (
//                           <Grid item xs={12} md={6}>
//                             <Accordion>
//                               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                 <Typography variant="subtitle1">Sentiment Analysis</Typography>
//                               </AccordionSummary>
//                               <AccordionDetails>
//                                 <Typography>
//                                   <strong>Overall Sentiment:</strong> {analytics.sentiment.overall}
//                                 </Typography>
//                                 <Typography>
//                                   <strong>Confidence:</strong> {(analytics.sentiment.confidence * 100).toFixed(1)}%
//                                 </Typography>
//                               </AccordionDetails>
//                             </Accordion>
//                           </Grid>
//                         )}
                        
//                         {analytics.keywords && (
//                           <Grid item xs={12} md={6}>
//                             <Accordion>
//                               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                 <Typography variant="subtitle1">Keywords</Typography>
//                               </AccordionSummary>
//                               <AccordionDetails>
//                                 <Box display="flex" flexWrap="wrap" gap={1}>
//                                   {analytics.keywords.map((keyword, index) => (
//                                     <Chip key={index} label={keyword} size="small" />
//                                   ))}
//                                 </Box>
//                               </AccordionDetails>
//                             </Accordion>
//                           </Grid>
//                         )}
                        
//                         {analytics.summary && (
//                           <Grid item xs={12}>
//                             <Accordion>
//                               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                 <Typography variant="subtitle1">Call Summary</Typography>
//                               </AccordionSummary>
//                               <AccordionDetails>
//                                 <Typography>{analytics.summary}</Typography>
//                               </AccordionDetails>
//                             </Accordion>
//                           </Grid>
//                         )}
//                       </Grid>
//                     </Box>
//                   ) : (
//                     <Alert severity="info">
//                       Analytics not available for this call
//                     </Alert>
//                   )}
//                 </TabPanel>

//                 <TabPanel value={activeTab} index={2}>
//                   <Typography variant="h6" gutterBottom>
//                     Raw Call Data
//                   </Typography>
//                   <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
//                     <pre style={{ whiteSpace: 'pre-wrap', overflow: 'auto' }}>
//                       {JSON.stringify(call, null, 2)}
//                     </pre>
//                   </Paper>
//                 </TabPanel>
//               </Paper>
//             </Grid>
//           </Grid>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default CallDetails;