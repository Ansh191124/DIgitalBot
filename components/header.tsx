"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X, Sparkles, Zap, Phone } from "lucide-react"
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
                    ? "backdrop-blur-2xl bg-gradient-to-r from-white/95 via-white/98 to-white/95 border-b border-orange-100/50 shadow-2xl shadow-orange-500/10"
                    : "bg-gradient-to-b from-white/90 via-white/95 to-transparent backdrop-blur-md border-b border-white/20"
            )}
        >
            {/* Animated gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Enhanced Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative group"
                    >
                        <Link href="/" className="flex items-center gap-3 relative" onClick={() => setIsMenuOpen(false)}>
                            {/* Animated glow orbs */}
                            <span className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400/30 via-orange-500/40 to-orange-600/30 blur-3xl animate-pulse-glow" />
                            <span className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-black/20 via-gray-800/20 to-black/20 blur-2xl animate-pulse-slow" />
                            
                            <div className="relative">
                                <Image
                                    src="https://res.cloudinary.com/dew9qfpbl/image/upload/f_webp,q_auto:eco,w_160/v1760082124/Gemini_Generated_Image_tgypq9tgypq9tgyp_-_Edited_1_m1xhrt.svg"
                                    alt="DigitalBot - AI Voice Assistant"
                                    width={180}
                                    height={45}
                                    priority
                                    quality={95}
                                    className="h-12 w-auto relative z-10 drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]"
                                />
                            </div>
                            
                            {/* AI Badge */}
                            <div className="absolute -bottom-2 -right-8 px-2 py-0.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[9px] font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                AI Powered
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
                                                ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30"
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/50"
                                        )}
                                    >
                                        {Icon && <Icon className="w-4 h-4" />}
                                        <span className="relative z-10">{item.label}</span>
                                        
                                        {/* Hover effect */}
                                        {pathname !== item.href && (
                                            <>
                                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                                            </>
                                        )}
                                        
                                        {/* Active indicator */}
                                        {pathname === item.href && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            )
                        })}

                        {/* Enhanced Services Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button
                                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50/50"
                            >
                                <Zap className="w-4 h-4" />
                                <span className="relative z-10">Our Services</span>
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-300 relative z-10",
                                    open && "rotate-180"
                                )} />
                                
                                {/* Hover background */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                            </button>

                            {/* Premium Services Dropdown Menu */}
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 w-[920px] border-2 border-orange-100 z-[100]"
                                    >
                                        {/* Decorative gradient border */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 pointer-events-none" />
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-orange-100">
                                                <Sparkles className="w-5 h-5 text-orange-500" />
                                                <h3 className="text-lg font-bold text-gray-900">AI-Powered Solutions</h3>
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-3 mb-4">
                                                {[
                                                    { href: "/services/ai-voice-bot", label: "AI Voice Bot", desc: "Intelligent voice automation" },
                                                    { href: "/services/voice-ai-business", label: "Voice AI for Business", desc: "Enterprise solutions" },
                                                    { href: "/services/voice-automation-software", label: "Voice Automation", desc: "Workflow automation" },
                                                    { href: "/services/ai-customer-support", label: "AI Customer Support", desc: "24/7 assistance" },
                                                    { href: "/services/conversational-ai", label: "Conversational AI", desc: "Natural conversations" },
                                                    { href: "/services/ai-call-center", label: "AI Call Center", desc: "Call automation" },
                                                    { href: "/services/ai-sales-agent", label: "AI Sales Agent", desc: "Sales automation" },
                                                    { href: "/services/ai-virtual-receptionist", label: "Virtual Receptionist", desc: "Front desk AI" },
                                                ].map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        className="group block p-4 hover:bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 group-hover:scale-150 transition-transform duration-300" />
                                                            <div>
                                                                <div className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors mb-1">
                                                                    {service.label}
                                                                </div>
                                                                <div className="text-xs text-gray-500">{service.desc}</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            
                                            <div className="border-t-2 border-orange-100 pt-4 mt-2">
                                                <div className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Premium Services</div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Link
                                                        href="/signup?service=lead"
                                                        className="group flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <Zap className="w-5 h-5 text-white" />
                                                        <span className="text-sm font-bold text-white">Lead Analysis</span>
                                                    </Link>
                                                    <Link
                                                        href="/signup?service=appointment"
                                                        className="group flex items-center gap-3 p-3 bg-gradient-to-r from-black to-gray-800 rounded-xl hover:shadow-lg hover:shadow-black/30 transition-all duration-300"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <Phone className="w-5 h-5 text-white" />
                                                        <span className="text-sm font-bold text-white">Appointments</span>
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
                            className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold rounded-full shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-500 overflow-hidden group px-8"
                            asChild
                        >
                            <Link href="/login">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Get Started Free
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            </Link>
                        </Button>
                    </div>

                    {/* Modern Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 rounded-2xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 hover:border-orange-400 text-orange-600 hover:text-orange-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/20"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Premium Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden border-t border-orange-100 bg-gradient-to-b from-white via-orange-50/30 to-white backdrop-blur-xl"
                        >
                            <nav className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
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
                                                        ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30"
                                                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                                )}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {Icon && <Icon className="w-5 h-5" />}
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    )
                                })}

                                {/* Mobile Services Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                    className="pt-4 pb-2"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-900 mb-3">
                                        <Sparkles className="w-4 h-4 text-orange-500" />
                                        Our AI Services
                                    </div>
                                    <div className="space-y-1.5 bg-orange-50/50 rounded-xl p-3">
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
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-white rounded-lg transition-all duration-300"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {service}
                                            </Link>
                                        ))}
                                    </div>
                                    
                                    {/* Premium Services */}
                                    <div className="mt-4 space-y-2">
                                        <Link
                                            href="/signup?service=lead"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Zap className="w-5 h-5" />
                                            <span className="font-bold">Lead Analysis</span>
                                        </Link>
                                        <Link
                                            href="/signup?service=appointment"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span className="font-bold">Appointment Booking</span>
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Mobile CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4 border-t border-orange-100"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold rounded-xl shadow-xl shadow-orange-500/40 transition-all duration-500 py-4"
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
        </header>
    )
}