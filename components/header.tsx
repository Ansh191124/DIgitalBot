"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
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
                    : "bg-gradient-to-br from-white/80 via-sky-50/60 to-white/80 backdrop-blur-md"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo (FIXED: Removed conflicting neon glow and drop-shadow for a clean match) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <Link 
                            href="/" 
                            className="flex items-center gap-2 relative group" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {/* The Floating Neon Orb span was removed here */}
                            <Image
                                src="https://res.cloudinary.com/doytvgisa/image/upload/v1760073529/Digitalbotai_u9bc6d.svg"
                                alt="DigitalBot Logo"
                                width={160}
                                height={40}
                                priority
                                // Adjusted height (h-8) and removed the drop-shadow for a clean integration
                                className="h-14 w-auto object-contain relative z-12 hover:scale-110 transition-transform duration-500 right-20" 
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
                                            "absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-full transition-all duration-500 group-hover:w-full",
                                            pathname === item.href && "w-full"
                                        )}
                                    />
                                    {/* Floating Glow */}
                                    <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-300/20 via-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="relative overflow-hidden border-sky-400/70 text-sky-700 bg-white/60 hover:bg-sky-50 hover:border-sky-500 hover:text-sky-800 transition-all duration-300 rounded-full shadow-sm hover:shadow-sky-300"
                            asChild
                        >
                            <Link href="/contact">
                                <span className="relative z-10">Get Started</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-sky-500/20 to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                            </Link>
                        </Button>

                        <Button
                            size="sm"
                            className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white font-semibold rounded-full shadow-lg shadow-sky-300/40 hover:shadow-sky-400/60 transition-all duration-500 overflow-hidden group"
                            asChild
                        >
                            <Link href="/login">
                                <span className="relative z-10">Login</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
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
                            className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-white/95 via-sky-50/90 to-white/95 border-b border-sky-100 shadow-xl backdrop-blur-lg overflow-hidden rounded-b-2xl"
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
                                            <span className="absolute -inset-1 bg-gradient-to-r from-sky-300/20 via-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-md"></span>
                                        </Link>
                                    </motion.div>
                                ))}

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
                                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                            <span className="relative z-10">Get Started</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
                                        </Link>
                                    </Button>
                                    <Button
                                        className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold justify-start rounded-full shadow-lg shadow-sky-300/40 hover:shadow-sky-400/60 transition-all duration-500 relative overflow-hidden group"
                                        asChild
                                    >
                                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                            <span className="relative z-10">Try Free</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Extra Neon Pulse Animation (Not used in logo section anymore) */}
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