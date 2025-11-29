import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { LeadForm } from "@/components/lead-form"
import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-black px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen" role="main" suppressHydrationWarning>
        <Hero />
        
        {/* Lead Form - Positioned Below Hero */}
        <LeadForm />
        
        {/* SEO-Optimized Content Sections - DO NOT REMOVE */}
        
        {/* Stats Section - Above the Fold */}
        <section className="py-6 px-3 sm:px-4 lg:px-6 bg-black relative overflow-hidden" role="region" aria-labelledby="performance-stats">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left md:text-center">
              <div className="bg-cyan-400/5 backdrop-blur-md border border-cyan-400/20 p-3 shadow-lg shadow-cyan-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 relative overflow-hidden group" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-15 filter blur-xl group-hover:opacity-25 transition-opacity"></div>
                <div className="text-lg sm:text-xl font-bold text-cyan-400 relative z-10" style={{
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}>99.9%</div>
                <div className="mt-1 text-white font-semibold text-xs relative z-10 uppercase tracking-wider">Uptime Guarantee</div>
                <p className="mt-1 text-xs text-cyan-400 relative z-10">Enterprise-grade reliability</p>
              </div>
              
              <div className="bg-cyan-400/5 backdrop-blur-md border border-cyan-400/20 p-3 shadow-lg shadow-cyan-400/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-400/40 relative overflow-hidden group" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-15 filter blur-xl group-hover:opacity-25 transition-opacity"></div>
                <div className="text-lg sm:text-xl font-bold text-cyan-400 relative z-10" style={{
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}>&lt;750ms</div>
                <div className="mt-1 text-white font-semibold text-xs relative z-10 uppercase tracking-wider">AI Response Time</div>
                <p className="mt-1 text-xs text-cyan-400 relative z-10">Lightning-fast interactions</p>
              </div>
              
              <div className="bg-cyan-400/5 backdrop-blur-md border border-cyan-400/20 p-3 shadow-lg shadow-cyan-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 relative overflow-hidden group" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-15 filter blur-xl group-hover:opacity-25 transition-opacity"></div>
                <div className="text-lg sm:text-xl font-bold text-cyan-400 relative z-10" style={{
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}>24/7</div>
                <div className="mt-1 text-white font-semibold text-xs relative z-10 uppercase tracking-wider">Always Available</div>
                <p className="mt-1 text-xs text-cyan-400 relative z-10">Never sleeps or takes breaks</p>
              </div>
            </div>
          </div>
        </section>

        {/* H1 Section - Primary Keywords */}
        <section className="py-8 px-3 sm:px-4 lg:px-6 bg-black relative overflow-hidden" role="region" aria-labelledby="main-heading">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              
              {/* Left Content */}
              <div className="space-y-4">
                <h2 id="main-heading" className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300 mb-3 leading-tight text-left">
                  <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 drop-shadow-sm tracking-widest">AI Voice Agent Platform</span>
                  <span className="inline-block px-4 py-2 rounded-xl text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 shadow-lg shadow-cyan-400/40 text-lg sm:text-xl lg:text-2xl relative overflow-hidden border border-cyan-400">
                    <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400/25 via-transparent to-transparent"></span>
                    <span className="relative z-10">Never Sleeps, Never Stops</span>
                  </span>
                </h2>
                
                <div className="p-3 bg-cyan-400/5 backdrop-blur-md border border-cyan-400/30 shadow-md shadow-cyan-400/20" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <p className="text-xs sm:text-sm font-bold text-cyan-400 mb-2">
                    "Your receptionist sleeps, gets sick, takes breaks."
                  </p>
                  <p className="text-sm sm:text-base font-extrabold text-black inline-block bg-cyan-400 px-3 py-1 shadow-sm shadow-cyan-500/30 border border-cyan-400 uppercase tracking-wide" style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}>
                    <span className="relative z-10">WE NEVER DO.</span>
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-cyan-300 leading-relaxed">
                  Transform your business with <span className="font-bold text-cyan-400">AI voice agents</span> that handle unlimited calls simultaneously, 
                  provide instant responses, and deliver <span className="font-semibold text-cyan-400">detailed analytics</span> through your <span className="font-semibold text-cyan-400">personal dashboard</span>. 
                  Our <span className="font-bold text-cyan-400">AI voice assistant</span> platform automates customer service, lead qualification, and business communications.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" style={{
                      boxShadow: '0 0 6px rgba(0, 255, 255, 0.4)'
                    }}></span>
                    <span className="font-medium text-cyan-300 uppercase tracking-wide text-xs">Real-Time Analytics</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" style={{
                      boxShadow: '0 0 6px rgba(0, 255, 255, 0.4)'
                    }}></span>
                    <span className="font-medium text-cyan-300 uppercase tracking-wide text-xs">Personal Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" style={{
                      boxShadow: '0 0 6px rgba(0, 255, 255, 0.4)'
                    }}></span>
                    <span className="font-medium text-cyan-300 uppercase tracking-wide text-xs">Call Automation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" style={{
                      boxShadow: '0 0 6px rgba(0, 255, 255, 0.4)'
                    }}></span>
                    <span className="font-medium text-cyan-300 uppercase tracking-wide text-xs">50+ Languages</span>
                  </div>
                </div>
                
                {/* Cyberpunk CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link 
                    href="/pricing" 
                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold text-black bg-cyan-400 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 border border-cyan-400 uppercase tracking-wide"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    View Pricing
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold text-cyan-400 bg-transparent border border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 shadow-sm uppercase tracking-wide"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
              
              {/* Right HD Image */}
              <div className="relative">
                <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg shadow-cyan-400/20 border border-cyan-400/30">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                    alt="AI Voice Assistant Technology - Modern Business Communication Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-cyan-900/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/90 backdrop-blur-md rounded-xl p-4 border border-cyan-400/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg border border-cyan-400/30">
                          <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-cyan-300">Live Analytics</div>
                          <div className="text-xs text-cyan-400">Real-time dashboard</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-cyan-400 font-medium">✓ 99.9% Uptime</span>
                        <span className="text-cyan-400 font-medium tracking-wide">24/7 Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Voice Search Optimized Q&A - VSO */}
        <section className="py-8 px-3 sm:px-4 lg:px-6 bg-black relative overflow-hidden" role="region" aria-labelledby="voice-search-qa">
          {/* Floating circles */}
          <div className="absolute top-0 left-1/4 w-24 h-24 bg-cyan-500 rounded-full opacity-6 animate-pulse blur-xl"></div>
          <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-cyan-400 rounded-full opacity-6 animate-pulse blur-xl"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 id="voice-search-qa" className="text-lg sm:text-xl lg:text-2xl font-bold text-left mb-6 text-cyan-400 uppercase tracking-wide" style={{
              textShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
            }}>
              Common Questions About AI Voice Agents
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              
              {/* Left HD Image - Further Reduced Height */}
              <div className="relative lg:order-2">
                <div className="h-full min-h-[1454px] rounded-lg overflow-hidden shadow-md shadow-cyan-400/15 border border-cyan-400/20">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                    alt="AI Voice Technology FAQ - Advanced Business Communication System"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay with Q&A indicators */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/95 backdrop-blur-md rounded-xl p-4 border border-cyan-400/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-cyan-300">AI Assistant Live</span>
                      </div>
                      <div className="text-sm text-cyan-400 mb-2">Ready to answer your questions 24/7</div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded border border-cyan-400/30">FAQ Ready</div>
                        <div className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded border border-cyan-400/30">Instant Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Questions - Complete Content */}
              <div className="space-y-3 lg:order-1">
                <div className="group bg-cyan-400/5 backdrop-blur-md p-3 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/25" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                    What is an AI voice agent and how does it work?
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    An AI voice agent is an intelligent conversational system that handles phone calls autonomously using advanced natural language processing. 
                    Unlike human receptionists who need sleep, sick leave, and breaks, our AI voice agents operate 24/7/365 without interruption. 
                    They understand spoken language, process customer requests in real-time, access your business data instantly, and respond with natural-sounding speech. 
                    Every conversation is analyzed and stored in your personal dashboard with detailed analytics including call duration, customer sentiment, conversion rates, and actionable insights.
                  </p>
                </div>

                <div className="group bg-cyan-400/5 backdrop-blur-md p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/25" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                    How quickly can I deploy an AI voice assistant for my business?
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    Our AI voice assistant platform enables deployment within 24-48 hours. The process includes: (1) Account creation and dashboard setup - 15 minutes, 
                    (2) Business information integration and workflow customization - 2 hours, (3) Voice personality selection and training - 1 hour, 
                    (4) Phone number provisioning or existing number integration - immediate, (5) Testing and quality assurance - 4 hours, 
                    (6) Live deployment with full analytics tracking. You'll have access to real-time dashboards showing every call, conversation transcript, customer data, and performance metrics from day one.
                  </p>
                </div>

                <div className="group bg-cyan-400/5 backdrop-blur-md p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/25" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                    What makes your AI voice agent better than hiring a human receptionist?
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    Our AI voice agents never sleep, never get sick, never take breaks, and never need vacations - providing consistent 24/7/365 availability. 
                    They handle unlimited simultaneous calls (a human receptionist can only handle one), respond in under 750 milliseconds (humans average 2-3 seconds), 
                    work in 50+ languages simultaneously, never forget customer information, provide perfect call transcriptions, generate detailed analytics automatically, 
                    integrate with all your business systems instantly, and cost 90% less than hiring full-time staff. Plus, you get a personal dashboard with real-time insights, 
                    conversion tracking, sentiment analysis, and automated reporting that no human receptionist can provide.
                  </p>
                </div>

                <div className="group bg-cyan-400/5 backdrop-blur-md p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/25" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                    Can AI voice assistants integrate with my existing business systems?
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    Yes. Our AI voice assistant platform integrates seamlessly with 500+ business applications including Salesforce, HubSpot, Zendesk, Microsoft Dynamics, 
                    Google Workspace, Slack, Calendly, Shopify, WooCommerce, and custom APIs. Integration takes minutes using pre-built connectors. 
                    Your AI agent automatically syncs customer data, updates CRM records, schedules appointments in your calendar, creates support tickets, 
                    processes orders, and triggers workflows across your tech stack. Every action is logged in your analytics dashboard with full audit trails, 
                    real-time synchronization, and bi-directional data flow ensuring your entire team stays informed and aligned.
                  </p>
                </div>

                <div className="group bg-cyan-400/5 backdrop-blur-md p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/25" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                    What analytics and insights do I get with the AI voice agent platform?
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
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
          </div>
        </section>

        {/* AI Voice Agent Platform Features - Redesigned with Images */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" role="region" aria-labelledby="platform-features">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/15 to-cyan-600/8 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-cyan-500/10 to-cyan-400/15 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-300/8 via-cyan-400/12 to-cyan-500/8 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-left mb-6">
              <h2 id="platform-features" className="text-lg sm:text-xl font-bold mb-3 text-cyan-400 uppercase tracking-wide" style={{
                textShadow: '0 0 12px rgba(0, 255, 255, 0.3)'
              }}>
                Complete AI Voice Assistant Platform Features
              </h2>
              <p className="text-cyan-300 text-sm max-w-3xl leading-relaxed">
                Discover the powerful capabilities that revolutionize business communication with cutting-edge AI technology
              </p>
            </div>
            
            {/* Features Grid with Individual Card Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* 24/7 Availability */}
              <div className="group relative bg-cyan-400/5 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                {/* Image Header */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                    alt="24/7 AI Voice Assistant - Never Sleeps"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-3 py-1 border border-cyan-400/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 font-semibold">Always Online 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">24/7 AI Availability</h3>
                  <ul className="space-y-1 text-cyan-200 text-xs">
                    <li className="flex items-start gap-1">
                      <span className="text-cyan-400 text-xs">✓</span>
                      <span><strong className="text-cyan-300">Never Sleeps</strong> - 24/7/365 operation</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-cyan-400 text-xs">✓</span>
                      <span><strong className="text-cyan-300">Never Gets Sick</strong> - 99.9% uptime</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-cyan-400 text-xs">✓</span>
                      <span><strong className="text-cyan-300">Never Takes Breaks</strong> - Continuous service</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-cyan-400 text-xs">✓</span>
                      <span><strong className="text-cyan-300">Instant Response</strong> - &lt;750ms latency</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-cyan-400 text-xs">✓</span>
                      <span><strong className="text-cyan-300">Unlimited Capacity</strong> - Thousands of simultaneous calls</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Advanced Analytics */}
              <div className="group relative bg-cyan-400/5 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    alt="Real-Time Analytics Dashboard - AI Voice Assistant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-2 py-1 border border-cyan-400/50">
                      <div className="grid grid-cols-3 gap-1 text-xs">
                        <div className="text-center">
                          <div className="font-bold text-cyan-400">1,247</div>
                          <div className="text-cyan-400">Calls</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-cyan-400">94%</div>
                          <div className="text-cyan-400">Success</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-cyan-400">47</div>
                          <div className="text-cyan-400">Leads</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-wide">Real-Time Analytics Dashboard</h3>
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Live call monitoring & tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Complete conversation transcripts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Customer sentiment analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Conversion rate optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Revenue attribution tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Business Automation */}
              <div className="group relative bg-black/95 backdrop-blur-md rounded-3xl border-2 border-cyan-400/40 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/30 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
                    alt="Complete Business Automation - AI Voice Assistant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-3 py-1 border border-cyan-400/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 font-semibold">Automation Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-wide">Complete Business Automation</h3>
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Automated appointment scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Intelligent lead qualification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>24/7 customer support automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Order processing & tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>CRM & business system integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Multi-Language Support */}
              <div className="group relative bg-black/95 backdrop-blur-md rounded-3xl border-2 border-cyan-400/40 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/30 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
                    alt="Global Language Coverage - AI Voice Assistant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-3 py-1 border border-cyan-400/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 font-semibold">50+ Languages</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-wide">Global Language Coverage</h3>
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span><strong className="text-cyan-300">50+ Languages</strong> supported</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Automatic language detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Real-time translation capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Cultural context awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Regional accent optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integration Ecosystem */}
              <div className="group relative bg-black/95 backdrop-blur-md rounded-3xl border-2 border-cyan-400/40 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/30 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
                    alt="Seamless Integrations - AI Voice Assistant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-3 py-1 border border-cyan-400/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 font-semibold">500+ Integrations</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-wide">Seamless Integrations</h3>
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span><strong className="text-cyan-300">500+ App Integrations</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Salesforce, HubSpot, Zendesk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Google Workspace, Microsoft 365</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Custom API & webhook support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Real-time data synchronization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enterprise Security */}
              <div className="group relative bg-black/95 backdrop-blur-md rounded-3xl border-2 border-cyan-400/40 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/30 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                    alt="Enterprise-Grade Security - AI Voice Assistant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg px-3 py-1 border border-cyan-400/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 font-semibold">Security Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-wide">Enterprise-Grade Security</h3>
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>SOC 2 Type II certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>GDPR & HIPAA compliant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Role-based access control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>Complete audit trail logging</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Industry Use Cases - Compact Design */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" role="region" aria-labelledby="use-cases">
          {/* Compact Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-5 right-10 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-cyan-600/8 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-5 w-28 h-28 bg-gradient-to-tr from-cyan-500/8 to-cyan-400/12 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-300/6 via-cyan-400/10 to-cyan-500/6 rounded-full blur-lg"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Compact Header Section */}
            <div className="text-center mb-10">
              <div className="inline-block mb-4">
                <div className="relative">
                  <h2 id="use-cases" className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2 text-cyan-400 leading-tight uppercase tracking-wider" style={{
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                  }}>
                    AI Voice Agent Solutions
                  </h2>
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-cyan-300 mb-3 uppercase tracking-wider">
                    for Every Industry
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-cyan-400 rounded-full" style={{
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                  }}></div>
                </div>
              </div>
              <p className="text-center text-cyan-300 text-sm mb-4 max-w-2xl mx-auto leading-relaxed">
                From healthcare to e-commerce, our AI voice assistants deliver <span className="text-cyan-400 font-bold">measurable ROI</span> across all sectors
              </p>
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
                }}></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{
                  animationDelay: '0.1s',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
                }}></div>
                <div className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce" style={{
                  animationDelay: '0.2s',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
                }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Healthcare & Medical */}
              <div className="group bg-cyan-400/5 overflow-hidden border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/images/hospital.png"
                    alt="AI Voice Assistant for Healthcare & Medical"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl border-2 border-white/50">
                        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-1 uppercase tracking-wider">Healthcare</h3>
                        <h4 className="text-lg font-medium text-cyan-200 uppercase tracking-wide">& Medical</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1 uppercase tracking-wider">Automated Appointment Scheduling</div>
                        <div className="text-cyan-400 text-sm">24/7 booking and reminders</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Patient Pre-Screening</div>
                        <div className="text-cyan-400 text-sm">Triage and symptom assessment</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Prescription Refills</div>
                        <div className="text-cyan-400 text-sm">Automated medication management</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">HIPAA-Compliant</div>
                        <div className="text-cyan-400 text-sm">Secure patient communication</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Real Estate */}
              <div className="group bg-black/95 rounded-2xl overflow-hidden border-2 border-cyan-400/60 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/30">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/female-real-estate.jpg"
                    alt="AI Voice Assistant for Real Estate"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl border-2 border-white/50">
                        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-1">Real Estate</h3>
                        <h4 className="text-lg font-medium text-cyan-200">Solutions</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">24/7 Property Inquiries</div>
                        <div className="text-cyan-400 text-sm">Never miss a lead</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Automated Showing Scheduling</div>
                        <div className="text-cyan-400 text-sm">Instant appointments</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Lead Qualification</div>
                        <div className="text-cyan-400 text-sm">Automatic buyer scoring</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Follow-up Automation</div>
                        <div className="text-cyan-400 text-sm">Nurture leads effectively</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hospitality & Hotels */}
              <div className="group bg-black/95 rounded-2xl overflow-hidden border-2 border-cyan-400/60 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/30">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/hotel-reception.jpg"
                    alt="AI Voice Assistant for Hotels & Hospitality"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl border-2 border-white/50">
                        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-1">Hotels</h3>
                        <h4 className="text-lg font-medium text-cyan-200">& Hospitality</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Reservation Management</div>
                        <div className="text-cyan-400 text-sm">Booking and confirmations</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Guest Services</div>
                        <div className="text-cyan-400 text-sm">Room service and concierge</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Multi-Language Support</div>
                        <div className="text-cyan-400 text-sm">Serve international guests</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">24/7 Front Desk</div>
                        <div className="text-cyan-400 text-sm">Always available assistance</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* E-commerce & Business */}
              <div className="group bg-black/95 rounded-2xl overflow-hidden border-2 border-cyan-400/60 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/30">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/ai-voice-agent.png"
                    alt="AI Voice Agent for E-commerce & Business"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl border-2 border-white/50">
                        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-1">E-commerce</h3>
                        <h4 className="text-lg font-medium text-cyan-200">& Business</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-cyan-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Order Tracking</div>
                        <div className="text-cyan-400 text-sm">Real-time status updates</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Customer Support</div>
                        <div className="text-cyan-400 text-sm">Instant query resolution</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Product Recommendations</div>
                        <div className="text-cyan-400 text-sm">AI-powered upselling</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg font-bold">✓</span>
                      <div>
                        <div className="text-cyan-300 font-semibold text-base mb-1">Returns & Exchanges</div>
                        <div className="text-cyan-400 text-sm">Automated processing</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Performance Metrics - Optimized Design */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" role="region" aria-labelledby="roi-metrics">
          {/* Compact Background Elements */}
          <div className="absolute top-10 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/15 to-cyan-500/15 rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/12 to-cyan-600/12 rounded-full blur-lg animate-pulse delay-1000" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            
            {/* Split Layout Design */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              
              {/* Left Side - Content */}
              <div className="space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-400 border border-cyan-400 mb-4 uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}>
                  <TrendingUp className="w-3 h-3 text-black animate-pulse" />
                  <span className="text-xs font-bold text-black">Proven Results</span>
                </div>

                {/* Heading */}
                <h2 id="roi-metrics" className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight uppercase tracking-wider">
                  <span className="text-cyan-300">Proven ROI with</span>
                  <br />
                  <span className="text-cyan-400" style={{
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                  }}>
                    AI Voice Agent Technology
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-base text-cyan-300 leading-relaxed">
                  Real businesses achieving extraordinary results with our AI voice assistant platform.
                  <span className="block mt-2 text-cyan-400 font-semibold">Transform your customer experience today.</span>
                </p>
              </div>

              {/* Right Side - Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="group bg-cyan-400/5 backdrop-blur-sm p-3 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] shadow-sm" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}>
                  <div className="text-2xl font-extrabold text-cyan-400 mb-1" style={{
                    textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
                  }}>90%</div>
                  <div className="text-cyan-300 font-semibold text-sm mb-1 uppercase tracking-wider">Cost Reduction</div>
                  <p className="text-cyan-300 text-xs">vs. hiring human receptionists</p>
                </div>
                
                <div className="group bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] shadow-sm">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-1 tracking-wide">40%</div>
                  <div className="text-cyan-300 font-semibold text-sm mb-1">More Leads</div>
                  <p className="text-cyan-400 text-xs">captured and qualified</p>
                </div>
                
                <div className="group bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] shadow-sm">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-1">60%</div>
                  <div className="text-cyan-300 font-semibold text-sm mb-1">Faster Response</div>
                  <p className="text-cyan-400 text-xs">to customer inquiries</p>
                </div>
                
                <div className="group bg-black/90 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] shadow-sm">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-1">95%</div>
                  <div className="text-cyan-300 font-semibold text-sm mb-1">Customer Satisfaction</div>
                  <p className="text-cyan-400 text-xs">with AI voice interactions</p>
                </div>
              </div>
            </div>

            {/* Comparison Section - Compact Design */}
            <div className="bg-black/95 backdrop-blur-md rounded-2xl border border-cyan-400/30 shadow-lg p-6 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-400/15 to-transparent rounded-full blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-base font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent tracking-wide">Why Businesses Switch to AI Voice Agents</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300 mb-3">Traditional Receptionists</h4>
                    <ul className="space-y-2 text-xs text-cyan-400">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>Work only 8 hours per day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>Need sick leave and vacations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>Handle one call at a time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>Cost $30,000-$50,000 annually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>Limited analytics and reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300 mb-3">AI Voice Assistants</h4>
                    <ul className="space-y-2 text-xs text-cyan-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span><strong className="text-cyan-300">Work 24/7/365</strong> without breaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span><strong className="text-cyan-300">Never get sick</strong> or need time off</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span><strong className="text-cyan-300">Handle unlimited</strong> simultaneous calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span><strong className="text-cyan-300">Cost 90% less</strong> than human staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span><strong className="text-cyan-300">Complete analytics dashboard</strong> with insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Cyberpunk Design with Optimized Sizes */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" role="region" aria-labelledby="faq-section">
          {/* Optimized Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-full filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-cyan-500/15 to-cyan-600/15 rounded-full filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-32 right-32 w-20 h-20 bg-gradient-to-br from-cyan-300/25 to-cyan-400/25 rounded-full filter blur-lg animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-left mb-8">
              <div className="inline-block mb-3">
                <span className="px-3 py-1 bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wide shadow-md animate-pulse" style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}>
                  Got Questions? We've Got Answers
                </span>
              </div>
              <h2 id="faq-section" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-cyan-300 uppercase tracking-wide">
                <span className="block mb-1">Frequently Asked</span>
                <span className="text-cyan-400" style={{
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}>
                  Questions
                </span>
              </h2>
              <p className="text-cyan-300 text-sm max-w-2xl leading-relaxed">
                Everything you need to know about <span className="text-cyan-400 font-semibold">AI Voice Agents</span> and <span className="text-cyan-400 font-semibold">AI Voice Assistants</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* FAQ 1 */}
              <div className="group relative bg-cyan-400/5 backdrop-blur-sm p-3 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-cyan-400/20" style={{
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
              }}>
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-cyan-400 border border-cyan-400 flex items-center justify-center text-black font-bold text-xs shadow-sm rotate-12 group-hover:rotate-0 transition-transform" style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}>
                  01
                </div>
                <h3 className="text-sm font-bold text-cyan-400 mb-2 mt-1 uppercase tracking-wide">
                  What is an AI voice assistant and how does it work?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-xs">
                  An AI voice assistant is an intelligent conversational system that uses natural language processing and machine learning to understand and respond to customer queries in real-time.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group relative bg-black/90 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-black font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform border border-cyan-400/30">
                  02
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-3 mt-1 tracking-wide">
                  How can AI voice assistants improve customer service?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  AI voice assistants enhance customer service by providing instant responses, handling multiple conversations simultaneously, and offering consistent support around the clock.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group relative bg-black/90 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-black font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform border border-cyan-400/30">
                  03
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-3 mt-1 tracking-wide">
                  Is the AI voice assistant secure for handling customer data?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Yes, our AI voice assistant employs enterprise-grade security measures including end-to-end encryption, GDPR compliance, and strict data privacy protocols.
                </p>
              </div>

              {/* FAQ 4 */}
               <div className="group relative bg-black/90 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-black font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform border border-cyan-400/30">
                  04
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  Can the AI voice assistant integrate with existing business systems?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Absolutely. Our AI voice assistant offers seamless integration with popular CRM systems, help desk software, e-commerce platforms, and custom APIs.
                </p>
              </div>

              {/* FAQ 5 */}
               <div className="group relative bg-black/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  05
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  What industries benefit most from AI voice assistants?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  AI voice assistants benefit various industries including healthcare, e-commerce, banking, hospitality, real estate, education, and telecommunications.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group relative bg-gradient-to-br from-cyan-950/80 to-gray-900/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  06
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  How quickly can I set up and deploy an AI voice assistant?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Setup time varies depending on your requirements and integrations, but most businesses can have a basic AI voice assistant running within 1-2 weeks.
                </p>
              </div>

              {/* FAQ 7 */}
               <div className="group relative bg-black/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  07
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  What kind of support and maintenance is provided?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and continuous optimization.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group relative bg-gradient-to-br from-cyan-950/80 to-gray-900/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  08
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  Can the AI voice assistant handle multiple languages?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Yes, our AI voice assistant supports multiple languages and can be configured to communicate in the languages your customers prefer.
                </p>
              </div>

              {/* FAQ 9 */}
               <div className="group relative bg-black/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  09
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  What is the difference between an AI Voice Agent and traditional IVR systems?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  AI Voice Agents are significantly more advanced than traditional IVR systems. While IVR relies on pre-recorded menus, AI Voice Agents use natural language understanding.
                </p>
              </div>

              {/* FAQ 10 */}
               <div className="group relative bg-gradient-to-br from-cyan-950/80 to-gray-900/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  10
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  How much does an AI Voice Assistant platform cost?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Pricing varies based on usage volume, features, and integration requirements. Most platforms offer flexible pricing models from $0.05-$0.15 per minute.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group relative bg-black/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  11
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  Can AI Voice Agents make outbound calls for sales and appointments?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Yes, AI Voice Agents excel at making outbound calls for sales outreach, appointment scheduling, follow-ups, reminders, and surveys. They can handle objections and close deals.
                </p>
              </div>

              {/* FAQ 12 */}
               <div className="group relative bg-gradient-to-br from-cyan-950/80 to-gray-900/95 backdrop-blur-sm p-5 rounded-2xl border border-cyan-400/30 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/25">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform">
                  12
                </div>
                <h3 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3 mt-1">
                  How accurate is the speech recognition in AI Voice Assistants?
                </h3>
                <p className="text-cyan-300 leading-relaxed text-sm">
                  Modern AI Voice Assistants achieve 95-98% accuracy in speech recognition. Our platform uses advanced deep learning models trained on millions of conversations.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-black/90 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">Still have questions?</h3>
                <p className="text-cyan-300 mb-4 max-w-lg text-sm">Our AI experts are here to help you find the perfect solution for your business</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-cyan-300 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

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

















