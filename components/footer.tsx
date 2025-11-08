"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Mail, Instagram, Facebook, Sparkles, Zap, Phone, HeadphonesIcon, Bot, MessageSquare, Users, Building2, ArrowRight, Globe, Clock, Shield, Award, TrendingUp } from "lucide-react"

export function Footer() {
  
  const services = [
    { name: "AI Voice Bot", href: "/services/ai-voice-bot", icon: Bot, gradient: "from-cyan-500 to-teal-500", description: "24/7 automated voice assistance" },
    { name: "Voice AI for Business", href: "/services/voice-ai-business", icon: Building2, gradient: "from-blue-500 to-cyan-500", description: "Enterprise AI solutions" },
    { name: "Voice Automation", href: "/services/voice-automation-software", icon: Zap, gradient: "from-indigo-500 to-blue-500", description: "Streamline workflows" },
    { name: "AI Customer Support", href: "/services/ai-customer-support", icon: HeadphonesIcon, gradient: "from-violet-500 to-indigo-500", description: "Smart support system" },
    { name: "Conversational AI", href: "/services/conversational-ai", icon: MessageSquare, gradient: "from-cyan-500 to-teal-500", description: "Natural conversations" },
    { name: "AI Call Center", href: "/services/ai-call-center", icon: Phone, gradient: "from-blue-500 to-cyan-500", description: "Automated call handling" },
    { name: "AI Sales Agent", href: "/services/ai-sales-agent", icon: Users, gradient: "from-indigo-500 to-blue-500", description: "Boost sales conversions" },
    { name: "Virtual Receptionist", href: "/services/ai-virtual-receptionist", icon: Sparkles, gradient: "from-violet-500 to-indigo-500", description: "Professional front desk AI" },
  ]

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "cyan" },
    { icon: Shield, text: "Enterprise Security", color: "teal" },
    { icon: Award, text: "Award Winning", color: "blue" },
    { icon: TrendingUp, text: "ROI Guaranteed", color: "cyan" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t-2 border-cyan-500/50 overflow-hidden">
      {/* Trading Platform Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(20,184,166,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.1)_0%,_transparent_70%)]" />
      
      {/* Enhanced Glass Morphism Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/30 via-teal-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-teal-400/25 via-cyan-400/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-2/3 w-80 h-80 bg-gradient-to-tr from-cyan-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Premium Feature Banner - Cyan/Teal */}
        <div className="py-12 mb-8">
          <div className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 rounded-3xl p-8 shadow-2xl shadow-cyan-500/50 overflow-hidden group border-2 border-white/30">
            {/* Enhanced Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Decorative sparkles */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-white/30 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  Start Your AI Journey Today
                </h3>
                <p className="text-white/95 text-base md:text-lg font-medium">
                  Join 10,000+ businesses automating customer interactions with AI
                </p>
              </div>
              <Link 
                href="/signup"
                className="group/btn px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap border-2 border-white/50"
              >
                <span className="text-white">
                  Get Started Free
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-4 space-y-6">
            <div className="group relative inline-block">
              <Link href="/" className="block">
                {/* Glow effect - Cyan/Teal */}
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/40 via-teal-400/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Image
                  src="/images/logos/footer-logo.svg"
                  alt="DigitalBot.AI - AI Voice Assistant Platform"
                  width={220}
                  height={48}
                  loading="lazy"
                  quality={95}
                  className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </Link>
            </div>

            <p className="text-gray-300 leading-relaxed text-base pr-4">
              Leading <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">AI Voice Assistant Platform</span> trusted by enterprises worldwide. 
              Transform customer interactions with intelligent automation.
            </p>

            {/* Enhanced Trust Badges - Cyan/Teal */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => {
                const colors = [
                  { bg: 'from-gray-800/80 via-gray-900/60 to-gray-800/80', border: 'border-cyan-500/50 hover:border-cyan-400', icon: 'from-cyan-500 to-teal-500', shadow: 'hover:shadow-cyan-400/30' },
                  { bg: 'from-gray-800/70 via-gray-900/50 to-gray-800/70', border: 'border-teal-500/50 hover:border-teal-400', icon: 'from-blue-500 to-cyan-500', shadow: 'hover:shadow-teal-400/30' },
                  { bg: 'from-gray-800/80 via-gray-900/60 to-gray-800/80', border: 'border-blue-500/50 hover:border-blue-400', icon: 'from-indigo-500 to-blue-500', shadow: 'hover:shadow-blue-400/30' },
                  { bg: 'from-gray-800/70 via-gray-900/50 to-gray-800/70', border: 'border-cyan-500/50 hover:border-cyan-400', icon: 'from-cyan-500 to-teal-500', shadow: 'hover:shadow-cyan-400/30' },
                ]
                const colorSet = colors[idx]
                return (
                  <div key={idx} className={`flex items-center gap-2 p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border-2 ${colorSet.border} shadow-md ${colorSet.shadow} transition-all duration-300 group hover:scale-105`}>
                    <div className={`p-2 bg-gradient-to-br ${colorSet.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-4 h-4 text-cyan-400`} />
                    </div>
                    <span className="text-xs font-semibold text-gray-200">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Enhanced Social Media - Cyan/Teal */}
            <div>
              <h4 className="text-sm font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Connect With Us
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { icon: Twitter, link: "https://twitter.com/digitalbot_ai", label: "Twitter", color: "from-cyan-500 to-teal-500" },
                  { icon: Linkedin, link: "https://linkedin.com/company/digitalbot-ai", label: "LinkedIn", color: "from-blue-500 to-cyan-500" },
                  { icon: Instagram, link: "https://www.instagram.com/digitalbotai/", label: "Instagram", color: "from-indigo-500 to-blue-500" },
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61580924391213", label: "Facebook", color: "from-violet-500 to-indigo-500" },
                  { icon: Mail, link: "mailto:contact@digitalbot.ai", label: "Email", color: "from-cyan-500 to-teal-500" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group/social relative"
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-125 hover:rotate-12 border border-white/30`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    {/* Enhanced Tooltip */}
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
                      {social.label}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced AI Services Grid - Cyan/Teal */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 rounded-xl shadow-lg animate-pulse">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-medium">Explore our comprehensive suite of AI voice automation services</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, idx) => {
                const Icon = service.icon
                const colorSets = [
                  { gradient: 'from-cyan-500 via-teal-500 to-cyan-600', border: 'border-cyan-500/50', iconBg: 'from-gray-800/80 to-gray-900/80' },
                  { gradient: 'from-blue-500 via-cyan-500 to-blue-600', border: 'border-blue-500/50', iconBg: 'from-gray-800/70 to-gray-900/70' },
                  { gradient: 'from-indigo-500 via-blue-500 to-indigo-600', border: 'border-indigo-500/50', iconBg: 'from-gray-800/80 to-gray-900/80' },
                  { gradient: 'from-violet-500 via-indigo-500 to-violet-600', border: 'border-violet-500/50', iconBg: 'from-gray-800/70 to-gray-900/70' },
                  { gradient: 'from-cyan-500 via-teal-500 to-cyan-600', border: 'border-cyan-500/50', iconBg: 'from-gray-800/80 to-gray-900/80' },
                  { gradient: 'from-blue-500 via-cyan-500 to-blue-600', border: 'border-blue-500/50', iconBg: 'from-gray-800/70 to-gray-900/70' },
                  { gradient: 'from-indigo-500 via-blue-500 to-indigo-600', border: 'border-indigo-500/50', iconBg: 'from-gray-800/80 to-gray-900/80' },
                  { gradient: 'from-violet-500 via-indigo-500 to-violet-600', border: 'border-violet-500/50', iconBg: 'from-gray-800/70 to-gray-900/70' },
                ]
                const colorSet = colorSets[idx % colorSets.length]
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group/card relative"
                  >
                    <div className={`
                      relative p-5 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                      bg-gray-800/80 backdrop-blur-sm ${colorSet.border} hover:border-transparent shadow-md hover:shadow-xl hover:shadow-cyan-400/30
                      hover:bg-gradient-to-br hover:${colorSet.gradient} hover:scale-105 hover:-translate-y-2
                    `}>
                      {/* Icon with enhanced animation */}
                      <div className={`
                        mb-3 p-3 rounded-xl transition-all duration-500
                        bg-gradient-to-br ${colorSet.iconBg}
                        group-hover/card:bg-white/30 group-hover/card:backdrop-blur-md group-hover/card:scale-110 group-hover/card:rotate-12
                      `}>
                        <Icon className="w-6 h-6 text-cyan-400 transition-all duration-500 group-hover/card:text-white group-hover/card:scale-110" />
                      </div>
                      
                      {/* Text */}
                      <h4 className="font-bold text-sm mb-1 text-gray-200 transition-colors duration-500 group-hover/card:text-white">
                        {service.name}
                      </h4>
                      <p className="text-xs text-gray-400 transition-colors duration-500 group-hover/card:text-white/95">
                        {service.description}
                      </p>
                      
                      {/* Enhanced Arrow indicator with pulse */}
                      <div className="absolute top-4 right-4 opacity-0 -translate-x-2 transition-all duration-500 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:scale-110">
                        <ArrowRight className="w-4 h-4 text-white animate-pulse" />
                      </div>
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:animate-shimmer" />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Quick Links - Cyan/Teal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-cyan-500/30">
              {[
                { title: "Product", links: [
                  { name: "Features", href: "/services" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "API Docs", href: "/docs" },
                  { name: "Integration", href: "/services#api" }
                ]},
                { title: "Company", links: [
                  { name: "About Us", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact", href: "/contact" }
                ]},
                { title: "Resources", links: [
                  { name: "Tutorials", href: "/docs" },
                  { name: "Case Studies", href: "/blog" },
                  { name: "Webinars", href: "/blog" }
                ]},
                { title: "Legal", links: [
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                  { name: "Security", href: "/security" },
                  { name: "Compliance", href: "/compliance" }
                ]}
              ].map((column, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-gray-200 mb-4 text-sm flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-500 rounded-full" />
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-4 transition-all duration-300" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar - Cyan/Teal */}
        <div className="border-t-2 border-cyan-500/50 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Enhanced Copyright with Animation - Cyan/Teal */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 shadow-lg" />
              </div>
              <p className="text-gray-300 text-sm font-semibold">
                © 2025 <span className="font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">DigitalBot.ai</span> • All rights reserved
              </p>
            </div>

            {/* Enhanced Badges - Cyan/Teal */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="px-4 py-2 bg-gradient-to-r from-gray-800/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm border-2 border-cyan-500/50 hover:border-cyan-400 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/30">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-400">SOC 2 Certified</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-gray-800/70 via-gray-900/50 to-gray-800/70 backdrop-blur-sm border-2 border-teal-500/50 hover:border-teal-400 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-400/30">
                <Award className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold text-teal-400">99.9% Uptime</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-gray-800/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm border-2 border-cyan-500/50 hover:border-cyan-400 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/30">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-400">Trusted by 10K+</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tagline - Cyan/Teal */}
          <div className="mt-6 text-center">
            <p className="text-sm font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              🤖 Powered by Advanced AI • Built for Enterprise • Trusted Worldwide • Never Sleeps, Never Quits ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}