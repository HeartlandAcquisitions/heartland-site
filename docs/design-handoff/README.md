# Handoff: Heartland Acquisitions Marketing Site

## Overview
Single-page marketing site for **Heartland Acquisitions** (DBA of Ivarix Capital LLC), a Kansas City cash home-buying company. The page exists to convert visitors into seller leads via a single primary CTA: enter your home address and get a free cash offer.

Sections, in order:
1. **Sticky nav** — brand mark, anchor links, phone, "Get Your Offer" button
2. **Hero** — headline, supporting copy, four pill stats, address-capture form card
3. **Marquee strip** — scrolling value-prop ticker
4. **Process** — three numbered steps (Tell us → Get offer → Pick close date)
5. **Why us instead of using a realtor** — side-by-side compare (agent route vs. direct route)
6. **Reviews** — empty-state ("Reviews coming soon") with CTA back to the form
7. **FAQ** — 12 SEO-targeted accordion questions
8. **CTA strip** — full-bleed olive band with cash-offer CTA + phone
9. **Footer** — brand, link columns, legal line

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, layout, copy, and behavior. They are **not** production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (Next.js, Astro, WordPress, Webflow export, etc.) using its established patterns, component library, and asset pipeline. If no codebase exists yet for this site, build it in Next.js + Tailwind (most natural fit for the structure here) or whatever the team standardizes on.

A few specifics that should NOT be carried over verbatim:
- The inline `<style>` block — port to the codebase's styling system (Tailwind, CSS Modules, vanilla-extract, etc.).
- The submit-button JS stub — replace with a real form handler that POSTs to the lead system (Zapier, HubSpot, custom endpoint, whatever the business uses).
- Inline SVGs are fine to keep, but consider extracting common ones (check, x, plus, phone, arrow) to an icon component.
- The hero image (`assets/hero-house.png`) is an AI-generated placeholder. Swap for real photography before launch.

## Fidelity
**High-fidelity.** Final copy, final colors, final type scale, final spacing. Recreate pixel-for-pixel. The only intentionally open elements are real photography and a real form backend.

## Screens / Views

This is a single landing page at `/`. Section-by-section spec below.

### Global

- **Max content width:** 1280px (`.wrap` container, 32px horizontal padding)
- **Section vertical rhythm:** 120px top/bottom (`section.s`)
- **Section heads (Process, Why Us, Reviews, FAQ):** centered title + centered subtitle, max 880px wide. No eyebrow labels above titles (these were removed by request).
- **Hero is the exception:** left-aligned 2-column layout (copy on left, form card on right).

### Nav (sticky)
- 72px tall, cream background `#f5f1e8`, 1px bottom hairline `rgba(14,15,10,0.10)`
- Left: brand mark (34×34 olive square, white "H", JetBrains Mono 800 18px) + "Heartland Acquisitions" wordmark (Manrope 700 17px, -0.01em)
- Center-right: nav links (Process, Why Us, Reviews, FAQ, Blog) — Manrope 500 15px, color `#3a3d33`, hover olive
- Right: phone link with phone icon (Manrope 700 15px) + "Get Your Offer" button (dark `#0e0f0a` bg, cream text, 12px×22px, 10px radius)

### Hero
- Background: `assets/hero-house.png` cover-positioned, with a left-to-right dark gradient overlay (`linear-gradient(100deg, rgba(14,15,10,.85) 0%, rgba(14,15,10,.55) 38%, rgba(14,15,10,.20) 60%, rgba(14,15,10,.40) 100%)`)
- Subtle SVG turbulence grain layer at 6% opacity, blend-mode overlay
- Layout: 2-column grid `1.15fr / .85fr`, 72px gap, padding `96px 0 120px`
- **Left column:**
  - "Locally Owned · Kansas City, MO" pill (cream-on-translucent, olive-light dot, uppercase 12px)
  - H1: **"Sell your home / on your terms."** (Manrope 800, 88px, -0.035em, line-height 0.96, cream). Second line `.accent` in olive-light `#8aa66a`
  - Lead paragraph: cream at 78% opacity, 19px, max-width 540px
  - Pill stat row (single line, no wrap): "No Fees" / "No Commissions" / "No Repairs" / "No Closing Costs" — each is olive-tinted pill with dot indicator
- **Right column — Offer Card:**
  - White card, 18px radius, heavy drop-shadow `0 30px 60px -20px rgba(0,0,0,.45)`
  - "Get your offer" eyebrow (olive, uppercase 12px)
  - H2: **"Get Your Free / Cash Offer Today"** (Manrope 800, 34px, -0.025em). "Today" in olive
  - Sub: "Takes 30 seconds. No obligation, ever."
  - Single field labeled "Property Address", placeholder **"Enter your home address here"**
  - Submit button: full-width, dark bg, cream text, 16px padding, "Get my offer" + arrow icon
  - Meta line: "No spam · No agents · Cancel anytime / By continuing you agree to our privacy policy."
  - Dashed divider, then: **"Call or text (816) 973-5420"**

### Marquee
- Dark `#0e0f0a` band, cream text, 14px Manrope 600, 0.12em tracking, 18px vertical padding
- Ticker items separated by olive-light dots: NO COMMISSIONS · CASH IN 7 DAYS · WE BUY AS-IS · PRIVATE SALE · YOU CHOOSE CLOSING DATE · NO REPAIRS NEEDED · ZERO FEES · LOCAL TO KC
- Two duplicate tracks animating `translateX(0 → -50%)` over 38s linear infinite

### Process (`#process`)
- Cream background
- Centered head: "Three steps. / *That's it.*" (em in olive) + centered sub
- 3-column grid of cards (24px gap), each card 18px radius, white, 1px hairline, hover lifts 3px
- Each card: olive-tinted square icon (52×52, 12px radius, `#f1ede1` bg), STEP NN label (JetBrains Mono 13px olive), H3 (28px Manrope 700), body (15.5px), JetBrains Mono pill tag at bottom
- Step 1 (~30 SECONDS): "Tell us about your home" — share address, no contractor visits, no obligation
- Step 2 (~1 HOUR AFTER WALKTHROUGH): "Get a fair cash offer" — comparable properties, condition, no-obligation offer within 1 hour
- Step 3 (7 TO 60 DAYS): "Pick your closing day" — local title company, you set timeline

### Why us (`#why`)
- Dark `#0e0f0a` background
- Centered head: "Why us instead / of *using a realtor.*" (em in olive-light)
- Subtitle (centered, max 680px): "Listing with an agent is a hassle that works for some. For everyone else, distressed homes, financial trouble, foreclosure, inherited properties, life changes... There is an easier route."
- 2-column compare card, 20px radius, 1px translucent border
- **Left col (.them):** "Traditional Sale" / "The agent route". 5 list items with X-icon (translucent gray bg):
  - Realtor fees, commission, repairs
  - Daily showings and walkthroughs
  - Months on the market with no offers
  - Financing contingencies and seller concessions
  - Flaky buyers
- **Right col (.us):** "Heartland Acquisitions" / "The direct route". Olive-tinted gradient bg, 5 check items with olive-light circle:
  - **$0 commission.** $0 fees. We cover closing costs.
  - Sell as-is. Leave anything you don't want.
  - One walkthrough by us, on your schedule.
  - Close in as little as 7 days, or whenever you're ready.
  - Cash offer, no surprises.

### Reviews (`#reviews`)
- Cream-2 `#ebe6d8` background
- Centered head: "Neighbors who've / *been there.*"
- **Empty state card** (white, 720px max, centered): chat-bubble icon, "Reviews coming soon." H3, body copy about being a newer company building reputation, olive CTA "Be one of our first stories" anchoring to `#offer`

### FAQ (`#faq`)
- Cream background
- Centered head: "Things people / *actually ask.*"
- Native `<details>`/`<summary>` accordion, hairline dividers, 28px vertical padding per item
- Summary: 22px Manrope 600, plus-icon affordance that rotates 45° on open and inverts to dark fill
- 12 questions, all SEO-targeted (How do I sell my house fast in Kansas City, comp methodology, fees, types of houses, repairs, timeline, cleaning out, tenants, inherited houses, wholesaler vs buyer, vs realtor, service area)
- First question is `open` by default

### CTA strip
- Olive `#3d4f2d` band, cream text, 96px vertical padding
- 2-col grid: large headline "Ready when / you are." + sub on left; cream CTA button + phone line on right

### Footer
- Dark `#0e0f0a`, 72px top padding, 32px bottom
- 4-column grid (1.4 / 1 / 1 / 1): brand block + tagline | Company links | Service area list | Get in touch (phone, email, hours)
- Bottom bar: **"© 2026 Ivarix Capital LLC DBA Heartland Acquisitions. All rights reserved."** + "Privacy · Terms · Disclosures"

## Interactions & Behavior

- **Nav anchors** smooth-scroll to section IDs (`#process`, `#why`, `#reviews`, `#faq`)
- **Sticky nav** stays pinned on scroll
- **Card hovers** (Process, Reviews when populated): translateY(-3px) + soft shadow, 200ms transition
- **Button hovers:** dark/olive variants both translateY(-1px), background darkens slightly, 120ms
- **Marquee:** continuous infinite linear scroll, 38s/cycle. Use `prefers-reduced-motion` to pause if implementing properly
- **Form submit:** currently a stub that disables button, swaps text to "Working on your offer..." then "Got it, we'll be in touch within 24 hrs". **Replace with real backend.**
- **FAQ:** native `<details>` semantics — keyboard-accessible by default. Summary plus-icon rotates 45° to X-shape when `[open]`
- **Input focus:** olive border + 3px olive-12% glow ring

## State Management
Minimal client state:
- Form input value
- Form submission state (idle / submitting / success / error)

No router or auth needed for this page. Lead submission should hit whatever lead-capture backend the team is using (recommend a serverless function that forwards to HubSpot/Zapier/email).

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#f5f1e8` | Page bg, nav bg, dark-section text |
| `--cream-2` | `#ebe6d8` | Reviews bg |
| `--ink` | `#0e0f0a` | Body text on cream, hero/why/footer bg, dark CTA |
| `--ink-soft` | `#1a1c14` | Hero base layer |
| `--paper` | `#ffffff` | Cards |
| `--olive` | `#3d4f2d` | Brand mark, accents on cream, CTA strip bg |
| `--olive-2` | `#5a7340` | Olive button hover |
| `--olive-light` | `#8aa66a` | Hero accent text, dark-section accents, marquee dots |
| `--muted` | `#6b6f5e` | Secondary text |
| `--line` | `rgba(14,15,10,0.10)` | Hairlines on cream |
| `--line-strong` | `rgba(14,15,10,0.18)` | Stronger hairlines, FAQ dividers |

### Typography
- **Sans:** Manrope (Google Fonts) — weights 400, 500, 600, 700, 800
- **Mono:** JetBrains Mono (Google Fonts) — weights 400, 500
- **Body:** 16px / 1.55 / weight 450
- **H1 hero:** 88px / 0.96 / 800 / -0.035em
- **H2 section:** 64px / 1.0 / 800 / -0.035em
- **H2 form card:** 34px / 1.08 / 800 / -0.025em
- **H3 step/card:** 28px / 1.15 / 700 / -0.02em
- **FAQ summary:** 22px / 600 / -0.015em
- **Eyebrows (process step num, marquee):** JetBrains Mono 13px / 500 / 0.08em uppercase

### Spacing scale
Cards 18–20px radius. Buttons 10–12px radius. Pill stats 999px.
Section padding: 120px vertical. Hero padding: 96px top / 120px bottom.
Card internal padding: 32–40px. Container max 1280px, 32px gutter.

### Shadows
- Card (offer): `0 30px 60px -20px rgba(0,0,0,.45), 0 8px 20px -10px rgba(0,0,0,.3)`
- Hover lift (process/review cards): `0 24px 40px -24px rgba(0,0,0,.18)`

## SEO Requirements

This page already has:
- `<title>`: "Heartland Acquisitions — Sell Your Kansas City House Fast for Cash | We Buy Houses KC"
- Meta description targeting Kansas City cash-home-buyer keywords
- Open Graph tags
- **LocalBusiness JSON-LD schema** with full KC metro service area
- **FAQPage JSON-LD schema** with all 10 primary FAQ Q&A pairs

Carry all of this over to the rebuilt site. The FAQ schema in particular is what gets the page picked up by Google rich results and ChatGPT-style answer engines.

## Assets
- `assets/hero-house.png` — AI-generated placeholder of a Kansas City craftsman home. **Replace with real photography** before launch.
- All icons are inline SVG (no external icon library). Likely worth extracting to a shared `<Icon>` component when porting.
- All fonts loaded from Google Fonts CDN.

## Files
- `Heartland Acquisitions.html` — full standalone prototype
- `assets/hero-house.png` — hero background

## Business Details to Hard-code
- Phone: **(816) 973-5420** (use `tel:8169735420`)
- Email: hello@heartlandacq.com (placeholder — confirm)
- Legal: **Ivarix Capital LLC DBA Heartland Acquisitions**
- Service area: KC metro on both sides of the state line — Jackson, Clay, Cass, Platte counties (MO) + Wyandotte, Johnson counties (KS); cities listed in footer and FAQ
