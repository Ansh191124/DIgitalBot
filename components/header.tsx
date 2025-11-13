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
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
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

    // Use regular div on server, motion.div on client  
    const MotionDiv: any = mounted ? motion.div : 'div'

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-700",
                isScrolled
                    ? "backdrop-blur-2xl bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-black/95 shadow-2xl shadow-cyan-500/20"
                    : "bg-gradient-to-b from-gray-900/90 via-black/95 to-transparent backdrop-blur-md"
            )}
        >
            {/* Animated gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute top-0 right-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-float-reverse" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Enhanced Logo Section */}
                    <MotionDiv
                        {...(mounted ? {
                            initial: { opacity: 0, scale: 0.9, x: -20 },
                            animate: { opacity: 1, scale: 1, x: 0 },
                            transition: { duration: 0.6, type: "spring", stiffness: 100 }
                        } : {})}
                        className="relative group"
                    >
                        <Link href="/" className="flex items-center gap-3 relative" onClick={() => setIsMenuOpen(false)}>
                            {/* Animated multicolor glow orbs - Cyan/Teal */}
                            <span className="absolute -top-6 -left-6 w-20 h-21 rounded-full bg-gradient-to-r from-cyan-400/40 via-teal-500/50 to-cyan-600/40 blur-3xl animate-pulse-glow" />
                            <span className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-teal-400/30 via-cyan-500/30 to-teal-600/30 blur-2xl animate-float-slow" />
                            
                            <div className="relative">
                                <Image
                                    src="/images/logos/logo.svg"
                                    alt="DigitalBot.AI - AI Voice Assistant Platform"
                                    width={200}
                                    height={48}
                                    priority
                                    quality={95}
                                    className="h-10 w-auto relative z-10 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,246,255,0.6)]"
                                />
                            </div>
                            
                            {/* Enhanced AI Badge - Cyan/Teal */}
                            <div className="absolute -bottom-2 -right-8 px-3 py-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 text-white text-[9px] font-bold rounded-full shadow-lg shadow-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-white/30">
                                ✨ AI Powered
                            </div>
                        </Link>
                    </MotionDiv>

                    {/* Desktop Navigation - Enhanced */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <MotionDiv
                                    key={item.href}
                                    {...(mounted ? {
                                        initial: { opacity: 0, y: -20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: index * 0.1, duration: 0.5, type: "spring" }
                                    } : {})}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2",
                                            pathname === item.href
                                                ? "text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-lg shadow-cyan-500/40"
                                                : "text-gray-200 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50"
                                        )}
                                    >
                                        {Icon && <Icon className="w-4 h-4" />}
                                        <span className="relative z-10">{item.label}</span>
                                        
                                        {/* Enhanced Hover effect - Cyan/Teal */}
                                        {pathname !== item.href && (
                                            <>
                                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500/30 via-teal-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                                            </>
                                        )}
                                        
                                        {/* Enhanced Active indicator - Cyan/Teal */}
                                        {pathname === item.href && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </MotionDiv>
                            )
                        })}

                        {/* Enhanced Services Dropdown - Cyan/Teal */}
                        <MotionDiv
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button
                                suppressHydrationWarning
                                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2 text-gray-200 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50"
                            >
                                <Zap className="w-4 h-4" />
                                <span className="relative z-10">Our Services</span>
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-300 relative z-10",
                                    open && "rotate-180"
                                )} />
                                
                                {/* Enhanced Hover background - Cyan/Teal */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500/30 via-teal-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                            </button>

                            {/* Premium Services Dropdown Menu - Enhanced */}
                            <AnimatePresence>
                                {open && (
                                    <MotionDiv
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-gray-900/98 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20 rounded-3xl p-6 w-[920px] border-2 border-cyan-500/50 z-[100]"
                                    >
                                        {/* Enhanced Decorative gradient border - Cyan/Teal */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-cyan-500/10 pointer-events-none" />
                                        
                                        {/* Animated background particles */}
                                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
                                        </div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-cyan-500/30">
                                                <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                                                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">AI-Powered Solutions</h3>
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-3 mb-4">
                                                {[
                                                    { href: "/services/ai-voice-bot", label: "AI Voice Bot", desc: "Intelligent voice automation", color: "from-cyan-500 to-teal-500", icon: Bot },
                                                    { href: "/services/voice-ai-business", label: "Voice AI for Business", desc: "Enterprise solutions", color: "from-blue-500 to-cyan-500", icon: TrendingUp },
                                                    { href: "/services/voice-automation-software", label: "Voice Automation", desc: "Workflow automation", color: "from-indigo-500 to-blue-500", icon: Zap },
                                                    { href: "/services/ai-customer-support", label: "AI Customer Support", desc: "24/7 assistance", color: "from-violet-500 to-indigo-500", icon: Sparkles },
                                                    { href: "/services/conversational-ai", label: "Conversational AI", desc: "Natural conversations", color: "from-cyan-500 to-teal-500", icon: Activity },
                                                    { href: "/services/ai-call-center", label: "AI Call Center", desc: "Call automation", color: "from-blue-500 to-cyan-500", icon: Phone },
                                                    { href: "/services/ai-sales-agent", label: "AI Sales Agent", desc: "Sales automation", color: "from-indigo-500 to-blue-500", icon: BarChart3 },
                                                    { href: "/services/ai-virtual-receptionist", label: "Virtual Receptionist", desc: "Front desk AI", color: "from-violet-500 to-indigo-500", icon: Sparkles },
                                                ].map((service) => {
                                                    const ServiceIcon = service.icon
                                                    return (
                                                        <Link
                                                            key={service.href}
                                                            href={service.href}
                                                            className="group block p-4 hover:bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                                    <ServiceIcon className="w-4 h-4 text-white" />
                                                                </div>
                                                                <div>
                                                                    <div className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block mb-1`}>
                                                                        {service.label}
                                                                    </div>
                                                                    <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.desc}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                            
                                            <div className="border-t-2 border-cyan-500/30 pt-4 mt-2">
                                                <div className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                                    Premium Services
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Link
                                                        href="/signup?service=lead"
                                                        className="group flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <BarChart3 className="w-5 h-5 text-white" />
                                                        <span className="text-sm font-bold text-white">Lead Analysis</span>
                                                    </Link>
                                                    <Link
                                                        href="/signup?service=appointment"
                                                        className="group flex items-center gap-3 p-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/50 rounded-xl hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <Phone className="w-5 h-5 text-cyan-400" />
                                                        <span className="text-sm font-bold text-cyan-400">Appointments</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </MotionDiv>
                                )}
                            </AnimatePresence>
                        </MotionDiv>
                    </nav>

                    {/* Enhanced Desktop Buttons - Cyan/Teal */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            size="lg"
                            className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white font-bold rounded-full shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-600/60 transition-all duration-500 overflow-hidden group px-8 border-2 border-white/20"
                            asChild
                        >
                            <Link href="/login">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                    Get Started Free
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            </Link>
                        </Button>
                    </div>

                    {/* Enhanced Mobile Menu Button - Cyan/Teal */}
                    <button
                        suppressHydrationWarning
                        className="lg:hidden p-3 rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 border-2 border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Premium Mobile Menu - Cyan/Teal */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <MotionDiv
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black backdrop-blur-xl"
                        >
                            <nav className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <MotionDiv
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
                                                        ? "text-white bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30"
                                                        : "text-gray-200 hover:text-cyan-400 hover:bg-gray-800/50"
                                                )}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {Icon && <Icon className="w-5 h-5" />}
                                                {item.label}
                                            </Link>
                                        </MotionDiv>
                                    )
                                })}

                                {/* Mobile Services Section - Cyan/Teal */}
                                <MotionDiv
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                    className="pt-4 pb-2"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-200 mb-3">
                                        <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                                        Our AI Services
                                    </div>
                                    <div className="space-y-1.5 bg-gray-800/50 rounded-xl p-3 border border-cyan-500/30">
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
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50 rounded-lg transition-all duration-300"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {service}
                                            </Link>
                                        ))}
                                    </div>
                                    
                                    {/* Premium Services - Cyan/Teal */}
                                    <div className="mt-4 space-y-2">
                                        <Link
                                            href="/signup?service=lead"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <BarChart3 className="w-5 h-5" />
                                            <span className="font-bold">Lead Analysis</span>
                                        </Link>
                                        <Link
                                            href="/signup?service=appointment"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-cyan-500/50 text-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span className="font-bold">Appointment Booking</span>
                                        </Link>
                                    </div>
                                </MotionDiv>

                                {/* Mobile CTA Button - Cyan/Teal */}
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/40 transition-all duration-500 py-4"
                                        asChild
                                    >
                                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                            <Sparkles className="w-5 h-5 mr-2" />
                                            Get Started Free
                                        </Link>
                                    </Button>
                                </MotionDiv>
                            </nav>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>

            {/* Enhanced Custom Animations */}
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
                @keyframes float-slow {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                    }
                    50% { 
                        transform: translateY(-10px) translateX(5px); 
                    }
                }
                @keyframes float-reverse {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                    }
                    50% { 
                        transform: translateY(10px) translateX(-5px); 
                    }
                }
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 5s ease-in-out infinite;
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </header>
    )
}