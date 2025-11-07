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
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Enterprise AI Call Center</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Transform Your Call Center
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    with AI Automation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Deploy an <strong>AI call center</strong> that handles unlimited customer calls 24/7 with intelligent routing, real-time analytics, and seamless CRM integration. 
                Trusted by <span className="font-bold text-orange-600">500+ businesses</span> managing <span className="font-bold text-orange-600">2M+ conversations</span> monthly.
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
                    Book Demo
                  </Link>
                </Button>
              </div>

              <div className="inline-flex flex-col gap-4 bg-black/80 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5 text-orange-600" />
                    <span>500+ Active Businesses</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Check className="w-5 h-5 text-orange-600" />
                    <span>4.8/5 Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span>SOC2 & HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-700">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span>24/7 Availability</span>
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
                Why Choose DigitalBot for AI Call Centers?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powerful automation, intuitive operations, and measurable outcomes for modern contact centers
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
                AI Call Center Use Cases & Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven automation playbooks that transform every customer touchpoint
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
                Enterprise-Grade AI Call Center Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Deep technical capabilities that keep your contact center fast, compliant, and future-proof
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featureBlocks.map((feature, index) => (
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
                Hear Our AI Call Center in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Experience how AI routes calls, verifies identities, and resolves requests with human-level empathy
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
                <HeadphonesIcon className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers for leaders evaluating AI call center solutions
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
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Modernize Your Call Center Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Ready to Transform
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    Your Contact Center?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join 500+ businesses using DigitalBot.ai to deliver world-class customer experiences with AI call center technology. Start your free trial today.
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
                    <Phone className="mr-2 w-5 h-5" />
                    Book Consultation
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-200">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Rapid Deployment</span>
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




