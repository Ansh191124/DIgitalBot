"use client"

import { Header } from "@/components/header"
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Orbs - Exactly like homepage */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10 container mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white font-medium">AI Sales Agent</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Are AI Sales Agents and How Do They Close Deals?
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            AI sales agents are intelligent voice assistants that qualify leads, handle objections, and close deals 24/7. Trusted by <span className="font-bold text-orange-400">500+ businesses</span> to automate sales conversations and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                Book Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/60">✓ 500+ Active Businesses • ✓ 2M+ Sales Conversations • ✓ 45% Higher Conversion</p>
        </div>
      </section>

      {/* Sample Conversation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-white/80 border border-white/10 shadow-lg mb-6">
              <Mic className="h-4 w-4 text-orange-400 animate-pulse" />
              <span className="font-medium">Live AI Sales Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Hear AI Sales Agent in Action
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Listen to how our AI handles real sales conversations and closes deals naturally
            </p>
          </div>

          {/* Audio Player Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              {/* Waveform visualization area */}
              <div className="flex items-center justify-center mb-6 h-24 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden">
                {isPlaying ? (
                  <div className="flex items-end justify-center gap-1.5 h-16">
                    {[...Array(40)].map((_, i) => {
                      const height = Math.sin(i * 0.5) * 20 + 25;
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-orange-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300"
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
                          className="w-1.5 bg-gradient-to-t from-white/20 via-white/10 to-white/5 rounded-full"
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
                  className="group relative flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
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

      {/* FAQ Section - Exactly like homepage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" role="region" aria-labelledby="faq-section">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse">
                Got Questions? We've Got Answers
              </span>
            </div>
            <h2 id="faq-section" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              <span className="block mb-2">Frequently Asked</span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about <span className="text-orange-400 font-semibold">AI Sales Agents</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                What is an AI sales agent and how does it work?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                An AI sales agent is an intelligent voice assistant that handles sales conversations, qualifies leads, answers questions, handles objections, and closes deals automatically. It uses natural language processing and machine learning to engage prospects with human-like conversations 24/7.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 mt-2">
                Can AI sales agents replace human sales reps?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI sales agents complement your sales team by handling initial outreach, lead qualification, and follow-ups. This frees your human reps to focus on high-value conversations, complex deals, and relationship building. Think of AI as your tireless sales assistant that works 24/7.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                How do AI sales agents qualify leads?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI sales agents ask intelligent qualifying questions, score leads based on your criteria (budget, authority, need, timeline), and automatically route hot leads to your sales team while nurturing cold leads with follow-up campaigns. All data syncs with your CRM in real-time.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                04
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-4 mt-2">
                What is the ROI of using AI sales agents?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Businesses typically see 45% higher conversion rates, 70% reduction in lead response time, and 3x more qualified leads. AI sales agents work 24/7 without salaries, commissions, or benefits, delivering ROI within the first 30-60 days while scaling infinitely without additional hiring costs.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                05
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 mt-2">
                Can AI sales agents handle objections?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes! Our AI is trained on thousands of sales conversations and can handle common objections about price, timing, competition, and features. It uses proven sales techniques to address concerns, provide value propositions, and guide prospects toward a decision while maintaining a natural, consultative approach.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                06
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-2">
                How quickly can I deploy AI sales agents?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Most businesses are up and running within 5-7 days. We help you configure your sales scripts, integrate with your CRM, train the AI on your products/services, and test conversations before going live. Our team provides hands-on support throughout the entire setup process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:bg-white/10 transition-all text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to 10X Your Sales with AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join 500+ businesses using AI sales agents to qualify more leads, close more deals, and scale revenue without scaling headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-xl">
                  Schedule Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/60">✓ No Credit Card Required • ✓ Setup in 7 Days • ✓ 24/7 Support</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
