import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoiceConversationPlayer } from "@/components/voice-conversation-player"
import { Building2, Clock, TrendingUp, Shield, HeadphonesIcon, Users, BarChart3, Zap, Workflow, Mic, Phone, Target, MessageCircle, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Call Center | 24/7 Automated Call Center Software - DigitalBot.ai 2025",
  description: "Deploy an AI call center that handles unlimited calls 24/7. Intelligent routing, real-time analytics & CRM integration. Trusted by 500+ businesses. Start free trial.",
  keywords: [
    "ai call center",
    "ai call center software",
    "automated call center",
    "ai phone system",
    "call center automation",
    "ai customer service",
    "virtual call center",
    "ai call routing",
    "call center ai solution",
    "ai contact center",
    "automated phone system",
    "ai voice call center",
    "call center automation software",
    "ai powered call center",
    "intelligent call routing",
  ],
  openGraph: {
    title: "AI Call Center | 24/7 Automated Call Center Software - DigitalBot.ai 2025",
    description: "Deploy an AI call center that handles unlimited calls 24/7. Intelligent routing, real-time analytics & CRM integration. Trusted by 500+ businesses.",
    type: "website",
    url: "https://digitalbot.ai/services/ai-call-center",
    images: [
      {
        url: "/images/ai-voice-agent.png",
        width: 1200,
        height: 630,
        alt: "AI Call Center Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Call Center | 24/7 Automated Call Center Software - DigitalBot.ai 2025",
    description: "Deploy an AI call center that handles unlimited calls 24/7. Intelligent routing, real-time analytics & CRM integration. Trusted by 500+ businesses.",
    images: ["/images/ai-voice-agent.png"],
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Enterprise-Grade Contact Center",
    description: "Launch a fully managed AI call center with elastic capacity, carrier-grade reliability, and compliance controls tailored to finance, healthcare, retail, and logistics enterprises."
  },
  {
    icon: Clock,
    title: "24/7 Intelligent Availability",
    description: "Deliver instant responses across every time zone. AI agents handle calls, email callbacks, and SMS follow-ups round-the-clock with consistent accuracy." 
  },
  {
    icon: TrendingUp,
    title: "Productivity Gains",
    description: "Automate 85% of routine call center interactions and cut average handle times by 60%, allowing live agents to focus on complex escalations that drive revenue." 
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC 2, HIPAA, PCI DSS, and GDPR compliant voice infrastructure with end-to-end encryption, redaction, and granular audit trails." 
  },
  {
    icon: HeadphonesIcon,
    title: "Human-Centric Experiences",
    description: "Natural language understanding, sentiment detection, and empathetic speech synthesis deliver conversations that mirror your brand tone." 
  },
  {
    icon: Users,
    title: "Omnichannel Continuity",
    description: "Carry context seamlessly from inbound calls to SMS, WhatsApp, email, and live chat handoffs, eliminating repetitive customer verification." 
  },
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    description: "Supervisors receive live dashboards with queue analytics, AI quality scoring, agent coaching suggestions, and automated compliance flags." 
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Pre-built call flows, multilingual voice models, and CRM connectors allow enterprises to go live in under 14 days with zero downtime." 
  },
  {
    icon: Workflow,
    title: "No-Code Orchestration",
    description: "Design, test, and iterate complex IVR replacements with visual builders, reusable conversation blocks, and A/B testing out of the box." 
  }
]

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Route and resolve high-volume support calls automatically. AI agents authenticate callers, surface knowledge articles, and complete account actions without human intervention.",
    results: "Reduce cost per call by 70%"
  },
  {
    title: "Revenue & Upsell Campaigns",
    description: "Run proactive retention and cross-sell campaigns with AI that understands customer history, proposes relevant offers, and captures payments securely.",
    results: "Grow upsell conversions by 45%"
  },
  {
    title: "Field Service Dispatch",
    description: "Automatically triage incident calls, schedule engineers, and confirm appointments while syncing updates to workforce management tools in real time.",
    results: "Cut dispatch delays by 55%"
  },
  {
    title: "Compliance Hotlines",
    description: "Provide confidential hotlines with voice biometrics, call transcription, and automated routing to the right compliance teams within SLA windows.",
    results: "Achieve 100% policy adherence"
  }
]

const featureBlocks = [
  {
    icon: Phone,
    heading: "Carrier-Grade Voice Infrastructure",
    body: "Redundant SIP trunks, automatic call distribution, and smart failover ensure every inbound and outbound interaction connects instantly and clearly." 
  },
  {
    icon: Target,
    heading: "Smart Intent Routing",
    body: "Machine learning models detect intent in the first three seconds of audio and route customers to AI workflows or human specialists based on priority." 
  },
  {
    icon: MessageCircle,
    heading: "Agent Assist & Collaboration",
    body: "Surface live transcripts, objection handling scripts, and AI-generated summaries directly inside your agent desktop for lightning-fast resolutions." 
  },
  {
    icon: Mic,
    heading: "Accurate Speech Intelligence",
    body: "Multi-accent recognition, noise suppression, and adaptive speech synthesis deliver natural, inclusive experiences across 60+ languages." 
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI call center?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI call center uses conversational AI, voice automation, and machine learning to manage customer calls, authenticate callers, resolve requests, and escalate complex issues to human agents when necessary." 
      }
    },
    {
      "@type": "Question",
      "name": "How fast can an AI call center be deployed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigitalBot's AI call center launches in less than two weeks with pre-built workflows, CRM integrations, and compliance templates that eliminate lengthy custom development." 
      }
    },
    {
      "@type": "Question",
      "name": "Will AI replace my human agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI handles repetitive, high-volume tasks while human experts focus on strategic conversations, coaching, and relationship building. Most teams reassign agents to higher-value work." 
      }
    },
    {
      "@type": "Question",
      "name": "Is the AI call center secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All calls are encrypted, stored in compliant regions, and governed by role-based access controls, detailed audit logs, and data retention policies." 
      }
    },
    {
      "@type": "Question",
      "name": "Can AI work with my existing phone system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigitalBot integrates with legacy PBX, cloud telephony, CRM, helpdesk, and workforce management tools using APIs and pre-built connectors." 
      }
    },
    {
      "@type": "Question",
      "name": "What ROI should we expect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprises typically reduce operating expenses by 40-60%, improve CSAT by 35%, and generate ROI within the first quarter of deployment." 
      }
    }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "DigitalBot AI Call Center Automation",
  "description": "AI-powered call center automation platform that delivers 24/7 customer support, intelligent routing, and real-time analytics. Trusted by 500+ businesses across 25+ countries.",
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
    "url": "https://www.digitalbot.ai/services/ai-call-center"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  }
}

export default function AICallCenter() {
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
              <li className="text-white font-medium">AI Call Center</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Is AI Call Center Automation?
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            An AI call center uses conversational AI to handle unlimited customer calls 24/7 with intelligent routing, real-time analytics, and seamless CRM integration. Trusted by <span className="font-bold text-orange-400">500+ businesses</span> to manage <span className="font-bold text-pink-400">2M+ conversations</span> monthly.
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
          <p className="text-sm text-white/60">✓ 500+ Active Businesses • ✓ 4.8/5 Rating • ✓ SOC2 & HIPAA Compliant</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              How Does AI Call Center Automation Work?
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              AI call center automation replaces legacy IVR menus and manual routing with conversational AI that understands natural speech, resolves customer intent, and orchestrates workflows across your technology stack. DigitalBot combines speech recognition, large language models, and real-time analytics to deliver call experiences customers love while dramatically reducing operational costs.
            </p>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Unlike static phone trees, our AI learns from every interaction. It recognizes customers by voice, personalizes responses, and retrieves the exact data needed from CRMs, ERPs, payment processors, or custom databases. Your supervisors see live dashboards, agent assistance prompts, and voice-of-customer insights that reveal trends before they impact KPIs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Whether you manage a global support center, sales desk, dispatch hub, or compliance hotline, DigitalBot gives you a resilient call center that scales instantly, integrates seamlessly, and protects sensitive conversations with bank-level security.
            </p>
          </article>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose DigitalBot for AI Call Centers?
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Powerful automation, intuitive operations, and measurable outcomes engineered for modern contact center leaders.
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
              AI Call Center Use Cases & Results
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Proven automation playbooks that transform every customer touchpoint.
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
              Enterprise-Grade AI Call Center Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Deep technical capabilities that keep your contact center fast, compliant, and future-proof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featureBlocks.map((feature, index) => (
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
              Hear Our AI Call Center in Action
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience how AI routes calls, verifies identities, and resolves requests with human-level empathy.
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
            <p className="text-xl text-white/70">Quick answers for leaders evaluating AI call center solutions.</p>
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
              Ready to Modernize Your Call Center?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join 500+ businesses using DigitalBot.ai to deliver world-class customer experiences with AI call center technology. Start your free trial today.
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
                  Book Consultation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/60">✓ No Setup Fees • ✓ Enterprise Security • ✓ Dedicated Support</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
