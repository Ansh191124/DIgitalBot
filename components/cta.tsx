"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-white via-gray-100 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 rounded-2xl p-12 text-center animate-fade-in-up text-black dark:text-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Deploy Your AI Chatbot?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of businesses using DigitalBot.ai to automate customer service and boost engagement rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
  size="lg"
  className="bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#1f1f1f] 
             hover:from-[#3d3d3d] hover:via-[#4a4a4a] hover:to-[#2a2a2a] 
             text-white font-semibold shadow-lg group transition-all duration-300"
>
  <MessageCircle className="mr-2 h-4 w-4" /> Start buliding your bot
</Button>

            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  )
}
