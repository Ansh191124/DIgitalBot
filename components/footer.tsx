"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Mail, Instagram, Facebook, Sparkles, Zap, Phone, HeadphonesIcon, Bot, MessageSquare, Users, Building2 } from "lucide-react"

export function Footer() {
  const services = [
    { name: "AI Voice Bot", href: "/services/ai-voice-bot", icon: Bot },
    { name: "Voice AI for Business", href: "/services/voice-ai-business", icon: Building2 },
    { name: "Voice Automation Software", href: "/services/voice-automation-software", icon: Zap },
    { name: "AI Customer Support", href: "/services/ai-customer-support", icon: HeadphonesIcon },
    { name: "Conversational AI", href: "/services/conversational-ai", icon: MessageSquare },
    { name: "AI Call Center", href: "/services/ai-call-center", icon: Phone },
    { name: "AI Sales Agent", href: "/services/ai-sales-agent", icon: Users },
    { name: "AI Virtual Receptionist", href: "/services/ai-virtual-receptionist", icon: Sparkles },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white via-orange-50/30 to-white border-t-2 border-orange-100 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-black/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-black/5 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Description - Takes more space */}
          <div className="lg:col-span-4">
            <div className="mb-6 group">
              <Link href="/" className="inline-block relative">
                <span className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="https://res.cloudinary.com/dew9qfpbl/image/upload/f_webp,q_auto:eco,w_160/v1760082124/Gemini_Generated_Image_tgypq9tgypq9tgyp_-_Edited_1_m1xhrt.svg"
                  alt="DigitalBot - AI Voice Assistant"
                  width={200}
                  height={50}
                  loading="lazy"
                  quality={90}
                  className="h-14 w-auto relative z-10 transition-all duration-500 group-hover:scale-105 drop-shadow-xl"
                />
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-base max-w-md">
              Transform your business with <span className="font-bold text-orange-600">intelligent AI voice assistants</span>. 
              Automate customer service, boost engagement, and drive growth with cutting-edge conversational AI that never sleeps.
            </p>

            {/* Social Icons - Enhanced */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, link: "https://twitter.com/digitalbot_ai", label: "Twitter" },
                { icon: Linkedin, link: "https://linkedin.com/company/digitalbot-ai", label: "LinkedIn" },
                { icon: Instagram, link: "https://www.instagram.com/digitalbotai/", label: "Instagram" },
                { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61580924391213", label: "Facebook" },
                { icon: Mail, link: "mailto:contact@digitalbot.ai", label: "Email" }
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative p-3 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <item.icon className="h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-all duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* AI Services - 2 columns */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <h3 className="font-bold text-gray-900 text-lg">AI-Powered Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-orange-100 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-300 hover:shadow-md hover:shadow-orange-500/10"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                      <Icon className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                      {service.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Product & Company Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            {/* Product Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5 text-base flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-500" />
                Product
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Features", href: "/services" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "API", href: "/services#api" },
                  { name: "Docs", href: "/docs" }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-300 group-hover:bg-orange-600 transition-colors duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5 text-base flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-500" />
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact", href: "/contact" }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-300 group-hover:bg-orange-600 transition-colors duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Legal */}
        <div className="border-t-2 border-orange-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 animate-pulse" />
              <p className="text-gray-600 text-sm font-medium">
                © 2025 <span className="font-bold text-gray-900">DigitalBot.ai</span>. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
                Terms of Service
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/cookies" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 font-medium">
              🤖 <span className="text-orange-600 font-bold">Powered by AI</span> • Built for Business • Trusted Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.5; 
          }
        }
        @keyframes pulse-slow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.3; 
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}