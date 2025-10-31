import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AILeadGeneration() {
  return (
    <main className="min-h-screen bg-white text-sky-900">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          AI Voice Bot for Lead Generation
        </h1>
        <p className="text-xl text-sky-700 mb-8 max-w-3xl mx-auto">
          Generate and qualify leads automatically with <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">AI voice bots</span>.
        </p>
        <Button size="lg" className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white shadow-xl" asChild>
          <Link href="/signup">Start Generating Leads</Link>
        </Button>
      </section>
      <Footer />
    </main>
  )
}
