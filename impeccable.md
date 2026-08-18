# Impeccable — what's been done, and how it works

This file explains what the `impeccable` Claude Code skill has set up in this
project, what it built, and how to keep working with it. It's a reference,
not something the skill reads itself.

## What Impeccable is

A design skill (`.claude/skills/impeccable/`) that turns design requests —
new pages, redesigns, polish passes, accessibility audits — into a
repeatable process: capture product truth once, record the visual system
once, then let every design task read from both instead of re-deriving them.
Invoked as `/impeccable <command>` or by just asking for design work; it
infers the right command from context.

## What's configured

- **`PRODUCT.md`** (root) — durable product truth: who Clarity Lab serves,
  what the method is, the three tiers (Checkpoint/Breakthrough/Retreat,
  Mull-only for now), brand commitments (the "Clarity Lab Method®" name, no
  React), and — important — a note on `assets/i/` photo provenance after
  `croft-workshop.png` turned out to be AI-generated: which images are
  user-vetted-real and which are unverified. Read this before treating any
  image in that folder as real evidence.
- **`DESIGN.md`** (root) + **`.impeccable/design.json`** sidecar — documents
  the *incumbent* sitewide system: GOV.UK Frontend ("unbranded" variant)
  carrying a nature-named colour palette and a giant highlighter-marked
  hero headline. This is still accurate for every page **except** `/r`,
  which now runs its own, separate visual system (see below). It was
  captured as a baseline/anti-reference before touching `/r`, not as
  something `/r` had to preserve.
- **`.impeccable/surfaces/r-html.md`** — a surface brief for `/r` specifically:
  its scope, audience, chosen direction, and the reasoning behind it. This
  is where `/r`'s design decisions live, separately from the sitewide
  `DESIGN.md`, because only one page has moved to a new world so far.
- **`.impeccable/config.json`** — `buildPath: "code"` (build directly in
  code rather than generating an AI image comp first, chosen because the
  brand's whole premise is real, documentary photography — an AI-generated
  comp would work against that). Also carries the detector's ignore-list
  (currently one entry: Spline Sans Mono is intentionally outside the
  sitewide `DESIGN.md` type ramp).
- **`.impeccable/config.local.json`** — this machine's consent to run the
  design-quality hook (gitignored, per-machine).
- **The design hook** (`.claude/settings.local.json`) — runs a mechanical
  design-quality scan after edits to UI files and again on session stop.
  It flags things like undocumented colours/fonts/sizes, but it's advisory:
  most of what it flagged during this build were expected, intentional
  departures from the old sitewide `DESIGN.md` while building `/r`'s new
  system, not real defects.
- **`.impeccable/review/`** — the last screenshots taken of `/r`
  (`desktop.png`, `mobile.png`) for reference.

## What was built: `/r` redesigned twice

`/r` (the Mull retreat / remote coaching landing page) was rebuilt from its
original GOV.UK-based look through two full visual directions:

1. **Bioluminescent Wake** (built, then replaced) — a dark night-sea world
   with a pointer-driven glowing canvas trail. Technically solid but wrong
   for this brand: it fought the site's real, bright, documentary
   photography instead of working with it, and read as generic coastal
   mood rather than specifically Mull.
2. **The Shipping Forecast** (current) — a pale marine-bulletin world
   (paper ground, navy ink, one chart-red signal accent) built around the
   idea that Clarity Lab's real value is *agency*: turning a messy problem
   into one precise, actionable call, the way a shipping forecast turns
   weather into a go/no-go decision. Chosen after rejecting an Ordnance
   Survey map direction (too clichéd a "wayfinding = clarity" device) and a
   crofting-almanac/diary direction (too sentimental a metaphor for what
   the product actually does).

Files that make up the current `/r`:

- `r.html` — the page content.
- `_layouts/unbranded-landing.html` — `/r`'s own layout (used by no other
  page), carrying the direction contract as an HTML comment at the top of
  `<body>`.
- `assets/css/bulletin.css` — the whole visual system for `/r`: tokens,
  typography, components. Self-contained; doesn't use GOV.UK Frontend.
- `assets/js/bulletin.js` — one small behaviour: the nav is hidden on the
  first viewport by design (no chrome above the hero) and reveals once you
  scroll past it.
- `assets/fonts/bitter-var.woff2`, `sourceserif4-var.woff2`,
  `sourceserif4-italic-var.woff2`, `spline-mono-400.woff2` — self-hosted
  variable fonts (Bitter display, Source Serif 4 body, Spline Sans Mono for
  tabular data), fetched once from Google Fonts and served locally rather
  than loaded at runtime.
- `_includes/above-main-bulletin.html`, `_includes/footer-bulletin.html` —
  `/r`'s own nav and footer, separate from the shared `above-main.html` /
  `footer.html` used by the rest of the site, so this page's redesign
  couldn't leak into any other page.

All copy, pricing, and testimonials were preserved verbatim from the
original page throughout both directions; only the visual system changed.
Photography is real (Fionnphort as the hero, Stevie the dog, a boatbuilder's
workshop, the Ardalanish Weavers sign, and a candid black-and-white kitchen
conversation photo used as a small framed supporting image, not full-bleed)
— see `PRODUCT.md` for which images in `assets/i/` are confirmed real
versus unverified, including the one AI-generated image that was caught
and removed.

## Process notes worth knowing

- Both direction rounds went through a self-review against
  `.claude/skills/impeccable/reference/craft-floor.md` (this project's
  harness has no dedicated review subagent, so that pass ran inline,
  disclosed at the time rather than skipped). Round 1 caught several real
  violations after the fact (banned heading kickers, a repeated identical
  scroll animation, Unicode icons instead of authored SVG, a button
  contrast bug); round 2 loaded the craft floor before writing CSS and
  caught its one violation proactively.
- This machine's headless Chrome has a hard 500px floor on screenshot
  viewport width — genuine sub-500px mobile screenshots aren't visually
  verifiable here. Responsive behaviour below that was checked via computed
  layout and standard defensive CSS rather than a real screenshot.
- No AI-generated imagery was used or is intended for this site — the one
  case that slipped through (`croft-workshop.png`) was caught and removed;
  see `PRODUCT.md`'s Evidence on Hand section for the full note.

## Continuing the work

- `/impeccable document` — regenerate `DESIGN.md` from a page's built
  code. Don't run this against `/r` without deciding first whether `/r`'s
  system should become the new sitewide `DESIGN.md`, replace it outright,
  or stay a separate surface — right now it's deliberately kept separate.
- `/impeccable critique` / `/impeccable audit` — UX review / technical
  (a11y, perf, responsive) checks on any page.
- `/impeccable polish`, `bolder`, `quieter`, `clarify`, `adapt` — targeted
  refinement commands; see the skill's command table for the full list.
- `/impeccable hooks status` — check or reconfigure the design-quality
  hook described above.
- To extend the Shipping Forecast direction to another page: read
  `assets/css/bulletin.css` and `.impeccable/surfaces/r-html.md` first,
  then either reuse the same system or start a fresh `new-work` round —
  worth a deliberate decision rather than copy-pasting classes.
