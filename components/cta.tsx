"use client"

import { useRouter } from "next/navigation"
import { Sparkles, ArrowRight, Zap, TrendingUp, Award, CheckCircle2, Phone, Users } from "lucide-react"

export function CTA() {
  const router = useRouter()

  const features = [
    { icon: CheckCircle2, text: "No Credit Card Required" },
    { icon: Zap, text: "Setup in 5 Minutes" },
    { icon: Award, text: "24/7 AI Support" },
    { icon: TrendingUp, text: "Scale Instantly" }
  ]

  const stats = [
    { number: "10K+", label: "Active Businesses" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "AI Available" },
    { number: "5M+", label: "Calls Handled" }
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated Orbs - Trading Theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-teal-400/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-teal-400/25 to-cyan-500/25 rounded-full blur-3xl animate-float-reverse" />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(5px); }
            50% { transform: translateY(-20px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(5px); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(15px) translateX(-5px); }
            50% { transform: translateY(20px) translateX(5px); }
            75% { transform: translateY(15px) translateX(-5px); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }
        `
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 rounded-3xl p-1 shadow-2xl shadow-cyan-500/40 relative overflow-hidden group">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[22px] p-12 md:p-16 relative">
              {/* Content */}
              <div className="text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-900/60 to-teal-900/60 border-2 border-cyan-500/50 rounded-full mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-sm font-bold text-cyan-400">Limited Time Offer</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Customer Experience?
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses automating customer interactions with AI.
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-semibold">Start free, scale fast, succeed faster.</span>
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                  {features.map((feature, idx) => {
                    const colors = [
                      { border: 'border-cyan-500/50', hover: 'hover:border-cyan-500', bg: 'from-cyan-500/20 to-teal-500/20', iconBg: 'from-cyan-400 to-teal-500', glow: 'from-cyan-500/20 to-teal-500/20' },
                      { border: 'border-teal-500/50', hover: 'hover:border-teal-500', bg: 'from-teal-500/20 to-emerald-500/20', iconBg: 'from-teal-400 to-emerald-500', glow: 'from-teal-500/20 to-emerald-500/20' },
                      { border: 'border-emerald-500/50', hover: 'hover:border-emerald-500', bg: 'from-emerald-500/20 to-cyan-500/20', iconBg: 'from-emerald-400 to-cyan-500', glow: 'from-emerald-500/20 to-cyan-500/20' },
                      { border: 'border-cyan-500/50', hover: 'hover:border-cyan-400', bg: 'from-cyan-500/20 to-blue-500/20', iconBg: 'from-cyan-400 to-blue-500', glow: 'from-cyan-500/20 to-blue-500/20' }
                    ]
                    const color = colors[idx]
                    return (
                      <div key={idx} className={`flex flex-col items-center gap-2 justify-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 ${color.border} ${color.hover} transition-all duration-300 group/feature hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 relative`}>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} rounded-xl blur-lg opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Icon container */}
                        <div className="relative">
                          <div className={`p-2 bg-gradient-to-br ${color.iconBg} rounded-lg shadow-md`}>
                            {/* Glossy overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/10 to-transparent rounded-lg pointer-events-none"></div>
                            <feature.icon className="w-5 h-5 text-white relative z-10 drop-shadow-lg group-hover/feature:scale-110 transition-transform" />
                          </div>
                        </div>
                        
                        <span className="text-xs font-semibold text-gray-200 relative z-10">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <button
                    className="group/btn px-10 py-7 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-600/70 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    onClick={() => router.push("/signup")}
                  >
                    <Phone className="w-6 h-6" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    className="px-10 py-7 bg-gray-800/50 border-2 border-cyan-500/50 hover:bg-gray-700/50 hover:border-cyan-500 text-gray-200 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg backdrop-blur-sm"
                    onClick={() => router.push("/contact")}
                  >
                    <Users className="w-6 h-6 text-cyan-400" />
                    Talk to Sales
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t-2 border-cyan-500/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => {
                      const gradients = [
                        'from-cyan-400 to-teal-400',
                        'from-teal-400 to-emerald-400',
                        'from-emerald-400 to-cyan-400',
                        'from-cyan-400 to-blue-400'
                      ]
                      return (
                        <div key={idx} className="text-center group">
                          <div className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${gradients[idx]} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Fine Print */}
                <p className="text-xs text-gray-500 mt-8">
                  No credit card required • Cancel anytime • Enterprise support available
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Additional Trust Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold">SOC 2 Certified</span>
              </div>
              <div className="w-px h-6 bg-cyan-500/30" />
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold">GDPR Compliant</span>
              </div>
              <div className="w-px h-6 bg-cyan-500/30" />
              <div className="flex items-center gap-2 text-gray-300">
                <TrendingUp className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-semibold">Trusted by Fortune 500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}