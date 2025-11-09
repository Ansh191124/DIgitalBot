"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

      {/* Hero Section - Enhanced Creative Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <PageBackground />

        {/* Floating Gradient Orbs */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-purple-400">
              💎 Premium Pricing
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Choose Your Perfect
            </span>
            <span className="inline-block px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-2xl text-2xl sm:text-3xl lg:text-4xl relative overflow-hidden border-2 border-purple-400">
              <span className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 via-transparent to-transparent"></span>
              <span className="relative z-10">AI Voice Plan</span>
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-white/90 backdrop-blur-md border-2 border-purple-500/50 rounded-2xl shadow-2xl">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              <span className="font-bold text-purple-600">Transparent pricing</span>, no hidden fees, and a <span className="font-bold text-purple-600">free trial</span> to get started with AI voice automation. Choose a plan that fits your business needs.
            </p>
          </div>

          {/* Currency Toggle - Enhanced */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-base font-bold ${!isINR ? "text-purple-600 scale-110" : "text-gray-600"} transition-all`}>
              USD 💵
            </span>
            <div className="relative">
              <Switch
                checked={isINR}
                onCheckedChange={setIsINR}
                className="bg-gradient-to-r from-purple-500 to-purple-600 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-purple-700 shadow-lg"
              />
            </div>
            <span className={`text-base font-bold ${isINR ? "text-purple-600 scale-110" : "text-gray-600"} transition-all`}>
              INR 🇮🇳
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Enhanced Creative Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full opacity-8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-purple-400">
                🎯 Choose Your Plan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-4">
              Enterprise-Grade Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const colors = [
                { gradient: 'from-purple-500 via-purple-500 to-purple-600', border: 'border-purple-500/30', hover: 'hover:border-purple-500', icon: 'from-purple-400 to-purple-500', shadow: 'hover:shadow-orange-500/30', badge: 'from-purple-500 to-purple-500' },
                { gradient: 'from-purple-500 via-purple-500 to-purple-600', border: 'border-purple-500/30', hover: 'hover:border-purple-500', icon: 'from-purple-400 to-purple-500', shadow: 'hover:shadow-orange-500/30', badge: 'from-purple-500 to-purple-500' },
                { gradient: 'from-blue-500 via-purple-500 to-purple-500', border: 'border-blue-500/30', hover: 'hover:border-blue-500', icon: 'from-blue-400 to-purple-500', shadow: 'hover:shadow-blue-500/30', badge: 'from-blue-500 to-purple-500' },
              ];
              const color = colors[index];
              
              return (
                <Card
                  key={index}
                  className={`relative border-2 ${plan.popular ? 'border-purple-500 hover:border-purple-400' : `${color.border} ${color.hover}`} bg-white/70 backdrop-blur-md shadow-2xl ${plan.popular ? 'hover:shadow-orange-500/50' : color.shadow} hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden group`}
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-400/20 via-purple-400/20 to-purple-400/20 rounded-full filter blur-3xl group-hover:blur-2xl transition-all"></div>
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className={`bg-gradient-to-r ${color.badge} text-white border-2 border-white shadow-2xl px-6 py-2 text-sm font-extrabold animate-pulse`}>
                        ⭐ Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-10 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${color.icon} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all border border-purple-400/30`}>
                      <plan.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-gray-900 font-extrabold mb-3">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-700 text-base font-medium px-4">{plan.description}</CardDescription>
                    <div className="mt-8">
                      {plan.usdPrice ? (
                        <>
                          <div className={`text-5xl sm:text-6xl font-extrabold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent mb-2`}>
                            <span suppressHydrationWarning>
                              {isINR ? `₹${plan.inrPrice.toLocaleString('en-IN')}` : `$${plan.usdPrice}`}
                            </span>
                          </div>
                          <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-purple-500/50 shadow-lg">
                            <span className="text-purple-700 font-bold text-sm">
                              {plan.minutes} AI voice minutes
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent`}>
                          Let's Talk
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-8 px-6 relative z-10">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${color.gradient} flex items-center justify-center mr-3 shrink-0 mt-0.5 shadow-lg`}>
                            <Check className="h-4 w-4 text-white font-bold" />
                          </div>
                          <span className="text-gray-800 font-medium leading-relaxed">
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full rounded-xl font-bold transition-all duration-300 h-14 text-lg shadow-2xl ${
                        plan.popular
                          ? `bg-gradient-to-r ${color.gradient} text-white hover:scale-105 border-2 border-purple-400 shadow-orange-500/40`
                          : `bg-white/50 text-gray-800 border-2 ${color.border} ${color.hover} hover:scale-105 backdrop-blur-sm`
                      }`}
                      onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced Creative Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(249, 115, 22, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full opacity-8 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-purple-400">
                ❓ Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-4">
              Everything You Need to Know
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => {
                const colors = [
                  { border: 'border-purple-500/30', hover: 'hover:border-purple-500', bg: 'from-white to-white', icon: 'from-purple-600 to-purple-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-purple-500/30', hover: 'hover:border-purple-500', bg: 'from-white to-white', icon: 'from-purple-600 to-purple-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-purple-500/30', hover: 'hover:border-purple-500', bg: 'from-white to-white', icon: 'from-purple-600 to-purple-700', shadow: 'hover:shadow-orange-500/30' },
                  { border: 'border-purple-500/30', hover: 'hover:border-purple-500', bg: 'from-white to-white', icon: 'from-purple-600 to-purple-700', shadow: 'hover:shadow-orange-500/30' },
                ];
                const color = colors[index % colors.length];

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-2 ${color.border} ${color.hover} bg-gradient-to-br ${color.bg} backdrop-blur-md rounded-2xl px-6 py-2 shadow-xl ${color.shadow} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden`}
                  >
                    {/* Decorative Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <AccordionTrigger className="text-left font-bold text-purple-800 text-lg hover:no-underline py-6 group relative">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full opacity-8 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl border-2 border-purple-500/50 relative overflow-hidden">
            {/* Inner Decorative Glows */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 opacity-20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-600 opacity-20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold text-sm uppercase tracking-wider shadow-2xl animate-pulse border-2 border-purple-400">
                  🚀 Start Your Journey
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                  Ready to Transform Your
                </span>
                <br />
                <span className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-2xl shadow-2xl border-2 border-purple-400 animate-pulse">
                  Customer Experience?
                </span>
              </h2>

              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-500/50 shadow-lg">
                Join thousands of businesses using AI voice assistants to automate calls, boost conversions, and delight customers 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-purple-500 to-purple-600 text-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 text-lg px-10 py-7 rounded-xl font-bold border-2 border-purple-400"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/50 text-gray-800 border-2 border-purple-500/50 hover:border-purple-500 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 text-lg px-10 py-7 rounded-xl font-bold backdrop-blur-sm"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Contact Sales
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 items-center">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-500 animate-pulse"></div>
                  <span className="font-bold text-gray-700">🎯 No Credit Card</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 animate-pulse"></div>
                  <span className="font-bold text-gray-700">⚡ Setup in 5 Minutes</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-blue-500/50 hover:scale-105 transition-all">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
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






