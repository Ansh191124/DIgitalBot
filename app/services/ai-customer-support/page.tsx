import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { VoiceConversationPlayer } from "@/components/voice-conversation-player"
import { HeartHandshake, Clock, Sparkles, Shield, Users, Bot, BarChart3, Globe, Workflow, Mic, MessageCircle, ClipboardCheck, Smile } from "lucide-react"
import Link from "next/link"

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
  "description": "AI-powered customer support platform that delivers personalized, 24/7 service across voice, chat, email, and social channels.",
  "brand": {
    "@type": "Organization",
    "name": "DigitalBot"
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
    "ratingValue": "4.9",
    "reviewCount": "1046"
  }
}

export default function AICustomerSupport() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-sky-200/25 via-blue-100/10 to-transparent blur-3xl" />
          <div className="absolute top-2/3 left-0 w-[700px] h-[700px] bg-gradient-radial from-sky-100/15 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            AI Customer Support Automation Suite
          </h1>
          <p className="text-xl text-sky-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Turn every interaction into a loyalty moment with <span className="font-semibold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">DigitalBot AI customer support</span>. Resolve requests instantly, predict issues before they occur, and deliver human-quality experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Launch AI Support Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Talk to a Support Strategist</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600">Trusted by SaaS, ecommerce, fintech, and healthcare leaders • 4.9/5 CSAT • Millions of conversations handled monthly</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50/40">
        <div className="container mx-auto max-w-5xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              How AI Reinvents Customer Support
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Customers expect instant answers, personalized solutions, and empathetic service across every touchpoint. DigitalBot combines conversational AI, contextual memory, and workflow automation so your support organization can exceed those expectations without ballooning headcount.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our AI learns from your historical tickets, community posts, product updates, and help center content. It captures brand voice, adapts to policy changes in minutes, and collaborates with human agents when nuanced judgement is required. Supervisors get full visibility into AI performance with the ability to intervene, coach, and iterate continuously.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With DigitalBot, support leaders reduce backlogs, improve customer satisfaction scores, and eliminate data silos. The result: happier customers, empowered agents, and a support org that transforms from a cost center into a growth engine.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Benefits of DigitalBot AI Support
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Empower your support team with automation that feels human and scales with demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-linear-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sky-700 text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              AI Support Use Cases & Measurable Wins
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real-world outcomes from DigitalBot customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sky-700 text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed mb-4">{useCase.description}</CardDescription>
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">✓ {useCase.results}</span>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Platform Capabilities Support Leaders Rely On
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deep technical advantages that keep customers informed and delighted.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {capabilityBlocks.map((feature, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-sky-700 mb-4 flex items-center gap-3">
                  <feature.icon className="h-8 w-8 text-sky-600" />
                  {feature.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-sky-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-blue-100/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-sky-100/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(to right, rgba(56,189,248,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-sm border border-sky-200/60 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-sky-500 animate-pulse" />
              <span className="font-medium">AI Customer Experience Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Hear DigitalBot Resolve a Support Ticket in Seconds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the calm, accurate, and friendly responses your customers will receive.
            </p>
          </div>
          <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              AI Customer Support FAQ
            </h2>
            <p className="text-xl text-gray-700">Get clarity on how DigitalBot fits into your support strategy.</p>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                <h3 className="text-xl font-bold text-sky-900 mb-3">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-600 via-sky-500 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Elevate Customer Support with DigitalBot</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join leading brands delivering proactive, intelligent support experiences. Delight customers, empower agents, and prove ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 shadow-xl text-lg px-8 py-6" asChild>
              <Link href="/signup">Start Your Free AI Support Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <Link href="/contact">Schedule a Personalized Demo</Link>
            </Button>
          </div>
          <p className="text-sm opacity-80">✓ Dedicated AI success team • ✓ Transparent pricing • ✓ Rapid value delivery</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
