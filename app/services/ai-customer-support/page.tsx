import { Header } from "@/components/header"
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10 container mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white font-medium">AI Customer Support</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Is AI Customer Support Automation?
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            AI customer support uses conversational AI to resolve customer inquiries instantly across all channels, 24/7. Trusted by <span className="font-bold text-orange-400">500+ businesses</span> to handle <span className="font-bold text-pink-400">2M+ conversations</span> monthly with personalized, empathetic service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                Book Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/60">✓ 500+ Businesses • ✓ 4.8/5 Rating • ✓ 2M+ Monthly Conversations</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              How AI Reinvents Customer Support
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Customers expect instant answers, personalized solutions, and empathetic service across every touchpoint. DigitalBot combines conversational AI, contextual memory, and workflow automation so your support organization can exceed those expectations without ballooning headcount.
            </p>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Our AI learns from your historical tickets, community posts, product updates, and help center content. It captures brand voice, adapts to policy changes in minutes, and collaborates with human agents when nuanced judgement is required. Supervisors get full visibility into AI performance with the ability to intervene, coach, and iterate continuously.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              With DigitalBot, support leaders reduce backlogs, improve customer satisfaction scores, and eliminate data silos. The result: happier customers, empowered agents, and a support org that transforms from a cost center into a growth engine.
            </p>
          </article>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Benefits of AI Customer Support
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Empower your support team with automation that feels human and scales with demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                {/* Numbered Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <CardHeader className="pt-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-7 w-7 text-orange-400" />
                  </div>
                  <CardTitle className="text-white text-xl group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Support Use Cases & Proven Results
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real-world outcomes from DigitalBot customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-white/70 leading-relaxed mb-4">
                    {useCase.description}
                  </CardDescription>
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                    <Check className="h-4 w-4 mr-2" />
                    {useCase.results}
                  </span>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Platform Capabilities Support Leaders Trust
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Deep technical advantages that keep customers informed and delighted.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {capabilityBlocks.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10">
                    <feature.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  {feature.heading}
                </h3>
                <p className="text-white/70 leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-white/80 border border-white/10 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-orange-400 animate-pulse" />
              <span className="font-medium">Live AI Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Experience AI Customer Support in Action
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Hear how AI resolves support tickets with calm, accurate, and friendly responses your customers will love.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/70">Get clarity on how AI customer support fits into your strategy.</p>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{faq.name}</h3>
                <p className="text-white/70 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:bg-white/10 transition-all text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Elevate Your Customer Support Today
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join 500+ businesses delivering proactive, intelligent support experiences. Delight customers, empower agents, and prove ROI with DigitalBot AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                  Schedule Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/60">✓ Dedicated Success Team • ✓ Transparent Pricing • ✓ Rapid Deployment</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
