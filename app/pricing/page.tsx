"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, X, ArrowRight, Zap, Crown, Building } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses getting started with AI chatbots",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      { name: "1 Chatbot", included: true },
      { name: "1,000 conversations/month", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Website integration", included: true },
      { name: "Custom branding", included: false },
      { name: "API access", included: false },
      { name: "Priority support", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Multi-language support", included: false },
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    icon: Crown,
    description: "Ideal for growing businesses with higher conversation volumes",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      { name: "5 Chatbots", included: true },
      { name: "10,000 conversations/month", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Website integration", included: true },
      { name: "Custom branding", included: true },
      { name: "API access", included: true },
      { name: "Multi-channel support", included: true },
      { name: "A/B testing", included: true },
      { name: "Multi-language support", included: false },
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    icon: Building,
    description: "For large organizations with complex requirements",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      { name: "Unlimited chatbots", included: true },
      { name: "Unlimited conversations", included: true },
      { name: "Advanced analytics", included: true },
      { name: "24/7 phone support", included: true },
      { name: "All integrations", included: true },
      { name: "Custom branding", included: true },
      { name: "API access", included: true },
      { name: "Multi-channel support", included: true },
      { name: "A/B testing", included: true },
      { name: "Multi-language support", included: true },
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
    question: "What happens if I exceed my conversation limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional conversation credits.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Our Enterprise plan includes custom solutions, dedicated support, and can be tailored to your specific requirements.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.",
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-300 to-black text-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Simple, Transparent <span className="text-gray-800">Pricing</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Choose the perfect plan for your business. Start with our free trial and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Yearly
            </span>
            <Badge variant="secondary" className="bg-gray-200 text-gray-800">
              Save 20%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border border-gray-400 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-gray-800 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-6 w-6 text-gray-800" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-700">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-gray-800 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-900" : "text-gray-500"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-400 bg-white hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-white via-gray-300 to-black rounded-2xl p-12 text-center text-black shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Join thousands of businesses using DigitalBot.ai to transform their customer experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-900 hover:bg-gray-200 bg-transparent text-gray-900">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
