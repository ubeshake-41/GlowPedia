# Glowpedia — Master Plan

## 🌟 Overview

Glowpedia is an interactive, fandom-style skincare and cosmetics platform designed for teens. It combines structured, beginner-friendly education with light habit-building features to help users understand products and build simple, consistent routines.

The platform is designed to feel like exploring a clean, modern “beauty knowledge world” — not just reading a website.

---

## 🚨 The Problem (Core Foundation)

Many teenagers, especially those without access to social media, struggle to find skincare and beauty information in a single, comprehensive website.

Existing platforms can feel:
- Too feminine  
- Too commercialised  
- Overwhelming or unclear  

Users need a platform that:
- Clearly explains skincare and cosmetics  
- Feels neutral and accessible  
- Acts as an interactive guide  
- Helps them explore their needs through quizzes and routines  

---

## 🎯 Core Purpose

### Primary Goals
- Help users clearly understand skincare and cosmetic products  
- Help users build and maintain simple daily routines  

### Secondary Goals
- Encourage exploration and curiosity  
- Make learning feel easy and unintimidating  
- Build light daily engagement through progress tracking  

---

## 👥 Target Audience

### Age Range
15–18 years old  

### Experience Level
- Mixed knowledge  
- Predominantly beginners  

### User Characteristics
- Curious but often confused by skincare terminology  
- Influenced by trends (social media, peers)  
- Looking for clear, trustworthy, easy-to-understand guidance  
- Prefer visually clean, modern, and slightly aesthetic interfaces  

### Inclusivity
- Fully gender-neutral  
- Accessible and welcoming to all users  

---

## 🧠 Product Philosophy

Glowpedia should feel like:
- A clear guide, not an overwhelming expert system  
- A space to explore, not a rigid tool  
- A supportive companion, not a clinical resource  

---

## 🎨 Design & Experience Principles

### 1. Clean + Aesthetic
- Modern, minimal structure  
- Soft aesthetic touches  
- No clutter or overwhelming visuals  

### 2. Layered Depth (Glassmorphism)
- Frosted panels  
- Soft shadows  
- Subtle borders  
- Clear visual hierarchy  

### 3. Exploration Over Efficiency
- Encourage browsing and discovery  
- Make navigation feel like moving through a “world”  

### 4. Simplicity First
- Always prioritise clarity over detail  
- Avoid jargon  
- Use progressive disclosure for deeper learning  

---

## 🎯 UI Implementation Notes (Critical)

- Use Lucide icons throughout instead of emojis (**MANDATORY**)  
- Smooth `whileHover` lift animations (150–200ms) on all cards  
- Layered depth using:
  - Ambient orbs  
  - Gradient overlays  
  - Subtle shine effects  
- Reveal-on-hover CTAs:
  - “Explore”  
  - “Compare now”  
- Maintain a balance between interactivity and clarity  

---

## ✨ Experience Feel

Glowpedia should feel:
- Calm and approachable  
- Slightly playful, but not childish  
- Visually satisfying and smooth  
- Structured but not rigid  

### Avoid
- Overly gamified systems  
- Clinical or intimidating tone  
- Information overload  

---

## 🧭 Core User Journey

### Primary Flow
1. User lands on homepage  
2. Explores categories or featured content  
3. Clicks into product pages  
4. Learns through simple explanations  

Optional:
- Takes a quiz  
- Starts building a routine  

### Secondary Flow
- Returns to track routines  
- Gradually explores more content  
- Builds familiarity and confidence  

---

## 🧩 Core Features
## 🏠 Homepage

### Structure

#### Hero Section

Title: "Welcome to Glowpedia"

**Primary CTA — Product Search Bar**

A prominent search-style input bar, positioned directly below the
subtitle in the hero section. This replaces the generic
"Start Exploring" button as the primary entry point.

Behaviour:
- On tap/click: opens a categorised dropdown immediately (no typing required)
- While typing: filters dropdown results in real time
- On selection: navigates directly to that product's wiki page
- Placeholder text: "What do you want to learn about?"

Dropdown structure (categorised, always visible on open):

```
SKINCARE
  › Cleanser
  › Toner
  › Serum
  › Moisturiser
  › Sunscreen
  › Exfoliant
  › Eye Cream
  › Face Mask

COSMETICS
  › Foundation
  › Concealer
  › Blush
  › Mascara
  › Lip Gloss
  › Lip Balm
  › Lip Liner
  › Setting Spray

COMPARE
  › Serum vs Toner
  › Lip Gloss vs Lip Balm
  › Liquid vs Powder Foundation
```

Design notes:
- The bar uses the same border and radius as the design system inputs
- The dropdown uses the card background with a soft shadow
- Category headers (SKINCARE, COSMETICS, COMPARE) use the
  ALL-CAPS section label style from the design system
- Each product row has a small colour-coded icon matching
  its accent colour (blue = skincare, lavender = cosmetics,
  mint = compare)
- On mobile, the dropdown fills most of the viewport height
  and is scrollable

**Secondary CTA**

"Take a Quiz" button — unchanged, sits beside/below the search bar.
For users who do not know what they are looking for at all.

**Rationale**

The search-bar-with-dropdown approach serves both audience segments:
- Complete beginners can browse the categorised dropdown passively,
  learning the product taxonomy without being overwhelmed
- Users who have heard of a specific product (e.g. from a friend
  or social media) can type it and navigate directly
- It replaces the vague "Start Exploring" CTA, which gave beginners
  no direction and gave confident users no shortcut

---

#### Daily Tip Banner

Dynamic, rotating skincare tip displayed as a full-width bar
directly below the top navigation. Background: `--color-yellow-light`.
No gradient on this element.

---

#### Start Here Section

4 clickable category cards below the hero:
- Toner
- Serum
- Foundation
- Lip Products

Each links to that product's wiki page. These act as a
visual fallback/shortcut for users who prefer browsing
cards over using the search bar.

---

#### Compare & Learn Section

3 comparison entry points:
- Serum vs Toner
- Lip Gloss vs Lip Balm
- Liquid vs Powder Foundation

Each leads to a dedicated comparison page with:
- Side-by-side descriptions
- Comparison table
- Final verdict / recommendation

---

#### Trending Now Section

Horizontally scrollable product cards. Each card opens a
pop-up containing:
- Brief explainer
- Top 3 product picks
- "Learn more" link → full product wiki page

---

#### Notes

- Keep layout interactive but uncluttered
- The search bar is the hero — do not compete with it visually
- The Start Here cards and Trending section are secondary
  discovery surfaces, not the primary entry point

## 📄 Overview Page

- Displays a list of skincare/cosmetic products  
- Each product links to its dedicated informational page  

---

## 🧴 Product Wiki Pages (PRIMARY FEATURE)

- Clear, beginner-friendly explanations  

### Core Sections
- What it is  
- Benefits  
- How to use  
- Good for / Avoid if  

### Additional Features
- Expandable detailed sections (progressive disclosure)  
- Comparison tables  
- Subtypes (only when relevant)  

---

## ⚖️ Compare & Learn

- Simple side-by-side comparisons  
- Focus on clarity and decision-making  

---

## 🧠 Quiz System

- Beginner-friendly quizzes  
- Optional entry point  

### Outputs
- Skin type insights  
- Basic product suggestions  

### Interaction
Clicking a recommended product opens a pop-up with:
- Brief description  
- Top 3 brand recommendations  
- Link to the product’s main informational page  

*(This interaction should mirror the “Trending Now” pop-up system.)*

---

## 📋 Routine Tracker

- Simple checklist system  
- Light progress feedback  
- Streak tracking (non-intrusive)  

---

## 🎮 Gamification Strategy (Light Only)

### Included
- Progress bars  
- Streak indicators  
- Completion feedback  

### Not Included
- Heavy reward systems  
- Complex leveling mechanics  
- Game-first design  

**Goal:** Support habits, not distract from learning  

## 🤖 Glow AI — Pro Chatbot

### What It Is
Glow AI is Glowpedia's conversational AI assistant, exclusive to
Pro users. It is a persistent floating chatbot accessible from
every page — it feels like texting a knowledgeable friend, not
filling in a form. It uses plain, beginner-friendly language and
always connects answers back to Glowpedia's own wiki pages.
It does not replace the quizzes or wiki pages — it sits alongside
them as an on-demand layer for users who have a specific question
right now.

### Access

Pro users: Floating Glow AI button (bottom-right, persistent
on every page, sits above the bottom nav on mobile)
Free users: Tapping the button shows a locked preview with
a brief description and "Upgrade to Pro" CTA — never an empty
or broken interface


### Capabilities
1. #### Conversational Q&A
User asks any skincare or cosmetics question in natural language.
Example inputs:

"What does niacinamide do?"
"Is retinol okay for sensitive skin?"
"What's the difference between a toner and an essence?"

Glow AI responds in 2–4 short sentences in plain English,
linking to relevant Glowpedia wiki pages inline where helpful.
It may ask one follow-up question to personalise the answer.

2. #### Ingredient Scanner
User pastes an ingredient list from a product they own or
are considering buying.
Output:

Plain-English breakdown of key ingredients
Flags anything potentially irritating for their skin type
Overall rating: Good / Mixed / Be Cautious
Suggestion of a comparable Glowpedia-catalogued product
if relevant


3. #### Routine Reviewer
User asks Glow AI to review their routine. It pulls their
saved routine from their account.
Output:

What is working well
Conflicts flagged (e.g. Vitamin C + AHA in the same routine)
Gaps identified (e.g. no sunscreen in a morning routine)
Suggested additions, each linking to a wiki page

If no routine is saved, Glow AI prompts the user to build one
and links to the Routine Builder.

4. #### "Is This Worth It?" Product Checker
User names or describes a product. Glow AI gives a quick verdict.
Output:

Which skin types it suits
What the key ingredients do (2–3 bullets)
Verdict: Recommended / Situational / Skip
Whether a comparable product exists in the Glowpedia catalogue
Link to the closest wiki page

This is the most shareable Glow AI feature — designed for users
who see a product on social media and want an instant second opinion.

5. #### Routine Builder via Chat
User asks Glow AI to build them a routine.
Example input:

"Build me a simple morning routine for oily skin"
"What should my night routine look like if I have acne?"

Glow AI generates a step-by-step routine in the chat, then offers
an "Add to my routine" button that pre-populates the Routine Builder
with the suggested steps.

6. #### Personalised Daily Tips (homepage)
Pro users see a daily tip on the homepage that is generated
specifically for their skin type and current routine — not a
generic rotating tip. This replaces the static daily tip banner
for Pro users only.

### Design Notes

Glow AI responses always link to Glowpedia wiki pages, never
to external sites
External buy links appear only within wiki pages themselves
The chat panel slides up as an overlay — it does not navigate
the user away from their current page
Wiki page links inside the chat open as inline preview cards;
full navigation only happens if the user explicitly taps
"View full page"
Tone: warm, plain English, encouraging — never clinical,
never condescending
The floating button must not obscure key UI on any screen

---

## 💎 Monetisation Strategy

### Priority
Maximise user adoption and trust first  

### Pro Features Approach
- Present but not aggressive  
- Gently teased through:
  - Locked features  
  - Upgrade prompts  

Avoid:
- Interrupting core experience  

---

## 🎤 Content Style

### Tone
- Very simple and clear  
- Occasionally playful (especially on homepage)  

### Writing Style
- Short to medium length  
- Easy to scan  
- Minimal jargon  
- Friendly but not childish  

### Example
Instead of:
“Humectants improve epidermal hydration”

Use:
“Helps your skin stay hydrated and soft”  

---

## 🧱 Information Structure

### Content Depth
- Medium (balanced)  

### Learning Model
- Start simple → expand if user chooses  
- Encourage curiosity without forcing detail  

---

## 🧬 Brand Positioning

Glowpedia sits between:
- Fandom-style exploration (structured knowledge)  
- Beauty retail-style guidance (product-focused)  

### Unique Position
A teen-focused, interactive beauty knowledge platform that simplifies skincare and builds habits  

---

## 🚀 Long-Term Vision

Glowpedia aims to become:
- A trusted daily-use tool  
- A go-to place for understanding beauty products  
- A platform users return to for both learning and routine tracking  

---

## 🧭 Success Indicators

- Users understand skincare basics quickly  
- Users return regularly  
- Users feel more confident in product choices  
- High engagement without overwhelming complexity  

---

## ⚠️ Design Guardrails

### Always Avoid
- Overcomplicating content  
- Overloading with features  
- Over-gamifying the experience  
- Breaking visual consistency  

### Always Prioritise
- Clarity  
- Calm design  
- Ease of use  
- Smooth interaction  

---

## 🏁 Final Principle

Glowpedia is not just a website.

It is a **calm, interactive space where teens learn, explore, and build confidence in skincare — one step at a time.**