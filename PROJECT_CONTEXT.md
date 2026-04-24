# Orbit Crew - Project Context

## Overview
Creative agency portfolio website built with Next.js. Showcases services, work/projects, agencies, and capabilities.

## Tech Stack
- **Framework**: Next.js 16.2.3 (App Router)
- **Language**: TypeScript
- **UI**: React 18.3.1
- **Key Dependencies**:
  - framer-motion - animations
  - lenis - smooth scroll
  - lucide-react - icons
  - react-countup - animated counters

## Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout
│   ├── contact/page.tsx      # Contact page
│   ├── work/[slug]/page.tsx  # Individual project pages
│   ├── capabilities/
│   │   ├── page.tsx         # Services/capabilities list
│   │   └── [slug]/page.tsx  # Individual capability pages
│   └── agencies/page.tsx    # Agencies page
└── components/
    ├── Hero.tsx              # Hero section
    ├── Nav.tsx               # Navigation
    ├── Footer.tsx            # Footer
    ├── Stats.tsx             # Statistics counter
    ├── Services.tsx          # Services section
    ├── Pricing.tsx           # Pricing section
    ├── ProjectGrid.tsx       # Project gallery
    ├── Process.tsx           # Process steps
    ├── Marquee.tsx           # Animated marquee
    ├── SpotlightCard.tsx     # Featured content card
    ├── SmoothScroll.tsx      # Lenis smooth scroll wrapper
    ├── Counter.tsx          # Animated counter
    ├── Accordion.tsx          # FAQ accordion
    └── AgencySection.tsx     # Agency info section
```

## Pages
- **/** - Homepage with hero, services, projects, pricing
- **/contact** - Contact form
- **/work/[slug]** - Individual project case studies
- **/capabilities** - Services listing
- **/capabilities/[slug]** - Individual service details
- **/agencies** - Agency partners/info

## Design
- Modern creative agency aesthetic
- Smooth scroll animations (lenis)
- Interactive elements (framer-motion)
- Responsive layout

## Color Theme (Updated - Light Theme)
```css
--color-bg-dark: #FFFFFF;           /* Main background - Crisp White */
--color-bg-light: rgba(241, 245, 249, 0.6);  /* Semi-transparent - Subtle Accent #F1F5F9 */
--color-bg-secondary: #F1F5F9;       /* Secondary backgrounds */
--color-text-white: #102B4E;        /* Primary text - Deep Navy Blue */
--color-text-black: #102B4E;        /* Text on light backgrounds - Deep Navy */
--color-text-muted: #64748B;        /* Muted text for body copy */
--color-accent: #1760C2;            /* Primary accent - Vibrant Brand Blue */
--color-accent-light: #60A5FA;      /* Light accent for mesh gradients */
--color-purple: #102B4E;           /* Secondary - Deep Navy (replaces purple) */
```
Animated mesh gradient blobs: Deep Navy (#102B4E), Vibrant Brand Blue (#1760C2), Light Blue (#60A5FA)

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run linting