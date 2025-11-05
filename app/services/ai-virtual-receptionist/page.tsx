"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, ArrowRight, Phone, Clock, Users, Calendar, MessageCircle, Headphones, Zap, Check, Shield } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const features = [
  {
    icon: Phone,
    title: "24/7 Call Answering",
    description: "Never miss a call again. Your AI receptionist answers every call instantly, day or night, weekends and holidays included."
  },
  {
    icon: Calendar,
    title: "Smart Appointment Scheduling",
    description: "Automatically books, reschedules, and confirms appointments while syncing with your calendar in real-time."
  },
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Engages callers with human-like voice interactions, understanding context and providing personalized responses."
  },
  {
    icon: Users,
    title: "Call Routing & Transfer",
    description: "Intelligently routes calls to the right department or person based on caller intent and availability."
  },
  {
    icon: Headphones,
    title: "Multi-Language Support",
    description: "Communicates fluently in over 30 languages, ensuring every caller feels understood and valued."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and compliance for healthcare, legal, and regulated industries."
  }
]

const benefits = [
  {
    title: "Reduce Reception Costs by 70%",
    description: "Eliminate the need for multiple receptionists while providing superior 24/7 coverage at a fraction of the cost."
  },
  {
    title: "Increase Lead Capture by 40%",
    description: "Capture every opportunity with instant call answering and intelligent lead qualification that never sleeps."
  },
  {
    title: "Improve Customer Satisfaction",
    description: "Zero hold times, instant responses, and personalized interactions create exceptional caller experiences."
  },
  {
    title: "Scale Without Hiring",
    description: "Handle unlimited simultaneous calls during peak times without adding staff or infrastructure."
  }
]

const useCases = [
  {
    title: "Medical & Healthcare Practices",
    description: "Handle appointment scheduling, insurance verification, prescription refills, and patient inquiries while maintaining HIPAA compliance.",
    results: "85% reduction in missed appointments"
  },
  {
    title: "Professional Services",
    description: "Manage client intake, consultation bookings, document requests, and billing inquiries for law firms, accounting, and consulting practices.",
    results: "3x more qualified leads captured"
  },
  {
    title: "Home Services & Contractors",
    description: "Schedule service calls, provide quotes, dispatch technicians, and handle emergency requests for HVAC, plumbing, electrical, and repair businesses.",
    results: "60% faster response time"
  },
  {
    title: "Retail & E-commerce",
    description: "Answer product questions, check inventory, process orders, handle returns, and provide store hours and directions.",
    results: "40% higher conversion rate"
  }
]

export default function AIVirtualReceptionist() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50 py-20 md:py-32">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-full px-5 py-2 mb-8 border-2 border-orange-300 shadow-lg">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">AI-Powered Reception</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  AI Virtual Receptionist
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                    That Never Sleeps or Takes Breaks
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-pink-200/30 to-purple-200/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
                Your <span className="font-bold text-orange-600">AI-powered virtual receptionist</span> answers every call, books appointments, and routes calls with human-like conversations—24/7, in over 30 languages.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Hire Your AI Receptionist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    See Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Instant Call Answering</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">70% Cost Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Everything Your Front Desk Needs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive reception capabilities powered by advanced AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-blue-200 hover:border-purple-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Transform Your Reception Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that impact your bottom line
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group bg-white border-2 border-purple-200 hover:border-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored virtual receptionist capabilities for your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-blue-200 hover:border-purple-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold border-2 border-green-200">
                    <Check className="h-4 w-4 mr-2" />
                    {useCase.results}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Conversation Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-full px-5 py-2.5 mb-6 border-2 border-orange-300 shadow-lg">
                <Mic className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">AI Voice Demonstration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Experience Natural AI Conversations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Listen to how our AI receptionist handles real customer interactions with human-like responses
              </p>
            </div>

            {/* Audio Player Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                {/* Waveform visualization area */}
                <div className="flex items-center justify-center mb-6 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 relative overflow-hidden">
                  {isPlaying ? (
                    <div className="flex items-end justify-center gap-1.5 h-16">
                      {[...Array(40)].map((_, i) => {
                        const height = Math.sin(i * 0.5) * 20 + 25;
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-orange-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300"
                            style={{
                              height: `${height}px`,
                              animation: `sound-wave ${0.5 + (i % 3) * 0.2}s ease-in-out infinite`,
                              animationDelay: `${i * 0.05}s`
                            }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 h-16">
                      {[...Array(40)].map((_, i) => {
                        const height = Math.sin(i * 0.5) * 15 + 15;
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100 rounded-full"
                            style={{
                              height: `${height}px`
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Play/Pause Control */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="group relative flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                      <span className="font-semibold">
                        {isPlaying ? "Pause Conversation" : "Play Sample Conversation"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <audio
                ref={audioRef}
                src="/sample-conversation.mp3"
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </div>

          {/* CSS for waveform animation */}
          <style jsx>{`
            @keyframes sound-wave {
              0%, 100% { transform: scaleY(0.5); }
              50% { transform: scaleY(1); }
            }
          `}</style>
        </section>

        {/* FAQ Section - Dark Theme */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-6">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about AI virtual receptionists
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
                      How does an AI virtual receptionist work?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our AI receptionist uses advanced natural language processing to answer calls, understand caller intent, and respond naturally. It integrates with your calendar, CRM, and phone system to book appointments, route calls, take messages, and provide information—all in real-time, 24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text">
                      Can it handle multiple calls simultaneously?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Yes! Unlike human receptionists, our AI can handle unlimited simultaneous calls without putting anyone on hold. Whether you receive 1 call or 100 at the same time, every caller gets instant, personalized attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
                      What happens if the AI can't answer a question?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      The AI is trained on your specific business information and policies. For complex scenarios, it can seamlessly transfer calls to the appropriate human team member, take detailed messages, or schedule callbacks—ensuring no caller is left without help.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-green-300 text-transparent bg-clip-text">
                      How long does setup take?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Most businesses are live within 3-5 business days. We handle phone number setup, calendar integration, script customization, and testing. Our team provides hands-on support to ensure your AI receptionist is trained on your specific business needs before going live.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">
                      Is it HIPAA compliant for healthcare practices?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Yes! We offer HIPAA-compliant solutions for medical practices, including encrypted call recordings, secure data storage, and proper business associate agreements. Our AI follows all healthcare privacy regulations while scheduling appointments and handling patient information.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      6
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 to-pink-300 text-transparent bg-clip-text">
                      What's the cost compared to hiring a receptionist?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our AI receptionist typically costs 70-80% less than hiring a full-time employee, with no benefits, sick days, or turnover. You get 24/7 coverage, unlimited call handling, and enterprise features for a fraction of traditional reception costs—with transparent monthly pricing and no long-term contracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-full px-6 py-2.5 mb-8 border-2 border-orange-300 shadow-lg">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Never Miss Another Call</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Ready to Hire Your
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                    AI Receptionist?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-pink-200/30 to-purple-200/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                Join hundreds of businesses providing 24/7 phone coverage, perfect call handling, and exceptional customer experiences—all while reducing costs by 70%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Setup in 3-5 Days</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
