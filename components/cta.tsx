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
    <section className="relative py-12 overflow-hidden bg-white">
      {/* Compact Background Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-orange-500/15 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Split Layout Design */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 border border-orange-400/30">
              <Star className="w-3 h-3 text-white animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide">Start Free Today</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-gray-900 tracking-wide">Transform Your Business with</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent tracking-widest">
                AI Voice Agents
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-base text-gray-700 leading-relaxed">
              Join thousands of businesses automating customer interactions with AI.
              <span className="block mt-2 text-gray-900 font-semibold tracking-wide">Start free, scale fast, succeed faster.</span>
            </p>

            {/* Features Grid - Horizontal */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-400/30 hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-orange-400/25">
                  <div className="p-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg border border-orange-400/30">
                    <feature.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-900 tracking-wide">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="group/btn px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-orange-400/30 hover:shadow-orange-400/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-orange-400/30 tracking-wide"
                onClick={() => router.push("/signup")}
              >
                <Phone className="w-4 h-4" />
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                className="px-6 py-4 bg-white border border-orange-400/50 hover:bg-gray-100 hover:border-orange-400 text-gray-900 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-sm backdrop-blur-sm hover:shadow-orange-400/25 tracking-wide"
                onClick={() => router.push("/contact")}
              >
                <Users className="w-4 h-4 text-orange-600" />
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-orange-400/50 shadow-lg p-6 relative overflow-hidden shadow-orange-400/25">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-400/15 to-transparent rounded-full blur-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-bold text-orange-600 tracking-wide">Trusted Platform</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-gradient-to-br from-gray-100/80 to-white/80 rounded-xl border border-orange-400/30">
                      <div className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-1 tracking-wide">
                        {stat.number}
                      </div>
                      <div className="text-xs text-orange-600 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-orange-600" />
                    <span>SOC 2 Certified • GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-orange-600" />
                    <span>Trusted by Fortune 500 Companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-orange-600" />
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


