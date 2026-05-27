# Glowpedia — User Journeys

This document maps the step-by-step experience of each user type across
Glowpedia's core features. It covers three user roles (Guest, Free User,
Pro User), the navigation model for each, and the key flows that define
the MVP experience.

The core value loop — landing on Glowpedia, learning something, and
returning tomorrow — is the thread that connects every journey here.

This is a product-facing document, not a technical spec. For
implementation details, see `master-plan.md` and `implementation-plan.md`.

---

# 1. Product Roles

## Free User (Guest or Signed-In)
Anyone without a Pro subscription — whether they have an account or
not. Free users have full read access to all wiki pages, the
search/discovery bar, Trending, Compare & Learn, Start Here cards,
Starter Routines (static checklists), and both basic quizzes. There
is no meaningful difference in experience between a guest visitor and
a signed-in free user — signing up is a soft prompt, never a gate.

## Pro User *(upgrade from Free)*
A paying subscriber. Gets everything a Free User can access, plus:
full routine builder with daily tracking and streaks, all Pro quizzes,
AI personalisation tools, and saved favourites. The upgrade is
surfaced when a user attempts to access a locked feature — never
forced before that moment.

---

# 2. Core Product Navigation Model

## Free User Navigation (Guest or Signed-In)
Primary areas accessible without a Pro subscription:
- Homepage (hero, search bar, Trending, Compare & Learn, Start Here)
- All product wiki pages
- Starter Routines (static, non-tracked checklists)
- Basic Quizzes (Skin Type, Beginner Routine)
- Pro feature pages (visible but locked with upgrade prompt)

## Pro User Navigation
Everything a Free User can access, plus:
- Routine Builder (custom steps, reorder, rename)
- Daily Routine Tracker (progress bar, streak tracking, history)
- All Pro Quizzes (Beauty Style, Routine Optimiser, Ingredient Match)
- AI Product Recommendation Helper
- AI Ingredient Explanation Assistant
- Save & Favourite products

---

# 3. Free User Journeys

---

# Journey F1 — Free User Discovers a Product via Search

## Goal
A brand new visitor who has heard of a product (e.g. "serum" from a
friend or social media) finds and reads its wiki page within 60 seconds
of arriving, without any friction.

## Entry Point
Homepage → Hero section → Product search bar

## Flow

### Step 1 — Lands on Homepage
User arrives on the Glowpedia homepage. The hero displays the title,
subtitle, and the product search bar with placeholder text:
*"What do you want to learn about?"*
The search bar is the dominant visual element in the hero — the primary
CTA. A secondary "Take a Quiz" button sits below it.

### Step 2 — Opens Search Bar
User taps or clicks the search bar. A categorised dropdown opens
immediately, without requiring typing. Categories shown:

- **SKINCARE** — Cleanser, Toner, Serum, Moisturiser, Sunscreen,
  Exfoliant, Eye Cream, Face Mask
- **COSMETICS** — Foundation, Concealer, Blush, Mascara, Lip Gloss,
  Lip Balm, Lip Liner, Setting Spray
- **COMPARE** — Serum vs Toner, Lip Gloss vs Lip Balm,
  Liquid vs Powder Foundation

User can scroll the dropdown or start typing to filter results.

### Step 3 — Selects a Product
User taps "Serum" from the dropdown (or types "ser" and selects it
from filtered results). The dropdown closes.

### Step 4 — Arrives on Product Wiki Page
User is taken directly to the Serum wiki page. Default view shows:
- What is a serum? (2–3 sentence beginner explanation)
- Good For / Avoid If tags (two-column layout)
- "See Detailed Breakdown" expandable accordion (collapsed by default)
- Top 3 Picks with Buy buttons
- Quick Facts and Pro Tips panels

### Step 5 — Reads and Explores
User reads the page. They can expand "See Detailed Breakdown" for
ingredients and deeper content. At no point are they asked to sign up
or pay. The page is fully readable as a guest.

## Navigation Notes
The search bar replaces the vague "Start Exploring" button as the
primary hero CTA. This serves both beginner users (who browse the
dropdown) and more directed users (who type a specific term). Wiki
pages must be fully accessible to guests — gating educational content
would directly contradict Glowpedia's core purpose.

---

# Journey F2 — Free User Browses via Trending / Homepage Discovery

## Goal
A curious visitor with no specific product in mind explores the
homepage and discovers something interesting without knowing where
to start.

## Entry Point
Homepage → Trending Now section or Start Here cards

## Flow

### Step 1 — Lands on Homepage
User arrives and scrolls past the hero section.

### Step 2 — Sees Trending Now
User sees the horizontally scrollable Trending Now strip. Cards show
product names, a category badge (Popular, Beginner Fave, Must Have,
Trending), and a colour-coded icon. User taps a card — e.g.
"SPF 50 Sunscreen."

### Step 3 — Trending Pop-up Opens
A modal/bottom sheet appears containing:
- Product name and category badge
- Brief 2–3 sentence explainer
- Top 3 brand picks
- "Learn more →" link to the full wiki page

User can dismiss and tap another card, or tap "Learn more."

### Step 4 — Full Wiki Page (optional)
If user taps "Learn more," they arrive on the full product wiki page
(same as Journey G1, Step 4).

### Step 5 — Returns to Homepage
User taps back or dismisses the modal. They can continue browsing
Start Here cards, Compare & Learn, or use the search bar.

## Navigation Notes
The Trending and Start Here sections are secondary discovery surfaces.
They exist for users who prefer visual browsing over directed search.
The pop-up modal mirrors the same pattern used for quiz result
recommendations — consistency here matters.

---

# Journey F3 — Free User Takes a Basic Quiz

## Goal
A guest user completes the free Skin Type Quiz and receives a result
that points them toward relevant products — without needing an account.

## Entry Point
Homepage → "Take a Quiz" button in hero, OR bottom nav → Quizzes

## Flow

### Step 1 — Arrives on Quiz Hub
User sees the Quizzes page. Two free quizzes are shown prominently:
- Skin Type Detector
- Beginner Routine Quiz

Two or more Pro quizzes are shown below, visually locked with a padlock
icon and "Unlock with Pro" label.

### Step 2 — Starts Skin Type Quiz
User taps "Skin Type Detector." Quiz begins — a series of simple,
beginner-friendly questions (e.g. "How does your skin feel an hour
after washing?"). Each question is one screen, with clear answer
options. No jargon.

### Step 3 — Completes Quiz
User answers all questions and taps "See My Result."

### Step 4 — Result Screen
User sees their skin type (e.g. "Combination Skin") with:
- A short, plain-English explanation
- 2–3 product suggestions suited to their skin type
- Each suggestion has a mini card — tapping it opens the Trending-style
  pop-up (brief explainer + top 3 picks + "Learn more" link)

### Step 5 — Soft Sign-Up Prompt
Below the results, a non-blocking banner reads:
*"Save your results — create a free account to keep these."*
User can ignore this and continue browsing. Results are shown
regardless. Dismissing the banner does not hide the results.

## Navigation Notes
Quiz results must be visible to guests. The sign-up prompt is a
soft nudge only — it never blocks the result screen. This is the
most important conversion moment in the guest journey, and blocking
it would destroy trust with a teenage audience.

---

# Journey F4 — Free User Views Starter Routines

## Goal
A guest user views a static starter routine checklist to understand
what a daily skincare routine looks like.

## Entry Point
Bottom nav → Routines, OR Homepage scroll

## Flow

### Step 1 — Arrives on Routines Page
User sees three static routine cards:
- Morning Routine (Cleanser, Toner, Moisturiser, Sunscreen)
- Night Routine (Makeup Remover, Cleanser, Serum, Moisturiser)
- Acne Routine (Gentle Cleanser, Salicylic Toner, Spot Treatment,
  Oil-Free Moisturiser)

### Step 2 — Reads a Routine
Each routine is a static checklist — steps are listed with radio
circles that are visible but do not function for guests. The page
is read-only.

### Step 3 — Upgrade Prompt
Below the routines, a CTA reads:
*"Want to track your progress and build streaks? Upgrade to Pro."*
This is a single, non-intrusive prompt. It does not replace or
obscure the routine content.

## Navigation Notes
Static routines are fully readable for guests. The checklist circles
are intentionally visible but non-interactive — they communicate what
the Pro feature looks like, creating aspiration without deception.
Do not hide the routine content behind any gate.

---

# Journey F5 — Free User Signs Up

## Goal
A guest user who wants to save their quiz results or bookmark a page
creates a free account.

## Entry Point
Soft sign-up prompt on quiz result screen, OR bookmark attempt on a
wiki page, OR explicit "Sign Up" link in nav

## Flow

### Step 1 — Prompt Appears
User sees the soft sign-up banner (e.g. after completing a quiz).
They tap "Create free account."

### Step 2 — Sign-Up Screen
A clean sign-up form appears:
- Email address
- Password
- Confirm password
- "Create account" button
- "Already have an account? Log in" link

No personal data beyond email is required at sign-up.

### Step 3 — Email Verification
User receives a verification email. A holding screen tells them to
check their inbox. They can continue browsing Glowpedia while
waiting — they are not locked out.

### Step 4 — Account Confirmed
User clicks the verification link. They are returned to Glowpedia,
now logged in. Their quiz result (if that was the trigger) is
automatically saved to their account.

### Step 5 — Lands on Dashboard (basic)
User sees a minimal dashboard:
- Saved quiz results
- Bookmarked pages (if any)
- A Pro upgrade teaser: *"Unlock routine tracking, streaks, and
  advanced quizzes."*

## Navigation Notes
Sign-up must never interrupt a content journey mid-flow. The prompt
always appears after the value has been delivered (result shown,
page read), never before. Email verification is required but must
not block continued browsing.

---

# Journey F6 — Free User Encounters a Locked Feature

## Goal
A free user attempts to access a Pro quiz or Pro routine feature and
is shown the upgrade prompt without feeling punished.

## Entry Point
Quizzes page → taps a locked Pro quiz card, OR Routines page →
taps "Track my routine"

## Flow

### Step 1 — Taps Locked Feature
User taps a Pro quiz card (e.g. "Beauty Style Quiz"). The card has
a visible padlock icon and "Unlock with Pro" label — the lock is not
hidden, so there is no surprise.

### Step 2 — Upgrade Modal Appears
A modal slides up with:
- Crown icon
- Headline: *"Unlock personalised beauty insights"*
- List of Pro benefits (all quizzes, routine tracker with streaks,
  AI tools, save favourites, personalised recommendations)
- "Upgrade to Pro" CTA button (primary, gradient)
- "Maybe later" dismiss link

### Step 3a — User Upgrades
User taps "Upgrade to Pro" → taken to payment/upgrade flow.
On completion, modal closes and the previously locked feature
opens immediately.

### Step 3b — User Dismisses
User taps "Maybe later." Modal closes. They are returned exactly
to where they were — the Quizzes page. No punishment, no repeated
interruption on the same session.

## Navigation Notes
The upgrade prompt appears exactly once per locked feature tap per
session. It must not reappear if the user has already dismissed it
in the same session. The modal must always have a clearly visible
dismiss option — dark patterns are forbidden.

---

# 4. Pro User Journeys

---

# Journey P1 — Pro User Completes Daily Routine

## Goal
A Pro user checks off their daily routine steps and receives
satisfying completion feedback — a celebration screen with a
streak update and product recommendation — before landing back
on the homepage with their streak indicator visibly updated.

## Entry Point
Bottom nav → Routines → Daily Tracker, OR login prompt on return
visit: *"Ready to complete your routine?"*

## Flow

### Step 1 — Opens Routine Tracker
User sees their custom routine checklist. Each step has an
interactive checkbox. A progress bar at the top shows current
completion (e.g. "0/5 steps completed").

### Step 2 — Checks Off Steps
User taps each checkbox as they complete each step. Each tick:
- Checkbox animates (scale pulse, 150ms)
- Progress bar smoothly fills in real time (400ms ease)
- Counter updates: "1/5 steps completed", "2/5 steps completed"…

### Step 3 — Final Step
User taps the last checkbox. Progress bar reaches 100%.

### Step 4 — Completion Summary Screen
A full-screen (or near full-screen) summary slides up immediately,
containing:

**Celebratory headline** — one of a rotating set of warm,
encouraging phrases, for example:
- *"You showed up for yourself today. That's everything. 🌟"*
- *"Another day, another glow. Keep it going. ✨"*
- *"Look at you — crushing it. Seriously. 🔥"*
- *"Consistency is your superpower. Day [N] done."*
- *"Your skin noticed. We did too. Well done. 💫"*

Below the headline:
- Streak counter, prominently displayed:
  e.g. **🔥 6-day streak** — *"Don't break the chain!"*
- A single product recommendation card relevant to their routine
  type — tapping it opens that product's wiki page
- A "Back to Home" button (primary CTA)
- A "View my history" link (secondary, smaller)

### Step 5 — Returns to Homepage
User taps "Back to Home." They land on the homepage. The streak
indicator in the nav or dashboard area is visibly updated — the
user can see their progress reflected immediately without having
to go looking for it.

## Navigation Notes
The two-step completion experience (summary screen → homepage) is
intentional. The summary screen delivers the emotional reward;
the homepage return grounds the user back in the product and
shows the streak update in context. The celebratory phrases
rotate so returning users see something different each time —
they should feel personal and warm, never corporate or robotic.
The emoji in the phrases are permitted here as reward signals,
consistent with the design system note in `design-guidelines.md`.

---

# Journey P2 — Pro User Builds a Custom Routine

## Goal
A Pro user creates a personalised daily routine with their own steps,
order, and name.

## Entry Point
Routines page → "Build My Routine" button (Pro only)

## Flow

### Step 1 — Opens Routine Builder
User sees the Routine Builder interface:
- A named routine field (editable, default: "My Routine")
- An empty step list with an "Add step" button
- A library of common steps to add quickly
  (Cleanser, Toner, Serum, Moisturiser, Sunscreen, etc.)

### Step 2 — Adds Steps
User taps "Add step" and selects from the library, or types a
custom step name. Steps appear in a list with drag handles for
reordering.

### Step 3 — Reorders Steps
User drags steps into their preferred order (e.g. moves Serum
above Moisturiser).

### Step 4 — Names Routine
User taps the routine name field and edits it (e.g. "Morning Glow").

### Step 5 — Saves Routine
User taps "Save Routine." The routine is saved to their account
and appears on the Routines page, ready for daily tracking.

## Navigation Notes
The Routine Builder is Pro-only but the Starter Routines page is
always visible as a reference. The builder should feel like a
lightweight tool — not a complex form. Maximum 10 steps per routine
in MVP to prevent over-engineering.

---

# Journey P3 — Pro User Takes an AI-Powered Quiz

## Goal
A Pro user takes the Routine Optimiser quiz and receives a
personalised routine recommendation based on their answers.

## Entry Point
Quizzes page → "Routine Optimiser" (unlocked for Pro)

## Flow

### Step 1 — Starts Quiz
User taps the Routine Optimiser card. No lock icon — it opens
immediately for Pro users.

### Step 2 — Answers Questions
A series of questions about their current routine, concerns, and
goals. Answers feed into the AI recommendation engine.

### Step 3 — Result Screen
User sees a personalised routine recommendation:
- Suggested steps in order
- Brief explanation of why each step was recommended
- Each step links to its product wiki page
- "Add to my routine" button — pre-populates the Routine Builder
  with the recommended steps

### Step 4 — Saves to Routine Builder (optional)
User taps "Add to my routine." Routine Builder opens, pre-filled
with the recommended steps. User can edit before saving.

## Navigation Notes
The AI quiz result is the highest-value moment in the Pro
experience. The result screen must feel considered and
personalised — not generic. Every recommended product must link
directly to a Glowpedia wiki page, not an external site.
External buy links appear only within the wiki pages themselves.

---

# 5. Cross-cutting Design Requirements

## Empty States

Key empty states to design:

- **Routine Tracker (no routine built yet)** — Shows the three Starter
  Routine cards as inspiration, with a CTA: *"Build your own routine →"*
  (Pro) or *"Upgrade to build your own →"* (Free). Never a blank page.

- **Saved Favourites (none saved yet)** — Shows 2–3 product cards from
  Trending as suggestions, with a label: *"Nothing saved yet — here's
  what's popular."*

- **Quiz Results (not yet taken)** — Shows the available quizzes as
  cards with a prompt: *"Take a quiz to see your results here."*

- **Routine History (no completions yet)** — Shows a calendar view
  with all days empty and a label: *"Complete your first routine to
  start your history."* No zeroes, no negative framing.

## Error and Recovery Paths

Key error paths to design:

- **Search bar — no results found** — Shows: *"We couldn't find that
  product yet."* with two suggestions: browse the dropdown categories,
  or take the Skin Type Quiz. Never a dead end.

- **Email verification not received** — Shows a "Resend email" button
  on the verification holding screen. Plain language: *"Didn't get it?
  Check your spam folder or resend."*

- **Quiz interrupted mid-flow (navigation away)** — On return, the quiz
  restarts from the beginning. Progress is not saved mid-quiz for guests
  or free users. A warning prompt appears if the user tries to navigate
  away: *"Leave quiz? Your progress won't be saved."*

- **Routine save failed** — Inline error below the Save button:
  *"Something went wrong saving your routine. Try again."* with a
  retry button. Do not lose the user's step data.

- **Pro feature accessed without Pro account (edge case)** — If a Pro
  feature is somehow reached without authentication, redirect to the
  upgrade modal — never to a blank or broken screen.

---

# 6. Recommended Product Structure by Screen

## Free User Screens
- Homepage (hero, search bar, Trending, Compare & Learn, Start Here cards)
- Product Wiki Page (all products)
- Compare Page (product vs product)
- Quizzes Hub
- Quiz Flow (Skin Type, Beginner Routine)
- Quiz Result Screen
- Starter Routines (static)
- Sign Up / Log In
- Email Verification Holding Screen

## Pro User Screens (additional)
- Routine Builder
- Daily Routine Tracker
- Routine Completion Screen
- Routine History (calendar/list view)
- Pro Quiz Flows (Beauty Style, Routine Optimiser, Ingredient Match)
- AI Tool Screens (Product Recommendation Helper, Ingredient Explainer)
- Saved Favourites
- Account Dashboard

---

# 7. MVP Priority Journeys

These are the journeys that define the MVP. Build these first.
Everything else is a future feature or secondary flow.

## Free User
- [F1] Discovers a product via search bar and reads its wiki page
- [F3] Takes the Skin Type Quiz and sees a result
- [F4] Views Starter Routines as static reference
- [F5] Signs up for a free account (triggered by soft prompt)
- [F6] Encounters a locked Pro feature and sees the upgrade modal

## Pro User
- [P1] Completes daily routine and receives completion summary + homepage redirect
- [P2] Builds a custom routine in the Routine Builder

---

# 8. Core Value Loop

The shortest path from a new user opening the app to receiving
Glowpedia's core value:

1. User arrives on homepage
2. User searches for a product they've heard of (or browses the dropdown)
3. User reads the product wiki page — understands what it is,
   what it's good for, and whether it suits them
4. User sees the Top 3 Picks and taps a Buy link (optional)
5. User notices the quiz CTA and takes the Skin Type Quiz
6. User receives a skin type result with product suggestions
7. User is prompted (softly) to save their results — signs up
8. User returns the next day and checks the Routines page

If Glowpedia does this well, it will feel like a trusted guide
that meets the user where they are and grows with them. If it
does not, it will feel like disconnected features with no reason
to return.

---

# 9. Design Intent

The experience of Glowpedia should feel:
- **Calm and guided** — the user always knows what to do next,
  but is never rushed or pushed
- **Educational without being clinical** — information is clear
  and structured, but the tone is warm and the design has personality
- **Worth returning to** — streaks, tips, and new content give
  users a reason to come back, without manipulative dark patterns

It should not feel like:
- A beauty brand's marketing site — commercial, aspirational,
  selling an image
- A clinical health or medical reference — cold, jargon-heavy,
  intimidating
- A gamified habit app — reward-obsessed, notification-heavy,
  anxiety-inducing

The user journeys above should guide all navigation, feature
prioritisation, and screen design decisions throughout the build.