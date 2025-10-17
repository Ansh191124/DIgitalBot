import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Voice Agent | DigitalBot.ai - #1 Conversational AI Platform 2024",
  description: "AI Voice Agent platform by DigitalBot.ai. Build intelligent voice assistants with natural language processing. 24/7 automated customer service, voice commerce, and conversational AI solutions. Start free trial today.",
  keywords: "AI Voice Agent, conversational AI, voice assistant, AI chatbot, voice AI, intelligent voice agent, automated customer service, voice commerce, natural language processing, AI assistant, virtual assistant, voice technology, speech recognition, AI customer support",
  authors: [{ name: "DigitalBot.ai Team" }],
  creator: "DigitalBot.ai",
  publisher: "DigitalBot.ai",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL("https://digitalbot.ai"),
  alternates: {
    canonical: "https://digitalbot.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalbot.ai",
    title: "AI Voice Agent Platform | DigitalBot.ai - Build Intelligent Voice Assistants",
    description: "Create powerful AI Voice Agents with DigitalBot.ai. Advanced conversational AI platform for businesses. Natural language processing, voice commerce, and 24/7 customer support automation.",
    siteName: "DigitalBot.ai",
    images: [
      {
        url: "/og-ai-voice-agent.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Agent Platform by DigitalBot.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalbot_ai",
    creator: "@digitalbot_ai",
    title: "AI Voice Agent Platform | DigitalBot.ai",
    description: "Build intelligent AI Voice Agents with advanced conversational AI. 24/7 customer support automation and voice commerce solutions.",
    images: ["/twitter-ai-voice-agent.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "AI Voice Agent Platform",
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
        "description": "Leading AI Voice Agent platform for businesses. Create intelligent conversational AI assistants with advanced natural language processing.",
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
        "name": "DigitalBot.ai - AI Voice Agent Platform",
        "description": "AI Voice Agent platform for building intelligent conversational assistants. Advanced voice AI technology for customer service automation.",
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
        "name": "AI Voice Agent Platform",
        "description": "Advanced AI Voice Agent platform with natural language processing, voice recognition, and conversational AI capabilities for businesses.",
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
            "name": "What is an AI Voice Agent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI Voice Agent is an intelligent conversational assistant that uses natural language processing and speech recognition to communicate with users through voice interactions. It can handle customer service, sales inquiries, appointment scheduling, and provide 24/7 automated support."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI Voice Agent technology work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Voice Agents combine speech recognition, natural language understanding, machine learning, and text-to-speech synthesis to create human-like conversations. They process spoken language, understand intent, access relevant information, and respond naturally in real-time."
            }
          },
          {
            "@type": "Question",
            "name": "What are the benefits of using an AI Voice Agent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Voice Agents provide 24/7 customer support, reduce operational costs, improve response times, handle multiple conversations simultaneously, and offer personalized experiences. They can increase customer satisfaction while reducing the workload on human agents."
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
