"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-100 to-black text-black dark:from-black dark:via-gray-900 dark:to-gray-800 dark:text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        {/* Top Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-black/5 px-4 py-2 rounded-full text-sm text-gray-700 mb-8 backdrop-blur-sm border border-gray-400/30">
            <Sparkles className="h-4 w-4 text-gray-800 animate-pulse" />
            <span>Introducing the future of AI Assistants</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up leading-tight">
            Transform Customer Service with{" "}
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent animate-gradient">
              AI Voice Assistant
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            DigitalBot.ai delivers intelligent conversational AI that automates customer support, increases engagement,
            and provides 24/7 futuristic solutions to boost your business growth.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-black via-gray-700 to-gray-500 hover:from-gray-900 hover:via-gray-600 hover:to-gray-400 text-white transition-all group shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-800 hover:bg-gray-200 hover:text-black transition-all group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent h-px"></div>
            <div className="bg-white/80 rounded-lg border border-gray-400 p-8 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-black mb-2 animate-bounce">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2 animate-bounce">50M+</div>
                  <div className="text-gray-600">Messages Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2 animate-bounce">24/7</div>
                  <div className="text-gray-600">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice Assistant UI Mockup */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl p-1 shadow-lg">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-300 text-center">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  AI Voice Assistant
                </h3>

                {/* Animated Waveform */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  <span className="w-1.5 h-6 bg-gray-800 rounded-full animate-wave"></span>
                  <span className="w-1.5 h-8 bg-gray-700 rounded-full animate-wave delay-75"></span>
                  <span className="w-1.5 h-10 bg-gray-600 rounded-full animate-wave delay-150"></span>
                  <span className="w-1.5 h-8 bg-gray-700 rounded-full animate-wave delay-200"></span>
                  <span className="w-1.5 h-6 bg-gray-800 rounded-full animate-wave delay-300"></span>
                </div>

                {/* Transcribed Voice Text */}
                <p className="text-gray-600 italic mb-6">
                  “Hello! I’m your AI assistant. How can I help you today?”
                </p>

                {/* Microphone Button */}
                <button className="p-4 bg-gradient-to-r from-black via-gray-700 to-gray-500 text-white rounded-full shadow-lg hover:scale-80 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z"/>
                    <path d="M19 11h-2a7 7 0 0 1-14 0H3a9 9 0 0 0 18 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
