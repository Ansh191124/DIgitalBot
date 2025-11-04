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
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-orange-50/40 border-t border-orange-100/50 overflow-hidden">
      {/* Ultra Creative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400/15 to-amber-500/15 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Feature Banner */}
        <div className="py-12 mb-8">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl shadow-orange-500/30 relative overflow-hidden group">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  Start Your AI Journey Today
                </h3>
                <p className="text-orange-100 text-base md:text-lg">
                  Join 10,000+ businesses automating customer interactions with AI
                </p>
              </div>
              <Link 
                href="/signup"
                className="group/btn px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Image
                  src="https://res.cloudinary.com/dew9qfpbl/image/upload/f_webp,q_auto:eco,w_160/v1760082124/Gemini_Generated_Image_tgypq9tgypq9tgyp_-_Edited_1_m1xhrt.svg"
                  alt="DigitalBot - AI Voice Assistant Platform"
                  width={220}
                  height={55}
                  loading="lazy"
                  quality={95}
                  className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed text-base pr-4">
              Leading <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">AI Voice Assistant Platform</span> trusted by enterprises worldwide. 
              Transform customer interactions with intelligent automation.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 group">
                  <div className={`p-2 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 rounded-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media - Creative Design */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-500" />
                Connect With Us
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { icon: Twitter, link: "https://twitter.com/digitalbot_ai", label: "Twitter", color: "from-blue-400 to-blue-600" },
                  { icon: Linkedin, link: "https://linkedin.com/company/digitalbot-ai", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
                  { icon: Instagram, link: "https://www.instagram.com/digitalbotai/", label: "Instagram", color: "from-pink-500 to-purple-600" },
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61580924391213", label: "Facebook", color: "from-blue-500 to-blue-700" },
                  { icon: Mail, link: "mailto:contact@digitalbot.ai", label: "Email", color: "from-orange-500 to-red-600" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group/social relative"
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-6`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services Grid - More Creative */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Explore our comprehensive suite of AI voice automation services</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, idx) => {
                const Icon = service.icon
                const isHovered = hoveredService === idx
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    onMouseEnter={() => setHoveredService(idx)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group/card relative"
                  >
                    <div className={`
                      relative p-5 rounded-2xl border-2 transition-all duration-500
                      ${isHovered 
                        ? 'bg-gradient-to-br ' + service.gradient + ' border-transparent shadow-2xl scale-105 -translate-y-2' 
                        : 'bg-white/80 backdrop-blur-sm border-orange-100 hover:border-orange-300 shadow-md'
                      }
                    `}>
                      {/* Icon with animation */}
                      <div className={`
                        mb-3 p-3 rounded-xl transition-all duration-500
                        ${isHovered 
                          ? 'bg-white/20 backdrop-blur-md scale-110 rotate-6' 
                          : 'bg-gradient-to-br from-orange-50 to-orange-100'
                        }
                      `}>
                        <Icon className={`
                          w-6 h-6 transition-all duration-500
                          ${isHovered ? 'text-white' : 'text-orange-600'}
                        `} />
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
                        ${isHovered ? 'text-white/90' : 'text-gray-500'}
                      `}>
                        {service.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className={`
                        absolute top-4 right-4 transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                      `}>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-orange-100">
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
                  { name: "Help Center", href: "/faq" },
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
                    <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-orange-600 group-hover:w-4 transition-all duration-300" />
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

        {/* Bottom Bar - Ultra Modern */}
        <div className="border-t-2 border-gradient-to-r from-transparent via-orange-200 to-transparent pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright with Animation */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
              </div>
              <p className="text-gray-600 text-sm font-medium">
                © 2025 <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">DigitalBot.ai</span> • All rights reserved
              </p>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-full flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold text-gray-700">SOC 2 Certified</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full flex items-center gap-2">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-gray-700">99.9% Uptime</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-gray-700">Trusted by 10K+</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-6 text-center">
            <p className="text-sm font-medium bg-gradient-to-r from-gray-600 via-orange-600 to-gray-600 bg-clip-text text-transparent">
              🤖 Powered by Advanced AI • Built for Enterprise • Trusted Worldwide • Never Sleeps, Never Quits
            </p>
          </div>
        </div>
      </div>

      {/* Custom Advanced Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
        @keyframes float-reverse {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(20px) rotate(-5deg); 
          }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.5; 
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </footer>
  )
}
      
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