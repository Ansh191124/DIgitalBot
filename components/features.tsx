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
        <section className="relative py-12 md:py-20 bg-white overflow-hidden">
            {/* Floating background elements - Purple/Orange theme */}
            <div className="absolute top-10 left-1/4 w-48 h-48 bg-orange-500 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_100px_rgba(249,115,22,0.3)]"></div>
            <div className="absolute bottom-10 right-1/3 w-56 h-56 bg-orange-400 rounded-full opacity-20 animate-pulse blur-2xl shadow-[0_0_120px_rgba(249,115,22,0.3)]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 rounded-full mb-6 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-orange-600">Advanced AI Platform</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl lg:text-5xl mb-4">
                        <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
                            Revolutionary Features for
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                            Next-Gen Communication
                        </span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Experience the future of AI-powered customer interactions with our cutting-edge platform
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        // Define different cyan/teal color schemes for each card
                        const colorSchemes = [
                            { 
                                bg: 'bg-gradient-to-br from-orange-500 to-orange-500', 
                                border: 'border-orange-500/30 hover:border-orange-500', 
                                shadow: 'hover:shadow-orange-500/30',
                                glow: 'shadow-orange-500/20'
                            },
                            { 
                                bg: 'bg-gradient-to-br from-orange-500 to-orange-600', 
                                border: 'border-orange-500/30 hover:border-orange-500', 
                                shadow: 'hover:shadow-orange-500/30',
                                glow: 'shadow-orange-500/20'
                            },
                            { 
                                bg: 'bg-gradient-to-br from-blue-500 to-orange-500', 
                                border: 'border-blue-500/30 hover:border-blue-500', 
                                shadow: 'hover:shadow-blue-500/30',
                                glow: 'shadow-blue-500/20'
                            },
                            { 
                                bg: 'bg-gradient-to-br from-indigo-500 to-blue-500', 
                                border: 'border-indigo-500/30 hover:border-indigo-500', 
                                shadow: 'hover:shadow-indigo-500/30',
                                glow: 'shadow-indigo-500/20'
                            },
                            { 
                                bg: 'bg-gradient-to-br from-violet-500 to-indigo-500', 
                                border: 'border-violet-500/30 hover:border-violet-500', 
                                shadow: 'hover:shadow-violet-500/30',
                                glow: 'shadow-violet-500/20'
                            },
                            { 
                                bg: 'bg-gradient-to-br from-orange-400 to-orange-600', 
                                border: 'border-orange-400/30 hover:border-orange-400', 
                                shadow: 'hover:shadow-orange-400/30',
                                glow: 'shadow-orange-400/20'
                            },
                        ]
                        const colors = colorSchemes[index % colorSchemes.length]
                        
                        return (
                            <Card key={index} className={`group bg-white/90 backdrop-blur-md border-2 ${colors.border} hover:shadow-2xl ${colors.shadow} transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg ${colors.glow} relative overflow-hidden`}>
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                
                                <CardHeader className="relative">
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-xl ${colors.bg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 text-white" /> 
                                        </div>
                                        <CardTitle className="text-gray-900 font-bold text-lg">{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="relative">
                                    <CardDescription className="text-gray-700 leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                    
                                    {/* Decorative element */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className={`w-8 h-0.5 ${colors.bg} rounded-full`}></div>
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full animate-pulse"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


