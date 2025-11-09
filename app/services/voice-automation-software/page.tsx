"use client"

import { Header } from "@/components/header"`nimport { PageBackground } from "@/components/page-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, Bot, Zap, Clock, Shield, Users, TrendingUp, Phone, BarChart3, Headphones, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const features = [
  {
    icon: Bot,
    title: "Intelligent Voice Automation",
    description: "Advanced AI-powered voice automation software that understands natural language and provides human-like responses for seamless customer interactions.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-400 via-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Instant Response Times",
    description: "Lightning-fast voice automation software delivers responses in under 750ms, ensuring smooth conversations without awkward pauses or delays.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-400 to-orange-500",
    glow: "from-orange-400 via-orange-500 to-orange-600"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Voice automation software that never sleeps, handling unlimited customer calls simultaneously around the clock without human intervention.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-400 to-orange-500",
    glow: "from-orange-400 via-orange-500 to-orange-400"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR standards ensuring your voice automation software protects sensitive customer data.",
    borderColor: "border-teal-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-500 via-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Unlimited Scalability",
    description: "Voice automation software that scales effortlessly from 10 to 10,000 concurrent conversations, growing with your business needs.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-500 to-orange-500",
    glow: "from-orange-400 via-orange-400 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards provide actionable insights on every conversation, helping optimize your voice automation software performance.",
    borderColor: "border-indigo-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-500 via-orange-500 to-orange-600"
  },
]

const benefits = [
  {
    icon: Clock,
    stat: "24/7",
    title: "Always Available",
    description: "Never miss a customer call"
  },
  {
    icon: Users,
    stat: "∞",
    title: "Unlimited Calls",
    description: "Handle thousands simultaneously"
  },
  {
    icon: TrendingUp,
    stat: "400%",
    title: "Productivity Boost",
    description: "Automate routine tasks"
  },
  {
    icon: Zap,
    stat: "<1s",
    title: "Instant Response",
    description: "Lightning-fast interactions"
  },
]

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

export default function VoiceAutomation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)

  const playConversation = () => {
    if (isPlaying) {
      setIsPlaying(false)
      setCurrentMessage(0)
      return
    }

    setIsPlaying(true)
    let messageIndex = 0
    const interval = setInterval(() => {
      if (messageIndex < sampleConversation.length) {
        setCurrentMessage(messageIndex + 1)
        messageIndex++
      } else {
        clearInterval(interval)
        setIsPlaying(false)
        setCurrentMessage(0)
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-900 to-orange-100 py-20 md:py-32">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-700" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full px-6 py-2.5 mb-8 border-2 border-orange-300 shadow-lg">
                <Mic className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Enterprise Voice Automation Software</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Automate Every Voice
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Interaction with AI
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with intelligent <strong>voice automation software</strong> that handles calls, 
                schedules appointments, qualifies leads, and provides instant support 24/7 without human intervention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Request Demo
                  </Link>
                </Button>
              </div>

              <div className="inline-flex flex-col gap-4 bg-black/80 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span>99.9% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span>GDPR & HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-700">
                    <Zap className="w-5 h-5 text-orange-600" />
                    <span>&lt;750ms Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                Why Choose Our Voice Automation Software
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The most advanced voice automation software platform built for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 border-2 ${feature.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.glow} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audio Conversation Demo */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background with gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-orange-100/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-100/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-5 py-2 rounded-full text-sm backdrop-blur-sm border-2 border-orange-300 shadow-lg mb-6">
                <Mic className="h-4 w-4 animate-pulse" />
                <span className="font-semibold">AI Voice Demonstration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent drop-shadow-lg mb-4">
                Experience Natural AI Conversations
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Listen to how our voice automation software handles real customer interactions with intelligence and empathy
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-orange-400">
              <div className="space-y-4 mb-8">
                {sampleConversation.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl ${
                      msg.speaker === "Customer" 
                        ? "bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-400" 
                        : "bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200"
                    } ${
                      currentMessage >= idx + 1 ? "opacity-100 animate-fade-in" : "opacity-30"
                    }`}
                  >
                    <p className="text-sm font-semibold text-white mb-1">{msg.speaker}</p>
                    <p className="text-gray-300">{msg.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={playConversation}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {isPlaying ? "Pause" : "Play"} Conversation
                  </span>
                </button>
              </div>

              {/* Visual Waveform */}
              {isPlaying && (
                <div className="mt-6 flex items-center justify-center gap-1 h-16">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const heights = [25, 45, 35, 55, 30, 50, 40, 60, 28, 48, 38, 58, 32, 52, 42, 62, 26, 46, 36, 56, 34, 54, 44, 64, 29, 49, 39, 59, 31, 51, 41, 61, 27, 47, 37, 57, 33, 53, 43, 63];
                    return (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-orange-500 via-orange-600 to-orange-700 rounded-full animate-waveform"
                        style={{
                          height: `${heights[i]}px`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section - Dark Theme */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-radial from-orange-400/15 to-transparent rounded-full blur-3xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-6">
                <Headphones className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
                Voice Automation Software FAQ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about implementing voice automation software
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-6">
              {[
                {
                  q: "What is voice automation software?",
                  a: "Voice automation software uses advanced AI to automate phone conversations, handle customer inquiries, schedule appointments, qualify leads, and perform other voice-based tasks without human intervention. Our platform provides natural-sounding conversations with <750ms response times."
                },
                {
                  q: "How does voice automation software integrate with existing systems?",
                  a: "Our voice automation software offers pre-built integrations with major CRM platforms (Salesforce, HubSpot), scheduling tools (Calendly, Google Calendar), ticketing systems (Zendesk, Freshdesk), and custom API connections. Implementation typically takes 2-5 business days with our technical team's support."
                },
                {
                  q: "Can voice automation software handle multiple languages?",
                  a: "Yes, our voice automation software supports 30+ languages including English, Spanish, French, German, Mandarin, Japanese, and more. The AI automatically detects the caller's language and responds accordingly, with native-level pronunciation and cultural awareness."
                },
                {
                  q: "What is the accuracy rate of voice automation software?",
                  a: "Our voice automation software achieves 95%+ accuracy in speech recognition and intent classification. The AI continuously learns from interactions, improving performance over time. For complex queries beyond its capability, it seamlessly transfers to human agents with full context."
                },
                {
                  q: "How secure is voice automation software for handling sensitive data?",
                  a: "Our voice automation software is SOC 2 Type II certified, GDPR compliant, and HIPAA-ready. All voice data is encrypted in transit (TLS 1.3) and at rest (AES-256). We provide audit logs, role-based access control, and comply with industry-specific regulations for healthcare, finance, and government sectors."
                },
                {
                  q: "What ROI can I expect from voice automation software?",
                  a: "Businesses using our voice automation software typically see 60-80% reduction in call handling costs, 24/7 availability increasing conversion rates by 35-50%, and staff redeployment to high-value tasks. Most clients achieve positive ROI within 3-6 months, with payback accelerating as call volumes scale."
                },
                {
                  q: "How customizable is the voice automation software?",
                  a: "Highly customizable. You can configure conversation flows, brand voice personality, hold music, transfer rules, working hours, and custom responses. Advanced users can build conditional logic, integrate webhooks for real-time data, and create industry-specific workflows without coding."
                },
                {
                  q: "What happens if the voice automation software doesn't understand a caller?",
                  a: "Our voice automation software has multiple fallback mechanisms: (1) clarifying questions, (2) offering menu options, (3) seamless transfer to human agents with full conversation context. The system logs unclear interactions to improve AI training, continuously reducing escalation rates."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text">
                        {faq.q}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-900 to-orange-100">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full px-6 py-2.5 mb-8 border-2 border-orange-300 shadow-lg">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-semibold">Start Your Voice Automation Journey</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Ready to Automate Your
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Voice Communications?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join thousands of businesses using our voice automation software to deliver exceptional customer experiences while reducing costs by up to 80%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Talk to Sales
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-200">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">24/7 Support</span>
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





