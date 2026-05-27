# design-guidelines.md — Frontend Design System

**Style:** Structured Soft Clarity (don't add or emphasise this title anywhere)
**Context:** Interactive skincare & cosmetics wiki for teens (15–18), gender-neutral, education-first with light habit-tracking. Think fandom wiki meets modern reference tool.
**Last updated:** 2026-05-13

---

## 1. Design Philosophy

Glowpedia's visual language is **editorial semi-vibrant glassmorphism** — it feels like a well-designed magazine that lives on your phone. Not a beauty blog, not a clinical health app. The backgrounds breathe with soft but eye-catching lavender-to-mint gradients and ambient orbs, but every section has a hard edge, a clear label, and a purposeful hierarchy. It feels designed, not decorated.

It should feel like flipping through a clean, modern reference book in a softly lit yet active room — structured enough to find what you need instantly, atmospheric enough to want to keep exploring. It does NOT feel like a corporate SaaS dashboard, a beauty influencer's blog, a children's educational app, or a generic card-based React template. It must strike the right balance between colourful and atmospheric. It should not bore teens who are known for having shorter attention spans and a visual inclination. However, it should not be too colourful, DEFINETLY not neon and it should not hurt your eyes or be so bright as to push viewers away. Finding that balance is crucial.

**Core principles:**
- Hierarchy through typographic weight and spacing — never through decoration alone
- Gradients belong to backgrounds and interactive elements; borders and data elements stay flat
- Colour codes information — every accent colour maps to a consistent meaning across the UI
- Structure earns the softness — atmospheric elements (orbs, gradients) are only allowed because hard borders, heavy type, and ruled sections anchor the page
- Progressive disclosure over information overload — show the simple version first, expand on demand
- Gender-neutral by design — approachable without being feminine, structured without being cold

---

## 2. Color Palette

### CSS Variables

```css
:root {
  /* Surfaces */
  --color-bg:            #F6F5FB;   /* Primary background — cool off-white with lavender undertone */
  --color-bg-subtle:     #FFFFFF;   /* Cards, product pages, modals */
  --color-bg-muted:      #EDE8FF;   /* Hover states, card fills, active nav items */
  --color-border:        rgba(100, 125, 200, 0.11);  /* Default card/input borders */
  --color-border-strong: rgba(100, 125, 200, 0.28);  /* Focused states, section separators */

  /* Text */
  --color-text-primary:  #1F2937;   /* Headings, primary body — near-black with warm tint */
  --color-text-secondary:#4B5563;   /* Supporting text, descriptions */
  --color-text-muted:    #6B7280;   /* Captions, placeholders, subtitles */
  --color-text-light:    #9CA3AF;   /* Disabled states, timestamps */
  --color-text-inverse:  #FFFFFF;   /* Text on dark/accent backgrounds */

  /* Primary Accent — Blue */
  --color-accent:        #647DC8;   /* CTAs, links, active states, primary icons */
  --color-accent-dark:   #4A63A8;   /* Pressed/active accent */
  --color-accent-subtle: #EDE8FF;   /* Tinted badges, tag backgrounds, card hover */
  --color-accent-border: rgba(100, 125, 200, 0.3); /* Accent-family border */

  /* Secondary Accents */
  --color-lavender:      #C9B8F5;   /* Secondary accent — pro features, night routine, locked states */
  --color-lavender-light:#EDE8FF;   /* Lavender tinted surfaces */
  --color-mint:          #A8EDD8;   /* Success states, beginner badges, acne/green coding */
  --color-mint-light:    #E0FBF3;   /* Mint tinted surfaces */
  --color-yellow:        #FFEA83;   /* Daily tips, warning states, "must have" badges */
  --color-yellow-light:  #FFF8D6;   /* Yellow tinted surfaces */

  /* Semantic */
  --color-success:       #1A7A5A;   /* Good For tags, beginner fave badges */
  --color-warning:       #9A7400;   /* Tip text, trending badges */
  --color-error:         #C45D3A;   /* Avoid If tags, error states */
  --color-info:          #4A2D9E;   /* Pro features, locked content, lavender-family text */
}
```

### Colour Meaning Map

| Colour | Hex | Used For |
|---|---|---|
| Blue | `#647DC8` | Primary actions, Serum, active nav |
| Lavender | `#C9B8F5` | Pro/premium, Lip Products, night routine |
| Mint | `#A8EDD8` | Success, Toner, beginner content, acne routine |
| Yellow | `#FFEA83` | Tips, must-have badges, Foundation |
| Coral/Red-tint | `#C45D3A` | Avoid If, errors |
| Green | `#1A7A5A` | Good For, positive states |

### Rules
- **Never** use pure `#000000` or `#FFFFFF` as standalone backgrounds — use `--color-text-primary` and `--color-bg-subtle` respectively
- **Never** introduce a colour not in this palette without adding it to the system first — random one-off colours destroy the colour-coding system
- **Always** use the light variant (`-light` suffix) as a surface/fill and the full colour as a border or icon colour — never swap these
- **Never** apply gradients to border colours or text outside of the `--font-display` hero context
- **Always** maintain the accent colour mapping — blue = primary, lavender = pro/premium, mint = success/beginner, yellow = tip/warning. Do not reuse colours for unrelated meanings
- You can edit the brightness and pattern of the colours to make it seem less flat, but as stated before, do NOT make it so bright as to be overwhelming.

---

## 3. Typography

### Typefaces

| Variable | Family | Role |
|---|---|---|
| `--font-display` | Sora | All headings (h1–h3), logo, section labels, card titles, badges |
| `--font-sans` | DM Sans | Body text, descriptions, buttons, labels, UI chrome |
| `--font-mono` | System monospace | Ingredient lists, technical data only |

### Font Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Font Stack Variables

```css
:root {
  --font-display: 'Sora', system-ui, sans-serif;
  --font-sans:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}
```

### Type Scale

```css
:root {
  --text-xs:   0.625rem;   /* 10px — ALL-CAPS section labels, badges, tip labels */
  --text-sm:   0.75rem;    /* 12px — captions, card subtitles, metadata */
  --text-base: 0.8125rem;  /* 13px — body text, descriptions, nav links */
  --text-md:   0.875rem;   /* 14px — button labels, prominent body */
  --text-lg:   1rem;       /* 16px — lead text, hero subtitle */
  --text-xl:   1.125rem;   /* 18px — card headings */
  --text-2xl:  1.375rem;   /* 22px — section titles */
  --text-3xl:  1.75rem;    /* 28px — page headings */
  --text-4xl:  2.25rem;    /* 36px — hero on mobile */
  --text-5xl:  3rem;       /* 48px — hero on desktop */
}
```

### Typography Rules

```css
h1 {
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
}

h2 {
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

h3 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0;
}

body, p, li {
  font-family: var(--font-sans);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

/* Section labels — ALL-CAPS editorial markers */
.section-label {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Badge / tag text */
.badge {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

**Typography rules:**
- **Never** use `font-weight` below 600 in display headings — Sora at 800 is the primary structural tool that prevents the design reading as too soft
- **Never** use `font-weight` above 600 in body text (DM Sans) — the contrast between display and body weight is intentional
- Section labels are **always** ALL-CAPS, `letter-spacing: 0.14em`, Sora 700 — this is the editorial structural marker and must not be skipped
- Hero headings (`h1`) always use `letter-spacing: -0.03em` — tight tracking is part of the confident, modern feel
- **Never** use justified text alignment — left-align all body text, centre-align only hero badges and empty states
- Gradient text (`-webkit-background-clip: text`) is permitted **only** on the hero `<em>` (Glowpedia name) and section label text — nowhere else

---

## 4. Spacing System

```css
:root {
  --space-1:  0.25rem;   /*  4px — icon gaps, tight inline spacing */
  --space-2:  0.5rem;    /*  8px — badge padding, small gaps */
  --space-3:  0.75rem;   /* 12px — card internal gap, list item spacing */
  --space-4:  1rem;      /* 16px — card padding (mobile), section internal */
  --space-5:  1.25rem;   /* 20px — card padding (default) */
  --space-6:  1.5rem;    /* 24px — section horizontal padding, button padding */
  --space-8:  2rem;      /* 32px — section vertical padding (mobile) */
  --space-10: 2.5rem;    /* 40px — hero padding bottom */
  --space-12: 3rem;      /* 48px — hero padding top */
  --space-16: 4rem;      /* 64px — large section separation */
}
```

**Spacing principles:**
- Sections breathe — minimum `--space-8` top and bottom padding per section, never cramped
- Cards are comfortable but not wasteful — `--space-5` internal padding (20px) on default cards, `--space-4` on compact cards (trending, routine steps)
- Inline spacing (icon-to-text gaps) always `--space-2` (8px) — never guess, always use the system

---

## 5. Shape & Borders

```css
:root {
  --radius-sm:   6px;    /* Tags, badges, VS pill, progress bars, input fields */
  --radius-md:   10px;   /* Buttons, nav CTA, tip icon, stat pills */
  --radius-lg:   14px;   /* Cards (default), product cards */
  --radius-xl:   18px;   /* Large feature cards, modals */
  --radius-full: 9999px; /* Avatar only — forbidden on buttons and cards */

  --border-width:        1.5px;  /* Default — heavier than 1px to be visible */
  --border-width-strong: 2px;    /* Section dividers, nav borders, active states */
  --border-width-accent: 4px;    /* Card left accent borders (Start Here cards) */
  --border-color:        var(--color-border);
  --border:              var(--border-width) solid var(--color-border);
}
```

**Shape rules:**
- Default to `--radius-lg` (14px) for content cards — do not mix sharp and fully-rounded cards on the same page
- The VS badge and section labels use `--radius-sm` (6px) — these are data elements, not decorative pills
- **Never** use `--radius-full` on buttons or cards — pill-shaped buttons undermine the structured feel
- Card left accent borders (`border-left: 4px solid`) are exclusive to the Start Here / category cards — do not apply this pattern elsewhere
- Bottom gradient strips (3px) are exclusive to routine tracker cards — do not spread this pattern to other card types

---

## 6. Shadows & Elevation

```css
:root {
  --shadow-sm:    0 2px 8px rgba(100, 125, 200, 0.08);   /* Cards at rest */
  --shadow-md:    0 5px 18px rgba(100, 125, 200, 0.11);  /* Cards on hover */
  --shadow-lg:    0 8px 28px rgba(100, 125, 200, 0.15);  /* Modals, dropdowns */
  --shadow-btn:   0 2px 0 #4A2D9E55, 0 4px 20px rgba(139, 115, 224, 0.3);  /* Primary button resting */
  --shadow-btn-hover: 0 4px 0 #4A2D9E55, 0 8px 28px rgba(139, 115, 224, 0.38); /* Primary button hover */
  --shadow-focus: 0 0 0 3px rgba(100, 125, 200, 0.25);  /* Focus ring */
}
```

**Shadow rules:**
- Shadows are always **blue-tinted** (`rgba(100, 125, 200, ...)`) — never black/grey shadows, which read as cold and corporate
- Cards at rest have **no shadow** — shadow only appears on hover (`--shadow-md`). This keeps the page feeling clean and uncluttered
- The primary button uses a **press shadow** (`--shadow-btn`) — a hard 2px bottom offset plus a soft glow. This creates physical depth without being skeuomorphic
- **Never** use `box-shadow: 0 0 X X rgba(0,0,0,...)` — black shadows are forbidden

---

## 7. Components

### Buttons

```css
.btn-primary {
  background: linear-gradient(135deg, #647DC8, #8B73E0);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius-md);
  padding: 12px 22px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: 700;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: var(--shadow-btn);
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-btn-hover);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 0 #4A2D9E55;
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: 12px 22px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: 600;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: var(--color-accent-subtle);
}

.btn-ghost {
  background: transparent;
  color: var(--color-accent);
  border: none;
  padding: 8px 12px;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  cursor: pointer;
  transition: background 150ms ease;
}

.btn-ghost:hover {
  background: var(--color-accent-subtle);
}
```

### Cards

```css
/* Default content card */
.card {
  background: var(--color-bg-subtle);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Category card — has left accent border */
.card-category {
  border-left-width: var(--border-width-accent);
  position: relative;
  overflow: hidden;
}

/* Trending card — has bottom gradient strip */
.card-trending {
  position: relative;
  overflow: hidden;
}

.card-trending::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2.5px;
  /* gradient set per-card via inline style or modifier class */
}
```

### Inputs

```css
.input {
  background: var(--color-bg-subtle);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--color-text-primary);
  width: 100%;
  transition: border-color 150ms ease, box-shadow 150ms ease;
  outline: none;
}

.input::placeholder {
  color: var(--color-text-light);
}

.input:focus {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-focus);
}
```

### Tags & Badges

```css
/* Section label — editorial ALL-CAPS marker */
.label-section {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: linear-gradient(90deg, var(--color-accent), #8B73E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Product/content badge */
.badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.badge-primary  { background: var(--color-accent-subtle); color: var(--color-accent); }
.badge-success  { background: var(--color-mint-light);    color: var(--color-success); }
.badge-warning  { background: var(--color-yellow-light);  color: var(--color-warning); }
.badge-pro      { background: var(--color-lavender-light);color: var(--color-info); }

/* Good For / Avoid If tags — rectangular, data-style */
.tag {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: var(--radius-sm);
}

.tag-good  { background: #E8F8F0; color: var(--color-success); }
.tag-avoid { background: #FEE8E0; color: var(--color-error); }

/* VS pill — always dark, always rectangular */
.vs-pill {
  background: var(--color-text-primary);
  color: var(--color-text-inverse);
  font-family: var(--font-display);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 2px 6px;
  border-radius: 4px;
}
```

---

## 8. Responsive Design

```css
:root {
  --bp-sm:  480px;   /* Large phones */
  --bp-md:  768px;   /* Tablets */
  --bp-lg:  1024px;  /* Small desktop */
  --bp-xl:  1280px;  /* Full desktop */
}
```

**Touch targets:** All interactive elements minimum **44px tall** on mobile.

**Responsive principles:**
- Mobile-first: the design is primarily a mobile experience with a sticky bottom nav. Desktop gets a top nav with sidebar layout
- On mobile, Start Here cards are 2-column grid; on desktop they become 4-column horizontal row
- Bottom nav is mobile-only — hide at `--bp-md` and above, show top nav links instead
- Section horizontal padding: `var(--space-4)` (16px) on mobile, `var(--space-6)` (24px) on tablet+
- Hero `h1` scales from `--text-4xl` (36px) on mobile to `--text-5xl` (48px) on desktop

---

## 9. Motion & Interaction

```css
:root {
  --transition-fast:   100ms ease;    /* Colour changes, opacity */
  --transition-base:   150ms ease;    /* Hover states — the standard */
  --transition-slow:   200ms ease;    /* Card lift, transforms */
  --transition-reveal: 180ms ease;    /* Hover CTA reveal (opacity + translateY) */
  --transition-progress: 400ms ease;  /* Progress bar fill — slow and satisfying */
}
```

**Motion rules:**
- All hover transforms use `translateY(-2px)` to `translateY(-3px)` maximum — never more. Lift is subtle, not dramatic
- Hover CTAs ("Explore →", "Compare now →") reveal with `opacity: 0 → 1` + `translateY(4px → 0)` at `--transition-reveal` — they appear to slide into place
- Progress bar fills always use `--transition-progress` (400ms) — this is the one slow animation allowed, and it earns it by being the key gamification feedback moment
- **No bounce or spring easing** — all easing is `ease` or `ease-out`. Bouncy easing conflicts with the structured, editorial feel
- **No entrance animations on scroll** — only hero section gets a `fadeUp` entrance. Everything else is static until interacted with
- Checkbox completion triggers a brief `scale(1.15)` pulse on the check icon only — 150ms, then returns to normal

---

## 10. Accessibility

- All text must meet **WCAG AA** contrast (4.5:1 body, 3:1 large text)
- Focus states must always be visible — use `--shadow-focus` as the focus ring, never remove outlines without replacing them
- Use semantic HTML throughout: `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, `<label>`
- Minimum touch target: 44×44px on mobile — bottom nav items must meet this
- All SVG icons need `aria-hidden="true"` when decorative; label with `aria-label` when functional
- Colour is never the **only** indicator of state — always pair colour with text or icon

---

## 11. Forbidden Rules (Strict)

Do **NOT** violate these in any component or screen:

- ❌ **No emoji in UI chrome** — Phosphor Duotone icons only. For the routine checkboxes, use Iconoir ONLY. Emoji are permitted only in user-generated content
- ❌ **No pill-shaped (`border-radius: 9999px`) buttons** — use `--radius-md` (10px). Pill buttons undermine the structured feel
- ❌ **No black or grey box shadows** — all shadows must use the blue-tinted palette (`rgba(100, 125, 200, ...)`)
- ❌ **No font-weight below 600 in headings** — Sora at 600+ only. Light-weight display text is explicitly off-brand
- ❌ **No gradient text outside of the hero `<em>` and section labels** — gradient text overused becomes a decoration, not a signal
- ❌ **No top gradient bars on cards** — the accent lives in the left border (category cards) or bottom strip (routine cards). Top bars are the Base44 pattern we replaced
- ❌ **No floating cards without visible borders** — cards must always have `var(--border)` applied. Borderless floating cards are what made the Base44 draft feel directionless
- ❌ **No random colour introductions** — every colour used must exist in Section 2. One-off hex values are forbidden
- ❌ **No fully-rounded card corners (`border-radius > 20px`)** — maximum is `--radius-xl` (18px) for modals only
- ❌ **No bounce/spring easing** — `ease`, `ease-out`, and `ease-in-out` only
- ❌ **No scroll-triggered entrance animations on content sections** — hero only
- ❌ **No justified text alignment** — left-align all body text without exception

---

## 12. Quick Reference

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F6F5FB` | Page background |
| `--color-bg-subtle` | `#FFFFFF` | Cards, modals |
| `--color-accent` | `#647DC8` | CTAs, links, primary icons |
| `--color-lavender` | `#C9B8F5` | Pro features, secondary accent |
| `--color-mint` | `#A8EDD8` | Success, beginner, Toner |
| `--color-yellow` | `#FFEA83` | Tips, warnings, Foundation |
| `--color-text-primary` | `#1F2937` | Headings, primary body |
| `--color-text-muted` | `#6B7280` | Descriptions, subtitles |
| `--font-display` | Sora | All headings, badges, labels |
| `--font-sans` | DM Sans | Body, buttons, UI chrome |
| `--radius-sm` | `6px` | Tags, badges, VS pill |
| `--radius-md` | `10px` | Buttons, nav CTA |
| `--radius-lg` | `14px` | Default cards |
| `--border-width` | `1.5px` | Default borders |
| `--border-width-accent` | `4px` | Card left accent borders |
| `--shadow-sm` | blue-tinted 8px | Cards at rest (none visible) |
| `--shadow-md` | blue-tinted 18px | Cards on hover |
| `--shadow-btn` | press + glow | Primary button resting |
| `--transition-base` | `150ms ease` | All hover states |
| `--transition-progress` | `400ms ease` | Progress bar fill |
