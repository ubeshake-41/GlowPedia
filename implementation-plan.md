# Glowpedia – Implementation Sequencing Roadmap

**Purpose**: High-level, ordered roadmap for building Glowpedia.
Intentionally coarse-grained — phases and major build streams, not
a daily task checklist. Each phase represents a logical milestone
that can be demoed or tested at the end of it.

**Documents this plan is based on:**
- `master-plan.md` (+ Glow AI and homepage search bar edits)
- `design-guidelines.md`
- `user-journeys.md`

---

## Feature Inventory & Release Assignment

| # | Feature | Tier | Phase |
|---|---|---|---|
| 1 | Project setup, design tokens, deployment | Both | 1 |
| 2 | Authentication (sign-up, log-in, email verification, roles) | Both | 1 |
| 3 | Navigation shell (all routes, bottom nav, top nav) | Both | 1 |
| 4 | Core data model + seed data (6–8 launch products) | Both | 1 |
| 5 | Product wiki pages (template + launch content) | Free | 2 |
| 6 | Homepage (hero, search bar, Trending, Compare, Start Here, tip bar) | Free | 2 |
| 7 | Compare & Learn pages | Free | 2 |
| 8 | Free quizzes + result screen (Skin Type, Beginner Routine) | Free | 2 |
| 9 | Starter Routines (static) + soft sign-up prompt | Free | 2 |
| 10 |Pro gate, upgrade modal, account dashboard | Pro | 3 |
| 11 |Pro quizzes (Beauty Style, Routine Optimiser, Ingredient Match) | Pro | 3 |
| 12 |Routine Tracker (builder, checklist, progress bar, streaks, completion screen, history) | Pro | 3 |
| 13 | Glow AI (chatbot, Ingredient Scanner, Routine Reviewer, Product Checker, personalised tips) | Pro | 3 |
| 14 | Save & Favourite products | Pro | 3 |
| — | Design + copy pass, edge cases, final test | Both | 4 |

---

## Phase 1 – Foundation

*What this phase delivers: the core infrastructure everything else
depends on. At the end of Phase 1 you can sign up, log in, navigate
between all screens (with placeholder content), and confirm the data
model is solid — nothing user-facing works until this is done.*

---

### 1. Project Setup and Tech Stack

- Initialise the project repository with React for the frontend
  and React Router for routing. Confirm and connect the
  deployment target (Vercel or Netlify).
- Set up the design token layer from `design-guidelines.md` as
  global CSS variables: colour palette, typography (Sora +
  DM Sans via Google Fonts), spacing scale, border widths,
  radius values, shadow definitions, and motion timing.
- Confirm Anthropic API access for Glow AI (Phase 3) — do not
  build yet, but ensure the key is available and documented
  so it does not block Phase 3.
- **Done state:** The project runs locally and deploys
  successfully. Design tokens and fonts are applied globally.
  The page may be blank but the pipeline is live.

---

### 2. Authentication System

- Build sign-up (email + password + confirm), log-in, and email
  verification holding screens.
- Implement session persistence — user stays logged in on refresh.
- Implement two user roles: Free and Pro. For MVP, the Pro role
  is assigned manually via a database flag — payment integration
  is out of scope.
- Store core user data: email, role (free/pro), skin type (null
  until quiz is taken), saved routine (null until built).
- **Done state:** A user can sign up, verify their email, log in,
  and log out. Session persists on refresh. A Pro flag can be
  toggled manually in the database to test Pro features during
  development. Enables journeys F5, F6, and all Pro journeys.

---

### 3. Navigation Shell and Layout

- Create a route and placeholder screen for every page in the
  product: Homepage, Product Wiki Page, Compare Page, Quizzes
  Hub, Quiz Flow, Quiz Result, Starter Routines, Routine Builder,
  Daily Tracker, Routine History, Glow AI Panel, Account
  Dashboard, Sign Up, Log In, Email Verification, Pro Upgrade.
- Build the persistent mobile bottom nav (Home, Skincare,
  Cosmetics, Quizzes, Routines) with the 2px active top
  indicator from `design-guidelines.md`.
- Build the sticky desktop top nav (logo, nav links, Go Pro CTA).
- Apply global background colour (`--color-bg`), font defaults,
  and 8pt grid spacing across all screens.
- **Done state:** All screens exist and are reachable by URL.
  Nav works correctly on both mobile and desktop. Every screen
  shows placeholder content but the layout is structurally
  correct per `design-guidelines.md`.

---

### 4. Core Data Model and Seed Data

- Define and document all data structures:
  - **Products:** id, name, category, subcategory, slug, short
    description, full description, ingredients, good_for (array),
    avoid_if (array), how_to_use, subtypes (array), top_picks
    (array of {brand, name, price_range, best_for, buy_url})
  - **Comparisons:** id, product_a, product_b, description_a,
    description_b, comparison_table (rows), verdict
  - **Quizzes:** id, title, type (free/pro), questions (array
    of {question, options}), result_logic
  - **Users:** id, email, role, skin_type, created_at
  - **Routines:** id, user_id, name, steps (array of
    {label, order}), created_at
  - **Routine completions:** id, routine_id, user_id, date,
    steps_completed (array), fully_completed (bool)
- Write and load seed data for the 6–8 launch products:
  Cleanser, Toner, Serum, Moisturiser, Sunscreen, Foundation,
  Lip Gloss, Lip Balm. Each product must have all fields
  populated — no half-finished entries.
- Content tone for all seed data must follow
  `design-guidelines.md` Section 1: plain English,
  beginner-friendly, warm but never childish, no jargon
  without explanation.
- **Done state:** All data structures are defined. Seed data
  for all 8 launch products is loaded and queryable. The
  schema is stable — no breaking changes should be needed
  in later phases. Wiki content is the foundation that every
  wiki page, search result, quiz recommendation, and Glow AI
  response will reference throughout the build.

---

## Phase 2 – Core Free Experience

*What this phase delivers: the complete experience for a free
user — wiki pages, search and discovery, quizzes, and starter
routines. At the end of Phase 2 you can demo the entire free
user core value loop: land on the homepage, search for a product,
read its wiki page, take the Skin Type Quiz, see a personalised
result, and view a starter routine — all without an account.*

---

### 5. Product Wiki Pages

- Build the wiki page template used by every product. Sections
  in order: hero image/banner, product name and category label,
  short beginner explanation (always visible), Good For / Avoid
  If two-column tag layout (rectangular tags, data-style per
  `design-guidelines.md`), "See Detailed Breakdown" expandable
  accordion (collapsed on load), expanded content (ingredients,
  deeper benefits, subtypes, how to use), Top 3 Picks list with
  Buy buttons (open in new tab, never the dominant CTA), Quick
  Facts panel, Pro Tips panel.
- Apply left accent border colour-coding: blue for skincare,
  lavender for cosmetics.
- Populate all 8 launch products using the Phase 1 seed data.
- **Done state:** All 8 launch products render as complete,
  styled, fully readable wiki pages. The expandable accordion
  works. Buy links open correctly in a new tab. Enables
  journey F1 — a user can land on any product page and get
  everything they need without scrolling past the fold.

---

### 6. Homepage and Search

- Build the homepage hero with the product search bar as the
  dominant element. On tap/click the bar opens a categorised
  dropdown immediately (no typing required), organised under
  SKINCARE, COSMETICS, and COMPARE headers using the ALL-CAPS
  section label style. Typing filters results in real time.
  Selecting a product navigates to its wiki page.
- Build all homepage sections below the hero:
  - **Start Here cards** — 4 cards with left accent borders,
    colour-coded icons, hover "Explore →" CTA reveal
  - **Compare & Learn** — 3 rows with dark rectangular VS pill,
    hover "Compare now →" reveal
  - **Trending Now** — horizontally scrollable strip with
    category badges and bottom colour gradient strips; tapping
    a card opens a pop-up modal (brief explainer, top 3 picks,
    "Learn more →" link to wiki page)
  - **Daily Tip bar** — full-width, `--color-yellow-light`
    background, rotating tip text, lightbulb icon
- All hover animations use `--transition-slow` (200ms),
  `translateY(-2px)` maximum lift, per `design-guidelines.md`.
- Empty search state: "We couldn't find that product yet" with
  suggestions to browse the dropdown or take the Skin Type Quiz.
- **Done state:** The homepage is fully built and interactive.
  Search bar opens the dropdown, filters correctly, and
  navigates to the right wiki page. Every homepage section
  renders and links correctly. Trending modal works. Enables
  journey F2.

---

### 7. Compare & Learn Pages

- Build the compare page template: two product headers side by
  side, a description for each, a structured comparison table
  (rows of attributes), and a final verdict section.
- Launch with the 3 comparisons defined in the masterplan:
  Serum vs Toner, Lip Gloss vs Lip Balm, Liquid vs Powder
  Foundation. Content must be fully written — no placeholders.
- **Done state:** All 3 compare pages are complete, styled,
  and reachable from the homepage Compare & Learn section
  and from the search bar dropdown.

---

### 8. Free Quizzes and Result Screen

- Build the reusable quiz flow component: one question per
  screen, clear answer options, a progress indicator,
  no jargon. This same component is used for Pro quizzes
  in Phase 3.
- Build the Skin Type Detector (outputs: oily, dry,
  combination, or sensitive skin type).
- Build the Beginner Routine Quiz (outputs: a recommended
  starter routine matched to the user).
- Build the quiz result screen: skin type label, plain-English
  explanation, 2–3 product suggestion mini-cards that match
  the Trending pop-up modal pattern (brief explainer, top 3
  picks, "Learn more →"). Soft sign-up prompt below results —
  non-blocking, results visible regardless.
- **Done state:** Both free quizzes run end-to-end. Results
  display correctly. The sign-up prompt appears below the
  result without obscuring it. Enables journey F3.

---

### 9. Starter Routines and Sign-Up Prompt

- Build the Starter Routines page with 3 static routine cards:
  Morning (Cleanser, Toner, Moisturiser, Sunscreen), Night
  (Makeup Remover, Cleanser, Serum, Moisturiser), Acne (Gentle
  Cleanser, Salicylic Toner, Spot Treatment, Oil-Free
  Moisturiser). Checklist circles are visible but non-interactive
  for free users — they communicate the Pro feature through
  aspiration, not deception.
- Single upgrade prompt below the routines: "Want to track your
  progress and build streaks? Upgrade to Pro." Non-intrusive —
  it does not obscure or replace any content.
- Implement the soft sign-up prompt system used across the
  product (quiz results, bookmark attempt). Prompt always
  appears after value is delivered, never before.
- **Done state:** Starter Routines page is fully readable for
  all users. Sign-up prompt appears correctly in all designated
  trigger points. Enables journey F4. The full free user core
  value loop is now demonstrable end-to-end.

---

## Phase 3 – Pro Experience

*What this phase delivers: the complete Pro feature set —
routine tracking with streaks, Pro quizzes, Glow AI, and saved
favourites. At the end of Phase 3 you can demo the full product
as a Pro user: build a custom routine, track it daily, use Glow
AI to get personalised advice, and see the streak and completion
experience that drives return visits.*

---

### 10. Pro Gate and Account Dashboard

- Build the Pro upgrade modal triggered by any locked feature
  tap: crown icon, headline, Pro benefits list, gradient
  "Upgrade to Pro" CTA, "Maybe later" dismiss link. Modal
  appears once per locked feature per session — does not
  reappear after dismissal. Returns user to exactly where
  they were.
- Build the account dashboard: skin type (with "Retake quiz"
  link), current streak, saved favourites preview (up to 3,
  "View all" link), saved quiz results, Pro status indicator,
  and "Upgrade to Pro" CTA for free users.
- Free users who tap the Glow AI button see the same modal
  with Glow AI-specific copy — never an empty chat interface.
- **Done state:** Every locked feature correctly triggers the
  modal. Dashboard renders appropriate content for both free
  and Pro users. Enables journey F6.

---

### 11. Routine Tracker

- Build the Routine Builder: editable routine name field, step
  list with an "Add step" button, a common-steps library, and
  drag-to-reorder handles. Maximum 10 steps enforced with an
  inline message.
- Build the Daily Tracker: interactive checklist of saved steps,
  real-time progress bar (400ms ease fill, flat rectangle, no
  border-radius), dynamic counter ("0/5 steps completed" →
  "All steps completed"), checkbox scale-pulse animation (150ms).
- Build streak logic: increments on full daily completion,
  resets on a missed day, cannot increment twice in one
  calendar day. Routine History view shows each past day as
  completed (✔) or missed (✗).
- Build the Completion Summary Screen triggered on final
  checkbox: rotating celebratory phrase (minimum 5 in
  rotation), streak counter with flame icon, single product
  recommendation card, "Back to Home" primary CTA (navigates
  to homepage with streak visibly updated), "View my history"
  secondary link.
- Empty state (no routine built): shows Starter Routine cards
  as inspiration with "Use as template" shortcut.
- **Done state:** A Pro user can build a routine, track it
  daily, see the progress bar fill in real time, receive the
  completion summary, and see their streak update on the
  homepage. History is accurate across sessions. Enables
  journeys P1 and P2.

---

### 12. Pro Quizzes

- Using the quiz component built in Phase 2, build three
  Pro quiz flows:
  - **Beauty Style Quiz** — outputs a beauty personality
    profile with matched product suggestions
  - **Routine Optimiser** — outputs a personalised routine
    recommendation with an "Add to my routine" button that
    pre-populates the Routine Builder with the suggested steps
  - **Ingredient Match Quiz** — outputs a list of ingredients
    suited to the user's skin type and concerns, each linking
    to a wiki page
- Locked state for free users: padlock icon and "Unlock with
  Pro" label on each Pro quiz card.
- **Done state:** All three Pro quizzes run end-to-end for Pro
  users. Routine Optimiser pre-populates the Routine Builder
  correctly. Locked state displays correctly for free users.
  Enables journey P3.

---

### 13. Glow AI

- Integrate the Anthropic API (`claude-sonnet-4-20250514`,
  `max_tokens: 1000`) as the Glow AI engine.
- Build the persistent floating Glow AI button (bottom-right,
  above the bottom nav on mobile). Tapping it slides up a
  chat panel overlay without navigating away from the current
  page. On first open: greeting message + three quick-start
  suggestion chips ("Explain an ingredient", "Review my
  routine", "Is this product worth it?").
- Implement all Glow AI capabilities within the chat panel:
  - **Conversational Q&A** — free-form skincare questions,
    plain-English responses, inline wiki page links as
    preview cards (full navigation only on explicit
    "View full page" tap)
  - **Ingredient Scanner** — user pastes an ingredient list,
    Glow AI returns a plain-English breakdown, flags anything
    potentially irritating for their skin type, and gives an
    overall rating (Good / Mixed / Be Cautious)
  - **Routine Reviewer** — pulls the user's saved routine,
    identifies conflicts (e.g. Vitamin C + AHA) and gaps
    (e.g. no sunscreen), suggests fixes with wiki page links
  - **"Is This Worth It?" checker** — user names a product,
    receives a verdict (Recommended / Situational / Skip),
    key ingredient summary, and a Glowpedia catalogue dupe
    suggestion where relevant
  - **Routine Builder via chat** — generates a routine in
    the conversation, offers "Add to my routine" button that
    pre-populates the Routine Builder
- System prompt instructs Glow AI to use plain English,
  always reference Glowpedia wiki pages over external sources,
  and personalise responses using the user's saved skin type.
- For Pro users, replace the static daily tip banner on the
  homepage with a Glow AI-generated tip based on their skin
  type and current routine. Falls back to the static tip if
  no skin type is saved yet.
- **Done state:** All Glow AI capabilities work end-to-end
  for Pro users. The floating button does not obscure key UI
  on any screen. Locked panel shows for free users — never
  an empty or broken interface. Personalised tips show on
  the Pro homepage. Enables journey P4.

---

### 14. Save and Favourite Products

- Build the bookmark icon on every product wiki page and
  Trending card. Tapping saves the product to the user's
  account; tapping again removes it.
- Build the Saved Favourites screen, accessible from the
  account dashboard.
- Empty state: 2–3 Trending product cards with label
  "Nothing saved yet — here's what's popular."
- **Done state:** Pro users can save, view, and unsave
  products. Saved state persists across sessions and is
  reflected correctly on the dashboard.

---

## Phase 4 – Polish and Ship

*What this phase delivers: a product ready to show a real user.
Not feature-complete — coherent, stable, and presentable. At the
end of Phase 4 the full core value loop works flawlessly for a
fresh user with no account, and the full Pro experience works
end-to-end for a Pro user.*

---

### 15. Design and Copy Pass

- Apply `design-guidelines.md` fully across every screen:
  Sora 800 on all h1/h2, DM Sans on body, colour tokens,
  spacing system, 1.5px border widths, blue-tinted shadows,
  and motion timing (`--transition-base: 150ms ease` for
  hover, `--transition-progress: 400ms ease` for progress bar).
- Audit every gradient: hero background, primary button, nav
  CTA, section label text, and routine card bottom strips
  must all match the specified values.
- Audit every icon: all UI chrome must use inline SVG icons
  only. Emoji permitted only in routine completion phrases
  and reward signals — nowhere else.
- Review all user-facing copy: button labels, empty states,
  error messages, headings, and tip text. Confirm tone is
  warm, plain-English, and beginner-friendly throughout.
  Remove all placeholder content.
- Verify the Forbidden Rules from Section 11 of
  `design-guidelines.md` are not violated anywhere: no pill
  buttons, no black shadows, no gradient text outside
  permitted contexts, no bounce easing.

---

### 16. Edge Cases, Error Handling, and Final Test

- Walk every journey in `user-journeys.md` and confirm all
  error states are handled:
  - Search returns no results → helpful empty state (F1)
  - User navigates away mid-quiz → warning prompt (F3)
  - Email verification not received → resend button works (F5)
  - Routine save fails → inline retry, step data preserved (P2)
  - Pro feature accessed without Pro → upgrade modal, no blank
    screen (F6)
  - Free user taps Glow AI → locked panel, not broken chat (P4)
- Confirm every empty state renders correctly: Routine Tracker
  (no routine built), Saved Favourites (none saved), Quiz
  Results (no quiz taken), Routine History (no completions),
  Glow AI (first open).
- Test the full core value loop end-to-end as a fresh user:
  land → search for Serum → read wiki page → take Skin Type
  Quiz → see result → view Starter Routine → tap locked feature
  → see upgrade modal → dismiss → confirm return to correct
  screen.
- Confirm all MVP priority journeys are complete and working:
  F1, F3, F4, F5, F6, P1, P2, P4.
- Confirm minimum 44px touch targets on all interactive
  elements on mobile. Confirm hover states work on desktop.

---

## What This Plan Does NOT Cover

The following are explicitly out of scope for this build.
They are noted as future versions and must not be started
until the Phase 4 milestone is complete and signed off.

- **Payment / subscription billing** — Pro role is assigned
  manually via a database flag for MVP. A real payment flow
  (Stripe or equivalent) is post-MVP.
- **Push notifications and email reminders** — smart prompts
  ("You're 2 steps away!") are in-app only. Email or push
  delivery is future.
- **Social and community features** — no sharing, no public
  user profiles, no comments or ratings on products.
- **Admin content management system** — wiki content is
  managed via seed files and direct database edits for MVP.
  A CMS for non-technical content editing is future.
- **Full cosmetics and skincare catalogue** — launch set is
  8 products. Expanding to true fandom/Wikipedia depth is
  continuous content work that runs post-launch and in
  parallel with all future phases.
- **Multiple saved routines per user** — MVP supports one
  active routine. Morning + night as separate saved routines
  is a future enhancement.
- **Glow AI voice input** — text input only for MVP.
- **Third-party login** — email and password only. Google
  and Apple Sign-In are future.
- **Automatic Glow AI context from Ingredient Match Quiz** —
  the quiz outputs a list but does not yet feed automatically
  into Glow AI's personalisation context. Future layer.