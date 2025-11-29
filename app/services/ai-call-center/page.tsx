import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { VoiceConversationPlayer } from "@/components/voice-conversation-player";
import { ArrowRight, BarChart3, Bot, Brain, Building2, Check, Clock, HeadphonesIcon, MessageCircle, Mic, Phone, Shield, Target, TrendingUp, Users, Workflow, Zap } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    description: "Launch a fully managed AI call center with elastic capacity, carrier-grade reliability, and compliance controls tailored to finance, healthcare, retail, and logistics enterprises.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Clock,
    title: "24/7 Intelligent Availability",
    description: "Deliver instant responses across every time zone. AI agents handle calls, email callbacks, and SMS follow-ups round-the-clock with consistent accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: TrendingUp,
    title: "Productivity Gains",
    description: "Automate 85% of routine call center interactions and cut average handle times by 60%, allowing live agents to focus on complex escalations that drive revenue.",
    image: "https://images.unsplash.com/photo-1551434678-efb963407044?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC 2, HIPAA, PCI DSS, and GDPR compliant voice infrastructure with end-to-end encryption, redaction, and granular audit trails.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: HeadphonesIcon,
    title: "Human-Centric Experiences",
    description: "Natural language understanding, sentiment detection, and empathetic speech synthesis deliver conversations that mirror your brand tone.",
    image: "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "Omnichannel Continuity",
    description: "Carry context seamlessly from inbound calls to SMS, WhatsApp, email, and live chat handoffs, eliminating repetitive customer verification.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    description: "Supervisors receive live dashboards with queue analytics, AI quality scoring, agent coaching suggestions, and automated compliance flags.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Pre-built call flows, multilingual voice models, and CRM connectors allow enterprises to go live in under 14 days with zero downtime.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Workflow,
    title: "No-Code Orchestration",
    description: "Design, test, and iterate complex IVR replacements with visual builders, reusable conversation blocks, and A/B testing out of the box.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  }
]

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Route and resolve high-volume support calls automatically. AI agents authenticate callers, surface knowledge articles, and complete account actions without human intervention.",
    results: "Reduce cost per call by 70%",
    image: "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Revenue & Upsell Campaigns",
    description: "Run proactive retention and cross-sell campaigns with AI that understands customer history, proposes relevant offers, and captures payments securely.",
    results: "Grow upsell conversions by 45%",
    image: "https://images.unsplash.com/photo-1551434678-efb963407044?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Field Service Dispatch",
    description: "Automatically triage incident calls, schedule engineers, and confirm appointments while syncing updates to workforce management tools in real time.",
    results: "Cut dispatch delays by 55%",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Compliance Hotlines",
    description: "Provide confidential hotlines with voice biometrics, call transcription, and automated routing to the right compliance teams within SLA windows.",
    results: "Achieve 100% policy adherence",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
  }
]

const featureBlocks = [
  {
    icon: Phone,
    heading: "Carrier-Grade Voice Infrastructure",
    body: "Redundant SIP trunks, automatic call distribution, and smart failover ensure every inbound and outbound interaction connects instantly and clearly.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Target,
    heading: "Smart Intent Routing",
    body: "Machine learning models detect intent in the first three seconds of audio and route customers to AI workflows or human specialists based on priority.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: MessageCircle,
    heading: "Agent Assist & Collaboration",
    body: "Surface live transcripts, objection handling scripts, and AI-generated summaries directly inside your agent desktop for lightning-fast resolutions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Mic,
    heading: "Accurate Speech Intelligence",
    body: "Multi-accent recognition, noise suppression, and adaptive speech synthesis deliver natural, inclusive experiences across 60+ languages.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
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
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        
        {/* Hero Section - Cyberpunk Theme */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Floating Cyan Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-radial from-cyan-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-6 py-2.5 mb-8 shadow-lg shadow-cyan-400/20 text-white font-semibold text-sm uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Phone className="w-4 h-4" />
                <span>Enterprise AI Call Center</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider" style={{
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}>
                  Transform Your Call Center
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">
                    with AI Automation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-cyan-600/20 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg mb-10 text-white max-w-4xl mx-auto leading-relaxed">
                Deploy an <strong className="text-cyan-400">AI call center</strong> that handles unlimited customer calls 24/7 with intelligent routing, real-time analytics, and seamless CRM integration. 
                Trusted by <span className="font-bold text-cyan-400">500+ businesses</span> managing <span className="font-bold text-cyan-400">2M+ conversations</span> monthly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="bg-cyan-400 text-black hover:bg-cyan-300 font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] flex items-center" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <Link href="/signup" className="flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </button>
                <button className="bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <Link href="/contact" className="flex items-center">
                    <Phone className="mr-2 w-4 h-4" />
                    Book Demo
                  </Link>
                </button>
              </div>

              <div className="inline-flex flex-col gap-4 bg-black/60 backdrop-blur-sm border border-cyan-400/30 p-6 shadow-xl shadow-cyan-400/20" style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
              }}>
                <div className="flex flex-wrap gap-6 justify-center items-center text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2 text-cyan-400 uppercase tracking-widest">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>500+ Active Businesses</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 uppercase tracking-widest">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>4.8/5 Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 uppercase tracking-widest">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>SOC2 & HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>24/7 Availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Cyberpunk Theme */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-6 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Bot className="w-3 h-3 animate-pulse" />
                AI Call Center Features
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Why Choose DigitalBot
                <br />
                <span className="text-white">for AI Call Centers?</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed">
                Powerful automation, intuitive operations, and <strong className="text-cyan-400">measurable outcomes</strong> for modern contact centers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 hover:border-cyan-400/50 shadow-lg shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/30"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* HD Image */}
                  <div className="relative w-full h-24 mb-4 overflow-hidden border border-cyan-400/30" style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}>
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover filter contrast-125 brightness-110 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 to-black/40"></div>
                    <div className="absolute bottom-2 left-2">
                      <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center" style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                      }}>
                        <benefit.icon className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section - Cyberpunk Theme */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-6 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Target className="w-3 h-3 animate-pulse" />
                Proven Use Cases
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                AI Call Center Use Cases
                <br />
                <span className="text-white">& Results</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed">
                Proven automation playbooks that <strong className="text-cyan-400">transform every customer touchpoint</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 hover:border-cyan-400/50 shadow-lg shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/30"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* HD Image */}
                  <div className="relative w-full h-32 mb-4 overflow-hidden border border-cyan-400/30" style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}>
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover filter contrast-125 brightness-110 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 to-black/40"></div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider leading-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-white text-xs leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest" style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)'
                  }}>
                    <Check className="h-3 w-3 mr-2" />
                    {useCase.results}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Cyberpunk Theme */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-6 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Brain className="w-3 h-3 animate-pulse" />
                Advanced Features
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Enterprise-Grade AI
                <br />
                <span className="text-white">Call Center Features</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed">
                Deep technical capabilities that keep your contact center <strong className="text-cyan-400">fast, compliant, and future-proof</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {featureBlocks.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 hover:border-cyan-400/50 shadow-lg shadow-cyan-400/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/30"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* HD Image */}
                  <div className="relative w-full h-32 mb-4 overflow-hidden border border-cyan-400/30" style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}>
                    <Image
                      src={feature.image}
                      alt={feature.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover filter contrast-125 brightness-110 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 to-black/40"></div>
                    <div className="absolute bottom-2 left-2">
                      <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center" style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                      }}>
                        <feature.icon className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider leading-tight">
                      {feature.heading}
                    </h3>
                  </div>
                  <p className="text-white text-xs leading-relaxed">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section - Cyberpunk Theme */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-6 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Mic className="h-3 w-3 animate-pulse" />
                Live AI Demo
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Hear Our AI Call Center
                <br />
                <span className="text-white">in Action</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-2xl mx-auto leading-relaxed">
                Experience how AI <strong className="text-cyan-400">routes calls, verifies identities, and resolves requests</strong> with human-level empathy
              </p>
            </div>
            <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 shadow-xl shadow-cyan-400/20" style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}>
              <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
            </div>
          </div>
        </section>

        {/* FAQ Section - Cyberpunk Theme */}
        <section className="relative py-16 overflow-hidden bg-black">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-radial from-cyan-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-6 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <HeadphonesIcon className="w-3 h-3 animate-pulse" />
                Common Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider leading-tight" style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}>
                Frequently Asked
                <br />
                <span className="text-white">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed">
                Quick answers for leaders <strong className="text-cyan-400">evaluating AI call center solutions</strong>
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="group relative bg-black/60 backdrop-blur-md border border-cyan-400/30 p-6 hover:border-cyan-400/50 shadow-lg shadow-cyan-400/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/30"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center text-black font-bold text-sm shadow-lg transition-transform duration-500 group-hover:scale-110" style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                      }}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                        {faq.name}
                      </h3>
                      <p className="text-white text-xs leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Cyberpunk Theme */}
        <section className="relative py-16 overflow-hidden bg-black">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-radial from-cyan-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 mb-8 shadow-lg shadow-cyan-400/20 text-white font-semibold text-xs uppercase tracking-widest" style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}>
                <Phone className="w-3 h-3" />
                Modernize Your Call Center Today
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider" style={{
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}>
                  Ready to Transform
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-widest">
                    Your Contact Center?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-cyan-600/20 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-sm sm:text-base text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                Join <strong className="text-cyan-400">500+ businesses</strong> using DigitalBot.ai to deliver world-class customer experiences with AI call center technology. <strong className="text-cyan-400">Start your free trial today.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="bg-cyan-400 text-black hover:bg-cyan-300 font-bold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] flex items-center" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <Link href="/signup" className="flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </button>
                <button className="bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 font-bold px-10 py-4 text-sm tracking-widest uppercase transition-all" style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                }}>
                  <Link href="/contact" className="flex items-center">
                    <Phone className="mr-2 w-4 h-4" />
                    Book Consultation
                  </Link>
                </button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-medium uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <Check className="w-3 h-3" />
                  No Setup Fees
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-medium uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <Check className="w-3 h-3" />
                  Enterprise Security
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-medium uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <Check className="w-3 h-3" />
                  Dedicated Support
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-medium uppercase tracking-widest" style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}>
                  <Check className="w-3 h-3" />
                  Rapid Deployment
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








