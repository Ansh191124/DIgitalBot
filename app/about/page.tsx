import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb, ArrowRight } from "lucide-react"



const values = [
  {
    icon: Target,
    title: "Customer-Centric",
    description: "Every feature we build is designed to solve real customer problems and drive business value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of AI technology to deliver cutting-edge conversational experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in AI accuracy, security, and performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of human-AI collaboration to transform businesses.",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-sky-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/50 to-transparent dark:from-sky-900/30 blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent drop-shadow-md">
              DigitalBot.ai
            </span>
          </h1>
          <p className="text-xl text-sky-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're on a mission to democratize AI-powered customer service, making intelligent chatbots accessible to
            businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-100 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-sky-800 dark:text-gray-300 mb-6">
                Founded in 2021, DigitalBot.ai emerged from a simple observation: businesses were struggling to provide
                24/7 customer support while maintaining quality and personal touch. Our founders, with backgrounds in AI
                research and enterprise software, saw an opportunity to bridge this gap.
              </p>
              <p className="text-sky-800 dark:text-gray-300 mb-6">
                Today, we serve over 10,000 businesses worldwide, processing millions of customer conversations daily.
                Our AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents that
                understand context, emotion, and intent.
              </p>
              <Button className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:via-sky-600 hover:to-sky-500 text-white rounded-full shadow-lg hover:shadow-sky-300/50 transition-all">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/70 dark:bg-slate-900/60 rounded-2xl border border-sky-200 dark:border-slate-700 backdrop-blur-md p-8 shadow-2xl hover:shadow-sky-300/40 transition-all">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">10K+</div>
                    <div className="text-sky-700 dark:text-gray-400">Active Businesses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">50M+</div>
                    <div className="text-sky-700 dark:text-gray-400">Conversations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">99.9%</div>
                    <div className="text-sky-700 dark:text-gray-400">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">24/7</div>
                    <div className="text-sky-700 dark:text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50 to-sky-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-sky-700 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at DigitalBot.ai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border border-sky-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 rounded-2xl shadow-xl hover:shadow-sky-200/50 backdrop-blur-md transition-all"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-sky-700 dark:text-sky-400">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sky-800 dark:text-gray-400">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     

      <Footer />
    </main>
  )
}