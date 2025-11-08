import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Add auth token from localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    // Add cache busting for GET requests
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(), // Add timestamp to prevent caching
      };
    }
    
    // Disable caching
    config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    config.headers['Pragma'] = 'no-cache';
    config.headers['Expires'] = '0';
    
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling and auth
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    // Handle authentication errors
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Clear invalid token
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Redirect to login page
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export const callsAPI = {
  // Health check
  healthCheck: () => {
    return api.get('/health');
  },

  // Get all calls
  getCalls: (params = {}) => {
    return api.get('/calls', { params });
  },

  // Get specific call details
  getCall: (callId: string) => {
    return api.get(`/calls/${callId}`);
  },

  // Get call transcription
  getCallTranscription: (callId: string) => {
    return api.get(`/calls/${callId}/transcription`);
  },

  // Get call recording URL
  getCallRecordingUrl: (callId: string) => {
    return `${API_BASE_URL}/calls/${callId}/recording`;
  },

  // Get call analytics
  getCallAnalytics: (callId: string) => {
    return api.get(`/calls/${callId}/analytics`);
  },

  // Search calls
  searchCalls: (query: string, params = {}) => {
    return api.get('/calls/search', { 
      params: { q: query, ...params } 
    });
  },

  // Get statistics
  getStats: (params = {}) => {
    return api.get('/stats', { params });
  },

  // Get all agents
  getAgents: () => {
    return api.get('/agents');
  },
};

export default api;
