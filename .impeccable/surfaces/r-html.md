---
version: 1
slug: "r-html"
primary_target: "r.html"
related_targets: []
---

## Scope & mode

`/r` — the Mull retreat + remote coaching landing page. Persuade mode: a visitor decides and books a call.

## Audience, job, action

Individuals at a career/life crossroads and business leaders seeking team facilitation (per PRODUCT.md). Job: decide whether Checkpoint, Breakthrough, or the Mull retreat is worth booking. Primary action: book a free discovery call (`/book-a-discovery`); FAQ links back to `/` for direct booking buttons.

## Proof & content

Real, place-specific photography only — no stock or AI imagery, per PRODUCT.md's "real over staged" principle. Hero is Fionnphort's beach and bay, served from `fionphort-pano-hero.jpeg` (2560×1249, ~744KB — resized from the full-resolution `fionphort-pano-alt.jpeg` master; the original `fionphort-pano.jpeg`/`fionphort-pano-old.jpeg` were too low-res and visibly blurred at real hero sizes — see PRODUCT.md's Evidence on Hand for the full file breakdown). Other real photos are Stevie the dog at Three Lochs, a Mull boatbuilder's workshop, the Ardalanish Weavers sign, and — in the "What's this about" section, framed and captioned rather than full-bleed — a candid black-and-white photo of the team in conversation in a kitchen (`kitchen-workshop-c.jpg`), which the user added specifically because "our work often happens in the kitchen." That photo was briefly tried as the hero itself; it didn't work there (no Mull/landscape cues, and its black-and-white treatment clashed with every other photo on the page being colour) but reads well inside the same hairline-bordered figure frame every other photo uses, alongside the "we're a small group of designers, coaches and consultants" copy.

`croft-workshop.png`, a workshop/whiteboard scene, was briefly used as an earlier hero candidate — a strong mechanism-fit — but the user confirmed on 2026-08-18 it's AI-generated (Midjourney, tell-tale nonsense whiteboard text and hand/face artifacting). Removed; see PRODUCT.md's Evidence on Hand for the full note on which images in `assets/i/` are verified real. Two confirmed real testimonials (Doug S., James C.). Pricing and copy preserved verbatim from the incumbent page; pricing now rendered as an actual bulletin-style table in the FAQ rather than a plain list.

## Constraints

No React. GOV.UK accessibility discipline kept in spirit (semantic HTML, visible focus states, native `<details>`, skip link) but none of GOV.UK Frontend's classes or stylesheet — this page ships its own system. Kielder Forest dropped from copy (Mull-only, per 2026-08-18 product update).

## Chosen direction

**The Shipping Forecast** — a direct pivot, made with the user after they reviewed the built "Bioluminescent Wake" direction and found it didn't capture Mull's real character: an atmospheric night world fighting the site's genuinely bright, documentary daytime photography. The user flagged the Ordnance Survey map option as too clichéd a "wayfinding = clarity" device, and worried a crofting-almanac/diary metaphor would feel sentimental given Clarity Lab's actual mechanism is *agency* — turning a messy problem into a precise, actionable call, not tracking personal growth over time. The Shipping Forecast fit that mechanism directly (a forecast exists to enable a confident go/no-go decision under uncertainty) and is genuinely Hebridean (the real marine area is named "Hebrides").

Pale marine-bulletin paper (`#f4efe4`) throughout, navy ink (`#1b2a3d`), one chart-red signal accent (`#a8362b`) used only for the primary action and em-highlights. Self-hosted Bitter (slab display) + Source Serif 4 (body) + Spline Sans Mono (data: prices, captions, citations). No motion signature this time — the previous direction's canvas trail didn't survive the pivot; delight comes from typographic/tabular precision instead (the pricing FAQ renders as an actual ledger table). The nav is still absent from the first viewport and reveals only on scroll past the hero — a pattern the user explicitly liked in the previous direction and asked to keep regardless of world.

Full token/component detail lives in `assets/css/bulletin.css`; this surface intentionally diverges from the sitewide `DESIGN.md` (which still describes the GOV.UK-based "Civic Croft" system used by every other page — that record stays accurate for the rest of the site and was not overwritten).

## Self-review notes (both rounds)

Round 1 (Bioluminescent Wake) shipped with craft-floor violations caught only after building: kickers/eyebrows above every heading (an absolute ban), an identical fade-reveal repeated on every section, Unicode +/− FAQ icons instead of authored SVG, an over-bold quote border, and a button-text contrast bug from an anchor-color specificity fight. All fixed before the round ended; lessons carried into round 2 (Shipping Forecast), which loaded the craft floor before writing CSS and caught its own one violation (a hard-offset button shadow) via proactive self-check rather than after the fact.

## Unresolved

- The rest of the site (home, `/retreats`, booking pages) is still on the old GOV.UK visual system; no decision yet on whether/when to extend this direction site-wide.
- No image-generation comp round was used for either direction (user chose code-first specifically to avoid AI-generated imagery competing with the real-photography principle); both decisions were made via the lighter structured-question channel rather than the visual decision page.
