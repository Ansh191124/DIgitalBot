import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Voice Assistant Platform | DigitalBot.ai - Business Call Automation & Analytics Dashboard 2024",
  description: "Ready-to-Use AI Voice Assistant Platform ⭐ Automate Business Calls 24/7 | Personal Analytics Dashboard | Never Sleeps, Never Gets Sick, Never Takes Breaks | Free 14-Day Trial",
  keywords: "ai voice assistant, business call automation, automated receptionist, ai customer service, voice assistant platform, call automation software, ai phone system, automated call handling, business phone automation, ai receptionist, virtual receptionist, automated customer service, call center automation, voice ai platform, business automation tools, ai call center, automated phone system, intelligent voice assistant, ai powered receptionist, business call management, automated appointment booking, ai telephone system, voice automation platform, smart phone assistant, ai business solutions, automated customer support, intelligent call routing, ai voice technology, business process automation, automated lead qualification, ai sales assistant, voice activated assistant, automated call screening, ai phone answering, business communication automation, automated follow up calls, ai appointment scheduling, voice recognition system, automated customer interaction, ai powered phone system, business efficiency tools, automated response system, call handling automation, ai customer engagement, voice assistant analytics, automated business calls, ai communication platform, intelligent phone system, automated call distribution, ai voice bot, business telephony automation, automated inquiry handling, ai powered customer service, voice assistant dashboard, automated call management, business intelligence platform, ai voice solutions, automated phone assistant, call automation platform, voice ai technology, business automation software, ai receptionist service, automated call center, intelligent voice platform, ai phone bot, business call analytics, automated customer interaction, voice assistant integration, ai powered automation, business communication tools, automated phone support, ai voice system, call management platform, automated business communication, ai telephone assistant, voice automation software, intelligent call handling, ai customer interaction, automated phone service, business voice assistant, ai call management, automated reception system, voice ai assistant, business phone bot, ai powered calling, automated customer experience, voice assistant technology, ai business phone, automated call response, intelligent phone assistant, ai voice platform, business automation platform, automated telephony, ai customer care, voice assistant software, automated business support, ai phone automation, call center ai, automated voice system, business ai solutions, ai powered receptionist, automated customer calls, voice assistant service, ai telephone system, business call bot, automated phone calls, ai voice assistant platform, customer service automation, automated business processes, ai powered phone calls, voice assistant business, automated call solutions, ai receptionist system, business voice automation, automated customer queries, ai phone service, voice ai solutions, business call ai, automated telephone system, ai customer support, voice assistant analytics dashboard, automated business phone, ai call bot, business automation ai, automated voice assistant, ai phone platform, voice automation business, automated customer management, ai business assistant, voice ai platform business, automated call tracking, ai powered business calls, business voice ai, automated phone management, ai customer service platform",
  authors: [{ name: "DigitalBot.ai Team - Website Developers India" }],
  creator: "DigitalBot.ai - Professional Website Developer India",
  publisher: "DigitalBot.ai - Leading Web Development Company India",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL("https://digitalbot.ai"),
  alternates: {
    canonical: "https://digitalbot.ai",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalbot.ai",
    title: "AI Voice Assistant Platform | DigitalBot.ai - 24/7 Business Call Automation",
    description: "🤖 Ready-to-Use AI Voice Assistant | Never Sleeps, Never Gets Sick, Never Takes Breaks | Personal Analytics Dashboard | Automated Customer Service | Free 14-Day Trial",
    siteName: "DigitalBot.ai - AI Voice Assistant Platform",
    images: [
      {
        url: "/og-ai-voice-assistant-platform.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Assistant Platform - DigitalBot.ai - Never Sleeps Never Takes Breaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalbot_ai",
    creator: "@digitalbot_ai",
    title: "AI Voice Assistant Platform | Never Sleeps, Never Takes Breaks | DigitalBot.ai",
    description: "🤖 Ready-to-Use AI Voice Assistant | 24/7 Business Call Automation | Personal Analytics Dashboard | Free 14-Day Trial",
    images: ["/twitter-ai-voice-assistant-automation.jpg"],
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased relative`}>
        {/* Mobile-Optimized Full Page Background Video */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            webkit-playsinline="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
            style={{ 
              filter: 'blur(1px)', 
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
            aria-hidden
          >
            {/* Multiple sources for better mobile compatibility */}
            <source src="https://res.cloudinary.com/dew9qfpbl/video/upload/q_auto,f_auto,w_1920/v1761044195/BACK_kazdn7.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dew9qfpbl/video/upload/q_auto,f_webm,w_1920/v1761044195/BACK_kazdn7.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Responsive overlay with mobile-friendly opacity */}
          <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/5 to-white/10 sm:from-white/5 sm:via-transparent sm:to-white/5 pointer-events-none" />
        </div>
        
        {/* Mobile Performance Optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Mobile video optimizations */
            @media (max-width: 768px) {
              video {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
              }
              
              /* Optimize touch interactions */
              button, [role="button"] {
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
              }
              
              /* Reduce complex animations on mobile */
              .animate-spin-slow,
              .animate-pulse-slow,
              .animate-ping-slow,
              .animate-ping-slower {
                animation-duration: 4s !important;
              }
              
              /* Improve mobile performance */
              * {
                -webkit-overflow-scrolling: touch;
              }
            }
            
            /* Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
              video {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
            
            /* Battery saving mode and small screens */
            @media (prefers-reduced-motion: reduce), (max-width: 480px) and (max-height: 800px) {
              video {
                filter: blur(2px) !important;
                opacity: 0.7 !important;
              }
            }
            
            /* Ultra small screens optimization */
            @media (max-width: 375px) {
              video {
                transform: scale(1.1) translateZ(0);
                filter: blur(1.5px);
              }
              
              .container {
                padding-left: 1rem !important;
                padding-right: 1rem !important;
              }
            }
            
            /* Landscape mobile orientation */
            @media (max-height: 500px) and (orientation: landscape) {
              video {
                transform: scale(1.2) translateZ(0);
                object-position: center center;
              }
            }
          `
        }} />
        
        {/* Mobile Video Enhancement Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mobile video optimization
              (function() {
                if (typeof window === 'undefined') return;
                
                function optimizeVideo() {
                  const video = document.querySelector('video');
                  if (!video) return;
                  
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  const isLowPerf = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
                  const isSlowConnection = navigator.connection && navigator.connection.effectiveType && 
                    (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
                  
                  // Optimize for mobile and low-performance devices
                  if (isMobile || isLowPerf || isSlowConnection) {
                    video.style.filter = 'blur(2px)';
                    video.style.opacity = '0.8';
                    
                    // Pause video if page becomes hidden to save battery
                    document.addEventListener('visibilitychange', function() {
                      if (document.hidden) {
                        video.pause();
                      } else {
                        video.play().catch(function() {});
                      }
                    });
                  }
                  
                  // Handle orientation changes on mobile
                  if (isMobile) {
                    window.addEventListener('orientationchange', function() {
                      setTimeout(function() {
                        video.style.height = window.innerHeight + 'px';
                      }, 100);
                    });
                  }
                  
                  // Fallback for devices that can't autoplay
                  video.addEventListener('canplay', function() {
                    if (video.paused) {
                      video.play().catch(function() {
                        // If autoplay fails, show a static background
                        video.style.display = 'none';
                        document.body.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #e1f5fe 100%)';
                      });
                    }
                  });
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', optimizeVideo);
                } else {
                  optimizeVideo();
                }
              })();
            `
          }}
        />
        
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
