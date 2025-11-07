"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Bot, Brain, Mic, BarChart3, Shield, Workflow, ArrowRight, Play, Pause, Phone, MessageSquare, Clock, Users, Zap, Globe, Headphones, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import Image from "next/image"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Powered by cutting-edge natural language processing and deep learning algorithms for accurate voice understanding and human-like responses.",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-400",
    gradientFrom: "bg-gradient-to-br from-orange-400",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    icon: Mic,
    title: "Natural Voice Synthesis",
    description: "Crystal-clear, human-like voice output with emotion detection and contextual tone adjustment for authentic conversations.",
    color: "from-orange-400 to-orange-500",
    borderColor: "border-orange-400",
    gradientFrom: "bg-gradient-to-br from-orange-400",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    icon: Workflow,
    title: "Custom Conversation Flows",
    description: "Design tailored dialogue paths for your specific business needs with our intuitive no-code conversation builder.",
    color: "from-orange-400 to-orange-500",
    borderColor: "border-orange-400",
    gradientFrom: "bg-gradient-to-br from-orange-400",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Comprehensive insights into every conversation with detailed metrics, sentiment analysis, and performance tracking.",
    color: "from-orange-500 to-orange-500",
    borderColor: "border-orange-400",
    gradientFrom: "bg-gradient-to-br from-orange-400",
    gradientTo: "to-orange-400",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, GDPR ready with end-to-end data protection and privacy controls.",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-teal-400",
    gradientFrom: "bg-gradient-to-br from-orange-500",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-teal-100 to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    icon: Bot,
    title: "Omnichannel Integration",
    description: "Seamlessly deploy across phone systems, web chat, mobile apps, WhatsApp, SMS, and messaging platforms.",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-indigo-400",
    gradientFrom: "bg-gradient-to-br from-orange-500",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    iconColor: "text-indigo-600"
  },
]

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    stat: "100%",
    description: "Never miss a customer call, day or night"
  },
  {
    icon: Users,
    title: "Unlimited Scalability",
    stat: "∞",
    description: "Handle thousands of calls simultaneously"
  },
  {
    icon: TrendingUp,
    title: "Cost Reduction",
    stat: "70%",
    description: "Lower operational costs vs human agents"
  },
  {
    icon: Zap,
    title: "Instant Response",
    stat: "<1s",
    description: "Lightning-fast AI-powered responses"
  },
]

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Handle FAQs, troubleshooting, and support tickets automatically with AI voice bots that understand context and provide accurate solutions.",
    icon: Headphones
  },
  {
    title: "Appointment Scheduling",
    description: "Automate booking, rescheduling, and reminders for appointments across healthcare, salons, and service businesses.",
    icon: Phone
  },
  {
    title: "Lead Qualification",
    description: "Engage prospects, qualify leads, and route high-value opportunities to your sales team automatically.",
    icon: TrendingUp
  },
  {
    title: "Order Status & Tracking",
    description: "Provide instant updates on orders, deliveries, and shipments without human intervention.",
    icon: Globe
  },
]

const faqs = [
  {
    question: "What is an AI Voice Bot?",
    answer: "An AI Voice Bot is an advanced artificial intelligence system that uses natural language processing (NLP) and machine learning to conduct voice conversations with customers. It can understand spoken language, interpret intent, process requests, and respond with human-like voice synthesis - all automatically and 24/7. AI Voice Bots handle customer service, sales, support, and information queries without human intervention, providing instant responses while learning and improving from every interaction."
  },
  {
    question: "How does an AI Voice Bot work?",
    answer: "AI Voice Bots work through several sophisticated technologies: (1) Speech Recognition converts spoken words into text using advanced algorithms. (2) Natural Language Processing (NLP) analyzes the text to understand intent, context, and meaning. (3) AI Decision Engine processes the request and determines the appropriate response based on trained data and business logic. (4) Voice Synthesis converts the response text back into natural-sounding speech. (5) Continuous Learning improves accuracy over time by analyzing conversation patterns and outcomes."
  },
  {
    question: "What are the benefits of using AI Voice Bot for my business?",
    answer: "AI Voice Bots deliver multiple business benefits: (1) 24/7 Availability - Handle calls anytime without human agents. (2) Cost Reduction - Save up to 70% on customer service costs. (3) Unlimited Scalability - Manage thousands of simultaneous calls without wait times. (4) Consistent Service Quality - Provide uniform, error-free responses every time. (5) Faster Response Times - Instant answers within 1 second. (6) Data-Driven Insights - Analytics on every conversation for continuous improvement. (7) Multilingual Support - Communicate in multiple languages automatically."
  },
  {
    question: "Can AI Voice Bot understand different accents and languages?",
    answer: "Yes, modern AI Voice Bots are trained on diverse datasets including multiple accents, dialects, and languages. Our AI Voice Bot supports 50+ languages and automatically detects the caller's language, adapting in real-time. The advanced NLP models recognize regional accents (American, British, Australian, Indian English, etc.) and colloquial expressions. The system continuously learns from interactions to improve accuracy across different speech patterns, making it ideal for global businesses serving diverse customer bases."
  },
  {
    question: "How quickly can I deploy an AI Voice Bot?",
    answer: "With DigitalBot.ai, you can deploy a fully functional AI Voice Bot in as little as 5-10 minutes. Our platform offers: (1) Pre-built Templates for common use cases (customer support, appointment booking, lead qualification). (2) No-Code Builder - Design conversation flows visually without programming. (3) One-Click Integration with existing phone systems, CRM, and business tools. (4) Instant Testing & Preview before going live. Most businesses are operational within 24 hours, compared to traditional development that takes weeks or months."
  },
  {
    question: "Is my customer data secure with AI Voice Bot?",
    answer: "Absolutely. Security is our top priority. Our AI Voice Bot employs: (1) End-to-End Encryption - All voice data encrypted in transit and at rest using AES-256. (2) SOC 2 Type II Compliance - Regular third-party security audits. (3) GDPR & CCPA Compliant - Full data privacy compliance for global regulations. (4) Role-Based Access Controls - Granular permissions for team members. (5) Data Retention Policies - Automatic deletion per your requirements. (6) Regular Security Updates - Continuous monitoring and threat protection. Your customer conversations and data are protected with bank-level security."
  },
  {
    question: "What industries can benefit from AI Voice Bot?",
    answer: "AI Voice Bots deliver value across virtually all industries: (1) Healthcare - Appointment scheduling, prescription refills, patient support. (2) E-commerce - Order tracking, product inquiries, returns processing. (3) Banking & Finance - Account inquiries, transaction support, fraud alerts. (4) Real Estate - Property inquiries, showing scheduling, lead qualification. (5) Hospitality - Reservations, concierge services, guest support. (6) Telecommunications - Technical support, billing inquiries, service upgrades. (7) Insurance - Claims processing, policy information, quote requests. (8) Education - Admissions, course information, student support. Any business receiving customer calls can leverage AI Voice Bots."
  },
  {
    question: "Can AI Voice Bot integrate with my existing systems?",
    answer: "Yes, our AI Voice Bot offers seamless integration with popular business tools: (1) CRM Systems - Salesforce, HubSpot, Zoho, Pipedrive. (2) Help Desk - Zendesk, Freshdesk, Intercom, Help Scout. (3) Phone Systems - Twilio, RingCentral, 8x8, Vonage. (4) Calendars - Google Calendar, Outlook, Calendly. (5) E-commerce - Shopify, WooCommerce, Magento. (6) Custom APIs - RESTful API access for proprietary systems. (7) Databases - MySQL, PostgreSQL, MongoDB. Integration typically takes minutes using our pre-built connectors or custom webhooks."
  },
  {
    question: "How much does AI Voice Bot cost?",
    answer: "AI Voice Bot pricing is flexible and scales with your needs. Plans start at $55/month for 300 AI voice minutes (ideal for small businesses), $145/month for 1000 minutes (growing businesses), with custom enterprise packages for high-volume needs. All plans include: unlimited voice channels, 24/7 support, real-time analytics, CRM integration, and free trial period. No setup fees, no hidden costs, and you only pay for actual voice minutes used. Contact us for a custom quote based on your specific requirements and volume."
  },
  {
    question: "What makes DigitalBot.ai's AI Voice Bot different from competitors?",
    answer: "Our AI Voice Bot stands out through: (1) Superior Accuracy - 95%+ intent recognition vs industry average of 80%. (2) Human-Like Voice - Most natural-sounding synthesis with emotion and tone. (3) Fastest Deployment - Live in minutes, not weeks. (4) No-Code Platform - Anyone can build flows without technical skills. (5) Advanced Analytics - Deep insights into every conversation. (6) Multilingual Excellence - True understanding in 50+ languages, not just translation. (7) White-Glove Support - Dedicated success team for implementation. (8) Proven ROI - Clients see 70% cost reduction and 40% higher customer satisfaction on average."
  }
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

  // Comprehensive JSON-LD Structured Data for Maximum SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI Voice Bot by DigitalBot.ai",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Customer Service Software",
        "operatingSystem": "Web, iOS, Android, Windows, macOS",
        "offers": {
          "@type": "Offer",
          "price": "55",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://www.digitalbot.ai/pricing"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewBody": "Best AI voice bot platform we've used. Reduced our call center costs by 70% while improving customer satisfaction."
        },
        "description": "AI Voice Bot platform for automated customer service with natural language processing, 24/7 availability, and unlimited scalability. Deploy intelligent voice assistants in minutes.",
        "url": "https://www.digitalbot.ai/services/ai-voice-bot",
        "image": "https://www.digitalbot.ai/og-ai-voice-bot.jpg",
        "publisher": {
          "@type": "Organization",
          "name": "DigitalBot.ai",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.digitalbot.ai/logo.png"
          }
        },
        "featureList": [
          "24/7 Automated Voice Assistance",
          "Natural Language Processing",
          "Multi-language Support (50+ Languages)",
          "Real-time Analytics Dashboard",
          "Enterprise Security & Compliance",
          "Omnichannel Integration",
          "No-Code Conversation Builder",
          "CRM Integration",
          "Sentiment Analysis",
          "Voice Emotion Detection"
        ],
        "screenshot": "https://www.digitalbot.ai/screenshots/ai-voice-bot-dashboard.jpg"
      },
      {
        "@type": "Product",
        "name": "AI Voice Bot Solution",
        "description": "Enterprise AI voice automation platform for customer service, sales, and support. Automate phone conversations with human-like AI voice bots.",
        "brand": {
          "@type": "Brand",
          "name": "DigitalBot.ai"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "55",
          "highPrice": "999",
          "offerCount": "3",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AI Voice Bot Implementation",
        "provider": {
          "@type": "Organization",
          "name": "DigitalBot.ai"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Voice Bot Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Voice Bot Setup & Configuration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Voice Bot Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Voice Bot Analytics & Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "VideoObject",
        "name": "AI Voice Bot Demo - DigitalBot.ai",
        "description": "See how AI Voice Bot handles customer conversations with natural language processing and human-like responses",
        "thumbnailUrl": "https://www.digitalbot.ai/video-thumbnail-ai-voice-bot.jpg",
        "uploadDate": "2024-01-15",
        "duration": "PT2M30S",
        "contentUrl": "https://www.digitalbot.ai/videos/ai-voice-bot-demo.mp4"
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

      <main className="min-h-screen bg-black text-white" role="main">
        <Header />

        {/* Hero Section - SEO Optimized with Homepage Theme */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-gray-900 to-orange-100" aria-labelledby="hero-heading">
          {/* Decorative Grid Background - Homepage Style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Floating Gradient Orbs - Homepage Style */}
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto text-center relative z-10 max-w-6xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-sm text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-orange-600 transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-gray-400">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/services" className="hover:text-orange-600 transition-colors" itemProp="item">
                    <span itemProp="name">Services</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-400">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-orange-700 font-semibold">AI Voice Bot</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            {/* Hero Badge - Homepage Style */}
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                🤖 #1 AI Voice Bot Platform
              </span>
            </div>

            {/* H1 Heading - SEO Optimized Multi-line - Homepage Style */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-3 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                AI Voice Bot for Customer Service
              </span>
              <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-2xl sm:text-3xl lg:text-5xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
                <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
                <span className="relative z-10">Automate 24/7 Phone Calls</span>
              </span>
            </h1>

            {/* SEO-Rich Description - Homepage Style Info Box */}
            <div className="max-w-4xl mx-auto mb-10 p-6 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-200 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
                Deploy <strong className="text-orange-600">AI Voice Bot</strong> powered by advanced <strong className="text-orange-600">Natural Language Processing</strong> to automate customer conversations. Handle unlimited calls simultaneously with <strong>human-like voice synthesis</strong>, reduce costs by 70%, and provide instant responses 24/7. No coding required - launch your <strong>AI Voice Bot</strong> in minutes.
              </p>
            </div>

            {/* Key Benefits Grid - Homepage Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-black backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-orange-400 transition-transform duration-500 hover:scale-105 hover:shadow-orange-300 relative overflow-hidden group">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                  <benefit.icon className="h-12 w-12 text-orange-600 mx-auto mb-3 relative z-10" />
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 mb-2 relative z-10 animate-pulse">{benefit.stat}</div>
                  <p className="font-extrabold text-white mb-1 relative z-10">{benefit.title}</p>
                  <p className="text-sm text-gray-400 relative z-10">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Homepage Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:scale-105 text-white shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300 text-lg px-10 py-7 rounded-xl font-bold" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-10 py-7 rounded-xl font-bold" asChild>
                <Link href="/contact">
                  Watch Demo <Play className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Trust Signals - SEO Keywords */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-200 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">Setup in 5 Minutes</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">1000+ Businesses Use AI Voice Bot</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section - SEO Optimized with Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" aria-labelledby="features-heading">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-radial from-orange-300 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-radial from-orange-300 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg border border-orange-300">
                  AI Voice Bot Features
                </span>
              </div>
              <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                  Everything Your AI Voice Bot Needs
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade <strong className="text-orange-600">AI voice bot</strong> capabilities designed to transform your customer communication and automate phone interactions
              </p>
            </div>

            {/* Features Grid - Homepage Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article 
                  key={index}
                  className={`bg-black backdrop-blur-md rounded-3xl p-8 shadow-2xl ${feature.borderColor} border-2 transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden group`}
                  itemScope 
                  itemType="https://schema.org/SoftwareFeature"
                >
                  {/* Decorative Glow */}
                  <div className={`absolute -top-16 -right-16 w-60 h-60 ${feature.gradientFrom} ${feature.gradientTo} rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${feature.iconBg} mb-6 shadow-lg relative z-10`}>
                    <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 itemProp="name" className="text-2xl font-extrabold text-white mb-4 relative z-10">
                    {feature.title}
                  </h3>
                  <p itemProp="description" className="text-gray-400 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    <ArrowRight className={`h-6 w-6 ${feature.iconColor} animate-bounce`} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section - Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-900 to-orange-100 relative overflow-hidden" aria-labelledby="usecases-heading">
          {/* Grid Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="container mx-auto relative z-10 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg border border-orange-300">
                  Real-World Applications
                </span>
              </div>
              <h2 id="usecases-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                  AI Voice Bot Use Cases
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                See how businesses leverage <strong className="text-orange-600">AI voice bot</strong> technology to streamline operations and enhance customer experience
              </p>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <article 
                  key={index}
                  className="bg-black backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:shadow-orange-300 relative overflow-hidden group"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 mb-6 shadow-lg relative z-10">
                    <useCase.icon className="h-10 w-10 text-orange-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-extrabold text-white mb-4 relative z-10">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">
                    {useCase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Conversation Section - Homepage Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          {/* Background with gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-orange-200/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
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
              <div className="inline-flex items-center space-x-2 bg-black/80 px-4 py-2 rounded-full text-sm backdrop-blur-sm border-2 border-orange-300 shadow-lg mb-6">
                <Mic className="h-4 w-4 text-orange-600 animate-pulse" />
                <span className="font-medium text-orange-700">AI Voice Demonstration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent drop-shadow-lg mb-4">
                Experience Natural AI Conversations
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Listen to how our <strong className="text-orange-600">AI voice bot</strong> handles real customer interactions with human-like responses
              </p>
            </div>

            {/* Audio Player Card */}
            <div className="bg-black/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-orange-300 relative overflow-hidden">
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-orange-50/20 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Waveform visualization area */}
                <div className="flex items-center justify-center mb-6 h-24 bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl border-2 border-orange-200 relative overflow-hidden">
                  {isPlaying ? (
                    <div className="flex items-end justify-center gap-1.5 h-16">
                      {WAVEFORM_HEIGHTS.map((sinValue, i) => {
                        const height = sinValue * 20 + 25;
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-orange-600 via-orange-600 to-orange-600 rounded-full transition-all duration-300"
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
                            className="w-1.5 bg-gradient-to-t from-orange-300/40 via-orange-300/40 to-orange-200/40 rounded-full"
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
                    className="group relative flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-orange-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
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

        {/* FAQ Section - Matching Homepage Dark Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden" role="region" aria-labelledby="faq-section">
          {/* Animated Background Elements - Homepage Style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-reverse"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse">
                  Got Questions? We've Got Answers
                </span>
              </div>
              <h2 id="faq-section" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
                <span className="block mb-2">Frequently Asked</span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about <span className="text-orange-400 font-semibold">AI Voice Bots</span> and how to implement them
              </p>
            </div>
            
            {/* FAQ Grid - Homepage Dark Card Style */}
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => {
                const colors = [
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-500 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-500 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                  { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' },
                ];
                const color = colors[index % colors.length];

                return (
                  <div key={index} className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border ${color.border} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${color.shadow}`}>
                    <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${color.textGradient} bg-clip-text text-transparent mb-4 mt-2`}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Conversion Optimized with Homepage Theme */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-900 to-orange-100 relative overflow-hidden" aria-labelledby="cta-heading">
          {/* Decorative Grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            {/* CTA Badge */}
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
                🚀 Start Free Trial
              </span>
            </div>

            {/* CTA Heading - Multi-line Homepage Style */}
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-3 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                Transform Customer Service
              </span>
              <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-2xl sm:text-3xl lg:text-5xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
                <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
                <span className="relative z-10">With AI Voice Bot Today</span>
              </span>
            </h2>

            {/* CTA Description */}
            <div className="max-w-3xl mx-auto mb-10 p-6 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-200 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
                Launch your <strong className="text-orange-600">AI voice bot</strong> in <strong>5 minutes</strong> and start automating customer conversations. <strong className="text-orange-600">No credit card required.</strong> Join 1000+ businesses saving 70% on support costs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:scale-105 text-white shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300 text-lg px-10 py-7 rounded-xl font-bold" asChild>
                <Link href="/signup">
                  Start Free Trial Now <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-10 py-7 rounded-xl font-bold" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-6 w-6" />
                  Book Live Demo
                </Link>
              </Button>
            </div>
            
            {/* Trust Signals - Homepage Style Cards */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-3 px-6 py-4 bg-black backdrop-blur-md rounded-xl shadow-2xl border-2 border-orange-300 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <Shield className="h-6 w-6 text-orange-600 relative z-10" />
                <span className="font-extrabold text-white relative z-10">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-black backdrop-blur-md rounded-xl shadow-2xl border-2 border-orange-400 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <Headphones className="h-6 w-6 text-orange-600 relative z-10" />
                <span className="font-extrabold text-white relative z-10">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-black backdrop-blur-md rounded-xl shadow-2xl border-2 border-orange-400 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <TrendingUp className="h-6 w-6 text-orange-600 relative z-10" />
                <span className="font-extrabold text-white relative z-10">1000+ Businesses</span>
              </div>
            </div>

            {/* Additional Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-200 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">Free 14-Day Trial</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="font-semibold">Setup in 5 Minutes</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}




