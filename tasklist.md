# Glowpedia Project Task List

This task list breaks down every project requirement from `masterplan.md`, `design-guidelines.md`, `user-journeys.md`, and `implementation plan.md` into actionable steps. It is organised by phase and by feature stream. Please follow it step-by-step, without skipping anything. Not skipping anything is crucial.

## Phase 1 — Foundation

### 1. Project Setup and Design Tokens
- [ ] Initialise the frontend repository with React.
- [ ] Install and configure React Router for client-side navigation.
- [ ] Add global design tokens as CSS variables from `design-guidelines.md`:
  - [ ] colour palette
  - [ ] typography variables and font families
  - [ ] spacing scale
  - [ ] border widths and radii
  - [ ] shadow values
  - [ ] motion timing variables
- [ ] Load Google Fonts for Sora and DM Sans.
- [ ] Add global base styles:
  - [ ] `--color-bg` as body background
  - [ ] `body` font defaults and line-height
  - [ ] focus rings and accessible input styles
- [ ] Add an explicit design token checklist from `design-guidelines.md`:
  - [ ] palette values and meaning for primary blue, lavender, mint, yellow, success, warning, error, and info
  - [ ] typography settings including font weights, hero heading letter-spacing, and display/body separation
  - [ ] spacing tokens, breakpoints, radius values, border widths, and shadows
  - [ ] motion token rules, hover lift timing, progress bar easing, and no bounce/spring easing
  - [ ] component rules for buttons, icons, cards, gradients, and text alignment
  - [ ] icon rules: use Lucide for UI chrome and allow emoji only in reward/celebration copy, not interface chrome
  - [ ] forbidden design constraints: no pill-shaped buttons, no top gradient bars on cards, no floating cards without visible borders, no random one-off colours, no fully-rounded card corners over 20px, and no justified body text
- [ ] Confirm deployment target connectivity (Vercel or Netlify).
- [ ] Choose Supabase as the backend service for auth and data storage.
- [ ] Document Anthropic API access requirements and ensure the API key is available for Phase 3.

### 2. Authentication System
- [ ] Build a sign-up screen with:
  - [ ] email input
  - [ ] password input
  - [ ] confirm password input
  - [ ] submit button
  - [ ] link to log in
- [ ] Build a log-in screen with:
  - [ ] email input
  - [ ] password input
  - [ ] submit button
  - [ ] link to sign-up
- [ ] Build an email verification holding screen.
- [ ] Implement session persistence so users stay logged in on refresh.
- [ ] Implement user roles: Free and Pro.
- [ ] Create or define user data storage for:
  - [ ] email
  - [ ] role (`free` / `pro`)
  - [ ] skin type
  - [ ] saved routine
  - [ ] any saved favourites
- [ ] Ensure Pro status can be assigned manually for development testing.

### 3. Navigation Shell and Layout
- [ ] Create routes and placeholder screens for all product pages:
  - [ ] Homepage
  - [ ] Product wiki page
  - [ ] Compare page
  - [ ] Quizzes hub
  - [ ] Quiz flow
  - [ ] Quiz result
  - [ ] Starter routines page
  - [ ] Routine builder
  - [ ] Daily tracker
  - [ ] Routine history
  - [ ] Glow AI panel
  - [ ] Account dashboard
  - [ ] Sign up
  - [ ] Log in
  - [ ] Email verification
  - [ ] Pro upgrade / locked feature flow
- [ ] Build sticky desktop top navigation with:
  - [ ] logo
  - [ ] nav links
  - [ ] Go Pro CTA button
- [ ] Build persistent mobile bottom navigation with 5 items:
  - [ ] Home
  - [ ] Skincare
  - [ ] Cosmetics
  - [ ] Quizzes
  - [ ] Routines
- [ ] Implement the active item indicator as a 2px top border on mobile nav.
- [ ] Apply a responsive layout system:
  - [ ] mobile-first spacing
  - [ ] section padding using design token values
  - [ ] bottom nav hidden on desktop
  - [ ] top nav hidden on mobile if necessary

### 4. Core Data Model and Seed Data
- [ ] Define the data schema for:
  - [ ] products
  - [ ] comparisons
  - [ ] quizzes
  - [ ] users
  - [ ] routines
  - [ ] routine completions
- [ ] Required product fields:
  - [ ] id
  - [ ] name
  - [ ] category
  - [ ] subcategory
  - [ ] slug
  - [ ] short description
  - [ ] full description
  - [ ] ingredients
  - [ ] good_for
  - [ ] avoid_if
  - [ ] how_to_use
  - [ ] subtypes
  - [ ] top picks
- [ ] Required comparison page fields:
  - [ ] product_a
  - [ ] product_b
  - [ ] description_a
  - [ ] description_b
  - [ ] comparison_table rows
  - [ ] final verdict
- [ ] Required quiz fields:
  - [ ] title
  - [ ] type (`free` / `pro`)
  - [ ] questions
  - [ ] options
  - [ ] result logic
- [ ] Required user/routine fields:
  - [ ] user id
  - [ ] routine name
  - [ ] ordered steps
  - [ ] completion history
- [ ] Create seed data for 8 launch products:
  - [ ] Cleanser
  - [ ] Toner
  - [ ] Serum
  - [ ] Moisturiser
  - [ ] Sunscreen
  - [ ] Foundation
  - [ ] Lip Gloss
  - [ ] Lip Balm
- [ ] Create seed data for 3 compare flows:
  - [ ] Serum vs Toner
  - [ ] Lip Gloss vs Lip Balm
  - [ ] Liquid vs Powder Foundation
- [ ] Ensure all seed data copy is:
  - [ ] beginner-friendly
  - [ ] plain English
  - [ ] warm and accessible
  - [ ] consistent with the design tone

## Phase 2 — Core Free Experience

### 5. Product Wiki Pages
- [ ] Build a reusable product wiki page template.
- [ ] Add the following sections in order:
  - [ ] hero/banner
  - [ ] product name and category label
  - [ ] short beginner explanation
  - [ ] Good For / Avoid If tag panels
  - [ ] expandable "See Detailed Breakdown" accordion
  - [ ] ingredient details and deeper content inside the accordion
  - [ ] Top 3 Picks list with Buy buttons
  - [ ] Quick Facts panel
  - [ ] Pro Tips panel
- [ ] Apply colour-coded left accent borders:
  - [ ] blue for skincare
  - [ ] lavender for cosmetics
- [ ] Ensure all 8 launch products use the template and render fully.
- [ ] Confirm expandable accordion state and behaviour.
- [ ] Ensure wiki pages are fully readable to guests without gating.

### 6. Homepage and Search
- [ ] Build the homepage hero with:
  - [ ] title
  - [ ] subtitle
  - [ ] prominent search-style input bar with placeholder text like "What do you want to learn about?"
  - [ ] secondary "Take a Quiz" button below or beside the search bar
- [ ] Implement the search dropdown behaviour:
  - [ ] opens on tap/click without typing
  - [ ] displays categories: SKINCARE, COSMETICS, COMPARE
  - [ ] uses ALL-CAPS section label style for category headers
  - [ ] includes small colour-coded icons per row (blue/skincare, lavender/cosmetics, mint/compare)
  - [ ] filters in real time while typing
  - [ ] navigates to product/wiki/comparison pages on selection
- [ ] Build homepage sections beneath the hero:
  - [ ] Start Here cards with left accent borders and hover reveals; 4 cards for Toner, Serum, Foundation, Lip Products
  - [ ] Compare & Learn section with 3 entries, VS pill styling, and reveal-on-hover CTA text
  - [ ] Trending Now horizontal strip with cards, category badges, and modal preview
  - [ ] Daily Tip bar with yellow background, no gradient, and rotating tip text
- [ ] Build the Trending card modal/pop-up with:
  - [ ] product name
  - [ ] category badge
  - [ ] short explainer
  - [ ] top 3 picks
  - [ ] "Learn more →" link
- [ ] Build the empty search state message and suggestions.

### 7. Compare & Learn Pages
- [ ] Build the compare page template.
- [ ] Add three complete comparison pages:
  - [ ] Serum vs Toner
  - [ ] Lip Gloss vs Lip Balm
  - [ ] Liquid vs Powder Foundation
- [ ] Each compare page must include:
  - [ ] side-by-side headers
  - [ ] two descriptions
  - [ ] structured comparison table
  - [ ] final verdict section
- [ ] Link compare pages from homepage and search dropdown.

### 8. Free Quizzes and Result Screen
- [ ] Build a reusable quiz flow component with:
  - [ ] one question screen at a time
  - [ ] clear answer options
  - [ ] progress indicator
  - [ ] next/back navigation if needed
- [ ] Create the Skin Type Detector quiz.
- [ ] Create the Beginner Routine Quiz.
- [ ] Build the result screen with:
  - [ ] skin type or routine recommendation label
  - [ ] plain-English explanation
  - [ ] 2–3 product suggestion mini-cards
  - [ ] mini-cards using Trending-style preview behaviour
  - [ ] soft sign-up prompt below results
- [ ] Ensure quiz results are visible to guests and not gated.

### 9. Starter Routines and Soft Sign-Up Prompts
- [ ] Build the Starter Routines page with 3 static routines:
  - [ ] Morning Routine
  - [ ] Night Routine
  - [ ] Acne Routine
- [ ] Display each routine as a checklist with non-interactive circles for guests.
- [ ] Add a non-intrusive upgrade prompt beneath the routines.
- [ ] Implement soft sign-up prompts at appropriate moments:
  - [ ] after quiz completion
  - [ ] after a bookmark attempt
- [ ] Ensure prompts appear after value is delivered and do not block content.

## Phase 3 — Pro Experience

### 10. Pro Gate, Upgrade Modal, and Account Dashboard
- [ ] Build the Pro upgrade modal with:
  - [ ] crown icon
  - [ ] headline
  - [ ] list of Pro benefits
  - [ ] primary upgrade CTA
  - [ ] dismiss link
- [ ] Ensure the modal appears when a free user taps a locked Pro feature.
- [ ] Do not show the same locked-feature upgrade modal repeatedly after the user dismisses it in the same session.
- [ ] Build the account dashboard showing:
  - [ ] skin type with retake quiz link
  - [ ] current streak or placeholder
  - [ ] saved favourites preview
  - [ ] upgrade CTA for free users
- [ ] Ensure the Glow AI button for free users shows the upgrade prompt instead of an empty chat.

### 11. Pro Quizzes
- [ ] Build the Pro quiz layout using the reusable quiz component.
- [ ] Create three Pro quizzes:
  - [ ] Beauty Style
  - [ ] Routine Optimiser
  - [ ] Ingredient Match
- [ ] Render Pro quiz cards on the quizzes hub with:
  - [ ] padlock icon
  - [ ] "Unlock with Pro" label for free users
- [ ] Ensure Pro quizzes run end-to-end for Pro users.

### 12. Routine Tracker
- [ ] Build the Routine Builder with:
  - [ ] editable routine name
  - [ ] ordered step list
  - [ ] add step button
  - [ ] common step library or suggestions
- [ ] Build the Daily Tracker with:
  - [ ] interactive checkboxes
  - [ ] progress bar
  - [ ] completion counter
  - [ ] visual feedback on step completion
- [ ] Implement streak logic:
  - [ ] increment streak on a fully completed day
  - [ ] reset streak on a missed day
  - [ ] prevent multiple increments on the same day
- [ ] Build the completion summary screen with:
  - [ ] rotating celebratory headline set
  - [ ] streak display
  - [ ] product recommendation card
  - [ ] Back to Home button
  - [ ] View history link
- [ ] Build the empty-routine state with starter routine templates and a "Use as template" shortcut.

### 13. Glow AI
- [ ] Integrate Anthropic API access for `claude-sonnet-4-20250514`.
- [ ] Build the floating Glow AI button with:
  - [ ] persistent placement on every page
  - [ ] correct mobile placement above bottom nav
- [ ] Build the Glow AI chat panel overlay with support for:
  - [ ] conversational Q&A
  - [ ] ingredient scanner
  - [ ] routine reviewer
  - [ ] product checker
  - [ ] routine-building suggestions
- [ ] Implement system prompt rules:
  - [ ] plain English answers
  - [ ] reference Glowpedia wiki pages first
  - [ ] personalise responses using saved skin type
- [ ] For Pro users, show a personalised daily tip on the homepage instead of the generic static tip banner when skin type exists.

### 14. Save and Favourite Products
- [ ] Add a bookmark icon to every product wiki page and Trending card.
- [ ] Implement save / unsave product behaviour.
- [ ] Build a Saved Favourites screen accessible from the dashboard.
- [ ] Build an empty saved favourites state with trending product suggestions.
- [ ] Ensure saved state persists across sessions and displays correctly.

## Phase 4 — Polish and Ship

### 15. Design, Copy, and QA Pass
- [ ] Apply the full design system across pages:
  - [ ] Sora headings, DM Sans body text
  - [ ] token-based spacing, colours, and shadows
  - [ ] button shapes and card shape rules
  - [ ] palette usage aligned to the identity: blue primary, lavender premium, mint success, yellow tips
  - [ ] responsive layout rules for mobile bottom nav, desktop top nav, and section padding
- [ ] Audit gradients, ambient depth, icon use, and text styling to confirm the visual system is consistent.
- [ ] Confirm hero/page glassmorphism details: soft orbs, gradient overlays, and subtle shine effects where appropriate.
- [ ] Confirm the homepage hero remains the dominant CTA and does not compete visually with adjacent sections.
- [ ] Confirm no scroll-triggered entrance animations outside the hero.
- [ ] Replace all placeholder copy with final user-facing text.
- [ ] Verify accessibility rules:
  - [ ] WCAG AA contrast
  - [ ] visible focus states
  - [ ] semantic HTML
  - [ ] touch target minimum sizes
- [ ] Confirm forbidden rules are not violated:
  - [ ] no emoji in UI chrome; use Lucide for UI icons and Iconoir only for routine checkboxes
  - [ ] no pill-shaped buttons; use `--radius-md` (10px)
  - [ ] no black or grey shadows; use blue-tinted shadows only
  - [ ] no heading font weight below 600
  - [ ] no gradient text outside of hero `<em>` and section labels
  - [ ] no top gradient bars on cards
  - [ ] no floating cards without visible borders; all cards must use `var(--border)`
  - [ ] no random colour introductions; use only palette colours defined in Section 2
  - [ ] no fully-rounded card corners over 20px; max is `--radius-xl` (18px) for modals only
  - [ ] no bounce/spring easing; use `ease`, `ease-out`, or `ease-in-out`
  - [ ] no scroll-triggered entrance animations outside the hero
  - [ ] no justified text alignment for body copy
- [ ] Test all key journeys:
  - [ ] F1: Search to wiki page
  - [ ] F2: Discover via homepage
  - [ ] F3: Complete free quiz
  - [ ] F4: View starter routines
  - [ ] F5: Sign up flow
  - [ ] F6: Locked feature upgrade modal
  - [ ] P1: Complete daily routine
  - [ ] P2: Routine builder and tracker
  - [ ] P3: Pro quizzes
  - [ ] P4: Glow AI usage
- [ ] Fix edge cases and bugs found during testing.

## Cross-Phase and Delivery Tasks
- [ ] Keep free-user experience cohesive: guests and signed-in free users should have identical access to free content.
- [ ] Always show locked Pro features clearly with padlock/"Unlock with Pro" labels.
- [ ] Ensure no core educational content is gated behind sign-up or Pro paywall.
- [ ] Keep journey triggers consistent: upgrade prompts only show after a user intentionally taps a locked feature or after value delivery.
- [ ] Maintain the product tone: warm, clear, gender-neutral, not clinical.
- [ ] Use Supabase for backend functionality, including:
  - [ ] auth and email verification
  - [ ] user roles and session persistence
  - [ ] saved routines, favourites, and progress data
- [ ] Document any project assumptions, data schema decisions, and API access details in the codebase.