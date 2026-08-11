# Blockwave — Next.js Site

A production-grade Next.js implementation of the Blockwave brand site, ported from the original static HTML mockups with smooth scrolling and parallax animations layered in.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with brand tokens defined in `tailwind.config.ts`
- **Framer Motion** for parallax, scroll-reveal, staggered intros, animated mark, and accordion transitions
- **Lenis** for smooth scrolling (with hash-link interception for anchor jumps)
- **Space Grotesk** + **DM Mono** loaded via `next/font/google`

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, Services, Courses Preview, Values, CTA |
| `/services` | `app/services/page.tsx` | Hero with scroll-spy pills, three full service sections, Why band, CTA |
| `/courses` | `app/courses/page.tsx` | Hero, three full course sections with phase accordions + sticky info cards, Outcomes, Apply band |
| `/contact` | `app/contact/page.tsx` | Hero, contact form with inquiry-type tabs + sidebar, FAQ accordion |

## Animations & motion

- **Smooth scroll**: Lenis is mounted at the root via `components/SmoothScroll.tsx`. Hash links are intercepted and routed through `lenis.scrollTo()` for an eased anchor jump.
- **Parallax**: `components/Parallax.tsx` wraps any element and applies a scroll-driven `translateY` based on a configurable `speed` prop. The hero mark uses a subtle `-0.15` parallax — content drifts upward as you scroll.
- **Scroll reveals**: `components/Reveal.tsx` fades elements in from 28px below the viewport with an eased cubic transition. Used across all section headers and content blocks.
- **Staggered intros**: Hero headlines, eyebrows, and CTAs use Framer Motion's `staggerChildren` for a measured page-load reveal.
- **Animated hero mark**: Concentric squares in `HeroMark.tsx` counter-rotate at different speeds (60s outer → 24s inner), with a pulsing center dot and expanding halo ring.
- **Card hovers**: Service and course cards lift slightly and reveal accent bars on hover.
- **Accordions**: Phase items (courses) and FAQ items use `AnimatePresence` with height/opacity transitions and rotating chevrons.

## Run it

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  globals.css           # Brand vars, Lenis CSS, utility classes
  layout.tsx            # Fonts, metadata, SmoothScroll provider
  page.tsx              # Home
  services/page.tsx
  courses/page.tsx
  contact/page.tsx
components/
  Nav.tsx, Footer.tsx, LogoMark.tsx
  SmoothScroll.tsx, Reveal.tsx, Parallax.tsx
  HeroMark.tsx          # Animated concentric-squares mark
  sections/             # Home page sections
  services/             # Services page parts
  courses/              # Courses page parts (incl. PhaseItem accordion)
  contact/              # Contact page parts (incl. FAQ accordion)
lib/
  services-data.ts      # Typed service content
  courses-data.ts       # Typed course content + outcomes
public/
  wb-*.svg              # Brand SVG assets
```
