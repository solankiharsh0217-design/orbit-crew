# OrbitCrew Portfolio Website

## Project Overview

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS Modules + Global CSS
- **Animations**: GSAP + Framer Motion
- **Smooth Scrolling**: Lenis

## Design System

### Colors (Dark Theme)
- Background: `#0a0a0a` (near black)
- Card Background: `#111111`
- Text Primary: `#f0efe8` (warm off-white)
- Text Secondary: `#888888`
- Accent: `#FF4B1F` (vibrant orange-red)

### Typography
- Font: sans-serif (body font)
- Display: `clamp(4rem, 15vw, 15rem)` - 800 weight, uppercase
- H1: `clamp(3rem, 7vw, 6rem)` - 700 weight
- H2: `clamp(2.5rem, 5vw, 4.5rem)` - 700 weight
- Label: 12px, 600 weight, uppercase, 0.15em letter-spacing
- Body Large: `clamp(1.1rem, 1.5vw, 1.4rem)`, 0.8 opacity

### Spacing
- Container max-width: 1600px
- Section padding: `clamp(6rem, 10vw, 12rem)` vertical

---

## Page Structure

### Homepage (`/`)

1. **Nav** (`src/components/Nav.tsx`)
   - Fixed header with logo and menu button
   - Full-screen overlay menu (GSAP animated)
   - Links: Home, About, Work, Services, Contact

2. **Hero** (`src/components/Hero.tsx`)
   - Full viewport height
   - Character-by-character animation of "OrbitCrew." (GSAP)
   - Subtext: "We design brands and interactive experiences for fast-growing startups"
   - Bouncing "Explore" arrow with down chevron

3. **Marquee** (`src/components/Marquee.tsx`)
   - Infinite horizontal scroll ticker
   - Text: "Digital Production • Webflow • Development • Design Systems •"
   - Uses CSS animation (no library needed)

4. **Services Section** (inline in `page.tsx`)
   - 4 service cards in 2x2 grid
   - Cards: dark (#111) background, 60px padding
   - Each has: number, arrow icon, title, description, tag pills

5. **ProjectGrid** (`src/components/ProjectGrid.tsx`)
   - 4 project cards
   - Data: { number, name, tag, image }
   - Images from Unsplash
   - GSAP scroll-triggered animation
   - Hover reveals "View Project →"

6. **Services Accordion** (`src/components/Services.tsx`)
   - 5 expandable items
   - Each: number, name, expand icon (+/-)
   - Expanded: sub-services list + image
   - GSAP height animation

7. **Process** (`src/components/Process.tsx`)
   - Horizontal timeline
   - Steps: Discovery → Strategy → Design → Development → Launch
   - Connecting line between steps

8. **Stats** (`src/components/Stats.tsx`)
   - 4 animated counters (react-countup)
   - Time zone card showing: Local Time, Your Time, Location, Availability

9. **Pricing** (`src/components/Pricing.tsx`)
   - Two-column layout with video placeholder
   - Toggle: Monthly / Custom
   - Monthly: $7,500/mo, feature list
   - Testimonial card with avatar

10. **Clients Section** (inline in `page.tsx`)
    - 6 client names in grid
    - Dark card backgrounds

11. **CTA Section** (inline in `page.tsx`)
    - "Scale Now" display text
    - Subtext and button
    - Dot grid background pattern

12. **Footer** (`src/components/Footer.tsx`)
    - "Let's chat" CTA
    - Three columns: logo/tagline, navigation, social links
    - Copyright

---

## Components List

| Component | File | Description |
|-----------|------|-------------|
| Nav | `src/components/Nav.tsx` | Fixed nav with overlay menu |
| Hero | `src/components/Hero.tsx` | Main hero with text animation |
| Marquee | `src/components/Marquee.tsx` | Infinite scroll ticker |
| ProjectGrid | `src/components/ProjectGrid.tsx` | Project cards grid |
| Services | `src/components/Services.tsx` | Accordion services list |
| Stats | `src/components/Stats.tsx` | Animated counters + timezone |
| Pricing | `src/components/Pricing.tsx` | Pricing with toggle |
| Process | `src/components/Process.tsx` | Timeline steps |
| Footer | `src/components/Footer.tsx` | Site footer |
| SmoothScroll | `src/components/SmoothScroll.tsx` | Lenis wrapper |

---

## Animation Details

### GSAP
- Hero text: `y: 120 → 0`, `stagger: 0.035`, `ease: power4.out`
- Project cards: scroll-trigger, `y: 60 → 0`, `delay: i * 0.15`
- Services accordion: `height: 0 → auto`, `opacity` transition

### Framer Motion
- Reveal component: `opacity: 0 → 1`, `y: 30 → 0`, `duration: 0.8`
- Hero explore arrow: infinite bounce `y: [0, 8, 0]`, `duration: 2`

### Lenis
- Smooth scroll wrapper in `layout.tsx`
- Configuration: `{ ler: 0.1, smooth: true }`

---

## Image Sources

All images use Unsplash:
- ProjectGrid: `images.unsplash.com/photo-*`
- Services accordion: Various service-related images
- Pricing testimonial: Profile photo

Configure in `next.config.js`:
```js
images: {
  remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
}
```

---

## Available Scripts

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run linting
```

---

## Dependencies

- `next`: 14.2.3
- `react`: 18.3.1
- `gsap`: ^3.15.0
- `@gsap/react`: ^2.1.2
- `framer-motion`: ^12.38.0
- `lenis`: ^1.3.21
- `lucide-react`: 0.378.0
- `react-countup`: ^6.5.3
- `react-intersection-observer`: ^10.0.3