"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Brain, BarChart3, Clock, Globe } from "lucide-react"
import { ElementType } from "react" // Import ElementType for correct Icon typing

// Define a type for your feature object for better type safety
type Feature = {
    icon: ElementType; // lucide-react icons are React components
    title: string;
    description: string;
}

const features: Feature[] = [
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

// The CSS keyframes block you had is not valid inside a function body.
// If you are using Tailwind/shadcn, you should use utility classes or define animations
// in your global CSS or configuration (like `tailwind.config.js`).

export function Features() {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
                    Key Features of Our Platform
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        // Define different color schemes for each card
                        const colorSchemes = [
                            { bg: 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600', border: 'border-orange-300 hover:border-orange-500', shadow: 'hover:shadow-orange-200' },
                            { bg: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600', border: 'border-blue-300 hover:border-blue-500', shadow: 'hover:shadow-blue-200' },
                            { bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-600', border: 'border-purple-300 hover:border-purple-500', shadow: 'hover:shadow-purple-200' },
                            { bg: 'bg-gradient-to-br from-teal-500 via-green-500 to-cyan-600', border: 'border-teal-300 hover:border-teal-500', shadow: 'hover:shadow-teal-200' },
                            { bg: 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600', border: 'border-pink-300 hover:border-pink-500', shadow: 'hover:shadow-pink-200' },
                            { bg: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600', border: 'border-cyan-300 hover:border-cyan-500', shadow: 'hover:shadow-cyan-200' },
                        ]
                        const colors = colorSchemes[index % colorSchemes.length]
                        
                        return (
                            <Card key={index} className={`bg-white border-2 ${colors.border} hover:shadow-2xl ${colors.shadow} transition-all duration-300 hover:scale-[1.02]`}>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-full ${colors.bg} shadow-lg`}>
                                            <IconComponent className="w-6 h-6 text-white" /> 
                                        </div>
                                        <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-700">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}