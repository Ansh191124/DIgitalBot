import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AICustomerService() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          AI Voice Agent for Customer Service
        </h1>
        <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto">
          Elevate customer service with <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">intelligent AI voice agents</span>.
        </p>
        <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </section>
      <Footer />
    </main>
  )
}
