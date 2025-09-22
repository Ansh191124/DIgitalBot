import Link from "next/link"
import Image from "next/image"  // ✅ Import Image
import { Twitter, Linkedin, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-100 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             <Image
               src="https://digitalbot.ai/wp-content/uploads/2024/03/digital-bot-full-logo.svg"
               alt="DigitalBot Logo"
                width={160}
               height={40}
               priority
               className="h-10 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain"
              />
          </div>

            <p className="text-muted-foreground mb-4 max-w-md">
              Transform your business with intelligent AI Assistance. Automate customer service, boost engagement, and
              drive growth with cutting-edge conversational AI.
            </p>

            <div className="flex space-x-4">
      <Link
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </Link>

      <Link
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </Link>

      <Link
        href="mailto:youremail@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors"
      >
        <Mail className="h-5 w-5" />
      </Link>

      {/* ✅ Instagram */}
      <Link
        href="https://www.instagram.com/digitalbotai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </Link>

      {/* ✅ Facebook */}
      <Link
        href="https://www.facebook.com/profile.php?id=61580924391213"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </Link>
    </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services#api" className="hover:text-accent transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-accent transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 DigitalBot.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
