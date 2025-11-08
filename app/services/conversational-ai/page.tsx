"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, Bot, Zap, Clock, Shield, Users, TrendingUp, MessageCircle, BarChart3, Headphones, CheckCircle, ArrowRight, Globe, Sparkles, Brain } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const features = [
  {
    icon: Brain,
    title: "Natural Language Understanding",
    description: "Advanced NLU engine that comprehends context, intent, and sentiment across multiple languages, delivering human-like conversational AI experiences.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-400 via-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast conversational AI responds in under 750ms, maintaining natural conversation flow without awkward delays or interruptions.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-400 to-orange-500",
    glow: "from-orange-400 via-orange-500 to-orange-600"
  },
  {
    icon: MessageCircle,
    title: "Multi-Turn Conversations",
    description: "Conversational AI maintains context across multiple exchanges, remembering previous interactions to provide coherent, relevant responses.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-400 to-orange-500",
    glow: "from-orange-400 via-orange-500 to-orange-400"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Conversational AI platform supporting 30+ languages with native-level pronunciation, cultural awareness, and automatic language detection.",
    borderColor: "border-teal-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-500 via-orange-500 to-orange-600"
  },
  {
    icon: Sparkles,
    title: "Emotion Recognition",
    description: "Advanced conversational AI detects customer emotions through voice tone and word choice, adapting responses for empathetic interactions.",
    borderColor: "border-orange-400",
    iconBg: "from-orange-500 to-orange-500",
    glow: "from-orange-400 via-orange-400 to-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and GDPR-ready conversational AI infrastructure protecting every customer interaction.",
    borderColor: "border-indigo-400",
    iconBg: "from-orange-500 to-orange-600",
    glow: "from-orange-500 via-orange-500 to-orange-600"
  },
]

const useCases = [
  {
    icon: Users,
    title: "Customer Service Automation",
    description: "Deploy conversational AI to handle customer inquiries, resolve issues, and provide 24/7 support across all channels simultaneously.",
    metric: "80% ticket reduction"
  },
  {
    icon: TrendingUp,
    title: "Sales Qualification",
    description: "Use conversational AI to engage leads, qualify prospects, schedule demos, and nurture opportunities through intelligent conversations.",
    metric: "3x more qualified leads"
  },
  {
    icon: Clock,
    title: "Appointment Scheduling",
    description: "Conversational AI seamlessly manages calendars, books appointments, sends reminders, and handles rescheduling requests automatically.",
    metric: "95% booking accuracy"
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Gather customer feedback, conduct surveys, and analyze sentiment using conversational AI that adapts questions based on responses.",
    metric: "10x survey completion"
  },
]

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

export default function ConversationalAI() {
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
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Advanced Conversational AI</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Build Human-Like
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Conversational Experiences
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform customer interactions with <strong>conversational AI</strong> that understands context, emotion, and intent. 
                Deliver natural, intelligent conversations across voice, chat, and messaging channels 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Start Building
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8">
                  <Link href="/contact">
                    <Mic className="mr-2 w-5 h-5" />
                    See Demo
                  </Link>
                </Button>
              </div>

              <div className="inline-flex flex-col gap-4 bg-black/80 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span>30+ Languages Supported</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span>95%+ Accuracy Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span>Context-Aware AI</span>
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

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                Why Choose Our Conversational AI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The most advanced conversational AI platform for modern businesses
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

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                Conversational AI Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform every customer interaction with intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-black border-2 border-orange-400 hover:border-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300">
                        {useCase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold border-2 border-green-200">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {useCase.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
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
                <span className="font-semibold">Live Conversational AI Demo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent drop-shadow-lg mb-4">
                Experience Natural AI Conversations
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Listen to how our conversational AI handles real customer interactions with human-like intelligence
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
                Conversational AI FAQ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about implementing conversational AI
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-6">
              {[
                {
                  q: "What is conversational AI?",
                  a: "Conversational AI is advanced technology that enables machines to understand, process, and respond to human language in natural, contextual ways. It combines natural language processing, machine learning, and speech recognition to create human-like interactions across voice and text channels."
                },
                {
                  q: "How does conversational AI differ from chatbots?",
                  a: "Traditional chatbots follow pre-programmed rules and scripts, while conversational AI uses machine learning to understand context, intent, and emotion. Our conversational AI learns from interactions, maintains conversation context, and adapts responses based on user sentiment and previous exchanges."
                },
                {
                  q: "Can conversational AI handle multiple languages?",
                  a: "Yes, our conversational AI platform supports 30+ languages including English, Spanish, French, German, Mandarin, Japanese, and more. The system automatically detects the speaker's language and responds with native-level pronunciation and cultural awareness."
                },
                {
                  q: "What accuracy rate can I expect from conversational AI?",
                  a: "Our conversational AI achieves 95%+ accuracy in intent recognition and speech-to-text conversion. The system continuously learns from interactions, improving performance over time. For complex queries, it seamlessly escalates to human agents with full conversation context."
                },
                {
                  q: "How secure is conversational AI for handling customer data?",
                  a: "Our conversational AI is SOC 2 Type II certified, GDPR compliant, and HIPAA-ready. All conversations are encrypted in transit (TLS 1.3) and at rest (AES-256). We provide comprehensive audit logs, role-based access control, and comply with industry-specific regulations."
                },
                {
                  q: "Can conversational AI integrate with existing systems?",
                  a: "Yes, our conversational AI offers pre-built integrations with major CRM platforms (Salesforce, HubSpot), customer service tools (Zendesk, Intercom), scheduling systems (Calendly, Google Calendar), and custom API connections. Implementation typically takes 2-5 business days."
                },
                {
                  q: "How does conversational AI maintain context in conversations?",
                  a: "Our conversational AI uses advanced memory systems to track conversation history, user preferences, and previous interactions. It references past context to provide coherent, relevant responses across multiple conversation turns, creating natural, flowing dialogues."
                },
                {
                  q: "What ROI can I expect from conversational AI?",
                  a: "Businesses using our conversational AI typically see 60-80% reduction in support costs, 24/7 availability increasing customer satisfaction by 35%, and 50% faster response times. Most clients achieve positive ROI within 3-6 months as the system handles increasing conversation volumes."
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
                <span className="text-sm font-semibold">Start Building Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Ready to Transform
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Your Conversations?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join thousands of businesses using conversational AI to deliver exceptional customer experiences while reducing costs by up to 80%.
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
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Talk to Expert
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
                  <span className="text-sm font-medium text-gray-300">Expert Support</span>
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




