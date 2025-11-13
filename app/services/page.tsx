import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageBackground } from "@/components/page-background";
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
    <main className="min-h-screen bg-white text-black-900 relative overflow-hidden">
      <Header />

      {/* Hero Section - Creative Design */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <PageBackground />

        {/* Decorative Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 via-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-orange-400/20 via-orange-600/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-reverse"></div>
        
        <div className="relative z-10 container mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border-2 border-orange-200 shadow-lg">
              <li>
                <Link href="/" className="text-black-400 hover:text-orange-400 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li className="text-black-400">→</li>
              <li className="text-orange-400 font-bold">Services</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="block mb-3 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              What AI Voice Assistant
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-black-900 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 shadow-2xl text-3xl sm:text-4xl lg:text-5xl relative overflow-hidden border-2 border-orange-300 animate-gradient">
              <span className="absolute inset-0 bg-gradient-to-tr text-black30 via-transparent to-transparent"></span>
              <span className="relative z-10">Services Do We Offer?</span>
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-gradient-to-r text-black10 to-white/5 border-2 border-orange-400/50 rounded-2xl shadow-2xl backdrop-blur-md">
            <p className="text-xl sm:text-2xl text-black-300 leading-relaxed">
              We provide <span className="font-bold text-orange-400">comprehensive AI voice assistant services</span> including AI call centers, customer support automation, sales agents, and virtual receptionists. 
              Trusted by <span className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">500+ businesses</span> across <span className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">25+ countries</span> to handle <span className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">2M+ conversations</span> monthly.
            </p>
          </div>
          
          {/* Stats Grid - Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const colors = [
                { border: 'border-orange-400', gradient: 'from-orange-500 to-orange-500', shadow: 'hover:shadow-orange-300', glow1: 'from-orange-400 via-orange-500 to-orange-600', glow2: 'from-orange-400 via-orange-600 to-orange-600' },
                { border: 'border-orange-400', gradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-300', glow1: 'from-orange-400 via-orange-600 to-orange-600', glow2: 'from-orange-400 via-orange-500 to-orange-400' },
                { border: 'border-orange-400', gradient: 'from-orange-400 to-orange-500', shadow: 'hover:shadow-orange-300', glow1: 'from-orange-400 via-orange-500 to-orange-400', glow2: 'from-orange-400 via-orange-500 to-orange-600' },
                { border: 'border-orange-400', gradient: 'from-orange-500 to-orange-500', shadow: 'hover:shadow-orange-300', glow1: 'from-orange-400 via-orange-400 to-orange-400', glow2: 'from-orange-400 via-orange-500 to-orange-600' },
              ];
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={index}
                  className={`bg-white backdrop-blur-md rounded-2xl p-6 border-2 ${color.border} ${color.shadow} shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr ${color.glow1} rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-bl ${color.glow2} rounded-full opacity-20 filter blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 text-${color.gradient.split('-')[1].split(' ')[0]}-500 relative z-10`} />
                  <div className={`text-3xl font-extrabold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent mb-1 relative z-10 animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-black-300 font-semibold relative z-10">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-black-900 hover:scale-105 transition-all rounded-xl px-8 py-6 text-lg shadow-2xl hover:shadow-orange-400 border-2 border-orange-300 animate-gradient">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-2 border-orange-500 text-black-900 hover:bg-cyan-500/20 rounded-xl px-8 py-6 text-lg shadow-lg hover:scale-105 transition-all">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced Creative Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 via-orange-500/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300/20 via-orange-400/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-black-900 font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-white">
                ⭐ Premium AI Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              <span className="block mb-2 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                Our AI Voice Assistant
              </span>
              <span className="inline-block px-6 py-3 rounded-xl text-black-900 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 shadow-2xl border-2 border-orange-400">
                Service Suite
              </span>
            </h2>
            <p className="text-lg text-black-400 max-w-3xl mx-auto leading-relaxed">
              Choose from our <span className="font-bold text-orange-400">comprehensive suite</span> of AI-powered voice solutions designed to <span className="font-bold text-orange-400">automate and enhance</span> every aspect of your business communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const borderColors = ['border-orange-300', 'border-orange-400', 'border-orange-400', 'border-orange-400', 'border-orange-300', 'border-orange-400'];
              const hoverBorderColors = ['hover:border-orange-500', 'hover:border-orange-500', 'hover:border-orange-500', 'hover:border-orange-500', 'hover:border-orange-500', 'hover:border-orange-500'];
              const shadowColors = ['hover:shadow-orange-200', 'hover:shadow-orange-200', 'hover:shadow-orange-200', 'hover:shadow-orange-200', 'hover:shadow-orange-200', 'hover:shadow-orange-200'];
              
              return (
                <Link key={index} href={service.href}>
                  <Card className={`relative bg-white border-2 ${borderColors[index]} ${hoverBorderColors[index]} rounded-3xl hover:scale-105 ${shadowColors[index]} shadow-xl hover:shadow-2xl transition-all duration-500 h-full group cursor-pointer overflow-hidden`}>
                    {/* Decorative Glow Effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 via-orange-400/30 to-orange-300/30 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
                    
                    {/* Numbered Badge - Enhanced */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center font-extrabold text-black-900 text-xl shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border-2 border-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {service.popular && (
                      <Badge className="absolute -top-2 right-4 bg-gradient-to-r from-orange-500 to-orange-500 text-black-900 shadow-lg animate-pulse border-2 border-white">
                        ⭐ Popular
                      </Badge>
                    )}

                    <CardHeader className="pt-10 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br text-black10 to-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-orange-300/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg backdrop-blur-md">
                        <service.icon className="h-10 w-10 text-orange-400" />
                      </div>
                      <CardTitle className="text-xl font-bold text-black-900 mb-3 text-center group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-black-400 text-center leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-black-300 group-hover:text-black-900 transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mr-3 flex-shrink-0">
                              <Check className="h-3 w-3 text-black-900" />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-center text-orange-400 group-hover:text-orange-400 transition-colors font-bold pt-4 border-t-2 border-gray-100">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-white to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.4) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(236, 72, 153, 0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-black-900 font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-white">
                🌍 Global Reach
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              <span className="block mb-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 bg-clip-text text-transparent">
                Industries We Serve
              </span>
              <span className="inline-block text-black-300 text-2xl font-semibold">
                Across <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">25+ Countries</span>
              </span>
            </h2>
            <p className="text-lg text-black-400 max-w-3xl mx-auto leading-relaxed">
              Our AI voice assistants are <span className="font-bold text-orange-400">trusted across multiple industries</span> to deliver exceptional customer experiences and <span className="font-bold text-orange-400">operational efficiency</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const colors = [
                { bg: 'text-black10 to-white/5', border: 'border-orange-300', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'text-black10 to-white/5', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'text-black10 to-white/5', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'text-black10 to-white/5', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'from-orange-100/10 via-green-100/5 to-emerald-100/5', border: 'border-orange-300', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'text-black10 to-white/5', border: 'border-orange-400', hover: 'hover:border-orange-500', icon: 'text-orange-400', shadow: 'hover:shadow-orange-200' },
              ];
              const color = colors[index % colors.length];
              
              return (
                <Card
                  key={index}
                  className={`bg-white border-2 ${color.border} ${color.hover} rounded-2xl hover:scale-105 shadow-lg ${color.shadow} hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
                >
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 via-orange-300/30 to-orange-200/30 rounded-full filter blur-2xl group-hover:blur-xl transition-all"></div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 ${color.border} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative z-10 backdrop-blur-md`}>
                      <industry.icon className={`h-10 w-10 ${color.icon}`} />
                    </div>
                    <h3 className={`text-xl font-bold text-black-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all relative z-10`}>
                      {industry.name}
                    </h3>
                    <p className="text-sm text-black-400 font-medium relative z-10">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/20 via-orange-400/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-300/20 via-orange-500/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-black-900 font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-white">
                🚀 Simple Setup
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              <span className="block mb-3 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                How Do Our AI Voice
              </span>
              <span className="inline-block px-8 py-4 rounded-2xl text-black-900 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 shadow-2xl border-2 border-orange-300">
                Services Work?
              </span>
            </h2>
            <p className="text-lg text-black-400 max-w-3xl mx-auto leading-relaxed">
              Get started in <span className="font-bold text-orange-400">three simple steps</span> and transform your business communication with <span className="font-bold text-orange-400">AI voice technology</span>.
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
            ].map((item, idx) => {
              const colors = [
                { gradient: 'from-orange-500 via-orange-500 to-orange-600', border: 'border-orange-300', hover: 'hover:border-orange-500', shadow: 'hover:shadow-orange-200', textGradient: 'from-orange-400 to-orange-500' },
                { gradient: 'from-orange-400 via-orange-500 to-orange-600', border: 'border-orange-400', hover: 'hover:border-orange-500', shadow: 'hover:shadow-orange-200', textGradient: 'from-orange-400 to-orange-500' },
                { gradient: 'from-orange-500 via-orange-500 to-orange-500', border: 'border-orange-400', hover: 'hover:border-orange-500', shadow: 'hover:shadow-orange-200', textGradient: 'from-orange-400 to-orange-500' },
              ];
              const color = colors[idx];
              
              return (
                <div
                  key={idx}
                  className={`relative bg-white rounded-3xl p-10 border-2 ${color.border} ${color.hover} hover:scale-105 ${color.shadow} shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 via-orange-400/30 to-orange-300/30 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
                  
                  {/* Step Number Badge - Enhanced */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center font-extrabold text-black-900 text-2xl shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border-4 border-white`}>
                    {item.step}
                  </div>

                  <div className="pt-12 relative z-10">
                    <h3 className={`text-2xl font-extrabold text-black-900 mb-4 text-center group-hover:bg-gradient-to-r group-hover:${color.textGradient} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                      {item.title}
                    </h3>
                    <p className="text-black-400 text-center leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Exactly like homepage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-white   relative overflow-hidden" role="region" aria-labelledby="faq-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full filter blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-black-900 font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse">
                Got Questions? We've Got Answers
              </span>
            </div>
            <h2 id="faq-section" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-black-900">
              <span className="block mb-2">Frequently Asked</span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-black-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about <span className="text-orange-400 font-semibold">AI Voice Assistant Services</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                What AI voice assistant services do you offer?
              </h3>
              <p className="text-black-300 leading-relaxed">
                We offer comprehensive AI voice solutions including AI call centers, customer support automation, sales agents, virtual receptionists, voice bots, and enterprise voice automation software. Each service is customizable to your business needs and integrates seamlessly with your existing systems.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                How quickly can I implement AI voice services?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Most businesses launch their AI voice assistant within 5-10 days. We handle setup, CRM integration, conversation training, and testing. Our team provides hands-on support to ensure smooth deployment and immediate value delivery.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                Which industries benefit from AI voice assistants?
              </h3>
              <p className="text-black-300 leading-relaxed">
                AI voice assistants transform healthcare, real estate, hospitality, e-commerce, financial services, and technology sectors. Any business with customer communication needs benefits from 24/7 availability, instant responses, and scalable automation without hiring additional staff.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                04
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                Can AI voice services integrate with my existing systems?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Yes! Our AI voice platform integrates with popular CRMs (Salesforce, HubSpot, Zoho), phone systems, help desk software, scheduling tools, and custom APIs. We ensure seamless data flow and real-time synchronization with your tech stack.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                05
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                What ROI can I expect from AI voice automation?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Businesses typically see 40-60% cost reduction, 85% faster response times, and 45% higher conversion rates. AI voice services deliver ROI within 30-60 days by eliminating staffing costs, reducing missed calls, and providing 24/7 availability without overtime or benefits.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                06
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                Is AI voice technology secure and compliant?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Absolutely. Our platform is SOC 2 and HIPAA compliant with end-to-end encryption, data privacy controls, GDPR compliance, and comprehensive audit trails. All conversations are encrypted and stored securely with role-based access controls.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                07
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                How does AI handle multiple languages?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Our AI voice assistants support 60+ languages with natural accents and context-aware translations. The system automatically detects the caller's language and responds fluently, making it perfect for global businesses serving diverse customer bases.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                08
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                What support do you provide after launch?
              </h3>
              <p className="text-black-300 leading-relaxed">
                We provide 24/7 technical support, regular performance optimization, conversation training updates, analytics reviews, and dedicated account management. Our team monitors your AI continuously and makes improvements based on real conversation data.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                09
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                Can I customize the AI voice and personality?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Yes! You can customize voice tone, personality, speaking style, and conversation flow to match your brand. Choose from multiple voice options, adjust response speeds, and train the AI on your specific terminology and brand guidelines.
              </p>
            </div>

            {/* FAQ 10 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                10
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                Do I need technical expertise to use AI voice services?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Not at all! Our platform features a no-code visual builder for creating and managing conversations. We handle all technical setup, integration, and maintenance. You simply define your business rules and we make the AI work for you.
              </p>
            </div>

            {/* FAQ 11 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                11
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 mt-2">
                How scalable are AI voice assistant services?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Infinitely scalable! Our cloud infrastructure handles unlimited concurrent calls without quality degradation. Whether you receive 10 calls or 10,000 calls daily, the AI maintains consistent performance with no additional setup or hiring required.
              </p>
            </div>

            {/* FAQ 12 */}
            <div className="group relative bg-gradient-to-br text-black10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-black-900 font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                12
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 mt-2">
                What analytics and reporting do you provide?
              </h3>
              <p className="text-black-300 leading-relaxed">
                Our real-time dashboard shows call volume, conversation outcomes, customer sentiment, response times, conversion rates, and ROI metrics. Access detailed transcripts, identify trends, and export custom reports to track performance against your business KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Creative Design */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 115, 22, 0.4) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 via-orange-500/30 to-orange-600/30 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-400/30 via-orange-500/30 to-orange-600/30 rounded-full filter blur-3xl animate-float-reverse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="bg-white rounded-3xl p-12 md:p-16 border-4 border-orange-300 hover:border-orange-400 shadow-2xl hover:shadow-orange-300 hover:scale-[1.02] transition-all text-center relative overflow-hidden group">
            {/* Decorative Inner Glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-orange-300/20 via-orange-400/20 to-orange-500/20 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-orange-300/20 via-orange-500/20 to-orange-300/20 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black-900 font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-white">
                  Limited Time Offer
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                <span className="block mb-3 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Ready to Transform Your
                </span>
                <span className="inline-block px-8 py-4 rounded-2xl text-black-900 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl border-2 border-orange-300 animate-gradient relative">
                  <span className="absolute inset-0 bg-gradient-to-tr text-black25 via-transparent to-transparent"></span>
                  <span className="relative z-10">Business Communication?</span>
                </span>
              </h2>
              
              <div className="max-w-2xl mx-auto mb-8 p-6 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-200 border-2 border-orange-300 rounded-2xl">
                <p className="text-lg text-black-300 leading-relaxed font-medium">
                  Join <span className="font-extrabold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">500+ businesses</span> already using DigitalBot.ai to handle <span className="font-extrabold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">millions of customer conversations</span> with AI voice technology. <span className="font-bold text-orange-600">Start your free trial today</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-black-900 hover:scale-105 transition-all rounded-xl px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-orange-400 border-2 border-orange-300 animate-gradient">
                    Start Free Trial Now
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-2 border-orange-500 text-black-900 hover:bg-teal-500/20 rounded-xl px-10 py-7 text-xl font-bold shadow-lg hover:scale-105 transition-all">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-black-400 text-sm mt-8">
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 animate-pulse"></span>
                  <span className="font-semibold text-black-300">No Credit Card Required</span>
                </span>
                <span className="text-black-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></span>
                  <span className="font-semibold text-black-300">Cancel Anytime</span>
                </span>
                <span className="text-black-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></span>
                  <span className="font-semibold text-black-300">5-Min Setup</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data - Service Schema */}
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

      {/* Structured Data - FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What AI voice assistant services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive AI voice solutions including AI call centers, customer support automation, sales agents, virtual receptionists, voice bots, and enterprise voice automation software. Each service is customizable to your business needs and integrates seamlessly with your existing systems."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I implement AI voice services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses launch their AI voice assistant within 5-10 days. We handle setup, CRM integration, conversation training, and testing. Our team provides hands-on support to ensure smooth deployment and immediate value delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries benefit from AI voice assistants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI voice assistants transform healthcare, real estate, hospitality, e-commerce, financial services, and technology sectors. Any business with customer communication needs benefits from 24/7 availability, instant responses, and scalable automation without hiring additional staff."
                }
              },
              {
                "@type": "Question",
                "name": "Can AI voice services integrate with my existing systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our AI voice platform integrates with popular CRMs (Salesforce, HubSpot, Zoho), phone systems, help desk software, scheduling tools, and custom APIs. We ensure seamless data flow and real-time synchronization with your tech stack."
                }
              },
              {
                "@type": "Question",
                "name": "What ROI can I expect from AI voice automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Businesses typically see 40-60% cost reduction, 85% faster response times, and 45% higher conversion rates. AI voice services deliver ROI within 30-60 days by eliminating staffing costs, reducing missed calls, and providing 24/7 availability without overtime or benefits."
                }
              },
              {
                "@type": "Question",
                "name": "Is AI voice technology secure and compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Our platform is SOC 2 and HIPAA compliant with end-to-end encryption, data privacy controls, GDPR compliance, and comprehensive audit trails. All conversations are encrypted and stored securely with role-based access controls."
                }
              },
              {
                "@type": "Question",
                "name": "How does AI handle multiple languages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI voice assistants support 60+ languages with natural accents and context-aware translations. The system automatically detects the caller's language and responds fluently, making it perfect for global businesses serving diverse customer bases."
                }
              },
              {
                "@type": "Question",
                "name": "What support do you provide after launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7 technical support, regular performance optimization, conversation training updates, analytics reviews, and dedicated account management. Our team monitors your AI continuously and makes improvements based on real conversation data."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize the AI voice and personality?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! You can customize voice tone, personality, speaking style, and conversation flow to match your brand. Choose from multiple voice options, adjust response speeds, and train the AI on your specific terminology and brand guidelines."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need technical expertise to use AI voice services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all! Our platform features a no-code visual builder for creating and managing conversations. We handle all technical setup, integration, and maintenance. You simply define your business rules and we make the AI work for you."
                }
              },
              {
                "@type": "Question",
                "name": "How scalable are AI voice assistant services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Infinitely scalable! Our cloud infrastructure handles unlimited concurrent calls without quality degradation. Whether you receive 10 calls or 10,000 calls daily, the AI maintains consistent performance with no additional setup or hiring required."
                }
              },
              {
                "@type": "Question",
                "name": "What analytics and reporting do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our real-time dashboard shows call volume, conversation outcomes, customer sentiment, response times, conversion rates, and ROI metrics. Access detailed transcripts, identify trends, and export custom reports to track performance against your business KPIs."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}









