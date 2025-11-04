# Copilot Instructions for DigitalBot

## Project Overview
DigitalBot is an **AI Voice Assistant platform** built with Next.js 14+ (App Router), TypeScript, and shadcn/ui. It provides enterprise AI call center solutions with real-time analytics, voice conversation management, and comprehensive dashboard capabilities.

**Core Business Domain:** AI-powered call center automation, voice assistants, customer service automation, and business communication analytics.

## Architecture & Tech Stack
- **Framework:** Next.js 14 with App Router, TypeScript, React 18
- **Styling:** Tailwind CSS v4 with custom design tokens, shadcn/ui components
- **UI Library:** Radix UI primitives via shadcn/ui (New York style)
- **Charts:** Recharts for analytics dashboards
- **Voice Integration:** @vapi-ai/web for AI voice capabilities
- **API Client:** Axios with custom interceptors (`lib/api.ts`)
- **State Management:** React hooks + Context providers (theme, toast)
- **Package Manager:** pnpm

## Critical API Integration
The app connects to a **backend API** at `https://digital-api-tef8.onrender.com/api/` via `lib/api.ts`:
- **Call Management:** CRUD operations, search, analytics, transcriptions
- **Real-time Data:** Dashboard fetches live call statistics and metrics
- **Authentication:** Bearer token stored in localStorage
- **Error Handling:** Centralized interceptors with console logging

## Key File Structure Patterns
```
app/
  dashboard/          # Analytics & call management interface
    calls/           # Call history and details
    leads/           # Lead management
    appointments/    # Appointment scheduling
  services/           # AI service offerings pages
    ai-call-center/ # Service-specific landing pages
components/
  ui/                # shadcn/ui primitives (buttons, dialogs, charts)
  voice-conversation-player.tsx  # Custom voice playback component
lib/
  api.ts            # Axios client with backend integration
  utils.ts          # Tailwind class merging utility
types/
  index.ts          # Call, Agent, Analytics TypeScript interfaces
```

## Component Conventions
- **Business Components:** `Sidebar`, `StatCard`, voice players use extensive data visualization
- **UI Primitives:** shadcn/ui components with custom styling via CSS variables
- **Styling:** Custom design tokens in `app/globals.css` with black/white theme + orange accent
- **Icons:** Lucide React throughout, specific icons for call states (PhoneIncoming, PhoneOutgoing, etc.)
- **Charts:** Complex analytics dashboards using Recharts (Area, Bar, Pie, Line charts)

## Developer Workflows
```bash
pnpm install          # Install dependencies
pnpm dev             # Development server (localhost:3000)
pnpm build           # Production build
pnpm start           # Production server
```

**Key Development Notes:**
- No test suite configured - write defensive code with proper TypeScript typing
- ESLint/TypeScript errors ignored in build (see `next.config.mjs`)
- Image optimization configured for Cloudinary CDN

## Data Flow & State Management
- **Call Data:** Fetched from backend API, processed for analytics visualization
- **Real-time Updates:** Dashboard components poll API for live metrics
- **State:** Local React state + custom hooks (`use-mobile`, `use-toast`)
- **Context:** Theme provider for dark/light mode switching
- **Types:** Comprehensive TypeScript interfaces in `types/index.ts` for Call, Agent, Analytics

## Performance Optimizations
- **Next.js Config:** Image optimization (WebP/AVIF), compression, aggressive caching headers
- **Mobile:** Custom `use-mobile` hook for responsive behavior
- **Charts:** Conditional rendering with `mounted` state to prevent SSR hydration issues
- **CDN:** Static assets optimized with 1-year cache TTL

## Integration Patterns
- **Voice AI:** @vapi-ai/web integration for voice conversation functionality
- **Analytics:** Complex data transformation for chart visualization (see dashboard `fetchAnalytics`)
- **SEO:** Extensive structured data and metadata optimization
- **Vercel:** Deployment-ready with `@vercel/analytics` integration

## Common Patterns to Follow
1. **New Dashboard Components:** Use grid layouts with `MetricCard` pattern from dashboard
2. **API Integration:** Extend `callsAPI` object in `lib/api.ts` for new endpoints  
3. **New Pages:** Follow service page structure with Header/Footer + metadata export
4. **Charts:** Use Recharts with custom gradients and responsive containers
5. **Forms:** Integrate react-hook-form with shadcn/ui form components
6. **Error States:** Implement loading spinners and error boundaries consistently

## SEO & Performance Notes
- Google Search Console verified (see `public/googlef2bf8afb699100cd.html`)
- Comprehensive OpenGraph/Twitter meta tags
- Structured data for organization, software application, FAQ
- Mobile-optimized with performance-focused CSS and caching strategies

---
*This is a production business application - prioritize data accuracy, error handling, and performance in all implementations.*
