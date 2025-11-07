"use client";
import Sidebar from "@/components/Sidebar";
import { useCallback, useEffect, useState } from "react";

// MongoDB-compatible Call type
type Call = {
  _id: string;
  from?: string;
  to?: string;
  status?: string;
  startTime?: string;
  duration?: number;
  direction?: string;
  transcription?: string;
  transcript?: string;
  isLead?: boolean;
  name?: string;
  phone?: string;
  confidence?: number;
  productInterest?: string;
  customerNeed?: string;
  isAppointment?: boolean;
  leadAnalysisAt?: string;
  createdAt?: string;
  updatedAt?: string;
};

type FilterStatus = 'all' | 'leads' | 'no-leads' | 'pending';
type SortField = 'startTime' | 'duration' | 'confidence';
type SortOrder = 'asc' | 'desc';

// Default prompt template
const DEFAULT_PROMPT = `Analyze the following phone call transcription to identify if it's a potential sales lead. Extract the following information:

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

// Helper functions
const formatDuration = (sec: number | undefined) => {
  if (sec === undefined) return "0:00";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const formatTimeAgo = (dateString?: string) => {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "Just now";
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInHours < 48) return "Yesterday";
  return `${Math.floor(diffInHours / 24)}d ago`;
};

const formatPhone = (phone: string) => {
  if (!phone) return "";
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "+91 $1-$2-$3");
};

// Icon Components
const PhoneIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Lead Details Modal Component
const LeadDetailsModal = ({ call, onClose }: { call: Call; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Call Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-400 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Call ID</h3>
              <p className="text-sm sm:text-base text-white font-mono break-all">{call._id}</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Duration</h3>
              <p className="text-sm sm:text-base text-white">{formatDuration(call.duration)}</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">From</h3>
              <p className="text-sm sm:text-base text-white break-all">{formatPhone(call.from || '')}</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">To</h3>
              <p className="text-sm sm:text-base text-white break-all">{formatPhone(call.to || '')}</p>
            </div>
          </div>

          {call.isLead && (
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-4">Lead Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {call.name && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-orange-600 mb-1">Customer Name</h4>
                    <p className="text-sm sm:text-base text-green-800">{call.name}</p>
                  </div>
                )}
                {call.phone && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-orange-600 mb-1">Phone Number</h4>
                    <p className="text-sm sm:text-base text-green-800 break-all">{formatPhone(call.phone)}</p>
                  </div>
                )}
                {call.productInterest && (
                  <div className="col-span-1 sm:col-span-2">
                    <h4 className="text-xs sm:text-sm font-medium text-orange-600 mb-1">Product Interest</h4>
                    <p className="text-sm sm:text-base text-green-800">{call.productInterest}</p>
                  </div>
                )}
                {call.confidence && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-orange-600 mb-1">Confidence Score</h4>
                    <p className="text-sm sm:text-base text-green-800">{(call.confidence * 100).toFixed(1)}%</p>
                  </div>
                )}
              </div>
              {call.customerNeed && (
                <div className="mt-4">
                  <h4 className="text-xs sm:text-sm font-medium text-orange-600 mb-1">Customer Need</h4>
                  <p className="text-sm sm:text-base text-green-800">{call.customerNeed}</p>
                </div>
              )}
            </div>
          )}

          {(call.transcription || call.transcript) && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">Transcription</h3>
              <div className="bg-gray-900 rounded-xl p-4 max-h-64 overflow-y-auto">
                <p className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap">{call.transcription || call.transcript}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Prompt Editor Modal Component
const PromptEditorModal = ({ 
  currentPrompt, 
  onSave, 
  onCancel, 
  onReset, 
  onChange 
}: { 
  currentPrompt: string;
  onSave: () => void;
  onCancel: () => void;
  onReset: () => void;
  onChange: (prompt: string) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Customize AI Analysis Prompt</h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-400 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              AI Analysis Prompt Template
            </label>
            <textarea
              value={currentPrompt}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-64 sm:h-96 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono text-xs sm:text-sm"
              placeholder="Enter your custom prompt here..."
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Use {'{TRANSCRIPTION_PLACEHOLDER}'} where you want the call transcription to be inserted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <button
              onClick={onReset}
              className="px-4 py-2 text-gray-400 border border-gray-300 rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base order-2 sm:order-1"
            >
              Reset to Default
            </button>
            <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
              <button
                onClick={onCancel}
                className="px-6 py-2 text-gray-400 border border-gray-300 rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={onSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Call Card Component
function CallCard({ 
  call, 
  onAnalyze, 
  onViewDetails, 
  isProcessing 
}: { 
  call: Call; 
  onAnalyze: () => void; 
  onViewDetails: () => void;
  isProcessing: boolean;
}) {
  const isAnalyzed = call.isLead !== undefined && call.isLead !== null && call.leadAnalysisAt;
  const hasTranscription = call.transcription || call.transcript;
  
  return (
    <div className={`bg-black/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
      call.isLead === true ? 'border-l-4 border-l-green-400 bg-linear-to-r from-green-50/50 to-white' :
      call.isLead === false ? 'border-l-4 border-l-gray-300' :
      'border-white/20'
    }`}>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          <div className="flex-1 min-w-0">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 sm:px-3 py-1 rounded-lg inline-block break-all">
                  ID: {call._id.substring(0, 8)}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium break-all">
                  {formatPhone(call.from || '')} → {formatPhone(call.to || '')}
                </span>
                <span className="text-xs text-gray-500">{formatTimeAgo(call.startTime || call.createdAt)}</span>
                <span className="text-xs sm:text-sm font-medium text-gray-400 bg-blue-50 px-2 py-1 rounded inline-block">
                  {formatDuration(call.duration)}
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {isAnalyzed ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Analyzed</span>
                    </div>
                    <span className="text-gray-500 text-xs">
                      on {new Date(call.leadAnalysisAt!).toLocaleDateString()}
                    </span>
                  </div>
                ) : hasTranscription ? (
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs sm:text-sm">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Pending Analysis</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-500 rounded-lg text-xs sm:text-sm">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>No Transcription</span>
                  </div>
                )}
              </div>

              {isAnalyzed && call.isLead === true && (
                <div className="bg-linear-to-r from-green-50 to-green-100 rounded-xl p-3 sm:p-4 border border-green-200 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h3 className="text-base sm:text-lg font-bold text-green-800">Lead Identified</h3>
                        {call.isAppointment && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg">
                            Appointment Set
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                        {call.name && (
                          <div>
                            <span className="text-orange-600 font-medium">Customer:</span>
                            <p className="text-green-800 font-semibold break-all">{call.name}</p>
                          </div>
                        )}
                        {call.phone && (
                          <div>
                            <span className="text-orange-600 font-medium">Phone:</span>
                            <p className="text-green-800 break-all">{formatPhone(call.phone)}</p>
                          </div>
                        )}
                        {call.productInterest && (
                          <div className="col-span-1 sm:col-span-2">
                            <span className="text-orange-600 font-medium">Interest:</span>
                            <p className="text-green-800">{call.productInterest}</p>
                          </div>
                        )}
                        {call.customerNeed && (
                          <div className="col-span-1 sm:col-span-2">
                            <span className="text-orange-600 font-medium">Requirements:</span>
                            <p className="text-green-800">{call.customerNeed}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {call.confidence && (
                      <div className="text-center bg-black rounded-lg p-3 shadow-sm shrink-0">
                        <div className="text-xl sm:text-2xl font-bold text-green-800">
                          {(call.confidence * 100).toFixed(0)}%
                        </div>
                        <div className="text-xs text-orange-600 font-medium">Confidence</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {isAnalyzed && call.isLead === false && (
                <div className="bg-gray-900 rounded-lg p-3 mt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Not identified as a sales lead</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <button
              onClick={onViewDetails}
              className="px-4 py-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200 hover:border-orange-300 text-sm"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Details
            </button>

            {!isAnalyzed && hasTranscription && (
              <button
                onClick={onAnalyze}
                disabled={isProcessing}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-orange-500 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl font-medium text-sm"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Analyze</span>
                  </>
                )}
              </button>
            )}

            {isAnalyzed && hasTranscription && (
              <button
                onClick={onAnalyze}
                disabled={isProcessing}
                className="px-4 py-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 border border-orange-400 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium disabled:opacity-50 text-sm"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                    <span>Re-analyzing...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="hidden sm:inline">Re-analyze</span>
                    <span className="sm:hidden">Retry</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern Stats Card Component
function StatsCard({ title, value, icon, color, change }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  color: string;
  change: string;
}) {
  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className={`p-2 sm:p-3 rounded-xl bg-linear-to-r ${color} shadow-lg`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-400 font-medium mb-1 text-xs sm:text-sm">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold text-white mb-2">{value}</p>
        <p className="text-xs sm:text-sm text-gray-500">{change}</p>
      </div>
    </div>
  );
}

export default function LeadsPage() {
  const [calls, setCalls] = useState<Call[]>([]);
  const [filteredCalls, setFilteredCalls] = useState<Call[]>([]);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [loading, setLoading] = useState(true);
  const [processingQueue, setProcessingQueue] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortField, setSortField] = useState<SortField>('startTime');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const [showPromptEditor, setShowPromptEditor] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(DEFAULT_PROMPT);
  const [editingPrompt, setEditingPrompt] = useState(DEFAULT_PROMPT);

  const processTranscriptionWithAI = useCallback(async (callId: string, transcription: string) => {
    const apiUrl = `https://digital-api-tef8.onrender.com/api/analyze-lead`;
    
    try {
      console.log(`Processing call ${callId} with AI...`);
      
      const processedPrompt = currentPrompt.replace('{TRANSCRIPTION_PLACEHOLDER}', transcription);
      
      const token = localStorage.getItem('token');
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          callSid: callId,
          transcription: transcription,
          prompt: processedPrompt
        })
      });

      if (!response.ok) {
        throw new Error(`Backend responded with ${response.status}`);
      }
      
      const result = await response.json();
      console.log(`AI analysis complete for ${callId}`);
      return result;
      
    } catch (error) {
      console.error(`AI processing failed for ${callId}:`, error);
      return { 
        is_lead: false, 
        customer_name: "",
        phone_number: "",
        product_interest: "",
        customer_need: "",
        confidence_score: 0,
        extraction_method: "failed"
      };
    }
  }, [currentPrompt]);

  const processIndividualCall = useCallback(async (callId: string, forceReanalyze = false) => {
    const call = calls.find(c => c._id === callId);
    if (!call || (!call.transcription && !call.transcript)) {
      console.log(`Call ${callId} not found or has no transcription`);
      return;
    }

    if (!forceReanalyze && call.isLead !== undefined && call.isLead !== null && call.leadAnalysisAt) {
      console.log(`Call ${callId} already analyzed on ${call.leadAnalysisAt}, skipping`);
      return;
    }

    const transcriptionText = call.transcription || call.transcript || '';
    if (!transcriptionText || transcriptionText.trim().length === 0) {
      console.log(`Call ${callId} has empty transcription`);
      return;
    }

    setProcessingQueue(prev => [...prev, callId]);
    
    try {
      console.log(`${forceReanalyze ? 'Re-analyzing' : 'Analyzing'} call ${callId}...`);
      const aiResult = await processTranscriptionWithAI(call._id, transcriptionText);
      
      if (aiResult && aiResult.extraction_method !== "failed") {
        setCalls(prevCalls => 
          prevCalls.map(c => 
            c._id === callId 
              ? {
                  ...c,
                  isLead: aiResult.is_lead,
                  name: aiResult.customer_name || "",
                  phone: aiResult.phone_number || "",
                  productInterest: aiResult.product_interest || "",
                  customerNeed: aiResult.customer_need || "",
                  confidence: aiResult.confidence_score,
                  isAppointment: aiResult.is_appointment || false,
                  leadAnalysisAt: new Date().toISOString()
                }
              : c
          )
        );
        
        console.log(`Successfully ${forceReanalyze ? 're-analyzed' : 'analyzed'} call ${callId}:`, {
          isLead: aiResult.is_lead,
          customerName: aiResult.customer_name,
          confidence: aiResult.confidence_score
        });
      } else {
        console.error(`AI analysis failed for call ${callId}`);
        setCalls(prevCalls => 
          prevCalls.map(c => 
            c._id === callId 
              ? {
                  ...c,
                  isLead: false,
                  leadAnalysisAt: new Date().toISOString(),
                  confidence: 0
                }
              : c
          )
        );
      }
    } catch (error) {
      console.error(`Failed to process call ${callId}:`, error);
      setCalls(prevCalls => 
        prevCalls.map(c => 
          c._id === callId 
            ? {
                ...c,
                isLead: false,
                leadAnalysisAt: new Date().toISOString(),
                confidence: 0
              }
            : c
        )
      );
    } finally {
      setProcessingQueue(prev => prev.filter(id => id !== callId));
    }
  }, [calls, processTranscriptionWithAI]);

  const analyzeAllPendingCalls = useCallback(async () => {
    const pendingCalls = calls.filter(call => 
      (call.transcription || call.transcript) && 
      (call.isLead === undefined || call.isLead === null || !call.leadAnalysisAt)
    );

    if (pendingCalls.length === 0) {
      alert('No calls pending analysis!');
      return;
    }

    const confirmAnalysis = window.confirm(
      `Analyze ${pendingCalls.length} pending calls? This may take a few minutes.`
    );
    
    if (!confirmAnalysis) return;

    console.log(`Starting bulk analysis of ${pendingCalls.length} calls...`);
    
    const batchSize = 3;
    for (let i = 0; i < pendingCalls.length; i += batchSize) {
      const batch = pendingCalls.slice(i, i + batchSize);
      console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(pendingCalls.length/batchSize)}`);
      
      await Promise.all(
        batch.map(call => processIndividualCall(call._id, false))
      );
      
      if (i + batchSize < pendingCalls.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('Bulk analysis completed!');
  }, [calls, processIndividualCall]);

  const fetchCalls = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log("Fetching ALL calls from MongoDB...");
      
      const token = localStorage.getItem('token');
      
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_BASE_URL}/calls?limit=0`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch calls: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      const fetchedCalls = data.calls || [];
      setCalls(fetchedCalls);
      
      console.log(`Fetched ${fetchedCalls.length} calls from MongoDB`);
      
    } catch (error) {
      console.error("Error in fetchCalls:", error);
      setError(error instanceof Error ? error.message : 'Failed to fetch calls');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCalls();
  }, [fetchCalls]);

  useEffect(() => {
    let ws: WebSocket;
    
    const connectWebSocket = () => {
      try {
        ws = new WebSocket("ws://digital-api-tef8.onrender.com");
        
        ws.onopen = () => {
          console.log("WebSocket connected");
        };
        
        ws.onmessage = async (event) => {
          try {
            const newCallsData = JSON.parse(event.data);
            
            if (Array.isArray(newCallsData)) {
              setCalls(prevCalls => {
                const updatedCalls = [...prevCalls];
                newCallsData.forEach(newCall => {
                  const existingIndex = updatedCalls.findIndex(call => call._id === newCall._id);
                  if (existingIndex > -1) {
                    updatedCalls[existingIndex] = { ...updatedCalls[existingIndex], ...newCall };
                  } else {
                    updatedCalls.unshift(newCall);
                  }
                });
                return updatedCalls;
              });
            }
          } catch (error) {
            console.error("Failed to parse WebSocket message:", error);
          }
        };
        
        ws.onerror = (error) => {
          console.error("WebSocket error:", error);
        };
        
      } catch (error) {
        console.error("Failed to connect WebSocket:", error);
      }
    };
    
    const timer = setTimeout(connectWebSocket, 2000);
    
    return () => {
      clearTimeout(timer);
      if (ws) {
        ws.close();
      }
    };
  }, []);

  useEffect(() => {
    let filtered = calls;

    if (filterStatus === 'leads') {
      filtered = filtered.filter(call => call.isLead === true);
    } else if (filterStatus === 'no-leads') {
      filtered = filtered.filter(call => call.isLead === false);
    } else if (filterStatus === 'pending') {
      filtered = filtered.filter(call => call.isLead === undefined || call.isLead === null);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(call => 
        call._id.toLowerCase().includes(term) ||
        (call.from && call.from.toLowerCase().includes(term)) ||
        (call.to && call.to.toLowerCase().includes(term)) ||
        (call.name && call.name.toLowerCase().includes(term)) ||
        (call.phone && call.phone.includes(term))
      );
    }

    filtered = filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortField) {
        case 'startTime':
          aValue = new Date(a.startTime || a.createdAt || 0).getTime();
          bValue = new Date(b.startTime || b.createdAt || 0).getTime();
          break;
        case 'duration':
          aValue = a.duration || 0;
          bValue = b.duration || 0;
          break;
        case 'confidence':
          aValue = a.confidence || 0;
          bValue = b.confidence || 0;
          break;
        default:
          return 0;
      }
      
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    setFilteredCalls(filtered);
  }, [calls, filterStatus, sortField, sortOrder, searchTerm]);

  const totalCalls = calls.length;
  const leadsCount = calls.filter(call => call.isLead === true).length;
  const analyzedCount = calls.filter(call => call.leadAnalysisAt).length;
  const pendingAnalysis = calls.filter(call => 
    (call.transcription || call.transcript) && 
    (!call.leadAnalysisAt)
  ).length;
  const noTranscriptionCount = calls.filter(call => 
    !call.transcription && !call.transcript
  ).length;
  const conversionRate = analyzedCount > 0 ? ((leadsCount / analyzedCount) * 100).toFixed(1) : "0";

  const BulkAnalysisButton = () => (
    <button
      onClick={analyzeAllPendingCalls}
      disabled={pendingAnalysis === 0 || processingQueue.length > 0}
      className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-orange-500 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium text-xs sm:text-sm"
    >
      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span className="hidden sm:inline">Analyze All Pending ({pendingAnalysis})</span>
      <span className="sm:hidden">Analyze ({pendingAnalysis})</span>
    </button>
  );

  if (loading) {
    return (
      <div className="flex min-h-screen bg-linear-to-br from-slate-50 to-orange-100">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-black rounded-lg shadow-lg border border-slate-200"
        >
          <MenuIcon />
        </button>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out w-60`}>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        <main className="w-full md:ml-60 p-4 sm:p-6 lg:p-8 pt-20 md:pt-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-4 border-orange-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-xl sm:text-2xl font-bold text-gray-200">Loading all calls...</p>
            <p className="text-sm sm:text-base text-gray-400 mt-2">Fetching complete database from MongoDB</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-linear-to-br from-slate-50 to-orange-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-black rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out w-60`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <main className="w-full md:ml-60 p-4 sm:p-6 lg:p-8 pt-20 md:pt-8">
        <div className="max-w-8xl mx-auto space-y-6 sm:space-y-8">
          
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Call Analytics Dashboard
                </h1>
                <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg">
                  AI-powered lead analysis and customer insights
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <BulkAnalysisButton />
                <button
                  onClick={() => setShowPromptEditor(true)}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-orange-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xs sm:text-sm"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="hidden sm:inline">Customize AI</span>
                  <span className="sm:hidden">AI Settings</span>
                </button>
              </div>
            </div>
            
            {error && (
              <div className="mt-4 sm:mt-6 bg-red-50 border-l-4 border-orange-400 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-red-800 font-semibold text-sm sm:text-base">Connection Error</h3>
                    <p className="text-red-700 text-xs sm:text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatsCard 
              title="Total Calls" 
              value={totalCalls.toLocaleString()} 
              icon={<PhoneIcon />}
              color="from-orange-400 to-orange-700"
              change={`${noTranscriptionCount} without audio`}
            />
            <StatsCard 
              title="Leads Generated" 
              value={leadsCount.toLocaleString()} 
              icon={<TargetIcon />}
              color="from-orange-500 to-orange-600"
              change={`${conversionRate}% of analyzed calls`}
            />
            <StatsCard 
              title="Analyzed" 
              value={analyzedCount.toLocaleString()} 
              icon={<ChartIcon />}
              color="from-orange-500 to-orange-700"
              change={`${pendingAnalysis} pending analysis`}
            />
            <StatsCard 
              title="Conversion Rate" 
              value={`${conversionRate}%`} 
              icon={<ClockIcon />}
              color="from-amber-500 to-amber-600"
              change="From analyzed calls"
            />
          </div>

          <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              
              <div className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search calls, customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 bg-gray-900 border-2 border-transparent rounded-xl focus:bg-black focus:border-orange-300 focus:ring-4 focus:ring-orange-100 transition-all duration-200 text-sm sm:text-base lg:text-lg"
                  />
                  <svg className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { value: 'all', label: 'All', fullLabel: 'All Calls', color: 'bg-gray-800 text-gray-300' },
                  { value: 'leads', label: 'Leads', fullLabel: 'Leads Only', color: 'bg-green-100 text-green-700' },
                  { value: 'pending', label: 'Pending', fullLabel: 'Pending', color: 'bg-amber-100 text-amber-700' },
                  { value: 'no-leads', label: 'No Leads', fullLabel: 'No Leads', color: 'bg-red-100 text-red-700' }
                ].map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterStatus(filter.value as FilterStatus)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                      filterStatus === filter.value 
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                        : filter.color + ' hover:shadow-md'
                    }`}
                  >
                    <span className="sm:hidden">{filter.label}</span>
                    <span className="hidden sm:inline">{filter.fullLabel}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={fetchCalls}
                disabled={loading}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-orange-500 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              >
                <svg className={`h-4 w-4 sm:h-5 sm:w-5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh All
              </button>
            </div>
          </div>

          {processingQueue.length > 0 && (
            <div className="bg-blue-50 border-l-4 border-orange-400 rounded-lg p-4">
              <div className="flex items-start">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-orange-600 mr-3 shrink-0 mt-0.5"></div>
                <div>
                  <h3 className="text-blue-800 font-semibold text-sm sm:text-base">Processing Calls</h3>
                  <p className="text-blue-700 text-xs sm:text-sm">
                    Analyzing {processingQueue.length} call{processingQueue.length > 1 ? 's' : ''} with AI...
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4">
            {filteredCalls.length === 0 ? (
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-16 text-center">
                <div className="text-gray-400 mb-4 sm:mb-6">
                  <svg className="mx-auto h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-2">No calls found</h3>
                <p className="text-gray-500 text-sm sm:text-base lg:text-lg">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredCalls.map((call) => (
                <CallCard 
                  key={call._id} 
                  call={call} 
                  onAnalyze={() => processIndividualCall(call._id, call.leadAnalysisAt ? true : false)}
                  onViewDetails={() => setSelectedCall(call)}
                  isProcessing={processingQueue.includes(call._id)}
                />
              ))
            )}
          </div>

          <div className="text-center py-4 sm:py-6">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Showing <span className="font-bold text-gray-200">{filteredCalls.length.toLocaleString()}</span> of <span className="font-bold text-gray-200">{totalCalls.toLocaleString()}</span> total calls
            </p>
          </div>

          {selectedCall && (
            <LeadDetailsModal
              call={selectedCall}
              onClose={() => setSelectedCall(null)}
            />
          )}

          {showPromptEditor && (
            <PromptEditorModal
              currentPrompt={editingPrompt}
              onSave={() => {
                setCurrentPrompt(editingPrompt);
                setShowPromptEditor(false);
              }}
              onCancel={() => {
                setEditingPrompt(currentPrompt);
                setShowPromptEditor(false);
              }}
              onReset={() => {
                setEditingPrompt(DEFAULT_PROMPT);
                setCurrentPrompt(DEFAULT_PROMPT);
              }}
              onChange={setEditingPrompt}
            />
          )}
        </div>
      </main>
    </div>
  );
}



