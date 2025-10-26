# Copilot Instructions for DigitalBot

## Project Overview
- This is a Next.js (App Router) project using TypeScript, with a modular structure under `app/` for routes and `components/` for UI and logic.
- Major pages are in `app/`, with subfolders for nested routes (e.g., `dashboard/calls/`, `dashboard/leads/`).
- Shared UI and logic are in `components/` (including a `ui/` subfolder for reusable primitives) and `hooks/` for custom React hooks.
- Utility functions are in `lib/`.

## Key Patterns & Conventions
- **Component Structure:**
  - Use functional components with TypeScript.
  - UI primitives (buttons, dialogs, etc.) are in `components/ui/`.
  - Higher-level components (e.g., `Sidebar`, `StatCard`) are in `components/`.
- **Styling:**
  - Global styles in `app/globals.css` and `styles/globals.css`.
  - Prefer CSS modules or Tailwind (if present) for component styles.
- **Routing:**
  - Each folder in `app/` with a `page.tsx` is a route.
  - Nested folders represent nested routes.
- **State & Hooks:**
  - Custom hooks live in `hooks/` (e.g., `use-mobile.ts`, `use-toast.ts`).
  - Use context providers for cross-cutting concerns (see `theme-provider.tsx`).

## Developer Workflows
- **Install dependencies:** `pnpm install`
- **Run dev server:** `pnpm dev` or `pnpm next dev`
- **Build:** `pnpm build`
- **Start production server:** `pnpm start`
- **No explicit test setup detected.**

## Integration & Data Flow
- No backend or API integration code detected in this snapshot; data is likely static or handled client-side.
- For cross-component communication, use React context or props drilling as seen in `theme-provider.tsx` and component composition.

## Examples
- To add a new dashboard section, create a folder under `app/dashboard/` with a `page.tsx`.
- To add a new UI primitive, place it in `components/ui/` and export as needed.

## Special Notes
- Follow the existing folder structure for scalability.
- Use TypeScript for all new code.
- Reference `components/` and `hooks/` for reusable logic before creating new utilities.

---

_If you are unsure about a pattern or workflow, check for similar examples in `components/`, `app/`, or `hooks/`._
