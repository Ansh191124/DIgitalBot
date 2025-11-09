import { Header } from "@/components/header"`nimport { PageBackground } from "@/components/page-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { VoiceConversationPlayer } from "@/components/voice-conversation-player"
import { HeartHandshake, Clock, Sparkles, Shield, Users, Bot, BarChart3, Globe, Workflow, Mic, MessageCircle, ClipboardCheck, Smile, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Customer Support | 24/7 Automated Customer Service - DigitalBot.ai 2025",
  description: "Deploy AI customer support that resolves issues instantly 24/7. Personalized service across all channels. Trusted by 500+ businesses. Start free trial today.",
  keywords: [
    "ai customer support",
    "ai customer service",
    "automated customer support",
    "ai support agent",
    "ai chatbot customer service",
    "24/7 customer support ai",
    "ai help desk",
    "automated support system",
    "ai customer care",
    "intelligent customer support",
    "ai support automation",
    "virtual customer service agent",
    "ai powered support",
    "customer service automation",
    "ai support platform",
  ],
  openGraph: {
    title: "AI Customer Support | 24/7 Automated Customer Service - DigitalBot.ai 2025",
    description: "Deploy AI customer support that resolves issues instantly 24/7. Personalized service across all channels. Trusted by 500+ businesses.",
    type: "website",
    url: "https://digitalbot.ai/services/ai-customer-support",
    images: [
      {
        url: "/images/ai-voice-agent.png",
        width: 1200,
        height: 630,
        alt: "AI Customer Support Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support | 24/7 Automated Customer Service - DigitalBot.ai 2025",
    description: "Deploy AI customer support that resolves issues instantly 24/7. Personalized service across all channels. Trusted by 500+ businesses.",
    images: ["/images/ai-voice-agent.png"],
  },
};

const benefits = [
  {
    icon: HeartHandshake,
    title: "Customer Empathy at Scale",
    description: "Deliver empathetic conversations in real time with AI agents trained on your brand tone, knowledge base, and historical interactions." 
  },
  {
    icon: Clock,
    title: "Instant 24/7 Resolutions",
    description: "Provide lightning-fast support across chat, voice, email, and messaging channels with AI that never sleeps and never keeps customers waiting." 
  },
  {
    icon: Sparkles,
    title: "Personalized Journeys",
    description: "Reference past purchases, preferences, and sentiment in every conversation to create delightful, relevant support experiences." 
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "HIPAA, SOC 2, and GDPR compliant infrastructure with automatic redaction, encryption, and role-based access control for sensitive cases." 
  },
  {
    icon: Users,
    title: "Agent Augmentation",
    description: "Give human teams AI copilots that summarize tickets, recommend next best actions, and draft responses in seconds." 
  },
  {
    icon: Bot,
    title: "Unified Knowledge Automation",
    description: "Connect your FAQs, product docs, LMS, and community forums into a single AI-ready knowledge layer refreshed continuously." 
  },
  {
    icon: BarChart3,
    title: "Outcome-Based Analytics",
    description: "Track KPIs like first contact resolution, customer effort, sentiment trends, and churn risk through intuitive dashboards." 
  },
  {
    icon: Globe,
    title: "Global Language Support",
    description: "Serve customers in 60+ languages with natural accents and adaptive translations that preserve context and nuance." 
  },
  {
    icon: Workflow,
    title: "No-Code Automation",
    description: "Build, test, and optimize multi-step customer workflows without writing code using visual journeys and A/B testing tools." 
  }
]

const useCases = [
  {
    title: "Omnichannel Case Deflection",
    description: "Resolve up to 80% of repetitive questions across live chat, social media, and email with AI responses that access your knowledge base instantly.",
    results: "Cut ticket backlog by 65%"
  },
  {
    title: "Proactive Customer Care",
    description: "Automatically detect churn signals and reach out with personalized retention offers before customers submit cancellations.",
    results: "Reduce churn by 35%"
  },
  {
    title: "Technical Troubleshooting",
    description: "Guide users through complex troubleshooting sequences with step-by-step instructions, multimedia explanations, and escalation to specialists when needed.",
    results: "Increase first contact resolution to 92%"
  },
  {
    title: "Order & Account Management",
    description: "Handle refunds, order tracking, account updates, and subscription changes automatically while syncing changes to CRM, billing, and ERP systems.",
    results: "Save 3,000 agent hours per quarter"
  }
]

const capabilityBlocks = [
  {
    icon: MessageCircle,
    heading: "Context-Aware Conversation Engine",
    body: "DigitalBot understands intent, sentiment, and emotion across sessions, giving customers consistent, human-quality interactions every time." 
  },
  {
    icon: ClipboardCheck,
    heading: "Automated Quality Management",
    body: "Score 100% of interactions automatically against custom rubrics, surface coaching opportunities, and enforce compliance in real time." 
  },
  {
    icon: Smile,
    heading: "Customer Delight Toolkit",
    body: "Trigger loyalty offers, CSAT surveys, and follow-up journeys based on satisfaction levels and lifecycle stages to maximize customer happiness." 
  },
  {
    icon: BarChart3,
    heading: "Unified Support Intelligence",
    body: "Gain a single view of all support metrics, including AI-only vs. blended team performance, trending topics, and agent adoption." 
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI customer support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI customer support uses conversational AI, automation, and knowledge management to resolve customer inquiries across channels without manual intervention." 
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can we launch AI support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most DigitalBot customers launch in 10 days by connecting existing knowledge bases, ticketing tools, and authentication systems through our no-code studio." 
      }
    },
    {
      "@type": "Question",
      "name": "Will AI replace my support team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI frees agents from repetitive tasks so they can focus on relationship building, complex troubleshooting, and proactive outreach. Human oversight remains central." 
      }
    },
    {
      "@type": "Question",
      "name": "How does AI maintain brand voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigitalBot trains on your existing conversations, style guides, and approval policies, ensuring every response sounds exactly like your brand." 
      }
    },
    {
      "@type": "Question",
      "name": "Is AI customer support secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All interactions are encrypted, anonymized when necessary, and stored according to your retention policies with full audit trails for compliance." 
      }
    },
    {
      "@type": "Question",
      "name": "What ROI can we expect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organizations typically see 50% lower support costs, 40% faster response times, and 25% higher CSAT within the first quarter." 
      }
    }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "DigitalBot AI Customer Support",
  "description": "AI-powered customer support platform that delivers personalized, 24/7 service across voice, chat, email, and social channels. Trusted by 500+ businesses.",
  "brand": {
    "@type": "Organization",
    "name": "DigitalBot.ai",
    "foundingDate": "2024",
    "url": "https://digitalbot.ai"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.digitalbot.ai/services/ai-customer-support"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  }
}

export default function AICustomerSupport() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        
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
                <HeartHandshake className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">AI-Powered Customer Support</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Deliver Exceptional
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Customer Support 24/7
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform customer service with <strong>AI customer support</strong> that resolves inquiries instantly across all channels. 
                Trusted by <span className="font-bold text-orange-600">500+ businesses</span> handling <span className="font-bold text-orange-600">2M+ conversations</span> monthly.
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
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Book Demo
                  </Link>
                </Button>
              </div>

              <div className="inline-flex flex-col gap-4 bg-black/80 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5 text-orange-600" />
                    <span>500+ Businesses Trust Us</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Check className="w-5 h-5 text-orange-600" />
                    <span>4.8/5 Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <Check className="w-5 h-5 text-orange-600" />
                    <span>2M+ Monthly Conversations</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-700">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span>24/7 Instant Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                Benefits of AI Customer Support
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Empower your support team with automation that feels human and scales with demand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-orange-400 hover:border-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
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
                AI Support Use Cases & Proven Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world outcomes from DigitalBot customers worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-black border-2 border-orange-400 hover:border-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
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

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                Platform Capabilities Support Leaders Trust
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Deep technical advantages that keep customers informed and delighted
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {capabilityBlocks.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-orange-400 hover:border-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300">
                      {feature.heading}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-5 py-2 rounded-full text-sm backdrop-blur-sm border-2 border-orange-300 shadow-lg mb-6">
                <Mic className="h-4 w-4 animate-pulse" />
                <span className="font-semibold">Live AI Demo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent mb-4">
                Experience AI Customer Support in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Hear how AI resolves support tickets with calm, accurate, and friendly responses your customers will love
              </p>
            </div>
            <div className="bg-black rounded-2xl p-8 shadow-2xl border-2 border-orange-400">
              <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
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
                <MessageCircle className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get clarity on how AI customer support fits into your strategy
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-6">
              {faqSchema.mainEntity.map((faq, index) => (
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
                        {faq.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.acceptedAnswer.text}
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
                <HeartHandshake className="w-4 h-4" />
                <span className="text-sm font-semibold">Transform Customer Support Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Elevate Your Customer
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Support Experience
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join 500+ businesses delivering proactive, intelligent support experiences. Delight customers, empower agents, and prove ROI with DigitalBot AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-200">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Dedicated Success Team</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Rapid Deployment</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
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





