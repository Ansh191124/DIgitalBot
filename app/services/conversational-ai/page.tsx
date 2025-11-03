"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

export default function ConversationalAI() {
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          Conversational AI Voice Agent
        </h1>
        <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto">
          Build <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">human-like conversational experiences</span> with advanced AI technology.
        </p>
        <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
          <Link href="/signup">Start Building</Link>
        </Button>
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
                    {[...Array(40)].map((_, i) => {
                      const height = Math.sin(i * 0.5) * 20 + 25;
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
                    {[...Array(40)].map((_, i) => {
                      const height = Math.sin(i * 0.5) * 15 + 15;
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

      <Footer />
    </main>
  )
}
