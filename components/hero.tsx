"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto text-center">
        {/* Top Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span>Introducing the future of AI Assistants</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-balance animate-fade-in-up leading-tight">
            Transform Customer Service with{" "}
            <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent animate-gradient">
              AI Voice Assistant
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            DigitalBot.ai delivers intelligent conversational AI that automates customer support, increases engagement,
            and provides 24/7 assistance to boost your business growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all group shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px"></div>
            <div className="bg-black rounded-lg border border-white/10 p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2 animate-bounce">99.9%</div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2 animate-bounce">50M+</div>
                  <div className="text-gray-400">Messages Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2 animate-bounce">24/7</div>
                  <div className="text-gray-400">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat UI Mockup */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl p-1 shadow-lg">
              <div className="bg-black rounded-2xl p-8 border border-white/10">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">DigitalBot.ai Chat Interface</div>
                </div>
                {/* Messages */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 max-w-xs animate-fade-in-left">
                      <p className="text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white text-black rounded-lg px-4 py-2 max-w-xs animate-fade-in-right">
                      <p className="text-sm">I need help with my order</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 max-w-xs animate-fade-in-left">
                      <p className="text-sm">I'd be happy to help! Can you provide your order number?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
