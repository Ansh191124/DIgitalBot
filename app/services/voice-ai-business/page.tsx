import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoiceConversationPlayer } from "@/components/voice-conversation-player"
import { Building2, TrendingUp, Shield, Clock, Mic, Phone, Users, Zap, Target, BarChart3, HeadphonesIcon, BrainCircuit, Workflow } from "lucide-react"
import Link from "next/link"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is voice AI for business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voice AI for business is an advanced artificial intelligence technology that enables companies to automate customer interactions, sales processes, and support operations through natural voice conversations. It combines speech recognition, natural language processing, and machine learning to handle business communications at scale."
      }
    },
    {
      "@type": "Question",
      "name": "How does voice AI improve business productivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voice AI for business boosts productivity by automating 80% of routine customer interactions, operating 24/7 without breaks, scaling instantly during peak demand, and freeing human teams to focus on complex, high-value tasks that require emotional intelligence and creative problem-solving."
      }
    },
    {
      "@type": "Question",
      "name": "Is voice AI for business secure and compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, enterprise voice AI solutions provide bank-level security with SOC 2, GDPR, and HIPAA compliance, featuring end-to-end encryption, secure data storage, role-based access controls, and comprehensive audit trails to protect sensitive business and customer information."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can voice AI be deployed for business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voice AI for business can be deployed in 24-48 hours with zero infrastructure setup required. The cloud-based platform integrates seamlessly with existing business systems, CRM, and communication tools, allowing companies to start automating conversations immediately."
      }
    },
    {
      "@type": "Question",
      "name": "What ROI can businesses expect from voice AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Businesses implementing voice AI typically see 300-400% productivity increases, $250K+ annual cost savings on customer service, 60% reduction in no-shows, and 350% improvement in sales team efficiency within the first 6 months of deployment."
      }
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Voice AI for Business - Enterprise Voice Automation",
  "description": "Enterprise-grade voice AI for business that automates customer service, sales, and support operations with natural language conversations, 24/7 availability, and seamless integration.",
  "brand": {
    "@type": "Organization",
    "name": "DigitalBot"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "url": "https://www.digitalbot.ai/services/voice-ai-business"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "847"
  }
}

const benefits = [
  {
    icon: Building2,
    title: "Enterprise-Ready Voice AI Solutions",
    description: "Deploy scalable voice AI for business operations with enterprise-grade infrastructure designed for high-volume customer interactions and mission-critical communications."
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth Acceleration",
    description: "Boost business productivity by 400% with intelligent voice AI automation that handles customer inquiries, lead qualification, and sales conversations 24/7 without human intervention."
  },
  {
    icon: Shield,
    title: "Bank-Level Security & Compliance",
    description: "Voice AI for business with SOC 2, GDPR, HIPAA compliance ensuring your customer data remains protected with end-to-end encryption and secure cloud infrastructure."
  },
  {
    icon: Clock,
    title: "24/7 Intelligent Operations",
    description: "Never miss a business opportunity with always-on voice AI that manages customer service, appointment scheduling, and sales inquiries round-the-clock across global time zones."
  },
  {
    icon: Users,
    title: "Seamless Team Integration",
    description: "Voice AI for business integrates perfectly with your existing CRM, helpdesk, and communication tools, empowering your team with AI-powered assistance and automation."
  },
  {
    icon: Zap,
    title: "Instant Deployment & Scaling",
    description: "Launch your voice AI for business in under 48 hours with zero infrastructure setup, scaling effortlessly from 10 to 10,000 concurrent conversations based on demand."
  },
  {
    icon: Target,
    title: "Precision Customer Targeting",
    description: "Advanced voice AI analytics identify customer intent, sentiment, and behavior patterns, enabling personalized business strategies that increase conversion rates by 300%."
  },
  {
    icon: BarChart3,
    title: "Real-Time Business Intelligence",
    description: "Comprehensive voice AI dashboards provide actionable insights on customer interactions, operational efficiency, and ROI metrics to drive data-informed business decisions."
  },
  {
    icon: HeadphonesIcon,
    title: "Superior Customer Experience",
    description: "Deliver exceptional service with voice AI that understands natural language, handles complex queries, and maintains consistent brand voice across all business touchpoints."
  }
]

const useCases = [
  {
    title: "Customer Service Automation",
    description: "Voice AI for business revolutionizes customer support by handling 80% of routine inquiries automatically, reducing wait times from minutes to seconds while maintaining 95% customer satisfaction scores.",
    results: "Save $250K+ annually on support costs"
  },
  {
    title: "Sales & Lead Qualification",
    description: "Intelligent voice AI qualifies leads, schedules demos, and nurtures prospects through personalized conversations, enabling your sales team to focus exclusively on high-value closing opportunities.",
    results: "Increase sales productivity by 350%"
  },
  {
    title: "Appointment Scheduling",
    description: "Eliminate scheduling friction with voice AI that manages calendars, sends reminders, handles rescheduling, and confirms appointments across your entire business operation autonomously.",
    results: "Reduce no-shows by 60%"
  },
  {
    title: "Order Processing & Tracking",
    description: "Voice AI for business streamlines order management by processing purchases, providing real-time shipment updates, and handling returns through natural voice conversations.",
    results: "Process 10x more orders with same team"
  }
]

export default function VoiceAIBusiness() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      
      <main className="min-h-screen">
      
      {/* Hero Section - Homepage Theme */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-orange-100 to-white" aria-labelledby="hero-heading">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          {/* Hero Badge */}
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
              🚀 Enterprise Voice AI Solutions
            </span>
          </div>

          {/* H1 Heading - Multi-line Homepage Style */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-3 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
              Voice AI for Business
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-black bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-2xl sm:text-3xl lg:text-5xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
              <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
              <span className="relative z-10">Transform Customer Experience</span>
            </span>
          </h1>

          {/* SEO-Rich Description */}
          <div className="max-w-4xl mx-auto mb-10 p-6 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-200 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
            <p className="text-lg sm:text-xl text-black-300 leading-relaxed font-medium">
              Enterprise-grade <strong className="text-orange-600">voice AI for business</strong> that automates customer service, accelerates sales, and boosts productivity by <strong className="text-orange-600">400%</strong>. Deploy in <strong>48 hours</strong> with zero infrastructure.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:scale-105 text-black shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300 text-lg px-10 py-7 rounded-xl font-bold" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-10 py-7 rounded-xl font-bold" asChild>
              <Link href="/contact">Schedule Live Demo</Link>
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-black-400">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">10,000+ Businesses</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">No Credit Card Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - SEO Rich Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-radial from-orange-300 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-radial from-orange-300 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <article className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black font-bold text-xs uppercase tracking-wider shadow-lg border border-orange-300">
                  Complete Guide
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                  What is Voice AI for Business?
                </span>
              </h2>
            </div>
            <p className="text-lg text-black-300 mb-6 leading-relaxed">
              <strong>Voice AI for business</strong> represents the cutting edge of enterprise automation technology, combining advanced natural language processing, machine learning, and conversational AI to revolutionize how companies interact with customers. Unlike traditional IVR systems or simple chatbots, modern voice AI for business understands context, intent, and nuance in human speech, delivering experiences that feel remarkably natural and helpful.
            </p>
            <p className="text-lg text-black-300 mb-6 leading-relaxed">
              Today's businesses face unprecedented challenges: rising customer expectations, 24/7 availability demands, global talent shortages, and pressure to reduce operational costs while improving service quality. <strong>Voice AI for business</strong> solves these challenges by providing scalable, intelligent automation that handles thousands of simultaneous conversations with consistent quality, emotional intelligence, and brand alignment.
            </p>
            <p className="text-lg text-black-300 mb-6 leading-relaxed">
              The technology powering voice AI for business has reached a tipping point. Recent breakthroughs in large language models, speech synthesis, and real-time processing enable AI systems to conduct sophisticated multi-turn conversations, handle complex business logic, integrate with enterprise systems, and provide personalized experiences at a fraction of the cost of human-only operations.
            </p>
          </article>
        </div>
      </section>

      {/* Benefits Grid - Homepage Theme */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-100 to-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black font-bold text-xs uppercase tracking-wider shadow-lg border border-orange-300">
                Enterprise Benefits
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                Why Leading Enterprises Choose Voice AI
              </span>
            </h2>
            <p className="text-lg text-black-400 max-w-3xl mx-auto leading-relaxed">
              Discover how <strong className="text-orange-600">voice AI for business</strong> transforms operations and delivers measurable ROI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const colors = [
                { border: 'border-orange-400', iconBg: 'from-orange-500 to-orange-600', glow: 'from-orange-400 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-400 to-orange-500', glow: 'from-orange-400 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-400 to-orange-500', glow: 'from-orange-400 via-orange-500 to-orange-400' },
                { border: 'border-teal-400', iconBg: 'from-orange-500 to-orange-600', glow: 'from-orange-500 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-500 to-orange-500', glow: 'from-orange-400 via-orange-400 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-500 to-orange-600', glow: 'from-orange-400 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-400 to-orange-500', glow: 'from-orange-400 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', iconBg: 'from-orange-400 to-orange-500', glow: 'from-orange-400 via-orange-500 to-orange-400' },
                { border: 'border-teal-400', iconBg: 'from-orange-500 to-orange-600', glow: 'from-orange-500 via-orange-500 to-orange-600' },
              ];
              const color = colors[i % colors.length];

              return (
                <div key={i} className={`bg-white backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 ${color.border} transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden group`}>
                  <div className={`absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-br ${color.glow} rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-r ${color.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <benefit.icon className="h-7 w-7 text-black" />
                  </div>
                  <h3 className="text-xl font-extrabold text-black mb-4 relative z-10">{benefit.title}</h3>
                  <p className="text-black-400 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section - ASO & VSO Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-100 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-orange-500 via-orange-500 to-orange-700 bg-clip-text">
              Voice AI for Business: Real-World Applications & Results
            </h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              See how businesses across industries leverage voice AI to achieve breakthrough performance improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <Card key={i} className="border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-black-700 text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-black-300 text-base leading-relaxed mb-4">
                    {useCase.description}
                  </CardDescription>
                  <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                    ✓ {useCase.results}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Technical depth for GEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-100 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-orange-500 via-orange-500 to-orange-700 bg-clip-text ">
              Advanced Capabilities: How Voice AI for Business Works
            </h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Enterprise-grade technology stack powering the most sophisticated voice AI for business solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black-700 mb-4 flex items-center gap-3">
                <BrainCircuit className="h-8 w-8 text-black-600" />
                Natural Language Understanding
              </h3>
              <p className="text-black-300 leading-relaxed mb-4">
                Our voice AI for business leverages state-of-the-art transformer models trained on billions of business conversations to understand customer intent with 98% accuracy. The system recognizes context, handles multi-turn dialogues, and adapts to regional accents and industry-specific terminology.
              </p>
              <ul className="space-y-2 text-black-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Sentiment analysis for emotional intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Intent classification across 500+ business scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Entity extraction for accurate data capture</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black-700 mb-4 flex items-center gap-3">
                <Workflow className="h-8 w-8 text-black-600" />
                Enterprise Integration Ecosystem
              </h3>
              <p className="text-black-300 leading-relaxed mb-4">
                Voice AI for business seamlessly connects with your existing technology stack through 200+ pre-built integrations and robust API infrastructure. Connect to CRM platforms, helpdesk systems, payment processors, and custom databases without writing code.
              </p>
              <ul className="space-y-2 text-black-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Salesforce, HubSpot, Zendesk native integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>RESTful API for custom business workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Webhook support for real-time event processing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black-700 mb-4 flex items-center gap-3">
                <Phone className="h-8 w-8 text-black-600" />
                Omnichannel Voice Deployment
              </h3>
              <p className="text-black-300 leading-relaxed mb-4">
                Deploy voice AI for business across phone systems, web applications, mobile apps, and messaging platforms with unified conversation management. Maintain context as customers switch channels, ensuring seamless experiences regardless of touchpoint.
              </p>
              <ul className="space-y-2 text-black-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>PSTN phone integration with carrier-grade reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>WebRTC for browser-based voice interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Mobile SDK for iOS and Android applications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black-700 mb-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-black-600" />
                Enterprise Security & Compliance
              </h3>
              <p className="text-black-300 leading-relaxed mb-4">
                Voice AI for business built on zero-trust architecture with military-grade encryption, comprehensive audit logging, and compliance with global data protection regulations. Your customer data remains secure, private, and under your complete control.
              </p>
              <ul className="space-y-2 text-black-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>SOC 2 Type II, GDPR, HIPAA, PCI DSS certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>End-to-end AES-256 encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Role-based access control with SSO integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Conversation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-400relative overflow-hidden">
        {/* Background with gradient orbs - matching hero section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-orange-100/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-100/10 to-transparent rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-black-700 backdrop-blur-sm border border-orange-200/60 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-black-500 animate-pulse" />
              <span className="font-medium">Voice AI for Business Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-orange-500 via-orange-500 to-orange-700 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Experience Voice AI for Business in Action
            </h2>
            <p className="text-lg text-black-400 max-w-2xl mx-auto">
              Listen to how our voice AI for business handles real customer interactions with natural, intelligent responses that drive satisfaction and conversion.
            </p>
          </div>

          <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
        </div>
      </section>

      {/* FAQ Section - Homepage Dark Theme */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-100 to-white relative overflow-hidden" role="region" aria-labelledby="faq-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse">
                Got Questions? We've Got Answers
              </span>
            </div>
            <h2 id="faq-section" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-black">
              <span className="block mb-2">Frequently Asked</span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-black-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about <span className="text-orange-400 font-semibold">Voice AI for Business</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What is voice AI for business?",
                answer: "Voice AI for business is an advanced artificial intelligence technology that enables companies to automate customer interactions, sales processes, and support operations through natural voice conversations. It combines speech recognition, natural language processing, and machine learning to handle business communications at scale, operating 24/7 with human-like understanding and response capabilities.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' }
              },
              {
                question: "How does voice AI improve business productivity?",
                answer: "Voice AI for business boosts productivity by automating 80% of routine customer interactions, operating 24/7 without breaks, scaling instantly during peak demand, and freeing human teams to focus on complex, high-value tasks that require emotional intelligence and creative problem-solving. Companies typically see 300-400% productivity increases within the first 6 months of deployment.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' }
              },
              {
                question: "Is voice AI for business secure and compliant?",
                answer: "Yes, enterprise voice AI solutions provide bank-level security with SOC 2, GDPR, and HIPAA compliance, featuring end-to-end encryption, secure data storage, role-based access controls, and comprehensive audit trails to protect sensitive business and customer information. All data is encrypted at rest and in transit using AES-256 encryption.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-400 to-orange-500', textGradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-500/50' }
              },
              {
                question: "How quickly can voice AI be deployed for business?",
                answer: "Voice AI for business can be deployed in 24-48 hours with zero infrastructure setup required. The cloud-based platform integrates seamlessly with existing business systems, CRM, and communication tools through 200+ pre-built integrations, allowing companies to start automating conversations immediately without technical complexity.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-500 to-orange-600', shadow: 'hover:shadow-orange-500/50' }
              },
              {
                question: "What ROI can businesses expect from voice AI?",
                answer: "Businesses implementing voice AI typically see 300-400% productivity increases, $250K+ annual cost savings on customer service operations, 60% reduction in appointment no-shows, 350% improvement in sales team efficiency, and 95%+ customer satisfaction scores within the first 6 months of deployment. The average ROI payback period is under 3 months.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' }
              },
              {
                question: "Can voice AI integrate with my existing business systems?",
                answer: "Absolutely. Voice AI for business offers 200+ native integrations with popular platforms like Salesforce, HubSpot, Zendesk, Microsoft Dynamics, and more. Additionally, robust RESTful APIs and webhook support enable custom integrations with proprietary systems, ensuring seamless data flow across your entire technology ecosystem.",
                color: { border: 'border-orange-500/30 hover:border-orange-400', gradient: 'from-orange-500 to-orange-600', textGradient: 'from-orange-400 to-orange-600', shadow: 'hover:shadow-orange-500/50' }
              }
            ].map((faq, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border ${faq.color.border} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${faq.color.shadow}`}>
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${faq.color.gradient} rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${faq.color.textGradient} bg-clip-text text-transparent mb-4 mt-2`}>
                  {faq.question}
                </h3>
                <p className="text-black-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Homepage Theme */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-100 to-white relative overflow-hidden" aria-labelledby="cta-heading">
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

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          {/* CTA Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-300">
              🚀 Start Your Free Trial
            </span>
          </div>

          {/* CTA Heading */}
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-3 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent">
              Ready to Transform Your Business
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-black bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-2xl sm:text-3xl lg:text-5xl relative overflow-hidden border-2 border-orange-300">
              <span className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></span>
              <span className="relative z-10">With Voice AI Today?</span>
            </span>
          </h2>

          {/* CTA Description */}
          <div className="max-w-3xl mx-auto mb-10 p-6 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-200 border-2 border-orange-400 rounded-2xl shadow-2xl backdrop-blur-md">
            <p className="text-lg sm:text-xl text-black-300 leading-relaxed font-medium">
              Join <strong className="text-orange-600">10,000+ businesses</strong> using voice AI to automate customer service, accelerate sales, and boost productivity by <strong className="text-orange-600">400%</strong>. Start your free trial today with no credit card required.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:scale-105 text-black shadow-2xl hover:shadow-orange-400 transition-all duration-300 border-2 border-orange-300 text-lg px-10 py-7 rounded-xl font-bold" asChild>
              <Link href="/signup">Start Free Trial Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-orange-400 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-10 py-7 rounded-xl font-bold" asChild>
              <Link href="/contact">Talk to Voice AI Specialist</Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-black-400">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">Deploy in 48 Hours</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-400 shadow-lg">
              <span className="text-orange-600 font-bold">✓</span>
              <span className="font-semibold">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}








