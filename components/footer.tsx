import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to- via-white to-sky-50 text-gray-800 dark:text-white border-t border-sky-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://res.cloudinary.com/dew9qfpbl/image/upload/f_webp,q_auto:eco,w_160/v1760082124/Gemini_Generated_Image_tgypq9tgypq9tgyp_-_Edited_1_m1xhrt.svg"
                alt="DigitalBot Logo"
                width={160}
                height={40}
                loading="lazy"
                quality={80}
                className="h-14 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-200 mb-4 max-w-md">
              Transform your business with intelligent AI Assistance. Automate customer service, boost engagement, and
              drive growth with cutting-edge conversational AI.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              {[{icon: Twitter, link:"https://twitter.com/yourusername"},
                {icon: Linkedin, link:"https://linkedin.com/in/yourusername"},
                {icon: Mail, link:"mailto:youremail@example.com"},
                {icon: Instagram, link:"https://www.instagram.com/digitalbotai/"},
                {icon: Facebook, link:"https://www.facebook.com/profile.php?id=61580924391213"}].map((item, idx) => (
                  <Link key={idx} href={item.link} target="_blank" rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 transition-all duration-300">
                    <item.icon className="h-5 w-5 hover:scale-110 transition-transform duration-300"/>
                  </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-sky-700 mb-4 text-lg">Product</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><Link href="/services" className="hover:text-sky-800 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-sky-800 transition-colors">Pricing</Link></li>
              <li><Link href="/services#api" className="hover:text-sky-800 transition-colors">API</Link></li>
              <li><Link href="/docs" className="hover:text-sky-800 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-sky-700 mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><Link href="/about" className="hover:text-sky-800 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-sky-800 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-sky-800 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-sky-800 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Resources & External Links for SEO */}
        <div className="border-t border-sky-200 mt-8 pt-8">
          <div className="mb-6">
            <h3 className="font-semibold text-sky-700 mb-3 text-center">Industry Resources & Partners</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                OpenAI Research
              </a>
              <span className="text-gray-300">•</span>
              <a href="https://cloud.google.com/dialogflow" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                Google Dialogflow
              </a>
              <span className="text-gray-300">•</span>
              <a href="https://aws.amazon.com/lex/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                Amazon Lex
              </a>
              <span className="text-gray-300">•</span>
              <a href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                Azure Speech
              </a>
              <span className="text-gray-300">•</span>
              <a href="https://www.gartner.com/en/information-technology/glossary/conversational-ai" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                Gartner AI Insights
              </a>
              <span className="text-gray-300">•</span>
              <a href="https://www.forrester.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                Forrester Research
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-200 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 DigitalBot.ai. All rights reserved.</p>
        </div>
      </div>

      {/* Optional: Animated glowing gradient effect */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-sky-200 via-white to-sky-100 opacity-20 blur-3xl"></div>
    </footer>
  )
}