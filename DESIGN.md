---
name: The Clarity Lab
description: GOV.UK Design System chrome softened with a nature-named earth palette and giant highlighter-marked headlines
colors:
  rose-tan: "#D19C97"
  viola: "#7E6EAC"
  cornflower-blue: "#93CCEA"
  gardenia: "#F0EEE9"
  cobblestone: "#A89A91"
  mocha-mousse: "#A78C8B"
  willow: "#9A8B4F"
  tendril: "#8A9A5B"
  ink: "#0b0c0c"
  focus-yellow: "#ffdd00"
  link-blue: "#1d70b8"
  signal-green: "#4CAF50"
  footer-sage: "#B4C4AE"
typography:
  display:
    fontFamily: "HelveticaNeue, 'Helvetica Neue', Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.45em, 8vw, 5em)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "HelveticaNeue, 'Helvetica Neue', Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.07
  title:
    fontFamily: "HelveticaNeue, 'Helvetica Neue', Arial, Helvetica, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.04
  body:
    fontFamily: "HelveticaNeue, 'Helvetica Neue', Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  none: "0px"
  button: "9px"
  circle: "50%"
spacing:
  sm: "15px"
  md: "22px"
  lg: "30px"
  xl: "50px"
components:
  button-primary:
    backgroundColor: "{colors.signal-green}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0.75em 1.25em"
  button-primary-hover:
    backgroundColor: "#388E3C"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0.75em 1.25em"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "0.75em 1.25em"
  button-secondary-hover:
    backgroundColor: "#e0e0e0"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "0.75em 1.25em"
---

# Design System: The Clarity Lab

## Overview

**Creative North Star: "The Civic Croft"**

This is GOV.UK Design System chrome — flat, squared, built for tax forms and benefit claims — carrying a pastoral, nature-named accent palette and one oversized signature move: a giant uppercase hero headline with hand-highlighted phrases. The base structure (grid, type scale, focus states, component markup) is unmodified GOV.UK Frontend running in its "unbranded" configuration. Everything that reads as "Clarity Lab" rather than "a government service" is a thin layer on top: eight named custom-property colours, one enlarged and highlighted heading style, and a handful of per-page inline overrides that don't generalise into a system.

This file documents the implementation exactly as built — a baseline for reference, not a set of choices the next visual direction is obliged to keep.

**Key Characteristics:**
- GOV.UK Frontend (unbranded variant) as the unmodified structural and accessibility base.
- A fixed eight-colour named palette (Gardenia, Tendril, Willow, Mocha-mousse, Cobblestone, Rose-tan, Viola, Cornflower-blue) defined once as CSS custom properties, applied inconsistently.
- One signature composition: full-bleed hero (video or image) behind a giant uppercase headline split across two `<mark>`-highlighted phrases.
- A large population of one-off hex colours used only in a single page's hero front matter, outside the named palette.
- Flat, sharply-squared GDS surfaces everywhere except buttons, which carry a hand-added 9px radius with no corresponding rationale elsewhere in the system.

## Colors

Eight named earth/pastel tones sit on top of GDS's own functional colour set; the named tones are the only part of the palette defined once and reused rather than picked per page.

### Primary
- **Rose-tan** (#D19C97): the most-used accent — the colour most often assigned to the highlighted half of a hero headline (`hero-accent`) across the pages that use it.

### Secondary
- **Viola** (#7E6EAC): used for inset-text left borders and as a secondary hero accent.

### Tertiary
- **Cornflower-blue** (#93CCEA): part of the named palette but the least-used of the eight in practice.

### Neutral
- **Gardenia** (#F0EEE9): warm off-white, used as an occasional page background.
- **Cobblestone** (#A89A91): warm grey-brown, named but rarely applied directly.
- **Mocha-mousse** (#A78C8B): dusty brown-mauve, named but rarely applied directly.
- **Willow** (#9A8B4F): muted gold-olive, named but rarely applied directly.
- **Tendril** (#8A9A5B): olive green, named but rarely applied directly.
- **Ink** (#0b0c0c): GDS's own body/heading text colour, unmodified.

### Functional (inherited from GOV.UK Frontend)
- **Focus Yellow** (#ffdd00): the statutory GDS focus-state colour; Clarity Lab softens its ring (`0 0 0 4px rgba(255,221,0,0.5)`) but keeps the colour itself.
- **Link Blue** (#1d70b8) / visited #4c2c92 / hover #003078: unmodified GDS link states.
- **Signal Green** (#4CAF50): the Clarity Lab override for the primary button background, replacing GDS's own default button green (#00703c) entirely.
- **Footer Sage** (#B4C4AE): the default footer background; overridden to near-black (#001011) with white text on at least one page (`/retreats`), which is the only page that diverges.

### Named Rules
**The Per-Page Accent Rule.** Hero headline colours (`hero-mark`, `hero-accent`) are set per page in Jekyll front matter, not drawn from one governing rule. Beyond the eight named tokens above, more than a dozen further one-off hex values appear (e.g. `#F1E068`, `#FFCC4E`, `#E7A4BC`, `#586994`, `#A6C36F`) each used on only a single page. No page's hero colour choice predicts another's — this is experimentation captured in code, not a resolved system.

## Typography

**Display/Body Font:** `HelveticaNeue, "Helvetica Neue", Arial, Helvetica, sans-serif` — GOV.UK Frontend's "unbranded" stack. (GDS's branded stylesheet, which specifies "GDS Transport", is also loaded in `<head>` but the unbranded stylesheet loads after it and wins on every declared property.)

**Character:** A civic-service system typeface carrying one theatrical exception — the hero headline — while every other text role stays exactly as GOV.UK Frontend ships it.

### Hierarchy
- **Display / Hero** (700, 2.45em → 5em at the 640px breakpoint, line-height 1.14–1.17, uppercase, 0.5em text-indent): the `.inyourface` override on `govuk-heading-xl`, used only for the page hero `<h1>`, always split into two `<mark>`-highlighted phrases.
- **Headline** (`govuk-heading-xl`, 700, 2rem → 3rem at 40.0625em, line-height ~1.04–1.09): unmodified GDS extra-large heading, used for non-hero page titles.
- **Title** (`govuk-heading-l`, 700, 1.5rem, line-height 1.04): unmodified GDS large heading, used for section headers ("What do I get out of it?", "Compare your options:").
- **Lead body** (`govuk-body-l`, 400, 1.125rem, line-height 1.11): unmodified GDS lead paragraph, used for the first paragraphs under a hero.
- **Body** (`govuk-body`/`p`, 400, 1rem → 1.1875rem at 40.0625em, line-height 1.25–1.32): unmodified GDS default paragraph.

### Named Rules
**The Highlighter Rule.** Every hero `<h1>` is two phrases, each wrapped in `<mark>`, each coloured independently via front matter. The device (giant, uppercase, highlighted) is consistent; the colours behind it are not.

## Layout

Unmodified GOV.UK Frontend grid: `govuk-grid-row` / `govuk-grid-column-{half,one-third,two-thirds,three-quarters,full}`, contained by `govuk-width-container` (max-width 960px, 15px side margins) wrapping `govuk-main-wrapper`. Breakpoints are GDS's own: mobile 20rem, tablet 40.0625rem, desktop 48.0625rem.

The one deviation from stock GDS layout is the hero: it breaks out of `govuk-width-container` to run full-bleed (video or background-image), with the heading column floated above it via `position: relative; z-index: 1`, before the page returns to the standard contained grid for all subsequent content. The service navigation band above the hero, and the footer band below the content, both also run full-width.

## Elevation & Depth

Flat throughout. GOV.UK Frontend's own default button carries a native 2px bottom shadow (a "pressed paper" affordance, with the button shifting down 2px on `:active`), but Clarity Lab's button override explicitly removes it (`box-shadow: none`) on both the primary and secondary variants. No other component in the implementation uses a shadow. Depth, where it reads at all, comes from flat colour blocks (the `<mark>` highlights, the footer band) rather than elevation.

## Shapes

GDS's default form language is sharply squared: `border-radius: 0` on virtually every surface, with radius used only for circular elements (avatar-style icons, GDS's own 50% radii). The one exception is the button component, which carries a hand-added 9px radius. Per the incumbent implementation, this is an isolated override, not a system-wide softening — no other rounded corner, card, or container in the codebase picks it up.

## Components

### Buttons
- **Shape:** 9px radius (ad hoc override; GDS base is square).
- **Primary:** background #4CAF50, white text, 1px solid #4CAF50 border, padding 0.75em 1.25em, no shadow.
- **Hover:** background darkens to #388E3C.
- **Focus:** 3px solid #ffdd00 outline plus a softened `0 0 0 4px rgba(255,221,0,0.5)` ring (GDS's own focus ring style adjusted).
- **Secondary:** white background, black text, 1px solid #ccc border, same 9px radius; hover background #e0e0e0.

### Navigation
- Full-width band above the hero. Left: an SVG logo lockup (`claritylab-lockup.svg`). Right: a three-item text link list (Blog, Podcast, a highlighted "book a discovery call" link using the Rose-tan mark colour). Collapses to GDS's standard "Menu" toggle button below the 640px breakpoint — unmodified GDS mobile nav behaviour.

### Hero (signature)
- Full-bleed looping muted video, or a background image, behind a two-column grid row.
- One giant uppercase `<h1>` in two `<mark>`-highlighted phrases, colours set per page via front matter rather than a fixed rule (see Named Rules above).

### Footer
- Full-width band, default background Footer Sage (#B4C4AE), small (`font-size: small`) licence-style legal copy and a copyright line naming the parent company. No footer navigation links. One page (`/retreats`) overrides the band to near-black (#001011) with white text — the only such divergence in the codebase.

### Checklist list
- `.cl-check` — replaces the default list marker with a custom checkmark icon (`cl-check.png`), 1.5em icon size, 2em left padding.

### Tables
- Native `govuk-table` used verbatim (caption, header row, row headers) for pricing and comparison grids — no custom styling layered on GDS's own table component.

## Do's and Don'ts

### Do:
- **Do** inherit GOV.UK Frontend's native focus, keyboard, and ARIA behaviour unmodified on every interactive element — it is the one part of this system that is genuinely load-bearing.
- **Do** treat the eight named custom-property colours (Gardenia, Tendril, Willow, Mocha-mousse, Cobblestone, Rose-tan, Viola, Cornflower-blue) as the closest thing this implementation has to a real palette; they are the only colours defined once and reused rather than invented per page.

### Don't:
- **Don't** assume any page's hero accent colour predicts another's — it's chosen per page in front matter, and more than a dozen one-off hex values exist outside the named palette.
- **Don't** treat the button's 9px radius or shadow removal as evidence of a deliberate "soft GDS" design language — it's an isolated override with no counterpart anywhere else in the flat, square GDS base.
- **Don't** reuse the near-black footer override from `/retreats` as a pattern — every other page uses the Footer Sage default.
