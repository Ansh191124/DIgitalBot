"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Brain, Mic, BarChart3, Shield, Workflow, ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced NLP and machine learning for accurate voice understanding and response generation.",
  },
  {
    icon: Mic,
    title: "Natural Voice Interaction",
    description: "Crystal-clear voice synthesis that sounds human and engages customers effectively.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Design conversation flows tailored to your specific business processes and needs.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance metrics and gain insights from every voice interaction.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry security standards.",
  },
  {
    icon: Bot,
    title: "Omnichannel Integration",
    description: "Seamlessly integrate voice bots across phone, web, mobile, and messaging platforms.",
  },
]

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

// Pre-calculated stable waveform heights to prevent hydration issues
const WAVEFORM_HEIGHTS = Array.from({ length: 40 }, (_, i) => Math.sin(i * 0.5))

export default function AIVoiceBot() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            AI Voice Bot
          </h1>
          <p className="text-lg sm:text-xl font-semibold bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 mb-8 max-w-3xl mx-auto">
            Deploy <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">intelligent voice bots</span> that automate customer interactions with natural, human-like conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Try Voice Bot Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Advanced Voice Bot Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-linear-to-r from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-sky-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Conversation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background with gradient orbs - matching hero section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-sky-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-sky-100/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full text-sm text-sky-700 backdrop-blur-sm border border-sky-200/60 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-sky-500 animate-pulse" />
              <span className="font-medium">AI Voice Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Experience Natural AI Conversations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to how our AI voice bot handles real customer interactions with human-like responses
            </p>
          </div>

          {/* Audio Player Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-sky-200/50 relative overflow-hidden">
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-sky-50/20 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Waveform visualization area */}
              <div className="flex items-center justify-center mb-6 h-24 bg-linear-to-br from-sky-50 to-blue-50/30 rounded-2xl border border-sky-100/50 relative overflow-hidden">
                {isPlaying ? (
                  <div className="flex items-end justify-center gap-1.5 h-16">
                    {WAVEFORM_HEIGHTS.map((sinValue, i) => {
                      const height = sinValue * 20 + 25;
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-linear-to-t from-sky-600 via-sky-500 to-sky-400 rounded-full transition-all duration-300"
                          style={{
                            height: `${height}px`,
                            animation: `sound-wave ${0.5 + (i % 3) * 0.2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.05}s`
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1.5 h-16">
                    {WAVEFORM_HEIGHTS.map((sinValue, i) => {
                      const height = sinValue * 15 + 15;
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-linear-to-t from-sky-300/40 via-sky-200/40 to-sky-100/40 rounded-full"
                          style={{
                            height: `${height}px`
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Play/Pause Control */}
              <div className="flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="group relative flex items-center gap-3 px-8 py-3 bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    {isPlaying ? (
                      <Pause className="w-5 h-5 animate-pulse" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                    <span className="font-semibold">
                      {isPlaying ? "Pause Conversation" : "Play Sample Conversation"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <audio
              ref={audioRef}
              src="/sample-conversation.mp3"
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>

        {/* CSS for waveform animation */}
        <style jsx>{`
          @keyframes sound-wave {
            0%, 100% { transform: scaleY(0.5); }
            50% { transform: scaleY(1); }
          }
        `}</style>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Start Automating with Voice Bots Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Build, deploy, and scale AI voice bots in minutes, not months.
          </p>
          <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
