import { Header } from "@/components/header"
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
    <main className="min-h-screen bg-white text-sky-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      
      {/* Hero Section - Optimized for Voice AI for Business keyword */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Voice AI for Business: Transform Customer Experience with Intelligent Automation
          </h1>
          <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">voice AI for business</span> that automates customer service, accelerates sales, and boosts productivity by 400%. Deploy in 48 hours with zero infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Start Free Trial - Voice AI for Business</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Schedule Live Demo</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Trusted by 10,000+ businesses worldwide • 4.9/5 rating • No credit card required
          </p>
        </div>
      </section>

      {/* Introduction Section - SEO Rich Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50/30">
        <div className="container mx-auto max-w-5xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              What is Voice AI for Business? The Complete Guide
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Voice AI for business</strong> represents the cutting edge of enterprise automation technology, combining advanced natural language processing, machine learning, and conversational AI to revolutionize how companies interact with customers. Unlike traditional IVR systems or simple chatbots, modern voice AI for business understands context, intent, and nuance in human speech, delivering experiences that feel remarkably natural and helpful.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Today's businesses face unprecedented challenges: rising customer expectations, 24/7 availability demands, global talent shortages, and pressure to reduce operational costs while improving service quality. <strong>Voice AI for business</strong> solves these challenges by providing scalable, intelligent automation that handles thousands of simultaneous conversations with consistent quality, emotional intelligence, and brand alignment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The technology powering voice AI for business has reached a tipping point. Recent breakthroughs in large language models, speech synthesis, and real-time processing enable AI systems to conduct sophisticated multi-turn conversations, handle complex business logic, integrate with enterprise systems, and provide personalized experiences at a fraction of the cost of human-only operations.
            </p>
          </article>
        </div>
      </section>

      {/* Benefits Grid - Enhanced with SEO-rich content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Why Leading Enterprises Choose Voice AI for Business
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how voice AI for business transforms operations, drives revenue growth, and delivers measurable ROI across every customer touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-linear-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sky-700 text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - ASO & VSO Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Voice AI for Business: Real-World Applications & Results
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how businesses across industries leverage voice AI to achieve breakthrough performance improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <Card key={i} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sky-700 text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mb-4">
                    {useCase.description}
                  </CardDescription>
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ✓ {useCase.results}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Technical depth for GEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Advanced Capabilities: How Voice AI for Business Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Enterprise-grade technology stack powering the most sophisticated voice AI for business solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-4 flex items-center gap-3">
                <BrainCircuit className="h-8 w-8 text-sky-600" />
                Natural Language Understanding
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our voice AI for business leverages state-of-the-art transformer models trained on billions of business conversations to understand customer intent with 98% accuracy. The system recognizes context, handles multi-turn dialogues, and adapts to regional accents and industry-specific terminology.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Sentiment analysis for emotional intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Intent classification across 500+ business scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Entity extraction for accurate data capture</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-4 flex items-center gap-3">
                <Workflow className="h-8 w-8 text-sky-600" />
                Enterprise Integration Ecosystem
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voice AI for business seamlessly connects with your existing technology stack through 200+ pre-built integrations and robust API infrastructure. Connect to CRM platforms, helpdesk systems, payment processors, and custom databases without writing code.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Salesforce, HubSpot, Zendesk native integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>RESTful API for custom business workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Webhook support for real-time event processing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-4 flex items-center gap-3">
                <Phone className="h-8 w-8 text-sky-600" />
                Omnichannel Voice Deployment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deploy voice AI for business across phone systems, web applications, mobile apps, and messaging platforms with unified conversation management. Maintain context as customers switch channels, ensuring seamless experiences regardless of touchpoint.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>PSTN phone integration with carrier-grade reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>WebRTC for browser-based voice interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Mobile SDK for iOS and Android applications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-sky-600" />
                Enterprise Security & Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voice AI for business built on zero-trust architecture with military-grade encryption, comprehensive audit logging, and compliance with global data protection regulations. Your customer data remains secure, private, and under your complete control.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>SOC 2 Type II, GDPR, HIPAA, PCI DSS certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>End-to-end AES-256 encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Role-based access control with SSO integration</span>
                </li>
              </ul>
            </div>
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
              <span className="font-medium">Voice AI for Business Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Experience Voice AI for Business in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to how our voice AI for business handles real customer interactions with natural, intelligent responses that drive satisfaction and conversion.
            </p>
          </div>

          <VoiceConversationPlayer audioSrc="/sample-conversation.mp3" />
        </div>
      </section>

      {/* FAQ Section - Optimized for Answer Search & Voice Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions About Voice AI for Business
            </h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about implementing voice AI for business operations.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">What is voice AI for business?</h3>
              <p className="text-gray-700 leading-relaxed">
                Voice AI for business is an advanced artificial intelligence technology that enables companies to automate customer interactions, sales processes, and support operations through natural voice conversations. It combines speech recognition, natural language processing, and machine learning to handle business communications at scale, operating 24/7 with human-like understanding and response capabilities.
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">How does voice AI improve business productivity?</h3>
              <p className="text-gray-700 leading-relaxed">
                Voice AI for business boosts productivity by automating 80% of routine customer interactions, operating 24/7 without breaks, scaling instantly during peak demand, and freeing human teams to focus on complex, high-value tasks that require emotional intelligence and creative problem-solving. Companies typically see 300-400% productivity increases within the first 6 months of deployment.
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Is voice AI for business secure and compliant?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, enterprise voice AI solutions provide bank-level security with SOC 2, GDPR, and HIPAA compliance, featuring end-to-end encryption, secure data storage, role-based access controls, and comprehensive audit trails to protect sensitive business and customer information. All data is encrypted at rest and in transit using AES-256 encryption.
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">How quickly can voice AI be deployed for business?</h3>
              <p className="text-gray-700 leading-relaxed">
                Voice AI for business can be deployed in 24-48 hours with zero infrastructure setup required. The cloud-based platform integrates seamlessly with existing business systems, CRM, and communication tools through 200+ pre-built integrations, allowing companies to start automating conversations immediately without technical complexity.
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">What ROI can businesses expect from voice AI?</h3>
              <p className="text-gray-700 leading-relaxed">
                Businesses implementing voice AI typically see 300-400% productivity increases, $250K+ annual cost savings on customer service operations, 60% reduction in appointment no-shows, 350% improvement in sales team efficiency, and 95%+ customer satisfaction scores within the first 6 months of deployment. The average ROI payback period is under 3 months.
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Can voice AI integrate with my existing business systems?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Voice AI for business offers 200+ native integrations with popular platforms like Salesforce, HubSpot, Zendesk, Microsoft Dynamics, and more. Additionally, robust RESTful APIs and webhook support enable custom integrations with proprietary systems, ensuring seamless data flow across your entire technology ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-600 via-sky-500 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Business with Voice AI?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join 10,000+ businesses using voice AI to automate customer service, accelerate sales, and boost productivity by 400%. Start your free trial today with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 shadow-xl text-lg px-8 py-6" asChild>
              <Link href="/signup">Start Free Trial - Voice AI for Business</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <Link href="/contact">Talk to Voice AI Specialist</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ No credit card required  ✓ Deploy in 48 hours  ✓ 24/7 expert support  ✓ Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
