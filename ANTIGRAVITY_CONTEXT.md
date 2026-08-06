# Hugo.ai Clone — Project Context for Antigravity

## What This Project Is
A pixel-accurate clone of https://hugo.ai/en/ built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, and Lenis smooth scroll.

The original site is a dark-themed (black bg) AI customer support SaaS landing page. It uses:
- **Fonts**: Inter (Light/Regular/Medium/Bold), Feature Display Regular, Robo Mono
- **Colors**: Black (#000) background, #a8a8a8 body text, #fff headings, #2377F6 accent blue
- **Style**: Dark glassmorphism cards with inset shadows, gradient glows, sticky stacking sections

---

## Current Project Structure

```
orbit-crew/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens + @theme + base styles
│   │   ├── layout.tsx           # Root layout (metadata)
│   │   └── page.tsx             # Main page assembling all sections
│   └── components/
│       ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│       ├── Header.tsx           # Fixed nav with blur backdrop
│       ├── Hero.tsx             # Hero with float/parallax animation
│       ├── LogoCloud.tsx        # Client logos row
│       ├── WhySection.tsx       # "Why?" with floating cards
│       ├── SolutionsSection.tsx # Channels/concepts/commitments
│       ├── FeaturesSection.tsx  # Stacking sticky feature cards
│       ├── HowItWorks.tsx       # 4-step process
│       ├── IntegrationsSection.tsx  # Animated orbit canvas
│       ├── CaseStudies.tsx      # Hover-expand testimonial cards
│       ├── PricingSection.tsx   # 3 tiers + slider configurator
│       ├── FAQSection.tsx       # Chat-bubble Q&A
│       └── Footer.tsx           # 4-column footer + locale switcher
├── public/
│   └── hugo-assets/             # 428 downloaded assets from hugo.ai
│       ├── fonts/               # 6 .woff2 font files
│       ├── images/              # 23 images (screenshots, scenes, cards)
│       ├── svgs/                # 42 SVGs (logos, badges, inline icons)
│       └── other/               # misc files
├── hugo-extract/                # Ground truth extraction
│   ├── rendered.html            # Full DOM (196KB)
│   ├── computed-styles.json     # Per-element computed CSS
│   ├── all-css.json             # All 1094 CSS rules from the site
│   ├── fonts.json               # Font families and @font-face rules
│   ├── inline-svgs.json         # 27 inline SVGs
│   ├── keyframes.json           # @keyframes rules
│   ├── detected-libraries.json  # Animation library detection
│   ├── text-content.json        # All text content per section
│   ├── screenshots/             # Full-page screenshots at 4 breakpoints
│   └── scroll-sequence/         # 21 scroll-step screenshots
├── backup-content/              # Original OrbitCrew business data (preserved)
├── extract.js                   # Playwright extraction script
└── download-assets.js           # Asset downloader script
```

---

## What Has Been Built (Current State)

### Sections Implemented:
1. **Header** — Fixed nav, logo left, nav links center, CTA right, backdrop blur on scroll
2. **Hero** — Headline, subtitle, dual CTA, trust line, abstract 3D scene with float animation
3. **Logo Cloud** — "Powered by Crisp" + 6 client logos (real SVGs)
4. **Why Section** — Giant gradient "Why?" title + 5 floating value-prop cards
5. **Solutions** — "1 agent. 10 channels. 1,000 possibilities." + 3 concepts + 3 commitment cards
6. **Features** — 5 sticky-stacking cards with dark gradient backgrounds
7. **How It Works** — 4 numbered steps with illustrations + CTA card
8. **Integrations** — Animated orbit canvas (rotating rings + center logo)
9. **Case Studies** — 3 testimonial cards with hover-expand animation
10. **Pricing** — 3 tier cards + interactive slider + included features
11. **FAQ** — Chat-bubble style Q&A with entrance animations
12. **Footer** — 4-column grid + social icons + locale switcher + legal links

### Animations Implemented:
- Lenis smooth scroll
- GSAP ScrollTrigger on all sections
- Hero float/parallax
- Sticky stacking feature cards
- Hover-expand case study cards
- Chat-bubble FAQ entrance
- Animated orbit canvas (requestAnimationFrame)
- Header backdrop blur on scroll

---

## What Is Lacking / Needs Audit

### Visual Fidelity Issues:
1. **Hero scene** — Currently abstract CSS shapes. The real site has a detailed 3D illustration (scene_raster.webp is downloaded but not used as the main hero visual)
2. **Feature card screenshots** — Cards show placeholder gradients. Real screenshots exist in `/hugo-assets/images/` (activate.png, analytics.png, configure.png, workflow.png, etc.) but aren't placed in the cards
3. **How it works illustrations** — Currently emoji placeholders. Real illustrations exist (feed.webp, customize.webp, test.webp, run.webp)
4. **Case study cards** — Missing client photos (afs_foil.webp, emma.webp, spidervo.webp exist)
5. **Pricing cards** — Missing background images (card_background_blue.png, card_background_orange.png, card_background_pink.png exist)
6. **Pricing bill** — Missing bill background image (bill_background.webp exists)
7. **Integrations** — Canvas animation is basic. Real site has a detailed orbit illustration (orbit_intelligence.webp exists)
8. **Why section** — Missing background stars image (background_stars.png exists) and clouds animation (clouds.webp exists)
9. **Logo glass effect** — The "Crisp logo with glass effect" in Why section is missing (logo_glass.svg + mask technique needed)

### Missing Elements:
10. **Cookie banner** — Fixed bottom-left cookie consent banner (CSS extracted, not built)
11. **Site switcher** — Dropdown to switch between Hugo and Crisp products
12. **Language picker** — Locale switcher dropdown (EN/FR/ES/PT flags)
13. **Background glow effects** — Animated gradient blobs at top/bottom of page (CSS extracted with blur/opacity)
14. **Dotted dividers** — Some sections need dotted dividers between them
15. **Responsive polish** — Mobile layouts need verification against 375px screenshots
16. **Hover states** — Card hover lift/scale effects need verification
17. **Pricing slider** — Needs the exact stepped-slider component (CSS extracted with thumb/stops/labels)
18. **FAQ "Ask Hugo" button** — Should open a chat widget (at minimum style it as a CTA)

### Assets That Need Generation (transparent PNGs):
- Hero 3D scene illustration (or use scene_raster.webp)
- Feature card screenshots with transparent backgrounds
- How it works step illustrations
- Case study client photos (cutout/transparent)
- Integration orbit illustration (detailed)
- Background glow orbs (can be CSS)
- Why section clouds animation layer

---

## Design System Reference (Extracted from hugo.ai)

### Color Palette:
```
Background:       #000000
Card BG:          #1c1c1c
Body text:        #a8a8a8
Headings:         #ffffff
Muted text:       #707070
Dim text:         #545454
Accent blue:      #2377F6
Accent hover:     #0957D9
Border:           rgba(255,255,255,0.08)
Border light:     rgba(255,255,255,0.12)
Inset shadow:     rgba(0,0,0,0.16)
Inset highlight:  rgba(255,255,255,0.32)
```

### Feature Card Colors:
```
Integrations:     #2c150c (brown)
Activate:         #032b35 (dark teal)
Configure:        #1d2c0c (dark green)
Workflow:         #361e02 (dark orange)
Analytics:        #34040b (dark red)
```

### Pricing Card Colors:
```
Mini:             rgba(13,171,211,0.2) — blue glow
Essentials:       rgba(211,66,13,0.2) — orange glow
Plus:             rgba(202,22,118,0.2) — pink glow
```

### Typography Scale:
```
2xl:  88px/100px  Feature Display
xl:   64px/76px   Feature Display
large: 56px/68px  Feature Display
medium: 48px/60px Feature Display
small: 40px/52px  Feature Display
tiny:  32px/44px  Feature Display
body:  14px/20px  Inter Regular
```

### Component Styles:
```
Card shadow: 0 2px 4px -2px rgba(0,0,0,0.12), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.32)
Card radius: 16px
Button radius: 8px
Page max-width: 1520px
Page padding: 64px (responsive: 54/42/24/20/16)
Section padding: 112px vertical
```

### Key CSS Patterns:
```css
/* Card base */
background: #1c1c1c;
border-radius: 16px;
box-shadow: 0 2px 4px -2px rgba(0,0,0,0.12), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.32);

/* Button base */
background: #2377F6;
border-radius: 8px;
box-shadow: 0 2px 4px -2px rgba(0,0,0,0.12), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.32);
transition: 0.15s linear;

/* Header blur */
backdrop-filter: blur(15px);
background: rgba(0,0,0,0.3);
mask: linear-gradient(#000 0px, rgba(0,0,0,0.99) 40%, transparent);

/* Why title gradient text */
background: linear-gradient(rgba(0,0,0,0.08), rgb(2,23,54) 25%, rgb(216,231,253), rgb(2,23,54) 75%, rgba(0,0,0,0.08)) text;
-webkit-text-fill-color: transparent;
-webkit-text-stroke: 1px rgba(255,255,255,0.15);
```

---

## Available Downloaded Assets (in /public/hugo-assets/)

### Fonts (use these directly):
- `inter_light_JXIeQN5R.woff2`
- `inter_regular_dG2RS-gk.woff2`
- `inter_medium_BZciD7gR.woff2`
- `inter_bold_uIQEQu1t.woff2`
- `featuredisplay_regular_D5c_265i.woff2`
- `roboto_mono_regular_CsPG_Ds2.woff2`

### Images (need placement):
- `activate.png`, `analytics.png`, `configure.png`, `workflow.png`, `integrations.png`, `train.png` — Feature card screenshots
- `feed.webp`, `customize.webp`, `test.webp`, `run.webp` — How it works illustrations
- `scene_raster.webp` — Hero scene
- `orbit_intelligence.webp` — Integrations orbit illustration
- `card_background_blue.png`, `card_background_orange.png`, `card_background_pink.png` — Pricing card backgrounds
- `bill_background.webp` — Pricing bill popup background
- `background_stars.png` — Why section background
- `clouds.webp` — Why section clouds animation
- `afs_foil.webp`, `emma.webp`, `spidervo.webp` — Case study client photos
- `hugo_ai_engine.webp` — Engine illustration
- `grain_fragment.png` — Film grain texture overlay

### SVGs (use directly):
- `logo_full_white.svg` — Hugo logo
- `logo_crisp_full_white.svg` — Crisp logo
- `logo_glass.svg` — Glass effect logo for Why section
- `logo_half_big.svg` — Half logo
- `badge_security.svg`, `badge_compliance.svg`, `badge_hosting.svg` — Commitment badges
- `reedsy.svg`, `oxio.svg`, `decathlon.svg`, `g4educacao.svg`, `emma.svg`, `gomoworld.svg` — Client logos

---

## How to Audit

1. **Run `npm run dev`** and open http://localhost:3000
2. **Compare against reference screenshots** in `hugo-extract/screenshots/`:
   - `screenshot-1440.png` — Desktop full page
   - `screenshot-1024.png` — Tablet landscape
   - `screenshot-768.png` — Tablet portrait
   - `screenshot-375.png` — Mobile
3. **Check scroll-sequence** in `hugo-extract/scroll-sequence/` (step-00 through step-20) to verify scroll-triggered animations match
4. **Read `hugo-extract/rendered.html`** for the exact DOM structure and class names
5. **Read `hugo-extract/all-css.json`** for the complete CSS specification

---

## Priority Tasks for Antigravity

### High Priority (Visual Accuracy):
1. Place real downloaded images into their respective sections
2. Fix hero to use scene_raster.webp as the main visual
3. Add feature card screenshots (activate.png, analytics.png, etc.)
4. Add How it works illustrations (feed.webp, customize.webp, test.webp, run.webp)
5. Add pricing card background images
6. Add case study client photos
7. Build the background glow effects (animated gradient blobs)
8. Add the Why section clouds animation with clouds.webp

### Medium Priority (Components):
9. Build cookie banner component
10. Build site switcher dropdown
11. Build language picker dropdown
12. Build stepped-slider for pricing (match extracted CSS)
13. Add dotted dividers between sections
14. Add film grain texture overlay to How it works illustrations

### Polish (Animations):
15. Verify all GSAP ScrollTrigger animations match scroll-sequence screenshots
16. Add hover lift/scale to all interactive cards
17. Ensure responsive breakpoints match reference screenshots exactly
18. Add entrance animations for section headings (fade + slide up)

### Asset Generation Needed (transparent PNGs):
- Hero 3D scene with transparent background (or composite scene_raster.webp)
- Feature card screenshots with device frames removed
- How it works step illustrations as clean icons
- Case study client headshots (cutout style)
- Integration orbit illustration (detailed, layered)
- Background glow orbs (can be CSS gradients)
