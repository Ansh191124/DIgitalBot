"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  MessageSquare,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Smartphone,
  Code,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom Chatbot Development",
    description:
      "Tailored AI chatbots built for your specific business needs and workflows.",
    features: [
      "Custom conversation flows",
      "Brand personality integration",
      "Industry-specific training",
      "Multi-platform deployment",
    ],
    popular: false,
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Platform",
    description:
      "Build, deploy, and manage chatbots easily using our no-code platform.",
    features: [
      "Drag-and-drop builder",
      "Pre-built templates",
      "Real-time analytics",
      "A/B testing tools",
    ],
    popular: true,
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description:
      "AI that truly understands intent, tone, and context with precision.",
    features: [
      "Intent recognition",
      "Sentiment analysis",
      "Entity extraction",
      "Context awareness",
    ],
    popular: false,
  },
  {
    icon: Zap,
    title: "Integration Services",
    description:
      "Seamlessly connect chatbots to your existing apps, CRMs, and APIs.",
    features: [
      "CRM integration",
      "API connections",
      "Database sync",
      "Webhook support",
    ],
    popular: false,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced encryption and compliance to safeguard your data and trust.",
    features: [
      "End-to-end encryption",
      "GDPR compliance",
      "SOC 2 certified",
      "Role-based access",
    ],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Actionable analytics to track chatbot performance and engagement.",
    features: [
      "Conversation analytics",
      "Performance metrics",
      "Customer insights",
      "ROI tracking",
    ],
    popular: false,
  },
];

const industries = [
  { name: "E-commerce", icon: Smartphone },
  { name: "Healthcare", icon: Headphones },
  { name: "Financial Services", icon: Shield },
  { name: "Education", icon: Brain },
  { name: "Real Estate", icon: Globe },
  { name: "Technology", icon: Code },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-900 relative overflow-hidden">
      {/* floating glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl animate-pulse-slow" />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-sky-700 drop-shadow-md">
            AI-Powered Services for the Future
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform customer engagement with cutting-edge AI chatbot
            technology — smart, secure, and scalable.
          </p>
          <Button className="bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 text-white hover:from-indigo-600 hover:to-sky-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50 to-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-sky-700 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable AI chatbot solutions designed for efficiency, innovation,
              and customer delight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative bg-white/80 backdrop-blur-lg border border-sky-100 rounded-3xl shadow-lg hover:shadow-3xl hover:border-sky-300 transition-all duration-500 hover:-translate-y-2"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md">
                    ⭐ Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-inner">
                    <service.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-sky-800 mb-2 text-center">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <Check className="h-4 w-4 text-sky-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 text-white hover:scale-105 transition-all rounded-full shadow-md hover:shadow-xl">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 via-white to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-700 mb-4">
            Industries We Empower
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Our AI chatbots help businesses across multiple domains achieve
            smarter engagement and automation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/90 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 group"
              >
                <CardContent className="p-6">
                  <industry.icon className="h-8 w-8 text-sky-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-gray-800 group-hover:text-sky-600 transition-colors">
                    {industry.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-700 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Simple, structured, and results-driven — we make AI integration
            seamless.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Consultation", "Development", "Deployment"].map((step, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-400 border border-sky-100 hover:border-sky-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold text-sky-700">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-sky-800 mb-4">
                  {step}
                </h3>
                <p className="text-gray-600">
                  {step === "Consultation" &&
                    "We assess your goals, challenges, and define the ideal AI strategy for your brand."}
                  {step === "Development" &&
                    "Our team designs and builds intelligent chatbots customized for your workflows."}
                  {step === "Deployment" &&
                    "We integrate, launch, and continuously optimize your chatbot for maximum performance."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-sky-200 to-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-sky-200 hover:border-sky-300 transition-all">
            <h2 className="text-3xl font-extrabold text-sky-700 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's explore how our AI chatbot services can elevate your
              business and customer experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-sky-400 text-sky-700 hover:bg-sky-50 rounded-full px-8 py-6 text-lg"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
