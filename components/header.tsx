"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
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
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "SaaS" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
        
    ]

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
                isScrolled
                    ? "backdrop-blur-xl bg-white/90 border-sky-200/50 shadow-lg shadow-sky-100/50"
                    : "z from-white/80 via-sky-50/60 to-white/80 backdrop-blur-md"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with neon-glow and floating orb */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <Link href="/" className="flex items-center gap-2 relative group" onClick={() => setIsMenuOpen(false)}>
                            {/* Floating Neon Orb */}
                            <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 opacity-30 blur-3xl animate-pulse-slow"></span>
                            <Image
                                src="https://res.cloudinary.com/dew9qfpbl/image/upload/f_webp,q_auto:eco,w_160/v1760082124/Gemini_Generated_Image_tgypq9tgypq9tgyp_-_Edited_1_m1xhrt.svg"
                                alt="DigitalBot Logo"
                                width={160}
                                height={40}
                                priority
                                quality={85}
                                className="h-14 w-auto relative z-10 hover:scale-110 transition-transform duration-500 right-6"
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-semibold tracking-wide relative group transition-all duration-300",
                                        pathname === item.href
                                            ? "text-sky-600"
                                            : "text-gray-700 hover:text-sky-500"
                                    )}
                                >
                                    {item.label}
                                    {/* Animated gradient underline */}
                                    <span
                                        className={cn(
                                            "absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 rounded-full transition-all duration-500 group-hover:w-full",
                                            pathname === item.href && "w-full"
                                        )}
                                    />
                                    {/* Floating Glow */}
                                    <span className="absolute -inset-1 rounded-full bg-linear-to-r from-sky-300/20 via-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Our Services Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
                            className="relative"
                        >
                            <button
                                onClick={() => {
                                    console.log('Dropdown clicked, current state:', open);
                                    setOpen(!open);
                                }}
                                className={cn(
                                    "text-sm font-semibold tracking-wide relative group transition-all duration-300 flex items-center gap-1",
                                    "text-gray-700 hover:text-sky-500"
                                )}
                            >
                                Our Services
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-300",
                                    open && "rotate-180"
                                )} />   
                                {/* Animated gradient underline */}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 rounded-full transition-all duration-500 group-hover:w-full" />
                                {/* Floating Glow */}
                                <span className="absolute -inset-1 rounded-full bg-linear-to-r from-sky-300/20 via-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                            </button>

                            {/* Services Dropdown Menu */}
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-2xl rounded-lg p-6 w-[900px] border-2 border-sky-200 backdrop-blur-xl z-100"
                                        style={{ position: 'absolute', top: '100%', marginTop: '8px' }}
                                        onMouseLeave={() => setOpen(false)}
                                    >
                                        <div className="grid grid-cols-3 gap-3">
                                            <Link
                                                href="/services/ai-voice-bot"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                AI Voice Bot
                                            </Link>
                                            <Link
                                                href="/services/voice-ai-business"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                Voice AI for Business
                                            </Link>
                                            <Link
                                                href="/services/voice-automation-software"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                Voice Automation Software
                                            </Link>
                                            <Link
                                                href="/services/ai-customer-support"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                AI Customer Support
                                            </Link>
                                            <Link
                                                href="/services/conversational-ai"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                Conversational AI
                                            </Link>
                                            <Link
                                                href="/services/ai-call-center"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                AI Call Center Automation
                                            </Link>
                                            <Link
                                                href="/services/ai-sales-agent"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                AI Sales Agent
                                            </Link>
                                            <Link
                                                href="/services/ai-virtual-receptionist"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                AI Virtual Receptionist
                                            </Link>
                                        </div>
                                        <div className="border-t-2 border-sky-200 my-4"></div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <Link
                                                href="/signup?service=lead"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                Lead Analysis Service
                                            </Link>
                                            <Link
                                                href="/signup?service=appointment"
                                                className="block px-4 py-3 hover:bg-sky-100 rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-sky-700 border border-transparent hover:border-sky-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                Appointment Service
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <Button
                            variant="outline"
                            size="sm"
                            className="relative overflow-hidden border-sky-400/70 text-sky-700 bg-white/60 hover:bg-sky-50 hover:border-sky-500 hover:text-sky-800 transition-all duration-300 rounded-full shadow-sm hover:shadow-sky-300"
                            asChild
                        >
                            <Link href="/Register">
                                <span className="relative z-10">SignUp</span>
                                <span className="absolute inset-0 bg-linear-to-r from-sky-400/20 via-sky-500/20 to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                            </Link>
                        </Button> */}

                        <Button
                            size="sm"
                            className="relative bg-linear-to-r from-sky-500 via-sky-600 to-sky-700 text-white font-semibold rounded-full shadow-lg shadow-sky-300/40 hover:shadow-sky-400/60 transition-all duration-500 overflow-hidden group"
                            asChild
                        >
                            <Link href="/login">
                                <span className="relative z-10">Login</span>
                                <span className="absolute inset-0 bg-linear-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-full bg-white/70 backdrop-blur-md hover:bg-sky-100 text-sky-700 hover:text-sky-800 transition-all duration-300 shadow-sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden absolute top-16 left-0 right-0 bg-linear-to-b from-white/95 via-sky-50/90 to-white/95 border-b border-sky-100 shadow-xl backdrop-blur-lg overflow-hidden rounded-b-2xl"
                        >
                            <nav className="flex flex-col space-y-1 p-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "px-3 py-2 text-base font-medium rounded-md transition-all duration-300 relative group overflow-hidden",
                                                pathname === item.href
                                                    ? "text-sky-700 bg-sky-100 shadow-inner"
                                                    : "text-gray-700 hover:text-sky-700 hover:bg-sky-50"
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                            <span className="absolute -inset-1 bg-linear-to-r from-sky-300/20 via-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-md"></span>
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Mobile Services */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.08 }}
                                    className="px-3 py-2"
                                >
                                    <div className="text-base font-medium text-gray-900 mb-2">Our Services</div>
                                    <div className="space-y-1">
                                        <Link
                                            href="/services/ai-voice-bot"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            AI Voice Bot
                                        </Link>
                                        <Link
                                            href="/services/voice-ai-business"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Voice AI for Business
                                        </Link>
                                        <Link
                                            href="/services/voice-automation-software"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Voice Automation Software
                                        </Link>
                                        <Link
                                            href="/services/ai-customer-support"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            AI Customer Support
                                        </Link>
                                        <Link
                                            href="/services/conversational-ai"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Conversational AI
                                        </Link>
                                        <Link
                                            href="/services/ai-call-center"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            AI Call Center Automation
                                        </Link>
                                        <Link
                                            href="/services/ai-sales-agent"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            AI Sales Agent
                                        </Link>
                                        <Link
                                            href="/services/ai-virtual-receptionist"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            AI Virtual Receptionist
                                        </Link>
                                        <div className="border-t border-sky-100 my-2"></div>
                                        <Link
                                            href="/signup?service=lead"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Lead Analysis Service
                                        </Link>
                                        <Link
                                            href="/signup?service=appointment"
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Appointment Service
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Mobile Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col space-y-2 pt-4 border-t border-sky-100/60"
                                >
                                    <Button
                                        variant="outline"
                                        className="justify-start border-sky-400 text-sky-700 hover:bg-sky-500 hover:text-white transition-all duration-300 rounded-full relative overflow-hidden group"
                                        asChild
                                    >
                                        <Link href="/Register" onClick={() => setIsMenuOpen(false)}>
                                            <span className="relative z-10">SignUp</span>
                                            <span className="absolute inset-0 bg-linear-to-r from-sky-400/20 to-sky-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
                                        </Link>
                                    </Button>
                                    <Button
                                        className="bg-linear-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold justify-start rounded-full shadow-lg shadow-sky-300/40 hover:shadow-sky-400/60 transition-all duration-500 relative overflow-hidden group"
                                        asChild
                                    >
                                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                            <span className="relative z-10">Try Free</span>
                                            <span className="absolute inset-0 bg-linear-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Extra Neon Pulse Animation */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.25; }
                    50% { transform: scale(1.05); opacity: 0.35; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </header>
    )
}