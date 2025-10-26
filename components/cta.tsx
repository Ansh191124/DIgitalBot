"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// 1. Removed the extra 'const' keyword.
export function CTA() {
  const router = useRouter()

  // 2. Added the crucial 'return' statement.
  return (
    <section className="py-20 text-center bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-4">
            Ready to Revolutionize Your Support?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start your free trial today and experience the future of intelligent customer interaction.
          </p>
          <Button
            className="text-lg px-8 py-6 rounded-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            onClick={() => router.push("/signup")}
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* 3. The <style jsx> block must be inside the returned JSX. */}
      {/* Note: This assumes you are using Next.js with the `styled-jsx` package 
          or are manually placing CSS in a component. */}
      <style jsx>{`
        /* Keyframe animations */
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