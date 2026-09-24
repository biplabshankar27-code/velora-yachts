# VELORA — Private Yacht Club

A luxury single-page web experience for **VELORA**, a private yacht club. Built around full-bleed cinematic video, glassmorphism, editorial serif typography, and layered motion design.

**Live:** https://velora-topaz-chi.vercel.app
**Repository:** https://github.com/biplabshankar27-code/velora-yachts

---

## Features

- **Cinematic video hero** — fixed full-viewport background video with staggered entrance animations and a scroll indicator
- **Floating pill navbar** + separate right-side pill; frosted-glass styling that adapts on scroll
- **Staggered sidebar menu** (GSAP) — layered colour pre-layers, clip-path label swap (MENU/CLOSE), staggered nav items with auto-numbering
- **Fleet showcase** — three yacht cards with portrait 9:16 video, quick-spec grids and a full specs drawer; plus a three-panel full-screen fleet overlay
- **Liquid ripple trail** — GPU-friendly mouse-following effect using a pre-allocated DOM pool (80 rings), an SVG `feTurbulence` + `feDisplacementMap` filter and one `requestAnimationFrame` loop
- **Membership tiers, Academy modules, concierge form, FAQ accordion, testimonials rail, press strip**
- **Page overlays** — Journeys, Membership and Blog share a full-screen overlay shell with a sticky breadcrumb header
- **Light-responsive** — tablet (≤1024px) and phone (≤640px) layouts auto-apply via CSS breakpoints; desktop rendering is unchanged
- **Performance-minded** — `AutoVideo` plays videos only when on-screen (IntersectionObserver), `preload="metadata"` by default; the ripple effect skips touch-primary devices

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), CSS custom properties |
| Animation | Framer Motion v12 (`motion/react`), GSAP 3.14 (menu only) |
| Fonts | Instrument Serif (regular + italic) |

## Getting started

```bash
npm install
npm run dev      # local dev  (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/videos/   # hero, section and fleet videos (see Asset naming below)
src/
├── App.tsx               # composition root — all six overlay flags + section order
├── index.css             # design tokens, glass/card classes, responsive utilities
├── data/                 # yachts.ts, testimonials.ts
└── components/
    ├── Header.tsx        # floating pill navbar (5 nav links + JOIN THE CLUB)
    ├── Hero.tsx          # fixed video background + hero copy + sticky CTA
    ├── StaggeredMenu.tsx # GSAP right-side menu + .css for its skin
    ├── FleetOverlay.tsx / FleetVideo.tsx
    ├── RippleTrail.tsx   # mouse ripple effect (pool-based)
    ├── BrandManifesto.tsx, Experiences.tsx, YachtSpecs.tsx, SpecDrawer.tsx
    ├── Testimonials.tsx, Membership.tsx, Academy.tsx
    ├── ConciergeForm.tsx, Faq.tsx, PressStrip.tsx, Footer.tsx
    ├── CookieConsent.tsx, AutoVideo.tsx, PageOverlay.tsx
    └── Blog.tsx, JourneysPage.tsx, MembershipPage.tsx, AboutPage.tsx
```

## Video assets

All clips live in `public/videos/` and are referenced at fixed paths:

| File | Used by |
|---|---|
| `hero-bg.mp4` | Hero (fixed background) |
| `manifesto-bg.mp4` | Brand manifesto section |
| `experiences-bg.mp4` | Experiences section |
| `fleet-ocean-eclipse.mp4` | Ocean Eclipse card + overlay panel |
| `fleet-black-sovereign.mp4` | Black Sovereign card + overlay panel |
| `fleet-azure-horizon.mp4` | Azure Horizon card + overlay panel |
| `academy-bg.mp4` | Academy section |
| `interior-tour.mp4` | Membership sticky panel |

## Responsive behaviour

- **≤1024px** — nav links collapse into the staggered menu; two-column sections stack; membership video unsticks; fleet cards go 2-up
- **≤640px** — single-column everywhere; fleet overlay panels stack full-width; spec drawer goes edge-to-edge; ripple trail disabled (touch)
- **Detection is pure CSS** — no JS breakpoint logic; desktop stays pixel-identical

## Deployment

Deployed on **Vercel** with automatic production deploys on every push to `master`.

```bash
# manual deploy (also works)
npx vercel --prod --yes --name velora
```

## License

Intellectual property of the VELORA brand — private project. All rights reserved.
