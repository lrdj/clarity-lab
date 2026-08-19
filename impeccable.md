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
  **This is now fully stale**: every live, linked page on the site has moved
  to the new "Shipping Forecast" system (see below). Nothing that a visitor
  can actually reach still uses GOV.UK Frontend — only unlinked scratch/dev
  files at the repo root (`colour.html`, `dev.html`, `mood.html`,
  `checkpoint.html`, and similar) and three old draft variants of the home
  page (`r-rev-preston.html`, `r-colour-tests.html`, `r-rev-22-Mar.html`)
  still declare `layout: unbranded`. `DESIGN.md` was kept as-is deliberately
  through the whole rollout (captured as a baseline/anti-reference before
  the redesign began) rather than patched page-by-page; regenerating it
  from the new system (`/impeccable document`) is the natural next step,
  not yet done because it wasn't asked for.
- **`.impeccable/surfaces/index-html.md`** — the surface brief for the home
  page: scope, audience, funnel logic, chosen direction, and the reasoning
  behind it. This is the most detailed design-decision record for the new
  system, but it only covers the home page specifically — the blog and
  podcast extensions (see below) don't have their own briefs; their
  reasoning lives in this file instead. (This brief was originally written
  for `/r.html` before that file was promoted to `index.html` — its full
  history, including the rejected "Bioluminescent Wake" direction, is in
  git log for this file.)
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

## The rest of the site: extended sitewide (2026-08-19)

After the home page shipped, the user decided to extend the same system to
every other live page rather than leave it as a one-page outlier. In order:

1. **Nav fix (prerequisite, not a page).** The shared nav
   (`_includes/above-main-bulletin.html`) only ever worked correctly on
   pages with a hero — `bulletin.js` hid it and relied on scrolling past a
   hero to reveal it again, so any hero-less page would have a permanently
   invisible nav. Fixed by making the nav's CSS default visible everywhere,
   and having `bulletin.js` add a `.bl-nav--hero-mode` modifier (hide,
   reveal-on-scroll) only on pages that actually have a `.bl-hero`. Also
   restored Blog and Podcast links, missing from the new nav entirely.
2. **`/book-a-discovery`** — rebuilt with the real Calendly inline booking
   widget (script added per-page, not sitewide), tinted to the new palette.
3. **Blog** (`/thought.html` + all 6 posts in `_posts/`) — new
   `_layouts/bl-post.html` builds each post's hero from front matter
   (`hero-image`, and the punchy `hero-h1a`/`hero-h1b` display headline,
   kept deliberately separate from the SEO `title` field). New `.bl-article`
   typography for long-form prose, and a `.bl-entry-list` component (date,
   title, excerpt, hairline dividers) for the index — reads as a dispatch
   log, which fits the world better than cards would. Real photo
   (`concept-wall.jpg`, a genuine research-wall photo) reused as a shorter
   "banner" hero (`.bl-hero--banner`) across all posts, distinct from the
   home page's full-viewport hero.
4. **Podcast** (`/pod/` + all 11 episodes in `_podcasts/`) — new
   `_layouts/bl-podcast.html`, reusing `rocks-growth.jpg` (already the
   established podcast hero image pre-redesign) as a consistent banner.
   Per-episode cover art (`cover_image` front matter) — genuine artwork
   also used on Apple Podcasts, not incidental images — is shown at
   `.bl-episode-cover` thumbnail size on both the archive and each episode
   page; this was missed in the first pass and added back after the user
   flagged it, along with a full Subscribe block (Apple Podcasts, RSS,
   direct MP3 download) on every individual episode page, not just the
   archive. The archive page uses a two-column layout (`.bl-layout`,
   `.bl-layout__main` + a `position: sticky` `.bl-layout__aside`) carrying
   Subscribe — a deliberate, sparing exception to the sitewide
   single-column pattern, because a persistent action beside a long
   scrolling list is a real Read-mode need, not decoration. The
   testimonial stayed full-width at the bottom, matching the home page.
5. **`/retreats/`** — retired, not rebuilt. Its content was AI-drafted
   exploration text with no unique value once Kielder Forest was retired
   (the home page's comparison table and "What if I can't come to
   Scotland?" section already cover Mull + Online more completely, and
   more accurately, than the old page ever did). Its 27 real photos were
   moved to `assets/i/retreats-holding/` before the folder was deleted —
   see `PRODUCT.md`'s Evidence on Hand for what's in there and what's
   confirmed about them. One genuine detail worth keeping was pulled out
   of the otherwise-discarded draft text: a real "past activities" list
   (Fingal's Cave and Iona, wool-dyeing, crater swimming near Tobermory,
   a local distillery) and a liability note about guided wild swimming —
   also recorded in `PRODUCT.md`.
6. **`404.html`** — was on `layout: page` (a *different* old system,
   minima's own default, not even GOV.UK) with no styling at all. Rebuilt
   centred, on-brand, no hero. Caught and fixed a subtle craft-floor
   violation before shipping: an initial draft put "404" as a small label
   above the "Not found" heading — structurally a kicker (banned outright,
   no exceptions in the craft floor) even though it was functional (a
   status code) rather than decorative. Removed; the heading carries it
   alone now.

Every one of these pages was smoke-tested (HTTP 200) after the change;
screenshots were taken for each but not kept afterward (working files, not
final references) — only the home page's are in `.impeccable/review/`.

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

- The sitewide extension is done — every live, linked page uses the new
  system now. The natural next step is `/impeccable document` to
  regenerate `DESIGN.md` from the built system (it currently still
  describes the retired GOV.UK look, accurate for nothing live). Not done
  yet because it wasn't asked for; flagged repeatedly by the design hook
  throughout the rollout, which is expected — see Process notes.
- Genuine remaining scratch files at the repo root (`colour.html`,
  `dev.html`, `fig.html`, `mood.html`, `mood-rev.html`, `checkpoint.html`,
  `fb-checkpoint.html`, `comparison-table.html`, `index-b.html`,
  `index2025.html`, `land-20250304.html`, `keep-useful-elements.html`,
  `urg.html`, `method.html`, plus the three old `r-*.html` draft variants)
  are unlinked from anywhere live and still on the old system. None of
  this was touched during the rollout — out of scope, not an oversight.
- `/impeccable critique` / `/impeccable audit` — UX review / technical
  (a11y, perf, responsive) checks on any page.
- `/impeccable polish`, `bolder`, `quieter`, `clarify`, `adapt` — targeted
  refinement commands; see the skill's command table for the full list.
- `/impeccable hooks status` — check or reconfigure the design-quality
  hook described above.
