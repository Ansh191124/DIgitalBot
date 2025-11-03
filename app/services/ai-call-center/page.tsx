import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoiceConversationPlayer } from "@/components/voice-conversation-player"
import { Building2, Clock, TrendingUp, Shield, HeadphonesIcon, Users, BarChart3, Zap, Workflow, Mic, Phone, Target, MessageCircle } from "lucide-react"
import Link from "next/link"

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
  "description": "AI-powered call center automation platform that delivers 24/7 customer support, intelligent routing, and real-time analytics for enterprises.",
  "brand": {
    "@type": "Organization",
    "name": "DigitalBot"
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
    "ratingValue": "4.9",
    "reviewCount": "932"
  }
}

export default function AICallCenter() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-sky-200/25 to-transparent blur-3xl" />
          <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-gradient-radial from-blue-100/20 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            AI Call Center Automation Platform
          </h1>
          <p className="text-xl text-sky-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy an enterprise-ready <span className="font-semibold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">AI call center</span> that answers every customer instantly, routes conversations intelligently, and delivers measurable ROI in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Start Free AI Call Center Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Book Strategy Session</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600">Trusted by 1,200+ contact centers • 4.9/5 CSAT • SOC2 & HIPAA compliant</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50/40">
        <div className="container mx-auto max-w-5xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              What Is AI Call Center Automation?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              AI call center automation replaces legacy IVR menus and manual routing with conversational AI that understands natural speech, resolves customer intent, and orchestrates workflows across your technology stack. DigitalBot combines speech recognition, large language models, and real-time analytics to deliver call experiences customers love while dramatically reducing operational costs.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Unlike static phone trees, our AI learns from every interaction. It recognizes customers by voice, personalizes responses, and retrieves the exact data needed from CRMs, ERPs, payment processors, or custom databases. Your supervisors see live dashboards, agent assistance prompts, and voice-of-customer insights that reveal trends before they impact KPIs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you manage a global support center, sales desk, dispatch hub, or compliance hotline, DigitalBot gives you a resilient call center that scales instantly, integrates seamlessly, and protects sensitive conversations with bank-level security.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Why Enterprises Choose DigitalBot for AI Call Centers
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Powerful automation, intuitive operations, and measurable outcomes engineered for modern contact center leaders.
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
              AI Call Center Use Cases & Outcomes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Proven automation playbooks that transform every customer touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sky-700 text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed mb-4">{useCase.description}</CardDescription>
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ✓ {useCase.results}
                  </span>
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
              Platform Capabilities Built for Mission-Critical Call Centers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deep technical strengths that keep your contact center fast, compliant, and future-proof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featureBlocks.map((feature, index) => (
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
              <span className="font-medium">Conversational AI Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Hear DigitalBot's AI Call Center in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how AI routes calls, verifies identities, and resolves requests with human-level empathy.
            </p>
          </div>
          <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              AI Call Center FAQs
            </h2>
            <p className="text-xl text-gray-700">Quick answers for operational leaders evaluating DigitalBot.</p>
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
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Modernize Your Call Center?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Launch DigitalBot's AI call center solution and deliver world-class customer experiences backed by real-time intelligence and unbeatable economics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 shadow-xl text-lg px-8 py-6" asChild>
              <Link href="/signup">Start Your Free AI Call Center Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <Link href="/contact">Consult with an AI Strategist</Link>
            </Button>
          </div>
          <p className="text-sm opacity-80">✓ No hidden fees • ✓ Dedicated onboarding • ✓ Enterprise security</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
