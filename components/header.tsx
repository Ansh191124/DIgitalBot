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
        "fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-br from-white via-gray-100 to-gray-300 text-black",
        isScrolled
          ? "backdrop-blur-md border-b border-gray-300 shadow-md"
          : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="https://digitalbot.ai/wp-content/uploads/2024/03/digital-bot-full-logo.svg"
                alt="DigitalBot Logo"
                width={160}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    pathname === item.href
                      ? "text-black"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full",
                      pathname === item.href && "w-full"
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-400 text-gray-700 hover:text-black hover:border-gray-600"
              asChild
            >
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-black via-gray-700 to-gray-500 hover:from-gray-900 hover:via-gray-600 hover:to-gray-400 text-white font-semibold shadow-md"
              asChild
            >
              <Link href="/login">Try Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 hover:text-black"
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
              className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-white/95 via-gray-100/95 to-gray-300/95 border-b border-gray-300"
            >
              <nav className="flex flex-col space-y-1 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-base font-medium rounded-md transition-colors",
                        pathname === item.href
                          ? "text-black bg-gray-200"
                          : "text-gray-600 hover:text-black hover:bg-gray-200"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col space-y-2 pt-4 border-t border-gray-300"
                >
                  <Button
                    variant="outline"
                    className="justify-start border-gray-400 text-gray-700 hover:text-black hover:border-gray-600"
                    asChild
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-white via-gray-700 to-gray-500 hover:from-gray-900 hover:via-gray-600 hover:to-gray-400 text-white font-semibold justify-start shadow-md"
                    asChild
                  >
                    <Link href="/login">Try Free</Link>
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
