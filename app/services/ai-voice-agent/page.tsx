import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Zap, Clock, TrendingUp, Phone, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Bot,
    title: "Intelligent Voice AI",
    description: "Advanced AI agents that understand context and respond naturally to customer inquiries.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. Our AI voice agents work round the clock without breaks.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Provide immediate answers to customer questions with zero wait time.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description: "Handle unlimited concurrent calls without adding more staff.",
  },
  {
    icon: Phone,
    title: "Natural Conversations",
    description: "Human-like voice interactions that feel authentic and engaging.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Integrate with phone systems, web chat, and messaging platforms.",
  },
]

const benefits = [
  "Reduce call handling costs by up to 70%",
  "Improve customer satisfaction scores",
  "Scale customer support instantly",
  "Free your team for complex tasks",
  "Gain insights from every conversation",
  "Integrate with existing CRM systems",
]

export default function AIVoiceAgent() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            AI Voice Agent
          </h1>
          <p className="text-lg sm:text-xl font-semibold bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 mb-8 max-w-3xl mx-auto">
            Transform your customer service with <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">intelligent AI voice agents</span> that never sleep, never get sick, and never take breaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Powerful AI Voice Agent Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-linear-to-r from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-sky-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Why Choose Our AI Voice Agents?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-sky-200 hover:border-sky-400 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-linear-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center mt-1">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses using AI voice agents to deliver exceptional customer experiences.
          </p>
          <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
