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
    
        
`
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
            `
    
}