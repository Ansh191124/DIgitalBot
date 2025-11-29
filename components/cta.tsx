"use client"

import { ArrowRight, Award, CheckCircle2, Phone, Shield, Star, TrendingUp, Users, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export function CTA() {
  const router = useRouter()

  const features = [
    { icon: CheckCircle2, text: "No Credit Card" },
    { icon: Zap, text: "5 Min Setup" },
    { icon: Award, text: "24/7 Support" },
    { icon: TrendingUp, text: "Scale Instantly" }
  ]

  const stats = [
    { number: "10K+", label: "Businesses" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Available" },
    { number: "5M+", label: "Calls" }
  ]

  return (
    <section className="relative py-12 overflow-hidden bg-black">
      {/* Compact Background Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-cyan-500/15 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Split Layout Design */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mb-4 border border-cyan-400/30">
              <Star className="w-3 h-3 text-black animate-pulse" />
              <span className="text-xs font-bold text-black tracking-wide">Start Free Today</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-white tracking-wide">Transform Your Business with</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent tracking-widest">
                AI Voice Agents
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-base text-cyan-300 leading-relaxed">
              Join thousands of businesses automating customer interactions with AI.
              <span className="block mt-2 text-cyan-400 font-semibold tracking-wide">Start free, scale fast, succeed faster.</span>
            </p>

            {/* Features Grid - Horizontal */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-black/80 backdrop-blur-sm rounded-xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-cyan-400/25">
                  <div className="p-1 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg border border-cyan-400/30">
                    <feature.icon className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-300 tracking-wide">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="group/btn px-6 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-black rounded-xl font-bold text-sm shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-cyan-400/30 tracking-wide"
                onClick={() => router.push("/signup")}
              >
                <Phone className="w-4 h-4" />
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                className="px-6 py-4 bg-black/90 border border-cyan-400/50 hover:bg-gray-900/50 hover:border-cyan-400 text-cyan-300 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-sm backdrop-blur-sm hover:shadow-cyan-400/25 tracking-wide"
                onClick={() => router.push("/contact")}
              >
                <Users className="w-4 h-4 text-cyan-400" />
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className="relative">
            <div className="bg-black/95 backdrop-blur-md rounded-2xl border border-cyan-400/50 shadow-lg p-6 relative overflow-hidden shadow-cyan-400/25">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-400/15 to-transparent rounded-full blur-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-cyan-400 tracking-wide">Trusted Platform</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-cyan-400/30">
                      <div className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-1 tracking-wide">
                        {stat.number}
                      </div>
                      <div className="text-xs text-cyan-400 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="space-y-2 text-xs text-cyan-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>SOC 2 Certified • GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-cyan-400" />
                    <span>Trusted by Fortune 500 Companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-cyan-400" />
                    <span>No credit card required • Cancel anytime</span>
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


