"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Activity, BarChart3, Bot, ChevronDown, Menu, Phone, Sparkles, TrendingUp, X, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "/", label: "Home", icon: Sparkles },
        { href: "/about", label: "About", icon: null },
        { href: "/services", label: "Solutions", icon: Zap },
        { href: "/pricing", label: "Pricing", icon: null },
        { href: "/contact", label: "Contact", icon: Phone },
    ]
    const services = [{ href: "/services/ai-voice-bot", label: "AI Voice Bot", desc: "Intelligent voice automation", color: "from-orange-500 to-orange-600", icon: Bot },
                                                    { href: "/services/voice-ai-business", label: "Voice AI for Business", desc: "Enterprise solutions", color: "from-orange-500 to-orange-700", icon: TrendingUp },
                                                    { href: "/services/voice-automation-software", label: "Voice Automation", desc: "Workflow automation", color: "from-orange-600 to-orange-700", icon: Zap },
                                                    { href: "/services/ai-customer-support", label: "AI Customer Support", desc: "24/7 assistance", color: "from-orange-500 to-orange-700", icon: Sparkles },
                                                    { href: "/services/conversational-ai", label: "Conversational AI", desc: "Natural conversations", color: "from-orange-600 to-orange-700", icon: Activity },
                                                    { href: "/services/ai-call-center", label: "AI Call Center", desc: "Call automation", color: "from-orange-500 to-orange-600", icon: Phone },
                                                    { href: "/services/ai-sales-agent", label: "AI Sales Agent", desc: "Sales automation", color: "from-orange-600 to-orange-700", icon: BarChart3 },
                                                    { href: "/services/ai-virtual-receptionist", label: "Virtual Receptionist", desc: "Front desk AI", color: "from-orange-500 to-orange-600", icon: Sparkles },

    ]
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-700 bg-white"
            )}
        >
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Enhanced Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative group"
                    >
                            <Link href="/" className="flex items-center gap-12 relative ml-0 pl-0 mr-2" onClick={() => setIsMenuOpen(false)}>
                            {/* Removed orange glow orbs for pure white header */}
                            <span className="absolute -top-6 -left-6 w-20 h-21 rounded-full bg-white blur-3xl" />
                            <span className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white blur-2xl" />
                            
                            <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dew9qfpbl/image/upload/v1762971494/Gemini_Generated_Image_a19f1ha19f1ha19f-Kittl_b9jogz.svg"
                  alt="DigitalBot.AI - AI Voice Assistant Platform"
                  width={1200}
                  height={320}
                  priority
                  quality={125}
                  className="h-14 max-w-[240px] sm:h-18 sm:max-w-[280px] lg:h-20 lg:max-w-[360px] w-auto relative z-14 ml-0 pl-0 mr-12 transition-all duration-500 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Enhanced AI Badge */}
                            <div className="absolute -bottom-2 -right-8 px-3 py-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-[9px] font-bold rounded-full shadow-lg shadow-orange-500/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-white/30">
                                ✨ AI Powered
                            </div>
                        </Link>
                    </motion.div>

                      {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  pathname === item.href
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Our Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-full transition-all"
              >
                <Zap className="w-4 h-4" />
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Panel - 3x3 Grid */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 right-0 top-16 mx-auto max-w-7xl px-6 z-50"
                  >
                    <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-3xl shadow-xl p-6"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-orange-200">
                      <Activity className="w-5 h-5 text-orange-600" />
                      <h3 className="text-base font-bold text-orange-600">AI-Powered Solutions</h3>
                    </div>

                    {/* Services Grid - 3x3 */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {services.map((service) => {
                        const Icon = service.icon
                        return (
                          <a
                            key={service.href}
                            href={service.href}
                            className="flex flex-col items-start gap-2 p-4 rounded-xl hover:bg-white transition-all group border border-transparent hover:border-orange-200"
                          >
                            <div className="p-2 rounded-lg bg-orange-500 group-hover:bg-orange-600 transition-colors">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-orange-600 mb-1">
                                {service.label}
                              </div>
                              <div className="text-xs text-gray-600">{service.desc}</div>
                            </div>
                          </a>
                        )
                      })}
                    </div>

                    {/* Premium Services */}
                    <div className="pt-3 border-t border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">Premium Services</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="/signup?service=lead"
                          className="flex items-center gap-2 p-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all text-sm font-semibold"
                        >
                          <BarChart3 className="w-4 h-4" />
                          Lead Analysis
                        </a>
                        <a
                          href="/signup?service=appointment"
                          className="flex items-center gap-2 p-2.5 bg-white hover:bg-orange-50 border border-orange-300 text-orange-600 rounded-lg transition-all text-sm font-semibold"
                        >
                          <Phone className="w-4 h-4" />
                          Appointments
                        </a>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Get Started Button */}
          <a
            href="/login"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-500/30 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Get Started Free
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg ${
                      pathname === item.href
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-orange-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Services */}
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase">Services</div>
                  <div className="space-y-1">
                    {services.slice(0, 6).map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 px-4">
                  <a
                    href="/login"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="w-4 h-4" />
                    Get Started Free
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}