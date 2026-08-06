# Task: Pixel-and-motion-accurate clone of https://hugo.ai/en/

You are rebuilding this site from scratch. Before writing any code, you must do
your own live analysis of the site — do not rely only on the notes below, they
are a starting map, not the full ground truth. Treat this as a two-phase job:
**Phase 1: Analyze. Phase 2: Build.** Do not skip Phase 1.

---

## Phase 1 — Analyze the live site yourself

1. Fetch https://hugo.ai/en/ directly (browser tool / fetch) and inspect the
   rendered DOM — this is a Nuxt.js (Vue) site (confirmed via `/_ipx/...`
   image-optimizer paths, which is Nuxt's Nitro ipx module). Expect Vue
   component structure, not React.
2. If a `./hugo-extract/` folder is present alongside this prompt, it contains
   a ground-truth package already extracted via Playwright:
   - `rendered.html` — actual post-hydration DOM
   - `computed-styles.json` — real computed CSS per element (colors, fonts,
     spacing, transitions, transforms — use these values exactly, don't guess)
   - `design-tokens.json` — root CSS custom properties (the real color/spacing
     scale)
   - `keyframes.json` — every `@keyframes` rule found in the site's
     stylesheets — this is your animation ground truth, use these timing
     curves and property changes directly
   - `detected-libraries.json` — tells you if GSAP, Framer Motion, AOS,
     Lottie, or Lenis (smooth scroll) is in use. Match the same animation
     approach: e.g. if GSAP+ScrollTrigger is detected, build scroll reveals
     with GSAP+ScrollTrigger, not generic CSS `@keyframes`.
   - `screenshot-{1440,1024,768,375}.png` — full-page screenshots at 4
     breakpoints — match these exactly for responsive layout
   - `scroll-sequence/step-00.png` through `step-20.png` — sequential
     screenshots taken while scrolling down the page. Compare consecutive
     frames to identify exactly which elements fade/slide/scale in and at
     what scroll position — this tells you the real entrance-animation
     triggers and directions.
   Use this data as your primary source of truth over your own visual
   guesses from a single screenshot.
3. If `./hugo-extract/` is NOT present, extract it yourself first: use your
   browser tool to load the page, dump `document.documentElement.outerHTML`,
   read computed styles via `getComputedStyle()` on key sections, and take
   screenshots at 1440/1024/768/375px widths plus a few scroll positions.
   Do not proceed to Phase 2 on screenshots alone — you need the DOM and CSS.
4. Identify and log for yourself: color palette (bg, text, accent, gradient
   stops), font family + weights + scale, spacing/grid system, border-radius
   scale, shadow styles, and the animation library in use.

## Phase 2 — Build the clone

### Stack
- **Next.js 15+ (App Router), React 19, TypeScript.** The original site is
  built on Nuxt/Vue (confirmed via `/_ipx/` image paths) — you are NOT
  matching its framework, only its visual output and motion, so translate
  Vue component boundaries into React components/sections as makes sense,
  don't try to mirror Nuxt-specific patterns.
- **Tailwind CSS v4.** Note the v4 config model is different from v3 — there
  is no `tailwind.config.js` by default. Design tokens (colors, fonts,
  spacing, radius) are defined directly in CSS via `@theme` in
  `globals.css`, e.g.:
  ```css
  @import "tailwindcss";
  @theme {
    --color-brand: #1a1a2e; /* use real hex from design-tokens.json */
    --font-sans: "InterVariable", sans-serif;
    --radius-card: 1.25rem;
  }
  ```
  Map every color/font/spacing/radius value extracted in Phase 1 into
  `@theme` this way — don't fall back to a `tailwind.config.js` file, and
  don't use Tailwind's default palette as a placeholder.
- `next/image` for all imagery (handles optimization equivalent to the
  original's `_ipx` layer).
- GSAP + ScrollTrigger for scroll-based reveals unless `detected-libraries.json`
  says otherwise — use whatever was actually detected on the live site.
  GSAP works the same in React as anywhere else (init inside `useEffect`/
  `useGSAP` hook, clean up on unmount). Framer Motion is a fine alternative
  if you want to stay fully in the React ecosystem, but GSAP+ScrollTrigger
  will match the original's exact scroll-trigger behavior more precisely if
  that's what's detected.
- Responsive breakpoints matched to the 4 captured widths (1440/1024/768/375).

### Section-by-section structure (confirmed from page content — verify exact
### spacing/imagery against your Phase 1 extraction)

1. **Header/Nav** — logo left, anchor links center (`Why / Solutions /
   Features / How it works / Integrations / Case studies / Pricing`), Log in
   + "Try for free" CTA right. Likely sticky/fixed on scroll — check
   scroll-sequence frames for a background/shadow change on the nav as you
   scroll past the hero.

2. **Hero** — large headline "Resolve up to 60% of your support tickets",
   subheading, dual CTA ("Try for free" + "Watch demo"), trust line ("14-day
   free trial · No card required"), large illustrative "scene" raster image
   right or below. Check if the hero image has any idle float/parallax
   animation (common in this style of SaaS hero) via the scroll-sequence
   frames or a few seconds of idle observation.

3. **Logo cloud** — "Powered by Crisp" + "trusted by 10,000 companies" line,
   then a horizontal row of 6 client logos (Reedsy, Oxio, Decathlon, G4
   Educação, EmmaApp, GoMoWorld). Check if this row auto-scrolls/marquees —
   common pattern for logo strips, verify against DOM for a marquee wrapper
   or `animation: scroll` in keyframes.json.

4. **"Why" section** — starfield background image, 5 stacked value-prop
   blocks (Built for the real world / Engineered for longevity / Transparent
   by design / Grounded in truth / Autonomy with responsibility), each with a
   heading + 1-2 sentence body. There's a "Crisp logo with glass effect"
   element — likely a frosted-glass/backdrop-blur card. Check computed-styles
   for `backdrop-filter` and `background` with low alpha.

5. **Solutions/channels band** — "1 agent. 10 channels. 1,000 possibilities."
   headline, then 3 feature callouts (Multi-turn intelligence / Deep
   integration / Smart escalation) plus 3 badge cards (Security / Compliance
   / Hosting), each with a small badge icon.

6. **Features** — 5 alternating image+text rows (image left/text right, then
   flipped, repeat), each row: small caption, headline, body text, screenshot
   image. Titles: Integrations, Activate, Configure, Workflow, Analytics.
   Check scroll-sequence for whether these alternate slide-in-from-left /
   slide-in-from-right per row (very common for this layout pattern).

7. **"Four steps" process** — numbered 01–04, each with title, one-line
   description, and a small illustration (feed/customize/test/run). Likely
   a horizontal stepper on desktop, stacked on mobile — verify against the
   375px screenshot.

8. **CTA band** — "Interested in Hugo?" + CTA button, centered.

9. **Integrations section** — "Works with your stack, not against it",
   large "orbit of intelligence" illustration. This is almost certainly
   animated (rotating/pulsing orbit rings) — check keyframes.json for a
   `rotate` or `orbit`-named animation and match the exact duration/easing.

10. **Case studies** — "Real teams, real results", 3 testimonial cards each
    with a client image, quote, name, and title. Check if this is a carousel
    (swipeable/auto-rotating) or static 3-column grid at desktop width —
    verify against DOM for slider library markers (Swiper/Splide classes).

11. **Pricing** — "Pay as you go: $0.00" heading, then 3 tiered cards (Mini
    $45, Essentials $95, Plus $295) each with distinct background color
    (blue/orange/pink card backgrounds — get exact hex from computed-styles),
    plus an interactive slider ("Estimate your monthly AI conversations")
    that recalculates an estimated price live as you drag it — this needs
    real JS state, not just visual. Below the cards: a features list ("What's
    included").

12. **FAQ** — accordion-style Q&A (5 questions), collapsed by default,
    expand-on-click. Check computed-styles/keyframes for a height/opacity
    transition on expand.

13. **Final CTA + Footer** — repeat of hero CTA, then footer nav links,
    social icons (Facebook/X/TikTok/Instagram), locale switcher (4 flags:
    EN/FR/ES/PT), legal links, copyright.

### Motion/interaction checklist — verify each against scroll-sequence frames
### or keyframes.json before implementing, don't assume:
- [ ] Hero image: idle float or parallax on scroll?
- [ ] Logo cloud: static or marquee/auto-scroll?
- [ ] Feature rows: alternating slide-in direction on scroll into view?
- [ ] Orbit graphic: rotating/pulsing animation, what duration/easing?
- [ ] Nav bar: background/shadow change on scroll?
- [ ] Cards (pricing/case studies): hover lift/scale effect?
- [ ] FAQ accordion: height+opacity transition, what easing/duration?
- [ ] Section headings: fade+slide-up entrance on scroll into viewport?
- [ ] Pricing slider: live-updating estimate text as it's dragged?

### Project setup
```bash
npx create-next-app@latest hugo-clone --typescript --tailwind --app --src-dir --import-alias "@/*"
```
This scaffolds with Tailwind v4 already wired in on current versions of
`create-next-app`. Verify `package.json` shows `"tailwindcss": "^4"` — if it
scaffolded v3 instead, upgrade manually per Tailwind v4's migration guide
before writing any components, since the `@theme` token approach only works
on v4.

### Content accuracy
Use the exact copy captured below (already extracted from the live page) —
don't paraphrase headlines/body copy:

- Hero: "Resolve up to 60% of your support tickets" / "Hugo takes on the
  support volume, so your team stops firefighting and starts delivering real
  support."
- Why section 5 blocks: "Built for the real world.", "Engineered for
  longevity.", "Transparent by design.", "Grounded in truth.", "Autonomy with
  responsibility." (each with their full body copy — pull exact text from
  rendered.html)
- Channels: "1 agent. 10 channels. 1,000 possibilities."
- Features section titles: Integrations, Activate, Configure, Workflow,
  Analytics — each with their captured headline + body text
- Process steps: "Feed Hugo your knowledge." / "Make it yours." / "Test it
  out." / "Let it run."
- Pricing tiers: Mini $45, Essentials $95, Plus $295
- FAQ questions: "What is the best AI agent for customer support?", "Which AI
  agent solutions enhance customer support?", "What is an AI customer service
  agent?", "What is an example of AI customer support?", "What if the AI
  Agent gets something wrong?" (pull full answers from rendered.html)

### After building
1. Take screenshots of your clone at 1440/1024/768/375px.
2. Diff them against `screenshot-{width}.png` from the extraction folder
   (pixel diff tool, e.g. pixelmatch, or visual side-by-side comparison).
3. Report back any sections where layout/spacing/color deviates, and fix
   before considering the task done. Don't stop at "looks about right."
