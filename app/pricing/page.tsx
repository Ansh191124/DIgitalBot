"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, X, ArrowRight, Zap, Crown, Building } from "lucide-react"
import { useRouter } from "next/navigation";

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Simple & <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">Transparent Pricing</span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">
            Pick the perfect plan for your business. Start with our free trial and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="bg-sky-300 data-[state=checked]:bg-sky-600"
            />
            <span className={`text-sm ${isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Yearly
            </span>
            <Badge variant="secondary" className="bg-gradient-to-r from-sky-500 to-sky-400 text-white border-0">
              Save 20%
            </Badge>
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
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 text-lg">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      {feature.included ? (
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <X className="h-3 w-3 text-gray-400" />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-900 font-medium" : "text-gray-500"}>
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
                  onClick={() => router.push("/contact")}
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
                Join thousands of businesses using DigitalBot.ai to transform their customer experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white rounded-full shadow-lg shadow-sky-300/50 font-semibold transition-all duration-300"
                  onClick={() => router.push("/signup")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-sky-400 text-sky-700 hover:bg-sky-50 hover:border-sky-500 rounded-full font-semibold transition-all duration-300"
                  onClick={() => router.push("/contact")}
                >
                  Contact Sales
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}