import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Voice Agent | AI Voice Assistant Platform - DigitalBot.ai 2024",
  description: "🤖 Leading AI Voice Agent & AI Voice Assistant Platform | 24/7 Automated Customer Service | Never Sleeps | Personal Analytics Dashboard | Enterprise-Grade Voice AI Technology | Free 14-Day Trial",
  keywords: "ai voice agent, ai voice assistant, voice agent platform, ai assistant platform, conversational ai agent, intelligent voice assistant, ai voice technology, voice agent software, ai assistant software, automated voice agent, smart voice assistant, ai powered voice agent, enterprise voice assistant, business voice agent, ai voice agent platform, voice assistant solution, ai agent automation, voice ai assistant, conversational voice agent, ai customer service agent, voice assistant technology, ai voice bot, intelligent ai agent, voice agent system, ai assistant system, automated ai assistant, ai voice platform, voice agent service, ai assistant service, business ai voice agent, ai voice agent solution, voice assistant automation, ai agent platform, intelligent voice agent, ai voice assistant technology, voice agent automation, ai assistant automation, enterprise ai voice agent, business ai assistant, ai voice agent software, voice assistant platform, ai powered assistant, conversational ai assistant, ai voice agent system, voice assistant system, automated voice assistant, ai voice solutions, voice agent solutions, ai assistant solutions, enterprise voice agent, business voice assistant",
  authors: [{ name: "DigitalBot.ai Team - AI Voice Technology Experts" }],
  creator: "DigitalBot.ai - AI Voice Agent & Assistant Platform",
  publisher: "DigitalBot.ai - Leading AI Voice Technology Provider",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL("https://digitalbot.ai"),
  alternates: {
    canonical: "https://digitalbot.ai",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalbot.ai",
    title: "AI Voice Agent | AI Voice Assistant Platform - DigitalBot.ai",
    description: "🤖 #1 AI Voice Agent & AI Voice Assistant Platform | Never Sleeps | 24/7 Automated Customer Service | Personal Analytics Dashboard | Free 14-Day Trial",
    siteName: "DigitalBot.ai - AI Voice Agent & Assistant Platform",
    images: [
      {
        url: "/og-ai-voice-agent-assistant.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Agent & AI Voice Assistant Platform - DigitalBot.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalbot_ai",
    creator: "@digitalbot_ai",
    title: "AI Voice Agent | AI Voice Assistant Platform | DigitalBot.ai",
    description: "🤖 Leading AI Voice Agent & AI Voice Assistant Platform | 24/7 Automation | Never Sleeps | Free 14-Day Trial",
    images: ["/twitter-ai-voice-agent-assistant.jpg"],
  },
  verification: {
    google: "f2bf8afb699100cd",
  },
  category: "Technology",
  classification: "AI Voice Assistant Business Automation Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digitalbot.ai/#organization",
        "name": "DigitalBot.ai",
        "url": "https://digitalbot.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://digitalbot.ai/logo.png",
          "width": 400,
          "height": 400
        },
        "description": "Leading AI Voice Agent and AI Voice Assistant platform for businesses. Create intelligent conversational AI agents with advanced natural language processing and voice technology.",
        "sameAs": [
          "https://twitter.com/digitalbot_ai",
          "https://linkedin.com/company/digitalbot-ai",
          "https://facebook.com/digitalbot.ai"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://digitalbot.ai/#website",
        "url": "https://digitalbot.ai",
        "name": "DigitalBot.ai - AI Voice Agent & AI Voice Assistant Platform",
        "description": "AI Voice Agent and AI Voice Assistant platform for building intelligent conversational agents. Advanced voice AI technology for customer service automation and business communication.",
        "publisher": {
          "@id": "https://digitalbot.ai/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://digitalbot.ai/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "AI Voice Agent & AI Voice Assistant Platform",
        "description": "Advanced AI Voice Agent and AI Voice Assistant platform with natural language processing, voice recognition, and conversational AI capabilities for businesses. Automate customer service with intelligent voice agents.",
        "url": "https://digitalbot.ai",
        "category": "Business Software",
        "operatingSystem": "Web Browser",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial available"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an AI Voice Agent and AI Voice Assistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI Voice Agent and AI Voice Assistant are intelligent conversational systems that use natural language processing, speech recognition, and machine learning to communicate with users through voice interactions. They can handle customer service, sales inquiries, appointment scheduling, and provide 24/7 automated support for businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI Voice Agent and AI Voice Assistant technology work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Voice Agents and AI Voice Assistants combine speech recognition, natural language understanding, machine learning, and text-to-speech synthesis to create human-like conversations. They process spoken language, understand intent, access relevant information, and respond naturally in real-time to provide intelligent customer interactions."
            }
          },
          {
            "@type": "Question",
            "name": "What are the benefits of using an AI Voice Agent and AI Voice Assistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Voice Agents and AI Voice Assistants provide 24/7 customer support, reduce operational costs, improve response times, handle multiple conversations simultaneously, and offer personalized experiences. They can increase customer satisfaction while reducing the workload on human agents and never take breaks."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased relative bg-white`}>
        
        {/* Mobile Performance Optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Mobile optimizations */
            @media (max-width: 768px) {
              /* Optimize touch interactions */
              button, [role="button"] {
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
              }
              
              /* Improve mobile performance */
              * {
                -webkit-overflow-scrolling: touch;
              }
            }
          `
        }} />
        
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
