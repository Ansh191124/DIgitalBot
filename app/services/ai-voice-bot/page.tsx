import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Brain, Mic, BarChart3, Shield, Workflow, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced NLP and machine learning for accurate voice understanding and response generation.",
  },
  {
    icon: Mic,
    title: "Natural Voice Interaction",
    description: "Crystal-clear voice synthesis that sounds human and engages customers effectively.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Design conversation flows tailored to your specific business processes and needs.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance metrics and gain insights from every voice interaction.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry security standards.",
  },
  {
    icon: Bot,
    title: "Omnichannel Integration",
    description: "Seamlessly integrate voice bots across phone, web, mobile, and messaging platforms.",
  },
]

export default function AIVoiceBot() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            AI Voice Bot
          </h1>
          <p className="text-lg sm:text-xl font-semibold bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 mb-8 max-w-3xl mx-auto">
            Deploy <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">intelligent voice bots</span> that automate customer interactions with natural, human-like conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
              <Link href="/signup">Try Voice Bot Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Advanced Voice Bot Capabilities
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Start Automating with Voice Bots Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Build, deploy, and scale AI voice bots in minutes, not months.
          </p>
          <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
