import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AIVirtualReceptionist() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          AI Virtual Receptionist
        </h1>
        <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto">
          Your <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">AI-powered virtual receptionist</span> that never sleeps or takes breaks.
        </p>
        <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
          <Link href="/signup">Hire Your AI Receptionist</Link>
        </Button>
      </section>
      <Footer />
    </main>
  )
}
