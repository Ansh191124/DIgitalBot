"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LeadFormMini } from "@/components/lead-form-mini"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowRight, Check, Rocket, Sparkles, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const plans = [
  {
    name: "Launch",
    icon: Rocket,
    description: "Ideal for startups, freelancers, and early adopters",
    usdPrice: 9,
    inrPrice: 800,
    minutes: 100,
    features: [
      { name: "100 AI voice minutes", included: true },
      { name: "2 voice agents, simultaneous channels (Any Language)", included: true },
      { name: "Call summary", included: true },
      { name: "AI analytics dashboard and leads", included: true },
      { name: "Incoming/Outgoing telephone calls", included: true },
      { name: "Website voice bot integration", included: true },
      { name: "Dedicated support", included: true },
      { name: "Valid for two months", included: true },
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Scale",
    icon: TrendingUp,
    description: "Perfect for growing businesses with higher conversation volumes",
    usdPrice: 45,
    inrPrice: 4000,
    minutes: 600,
    features: [
      { name: "600 AI voice minutes", included: true },
      { name: "5 voice agents, simultaneous channels (Any Language)", included: true },
      { name: "Call summary", included: true },
      { name: "AI based analytics dashboard and leads", included: true },
      { name: "Incoming/Outgoing telephone calls", included: true },
      { name: "Website voice bot integration", included: true },
      { name: "Dedicated support", included: true },
      { name: "Valid for three months", included: true },
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Custom",
    icon: Sparkles,
    description: "Tailored solutions based on your specific requirements",
    usdPrice: null,
    inrPrice: null,
    minutes: null,
    features: [
      { name: "Custom AI voice minutes", included: true },
      { name: "Unlimited voice agents", included: true },
      { name: "Advanced call analytics", included: true },
      { name: "Custom integrations", included: true },
      { name: "Priority support", included: true },
      { name: "Flexible validity period", included: true },
      { name: "White-label options", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
  },
  {
    question: "What happens if I exceed my voice minute limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional voice minutes as add-ons.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Our Custom plan includes tailored solutions, dedicated support, and can be configured to your specific requirements. Contact our sales team for more details.",
  },
  {
    question: "What languages are supported?",
    answer: "Our AI voice agents support any language, allowing you to serve customers globally without language barriers.",
  },
]

export default function Pricing() {
  const [isINR, setIsINR] = useState(false)
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Request a Demo Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <PageBackground />
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-400">
              🚀 Request a Demo
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              Experience DigitalBot in Action
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl text-2xl sm:text-3xl lg:text-4xl relative overflow-hidden border-2 border-orange-400">
              <span className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 via-transparent to-transparent"></span>
              <span className="relative z-10">See How AI Voice Can Transform Your Business</span>
            </span>
          </h1>
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-white/90 backdrop-blur-md border-2 border-orange-500/50 rounded-2xl shadow-2xl">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              Ready to see the power of AI voice automation? Request a personalized demo and our team will show you how DigitalBot can streamline your customer interactions, boost productivity, and deliver real business results.
            </p>
          </div>
          <Button
            size="lg"
            className="px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
          >
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section - Small Precise */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/80">
        <div className="container mx-auto max-w-xl">
          <LeadFormMini />
        </div>
      </section>

      {/* FAQ Section - Enhanced Creative Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(168, 86, 247, 0.2) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(249, 115, 22, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="absolute top-20 left-20 w-48 h-48 bg-orange-500 rounded-full opacity-8 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-400">
                ❓ Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent mb-4">
              Everything You Need to Know
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => {
                const colors = [
                  { border: 'border-orange-500/30', hover: 'hover:border-orange-500', bg: 'from-white to-white', icon: 'from-orange-600 to-orange-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-orange-500/30', hover: 'hover:border-orange-500', bg: 'from-white to-white', icon: 'from-orange-600 to-orange-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-orange-500/30', hover: 'hover:border-orange-500', bg: 'from-white to-white', icon: 'from-orange-600 to-orange-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-orange-500/30', hover: 'hover:border-orange-500', bg: 'from-white to-white', icon: 'from-orange-600 to-orange-700', shadow: 'hover:shadow-orange-500/30' },
                ];
                const color = colors[index % colors.length];

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-2 ${color.border} ${color.hover} bg-gradient-to-br ${color.bg} backdrop-blur-md rounded-2xl px-6 py-2 shadow-xl ${color.shadow} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden`}
                  >
                    {/* Decorative Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <AccordionTrigger className="text-left font-bold text-orange-800 text-lg hover:no-underline py-6 group relative">
                      <div className="flex items-center gap-4 pr-4 w-full">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color.icon} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <span className="flex-1">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2 pb-6 pl-14 pr-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Creative Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br bg-white overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-orange-500 rounded-full opacity-8 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl border-2 border-orange-500/50 relative overflow-hidden">
            {/* Inner Decorative Glows */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 opacity-20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-tr from-orange-400 via-orange-600 to-orange-600 opacity-20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-orange-400">
                  🚀 Start Your Journey
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
                  Ready to Transform Your
                </span>
                <br />
                <span className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-2xl shadow-2xl border-2 border-orange-400 animate-pulse">
                  Customer Experience?
                </span>
              </h2>

              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-orange-500/50 shadow-lg">
                Join thousands of businesses using AI voice assistants to automate calls, boost conversions, and delight customers 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 text-lg px-10 py-7 rounded-xl font-bold border-2 border-orange-400"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/50 text-gray-800 border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 text-lg px-10 py-7 rounded-xl font-bold backdrop-blur-sm"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Contact Sales
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 items-center">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-orange-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-500 animate-pulse"></div>
                  <span className="font-bold text-gray-700">🎯 No Credit Card</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-orange-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 animate-pulse"></div>
                  <span className="font-bold text-gray-700">⚡ Setup in 5 Minutes</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-orange-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 animate-pulse"></div>
                  <span className="font-bold text-gray-700">💎 Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}









