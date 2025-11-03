import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Call Center Automation Platform | DigitalBot",
  description:
    "Deploy an AI call center automation platform that handles 24/7 support, intelligent routing, and compliance-grade analytics. Reduce call center costs, boost CSAT, and launch in under 14 days.",
  keywords: [
    "AI call center",
    "call center automation",
    "virtual call center",
    "AI contact center",
    "intelligent call routing",
    "AI customer support",
    "call center software",
    "voice AI call center",
    "automated IVR replacement",
    "call center analytics",
    "customer service AI",
    "AI agent assist",
    "call center productivity",
    "omnichannel contact center",
    "call center ROI",
    "enterprise call center platform",
    "AI customer experience",
    "AI call routing",
    "AI call handling",
    "digital call center"
  ],
  alternates: {
    canonical: "https://www.digitalbot.ai/services/ai-call-center",
  },
  openGraph: {
    title: "AI Call Center Automation Platform | DigitalBot",
    description:
      "Modernize your contact center with DigitalBot's AI call center platform. Automate 85% of calls, improve customer satisfaction, and get enterprise-grade compliance in weeks.",
    url: "https://www.digitalbot.ai/services/ai-call-center",
    type: "website",
    siteName: "DigitalBot",
    images: [
      {
        url: "/og-ai-call-center.jpg",
        width: 1200,
        height: 630,
        alt: "AI Call Center Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalBot AI Call Center Automation",
    description:
      "Automate your call center with AI that handles 24/7 customer conversations, intelligent routing, and real-time analytics. Start a free trial today.",
    images: ["/twitter-ai-call-center.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Business Software",
}
