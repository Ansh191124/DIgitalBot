"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Brain, Mic, BarChart3, Shield, Workflow, ArrowRight, Play, Pause, Phone, MessageSquare, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced NLP and machine learning for accurate voice understanding and response generation.",
  },
  {
    icon: Mic,
    title: "Natural Voice Interaction",
    description: "Crystal-clear voice synthesis that sounds human and engages customers effectively.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Design conversation flows tailored to your specific business processes and needs.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance metrics and gain insights from every voice interaction.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry security standards.",
  },
  {
    icon: Bot,
    title: "Omnichannel Integration",
    description: "Seamlessly integrate voice bots across phone, web, mobile, and messaging platforms.",
  },
]

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

// Pre-calculated stable waveform heights to prevent hydration issues
const WAVEFORM_HEIGHTS = Array.from({ length: 40 }, (_, i) => Math.sin(i * 0.5))

export default function AIVoiceBot() {
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

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DigitalBot.ai AI Voice Bot",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial available"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1250"
        },
        "description": "AI voice bot platform for automated customer service with natural language processing and 24/7 availability",
        "url": "https://www.digitalbot.ai/services/ai-voice-bot",
        "publisher": {
          "@type": "Organization",
          "name": "DigitalBot.ai"
        },
        "featureList": [
          "Natural Language Processing",
          "24/7 Automated Voice Assistance",
          "Multi-language Support",
          "Real-time Analytics",
          "Enterprise Security",
          "Omnichannel Integration"
        ]
      },
      {
        "@type": "Product",
        "name": "AI Voice Bot Solution",
        "description": "Intelligent voice automation platform for business customer service and support",
        "brand": {
          "@type": "Brand",
          "name": "DigitalBot.ai"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "0",
          "highPrice": "999",
          "offerCount": "3"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an AI voice bot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI voice bot is an intelligent automated system that uses natural language processing and machine learning to engage in voice conversations with customers, handling inquiries, providing information, and automating customer service tasks 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI voice bot improve customer service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI voice bots improve customer service by providing instant responses 24/7, handling multiple conversations simultaneously, reducing wait times, maintaining consistent service quality, and freeing human agents to handle complex issues."
            }
          },
          {
            "@type": "Question",
            "name": "Can AI voice bots understand different languages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, modern AI voice bots support multiple languages and can automatically detect and respond in the customer's preferred language, making them ideal for global businesses."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.digitalbot.ai"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.digitalbot.ai/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Voice Bot",
            "item": "https://www.digitalbot.ai/services/ai-voice-bot"
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-white text-gray-900" role="main">
        <Header />

        {/* Hero Section - SEO Optimized with Homepage Theme */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50" aria-labelledby="hero-heading">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-orange-600" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/services" className="hover:text-orange-600" itemProp="item">
                    <span itemProp="name">Services</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-orange-700 font-semibold">AI Voice Bot</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                🤖 AI Voice Bot
              </span>
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Voice Bot Solutions for
              </span>
              <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-2xl text-2xl sm:text-3xl lg:text-4xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
                <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
                <span className="relative z-10">Automated Customer Service</span>
              </span>
            </h1>

            <div className="max-w-4xl mx-auto mb-8 p-6 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                Deploy <strong className="text-orange-600">intelligent voice bots</strong> powered by advanced <strong className="text-purple-600">natural language processing</strong> that automate customer interactions with <strong>human-like conversations 24/7</strong>
              </p>
            </div>
            
            {/* Key Benefits - SEO Rich Content with Homepage Theme */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
              <div className="bg-white backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-orange-400 transition-transform duration-500 hover:scale-105 hover:shadow-orange-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <Clock className="h-10 w-10 text-orange-600 mx-auto mb-3 relative z-10" />
                <p className="font-extrabold text-gray-900 mb-1 relative z-10">24/7 Availability</p>
                <p className="text-sm text-gray-600 relative z-10">Never miss a call</p>
              </div>
              <div className="bg-white backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-blue-400 transition-transform duration-500 hover:scale-105 hover:shadow-blue-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-400 via-cyan-400 to-teal-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3 relative z-10" />
                <p className="font-extrabold text-gray-900 mb-1 relative z-10">Unlimited Scale</p>
                <p className="text-sm text-gray-600 relative z-10">Handle 1000s of calls</p>
              </div>
              <div className="bg-white backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-purple-400 transition-transform duration-500 hover:scale-105 hover:shadow-purple-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-400 via-pink-400 to-orange-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <MessageSquare className="h-10 w-10 text-purple-600 mx-auto mb-3 relative z-10" />
                <p className="font-extrabold text-gray-900 mb-1 relative z-10">Natural Speech</p>
                <p className="text-sm text-gray-600 relative z-10">Human-like voice</p>
              </div>
              <div className="bg-white backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-pink-400 transition-transform duration-500 hover:scale-105 hover:shadow-pink-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-400 via-orange-400 to-purple-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <Phone className="h-10 w-10 text-pink-600 mx-auto mb-3 relative z-10" />
                <p className="font-extrabold text-gray-900 mb-1 relative z-10">Instant Setup</p>
                <p className="text-sm text-gray-600 relative z-10">Deploy in minutes</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 text-white shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300" asChild>
                <Link href="/signup">Try Voice Bot Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl" asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - SEO Optimized with Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50" aria-labelledby="features-heading">
          <div className="container mx-auto">
            <header className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                  ⚡ Advanced Features
                </span>
              </div>
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Advanced AI Voice Bot Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade <strong>voice automation features</strong> powered by cutting-edge <strong>artificial intelligence</strong> and <strong>natural language understanding</strong>
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const colors = [
                  { gradient: 'from-orange-500 to-pink-600', border: 'border-orange-300', hover: 'hover:border-orange-500', shadow: 'hover:shadow-orange-200' },
                  { gradient: 'from-blue-500 to-purple-600', border: 'border-blue-300', hover: 'hover:border-blue-500', shadow: 'hover:shadow-blue-200' },
                  { gradient: 'from-purple-500 to-pink-600', border: 'border-purple-300', hover: 'hover:border-purple-500', shadow: 'hover:shadow-purple-200' },
                  { gradient: 'from-pink-500 to-orange-600', border: 'border-pink-300', hover: 'hover:border-pink-500', shadow: 'hover:shadow-pink-200' },
                  { gradient: 'from-teal-500 to-blue-600', border: 'border-teal-300', hover: 'hover:border-teal-500', shadow: 'hover:shadow-teal-200' },
                  { gradient: 'from-indigo-500 to-purple-600', border: 'border-indigo-300', hover: 'hover:border-indigo-500', shadow: 'hover:shadow-indigo-200' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <article key={index} className={`${color.border} ${color.hover} transition-all duration-300 hover:shadow-2xl ${color.shadow} bg-white rounded-2xl border-2 p-6 hover:scale-105 relative overflow-hidden group`}>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-300/20 via-pink-300/20 to-purple-300/20 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all relative z-10`}>
                      <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

      {/* Sample Conversation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background with gradient orbs - matching hero section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-sky-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-sky-100/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-sm border border-sky-200/60 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-sky-500 animate-pulse" />
              <span className="font-medium">AI Voice Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Experience Natural AI Conversations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to how our AI voice bot handles real customer interactions with human-like responses
            </p>
          </div>

          {/* Audio Player Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-sky-200/50 relative overflow-hidden">
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-sky-50/20 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Waveform visualization area */}
              <div className="flex items-center justify-center mb-6 h-24 bg-linear-to-br from-sky-50 to-blue-50/30 rounded-2xl border border-sky-100/50 relative overflow-hidden">
                {isPlaying ? (
                  <div className="flex items-end justify-center gap-1.5 h-16">
                    {WAVEFORM_HEIGHTS.map((sinValue, i) => {
                      const height = sinValue * 20 + 25;
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-linear-to-t from-sky-600 via-sky-500 to-sky-400 rounded-full transition-all duration-300"
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
                    {WAVEFORM_HEIGHTS.map((sinValue, i) => {
                      const height = sinValue * 15 + 15;
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-linear-to-t from-sky-300/40 via-sky-200/40 to-sky-100/40 rounded-full"
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
                  className="group relative flex items-center gap-3 px-8 py-3 bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
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

        {/* FAQ Section for SEO with Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50" aria-labelledby="faq-heading">
          <div className="container mx-auto max-w-4xl">
            <header className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                  ❓ FAQ
                </span>
              </div>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions About AI Voice Bots
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about implementing AI voice automation
              </p>
            </header>
            
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  question: "What is an AI voice bot and how does it work?",
                  answer: "An AI voice bot is an intelligent automated system that uses natural language processing (NLP) and machine learning to engage in voice conversations with customers. It understands spoken language, processes inquiries, and responds with human-like voice synthesis, handling customer service tasks automatically 24/7 without human intervention.",
                  color: { border: 'border-orange-300', hover: 'hover:border-orange-500', shadow: 'hover:shadow-orange-200', icon: 'from-orange-500 to-pink-500' }
                },
                {
                  question: "How does AI voice bot improve customer service?",
                  answer: "AI voice bots improve customer service by providing instant responses 24/7, handling multiple conversations simultaneously, reducing wait times to zero, maintaining consistent service quality, and freeing human agents to handle complex issues. This results in higher customer satisfaction, reduced operational costs, and increased efficiency.",
                  color: { border: 'border-blue-300', hover: 'hover:border-blue-500', shadow: 'hover:shadow-blue-200', icon: 'from-blue-500 to-purple-500' }
                },
                {
                  question: "Can AI voice bots understand different languages and accents?",
                  answer: "Yes, modern AI voice bots support multiple languages and can automatically detect and respond in the customer's preferred language. Advanced NLP models are trained on diverse accents and dialects, ensuring accurate understanding across different regions and demographics, making them ideal for global businesses.",
                  color: { border: 'border-purple-300', hover: 'hover:border-purple-500', shadow: 'hover:shadow-purple-200', icon: 'from-purple-500 to-pink-500' }
                },
                {
                  question: "How quickly can I deploy an AI voice bot for my business?",
                  answer: "With DigitalBot.ai, you can deploy a fully functional AI voice bot in minutes. Our platform offers pre-configured templates, zero-code integration, and intuitive customization tools. Most businesses go live within 24 hours, compared to traditional development cycles that take weeks or months.",
                  color: { border: 'border-pink-300', hover: 'hover:border-pink-500', shadow: 'hover:shadow-pink-200', icon: 'from-pink-500 to-orange-500' }
                },
                {
                  question: "Is my customer data secure with AI voice bots?",
                  answer: "Absolutely. Our AI voice bots employ enterprise-grade security including end-to-end encryption, SOC 2 compliance, GDPR compliance, and regular security audits. All voice data is encrypted in transit and at rest, with strict access controls and data retention policies to protect your customer information.",
                  color: { border: 'border-teal-300', hover: 'hover:border-teal-500', shadow: 'hover:shadow-teal-200', icon: 'from-teal-500 to-blue-500' }
                },
                {
                  question: "What industries benefit most from AI voice bots?",
                  answer: "AI voice bots benefit virtually all industries including e-commerce, healthcare, banking, insurance, real estate, hospitality, telecommunications, and retail. Any business that receives customer calls, handles inquiries, or provides support can leverage voice automation to improve efficiency and customer experience.",
                  color: { border: 'border-indigo-300', hover: 'hover:border-indigo-500', shadow: 'hover:shadow-indigo-200', icon: 'from-indigo-500 to-purple-500' }
                }
              ].map((faq, index) => (
                <article key={index} className={`bg-white rounded-2xl p-6 shadow-2xl border-2 ${faq.color.border} ${faq.color.hover} ${faq.color.shadow} hover:shadow-2xl transition-all duration-300 hover:scale-102 group`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${faq.color.icon} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600 leading-relaxed" itemProp="text">
                          {faq.answer.split('AI voice bot').map((part, i, arr) => (
                            i < arr.length - 1 ? (
                              <span key={i}>{part}<strong>AI voice bot</strong></span>
                            ) : part
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - SEO Optimized with Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50" aria-labelledby="cta-heading">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                🚀 Get Started
              </span>
            </div>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="block mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Start Automating Customer Service
              </span>
              <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-2xl border-2 border-orange-300 animate-gradient">
                with AI Voice Bots Today
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Build, deploy, and scale <strong>AI voice bots</strong> in minutes, not months. <strong>Free trial available</strong> with no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 text-white shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300" asChild>
                <Link href="/signup">Get Started Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl" asChild>
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
            
            {/* Trust Signals with Homepage Theme */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg border-2 border-orange-200 hover:scale-105 transition-all">
                <Shield className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-gray-700">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-all">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg border-2 border-purple-200 hover:scale-105 transition-all">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="font-bold text-gray-700">1000+ Businesses</span>
              </div>
            </div>
          </div>
        </section>

      <Footer />
      </main>
    </>
  )
}
