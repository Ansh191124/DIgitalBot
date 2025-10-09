"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Brain, BarChart3, Clock, Globe } from "lucide-react"

const features = [
  {  
    icon: Bot,
    title: "Intelligent AI Chatbots",
    description:
      "Deploy smart conversational AI that understands context, learns from interactions, and provides human-like responses.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description:
      "Seamlessly integrate across websites, mobile apps, social media, and messaging platforms for unified customer experience.",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description:
      "Advanced NLP capabilities understand customer intent, sentiment, and context to deliver personalized responses.",
  },
  {
    icon: BarChart3,
    title: "Conversation Analytics",
    description:
      "Track performance metrics, customer satisfaction, and conversation insights to optimize your chatbot's effectiveness.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Provide instant customer support around the clock, reducing response times and improving satisfaction.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Communicate with customers in their preferred language with built-in translation and localization features.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Background floating blobs & gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full opacity-30 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-cyan-100 rounded-full opacity-30 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[20%] left-[50%] w-[350px] h-[350px] bg-sky-200 rounded-full opacity-20 filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-cyan-200 rounded-full opacity-15 filter blur-2xl animate-pulse-slow"></div>

        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-sky-400 rounded-full animate-ping-slow opacity-50 top-10 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-ping-slow opacity-40 bottom-20 right-1/3"></div>
        <div className="absolute w-1 h-1 bg-sky-300 rounded-full animate-ping-slow opacity-30 top-1/2 right-1/3"></div>
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping-slow opacity-25 top-1/3 left-1/3"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-black">
            Powerful AI Chatbot Features
          </h2>
          <p className="text-lg sm:text-xl text-sky-600/80 max-w-2xl mx-auto">
            Discover how our advanced conversational AI can transform your customer service and drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
              style={{ animation: `fadeInUp 0.6s ease ${index * 0.15}s both` }}
            >
              {/* Floating Accent Shapes */}
              <div className="absolute top-[-20%] left-[-10%] w-24 h-24 bg-sky-100 rounded-full opacity-20 filter blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-[-15%] right-[-10%] w-32 h-32 bg-cyan-200 rounded-full opacity-15 filter blur-2xl animate-pulse-slow"></div>

              <CardHeader className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-sky-400 via-cyan-300 to-sky-500 group-hover:from-cyan-400 group-hover:to-sky-400 transition-all duration-500 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white group-hover:text-sky-900 transition-colors duration-300" />
                </div>
                <CardTitle className="text-sky-800 group-hover:text-sky-600 font-bold text-lg sm:text-xl transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <CardDescription className="text-sky-600/80 group-hover:text-sky-500 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.15; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
