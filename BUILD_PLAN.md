# Glowpedia Build Plan - What I'll Create

Based on the comprehensive documentation (tasklist.md, masterplan.md, design-guidelines.md, user-journeys.md, and the reference UI), here's what I'll build:

## 🎨 Design System Foundation

### Visual Identity: "Structured Soft Clarity"
- **Heavy Typography**: Sora 800 weight for all headings (the key differentiator)
- **Hard Structural Elements**: 
  - 4px left border accents on category cards (blue/mint/yellow/lavender)
  - 2px borders throughout (not 1px - must be visible)
  - ALL-CAPS section labels with full-width horizontal rules
  - Rectangular tags and badges (no pills except avatar)
- **Soft Atmospheric Layer**:
  - Large, low-opacity orbs (0.08-0.22 opacity)
  - Gradient backgrounds (lavender-to-mint)
  - Blue-tinted shadows (never black/grey)
  - Glassmorphism on nav bars

### Color Palette
```css
--color-bg: #F6F5FB (cool off-white with lavender undertone)
--color-accent: #647DC8 (primary blue)
--color-lavender: #C9B8F5 (Pro features, premium)
--color-mint: #A8EDD8 (success, beginner content)
--color-yellow: #FFEA83 (tips, warnings)
```

### Typography
- **Display**: Sora (800 weight for h1/h2, 700 for h3, 600 minimum)
- **Body**: DM Sans (400 regular, 600 for emphasis)
- **Mono**: System monospace (ingredient lists only)

---

## 📱 Phase 1: Foundation (Week 1)

### 1.1 Project Setup ✓ (In Progress)
- React + TypeScript
- React Router for navigation
- Design tokens as CSS variables
- Google Fonts: Sora + DM Sans

### 1.2 Authentication System
**Screens to build:**
- Sign-up form (email, password, confirm password)
- Log-in form (email, password)
- Email verification holding screen
- Session persistence

**User roles:**
- Free (default)
- Pro (manually assigned for MVP)

**Data stored:**
- email, role, skin_type, saved_routine, favourites

### 1.3 Navigation Shell
**Desktop (sticky top nav):**
- Logo: "Glowpedia" (Glow in blue, pedia in dark)
- Nav links: Home, Skincare, Cosmetics, Quizzes, Routines
- "Go Pro" CTA button (gradient, crown icon)

**Mobile (sticky bottom nav):**
- 5 items: Home, Skincare, Cosmetics, Quizzes, Routines
- Active indicator: 2px top border (not a dot)
- Icons: Lucide React (mandatory, no emoji in UI chrome)

**All routes created:**
- Homepage
- Product wiki pages
- Compare pages
- Quizzes hub + flow + results
- Starter routines
- Routine builder + tracker + history
- Glow AI panel
- Account dashboard
- Auth screens
- Pro upgrade modal

### 1.4 Data Model & Seed Data
**8 Launch Products:**
1. Cleanser
2. Toner
3. Serum
4. Moisturiser
5. Sunscreen
6. Foundation
7. Lip Gloss
8. Lip Balm

**3 Compare Flows:**
1. Serum vs Toner
2. Lip Gloss vs Lip Balm
3. Liquid vs Powder Foundation

**Product schema:**
```typescript
interface Product {
  id: string;
  name: string;
  category: 'skincare' | 'cosmetics';
  subcategory: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  goodFor: string[];
  avoidIf: string[];
  howToUse: string;
  subtypes?: string[];
  topPicks: {
    brand: string;
    name: string;
    priceRange: string;
    bestFor: string;
    buyUrl: string;
  }[];
}
```

---

## 🌟 Phase 2: Core Free Experience (Week 2)

### 2.1 Product Wiki Pages
**Template structure:**
1. Hero/banner with gradient background + orb
2. Product name + category label
3. Short beginner explanation (2-3 sentences, always visible)
4. Good For / Avoid If (two-column layout, rectangular tags)
5. "See Detailed Breakdown" expandable accordion (collapsed by default)
6. Ingredient details + deeper content (inside accordion)
7. Top 3 Picks list with Buy buttons (open in new tab)
8. Quick Facts panel
9. Pro Tips panel

**Design details:**
- Left accent border: blue (skincare) or lavender (cosmetics)
- Card background: white with 1.5px border
- Hover: translateY(-3px) + shadow
- No gating - fully readable to guests

### 2.2 Homepage
**Hero section:**
- Title: "Welcome to Glowpedia"
- Subtitle with value prop
- **Primary CTA: Product search bar** (not "Start Exploring" button)
  - Placeholder: "What do you want to learn about?"
  - Opens categorized dropdown on tap (no typing required)
  - Categories: SKINCARE, COSMETICS, COMPARE
  - Real-time filtering while typing
  - Color-coded icons per row
- Secondary CTA: "Take a Quiz" button
- Stat pills below (Products covered, Quizzes, Beginner-friendly)

**Daily Tip Bar:**
- Full-width, yellow background
- Lightbulb icon in square container
- Rotating tip text
- No gradient on this element

**Start Here Section:**
- 4 cards: Toner, Serum, Foundation, Lip Products
- 2-column grid on mobile, 4-column on desktop
- Left accent borders (4px, color-coded)
- Hover reveals "Explore →" CTA

**Compare & Learn:**
- 3 comparison rows
- Dark rectangular VS pill
- Hover reveals "Compare now →"
- Horizontal slide animation on hover

**Trending Now:**
- Horizontal scrollable strip
- Category badges (Popular, Beginner Fave, Must Have, Trending)
- Bottom color gradient strips (2.5px)
- Tap opens modal with brief explainer + top 3 picks

### 2.3 Compare Pages
**Layout:**
- Side-by-side headers
- Two descriptions
- Structured comparison table
- Final verdict section

**3 complete pages:**
1. Serum vs Toner
2. Lip Gloss vs Lip Balm
3. Liquid vs Powder Foundation

### 2.4 Free Quizzes
**Quiz component (reusable):**
- One question per screen
- Clear answer options
- Progress indicator
- Next/back navigation

**2 Free quizzes:**
1. **Skin Type Detector**
   - Outputs: Oily, Dry, Combination, Sensitive
2. **Beginner Routine Quiz**
   - Outputs: Recommended starter routine

**Result screen:**
- Skin type or routine label
- Plain-English explanation
- 2-3 product suggestion mini-cards (Trending-style pop-up)
- Soft sign-up prompt below (non-blocking)

### 2.5 Starter Routines
**3 static routines:**
1. Morning (Cleanser, Toner, Moisturiser, Sunscreen)
2. Night (Makeup Remover, Cleanser, Serum, Moisturiser)
3. Acne (Gentle Cleanser, Salicylic Toner, Spot Treatment, Oil-Free Moisturiser)

**For guests:**
- Checklist circles visible but non-interactive
- Shows what Pro feature looks like (aspiration, not deception)
- Single upgrade prompt below (non-intrusive)

---

## 💎 Phase 3: Pro Experience (Week 3)

### 3.1 Pro Gate & Upgrade Modal
**Modal triggered by:**
- Tapping locked Pro quiz
- Tapping "Track my routine"
- Tapping Glow AI button (free users)

**Modal content:**
- Crown icon
- Headline: "Unlock personalised beauty insights"
- Pro benefits list
- "Upgrade to Pro" CTA (gradient button)
- "Maybe later" dismiss link

**Rules:**
- Shows once per locked feature per session
- Never reappears after dismissal in same session
- Returns user to exact location

**Account Dashboard:**
- Skin type with "Retake quiz" link
- Current streak or placeholder
- Saved favourites preview (up to 3)
- Upgrade CTA for free users

### 3.2 Pro Quizzes
**3 Pro quizzes:**
1. **Beauty Style Quiz**
   - Outputs: Beauty personality profile + matched products
2. **Routine Optimiser**
   - Outputs: Personalized routine recommendation
   - "Add to my routine" button pre-populates Routine Builder
3. **Ingredient Match Quiz**
   - Outputs: Ingredients suited to user's skin type
   - Each links to wiki page

**Locked state:**
- Padlock icon
- "Unlock with Pro" label
- Visible on quiz hub for free users

### 3.3 Routine Tracker
**Routine Builder:**
- Editable routine name field
- Ordered step list with drag handles
- "Add step" button
- Common steps library
- Maximum 10 steps (enforced with inline message)

**Daily Tracker:**
- Interactive checkboxes (Iconoir icons only)
- Real-time progress bar (400ms ease, flat rectangle)
- Dynamic counter: "0/5 steps completed"
- Checkbox scale-pulse animation (150ms)

**Streak logic:**
- Increments on full daily completion
- Resets on missed day
- Cannot increment twice in one calendar day

**Completion Summary Screen:**
- Celebratory headline (rotating set of 5+ phrases)
- Streak counter with flame icon: "🔥 6-day streak"
- Single product recommendation card
- "Back to Home" button (primary CTA)
- "View my history" link (secondary)

**Routine History:**
- Calendar/list view
- Each day: ✔ (completed) or ✗ (missed)

**Empty state:**
- Shows 3 Starter Routine cards
- "Use as template" shortcut

### 3.4 Glow AI (Anthropic Claude)
**Integration:**
- API: `claude-sonnet-4-20250514`
- Max tokens: 1000

**Floating button:**
- Persistent on every page
- Bottom-right placement
- Above bottom nav on mobile

**Chat panel overlay:**
- Slides up without navigating away
- First open: greeting + 3 quick-start chips
- Chips: "Explain an ingredient", "Review my routine", "Is this product worth it?"

**6 Capabilities:**

1. **Conversational Q&A**
   - Natural language skincare questions
   - 2-4 sentence plain-English responses
   - Inline wiki page links as preview cards

2. **Ingredient Scanner**
   - User pastes ingredient list
   - Plain-English breakdown
   - Flags irritants for their skin type
   - Rating: Good / Mixed / Be Cautious
   - Comparable Glowpedia product suggestion

3. **Routine Reviewer**
   - Pulls saved routine
   - Identifies conflicts (e.g., Vitamin C + AHA)
   - Flags gaps (e.g., no sunscreen in morning)
   - Suggests additions with wiki links

4. **"Is This Worth It?" Product Checker**
   - User names/describes product
   - Which skin types it suits
   - Key ingredients (2-3 bullets)
   - Verdict: Recommended / Situational / Skip
   - Comparable Glowpedia product link

5. **Routine Builder via Chat**
   - User asks for routine
   - Generates step-by-step in chat
   - "Add to my routine" button pre-populates builder

6. **Personalised Daily Tips (homepage)**
   - Pro users see personalized tip based on skin type + routine
   - Replaces static tip banner
   - Falls back to static if no skin type saved

**System prompt rules:**
- Plain English, never clinical
- Reference Glowpedia wiki pages first
- Personalize using saved skin type
- Never link to external sites (only wiki pages)
- Tone: warm, encouraging, never condescending

**For free users:**
- Tapping button shows locked preview
- Brief description + "Upgrade to Pro" CTA
- Never empty or broken interface

### 3.5 Save & Favourite Products
**Bookmark icon:**
- On every product wiki page
- On every Trending card
- Tap to save/unsave

**Saved Favourites screen:**
- Accessible from dashboard
- Grid of saved products
- Empty state: 2-3 Trending suggestions

---

## ✨ Phase 4: Polish & Ship (Week 4)

### 4.1 Design System Audit
**Apply across all pages:**
- Sora 800 on h1/h2, DM Sans on body
- Token-based spacing, colors, shadows
- Button shapes: `--radius-md` (10px), never pills
- Palette usage: blue primary, lavender premium, mint success, yellow tips
- Responsive: mobile bottom nav, desktop top nav

**Gradient audit:**
- Hero background ✓
- Primary button ✓
- Nav CTA ✓
- Section label text ✓
- Routine card bottom strips ✓
- Nowhere else ✗

**Icon audit:**
- All UI chrome: Lucide React icons (mandatory)
- Routine checkboxes: Iconoir only
- Emoji: Only in reward/celebration copy, never UI chrome

### 4.2 Forbidden Rules Check
❌ **Must NOT violate:**
- No emoji in UI chrome
- No pill-shaped buttons (use `--radius-md` 10px)
- No black/grey shadows (blue-tinted only)
- No font-weight below 600 in headings
- No gradient text outside hero `<em>` and section labels
- No top gradient bars on cards
- No floating cards without visible borders
- No random colors (only palette colors)
- No fully-rounded corners over 20px (max `--radius-xl` 18px for modals)
- No bounce/spring easing (ease, ease-out, ease-in-out only)
- No scroll-triggered animations outside hero
- No justified text alignment

### 4.3 Accessibility Pass
- WCAG AA contrast (4.5:1 body, 3:1 large text)
- Visible focus states (`--shadow-focus`)
- Semantic HTML throughout
- Minimum 44px touch targets on mobile
- SVG icons: `aria-hidden="true"` when decorative
- Color never the only state indicator

### 4.4 Journey Testing
**Test all MVP journeys:**
- F1: Search to wiki page
- F2: Discover via homepage
- F3: Complete free quiz
- F4: View starter routines
- F5: Sign up flow
- F6: Locked feature upgrade modal
- P1: Complete daily routine
- P2: Routine builder and tracker
- P3: Pro quizzes
- P4: Glow AI usage

### 4.5 Copy Pass
- Replace all placeholder copy
- Verify tone: warm, clear, gender-neutral, not clinical
- Beginner-friendly throughout
- No jargon without explanation

---

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: CSS Modules + CSS Variables
- **Icons**: Phosphor Duotone (UI chrome), Iconoir (routine checkboxes only)
- **Fonts**: Google Fonts (Sora, DM Sans)

### Backend
- **Auth & Database**: Supabase
- **Tables**: users, products, comparisons, quizzes, routines, routine_completions, saved_products
- **Auth**: Email/password only (no OAuth for MVP)
- **Session**: Persistent via Supabase client

### AI
- **Provider**: Anthropic
- **Model**: claude-sonnet-4-20250514
- **Max tokens**: 1000
- **Use case**: Glow AI chatbot (Pro only)

### Deployment
- **Platform**: Vercel or Netlify
- **Environment**: Production + Preview

---

## 📊 Success Criteria

### Phase 1 Complete When:
- ✓ All routes exist and are navigable
- ✓ Design tokens applied globally
- ✓ Auth flow works (sign up, log in, verify, persist)
- ✓ 8 products + 3 comparisons seeded

### Phase 2 Complete When:
- ✓ Homepage fully interactive (search, trending, compare)
- ✓ All 8 product wiki pages render correctly
- ✓ 2 free quizzes run end-to-end
- ✓ Starter routines visible to all users

### Phase 3 Complete When:
- ✓ Pro upgrade modal triggers correctly
- ✓ Routine tracker works (build, track, streak, completion)
- ✓ 3 Pro quizzes run end-to-end
- ✓ Glow AI responds to all 6 capability types
- ✓ Save/unsave products works

### Phase 4 Complete When:
- ✓ Design system applied consistently
- ✓ All forbidden rules checked
- ✓ All MVP journeys tested
- ✓ Accessibility audit passed
- ✓ No placeholder copy remains

---

## 🎯 Core Value Loop

**The shortest path from new user to core value:**

1. User lands on homepage
2. User searches for "serum" (or browses dropdown)
3. User reads Serum wiki page - understands what it is
4. User sees "Take a Quiz" CTA
5. User completes Skin Type Quiz
6. User receives skin type result + product suggestions
7. User is softly prompted to save results (signs up)
8. User returns next day, checks Routines page
9. User sees Pro features, upgrades
10. User builds routine, tracks daily, builds streak

**If this loop works smoothly, Glowpedia succeeds.**

---

## 🎨 Design Philosophy Summary

**"Structured Soft Clarity"**

The design balances two opposing forces:

**Structure (masculine, editorial, confident):**
- 800-weight typography
- Hard left border accents
- ALL-CAPS section labels with full-width rules
- Rectangular tags and badges
- 2px borders throughout
- Flat progress bars
- Dark VS pill

**Softness (approachable, atmospheric, modern):**
- Large low-opacity orbs
- Gradient backgrounds
- Blue-tinted shadows
- Glassmorphism on nav
- Smooth hover animations
- Warm, friendly copy

**The structure earns the softness.** Without the heavy type and hard borders, the gradients and orbs would read as too feminine or directionless. Without the soft atmosphere, the structure would feel cold and corporate.

This balance makes Glowpedia feel:
- Gender-neutral
- Confident but approachable
- Modern but not trendy
- Structured but not rigid
- Educational but not clinical

---

## 📝 Notes

- **No payment integration in MVP** - Pro role assigned manually via database flag
- **No social features** - no sharing, profiles, comments, or ratings
- **No admin CMS** - content managed via seed files and direct database edits
- **No multiple routines** - one active routine per user for MVP
- **No third-party login** - email/password only
- **Text input only for Glow AI** - no voice input

---

**This is what I'll build. Let's start! 🚀**
