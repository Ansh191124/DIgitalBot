import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { LeadForm } from "@/components/lead-form"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen" role="main">
        <Hero />
        
        {/* SEO-Optimized Content Sections - DO NOT REMOVE */}
        
        {/* Stats Section - Above the Fold */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden" role="region" aria-labelledby="performance-stats">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-orange-400 transition-transform duration-500 hover:scale-[1.05] hover:shadow-orange-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl from-blue-400 via-cyan-400 to-teal-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 relative z-10 animate-pulse">99.9%</div>
                <div className="mt-2 text-gray-800 font-bold text-lg relative z-10">Uptime Guarantee</div>
                <p className="mt-3 text-sm text-gray-600 relative z-10">Enterprise-grade reliability for your business</p>
              </div>
              
              <div className="bg-white backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-blue-400 transition-transform duration-500 hover:scale-[1.05] hover:shadow-blue-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-400 via-cyan-400 to-teal-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl from-purple-400 via-pink-400 to-orange-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-600 relative z-10 animate-pulse">&lt;750ms</div>
                <div className="mt-2 text-gray-800 font-bold text-lg relative z-10">AI Response Time</div>
                <p className="mt-3 text-sm text-gray-600 relative z-10">Lightning-fast voice AI interactions</p>
              </div>
              
              <div className="bg-white backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-purple-400 transition-transform duration-500 hover:scale-[1.05] hover:shadow-purple-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-400 via-pink-400 to-orange-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-600 relative z-10 animate-pulse">24/7</div>
                <div className="mt-2 text-gray-800 font-bold text-lg relative z-10">Always Available</div>
                <p className="mt-3 text-sm text-gray-600 relative z-10">Never sleeps, never takes breaks</p>
              </div>
            </div>
          </div>
        </section>

        {/* H1 Section - Primary Keywords */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden" role="region" aria-labelledby="main-heading">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h1 id="main-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI Voice Agent Platform</span>
                <span className="inline-block px-6 py-3 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-2xl text-2xl sm:text-3xl lg:text-4xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
                  <span className="relative z-10">Never Sleeps, Never Stops</span>
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8 p-6 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
                <p className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                  "Your receptionist sleeps, gets sick, takes breaks."
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-3 rounded-xl shadow-xl border-2 border-white">
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent"></span>
                  <span className="relative z-10">WE NEVER DO.</span>
                </p>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                Transform your business with <span className="font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">AI voice agents</span> that handle unlimited calls simultaneously, 
                provide instant responses, and deliver <span className="font-semibold text-orange-600">detailed analytics</span> through your <span className="font-semibold text-blue-600">personal dashboard</span>. 
                Our <span className="font-bold text-purple-600">AI voice assistant</span> platform automates customer service, lead qualification, appointment scheduling, and business communications with enterprise-grade accuracy.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm sm:text-base mb-8">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></span>
                  <span className="font-semibold text-gray-800">Real-Time Analytics</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></span>
                  <span className="font-semibold text-gray-800">Personal Dashboard</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  <span className="font-semibold text-gray-800">Automated Call Handling</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-green-500"></span>
                  <span className="font-semibold text-gray-800">50+ Languages</span>
                </span>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-xl shadow-2xl hover:shadow-orange-400 transition-all duration-300 hover:scale-105 border-2 border-orange-300 animate-gradient"
                >
                  View Pricing Plans
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-700 bg-white backdrop-blur-md rounded-xl border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Optimized Q&A - VSO */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-white to-pink-50 relative overflow-hidden" role="region" aria-labelledby="voice-search-qa">
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 id="voice-search-qa" className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Common Questions About AI Voice Agents
            </h2>
            
            <div className="space-y-8">
              <div className="group bg-white p-8 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  What is an AI voice agent and how does it work?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  An AI voice agent is an intelligent conversational system that handles phone calls autonomously using advanced natural language processing. 
                  Unlike human receptionists who need sleep, sick leave, and breaks, our AI voice agents operate 24/7/365 without interruption. 
                  They understand spoken language, process customer requests in real-time, access your business data instantly, and respond with natural-sounding speech. 
                  Every conversation is analyzed and stored in your personal dashboard with detailed analytics including call duration, customer sentiment, conversion rates, and actionable insights.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  How quickly can I deploy an AI voice assistant for my business?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our AI voice assistant platform enables deployment within 24-48 hours. The process includes: (1) Account creation and dashboard setup - 15 minutes, 
                  (2) Business information integration and workflow customization - 2 hours, (3) Voice personality selection and training - 1 hour, 
                  (4) Phone number provisioning or existing number integration - immediate, (5) Testing and quality assurance - 4 hours, 
                  (6) Live deployment with full analytics tracking. You'll have access to real-time dashboards showing every call, conversation transcript, customer data, and performance metrics from day one.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  What makes your AI voice agent better than hiring a human receptionist?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our AI voice agents never sleep, never get sick, never take breaks, and never need vacations - providing consistent 24/7/365 availability. 
                  They handle unlimited simultaneous calls (a human receptionist can only handle one), respond in under 750 milliseconds (humans average 2-3 seconds), 
                  work in 50+ languages simultaneously, never forget customer information, provide perfect call transcriptions, generate detailed analytics automatically, 
                  integrate with all your business systems instantly, and cost 90% less than hiring full-time staff. Plus, you get a personal dashboard with real-time insights, 
                  conversion tracking, sentiment analysis, and automated reporting that no human receptionist can provide.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-teal-300 hover:border-teal-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
                  Can AI voice assistants integrate with my existing business systems?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Yes. Our AI voice assistant platform integrates seamlessly with 500+ business applications including Salesforce, HubSpot, Zendesk, Microsoft Dynamics, 
                  Google Workspace, Slack, Calendly, Shopify, WooCommerce, and custom APIs. Integration takes minutes using pre-built connectors. 
                  Your AI agent automatically syncs customer data, updates CRM records, schedules appointments in your calendar, creates support tickets, 
                  processes orders, and triggers workflows across your tech stack. Every action is logged in your analytics dashboard with full audit trails, 
                  real-time synchronization, and bi-directional data flow ensuring your entire team stays informed and aligned.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-pink-300 hover:border-pink-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  What analytics and insights do I get with the AI voice agent platform?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your personal dashboard provides comprehensive real-time analytics: (1) Call volume and duration metrics with hourly/daily/weekly/monthly breakdowns, 
                  (2) Complete conversation transcripts with searchable keyword indexing, (3) Customer sentiment analysis using AI emotion detection, 
                  (4) Conversion rate tracking from initial call to completed action, (5) Lead quality scoring and automatic qualification, 
                  (6) Peak hour identification for staffing optimization, (7) Common question analysis for FAQ development, 
                  (8) Revenue attribution linking calls to closed deals, (9) Multi-language performance comparison, 
                  (10) Custom business KPI tracking, (11) Automated executive reports, and (12) Predictive analytics for demand forecasting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Voice Agent Platform Features - GEO Optimized */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden" role="region" aria-labelledby="platform-features">
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 id="platform-features" className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Complete AI Voice Assistant Platform Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 24/7 Availability */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">24/7 AI Availability</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">Never Sleeps</strong> - 24/7/365 operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">Never Gets Sick</strong> - 99.9% uptime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">Never Takes Breaks</strong> - Continuous service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">Instant Response</strong> - &lt;750ms latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">Unlimited Capacity</strong> - Thousands of simultaneous calls</span>
                  </li>
                </ul>
              </div>

              {/* Advanced Analytics */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Real-Time Analytics Dashboard</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Live call monitoring & tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Complete conversation transcripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Customer sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Revenue attribution tracking</span>
                  </li>
                </ul>
              </div>

              {/* Business Automation */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Complete Business Automation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Automated appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Intelligent lead qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>24/7 customer support automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Order processing & tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>CRM & business system integration</span>
                  </li>
                </ul>
              </div>

              {/* Multi-Language Support */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-teal-300 hover:border-teal-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 via-green-500 to-cyan-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-4">Global Language Coverage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">50+ Languages</strong> supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Automatic language detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Real-time translation capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Cultural context awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Regional accent optimization</span>
                  </li>
                </ul>
              </div>

              {/* Integration Ecosystem */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-pink-300 hover:border-pink-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Seamless Integrations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span><strong className="text-gray-900">500+ App Integrations</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Salesforce, HubSpot, Zendesk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Google Workspace, Microsoft 365</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Custom API & webhook support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Real-time data synchronization</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Security */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-cyan-300 hover:border-cyan-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-200">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">Enterprise-Grade Security</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>SOC 2 Type II certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>GDPR & HIPAA compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Complete audit trail logging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases - ASO Optimized */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-pink-50 relative overflow-hidden" role="region" aria-labelledby="use-cases">
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 id="use-cases" className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              AI Voice Agent Solutions for Every Industry
            </h2>
            <p className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
              From healthcare to e-commerce, our AI voice assistants deliver measurable ROI across all business sectors
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Healthcare */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-pink-300 hover:border-pink-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Healthcare & Medical</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Automated appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Patient pre-screening and triage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Prescription refill automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>HIPAA-compliant patient communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Insurance verification and billing support</span>
                  </li>
                </ul>
              </div>

              {/* Real Estate */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Real Estate</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>24/7 property inquiry handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Automated showing scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Lead qualification and scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Property information distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Follow-up automation and nurturing</span>
                  </li>
                </ul>
              </div>

              {/* E-commerce & Retail */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">E-commerce & Retail</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Order status and tracking inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Product recommendations and upselling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Returns and exchange processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Inventory availability checking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Multi-channel customer support</span>
                  </li>
                </ul>
              </div>

              {/* Financial Services */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Financial Services</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Account balance and transaction inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Fraud alert notifications and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Loan application pre-qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Payment reminders and collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Secure customer authentication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Performance Metrics - GEO Optimized */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden" role="region" aria-labelledby="roi-metrics">
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 id="roi-metrics" className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Proven ROI with AI Voice Agent Technology
            </h2>
            <p className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
              Real businesses achieving extraordinary results with our AI voice assistant platform
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="group bg-white p-6 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-orange-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-pulse">90%</div>
                <div className="text-gray-900 font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600 text-sm">vs. hiring human receptionists</p>
              </div>
              
              <div className="group bg-white p-6 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2 animate-pulse">40%</div>
                <div className="text-gray-900 font-semibold mb-2">More Leads</div>
                <p className="text-gray-600 text-sm">captured and qualified automatically</p>
              </div>
              
              <div className="group bg-white p-6 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-pulse">60%</div>
                <div className="text-gray-900 font-semibold mb-2">Faster Response</div>
                <p className="text-gray-600 text-sm">to customer inquiries</p>
              </div>
              
              <div className="group bg-white p-6 rounded-2xl border-2 border-teal-300 hover:border-teal-500 transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-teal-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent mb-2 animate-pulse">95%</div>
                <div className="text-gray-900 font-semibold mb-2">Customer Satisfaction</div>
                <p className="text-gray-600 text-sm">with AI voice interactions</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-10 rounded-2xl border-2 border-purple-300 shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">Why Businesses Switch to AI Voice Agents</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Traditional Receptionists</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Work only 8 hours per day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Need sick leave and vacations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Handle one call at a time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Cost $30,000-$50,000 annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Limited analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Inconsistent service quality</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">AI Voice Assistants</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Work 24/7/365</strong> without breaks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Never get sick</strong> or need time off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Handle unlimited</strong> simultaneous calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Cost 90% less</strong> than human staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Complete analytics dashboard</strong> with insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong className="text-gray-900">Consistent excellence</strong> every interaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - 12 Questions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-white to-orange-50 relative overflow-hidden" role="region" aria-labelledby="faq-section">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 id="faq-section" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Everything you need to know about AI Voice Agents and AI Voice Assistants
              </p>
            </div>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  What is an AI voice assistant and how does it work?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time. It processes spoken or text input, analyzes the intent, and provides relevant responses through advanced algorithms. Our AI voice assistant can handle complex conversations, learn from interactions, and continuously improve its responses to provide more accurate and helpful assistance to your customers.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  How can AI voice assistants improve customer service?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, reducing wait times, and offering consistent support around the clock. They can resolve common queries immediately, escalate complex issues to human agents when needed, and maintain detailed conversation logs for better service continuity. This results in higher customer satisfaction, reduced operational costs, and improved efficiency for your support team.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Is the AI voice assistant secure for handling customer data?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, compliance with GDPR and industry standards, regular security audits, and strict data privacy protocols. All customer interactions are encrypted and stored securely, with access controls and monitoring systems in place. We ensure that sensitive information is protected and handled according to the highest security standards and regulatory requirements.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-teal-300 hover:border-teal-500 transition-all hover:shadow-2xl hover:shadow-teal-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
                  Can the AI voice assistant integrate with existing business systems?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs. This ensures smooth data flow and enables the assistant to access relevant customer information, update records, and perform actions within your existing workflows. We provide comprehensive integration support and documentation to make the setup process as smooth as possible.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-pink-300 hover:border-pink-500 transition-all hover:shadow-2xl hover:shadow-pink-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  What industries benefit most from AI voice assistants?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications. Any business that values customer interaction and support can leverage AI voice assistants to improve service quality, reduce costs, and enhance customer experience. The technology is particularly valuable for businesses with high call volumes, repetitive queries, or 24/7 support requirements.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  How quickly can I set up and deploy an AI voice assistant?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Setup time varies depending on your requirements and integrations, but most businesses can have a basic AI voice assistant running within 1-2 weeks. This includes initial configuration, training on your specific use cases, and basic integrations. More complex deployments with multiple integrations and custom features may take 2-4 weeks. We provide dedicated support throughout the setup process to ensure smooth deployment.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  What kind of support and maintenance is provided?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and continuous optimization. Our team provides training for your staff, handles system maintenance, and ensures the AI assistant stays updated with the latest features and security patches. We also offer analytics and reporting to help you track performance and identify areas for improvement.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Can the AI voice assistant handle multiple languages?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, our AI voice assistant supports multiple languages and can be configured to communicate in the languages your customers prefer. It can detect the customer's language automatically or be set to specific languages based on your business needs. The assistant maintains the same level of accuracy and understanding across different languages, ensuring consistent service quality for all your customers.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-teal-300 hover:border-teal-500 transition-all hover:shadow-2xl hover:shadow-teal-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
                  What is the difference between an AI Voice Agent and traditional IVR systems?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI Voice Agents are significantly more advanced than traditional IVR (Interactive Voice Response) systems. While IVR relies on pre-recorded menus and limited options, AI Voice Agents use natural language understanding to have genuine conversations with customers. They can understand context, handle complex queries, learn from interactions, and provide personalized responses. AI Voice Agents offer a more natural, efficient, and satisfying customer experience compared to the rigid menu-driven approach of traditional IVR systems.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-pink-300 hover:border-pink-500 transition-all hover:shadow-2xl hover:shadow-pink-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  How much does an AI Voice Assistant platform cost?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pricing for AI Voice Assistant platforms varies based on usage volume, features, and integration requirements. Most platforms offer flexible pricing models including per-minute usage, monthly subscriptions, or enterprise packages. Typical costs range from $0.05-$0.15 per minute for pay-as-you-go plans, or $500-$5000+ per month for subscription plans depending on call volume and features. Contact us for a customized quote based on your specific business needs and expected usage patterns.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Can AI Voice Agents make outbound calls for sales and appointments?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, AI Voice Agents excel at making outbound calls for various purposes including sales outreach, appointment scheduling, follow-ups, reminders, and surveys. They can handle objections, answer questions, and even close deals or book appointments autonomously. Outbound AI Voice Agents work from your contact lists, respect calling preferences, and can adapt their approach based on the conversation. This enables businesses to scale their outreach efforts while maintaining personalized interactions.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-white p-8 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-200">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  How accurate is the speech recognition in AI Voice Assistants?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Modern AI Voice Assistants achieve 95-98% accuracy in speech recognition under normal conditions. Our platform uses advanced deep learning models trained on millions of conversations across various accents, dialects, and speaking styles. The system continuously improves through machine learning, adapting to your specific industry terminology and customer base. Accuracy can be affected by background noise, audio quality, and regional accents, but our AI is designed to handle these challenges effectively and request clarification when needed.
                </p>
              </div>
            </div>

            {/* CTA to FAQ Page */}
            <div className="mt-16 text-center">
              <Link 
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-xl shadow-2xl hover:shadow-orange-400 transition-all duration-300 hover:scale-105 border-2 border-orange-300"
              >
                View All FAQs & Detailed Answers
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <LeadForm />

        {/* Modern CTA Component */}
        <CTA />

        {/* Comprehensive Structured Data - SEO/GEO/VSO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.digitalbot.in/#organization",
                  "name": "DigitalBot",
                  "alternateName": "DigitalBot AI Voice Agent Platform",
                  "url": "https://www.digitalbot.in",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.digitalbot.in/logo.png",
                    "width": 600,
                    "height": 600
                  },
                  "description": "AI Voice Agent Platform - Never Sleeps, Never Stops. 24/7 AI voice assistants that handle unlimited calls simultaneously with enterprise-grade analytics.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-XXXX-XXXXXX",
                    "contactType": "customer service",
                    "availableLanguage": ["en", "hi"],
                    "areaServed": "Worldwide"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/digitalbot",
                    "https://twitter.com/digitalbot",
                    "https://www.facebook.com/digitalbot"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.digitalbot.in/#website",
                  "url": "https://www.digitalbot.in",
                  "name": "DigitalBot - AI Voice Agent Platform",
                  "description": "AI voice agents that never sleep, never get sick, never take breaks. Transform your business with 24/7 automated call handling and real-time analytics.",
                  "publisher": {
                    "@id": "https://www.digitalbot.in/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.digitalbot.in/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "DigitalBot AI Voice Agent",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Cloud-based",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "description": "Free trial available"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "2847",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "description": "AI Voice Assistant Platform with 99.9% uptime, <750ms response time, 24/7 availability, unlimited simultaneous calls, and comprehensive analytics dashboard.",
                  "featureList": [
                    "24/7/365 AI voice agent availability",
                    "Never sleeps, never gets sick, never takes breaks",
                    "99.9% uptime guarantee",
                    "<750ms AI response latency",
                    "Unlimited simultaneous call handling",
                    "Real-time analytics dashboard",
                    "Complete conversation transcripts",
                    "Customer sentiment analysis",
                    "50+ language support",
                    "CRM and business system integration",
                    "Automated appointment scheduling",
                    "Lead qualification and scoring",
                    "HIPAA and GDPR compliance",
                    "Enterprise-grade security",
                    "Custom workflow automation"
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "AI Voice Agent",
                  "provider": {
                    "@id": "https://www.digitalbot.in/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Worldwide"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AI Voice Assistant Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Call Center Automation",
                          "description": "24/7 automated call handling with real-time analytics"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Virtual Receptionist",
                          "description": "Never sleeps, never takes breaks - always available receptionist"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Customer Support Assistant",
                          "description": "Instant customer support with sentiment analysis"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Sales Agent",
                          "description": "Automated lead qualification and conversion"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is an AI voice agent and how does it work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI voice agent is an intelligent conversational system that handles phone calls autonomously using advanced natural language processing. Unlike human receptionists who need sleep, sick leave, and breaks, our AI voice agents operate 24/7/365 without interruption. They understand spoken language, process customer requests in real-time, access your business data instantly, and respond with natural-sounding speech. Every conversation is analyzed and stored in your personal dashboard with detailed analytics including call duration, customer sentiment, conversion rates, and actionable insights."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How quickly can I deploy an AI voice assistant for my business?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our AI voice assistant platform enables deployment within 24-48 hours. The process includes: (1) Account creation and dashboard setup - 15 minutes, (2) Business information integration and workflow customization - 2 hours, (3) Voice personality selection and training - 1 hour, (4) Phone number provisioning or existing number integration - immediate, (5) Testing and quality assurance - 4 hours, (6) Live deployment with full analytics tracking. You'll have access to real-time dashboards showing every call, conversation transcript, customer data, and performance metrics from day one."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes your AI voice agent better than hiring a human receptionist?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our AI voice agents never sleep, never get sick, never take breaks, and never need vacations - providing consistent 24/7/365 availability. They handle unlimited simultaneous calls (a human receptionist can only handle one), respond in under 750 milliseconds (humans average 2-3 seconds), work in 50+ languages simultaneously, never forget customer information, provide perfect call transcriptions, generate detailed analytics automatically, integrate with all your business systems instantly, and cost 90% less than hiring full-time staff. Plus, you get a personal dashboard with real-time insights, conversion tracking, sentiment analysis, and automated reporting that no human receptionist can provide."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can AI voice assistants integrate with my existing business systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our AI voice assistant platform integrates seamlessly with 500+ business applications including Salesforce, HubSpot, Zendesk, Microsoft Dynamics, Google Workspace, Slack, Calendly, Shopify, WooCommerce, and custom APIs. Integration takes minutes using pre-built connectors. Your AI agent automatically syncs customer data, updates CRM records, schedules appointments in your calendar, creates support tickets, processes orders, and triggers workflows across your tech stack. Every action is logged in your analytics dashboard with full audit trails, real-time synchronization, and bi-directional data flow ensuring your entire team stays informed and aligned."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What analytics and insights do I get with the AI voice agent platform?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your personal dashboard provides comprehensive real-time analytics: (1) Call volume and duration metrics with hourly/daily/weekly/monthly breakdowns, (2) Complete conversation transcripts with searchable keyword indexing, (3) Customer sentiment analysis using AI emotion detection, (4) Conversion rate tracking from initial call to completed action, (5) Lead quality scoring and automatic qualification, (6) Peak hour identification for staffing optimization, (7) Common question analysis for FAQ development, (8) Revenue attribution linking calls to closed deals, (9) Multi-language performance comparison, (10) Custom business KPI tracking, (11) Automated executive reports, and (12) Predictive analytics for demand forecasting."
                      }
                    }
                  ]
                },
                {
                  "@type": "Product",
                  "name": "AI Voice Agent Platform",
                  "description": "Enterprise AI voice assistant platform that never sleeps, never gets sick, and never takes breaks. 24/7 automated call handling with 99.9% uptime and complete analytics.",
                  "brand": {
                    "@type": "Brand",
                    "name": "DigitalBot"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2847"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "INR",
                    "lowPrice": "0",
                    "highPrice": "999999",
                    "offerCount": "4"
                  }
                }
              ]
            })
          }}
        />
        
      </main>
      
      <Footer />
    </>
  )
}
