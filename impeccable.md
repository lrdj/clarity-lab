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
  Mull-only for now), the home page's funnel logic (Retreat leads but routes
  to a free call; Checkpoint/Breakthrough get direct booking links — see
  Operating Context), brand commitments (the "Clarity Lab Method®" name, no
  React), and — important — a note on `assets/i/` photo provenance after
  `croft-workshop.png` turned out to be AI-generated: which images are
  user-vetted-real and which are unverified. Read this before treating any
  image in that folder as real evidence.
- **`DESIGN.md`** (root) + **`.impeccable/design.json`** sidecar — documents
  the *incumbent* system: GOV.UK Frontend ("unbranded" variant) carrying a
  nature-named colour palette and a giant highlighter-marked hero headline.
  This is now **stale for the home page** (`index.html`), which runs its own
  separate system — see below — but still accurate for every other page
  (`/retreats`, `/book-a-discovery`, podcast pages, blog). It was captured
  as a baseline/anti-reference before the redesign, not as something the new
  home page had to preserve.
- **`.impeccable/surfaces/index-html.md`** — the surface brief for the home
  page: scope, audience, funnel logic, chosen direction, and the reasoning
  behind it. This is where the home page's design decisions live, separately
  from the sitewide `DESIGN.md`, because only this one page has moved to a
  new visual world so far. (This brief was originally written for `/r.html`
  before that file was promoted to `index.html` — its full history, including
  the rejected "Bioluminescent Wake" direction, is in git log for this file.)
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
  departures from the old sitewide `DESIGN.md`, not real defects.
- **`.impeccable/review/`** — the last screenshots taken of the home page
  (`desktop.png`, `mobile.png`) for reference.

## What was built: the home page was redesigned, then promoted

The old `/r.html` (a Mull retreat / remote coaching landing page, originally
a side experiment separate from the site's actual home page) went through
two full visual directions, then was renamed to `index.html` and expanded
into a real home-page replacement — the old GOV.UK-based `index.html` was
deleted outright (the user keeps an independent repo backup, so nothing was
archived in-tree).

1. **Bioluminescent Wake** (built, then replaced) — a dark night-sea world
   with a pointer-driven glowing canvas trail. Technically solid but wrong
   for this brand: it fought the site's real, bright, documentary
   photography instead of working with it, and read as generic coastal
   mood rather than specifically Mull.
2. **The Shipping Forecast** (current, now the home page) — a pale
   marine-bulletin world (paper ground, navy ink, one chart-red signal
   accent) built around the idea that Clarity Lab's real value is *agency*:
   turning a messy problem into one precise, actionable call, the way a
   shipping forecast turns weather into a go/no-go decision. Chosen after
   rejecting an Ordnance Survey map direction (too clichéd a
   "wayfinding = clarity" device) and a crofting-almanac/diary direction
   (too sentimental a metaphor for what the product actually does).

Before promotion, the page was missing real home-page content: working
booking mechanics and a proper tier comparison. Both were added:

- **Booking buttons** on the Checkpoint and Breakthrough cards, linking
  directly to the same Calendly URLs the old home page used.
- **A "Compare your options" table** (Checkpoint / Breakthrough / Island
  Retreat side by side), adapted from the old `options.html` — with row
  labels added, since the original table had none. Its bottom row carries
  the funnel logic directly in the CTA wording: **Book →** for
  Checkpoint/Breakthrough (direct, self-serve), **Enquire →** (`mailto:`)
  for the Retreat (higher commitment, routes to a conversation first) — see
  PRODUCT.md's Operating Context for the reasoning.

Files that make up the current home page:

- `index.html` — the page content (formerly `r.html`).
- `_layouts/unbranded-landing.html` — this page's own layout (also used by
  three old, unlinked draft variants — `r-rev-preston.html`,
  `r-colour-tests.html`, `r-rev-22-Mar.html` — harmless, not part of the
  live site), carrying the direction contract as an HTML comment at the top
  of `<body>`.
- `assets/css/bulletin.css` — the whole visual system: tokens, typography,
  components. Self-contained; doesn't use GOV.UK Frontend.
- `assets/js/bulletin.js` — one small behaviour: the nav is hidden on the
  first viewport by design (no chrome above the hero) and reveals once you
  scroll past it.
- `assets/fonts/bitter-var.woff2`, `sourceserif4-var.woff2`,
  `sourceserif4-italic-var.woff2`, `spline-mono-400.woff2` — self-hosted
  variable fonts (Bitter display, Source Serif 4 body, Spline Sans Mono for
  tabular data), fetched once from Google Fonts and served locally rather
  than loaded at runtime.
- `_includes/above-main-bulletin.html`, `_includes/footer-bulletin.html` —
  this page's own nav and footer, separate from the shared `above-main.html`
  / `footer.html` used by the rest of the site, so this redesign couldn't
  leak into any other page.

All copy, pricing, and testimonials were preserved verbatim from the
original pages throughout every round; only the visual system (and, for the
funnel logic, the CTA structure) changed. Photography is real: the hero is
Fionnphort's beach and bay; other real photos are Stevie the dog at Three
Lochs, a Mull boatbuilder's workshop, the Ardalanish Weavers sign, a
wildflower meadow (`thistle.jpg`), and a candid black-and-white kitchen
conversation photo used as a small framed supporting image, not full-bleed.
See `PRODUCT.md` for which images in `assets/i/` are confirmed real versus
unverified, including the one AI-generated image that was caught and
removed before shipping.

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
- Checked before promoting: no other page linked to `/r` or `r.html`
  directly, so the rename required no link fixes. `_layouts/home.html`
  (the Jekyll/minima default) exists but is unused — both the old and new
  `index.html` declare their layout explicitly in front matter, so it's
  never auto-applied.

## Continuing the work

- The home page is now a visual outlier on its own site: every other page
  (`/retreats`, `/book-a-discovery`, podcast pages, blog) is still on the
  old GOV.UK system. Worth a deliberate decision on whether/when to extend
  the Shipping Forecast system further, rather than drifting into it
  page-by-page.
- Podcast pages were discussed as a plausible next extension — the
  "shipping forecast" metaphor fits a broadcast archive well — but they're
  `Read` mode, not `Persuade`, and need genuinely new components (episode
  list, audio player, prev/next nav), not a copy-paste of home-page
  components.
- `/impeccable document` — regenerate `DESIGN.md` from a page's built code.
  Don't run this against the home page without first deciding whether its
  system should become the new sitewide `DESIGN.md`, replace it outright,
  or stay a separate surface — right now it's deliberately kept separate.
- `/impeccable critique` / `/impeccable audit` — UX review / technical
  (a11y, perf, responsive) checks on any page.
- `/impeccable polish`, `bolder`, `quieter`, `clarify`, `adapt` — targeted
  refinement commands; see the skill's command table for the full list.
- `/impeccable hooks status` — check or reconfigure the design-quality
  hook described above.
