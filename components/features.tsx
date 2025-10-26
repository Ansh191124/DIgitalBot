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
    return ( // <--- The crucial 'return' statement is added here
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-gray-900 dark:text-white mb-10">
                    Key Features of Our Platform
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon // Assign the component to a variable
                        return (
                            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        {/* Render the Icon component */}
                                        <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-300/10 dark:text-blue-300">
                                            <IconComponent className="w-6 h-6" /> 
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
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