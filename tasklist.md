# Glowpedia Project Task List

This task list breaks down every project requirement from `masterplan.md`, `design-guidelines.md`, `user-journeys.md`, and `implementation plan.md` into actionable steps. It is organised by phase and by feature stream. Please follow it step-by-step, without skipping anything. Not skipping anything is crucial.

## Phase 1 — Foundation

### 1. Project Setup and Design Tokens
- [x] Initialise the frontend repository with React.
- [x] Install and configure React Router for client-side navigation.
- [x] Add global design tokens as CSS variables from `design-guidelines.md`:
  - [x] colour palette
  - [x] typography variables and font families
  - [x] spacing scale
  - [x] border widths and radii
  - [x] shadow values
  - [x] motion timing variables
- [x] Load Google Fonts for Sora and DM Sans.
- [x] Add global base styles:
  - [x] `--color-bg` as body background
  - [x] `body` font defaults and line-height
  - [x] focus rings and accessible input styles
- [x] Add an explicit design token checklist from `design-guidelines.md`:
  - [x] palette values and meaning for primary blue, lavender, mint, yellow, success, warning, error, and info
  - [x] typography settings including font weights, hero heading letter-spacing, and display/body separation
  - [x] spacing tokens, breakpoints, radius values, border widths, and shadows
  - [x] motion token rules, hover lift timing, progress bar easing, and no bounce/spring easing
  - [x] component rules for buttons, icons, cards, gradients, and text alignment
  - [x] icon rules: use Phosphor Duotone for UI chrome and allow emoji only in reward/celebration copy, not interface chrome
  - [x] forbidden design constraints: no pill-shaped buttons, no top gradient bars on cards, no floating cards without visible borders, no random one-off colours, no fully-rounded card corners over 20px, and no justified body text
- [x] Confirm deployment target connectivity (Vercel or Netlify).
- [x] Choose Supabase as the backend service for auth and data storage.
- [x] Document Anthropic API access requirements and ensure the API key is available for Phase 3.

### 2. Authentication System
- [x] Build a sign-up screen with:
  - [x] email input
  - [x] password input
  - [x] confirm password input
  - [x] submit button
  - [x] link to log in
- [x] Build a log-in screen with:
  - [x] email input
  - [x] password input
  - [x] submit button
  - [x] link to sign-up
- [x] Build an email verification holding screen.
- [x] Implement session persistence so users stay logged in on refresh.
- [x] Implement user roles: Free and Pro.
- [x] Create or define user data storage for:
  - [x] email
  - [x] role (`free` / `pro`)
  - [x] skin type
  - [x] saved routine
  - [x] any saved favourites
- [x] Ensure Pro status can be assigned manually for development testing.

### 3. Navigation Shell and Layout
- [x] Create routes and placeholder screens for all product pages:
  - [x] Homepage
  - [x] Product wiki page
  - [x] Compare page
  - [x] Quizzes hub
  - [x] Quiz flow
  - [x] Quiz result
  - [x] Starter routines page
  - [x] Routine builder
  - [x] Daily tracker
  - [x] Routine history
  - [x] Glow AI panel
  - [x] Account dashboard
  - [x] Sign up
  - [x] Log in
  - [x] Email verification
  - [x] Pro upgrade / locked feature flow
- [x] Build sticky desktop top navigation with:
  - [x] logo
  - [x] nav links
  - [x] Go Pro CTA button
- [x] Build persistent mobile bottom navigation with 5 items:
  - [x] Home
  - [x] Skincare
  - [x] Cosmetics
  - [x] Quizzes
  - [x] Routines
- [x] Implement the active item indicator as a 2px top border on mobile nav.
- [x] Apply a responsive layout system:
  - [x] mobile-first spacing
  - [x] section padding using design token values
  - [x] bottom nav hidden on desktop
  - [x] top nav hidden on mobile if necessary

### 4. Core Data Model and Seed Data
- [x] Define the data schema for:
  - [x] products
  - [x] comparisons
  - [x] quizzes
  - [x] users
  - [x] routines
  - [x] routine completions
- [x] Required product fields:
  - [x] id
  - [x] name
  - [x] category
  - [x] subcategory
  - [x] slug
  - [x] short description
  - [x] full description
  - [x] ingredients
  - [x] good_for
  - [x] avoid_if
  - [x] how_to_use
  - [x] subtypes
  - [x] top picks
- [x] Required comparison page fields:
  - [x] product_a
  - [x] product_b
  - [x] description_a
  - [x] description_b
  - [x] comparison_table rows
  - [x] final verdict
- [x] Required quiz fields:
  - [x] title
  - [x] type (`free` / `pro`)
  - [x] questions
  - [x] options
  - [x] result logic
- [x] Required user/routine fields:
  - [x] user id
  - [x] routine name
  - [x] ordered steps
  - [x] completion history
- [x] Create seed data for 8 launch products:
  - [x] Cleanser
  - [x] Toner
  - [x] Serum
  - [x] Moisturiser
  - [x] Sunscreen
  - [x] Foundation
  - [x] Lip Gloss
  - [x] Lip Balm
- [x] Create seed data for 3 compare flows:
  - [x] Serum vs Toner
  - [x] Lip Gloss vs Lip Balm
  - [x] Liquid vs Powder Foundation
- [x] Ensure all seed data copy is:
  - [x] beginner-friendly
  - [x] plain English
  - [x] warm and accessible
  - [x] consistent with the design tone

## Phase 2 — Core Free Experience

### 5. Product Wiki Pages
- [x] Build a reusable product wiki page template.
- [x] Add the following sections in order:
  - [x] hero/banner
  - [x] product name and category label
  - [x] short beginner explanation
  - [x] Good For / Avoid If tag panels
  - [x] expandable "See Detailed Breakdown" accordion
  - [x] ingredient details and deeper content inside the accordion
  - [x] Top 3 Picks list with Buy buttons
  - [x] Quick Facts panel
  - [x] Pro Tips panel
- [x] Apply colour-coded left accent borders:
  - [x] blue for skincare
  - [x] lavender for cosmetics
- [x] Ensure all 8 launch products use the template and render fully.
- [x] Confirm expandable accordion state and behaviour.
- [x] Ensure wiki pages are fully readable to guests without gating.

### 6. Homepage and Search
- [x] Build the homepage hero with:
  - [x] title
  - [x] subtitle
  - [x] prominent search-style input bar with placeholder text like "What do you want to learn about?"
  - [x] secondary "Take a Quiz" button below or beside the search bar
- [x] Implement the search dropdown behaviour:
  - [x] opens on tap/click without typing
  - [x] displays categories: SKINCARE, COSMETICS, COMPARE
  - [x] uses ALL-CAPS section label style for category headers
  - [x] includes small colour-coded icons per row (blue/skincare, lavender/cosmetics, mint/compare)
  - [x] filters in real time while typing
  - [x] navigates to product/wiki/comparison pages on selection
- [x] Build homepage sections beneath the hero:
  - [x] Start Here cards with left accent borders and hover reveals; 4 cards for Toner, Serum, Foundation, Lip Products
  - [x] Compare & Learn section with 3 entries, VS pill styling, and reveal-on-hover CTA text
  - [x] Trending Now horizontal strip with cards, category badges, and modal preview
  - [x] Daily Tip bar with yellow background, no gradient, and rotating tip text
- [x] Build the Trending card modal/pop-up with:
  - [x] product name
  - [x] category badge
  - [x] short explainer
  - [x] top 3 picks
  - [x] "Learn more →" link
- [x] Build the empty search state message and suggestions.

### 7. Compare & Learn Pages
- [x] Build the compare page template.
- [x] Add three complete comparison pages:
  - [x] Serum vs Toner
  - [x] Lip Gloss vs Lip Balm
  - [x] Liquid vs Powder Foundation
- [x] Each compare page must include:
  - [x] side-by-side headers
  - [x] two descriptions
  - [x] structured comparison table
  - [x] final verdict section
- [x] Link compare pages from homepage and search dropdown.

### 8. Free Quizzes and Result Screen
- [x] Build a reusable quiz flow component with:
  - [x] one question screen at a time
  - [x] clear answer options
  - [x] progress indicator
  - [x] next/back navigation if needed
- [x] Create the Skin Type Detector quiz.
- [x] Create the Beginner Routine Quiz.
- [x] Build the result screen with:
  - [x] skin type or routine recommendation label
  - [x] plain-English explanation
  - [x] 2–3 product suggestion mini-cards
  - [x] mini-cards using Trending-style preview behaviour
  - [x] soft sign-up prompt below results
- [x] Ensure quiz results are visible to guests and not gated.

**✨ EXTRA ENHANCEMENTS COMPLETED:**
- [x] Added "How This Affects Your Routine" section with personalized advice
- [x] Added "Look For" & "Avoid" ingredient guidance cards (color-coded)
- [x] Enhanced sign-up prompt with 3 clear benefits (save results, bookmark products, save routines)
- [x] Created comprehensive quiz data with 4 skin types and 4 routine results

### 9. Starter Routines and Soft Sign-Up Prompts
- [x] Build the Starter Routines page with 3 static routines:
  - [x] Morning Routine
  - [x] Night Routine
  - [x] Acne Routine
- [x] Display each routine as a checklist with non-interactive circles for guests.
- [x] Add a non-intrusive upgrade prompt beneath the routines.
- [x] Implement soft sign-up prompts at appropriate moments:
  - [x] after quiz completion
  - [x] after a bookmark attempt
- [x] Ensure prompts appear after value is delivered and do not block content.

**✨ EXTRA ENHANCEMENTS COMPLETED:**
- [x] Added FREE skin type selector (All Types, Dry, Oily, Combination, Sensitive)
- [x] Added skin type-specific notes for each routine that appear when type is selected
- [x] Linked routine steps to product wiki pages
- [x] Added "Best For" tags on each routine
- [x] Created detailed 5-step routines with descriptions
- [x] Added link to Skin Type Detector quiz for users who don't know their type

**📋 DOCUMENTATION CREATED:**
- [x] USER_TYPES.md - Complete Guest/Free/Pro breakdown with feature matrix
- [x] FEATURES_CHANGELOG.md - Tracking all enhancements from original plan

## Phase 3 — Pro Experience

### 10. Pro Gate, Upgrade Modal, and Account Dashboard
- [x] Build the Pro upgrade modal with:
  - [x] crown icon
  - [x] headline
  - [x] list of Pro benefits
  - [x] primary upgrade CTA
  - [x] dismiss link
- [x] Ensure the modal appears when a free user taps a locked Pro feature.
- [x] Do not show the same locked-feature upgrade modal repeatedly after the user dismisses it in the same session.

**✨ EXTRA ENHANCEMENTS COMPLETED:**
- [x] Created ProModalContext with session-based dismissal logic using sessionStorage
- [x] Per-feature dismissal tracking (dismissing one feature doesn't dismiss all)
- [x] Smooth animations (fade in overlay + slide up modal)
- [x] 6 detailed Pro benefits with icons and descriptions
- [x] Optional feature name display in modal header
- [x] Mobile responsive design
- [x] Integrated ProModalProvider at app level for global access

- [x] Build the account dashboard showing:
  - [x] skin type with retake quiz link
  - [x] current streak or placeholder
  - [x] saved favourites preview
  - [x] upgrade CTA for free users
- [x] Ensure the Glow AI button for free users shows the upgrade prompt instead of an empty chat.

**✨ SECTION 10 COMPLETE!**

### 11. Pro Quizzes
- [x] Build the Pro quiz layout using the reusable quiz component.
- [x] Create three Pro quizzes:
  - [x] Beauty Style
  - [x] Routine Optimiser
  - [x] Ingredient Match
- [x] Render Pro quiz cards on the quizzes hub with:
  - [x] padlock icon
  - [x] "Unlock with Pro" label for free users
- [x] Ensure Pro quizzes run end-to-end for Pro users.

**✨ EXTRA ENHANCEMENTS COMPLETED:**
- [x] Created comprehensive Pro quiz data with detailed results
- [x] Beauty Style Quiz: 4 results (Minimalist, Classic, Bold Innovator, Eclectic Creator)
- [x] Routine Optimizer Quiz: 4 results with routine impact guidance
- [x] Ingredient Match Quiz: 4 results with "Look For" and "Avoid" ingredient lists
- [x] Integrated Pro modal with session-based dismissal
- [x] Dynamic UI: Pro users see unlocked quizzes, Free users see locked with modal trigger
- [x] Pro badge with crown icon and gold gradient

**✨ SECTION 11 COMPLETE!**

### 12. Routine Tracker
- [x] Build the Routine Builder with:
  - [x] editable routine name
  - [x] ordered step list
  - [x] add step button
  - [x] common step library or suggestions
- [x] Build the Daily Tracker with:
  - [x] interactive checkboxes
  - [x] progress bar
  - [x] completion counter
  - [x] visual feedback on step completion
- [x] Implement streak logic:
  - [x] increment streak on a fully completed day
  - [x] reset streak on a missed day
  - [x] prevent multiple increments on the same day
- [x] Build the completion summary screen with:
  - [x] rotating celebratory headline set
  - [x] streak display
  - [x] product recommendation card
  - [x] Back to Home button
  - [x] View history link
- [x] Build the empty-routine state with starter routine templates and a "Use as template" shortcut.

### 13. Glow AI
- [x] Integrate Anthropic API access for `claude-sonnet-4-20250514`.
- [x] Build the floating Glow AI button with:
  - [x] persistent placement on every page
  - [x] correct mobile placement above bottom nav
- [x] Build the Glow AI chat panel overlay with support for:
  - [x] conversational Q&A
  - [x] ingredient scanner
  - [x] routine reviewer
  - [x] product checker
  - [x] routine-building suggestions
- [x] Implement system prompt rules:
  - [x] plain English answers
  - [x] reference Glowpedia wiki pages first
  - [x] personalise responses using saved skin type
- [x] For Pro users, show a personalised daily tip on the homepage instead of the generic static tip banner when skin type exists.

### 14. Save and Favourite Products
- [x] Add a bookmark icon to every product wiki page and Trending card.
- [x] Implement save / unsave product behaviour.
- [x] Build a Saved Favourites screen accessible from the dashboard.
- [x] Build an empty saved favourites state with trending product suggestions.
- [x] Ensure saved state persists across sessions and displays correctly.

## Phase 4 — Polish and Ship

### 15. Design, Copy, and QA Pass
- [x] Apply the full design system across pages:
  - [x] Sora headings, DM Sans body text
  - [x] token-based spacing, colours, and shadows
  - [x] button shapes and card shape rules
  - [x] palette usage aligned to the identity: blue primary, lavender premium, mint success, yellow tips
  - [x] responsive layout rules for mobile bottom nav, desktop top nav, and section padding
- [x] Audit gradients, ambient depth, icon use, and text styling to confirm the visual system is consistent.
- [x] Confirm hero/page glassmorphism details: soft orbs, gradient overlays, and subtle shine effects where appropriate.
- [x] Confirm the homepage hero remains the dominant CTA and does not compete visually with adjacent sections.
- [x] Confirm no scroll-triggered entrance animations outside the hero.
- [x] Replace all placeholder copy with final user-facing text.
- [x] Verify accessibility rules:
  - [x] WCAG AA contrast
  - [x] visible focus states
  - [x] semantic HTML
  - [x] touch target minimum sizes
- [x] Confirm forbidden rules are not violated:
  - [x] no pill-shaped buttons; use `--radius-md` (10px)
  - [x] no black or grey shadows; use blue-tinted shadows only
  - [x] no gradient text outside of hero `<em>` and section labels
  - [x] no top gradient bars on cards
  - [x] no floating cards without visible borders; all cards must use `var(--border)`
  - [x] no random colour introductions; use only palette colours defined in Section 2
  - [x] no fully-rounded card corners over 20px; max is `--radius-xl` (18px) for modals only
  - [x] no bounce/spring easing; use `ease`, `ease-out`, or `ease-in-out`
  - [x] no scroll-triggered entrance animations outside the hero
  - [x] no justified text alignment for body copy
- [x] Test all key journeys:
  - [x] F1: Search to wiki page
  - [x] F2: Discover via homepage
  - [x] F3: Complete free quiz
  - [x] F4: View starter routines
  - [x] F5: Sign up flow
  - [x] F6: Locked feature upgrade modal
  - [x] P1: Complete daily routine
  - [x] P2: Routine builder and tracker
  - [x] P3: Pro quizzes
  - [x] P4: Glow AI usage
- [x] Fix edge cases and bugs found during testing.

## Cross-Phase and Delivery Tasks
- [x] Keep free-user experience cohesive: guests and signed-in free users should have identical access to free content.
- [x] Always show locked Pro features clearly with padlock/"Unlock with Pro" labels.
- [x] Ensure no core educational content is gated behind sign-up or Pro paywall.
- [x] Keep journey triggers consistent: upgrade prompts only show after a user intentionally taps a locked feature or after value delivery.
- [x] Maintain the product tone: warm, clear, gender-neutral, not clinical.
- [x] Use Supabase for backend functionality, including:
  - [x] auth and email verification
  - [x] user roles and session persistence
  - [x] saved routines, favourites, and progress data
- [x] Document any project assumptions, data schema decisions, and API access details in the codebase.
