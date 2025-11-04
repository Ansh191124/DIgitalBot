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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-orange-400/15 to-amber-500/15 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl p-1 shadow-2xl shadow-orange-500/30 relative overflow-hidden group">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-[22px] p-12 md:p-16 relative">
              {/* Content */}
              <div className="text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                  <span className="text-sm font-bold text-orange-400">Limited Time Offer</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Customer Experience?
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses automating customer interactions with AI.
                  <span className="block mt-2 text-orange-400 font-semibold">Start free, scale fast, succeed faster.</span>
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 group/feature">
                      <feature.icon className="w-5 h-5 text-orange-400 group-hover/feature:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-gray-200">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Button
                    size="lg"
                    className="group/btn px-10 py-7 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/60 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    onClick={() => router.push("/signup")}
                  >
                    <Phone className="w-6 h-6" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 hover:border-orange-400 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3"
                    onClick={() => router.push("/contact")}
                  >
                    <Users className="w-6 h-6" />
                    Talk to Sales
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center group">
                        <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fine Print */}
                <p className="text-xs text-gray-500 mt-8">
                  No credit card required • Cancel anytime • Enterprise support available
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Additional Trust Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-semibold">SOC 2 Certified</span>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold">GDPR Compliant</span>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-600">
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