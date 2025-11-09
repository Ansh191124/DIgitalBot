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

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-700",
                isScrolled
                    ? "backdrop-blur-2xl bg-white/95 shadow-2xl shadow-gray-200/50"
                    : "bg-white/90 backdrop-blur-md"
            )}
        >
            {/* Animated gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Subtle grid background with orange/purple tones */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(249, 115, 22, 0.25) 1px, transparent 1px), " +
                            "linear-gradient(to bottom, rgba(168, 85, 247, 0.25) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float-slow shadow-[0_0_60px_rgba(249,115,22,0.3)]" />
                <div className="absolute top-0 right-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-float-reverse shadow-[0_0_80px_rgba(249,115,22,0.25)]" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Enhanced Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative group"
                    >
                        <Link href="/" className="flex items-center gap-3 relative" onClick={() => setIsMenuOpen(false)}>
                            {/* Animated multicolor glow orbs */}
                            <span className="absolute -top-6 -left-6 w-20 h-21 rounded-full bg-purple-500/40 blur-3xl animate-pulse-glow shadow-[0_0_50px_rgba(249,115,22,0.5)]" />
                            <span className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-600/30 blur-2xl animate-float-slow shadow-[0_0_40px_rgba(249,115,22,0.4)]" />
                            
                            <div className="relative">
                                <Image
                                    src="/images/logos/logo.svg"
                                    alt="DigitalBot.AI - AI Voice Assistant Platform"
                                    width={200}
                                    height={48}
                                    priority
                                    quality={95}
                                    className="h-10 w-auto relative z-10 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(249,115,22,0.6)]"
                                />
                            </div>
                            
                            {/* Enhanced AI Badge */}
                            <div className="absolute -bottom-2 -right-8 px-3 py-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-[9px] font-bold rounded-full shadow-lg shadow-orange-500/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-white/30">
                                ✨ AI Powered
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Enhanced */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2",
                                            pathname === item.href
                                                ? "text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-lg shadow-orange-500/50"
                                                : "text-gray-900 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-gray-200/50"
                                        )}
                                    >
                                        {Icon && <Icon className="w-4 h-4" />}
                                        <span className="relative z-10">{item.label}</span>
                                        
                                        {/* Enhanced Hover effect */}
                                        {pathname !== item.href && (
                                            <>
                                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-100/30 via-gray-200/30 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <span className="absolute -inset-0.5 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                                            </>
                                        )}
                                        
                                        {/* Enhanced Active indicator */}
                                        {pathname === item.href && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-lg shadow-orange-500/50"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            )
                        })}

                        {/* Enhanced Services Dropdown - Cyan/Teal */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button
                                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2 text-gray-900 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-gray-200/50"
                            >
                                <Zap className="w-4 h-4" />
                                <span className="relative z-10">Our Services</span>
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-300 relative z-10",
                                    open && "rotate-180"
                                )} />
                                
                                {/* Enhanced Hover background */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-100/30 via-gray-200/30 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute -inset-0.5 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
                            </button>

                            {/* Premium Services Dropdown Menu - Enhanced */}
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white backdrop-blur-2xl shadow-2xl shadow-gray-300/50 rounded-3xl p-6 w-[920px] border-2 border-gray-200 z-[100]"
                                    >
                                        {/* Enhanced Decorative gradient border */}
                                        <div className="absolute inset-0 rounded-3xl bg-purple-500/5 pointer-events-none shadow-[inset_0_0_60px_rgba(249,115,22,0.15)]" />
                                        
                                        {/* Animated background particles */}
                                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse shadow-[0_0_60px_rgba(249,115,22,0.3)]" />
                                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-pulse shadow-[0_0_60px_rgba(249,115,22,0.25)]" />
                                        </div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-200">
                                                <Activity className="w-5 h-5 text-purple-600 animate-pulse drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                                                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">AI-Powered Solutions</h3>
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-3 mb-4">
                                                {[
                                                    { href: "/services/ai-voice-bot", label: "AI Voice Bot", desc: "Intelligent voice automation", color: "from-purple-500 to-purple-600", icon: Bot },
                                                    { href: "/services/voice-ai-business", label: "Voice AI for Business", desc: "Enterprise solutions", color: "from-purple-500 to-purple-700", icon: TrendingUp },
                                                    { href: "/services/voice-automation-software", label: "Voice Automation", desc: "Workflow automation", color: "from-purple-600 to-purple-700", icon: Zap },
                                                    { href: "/services/ai-customer-support", label: "AI Customer Support", desc: "24/7 assistance", color: "from-purple-500 to-purple-700", icon: Sparkles },
                                                    { href: "/services/conversational-ai", label: "Conversational AI", desc: "Natural conversations", color: "from-purple-600 to-purple-700", icon: Activity },
                                                    { href: "/services/ai-call-center", label: "AI Call Center", desc: "Call automation", color: "from-purple-500 to-purple-600", icon: Phone },
                                                    { href: "/services/ai-sales-agent", label: "AI Sales Agent", desc: "Sales automation", color: "from-purple-600 to-purple-700", icon: BarChart3 },
                                                    { href: "/services/ai-virtual-receptionist", label: "Virtual Receptionist", desc: "Front desk AI", color: "from-purple-500 to-purple-600", icon: Sparkles },
                                                ].map((service) => {
                                                    const ServiceIcon = service.icon
                                                    return (
                                                        <Link
                                                            key={service.href}
                                                            href={service.href}
                                                            className="group block p-4 hover:bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400/50 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-400/40`}>
                                                                    <ServiceIcon className="w-4 h-4 text-white" />
                                                                </div>
                                                                <div>
                                                                    <div className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block mb-1`}>
                                                                        {service.label}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600 group-hover:text-gray-700">{service.desc}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                            
                                            <div className="border-t-2 border-gray-200 pt-4 mt-2">
                                                <div className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wider flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                                                    Premium Services
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Link
                                                        href="/signup?service=lead"
                                                        className="group flex items-center gap-3 p-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <BarChart3 className="w-5 h-5 text-white" />
                                                        <span className="text-sm font-bold text-white">Lead Analysis</span>
                                                    </Link>
                                                    <Link
                                                        href="/signup?service=appointment"
                                                        className="group flex items-center gap-3 p-3 bg-white border-2 border-purple-500/50 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <Phone className="w-5 h-5 text-purple-600" />
                                                        <span className="text-sm font-bold text-purple-600">Appointments</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </nav>

                    {/* Enhanced Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            size="lg"
                            className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white font-bold rounded-full shadow-xl shadow-orange-500/60 hover:shadow-2xl hover:shadow-orange-600/70 transition-all duration-500 overflow-hidden group px-8 border-2 border-white/20"
                            asChild
                        >
                            <Link href="/login">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                    Get Started Free
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            </Link>
                        </Button>
                    </div>

                    {/* Enhanced Mobile Menu Button - Purple with Orange Glow */}
                    <button
                        className="lg:hidden p-3 rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 border-2 border-gray-300 hover:border-purple-500 text-gray-900 hover:text-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Premium Mobile Menu - Cyan/Teal */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white backdrop-blur-xl border-t border-gray-200"
                        >
                            <nav className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300",
                                                    pathname === item.href
                                                        ? "text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-lg shadow-orange-500/50"
                                                        : "text-gray-900 hover:text-purple-600 hover:bg-gray-100"
                                                )}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {Icon && <Icon className="w-5 h-5" />}
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    )
                                })}

                                {/* Mobile Services Section - Cyan/Teal */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                    className="pt-4 pb-2"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-900 mb-3">
                                        <Activity className="w-4 h-4 text-purple-600 animate-pulse" />
                                        Our AI Services
                                    </div>
                                    <div className="space-y-1.5 bg-gray-50 rounded-xl p-3 border border-gray-200">
                                        {[
                                            "AI Voice Bot",
                                            "Voice AI for Business",
                                            "Voice Automation Software",
                                            "AI Customer Support",
                                            "Conversational AI",
                                            "AI Call Center Automation",
                                            "AI Sales Agent",
                                            "AI Virtual Receptionist"
                                        ].map((service, i) => (
                                            <Link
                                                key={i}
                                                href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {service}
                                            </Link>
                                        ))}
                                    </div>
                                    
                                    {/* Premium Services - Purple with Orange Glow */}
                                    <div className="mt-4 space-y-2">
                                        <Link
                                            href="/signup?service=lead"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <BarChart3 className="w-5 h-5" />
                                            <span className="font-bold">Lead Analysis</span>
                                        </Link>
                                        <Link
                                            href="/signup?service=appointment"
                                            className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-purple-500/50 text-purple-600 rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span className="font-bold">Appointment Booking</span>
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Mobile CTA Button - Purple with Orange Glow */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl shadow-xl shadow-orange-500/60 transition-all duration-500 py-4"
                                        asChild
                                    >
                                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                            <Sparkles className="w-5 h-5 mr-2" />
                                            Get Started Free
                                        </Link>
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </header>
    )
}



