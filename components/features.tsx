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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-100 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black tracking-tight">
            Powerful AI Chatbot Features
          </h2>
          <p className="text-lg sm:text-xl text-black-300 max-w-2xl mx-auto">
            Discover how our advanced conversational AI can transform your customer service and drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-gray-800 transition-all duration-500 
                         hover:-translate-y-2 hover:scale-[1.02] border border-gray-700 bg-gray-900 text-white rounded-2xl"
              style={{ animation: `fadeInUp 0.6s ease ${index * 0.15}s both` }}
            >
              <CardHeader>
                <div
                  className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4
                             group-hover:bg-white/10 transition-all duration-500"
                >
                  <feature.icon className="h-7 w-7 text-white group-hover:text-gray-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Simple keyframe animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
