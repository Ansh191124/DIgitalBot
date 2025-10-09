"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CTA() {
  const router = useRouter()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-100 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full opacity-25 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-[250px] h-[250px] bg-sky-100 rounded-full opacity-15 filter blur-2xl animate-pulse-slow"></div>

        {/* Floating glowing particles */}
        <div className="absolute w-2 h-2 bg-sky-400 rounded-full animate-spin-slow opacity-50 top-10 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-sky-300 rounded-full animate-spin-slow opacity-40 bottom-20 right-1/3"></div>
        <div className="absolute w-1 h-1 bg-sky-200 rounded-full animate-spin-slow opacity-30 top-1/2 right-1/3"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-14 text-center shadow-xl hover:shadow-2xl 
                        transition-all duration-500 animate-fade-in-up">
          
          {/* Heading with Black + Skyblue */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-black">Ready to Deploy Your</span>{" "}
            <span className="text-sky-600">AI Chatbot?</span>
          </h2>

          <p className="text-xl text-sky-700/90 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses using DigitalBot.ai to automate customer service and boost engagement rates.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 
                         hover:from-sky-600 hover:via-sky-300 hover:to-sky-700 
                         text-white font-semibold shadow-lg shadow-sky-300/50 
                         rounded-full transition-all duration-300 animate-bounce-slow"
              onClick={() => router.push("/contact")}
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-sky-700/80 mt-5">
            No credit card required • 14-day free trial • Setup in minutes
          </p>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  )
}