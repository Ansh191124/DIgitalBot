"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Mail, Instagram, Facebook, Sparkles, Zap, Phone, HeadphonesIcon, Bot, MessageSquare, Users, Building2, ArrowRight, Globe, Clock, Shield, Award, TrendingUp } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  
  const services = [
    { name: "AI Voice Bot", href: "/services/ai-voice-bot", icon: Bot, gradient: "from-orange-400 to-orange-600", description: "24/7 automated voice assistance" },
    { name: "Voice AI for Business", href: "/services/voice-ai-business", icon: Building2, gradient: "from-orange-500 to-red-500", description: "Enterprise AI solutions" },
    { name: "Voice Automation", href: "/services/voice-automation-software", icon: Zap, gradient: "from-yellow-400 to-orange-500", description: "Streamline workflows" },
    { name: "AI Customer Support", href: "/services/ai-customer-support", icon: HeadphonesIcon, gradient: "from-orange-400 to-pink-500", description: "Smart support system" },
    { name: "Conversational AI", href: "/services/conversational-ai", icon: MessageSquare, gradient: "from-orange-500 to-purple-500", description: "Natural conversations" },
    { name: "AI Call Center", href: "/services/ai-call-center", icon: Phone, gradient: "from-red-400 to-orange-600", description: "Automated call handling" },
    { name: "AI Sales Agent", href: "/services/ai-sales-agent", icon: Users, gradient: "from-orange-400 to-amber-600", description: "Boost sales conversions" },
    { name: "Virtual Receptionist", href: "/services/ai-virtual-receptionist", icon: Sparkles, gradient: "from-orange-300 to-orange-600", description: "Professional front desk AI" },
  ]

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "orange" },
    { icon: Shield, text: "Enterprise Security", color: "red" },
    { icon: Award, text: "Award Winning", color: "amber" },
    { icon: TrendingUp, text: "ROI Guaranteed", color: "orange" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white via-orange-50/50 to-purple-50/50 border-t-2 border-gradient-to-r from-orange-300 via-pink-300 to-purple-300 overflow-hidden">
      {/* Enhanced Creative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/50 via-pink-200/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/40 via-blue-200/30 to-transparent pointer-events-none" />
      
      {/* Enhanced Animated Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-300/40 via-pink-300/30 to-purple-300/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/30 via-blue-400/25 to-cyan-300/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-pink-300/25 via-orange-300/25 to-teal-300/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Premium Feature Banner */}
        <div className="py-12 mb-8">
          <div className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-purple-500/60 overflow-hidden group border-2 border-white/30">
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
                className="group/btn px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap border-2 border-white/50"
                style={{ backgroundColor: 'white' }}
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Get Started Free
                </span>
                <ArrowRight className="w-5 h-5 text-purple-600 group-hover/btn:translate-x-1 transition-transform" />
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
                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-300/40 via-pink-300/40 to-purple-300/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Image
                  src="/images/logos/footer-logo.png"
                  alt="DigitalBot.AI - AI Voice Assistant Platform"
                  width={220}
                  height={55}
                  loading="lazy"
                  quality={95}
                  className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed text-base pr-4">
              Leading <span className="font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">AI Voice Assistant Platform</span> trusted by enterprises worldwide. 
              Transform customer interactions with intelligent automation.
            </p>

            {/* Enhanced Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => {
                const colors = [
                  { bg: 'from-orange-100 via-pink-100 to-purple-100', border: 'border-orange-400 hover:border-pink-500', icon: 'from-orange-600 to-pink-600', shadow: 'hover:shadow-orange-500/30' },
                  { bg: 'from-blue-100 via-cyan-100 to-teal-100', border: 'border-blue-400 hover:border-cyan-500', icon: 'from-blue-600 to-cyan-600', shadow: 'hover:shadow-blue-500/30' },
                  { bg: 'from-purple-100 via-pink-100 to-orange-100', border: 'border-purple-400 hover:border-pink-500', icon: 'from-purple-600 to-pink-600', shadow: 'hover:shadow-purple-500/30' },
                  { bg: 'from-teal-100 via-green-100 to-cyan-100', border: 'border-teal-400 hover:border-green-500', icon: 'from-teal-600 to-green-600', shadow: 'hover:shadow-teal-500/30' },
                ]
                const colorSet = colors[idx]
                return (
                  <div key={idx} className={`flex items-center gap-2 p-3 bg-white backdrop-blur-sm rounded-xl border-2 ${colorSet.border} shadow-md ${colorSet.shadow} transition-all duration-300 group hover:scale-105`}>
                    <div className={`p-2 bg-gradient-to-br ${colorSet.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-4 h-4 bg-gradient-to-r ${colorSet.icon} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Enhanced Social Media - Creative Design */}
            <div>
              <h4 className="text-sm font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-600" />
                Connect With Us
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { icon: Twitter, link: "https://twitter.com/digitalbot_ai", label: "Twitter", color: "from-blue-400 to-cyan-500" },
                  { icon: Linkedin, link: "https://linkedin.com/company/digitalbot-ai", label: "LinkedIn", color: "from-blue-600 to-purple-600" },
                  { icon: Instagram, link: "https://www.instagram.com/digitalbotai/", label: "Instagram", color: "from-pink-500 to-purple-600" },
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61580924391213", label: "Facebook", color: "from-blue-500 to-teal-500" },
                  { icon: Mail, link: "mailto:contact@digitalbot.ai", label: "Email", color: "from-orange-500 to-pink-600" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group/social relative"
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-125 hover:rotate-12 border border-white/30`}>
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

          {/* Enhanced AI Services Grid - More Creative */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl shadow-lg animate-pulse-glow">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </h3>
              </div>
              <p className="text-gray-700 text-sm font-medium">Explore our comprehensive suite of AI voice automation services</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, idx) => {
                const Icon = service.icon
                const isHovered = hoveredService === idx
                const colorSets = [
                  { gradient: 'from-orange-500 via-pink-500 to-purple-600', border: 'border-orange-400', iconBg: 'from-orange-100 to-pink-100' },
                  { gradient: 'from-blue-500 via-cyan-500 to-teal-600', border: 'border-blue-400', iconBg: 'from-blue-100 to-cyan-100' },
                  { gradient: 'from-purple-500 via-pink-500 to-orange-600', border: 'border-purple-400', iconBg: 'from-purple-100 to-pink-100' },
                  { gradient: 'from-teal-500 via-green-500 to-cyan-600', border: 'border-teal-400', iconBg: 'from-teal-100 to-green-100' },
                  { gradient: 'from-pink-500 via-orange-500 to-purple-600', border: 'border-pink-400', iconBg: 'from-pink-100 to-orange-100' },
                  { gradient: 'from-cyan-500 via-blue-500 to-purple-600', border: 'border-cyan-400', iconBg: 'from-cyan-100 to-blue-100' },
                  { gradient: 'from-orange-500 via-amber-500 to-pink-600', border: 'border-orange-400', iconBg: 'from-orange-100 to-amber-100' },
                  { gradient: 'from-green-500 via-teal-500 to-blue-600', border: 'border-green-400', iconBg: 'from-green-100 to-teal-100' },
                ]
                const colorSet = colorSets[idx % colorSets.length]
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    onMouseEnter={() => setHoveredService(idx)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group/card relative"
                  >
                    <div className={`
                      relative p-5 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                      ${isHovered 
                        ? `bg-gradient-to-br ${colorSet.gradient} border-transparent shadow-2xl scale-105 -translate-y-2` 
                        : `bg-white backdrop-blur-sm ${colorSet.border} hover:border-opacity-100 shadow-md hover:shadow-xl`
                      }
                    `}>
                      {/* Icon with enhanced animation */}
                      <div className={`
                        mb-3 p-3 rounded-xl transition-all duration-500
                        ${isHovered 
                          ? 'bg-white/30 backdrop-blur-md scale-110 rotate-12' 
                          : `bg-gradient-to-br ${colorSet.iconBg}`
                        }
                      `}>
                        <Icon className={`
                          w-6 h-6 transition-all duration-500
                          ${isHovered ? 'text-white scale-110' : `bg-gradient-to-r ${colorSet.gradient} bg-clip-text text-transparent`}
                        `} style={!isHovered ? { WebkitTextFillColor: 'transparent', backgroundClip: 'text' } : {}} />
                      </div>
                      
                      {/* Text */}
                      <h4 className={`
                        font-bold text-sm mb-1 transition-colors duration-500
                        ${isHovered ? 'text-white' : 'text-gray-900'}
                      `}>
                        {service.name}
                      </h4>
                      <p className={`
                        text-xs transition-colors duration-500
                        ${isHovered ? 'text-white/95' : 'text-gray-700'}
                      `}>
                        {service.description}
                      </p>
                      
                      {/* Enhanced Arrow indicator with pulse */}
                      <div className={`
                        absolute top-4 right-4 transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-x-0 scale-110' : 'opacity-0 -translate-x-2'}
                      `}>
                        <ArrowRight className="w-4 h-4 text-white animate-pulse" />
                      </div>
                      
                      {/* Shimmer effect on hover */}
                      {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-purple-200">
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
                  { name: "FAQs", href: "/faq" },
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
                  <h4 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 rounded-full" />
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-4 transition-all duration-300" />
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

        {/* Enhanced Bottom Bar - Ultra Modern */}
        <div className="border-t-2 border-gradient-to-r from-orange-300 via-pink-300 to-purple-300 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Enhanced Copyright with Animation */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg" />
              </div>
              <p className="text-gray-800 text-sm font-semibold">
                © 2025 <span className="font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">DigitalBot.ai</span> • All rights reserved
              </p>
            </div>

            {/* Enhanced Badges with vibrant colors */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="px-4 py-2 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 backdrop-blur-sm border-2 border-orange-400 hover:border-pink-500 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/30">
                <Shield className="w-4 h-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                <span className="text-xs font-bold bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">SOC 2 Certified</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 backdrop-blur-sm border-2 border-green-400 hover:border-teal-500 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/30">
                <Award className="w-4 h-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                <span className="text-xs font-bold bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent">99.9% Uptime</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-100 via-cyan-100 to-purple-100 backdrop-blur-sm border-2 border-blue-400 hover:border-purple-500 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30">
                <TrendingUp className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Trusted by 10K+</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tagline with more vibrant gradient */}
          <div className="mt-6 text-center">
            <p className="text-sm font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              🤖 Powered by Advanced AI • Built for Enterprise • Trusted Worldwide • Never Sleeps, Never Quits ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
