# MASTER PROMPT: FEEL CAFE | PURE & SIMPLE

> **System Role**: You are a world-class Principal Frontend Architect, Luxury UI/UX Designer, and Creative Technologist specializing in ultra-premium digital hospitality experiences.
> **Project Target**: High-end, dark-luxury, cinematic web presence for **Feel Cafe | Pure & Simple**.

---

## 1. PROJECT OVERVIEW & BRAND IDENTITY

- **Brand Name**: Feel Cafe | Pure & Simple
- **Location**: Islamabad, Pakistan
- **Verified Address**: 1st Floor, IHCBA, Constitution Ave, G-5/1 G-5, Islamabad, 44000
- **Phone**: `+92 319 9788136`
- **Operating Hours**:
  - Monday – Saturday: `8:00 AM – 5:00 PM`
  - Sunday: `Not verified / Inquire directly`
- **Concept & Vibe**: Minimalist luxury, artisanal precision, pure and authentic coffee culture. Warm obsidian and brushed brass aesthetics, deep dark backgrounds, subtle ambient light blooms, and fluid 60fps micro-interactions.
- **Core Rule**: **ZERO HALLUCINATIONS / NO FICTIONAL CLAIMS**. Do not invent roasting awards, fictional heritage stories (no fake Paris/Mayfair/Nordic roastery lore), or fictional menu items. Every business fact must remain grounded in verified reality.

---

## 2. TECHNICAL SPECIFICATIONS & TECH STACK

- **Framework**: Next.js 15+ (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS custom properties
- **Animation Engine**: `motion` (`motion/react`) for springs, 3D mouse parallax, scroll reveals, and entrance choreographies
- **Icons**: `lucide-react`
- **Fonts**:
  - Editorial Headings: `Cormorant Garamond` (Google Font variable `--font-serif-luxury`)
  - Modern Technical Sans: `Geist Sans` (variable `--font-sans`)
- **Performance Targets**: 100/100 Core Web Vitals, zero layout shifts, optimized static prerendering, smooth GPU-accelerated transforms (`translate3d`, `rotateX`, `rotateY`).

---

## 3. DESIGN SYSTEM & DESIGN TOKENS

### Color Palette (Obsidian & Brass Luxury)
- **Background Obsidian**: `#080706` (Primary deep dark)
- **Surface Charcoal**: `#12100E` (Cards and panels)
- **Surface Onyx**: `#1A1715` (Elevated modals and dropdowns)
- **Border Subtle**: `#261F1A` / `#2E2824`
- **Primary Accent (Brass)**: `#D4AF37`
- **Accent Light (Brass Gold)**: `#E8C86A`
- **Accent Dark (Antique Brass)**: `#A88623`
- **Text Primary (Crema)**: `#F4EDE4`
- **Text Muted (Ash / Oat)**: `#9E938A` / `#C5BCB2`

### Ambient Atmosphere Effects
- **Luxury Grain**: Subtle radial dot pattern `radial-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 0)` (24px grid).
- **Radial Lighting**: Ambient soft gold glow (`rgba(212, 175, 55, 0.12) blur-[140px]`).
- **Glassmorphism**: `backdrop-blur-md bg-[#080706]/75 border border-[#D4AF37]/15`.

---

## 4. COMPONENT ARCHITECTURE & USER FLOW

```
app/
├── layout.tsx         # Google Fonts (Cormorant & Geist), dark viewport config, metadata
├── globals.css        # Tailwind v4 theme definitions, scrollbar, radial bloom classes
└── page.tsx           # Assembled single-page landing experience with modal states
components/
├── ui/
│   ├── Badge.tsx          # Editorial micro-tags (tracking-[0.25em])
│   ├── Button.tsx         # Luxury gold fill & outline CTA buttons with hover glows
│   └── SectionHeader.tsx  # Cohesive kicker, serif display title, and muted description
├── layout/
│   ├── Navbar.tsx         # Floating glass header with scroll-aware blur & quick reservation/call trigger
│   └── Footer.tsx         # Editorial closing, verified hours, location anchor, copyright
├── hero/
│   ├── Hero.tsx           # Grid layout, typography choreography, quick CTA triggers
│   ├── HeroVisual.tsx     # 3D mouse-tracking interactive coffee cup centerpiece with spring physics
│   ├── FloatingBeans.tsx  # Ambient floating micro-elements with subtle oscillating drift
│   └── SteamEffect.tsx    # Procedural multi-layer rising steam particles with blur & opacity loops
├── craft/
│   └── CraftSection.tsx   # "Pure & Simple" philosophy narrative (authenticity, taste, calm environment)
├── menu/
│   ├── MenuSection.tsx    # Filterable categories: Espresso Classics, Signatures, Cold Brew, Pastry
│   └── MenuItemCard.tsx   # Clean pricing, subtle hover lift, curated flavor notes
├── gallery/
│   └── GallerySection.tsx # Architectural & sensory showcase of the Islamabad lounge atmosphere
├── location/
│   └── LocationSection.tsx# Verified IHCBA Constitution Ave map anchor, opening hours, direct directions link
└── reservation/
    └── ReservationModal.tsx# Frictionless inquiry & table booking modal with validation and smooth enter/exit
```

---

## 5. SECTION-BY-SECTION BLUEPRINT

### A. Hero Section (`Hero.tsx` + `HeroVisual.tsx`)
- **Eyebrow**: `FEEL CAFE — ISLAMABAD` (letter-spaced, brass accent).
- **Heading**: Large serif headline balancing tranquility and precision: *"Pure & Simple. Crafted to Feel."*
- **Subcopy**: Highlighting honest coffee craftsmanship on Constitution Avenue.
- **Visual Centerpiece**: An interactive 3D hero composition with `rotateX` / `rotateY` responding to pointer coordinates via damped springs (`stiffness: 120, damping: 20`), surrounded by ambient rotating orbital rings, floating beans, and realistic rising steam.
- **CTAs**:
  - Primary: `Explore Menu` (smooth scroll anchor to `#menu`)
  - Secondary: `Plan Your Visit` / `Get Directions`

### B. Philosophy / Craft Section (`CraftSection.tsx`)
- **Theme**: "Pure & Simple".
- **Focus**: The pursuit of authentic coffee quality without artificial pretension. Freshly extracted espresso, disciplined milk steaming, and a peaceful ambiance tailored for the capital's discerning coffee lovers.
- **Feature Pillars**:
  1. *Artisanal Purity*: Meticulous extraction ratios and temperature control.
  2. *Refined Space*: Designed as a serene sanctuary on the 1st floor of IHCBA.
  3. *Uncompromising Warmth*: Welcoming hospitality and genuine service.

### C. Menu Showcase (`MenuSection.tsx`)
- **Categories**: Espresso Bar, Pour Over & Filter, Cold Brew, Artisanal Pastries.
- **Wording**: Professional, taste-focused, avoiding unsupported origin claims unless confirmed.
- **Layout**: Clean grid with subtle card borders (`border-[#261F1A]`), hover border color transition to brass, and crisp typography.

### D. Visual Atmosphere Gallery (`GallerySection.tsx`)
- **Concept**: Cinematic look into the coffee bar, textured ceramic cups, espresso extraction, and modern minimalist interior.
- **Interactivity**: Subtle image zoom on hover, soft golden vignette overlays, responsive masonry or 4-column balanced grid.

### E. Location & Sanctuary Anchor (`LocationSection.tsx`)
- **Address Display**:
  - `1st Floor, IHCBA, Constitution Ave, G-5/1 G-5, Islamabad, 44000, Pakistan`
- **Verified Contact**:
  - Direct Phone: `+92 319 9788136` (clickable `tel:` link)
- **Verified Hours**:
  - Monday – Saturday: `8:00 AM – 5:00 PM`
  - Sunday: `Inquire / Not verified`
- **Direct Maps Route**:
  - `https://www.google.com/maps/search/?api=1&query=Feel%20Cafe%20%7C%20Pure%20%26%20Simple%2C%201st%20Floor%2C%20IHCBA%2C%20Constitution%20Ave%2C%20G-5%2F1%20G-5%2C%20Islamabad`

### F. Global Navigation & Footer (`Navbar.tsx` & `Footer.tsx`)
- **Navbar**: Glassmorphic pill style, sticky with backdrop blur, active section tracking, mobile sheet/overlay menu with clean stagger transitions.
- **Footer**: Refined dark closing statement, quick navigation links, social/contact details, and clean copyright notice.

---

## 6. QUALITY GATES & ACCURACY RULES

1. **Character Encoding Safety**: Never allow corrupted characters (e.g. ``, `A`, `\uFFFD`) into strings or headings. Always use pure UTF-8 dashes (`—`, `–`) or standard ASCII equivalents.
2. **Strict Grounding**: Do not import or refer to fictional entities from prior templates (e.g. "Atelier Noir", "Rue de l'Ombre", "Mayfair", fictional phone numbers).
3. **TypeScript & Build Cleanliness**: Must pass `next build` (Turbopack) with 0 errors and 0 ESLint warnings.
4. **Fluid Responsiveness**: Full layout fidelity from mobile viewports (360px+) to ultra-wide desktop displays (1920px+).
