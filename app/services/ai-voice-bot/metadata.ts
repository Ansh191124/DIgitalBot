import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Bot Solutions | Intelligent Voice Automation for Business | DigitalBot.ai',
  description: 'Deploy AI voice bots with natural language processing for customer service automation. 24/7 intelligent voice assistants that handle calls, answer questions, and boost customer satisfaction. Get started free.',
  keywords: 'AI voice bot, voice automation, intelligent voice assistant, AI voice agent, automated voice calls, voice bot for business, conversational AI voice, AI phone bot, voice customer service, NLP voice bot, AI voice technology, voice bot platform, voice bot solution, automated voice assistant',
  authors: [{ name: 'DigitalBot.ai' }],
  creator: 'DigitalBot.ai',
  publisher: 'DigitalBot.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalbot.ai/services/ai-voice-bot',
    title: 'AI Voice Bot Solutions | Intelligent Voice Automation for Business',
    description: 'Deploy AI voice bots with natural language processing for 24/7 customer service automation. Intelligent voice assistants that handle calls, answer questions, and boost satisfaction.',
    siteName: 'DigitalBot.ai',
    images: [
      {
        url: 'https://www.digitalbot.ai/og-ai-voice-bot.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Voice Bot Solutions by DigitalBot.ai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Bot Solutions | Intelligent Voice Automation',
    description: 'Deploy AI voice bots with NLP for 24/7 customer service. Intelligent voice assistants that handle calls and boost satisfaction.',
    images: ['https://www.digitalbot.ai/og-ai-voice-bot.jpg'],
    creator: '@DigitalBotAI',
  },
  alternates: {
    canonical: 'https://www.digitalbot.ai/services/ai-voice-bot',
  },
  category: 'Technology',
}
