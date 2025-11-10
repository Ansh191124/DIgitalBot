import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb, ArrowRight, Building2, Globe, Shield, Zap, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About DigitalBot.ai - Leading AI Voice Agent & Voice Assistant Company 2025",
  description: "Learn about DigitalBot.ai, the innovative AI voice agent and voice assistant platform. Founded 2024, serving 500+ businesses with 2M+ conversations. 99.9% uptime, 24/7 AI automation.",
  keywords: "about digitalbot, ai voice agent company, voice assistant platform, ai company, conversational ai company, voice ai technology, ai automation company, digital voice assistant, ai customer service company, voice agent provider, ai voice technology company, enterprise ai voice, business automation company, ai voice solutions, voice assistant technology company",
  openGraph: {
    title: "About DigitalBot.ai - Leading AI Voice Agent & Voice Assistant Company 2025",
    description: "Learn about DigitalBot.ai, the innovative AI voice agent and voice assistant platform. Founded 2024, serving 500+ businesses with 2M+ conversations.",
    url: "https://digitalbot.ai/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DigitalBot.ai - Leading AI Voice Agent & Voice Assistant Company 2025",
    description: "Learn about DigitalBot.ai, the innovative AI voice agent platform. Founded 2024, serving 500+ businesses with 2M+ conversations.",
  },
  alternates: {
    canonical: "https://digitalbot.ai/about",
  },
}

const values = [
  {
    icon: Target,
    title: "Customer-Centric",
    description: "Every AI voice agent feature we build is designed to solve real customer problems and drive measurable business value.",
    color: "from-orange-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of AI voice assistant technology to deliver cutting-edge conversational experiences.",
    color: "from-orange-500 to-orange-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in AI voice agent accuracy, security, and performance.",
    color: "from-orange-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of human-AI voice collaboration to transform business communication.",
    color: "from-violet-500 to-indigo-500"
  },
]

const milestones = [
  {
    year: "2024 Q1",
    title: "Founded DigitalBot.ai",
    description: "Started with a vision to democratize AI voice agent technology for businesses worldwide",
    icon: Building2
  },
  {
    year: "2024 Q2",
    title: "First 100 Customers",
    description: "Reached our first milestone serving 100+ businesses with AI voice assistant solutions",
    icon: TrendingUp
  },
  {
    year: "2024 Q3",
    title: "Platform Launch",
    description: "Officially launched AI voice agent platform with multi-language support and analytics dashboard",
    icon: Globe
  },
  {
    year: "2024 Q4",
    title: "1M+ Conversations",
    description: "Processed over 1 million AI voice assistant conversations with high accuracy rates",
    icon: Zap
  },
  {
    year: "2025",
    title: "Rapid Growth & Expansion",
    description: "Growing rapidly with hundreds of businesses adopting our AI voice agent platform",
    icon: Award
  },
]

const stats = [
  { number: "500+", label: "Active Businesses Using AI Voice Agents", color: "from-orange-500 to-orange-500" },
  { number: "2M+", label: "AI Voice Assistant Conversations", color: "from-orange-500 to-orange-500" },
  { number: "99.9%", label: "AI Voice Agent Uptime SLA", color: "from-orange-500 to-orange-500" },
  { number: "24/7", label: "AI Voice Support Availability", color: "from-violet-500 to-indigo-500" },
  { number: "25+", label: "Countries Served Globally", color: "from-orange-500 to-orange-500" },
  { number: "<500ms", label: "AI Voice Response Time", color: "from-orange-500 to-orange-500" },
]

export default function About() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section - Voice Search Optimized */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <PageBackground />

          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            {/* Breadcrumb for SEO */}
            <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
              <ol className="flex justify-center items-center gap-2">
                <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                <li>/</li>
                <li className="text-orange-400 font-semibold">About</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg leading-tight">
              About DigitalBot.ai - AI Voice Agent Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">AI voice agent technology</span>, making intelligent <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">AI voice assistants</span> accessible to businesses of all sizes.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:border-orange-400/50 transition-all hover:scale-105 hover:shadow-orange-400/30">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are - Answer Search Optimized */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="who-we-are">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Who We Are: Leading AI Voice Agent Company
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What is DigitalBot.ai?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>DigitalBot.ai is an innovative AI voice agent and AI voice assistant platform</strong> founded in 2024. We specialize in creating intelligent conversational AI solutions that enable businesses to automate customer service, sales, and support through advanced voice technology.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our <strong>AI voice agent platform</strong> serves <strong>500+ businesses worldwide</strong>, processing more than <strong>2 million AI voice assistant conversations</strong> with industry-leading accuracy and reliability.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Why Choose DigitalBot.ai?
                </h3>
                <ul className="space-y-3">
                  {[
                    "24/7 AI voice agent availability - never sleeps, never takes breaks",
                    "99.9% uptime SLA for enterprise reliability",
                    "<500ms AI voice response time for natural conversations",
                    "25+ countries served with multi-language support",
                    "Enterprise-grade security and HIPAA compliance",
                    "Personal analytics dashboard for real-time insights"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent mb-6">
                    AI Voice Agent Platform Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story - GEO Optimized */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="our-story">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Our AI Voice Agent Journey: From Startup to Global Leader
            </h2>

            <div className="mb-16">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How Did DigitalBot.ai Start?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>Founded in early 2024</strong>, DigitalBot.ai emerged from a simple observation: businesses were struggling to provide <strong>24/7 customer support</strong> while maintaining quality and personal touch. Our founders, with backgrounds in <strong>AI research and enterprise software</strong>, saw an opportunity to revolutionize customer service with <strong>AI voice agent technology</strong>.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The problem was clear: traditional customer service was expensive, limited by business hours, and couldn't scale. We asked ourselves: <strong>"What if AI voice assistants could handle customer conversations as naturally as humans, but 24/7 without breaks?"</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In just one year, we've grown to serve <strong>over 500 businesses worldwide</strong>, processing <strong>millions of AI voice assistant conversations</strong>. Our AI voice agents have evolved rapidly to become sophisticated conversational agents that understand context, emotion, and intent with <strong>high accuracy</strong>.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Milestones in AI Voice Agent Innovation
              </h3>
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${values[idx % 4].color} flex items-center justify-center shadow-xl`}>
                        <milestone.icon className="w-8 h-8 text-gray-900" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:border-orange-400/50 transition-all hover:scale-[1.02] hover:shadow-orange-400/30">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${values[idx % 4].color} text-gray-900 font-bold text-sm mb-3`}>
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="our-values">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                Our AI Voice Agent Core Values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The principles that guide how we build the best <strong>AI voice agent and voice assistant platform</strong> for businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group text-center border border-gray-700/50 hover:border-orange-400/50 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-orange-400/30 hover:scale-105 transition-all"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                      <value.icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <CardTitle className="text-gray-900 text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Search Q&A - VSO Optimized - Purple/Orange Theme */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="faq" role="region" aria-labelledby="faq-section">
          {/* Animated Background Elements - Purple/Orange */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-orange-500 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_80px_rgba(249,115,22,0.3)]"></div>
            <div className="absolute top-16 right-1/3 w-56 h-56 bg-orange-400 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_100px_rgba(249,115,22,0.3)]"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_120px_rgba(249,115,22,0.25)]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_100px_rgba(249,115,22,0.3)]"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 id="faq-section" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                Common Questions About DigitalBot.ai
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get answers to frequently asked questions about our AI voice agent platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  q: "What does DigitalBot.ai do?",
                  a: "DigitalBot.ai provides AI voice agent and AI voice assistant platform that enables businesses to automate customer service, sales, and support 24/7. Our AI voice agents handle conversations naturally, understand context, and provide instant responses without human intervention.",
                  gradient: "from-orange-500 to-orange-500"
                },
                {
                  number: "02",
                  q: "When was DigitalBot.ai founded?",
                  a: "DigitalBot.ai was founded in 2024 by AI research and enterprise software experts. We've rapidly grown to serve 500+ businesses worldwide with 2 million+ AI voice assistant conversations processed.",
                  gradient: "from-orange-500 to-orange-500"
                },
                {
                  number: "03",
                  q: "How many businesses use DigitalBot.ai?",
                  a: "Over 500 businesses worldwide use DigitalBot.ai's AI voice agent platform across 25+ countries. We process 2 million+ AI voice assistant conversations with 99.9% uptime and enterprise-grade reliability.",
                  gradient: "from-orange-500 to-orange-500"
                },
                {
                  number: "04",
                  q: "What makes DigitalBot.ai different from other AI voice platforms?",
                  a: "DigitalBot.ai offers 24/7 AI voice agents with <500ms response time, 99.9% uptime SLA, multi-language support, personal analytics dashboard, and enterprise-grade security. Our AI voice assistants understand context, emotion, and intent with industry-leading accuracy.",
                  gradient: "from-violet-500 to-indigo-500"
                },
                {
                  number: "05",
                  q: "Is DigitalBot.ai secure and compliant?",
                  a: "Yes, DigitalBot.ai maintains enterprise-grade security with HIPAA compliance, SOC 2 certification, and end-to-end encryption. Our AI voice agent platform ensures your data is protected with 99.9% uptime SLA and 24/7 monitoring.",
                  gradient: "from-orange-500 to-orange-500"
                },
                {
                  number: "06",
                  q: "How quickly can I deploy an AI voice agent?",
                  a: "You can deploy an AI voice agent in minutes with DigitalBot.ai. Our platform offers pre-built templates, easy integration, and instant activation. Start your free 14-day trial today with no credit card required.",
                  gradient: "from-orange-500 to-orange-500"
                }
              ].map((faq, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-400/30"
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${faq.gradient} text-gray-900 font-bold text-lg mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    {faq.number}
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                    {faq.q}
                  </h3>

                  {/* Answer */}
                  <p className="text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business with AI Voice Agents?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses using DigitalBot.ai's AI voice assistant platform. Start automating your customer service today with our free 14-day trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/50 hover:scale-105 rounded-full px-8 py-6 text-lg font-bold shadow-2xl shadow-orange-500/40 transition-all">
                  Start Free 14-Day Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full px-8 py-6 text-lg font-bold transition-all">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "DigitalBot.ai",
                "alternateName": "DigitalBot AI Voice Agent Platform",
                "url": "https://digitalbot.ai",
                "logo": "https://digitalbot.ai/logo.png",
                "foundingDate": "2024",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "DigitalBot.ai Founders"
                  }
                ],
                "description": "DigitalBot.ai is an innovative AI voice agent and AI voice assistant platform founded in 2024. We serve 500+ businesses worldwide with 2 million+ conversations, 99.9% uptime, and 24/7 AI automation.",
                "slogan": "AI Voice Agents That Never Sleep",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "10-50"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide - 25+ Countries"
                },
                "knowsAbout": ["AI Voice Agent", "AI Voice Assistant", "Conversational AI", "Voice Automation", "Customer Service AI", "Voice Technology", "Natural Language Processing"],
                "sameAs": [
                  "https://twitter.com/digitalbot_ai",
                  "https://linkedin.com/company/digitalbot-ai"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "500",
                  "bestRating": "5"
                }
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "#who-we-are", "#our-story"]
              }
            })
          }}
        />
      </main>

      <Footer />
    </>
  )
}





