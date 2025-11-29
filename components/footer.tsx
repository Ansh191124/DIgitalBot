"use client"

import { ArrowRight, Award, Bot, Building2, Clock, Facebook, Globe, HeadphonesIcon, Instagram, Linkedin, Mail, MessageSquare, Phone, Shield, Sparkles, TrendingUp, Twitter, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  
  const services = [
    { name: "AI Voice Bot", href: "/services/ai-voice-bot", icon: Bot, gradient: "from-cyan-400 to-cyan-500", description: "24/7 automated voice assistance" },
    { name: "Voice AI for Business", href: "/services/voice-ai-business", icon: Building2, gradient: "from-cyan-300 to-cyan-500", description: "Enterprise AI solutions" },
    { name: "Voice Automation", href: "/services/voice-automation-software", icon: Zap, gradient: "from-cyan-400 to-cyan-600", description: "Streamline workflows" },
    { name: "AI Customer Support", href: "/services/ai-customer-support", icon: HeadphonesIcon, gradient: "from-cyan-300 to-cyan-600", description: "Smart support system" },
    { name: "Conversational AI", href: "/services/conversational-ai", icon: MessageSquare, gradient: "from-cyan-400 to-cyan-500", description: "Natural conversations" },
    { name: "AI Call Center", href: "/services/ai-call-center", icon: Phone, gradient: "from-cyan-300 to-cyan-500", description: "Automated call handling" },
    { name: "AI Sales Agent", href: "/services/ai-sales-agent", icon: Users, gradient: "from-cyan-400 to-cyan-600", description: "Boost sales conversions" },
    { name: "Virtual Receptionist", href: "/services/ai-virtual-receptionist", icon: Sparkles, gradient: "from-cyan-300 to-cyan-600", description: "Professional front desk AI" },
  ]

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "cyan" },
    { icon: Shield, text: "Enterprise Security", color: "teal" },
    { icon: Award, text: "Award Winning", color: "cyan" },
    { icon: TrendingUp, text: "ROI Guaranteed", color: "cyan" },
  ]

  return (
    <footer className="relative bg-black border-t-2 border-cyan-400/25 overflow-hidden">
      {/* Pure white background, all orange gradients and orbs removed for consistency */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Premium Feature Banner - Purple/Orange */}
        <div className="py-12 mb-8">
          <div className="relative bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 rounded-3xl p-8 shadow-2xl shadow-cyan-400/50 overflow-hidden group border-2 border-cyan-400/30">
            {/* Enhanced Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Decorative sparkles */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-cyan-400/30 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-black">
                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Start Your AI Journey Today
                </h3>
                <p className="text-black/90 text-sm md:text-base font-medium">
                  Join 10,000+ businesses automating customer interactions with AI
                </p>
              </div>
              <Link 
                href="/signup"
                className="group/btn px-8 py-4 bg-black text-cyan-300 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap border-2 border-cyan-400/30 uppercase tracking-widest"
              >
                <span className="text-cyan-300">
                  GET STARTED FREE
                </span>
                <ArrowRight className="w-5 h-5 text-cyan-300 group-hover/btn:translate-x-1 transition-transform" />
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
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/40 via-cyan-300/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Image
                  src="/images/logos/logo.svg"
                  alt="DigitalBot.AI - AI Voice Assistant Platform"
                  width={220}
                  height={48}
                  loading="lazy"
                  quality={95}
                  className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110"
                />
              </Link>
            </div>

            <p className="text-cyan-200 leading-relaxed text-base pr-4">
              Leading <span className="font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">AI VOICE ASSISTANT PLATFORM</span> trusted by enterprises worldwide. 
              Transform customer interactions with intelligent automation.
            </p>

            {/* Enhanced Trust Badges - Purple/Orange */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => {
                const colors = [
                  { bg: 'from-black/90 via-black/95 to-black', border: 'border-cyan-400/50 hover:border-cyan-300', icon: 'from-cyan-400 to-cyan-500', shadow: 'hover:shadow-cyan-400/30' },
                  { bg: 'from-black/90 via-black/95 to-black', border: 'border-cyan-400/50 hover:border-cyan-300', icon: 'from-cyan-300 to-cyan-600', shadow: 'hover:shadow-cyan-400/30' },
                  { bg: 'from-black/90 via-black/95 to-black', border: 'border-cyan-400/50 hover:border-cyan-300', icon: 'from-cyan-400 to-cyan-500', shadow: 'hover:shadow-cyan-400/30' },
                  { bg: 'from-black/90 via-black/95 to-black', border: 'border-cyan-400/50 hover:border-cyan-300', icon: 'from-cyan-300 to-cyan-600', shadow: 'hover:shadow-cyan-400/30' },
                ]
                const colorSet = colors[idx]
                return (
                  <div key={idx} className={`flex items-center gap-2 p-3 bg-black/90 backdrop-blur-sm rounded-xl border-2 ${colorSet.border} shadow-md ${colorSet.shadow} transition-all duration-300 group hover:scale-105`}>
                    <div className={`p-2 bg-gradient-to-br ${colorSet.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-4 h-4 text-cyan-400`} />
                    </div>
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wide">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Enhanced Social Media - Purple/Orange */}
            <div>
              <h4 className="text-sm font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4 flex items-center gap-2 uppercase tracking-widest">
                <Globe className="w-4 h-4 text-cyan-400" />
                CONNECT WITH US
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { icon: Twitter, link: "https://twitter.com/digitalbot_ai", label: "Twitter", color: "from-cyan-400 to-cyan-500" },
                  { icon: Linkedin, link: "https://linkedin.com/company/digitalbot-ai", label: "LinkedIn", color: "from-cyan-300 to-cyan-600" },
                  { icon: Instagram, link: "https://www.instagram.com/digitalbot._ai?utm_source=qr&igsh=MTc3emoxbmdqdmVz", label: "Instagram", color: "from-cyan-400 to-cyan-500" },
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61583885495540", label: "Facebook", color: "from-cyan-300 to-cyan-600" },
                  { icon: Mail, link: "mailto:contact@digitalbot.ai", label: "Email", color: "from-cyan-400 to-cyan-500" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group/social relative"
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-black shadow-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-125 hover:rotate-12 border border-cyan-400/30`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    {/* Enhanced Tooltip */}
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-cyan-400 text-black text-xs rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-cyan-300 font-bold uppercase tracking-wide">
                      {social.label}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced AI Services Grid - Purple/Orange */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-cyan-400 via-cyan-300 to-cyan-500 rounded-xl shadow-lg shadow-cyan-400/30 animate-pulse">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent uppercase tracking-widest">
                  AI-POWERED SOLUTIONS
                </h3>
              </div>
              <p className="text-cyan-200 text-sm font-medium">Explore our comprehensive suite of AI voice automation services</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, idx) => {
                const Icon = service.icon
                const colorSets = [
                  { gradient: 'from-cyan-400 via-cyan-300 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/90 to-black/80' },
                  { gradient: 'from-cyan-300 via-cyan-400 to-cyan-600', border: 'border-cyan-400/50', iconBg: 'from-black/80 to-black/70' },
                  { gradient: 'from-cyan-400 via-cyan-400 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/90 to-black/80' },
                  { gradient: 'from-cyan-300 via-cyan-400 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/80 to-black/70' },
                  { gradient: 'from-cyan-400 via-cyan-300 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/90 to-black/80' },
                  { gradient: 'from-cyan-300 via-cyan-400 to-cyan-600', border: 'border-cyan-400/50', iconBg: 'from-black/80 to-black/70' },
                  { gradient: 'from-cyan-400 via-cyan-400 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/90 to-black/80' },
                  { gradient: 'from-cyan-300 via-cyan-400 to-cyan-500', border: 'border-cyan-400/50', iconBg: 'from-black/80 to-black/70' },
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
                      bg-black/90 backdrop-blur-sm ${colorSet.border} hover:border-transparent shadow-md hover:shadow-xl hover:shadow-cyan-400/30
                      hover:bg-gradient-to-br hover:${colorSet.gradient} hover:scale-105 hover:-translate-y-2
                    `}>
                      {/* Icon with enhanced animation */}
                      <div className={`
                        mb-3 p-3 rounded-xl transition-all duration-500
                        bg-gradient-to-br ${colorSet.iconBg}
                        group-hover/card:bg-cyan-400/30 group-hover/card:backdrop-blur-md group-hover/card:scale-110 group-hover/card:rotate-12
                      `}>
                        <Icon className="w-6 h-6 text-cyan-400 transition-all duration-500 group-hover/card:text-black group-hover/card:scale-110" />
                      </div>
                      
                      {/* Text */}
                      <h4 className="font-bold text-sm mb-1 text-cyan-300 transition-colors duration-500 group-hover/card:text-black uppercase tracking-wide">
                        {service.name}
                      </h4>
                      <p className="text-xs text-cyan-400 transition-colors duration-500 group-hover/card:text-black/90">
                        {service.description}
                      </p>
                      
                      {/* Enhanced Arrow indicator with pulse */}
                      <div className="absolute top-4 right-4 opacity-0 -translate-x-2 transition-all duration-500 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:scale-110">
                        <ArrowRight className="w-4 h-4 text-black animate-pulse" />
                      </div>
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover/card:animate-shimmer" />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Quick Links - Purple/Orange */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-cyan-400/30">
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
                  <h4 className="font-bold text-cyan-300 mb-4 text-sm flex items-center gap-2 uppercase tracking-widest">
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-500 rounded-full" />
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href}
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:w-4 transition-all duration-300" />
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

        {/* Enhanced Bottom Bar - Purple/Orange */}
        <div className="border-t-2 border-cyan-400/50 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Enhanced Copyright with Animation - Purple/Orange */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/30" />
              </div>
              <p className="text-cyan-200 text-sm font-semibold">
                © 2025 <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">DIGITALBOT.AI</span> • ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Enhanced Badges - Purple/Orange */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="px-4 py-2 bg-gradient-to-r from-black/90 via-black/95 to-black backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/30">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">SOC 2 CERTIFIED</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-black/90 via-black/95 to-black backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/30">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">99.9% UPTIME</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-black/90 via-black/95 to-black backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/30">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">TRUSTED BY 10K+</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tagline - Purple/Orange */}
          <div className="mt-6 text-center">
            <p className="text-sm font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent uppercase tracking-widest">
              🤖 POWERED BY ADVANCED AI • BUILT FOR ENTERPRISE • TRUSTED WORLDWIDE • NEVER SLEEPS, NEVER QUITS ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


