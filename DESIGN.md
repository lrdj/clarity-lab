---
name: The Clarity Lab
description: A pale marine-bulletin system — paper, ink, and one signal-red accent, built for a precise, actionable call rather than a mood
colors:
  paper: "#f4efe4"
  paper-deep: "#eae1cd"
  ink: "#1b2a3d"
  ink-muted: "#4a5773"
  hairline: "rgba(27, 42, 61, 0.22)"
  signal: "#a8362b"
  signal-soft: "rgba(168, 54, 43, 0.12)"
  signal-deep: "#8f2c22"
  hero-accent: "#e0a999"
  hero-text-shadow: "rgba(0, 0, 0, 0.35)"
  button-shadow-rest: "rgba(27, 20, 12, 0.12)"
  button-shadow-hover: "rgba(27, 20, 12, 0.22)"
typography:
  display:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.9rem, 5.4vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  page-title:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.9rem, 4.4vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.1
  hero-banner:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.6rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
  article-heading:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.1
  faq-summary:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.1
  lede:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-compact:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "1rem"
    fontWeight: 700
  button-small:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "0.875rem"
    fontWeight: 700
  table-body:
    fontFamily: "'Spline Sans Mono', 'Courier New', monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
  table-compare:
    fontFamily: "'Spline Sans Mono', 'Courier New', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "'Spline Sans Mono', 'Courier New', monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  label-small:
    fontFamily: "'Spline Sans Mono', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  label-nav-mobile:
    fontFamily: "'Spline Sans Mono', 'Courier New', monospace"
    fontSize: "0.7rem"
    fontWeight: 400
  mark-mobile:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "0.9rem"
    fontWeight: 700
rounded:
  none: "0px"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.75rem"
  4: "2.75rem"
  5: "4.5rem"
  6: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.9em 1.6em"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.9em 1.6em"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.9em 1.6em"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    rounded: "{rounded.none}"
    padding: "0.9em 1.6em"
---

# Design System: The Clarity Lab

## Overview

**Creative North Star: "The Shipping Forecast"**

This system exists to prove one idea: clarity isn't a mood, it's a decision. A shipping forecast doesn't inspire you — it gives you exactly what you need to make a confident go/no-go call, in the same terse, structured form every time. That's the register this whole site now speaks in: pale bulletin paper, navy ink, hairline rules, tabular data rendered as an actual ledger rather than a bulleted list pretending to be one. Where something needs to matter, it gets the one signal-red accent this system permits itself. Everywhere else, the paper and the ink do the work.

It replaced an earlier, wrong-headed attempt at the same brief — a dark, bioluminescent night-sea world that was technically accomplished but fought the brand's real asset: bright, documentary daylight photography of an actual place. This system was chosen specifically because a pale, paper-toned world works *with* that photography instead of against it, and because "a precise, actionable call" is a closer, less sentimental match for what Clarity Lab actually sells than a map (too clichéd a wayfinding device) or a growth diary (too sentimental for a product about agency, not reflection).

**Key Characteristics:**
- Pale bulletin paper throughout — no page in this system uses a dark ground.
- Exactly one accent colour (signal red), spent deliberately: primary actions, `em` emphasis inside headings, and nothing else.
- Every corner in the system is square. Zero `border-radius` anywhere — the one deliberate exception is native browser chrome (audio player, `<details>` marker) that can't be un-rounded without losing platform behaviour.
- Three typefaces with distinct jobs, never substituted for each other: a slab display face for headings and buttons, a humanist serif for reading, a monospace for anything that is data — prices, dates, captions, navigation labels.
- Real photography only. No page in this system carries an illustrative, AI-generated, or stock image as a hero.

## Colors

A restrained strategy: paper and ink neutrals carry the whole surface, and one accent is spent only where it means something.

### Primary
- **Signal** (`#a8362b`): the only accent in the system. Used for primary buttons, `em` emphasis inside `h1`/`h2`/`h3`, active/hover states on links and nav items, list bullets, quote rules, and table CTAs. Never used decoratively — if it's red, it's asking for action or marking the one important word in a sentence.
- **Signal deep** (`#8f2c22`): primary button hover only, not a standalone token for anything else.

### Neutral
- **Paper** (`#f4efe4`): the ground. Every page in this system sits on this colour or `paper-deep`; there is no dark-mode-style alternate ground.
- **Paper deep** (`#eae1cd`): the alternating panel tone used to separate adjacent sections without a border (`.bl-section--panel`).
- **Ink** (`#1b2a3d`): primary text, and — inverted — the footer's background (the one place the system goes dark, deliberately: a closing band, not a competing world).
- **Ink muted** (`#4a5773`): secondary text (captions, metadata, excerpts). Darkened once during the build after a contrast check against `paper-deep` came back tighter than intended (4.66:1) — treat this value as already-corrected, not a starting point to lighten.
- **Hairline** (`rgba(27, 42, 61, 0.22)`): every rule, border, and table division in the system. There is no second border colour.

### Named Rules
**The One Accent Rule.** Signal red is the only colour in the system that means something when you see it. It never appears as a decorative field, a background tint on more than a soft 12%-opacity wash, or a colour choice made for variety. If a second saturated colour is needed, that is a sign the system needs a deliberate second accent added here — not a one-off hex value in a component file.

**The Hero Exception.** The hero's `em` emphasis uses `#e0a999` (a dusty rose), not signal red — the one place in the system a heading's emphasis colour differs from the sitewide rule, chosen because it read better against warm photographic skies than the cooler signal red did. Confined to `.bl-hero__title em`; do not let it leak into any other component.

## Typography

**Display Font:** Bitter (self-hosted variable, weights 500–800), with Georgia/Times New Roman fallback.
**Body Font:** Source Serif 4 (self-hosted variable, weights 400–700, italic included), same fallback stack.
**Label/Mono Font:** Spline Sans Mono (self-hosted, weight 400), Courier New fallback.

**Character:** A slab display face carrying real weight and confidence, paired with a humanist serif built for sustained reading, and a mono face reserved strictly for things that are actually data. The pairing reads as a printed bulletin, not a marketing deck.

### Hierarchy
- **Display** (700, `clamp(1.9rem, 5.4vw, 4.1rem)`, 1.1): the home page hero only. A shorter `clamp(1.6rem, 3.6vw, 2.75rem)` variant (`.bl-hero--banner .bl-hero__title`) covers every other page's hero — blog posts, the podcast archive — so a two-line title never overruns its banner.
- **Headline** (700, `clamp(1.6rem, 3.2vw, 2.4rem)`, 1.1): section headings (`.bl-section h2`).
- **Title** (700, 1.15–1.25rem): card and entry titles (`.bl-card h3`, `.bl-entry__title`, `.bl-episode-card__title`).
- **Body** (400, 1.0625rem, 1.6): default paragraph and list text. A lede variant (1.25rem) opens a section's first paragraph.
- **Label** (400, 0.75–0.875rem, mono, often uppercase with `0.02–0.04em` tracking): dates, captions, nav links, table headers, episode metadata. This is the system's data voice — used for everything that is a fact rather than prose.

### Named Rules
**The Mono-Is-Data Rule.** Spline Sans Mono is never used for opinion or narrative — only for things that are factually true regardless of who's reading: dates, prices, durations, captions, navigation labels. If a mono label is describing something subjective, it's the wrong face for that string.

## Layout

A single content column (`.bl-section__inner`, max-width `68rem`) with an internal reading measure (`.bl-prose`, max-width `40rem`) for anything meant to be read rather than scanned. Section vertical rhythm is generous and constant: `7rem` (`--space-6`) top and bottom on every `.bl-section`, tightening only on narrow phones (`max-width: 30rem` drops horizontal padding, not vertical).

Two-column layouts exist but are used deliberately, not as a default: `.bl-pair` (equal 1fr/1fr, image-and-text sections, ≥56rem) and `.bl-gallery` (1/2/3 columns depending on viewport, for photo sets). The one asymmetric exception is `.bl-layout` (2fr/1fr, ≥56rem) — reserved for the podcast archive's main-content-plus-Subscribe-sidebar, where a persistent action beside a long scrolling list is a genuine content need, not a template default. Its aside is `position: sticky` on desktop, and stacks to plain single-column below `56rem` with the aside falling after the full list — never introduce a second sticky sidebar elsewhere in the system without the same justification.

Breakpoints in use: `30rem` (mobile padding), `36rem` (gallery 2-up), `48rem` (`.bl-grid-2`, `.bl-quotes` 2-up), `56rem` (`.bl-pair`, `.bl-gallery` 3-up, `.bl-layout` 2-column).

## Elevation & Depth

Flat by default. The system conveys structure with hairline borders and rules (`--bl-hairline`, 1px, used on every card, table, and section division) rather than shadow. The one place true elevation appears is the primary button's hover state — a soft, blurred shadow (`0 6px 16px rgba(27, 20, 12, 0.22)`) paired with a 1px lift, both removed at rest (`0 1px 2px` only). No card, image, or panel in the system carries a resting shadow.

### Named Rules
**The Hairline-Not-Shadow Rule.** Depth and separation come from a 1px rule at 22% ink opacity, not from a shadow. A component reaching for `box-shadow` to separate itself from the page is using the wrong tool — reach for a border first.

## Shapes

Every corner in the system is square — `border-radius` is not used anywhere in `bulletin.css`. Buttons, cards, figures, tables, the nav, the footer: all sharp rectangles. This is a deliberate carry-over discipline from the system's bulletin-form register (official paperwork doesn't have rounded corners) and a deliberate difference from the site's previous "Bioluminescent Wake" attempt, which used pill-shaped buttons.

### Named Rules
**The Square Corner Rule.** No component in this system may introduce `border-radius` without a named reason strong enough to go here first. Native browser chrome (the audio player's scrubber, a `<details>` disclosure triangle) is the only exempted rounding, because it isn't drawn by this system's CSS.

## Components

### Buttons
- **Shape:** square corners, no exception.
- **Primary** (`.bl-btn--primary`): signal-red background, paper text, 1px solid signal border, `0.9em 1.6em` padding. Rests nearly flat (`0 1px 2px`), lifts 1px with a soft shadow on hover/focus, background deepens to `#8f2c22`.
- **Ghost** (`.bl-btn--ghost`): transparent background, ink text, hairline border; hover swaps both to signal red. Used for secondary actions (per-tier booking links on cards) where the primary button would over-claim importance.
- **Small** (`.bl-btn--small`): same visual language, tighter padding (`0.55em 1.1em`) and 0.875rem type — used inside cards where a full-size button would dominate.
- **Focus:** every interactive element in the system gets a 2px solid signal outline, 3–4px offset. No component overrides this away.

### Navigation
- Fixed, full-width, paper background, hairline bottom border. Carries a wordmark (`.bl-nav__mark`, display face), text links (`.bl-nav__link`, mono, ink-muted, signal on hover), and a bordered CTA pill... no — a bordered CTA rectangle (`.bl-nav__cta`).
- **Default state is visible.** Only on pages with a `.bl-hero` does `bulletin.js` add `.bl-nav--hero-mode`, which starts the nav hidden and reveals it once the visitor scrolls past the hero — the system's one deliberate "no chrome above the fold" moment. A hero-less page (booking, 404) never hides its nav; there's nothing to be chrome-free above.

### Hero
- Full-bleed real photograph, dark gradient scrim (`rgba(14, 20, 28, ...)`, 88% at the base fading to 10%) for text legibility, headline anchored to the bottom of the frame.
- Two heights: full (`min(100dvh, 50rem)`, home page only) and banner (`min(60dvh, 26rem)`, every other hero — blog posts, podcast archive/episodes) with its own smaller title scale so a two-line title never forces the section taller than intended.

### Cards
- **Corner style:** square.
- **Background:** paper (not paper-deep, even inside a panel section — cards stay one step lighter than their container).
- **Border:** 1px hairline, no shadow.
- **Internal padding:** `--space-3` (1.75rem).
- Variants: `.bl-card` (remote-option tiers), `.bl-episode-card` (podcast archive), both share the same visual language.

### Tables
- Rendered as an actual bulletin ledger, not a styled list: mono figures, uppercase muted column headers, hairline row dividers, no zebra striping, no cell backgrounds. Row labels (`<th scope="row">`) sit in ink-muted; column headers in ink, display face, for the comparison table specifically (`.bl-table--compare thead th`) where they're naming a whole tier rather than a data field.
- Wrapped in `.bl-table-wrap` (`overflow-x: auto`) whenever a table has more than two or three columns, so it scrolls on narrow viewports instead of squeezing.

### Checklist
- A rotated square (diamond) bullet in signal red, not a tick, dot, or dash — `.bl-list li::before`. Deliberately abstract rather than claiming to be a checkmark icon.

### FAQ
- Native `<details>`/`<summary>`, no JS. An authored SVG chevron (never a Unicode `+`/`−` — an earlier draft used those and it was flagged as a floor violation) rotates 180° on open.

### Entry list (blog index, podcast archive)
- Date (mono, uppercase, muted) → title (display face, link) → excerpt (muted), hairline rule between entries. Reads as a dispatch log, which is the point — the same device works for blog posts and podcast episodes without modification.

### Podcast-specific
- Episode cover art (`.bl-episode-cover`, 8rem square, hairline border) is real, already-published artwork (also used on Apple Podcasts) — never omit it in favour of a generic placeholder.
- `audio.bl-audio` is themed only via `accent-color: var(--bl-signal)` — native browser chrome otherwise, no custom player skin.

## Do's and Don'ts

### Do:
- **Do** spend signal red only on primary actions and `em` emphasis — treat any third use as a system decision, not a one-off.
- **Do** use real, documentary photography for every hero. This system was chosen specifically because it works with real daylight photography; an illustrative or AI-generated hero image undoes the reason it exists.
- **Do** use the mono face for anything that is a fact (date, price, label) and the serif for anything that is prose, without mixing the two roles.
- **Do** keep every corner square. A rounded component is a different design system wearing this one's colours.

### Don't:
- **Don't** add a kicker or eyebrow label above a heading, on this site or any future page in this system — an absolute craft-floor ban, caught and removed twice during this system's build (once on the home page, once on the 404 page) before it shipped either time.
- **Don't** introduce a second sticky sidebar without the same "persistent action beside a long list" justification `.bl-layout` was built for on the podcast archive — it is an exception, not a pattern to reach for by default.
- **Don't** use `box-shadow` for resting-state depth. Reach for a hairline border first; shadow is reserved for the primary button's hover state only.
- **Don't** substitute Unicode glyphs or emoji for an icon. The FAQ's chevron is an authored SVG for exactly this reason.
