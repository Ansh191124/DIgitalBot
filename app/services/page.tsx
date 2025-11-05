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
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
        <div className="relative z-10 container mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Services</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            What AI Voice Assistant Services Do We Offer?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            We provide comprehensive AI voice assistant services including AI call centers, customer support automation, sales agents, and virtual receptionists. Trusted by <span className="font-bold text-orange-600">500+ businesses</span> across <span className="font-bold text-purple-600">25+ countries</span> to handle <span className="font-bold text-pink-600">2M+ conversations</span> monthly.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
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
              <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our AI Voice Assistant Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered voice solutions designed to automate and enhance every aspect of your business communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="relative bg-white border-2 border-purple-200 hover:border-purple-400 rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-200 transition-all duration-500 h-full group cursor-pointer">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 mx-auto border-2 border-orange-200 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors"
                        >
                          <Check className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-center text-orange-600 group-hover:text-pink-600 transition-colors font-medium">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI voice assistants are trusted across multiple industries to deliver exceptional customer experiences and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-blue-200 hover:border-blue-400 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 mx-auto border-2 border-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              How Do Our AI Voice Services Work?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="relative bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200 transition-all duration-500 group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  {item.step}
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Exactly like homepage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" role="region" aria-labelledby="faq-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse">
                Got Questions? We've Got Answers
              </span>
            </div>
            <h2 id="faq-section" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              <span className="block mb-2">Frequently Asked</span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about <span className="text-orange-400 font-semibold">AI Voice Assistant Services</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                What AI voice assistant services do you offer?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We offer comprehensive AI voice solutions including AI call centers, customer support automation, sales agents, virtual receptionists, voice bots, and enterprise voice automation software. Each service is customizable to your business needs and integrates seamlessly with your existing systems.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 mt-2">
                How quickly can I implement AI voice services?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Most businesses launch their AI voice assistant within 5-10 days. We handle setup, CRM integration, conversation training, and testing. Our team provides hands-on support to ensure smooth deployment and immediate value delivery.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                Which industries benefit from AI voice assistants?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI voice assistants transform healthcare, real estate, hospitality, e-commerce, financial services, and technology sectors. Any business with customer communication needs benefits from 24/7 availability, instant responses, and scalable automation without hiring additional staff.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                04
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-4 mt-2">
                Can AI voice services integrate with my existing systems?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes! Our AI voice platform integrates with popular CRMs (Salesforce, HubSpot, Zoho), phone systems, help desk software, scheduling tools, and custom APIs. We ensure seamless data flow and real-time synchronization with your tech stack.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                05
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 mt-2">
                What ROI can I expect from AI voice automation?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Businesses typically see 40-60% cost reduction, 85% faster response times, and 45% higher conversion rates. AI voice services deliver ROI within 30-60 days by eliminating staffing costs, reducing missed calls, and providing 24/7 availability without overtime or benefits.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                06
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                Is AI voice technology secure and compliant?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Absolutely. Our platform is SOC 2 and HIPAA compliant with end-to-end encryption, data privacy controls, GDPR compliance, and comprehensive audit trails. All conversations are encrypted and stored securely with role-based access controls.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                07
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 mt-2">
                How does AI handle multiple languages?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI voice assistants support 60+ languages with natural accents and context-aware translations. The system automatically detects the caller's language and responds fluently, making it perfect for global businesses serving diverse customer bases.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                08
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                What support do you provide after launch?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We provide 24/7 technical support, regular performance optimization, conversation training updates, analytics reviews, and dedicated account management. Our team monitors your AI continuously and makes improvements based on real conversation data.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                09
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-4 mt-2">
                Can I customize the AI voice and personality?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes! You can customize voice tone, personality, speaking style, and conversation flow to match your brand. Choose from multiple voice options, adjust response speeds, and train the AI on your specific terminology and brand guidelines.
              </p>
            </div>

            {/* FAQ 10 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                10
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 mt-2">
                Do I need technical expertise to use AI voice services?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Not at all! Our platform features a no-code visual builder for creating and managing conversations. We handle all technical setup, integration, and maintenance. You simply define your business rules and we make the AI work for you.
              </p>
            </div>

            {/* FAQ 11 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                11
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                How scalable are AI voice assistant services?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Infinitely scalable! Our cloud infrastructure handles unlimited concurrent calls without quality degradation. Whether you receive 10 calls or 10,000 calls daily, the AI maintains consistent performance with no additional setup or hiring required.
              </p>
            </div>

            {/* FAQ 12 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                12
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 mt-2">
                What analytics and reporting do you provide?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our real-time dashboard shows call volume, conversation outcomes, customer sentiment, response times, conversion rates, and ROI metrics. Access detailed transcripts, identify trends, and export custom reports to track performance against your business KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto relative z-10">
          <div className="bg-white rounded-3xl p-12 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
                <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg">
                  View Pricing Plans
                </Button>
              </Link>
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