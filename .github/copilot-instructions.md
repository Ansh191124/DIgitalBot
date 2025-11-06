# Copilot Instructions for DigitalBot

## Project Overview
DigitalBot is an **AI Voice Assistant platform** built with Next.js 14+ (App Router), TypeScript, and shadcn/ui. It provides enterprise AI call center solutions with real-time analytics, voice conversation management, and comprehensive dashboard capabilities.

**Core Business Domain:** AI-powered call center automation, voice assistants, customer service automation, and business communication analytics.

## Architecture & Tech Stack
- **Framework:** Next.js 14 with App Router, TypeScript, React 18
- **Styling:** Tailwind CSS v4 with custom design tokens, shadcn/ui components (New York style)
- **UI Library:** Radix UI primitives via shadcn/ui configured in `components.json`
- **Charts:** Recharts for analytics dashboards
- **Voice Integration:** @vapi-ai/web for AI voice capabilities
- **API Client:** Axios with custom interceptors (`lib/api.ts`)
- **State Management:** React hooks + Context providers (theme via next-themes, toast via sonner)
- **Package Manager:** pnpm (NOT npm or yarn)
- **Fonts:** Geist Sans & Geist Mono from `geist` package

## Critical API Integration
The app connects to a **backend API** at `https://digital-api-tef8.onrender.com/api/` via `lib/api.ts`:
- **Call Management:** CRUD operations, search, analytics, transcriptions
- **Real-time Data:** Dashboard fetches live call statistics and metrics
- **Authentication:** Bearer token stored in localStorage (check token presence before API calls)
- **Error Handling:** Centralized interceptors with console logging for debugging
- **Timeout:** 30 second timeout configured on axios instance
- **Health Check:** Use `callsAPI.healthCheck()` to verify backend connectivity

## Key File Structure Patterns
```
app/
  dashboard/          # Analytics & call management interface
    page.tsx         # Main analytics dashboard with complex data fetching
    calls/           # Call history and details
    leads/           # Lead management
    appointments/    # Appointment scheduling
  services/           # AI service offerings pages (each with SEO metadata)
    ai-call-center/ # Service-specific landing pages
    ai-customer-support/
    ai-sales-agent/
  api/
    submit-lead/     # Route handler for Web3Forms integration
components/
  ui/                # shadcn/ui primitives (buttons, dialogs, charts)
  header.tsx         # Main navigation with logo
  footer.tsx         # Site footer
  lead-form.tsx      # Contact form with Web3Forms API integration
  voice-conversation-player.tsx  # Custom voice playback component
  Sidebar.tsx        # Dashboard navigation sidebar
  StatCard.tsx       # Reusable metric display card
lib/
  api.ts            # Axios client with backend integration
  utils.ts          # Tailwind class merging utility (cn function)
types/
  index.ts          # Call, Agent, Analytics TypeScript interfaces
```

## Component Conventions
- **Business Components:** `Sidebar`, `StatCard`, voice players use extensive data visualization
- **UI Primitives:** shadcn/ui components with custom styling via CSS variables
- **Styling:** Custom design tokens in `app/globals.css` with black/white theme + orange accent (oklch color space)
- **Icons:** Lucide React throughout, specific icons for call states (PhoneIncoming, PhoneOutgoing, CheckCircle, XCircle, AlertCircle)
- **Charts:** Complex analytics dashboards using Recharts (Area, Bar, Pie, Line charts)
  - Always use `mounted` state to prevent SSR hydration issues
  - Wrap charts in `ResponsiveContainer` for proper sizing
  - Use custom gradients defined in `<defs>` for visual polish
- **Forms:** 
  - react-hook-form integration with shadcn/ui form components
  - Direct Web3Forms API submission (NOT custom API route) - see `lead-form.tsx`
  - Web3Forms access key: `8f0556d8-66c3-4e2d-810e-5de948aff5ce`
  - FormData approach (not JSON) for Web3Forms submissions

## Developer Workflows
```bash
pnpm install          # Install dependencies
pnpm dev             # Development server (localhost:3000)
pnpm build           # Production build
pnpm start           # Production server
pnpm lint            # Run ESLint (though errors ignored in build)
```

**Key Development Notes:**
- **No test suite configured** - write defensive code with proper TypeScript typing
- **Build Ignores Errors:** ESLint/TypeScript errors ignored in build via `next.config.mjs`:
  ```javascript
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  ```
- **Image Optimization:** Configured for Cloudinary & Unsplash CDN domains
- **TypeScript Paths:** Use `@/` prefix for imports (configured in `tsconfig.json`)
- **Client Components:** Dashboard and interactive components require `"use client"` directive
- **Hydration Safety:** Suppress hydration warnings with `suppressHydrationWarning` for date/time rendering

## Data Flow & State Management
- **Call Data:** Fetched from backend API, processed for analytics visualization
- **Real-time Updates:** Dashboard components poll API for live metrics (useEffect with dependency on dateFilter)
- **State:** Local React state + custom hooks (`use-mobile`, `use-toast`)
- **Context:** Theme provider from next-themes for dark/light mode switching
- **Types:** Comprehensive TypeScript interfaces in `types/index.ts` for Call, Agent, Analytics
  - Call status types: 'completed', 'missed', 'ongoing', 'failed', 'user-ended', 'agent-ended', 'timeout', 'error'
  - Direction types: 'inbound', 'outbound', 'unknown'
  - Recording URL can be nested in multiple places (recording_url, audioUrl, recording.url, metadata.recording_url)

## Performance Optimizations
- **Next.js Config:** 
  - Image optimization (WebP/AVIF formats)
  - SWC minification enabled
  - Compression enabled
  - Custom cache headers in `next.config.mjs` and `vercel.json`
  - Static assets cached for 1 year (31536000 seconds)
- **Mobile:** 
  - Custom `use-mobile` hook for responsive behavior (768px breakpoint)
  - Touch-optimized interactions via CSS
  - Mobile menu with overlay pattern for sidebar
- **Charts:** 
  - Conditional rendering with `mounted` state to prevent SSR hydration issues
  - Example: `const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), [])`
- **Fonts:** 
  - Geist variable fonts loaded in layout
  - Antialiased rendering enabled
- **Analytics:** @vercel/analytics integrated in root layout

## Integration Patterns
- **Voice AI:** @vapi-ai/web integration for voice conversation functionality
- **Analytics:** Complex data transformation for chart visualization (see `app/dashboard/page.tsx` `fetchAnalytics` function)
  - Filters calls by date range
  - Calculates metrics like success rate, average duration, peak hours
  - Generates hourly/daily/weekly distribution data
  - Status distribution with percentages
- **SEO:** 
  - Extensive structured data (Organization, WebSite, SoftwareApplication, FAQPage schemas)
  - Metadata exported from each page
  - Google Search Console verification
  - sitemap.xml and robots.txt in public/
- **Forms:**
  - Web3Forms API for lead capture (direct submission, not proxied)
  - Email sent to `hello@metic.ai`
  - FormData approach required by Web3Forms API
- **Vercel:** Deployment-ready with analytics integration

## Common Patterns to Follow
1. **New Dashboard Components:** 
   - Use grid layouts with `MetricCard` component pattern from dashboard
   - Include loading states with Loader2 icon and centered layout
   - Handle mobile with hamburger menu and overlay sidebar
   - Example MetricCard props: `{ title, value, icon, trend, trendValue, color, subtitle }`

2. **API Integration:** 
   - Extend `callsAPI` object in `lib/api.ts` for new endpoints
   - Always use try/catch with console.error for debugging
   - Check for Bearer token from localStorage before authenticated calls
   - Handle nested response structures (`data.data?.calls || data.calls`)

3. **New Service Pages:** 
   - Export metadata object with SEO fields (title, description, keywords, openGraph, twitter)
   - Follow structure: Header + Hero + Benefits + Features + CTA + Footer
   - Use gradient text with `bg-clip-text text-transparent`
   - Include structured data in metadata when relevant

4. **Charts:** 
   - Use Recharts with custom gradients defined in `<defs>` blocks
   - Wrap in ResponsiveContainer with explicit height
   - Guard rendering with `mounted &&` to prevent hydration errors
   - Use `chartColors` array for consistent color schemes
   - Example gradient: `linearGradient id="callsGradient"` with stop colors

5. **Forms:** 
   - Use shadcn/ui form components with Lucide icons in input fields
   - Implement loading, success, and error states
   - For Web3Forms: use FormData, include access_key, direct API submission
   - Reset form after successful submission

6. **Styling:**
   - Use custom CSS variables from globals.css (--background, --foreground, --accent)
   - Orange accent color for CTAs and highlights
   - Black/white theme with gray scale for depth
   - Responsive breakpoints: sm (640px), md (768px), lg (1024px)
   - Mobile-first approach with sm: and lg: prefixes

7. **Error States:** 
   - Implement loading spinners with Loader2 icon and animate-spin
   - Show user-friendly error messages
   - Console.log API responses for debugging (interceptors already configured)

## SEO & Performance Notes
- **Google Search Console:** Verified with `public/googlef2bf8afb699100cd.html`
- **Metadata:** Comprehensive OpenGraph/Twitter meta tags on every page
- **Structured Data:** Organization, WebSite, SoftwareApplication, FAQPage schemas in layout
- **Mobile:** Performance-focused CSS, touch optimizations, responsive images
- **Caching:** Static assets cached 1 year via vercel.json and next.config.mjs headers
- **Image Domains:** Cloudinary and Unsplash configured in next.config.mjs

## TypeScript Patterns
- Interfaces defined in `types/index.ts` for domain models
- Use strict TypeScript (`strict: true` in tsconfig.json)
- Call interface has extensive optional fields due to API variability
- Always type component props with interfaces
- Use `Metadata` type from 'next' for page metadata exports

---

**This is a production business application - prioritize data accuracy, error handling, and performance in all implementations.**
