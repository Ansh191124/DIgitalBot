"use client"

import { Button } from "@/components/ui/button"
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50 to-pink-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-200/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-pink-400/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-300/25 to-blue-400/25 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-1 shadow-2xl shadow-purple-500/30 relative overflow-hidden group">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="bg-white rounded-[22px] p-12 md:p-16 relative">
              {/* Content */}
              <div className="text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                  <span className="text-sm font-bold text-orange-700">Limited Time Offer</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Customer Experience?
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses automating customer interactions with AI.
                  <span className="block mt-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent font-semibold">Start free, scale fast, succeed faster.</span>
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                  {features.map((feature, idx) => {
                    const colors = [
                      'border-orange-300 hover:border-orange-500 text-orange-600',
                      'border-blue-300 hover:border-blue-500 text-blue-600',
                      'border-purple-300 hover:border-purple-500 text-purple-600',
                      'border-pink-300 hover:border-pink-500 text-pink-600'
                    ]
                    return (
                      <div key={idx} className={`flex items-center gap-2 justify-center p-3 bg-white backdrop-blur-sm rounded-xl border-2 ${colors[idx]} transition-all duration-300 group/feature hover:scale-105 shadow-sm hover:shadow-lg`}>
                        <feature.icon className="w-5 h-5 group-hover/feature:scale-110 transition-transform" />
                        <span className="text-sm font-semibold text-gray-800">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Button
                    size="lg"
                    className="group/btn px-10 py-7 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-600/60 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    onClick={() => router.push("/signup")}
                  >
                    <Phone className="w-6 h-6" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 bg-white border-2 border-purple-300 hover:bg-purple-50 hover:border-purple-500 text-gray-900 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg"
                    onClick={() => router.push("/contact")}
                  >
                    <Users className="w-6 h-6" />
                    Talk to Sales
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t-2 border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => {
                      const gradients = [
                        'from-orange-600 to-pink-600',
                        'from-blue-600 to-cyan-600',
                        'from-purple-600 to-pink-600',
                        'from-teal-600 to-green-600'
                      ]
                      return (
                        <div key={idx} className="text-center group">
                          <div className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${gradients[idx]} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-300/30 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Additional Trust Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-semibold">SOC 2 Certified</span>
              </div>
              <div className="w-px h-6 bg-gray-400" />
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold">GDPR Compliant</span>
              </div>
              <div className="w-px h-6 bg-gray-400" />
              <div className="flex items-center gap-2 text-gray-700">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold">Trusted by Fortune 500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}