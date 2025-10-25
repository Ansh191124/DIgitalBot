"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
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
    usdPrice: 55,
    inrPrice: 4500,
    minutes: 300,
    features: [
      { name: "300 AI voice minutes", included: true },
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
    usdPrice: 145,
    inrPrice: 12000,
    minutes: 1000,
    features: [
      { name: "1000 AI voice minutes", included: true },
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

      {/* Hero Section with Subtle Background */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle soft background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-sky-200 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-sky-50 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-6">Pricing</h1>
          <p className="text-lg sm:text-xl font-semibold bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 mb-12 max-w-4xl mx-auto">
            Choose a plan that fits your business needs. Transparent pricing, no hidden fees, and a free trial to get started with AI voice automation.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isINR ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              USD
            </span>
            <Switch
              checked={isINR}
              onCheckedChange={setIsINR}
              className="bg-sky-300 data-[state=checked]:bg-sky-600"
            />
            <span className={`text-sm ${isINR ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              INR
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-sky-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-sky-50 rounded-full opacity-15 blur-3xl"></div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-3xl overflow-visible ${
                plan.popular ? "border-sky-400" : "border-sky-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 rounded-t-3xl"></div>
              )}
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 text-white border-0 shadow-lg z-20 px-4 py-1.5 text-sm font-semibold">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-700 mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.usdPrice ? (
                    <>
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                        {isINR ? `₹${plan.inrPrice.toLocaleString()}` : `$${plan.usdPrice}`}
                      </span>
                      <div className="text-gray-600 text-sm mt-2">
                        {plan.minutes} AI voice minutes
                      </div>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                      Let's Talk
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-lg shadow-sky-300/50"
                      : "bg-white hover:bg-sky-50 text-sky-700 border-2 border-sky-300 hover:border-sky-400"
                  }`}
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50/30 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-sky-50 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">
              Got questions? We've got answers. If you can't find what you're looking for, contact us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-2 border-sky-200 bg-white/90 backdrop-blur-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 rounded-2xl"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 font-semibold">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-sky-100 rounded-3xl p-12 text-center shadow-2xl border-2 border-sky-200 relative overflow-hidden">
            {/* Inner glow effects */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-300 rounded-full opacity-20 filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-400 rounded-full opacity-15 filter blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                  Ready to get started?
                </span>
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
                Join businesses using DigitalBot.ai to transform their customer experience with AI voice agents.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white rounded-full shadow-lg shadow-sky-300/50 font-semibold transition-all duration-300"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-sky-400 text-sky-700 hover:bg-sky-50 hover:border-sky-500 rounded-full font-semibold transition-all duration-300"
                  onClick={() => window.open("https://www.digitalbot.ai/contact", "_blank")}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}