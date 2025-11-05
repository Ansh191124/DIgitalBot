import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Check,
  Code,
  Globe,
  Headphones,
  MessageSquare,
  Shield,
  Smartphone,
  Zap,
  Phone,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Assistant Services | AI Call Center Solutions - DigitalBot.ai 2025",
  description: "Transform your business with AI voice assistant services. AI call center, customer support, sales agents & virtual receptionists. Trusted by 500+ businesses.",
  keywords: [
    "ai voice assistant services",
    "ai call center solutions",
    "ai customer support",
    "ai sales agent",
    "virtual receptionist ai",
    "voice automation software",
    "conversational ai platform",
    "ai voice bot services",
    "business phone automation",
    "ai appointment scheduling",
    "voice ai for business",
    "automated customer service",
    "ai voice technology",
    "enterprise voice ai",
    "ai phone system",
  ],
  openGraph: {
    title: "AI Voice Assistant Services | AI Call Center Solutions - DigitalBot.ai 2025",
    description: "Transform your business with AI voice assistant services. AI call center, customer support, sales agents & virtual receptionists. Trusted by 500+ businesses.",
    type: "website",
    url: "https://digitalbot.ai/services",
    images: [
      {
        url: "/images/ai-voice-agent.png",
        width: 1200,
        height: 630,
        alt: "AI Voice Assistant Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Assistant Services | AI Call Center Solutions - DigitalBot.ai 2025",
    description: "Transform your business with AI voice assistant services. AI call center, customer support, sales agents & virtual receptionists. Trusted by 500+ businesses.",
    images: ["/images/ai-voice-agent.png"],
  },
};

const services = [
  {
    icon: Phone,
    title: "AI Call Center",
    description:
      "24/7 automated call handling with intelligent routing, real-time analytics, and seamless CRM integration.",
    features: [
      "Unlimited concurrent calls",
      "Smart call routing",
      "Real-time transcriptions",
      "Multi-language support",
    ],
    popular: true,
    href: "/services/ai-call-center",
  },
  {
    icon: Headphones,
    title: "AI Customer Support",
    description:
      "Instant, personalized customer service that resolves issues 24/7 with human-like conversations.",
    features: [
      "Instant issue resolution",
      "Knowledge base integration",
      "Sentiment analysis",
      "Escalation protocols",
    ],
    popular: true,
    href: "/services/ai-customer-support",
  },
  {
    icon: Users,
    title: "AI Sales Agent",
    description:
      "Intelligent sales conversations that qualify leads, book appointments, and close deals automatically.",
    features: [
      "Lead qualification",
      "Product recommendations",
      "Objection handling",
      "Follow-up automation",
    ],
    popular: false,
    href: "/services/ai-sales-agent",
  },
  {
    icon: MessageSquare,
    title: "AI Virtual Receptionist",
    description:
      "Professional call answering and appointment scheduling that never misses a call or opportunity.",
    features: [
      "Call screening",
      "Appointment booking",
      "Message taking",
      "Calendar integration",
    ],
    popular: false,
    href: "/services/ai-virtual-receptionist",
  },
  {
    icon: Bot,
    title: "AI Voice Bot",
    description:
      "Custom voice bots for specific business workflows with natural conversations and smart integrations.",
    features: [
      "Custom workflows",
      "API integrations",
      "Voice customization",
      "Analytics dashboard",
    ],
    popular: false,
    href: "/services/ai-voice-bot",
  },
  {
    icon: Zap,
    title: "Voice Automation Software",
    description:
      "Enterprise-grade voice automation platform with advanced features and unlimited scalability.",
    features: [
      "No-code builder",
      "Enterprise security",
      "Custom integrations",
      "Dedicated support",
    ],
    popular: false,
    href: "/services/voice-automation-software",
  },
];

const industries = [
  { name: "Healthcare", icon: Headphones, description: "Patient scheduling & support" },
  { name: "Real Estate", icon: Globe, description: "Property inquiries & tours" },
  { name: "Hospitality", icon: Shield, description: "Reservations & guest services" },
  { name: "E-commerce", icon: Smartphone, description: "Order tracking & support" },
  { name: "Financial Services", icon: BarChart3, description: "Account support & queries" },
  { name: "Technology", icon: Code, description: "Technical support & demos" },
];

const stats = [
  { label: "Active Businesses", value: "500+", icon: Users },
  { label: "Conversations Handled", value: "2M+", icon: MessageSquare },
  { label: "Countries Served", value: "25+", icon: Globe },
  { label: "Average Response Time", value: "<1s", icon: Zap },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />

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
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What AI Voice Assistant Services Do We Offer?
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            We provide comprehensive AI voice assistant services including AI call centers, customer support automation, sales agents, and virtual receptionists. Trusted by <span className="font-bold text-orange-400">500+ businesses</span> across <span className="font-bold text-purple-400">25+ countries</span> to handle <span className="font-bold text-pink-400">2M+ conversations</span> monthly.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our AI Voice Assistant Services
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered voice solutions designed to automate and enhance every aspect of your business communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full group cursor-pointer">
                  {/* Numbered Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {service.popular && (
                    <Badge className="absolute -top-2 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg animate-pulse">
                      ⭐ Popular
                    </Badge>
                  )}

                  <CardHeader className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 mx-auto backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white mb-2 text-center group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-white/70 text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors"
                        >
                          <Check className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-center text-orange-400 group-hover:text-pink-400 transition-colors font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Our AI voice assistants are trusted across multiple industries to deliver exceptional customer experiences and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 mx-auto backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-white/60">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              How Do Our AI Voice Services Work?
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Get started in three simple steps and transform your business communication with AI voice technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation & Setup",
                description: "We analyze your business needs and configure your AI voice assistant with custom workflows, integrations, and brand personality.",
              },
              {
                step: "2",
                title: "Training & Integration",
                description: "Our team trains your AI on your specific use cases and seamlessly integrates with your existing CRM, phone system, and tools.",
              },
              {
                step: "3",
                title: "Launch & Optimize",
                description: "Go live with 24/7 AI voice support and continuously improve performance with real-time analytics and ongoing optimization.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  {item.step}
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:bg-white/10 transition-all text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses already using DigitalBot.ai to handle millions of customer conversations with AI voice technology. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Voice Assistant Services",
            "description": "Comprehensive AI voice assistant services including AI call center, customer support, sales agents, and virtual receptionists. Trusted by 500+ businesses across 25+ countries.",
            "provider": {
              "@type": "Organization",
              "name": "DigitalBot.ai",
              "url": "https://digitalbot.ai",
              "logo": "https://digitalbot.ai/images/logos/logo.svg",
              "foundingDate": "2024",
              "description": "Leading AI voice assistant platform serving 500+ businesses",
            },
            "serviceType": "AI Voice Assistant Services",
            "areaServed": {
              "@type": "GeoShape",
              "name": "Global - 25+ Countries",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Voice Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Call Center",
                    "description": "24/7 automated call handling with intelligent routing and real-time analytics",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Customer Support",
                    "description": "Instant, personalized customer service that resolves issues 24/7",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Sales Agent",
                    "description": "Intelligent sales conversations that qualify leads and book appointments",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Virtual Receptionist",
                    "description": "Professional call answering and appointment scheduling 24/7",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Voice Bot",
                    "description": "Custom voice bots for specific business workflows",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Voice Automation Software",
                    "description": "Enterprise-grade voice automation platform",
                  },
                },
              ],
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500",
            },
          }),
        }}
      />
    </main>
  );
}