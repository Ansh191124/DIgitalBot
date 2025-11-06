import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-purple-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/40 via-pink-200/30 to-purple-200/20 blur-3xl rounded-full" />
              <p className="text-4xl font-bold text-gray-900 mb-4 relative">
                Page Not Found
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The URL might be incorrect or the page may have been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 hover:border-orange-500 rounded-xl font-bold w-full sm:w-auto">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t-2 border-purple-200 pt-8">
            <p className="text-sm text-gray-600 mb-4 font-semibold">Popular Pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services" className="text-orange-600 hover:text-orange-700 underline font-medium">
                Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/pricing" className="text-orange-600 hover:text-orange-700 underline font-medium">
                Pricing
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/blog" className="text-orange-600 hover:text-orange-700 underline font-medium">
                Blog
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/docs" className="text-orange-600 hover:text-orange-700 underline font-medium">
                Documentation
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/about" className="text-orange-600 hover:text-orange-700 underline font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
