import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function VoiceAIBusiness() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          Voice AI for Business
        </h1>
        <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto">
          Enterprise-grade <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">Voice AI solutions</span> that scale with your business needs.
        </p>
        <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
          <Link href="/signup">Start Free Trial</Link>
        </Button>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {icon: Building2, title: "Enterprise Ready", desc: "Built for business scale and reliability"},
            {icon: TrendingUp, title: "Boost Productivity", desc: "Automate routine tasks and free your team"},
            {icon: Shield, title: "Secure & Compliant", desc: "Enterprise-grade security and data protection"},
            {icon: Clock, title: "24/7 Operation", desc: "Always-on voice AI that never sleeps"},
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-sky-200 rounded-lg hover:border-sky-400 transition-all">
              <item.icon className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-lg font-bold text-sky-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
