# Gemini Workspace Context (`GEMINI.md`)

This file provides essential context about the project in this directory to the Gemini AI. By maintaining this file, you help Gemini understand the project's structure, purpose, and conventions, enabling it to provide more relevant and accurate assistance.

## Project Overview

This is a Next.js application designed to showcase services for automating tasks with Python and AI. It features a hero section, a services listing, a how-it-works guide, a call-to-action section, and a footer. The main technologies used are Next.js (App Router), React, TypeScript, Tailwind CSS, and Heroicons. The overall architecture is a monolithic Next.js application with a clear component structure, separating UI primitives from larger section components.

## Building and Running

### Setup

*   `pnpm install`

### Running the Application

*   **Development:** `pnpm run dev`
*   **Production:** `pnpm start`

### Running Tests

*   `pnpm test`

## Development Conventions

### Coding Style

*   **Formatting:** We use Prettier for automated code formatting. Run `pnpm run format` before committing.
*   **Linting:** We use ESLint for static analysis. Check for linting errors with `pnpm run lint`.
*   **Naming Conventions:** Components should be named in `PascalCase`. Functions and variables should be in `camelCase`.

### Testing

*   We use Jest for unit and integration tests.
*   Test files are located alongside the source files and have a `.test.js` or `.spec.js` extension.
*   Run tests with `pnpm test`.

### Version Control

*   This project uses Git.
*   Please create a new branch for each feature or bug fix.
*   Follow the conventional commit message format.

## Styling Instructions

### Colors (Tailwind Extend)

```typescript
// tailwind.config.ts → theme.extend.colors
primary: {
  50: '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4',  // MAIN BRAND
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
}
slate: { ... } // Use default Tailwind slate
```

### Typography

*   **Font:** 'Inter', sans-serif (loaded via `next/font/google`)
*   **Weights:** 300, 400, 500, 600, 700
*   **Sizes:**
    *   Hero Title: `text-3xl` md:`text-5xl`
    *   Section Title: `text-2xl` md:`text-3xl`
    *   Body: `text-base` md:`text-lg`
    *   Caption: `text-sm`

### Spacing & Layout

*   **Max width:** `max-w-5xl` for content sections, `max-w-3xl` for centered text
*   **Padding:** `px-6` `py-20` md:`py-32` for sections
*   **Gap:** `gap-8` for grids, `space-y-8` for vertical stacks
*   **Border radius:** `rounded-xl` for cards, `rounded-full` for buttons

### Button Styles

*   **Primary CTA:** Gradient `from-primary-500` to-`primary-600`, white text, `px-8` `py-4`, `rounded-full`, hover scale + shadow lift
*   **Secondary:** Ghost style, slate border, transparent bg, `hover:bg-slate-50`
*   **Secondary White (for CTA Section):** White bg, primary text, `hover:bg-slate-100`

## Component Specifications

### `components/ui/Button.tsx`

*   **Props:**
    *   `children`: `React.ReactNode`
    *   `variant?`: `'primary'` | `'secondary'` | `'secondary-white'` (default: `primary`)
    *   `size?`: `'sm'` | `'md'` | `'lg'` (default: `md`)
    *   `href?`: `string` (if link)
    *   `onClick?`: `() => void`
*   **Behavior:**
    *   Primary: gradient bg, white text, `hover:scale-105` + `shadow-lg`
    *   Secondary: slate border, transparent bg, `hover:bg-slate-50`
    *   Secondary White: white bg, primary text, `hover:bg-slate-100`

### `components/ui/Card.tsx`

*   **Props:**
    *   `title`: `string`
    *   `description`: `string`
    *   `icon`: `React.ElementType` (Heroicons component)
    *   `hoverEffect?`: `boolean` (default: `true` → adds shadow lift)
*   **Style:**
    *   White bg, `rounded-xl`, `shadow-md`, `hover:shadow-lg`, `transition-all`

### `components/sections/Hero.tsx`

*   **Content Blocks:**
    *   `heroTitle`: “I Automate Your Boring Tasks with Python + AI”
    *   `heroSubtitle`: “Stop wasting hours on spreadsheets, scraping, or repetitive DMs...”
    *   `ctaText`: “Get Started for $39 →”
    *   `ctaLink`: Fiverr URL
    *   `badgeText`: “First 3 clients → FREE 24h rush delivery 🚨”
*   **Layout:**
    *   Centered, `max-w-3xl`, hero title in `<h1>` with `text-cyan-600` span on key phrase
    *   CTA button uses `Button` component with primary variant

### `components/sections/Services.tsx`

*   **Data Structure (defined in `lib/constants.ts`):**
    *   `services` array with `id`, `title`, `description`, `icon` (Heroicons component)
*   **Render:**
    *   Grid: `grid-cols-1` md:`grid-cols-2` lg:`grid-cols-3` `gap-8`
    *   Each item → `Card` component

### `components/sections/HowItWorks.tsx`

*   **Steps Data (defined in `lib/constants.ts`):**
    *   `howItWorks` array with `step`, `title`, `description`
*   **Layout:**
    *   Horizontal on desktop (`flex-row`), vertical on mobile
    *   Each step: circular badge with number, title, description
    *   Separator: hidden on mobile, visible `h-px` `bg-slate-300` on desktop

### `components/sections/CtaSection.tsx`

*   **Content Blocks:**
    *   `title`: “Ready to Kill a Boring Task?”
    *   `subtitle`: “Get started for just $39 — delivered in 48 hours.”
    *   `buttonText`: “Order Now on Fiverr →”
    *   `buttonLink`: Fiverr URL
    *   `badgeText`: “First 3 clients → FREE 24h delivery 🚀”
*   **Style:**
    *   Full-width section with `bg-gradient-to-r` from `primary-600` to `teal-600`
    *   Text center, white, CTA button uses `secondary-white` variant

### `components/sections/Footer.tsx`

*   **Content:**
    *   Location: “Based in Morocco 🇲🇦 — Serving solopreneurs worldwide”
    *   Languages: “English • Français”
    *   Links: LinkedIn, GitHub, Fiverr (as anchor tags with hover effect)
    *   Copyright: “© 2025 Haytham M. All rights reserved.”
*   **Style:**
    *   Dark background (`bg-slate-900`), light text (`text-slate-400`)
    *   Center aligned, small font

## Page Logic (`app/page.tsx`)

*   **Imports:** All section components
*   **Structure:**
    ```tsx
    export default function HomePage() {
      return (
        <>
          <Hero />
          <Services />
          <HowItWorks />
          <CtaSection />
          <Footer />
        </>
      );
    }
    ```
*   **Metadata:**
    ```tsx
    export const metadata = {
      title: "Automate Your Boring Tasks with Python + AI",
      description: "I build lightweight automations so you can focus on growth — starting at $39, delivered in 48h.",
    };
    ```
