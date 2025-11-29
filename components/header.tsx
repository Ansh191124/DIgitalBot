"use client"
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
    const services = [{ href: "/services/ai-voice-bot", label: "AI Voice Bot", desc: "Intelligent voice automation", color: "from-cyan-400 to-cyan-500", icon: Bot },
                                                    { href: "/services/voice-ai-business", label: "Voice AI for Business", desc: "Enterprise solutions", color: "from-cyan-400 to-cyan-600", icon: TrendingUp },
                                                    { href: "/services/voice-automation-software", label: "Voice Automation", desc: "Workflow automation", color: "from-cyan-500 to-cyan-600", icon: Zap },
                                                    { href: "/services/ai-customer-support", label: "AI Customer Support", desc: "24/7 assistance", color: "from-cyan-400 to-cyan-600", icon: Sparkles },
                                                    { href: "/services/conversational-ai", label: "Conversational AI", desc: "Natural conversations", color: "from-cyan-500 to-cyan-600", icon: Activity },
                                                    { href: "/services/ai-call-center", label: "AI Call Center", desc: "Call automation", color: "from-cyan-400 to-cyan-500", icon: Phone },
                                                    { href: "/services/ai-sales-agent", label: "AI Sales Agent", desc: "Sales automation", color: "from-cyan-500 to-cyan-600", icon: BarChart3 },
                                                    { href: "/services/ai-virtual-receptionist", label: "Virtual Receptionist", desc: "Front desk AI", color: "from-cyan-400 to-cyan-500", icon: Sparkles },

    ]
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-700 bg-black/95 backdrop-blur-lg border-b border-cyan-400/25"
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
                            {/* Cyberpunk cyan glow orbs */}
                            <span className="absolute -top-6 -left-6 w-20 h-21 rounded-full bg-gradient-to-br from-cyan-400/25 via-cyan-300/15 to-transparent blur-3xl" />
                            <span className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-tl from-cyan-400/20 to-cyan-300/10 blur-2xl" />
                            
                            <div className="relative">
                <Image
                  src="/images/logos/logo.svg"
                  alt="DigitalBot.AI - AI Voice Assistant Platform"
                  width={1200}
                  height={160}
                  priority
                  quality={125}
                  className="h-12 max-w-[200px] sm:h-13 sm:max-w-[240px] lg:h-14 lg:max-w-[280px] w-auto relative z-14 ml-0 pl-0 mr-10 transition-all duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* Enhanced AI Badge */}
                            <div className="absolute -bottom-2 -right-8 px-3 py-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-black text-[9px] font-bold shadow-lg shadow-cyan-400/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-cyan-400/30 backdrop-blur-sm"
                                 style={{
                                   clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))'
                                 }}>
                                ✨ AI POWERED
                            </div>
                        </Link>
                    </motion.div>

                      {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all uppercase tracking-wide ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold shadow-md shadow-cyan-400/25"
                    : "text-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-300 border border-transparent hover:border-cyan-400/25 rounded-full"
                }`}
                style={pathname === item.href ? {
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                } : {}}
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
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-300 rounded-full transition-all uppercase tracking-wide border border-transparent hover:border-cyan-400/25"
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
                    className="fixed left-0 right-0 top-16 mx-auto max-w-4xl px-4 z-50"
                  >
                    <div className="bg-black/95 backdrop-blur-lg border border-cyan-400/25 rounded-2xl shadow-xl shadow-cyan-400/25 p-4"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-400/25">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-widest">AI-POWERED SOLUTIONS</h3>
                    </div>

                    {/* Services Grid - 3x3 */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {services.map((service) => {
                        const Icon = service.icon
                        return (
                          <a
                            key={service.href}
                            href={service.href}
                            className="flex flex-col items-start gap-1.5 p-3 rounded-lg hover:bg-cyan-400/10 transition-all group border border-transparent hover:border-cyan-400/25 backdrop-blur-sm"
                          >
                            <div className="p-1.5 bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:from-cyan-300 group-hover:to-cyan-400 transition-colors shadow-md shadow-cyan-400/25"
                                 style={{
                                   clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                 }}>
                              <Icon className="w-4 h-4 text-black" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-cyan-300 mb-0.5 uppercase tracking-wide">
                                {service.label}
                              </div>
                              <div className="text-[10px] text-cyan-400">{service.desc}</div>
                            </div>
                          </a>
                        )
                      })}
                    </div>

                    {/* Premium Services */}
                    <div className="pt-2 border-t border-cyan-400/25">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50" />
                        <span className="text-[10px] font-semibold text-cyan-300 uppercase tracking-widest">PREMIUM SERVICES</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                       <Link href="/services/leads"
                        className="flex items-center gap-1.5 p-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black transition-all text-xs font-semibold uppercase tracking-wide shadow-md shadow-cyan-400/25"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                        }}>
                            <BarChart3 className="w-3 h-3" />
                          LEAD ANALYSIS
                        </Link>

<Link
  href="/services/appointments"
  className="flex items-center gap-1.5 p-2 bg-black/50 hover:bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 transition-all text-xs font-semibold uppercase tracking-wide backdrop-blur-sm"
  style={{
    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
  }}
>
  <Phone className="w-3 h-3" />
  APPOINTMENTS
</Link>
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
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:via-cyan-400 hover:to-cyan-600 text-black text-sm font-bold shadow-lg shadow-cyan-400/40 transition-all uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.9)] hover:-translate-y-1"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
            }}
          >
            <Sparkles className="w-4 h-4" />
            GET STARTED FREE
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-cyan-200 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-lg transition-all border border-transparent hover:border-cyan-400/25"
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
              className="lg:hidden border-t border-cyan-400/25 overflow-hidden bg-black/95 backdrop-blur-lg"
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium uppercase tracking-wide transition-all ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold shadow-md shadow-cyan-400/25"
                        : "text-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-300 border border-transparent hover:border-cyan-400/25 rounded-lg"
                    }`}
                    style={pathname === item.href ? {
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Services */}
                <div className="pt-3 mt-3 border-t border-cyan-400/25">
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-300 uppercase tracking-widest">SERVICES</div>
                  <div className="space-y-1">
                    {services.slice(0, 6).map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-300 rounded-lg uppercase tracking-wide border border-transparent hover:border-cyan-400/25"
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
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-black text-sm font-bold shadow-lg shadow-cyan-400/40 uppercase tracking-widest hover:scale-105 transition-all hover:shadow-[0_0_50px_rgba(0,255,255,0.9)] hover:-translate-y-1"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="w-4 h-4" />
                    GET STARTED FREE
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
