"use client"

import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, ArrowRight, Target, TrendingUp, Phone, Users, Zap, Check } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

const sampleConversation = [
  { speaker: "Customer", text: "Hi, I need help with my order." },
  { speaker: "AI Agent", text: "I'd be happy to help! Could you provide your order number?" },
  { speaker: "Customer", text: "It's ORDER-12345." },
  { speaker: "AI Agent", text: "Thank you! Your order is on its way and will arrive tomorrow by 3 PM." },
]

export default function AISalesAgent() {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-900 to-orange-100 py-20 md:py-32">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full px-5 py-2 mb-8 border-2 border-orange-300 shadow-lg">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">AI-Powered Sales Automation</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  What Are AI Sales Agents
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    and How Do They Close Deals?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                AI sales agents are intelligent voice assistants that qualify leads, handle objections, and close deals 24/7. Trusted by <span className="font-bold text-orange-600">500+ businesses</span> to automate sales conversations and increase revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Book Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">500+ Active Businesses</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">2M+ Sales Conversations</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">45% Higher Conversion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Conversation Section */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full px-5 py-2.5 mb-6 border-2 border-orange-300 shadow-lg">
                <Mic className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">Live AI Sales Demo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 bg-clip-text text-transparent mb-4">
                Hear AI Sales Agent in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Listen to how our AI handles real sales conversations and closes deals naturally
              </p>
            </div>

            {/* Audio Player Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-orange-400 hover:border-orange-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                {/* Waveform visualization area */}
                <div className="flex items-center justify-center mb-6 h-24 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-400 relative overflow-hidden">
                  {isPlaying ? (
                    <div className="flex items-end justify-center gap-1.5 h-16">
                      {[...Array(40)].map((_, i) => {
                        const height = Math.sin(i * 0.5) * 20 + 25;
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-orange-500 via-orange-600 to-orange-700 rounded-full transition-all duration-300"
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
                            className="w-1.5 bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100 rounded-full"
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
                    className="group relative flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
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

        {/* FAQ Section - Dark Theme */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" role="region" aria-labelledby="faq-section">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-radial from-orange-400/15 to-transparent rounded-full blur-3xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-6">
                <Target className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Common Questions</span>
              </div>
              <h2 id="faq-section" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about <span className="text-orange-400 font-semibold">AI Sales Agents</span>
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text">
                      What is an AI sales agent and how does it work?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      An AI sales agent is an intelligent voice assistant that handles sales conversations, qualifies leads, answers questions, handles objections, and closes deals automatically. It uses natural language processing and machine learning to engage prospects with human-like conversations 24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 to-cyan-300 text-transparent bg-clip-text">
                      Can AI sales agents replace human sales reps?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      AI sales agents complement your sales team by handling initial outreach, lead qualification, and follow-ups. This frees your human reps to focus on high-value conversations, complex deals, and relationship building. Think of AI as your tireless sales assistant that works 24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 to-pink-300 text-transparent bg-clip-text">
                      How do AI sales agents qualify leads?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our AI sales agents ask intelligent qualifying questions, score leads based on your criteria (budget, authority, need, timeline), and automatically route hot leads to your sales team while nurturing cold leads with follow-up campaigns. All data syncs with your CRM in real-time.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-green-300 text-transparent bg-clip-text">
                      What is the ROI of using AI sales agents?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Businesses typically see 45% higher conversion rates, 70% reduction in lead response time, and 3x more qualified leads. AI sales agents work 24/7 without salaries, commissions, or benefits, delivering ROI within the first 30-60 days while scaling infinitely without additional hiring costs.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">
                      Can AI sales agents handle objections?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Yes! Our AI is trained on thousands of sales conversations and can handle common objections about price, timing, competition, and features. It uses proven sales techniques to address concerns, provide value propositions, and guide prospects toward a decision while maintaining a natural, consultative approach.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      6
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-300 to-pink-300 text-transparent bg-clip-text">
                      How quickly can I deploy AI sales agents?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Most businesses are up and running within 5-7 days. We help you configure your sales scripts, integrate with your CRM, train the AI on your products/services, and test conversations before going live. Our team provides hands-on support throughout the entire setup process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-900 to-orange-100">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-full px-6 py-2.5 mb-8 border-2 border-orange-300 shadow-lg">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">10X Your Sales Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-700 text-transparent bg-clip-text">
                  Ready to 10X Your Sales
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
                    with AI?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-400/30 blur-2xl -z-10 scale-110" />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join 500+ businesses using AI sales agents to qualify more leads, close more deals, and scale revenue without scaling headcount.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-6 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">Setup in 7 Days</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-400">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}








