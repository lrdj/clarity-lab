---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope & mode

`index.html` — the site's home page (promoted from `/r` on 2026-08-18, replacing the old GOV.UK-based homepage). Persuade mode: a visitor decides and books.

## Audience, job, action

Individuals at a career/life crossroads and business leaders seeking team facilitation (per PRODUCT.md). Job: decide whether Checkpoint, Breakthrough, or the Mull Retreat is worth booking. Funnel logic (confirmed with the user 2026-08-18, replacing the old Checkpoint-first funnel after it underperformed): the hero leads with the Retreat and offers a low-commitment "free discovery call" as its CTA, because a £1,450 decision needs a conversation first. Checkpoint and Breakthrough, lower-commitment and lower-priced, get direct self-serve "Book" links (real Calendly URLs) instead — every tier's CTA matches its actual commitment level rather than one CTA style pretending all three are equivalent.

## Proof & content

Real, place-specific photography only — no stock or AI imagery, per PRODUCT.md's "real over staged" principle. Hero is Fionnphort's beach and bay, served from `fionphort-pano-hero.jpeg` (2560×1249, ~744KB, resized from the full-resolution `fionphort-pano-alt.jpeg` master — see PRODUCT.md's Evidence on Hand for the full file breakdown, including the AI-generated `croft-workshop.png` that was caught and removed before shipping). Other real photos: Stevie the dog at Three Lochs, a Mull boatbuilder's workshop, the Ardalanish Weavers sign, a candid black-and-white kitchen-conversation photo (small framed supporting image, not hero — doesn't carry Mull/landscape cues on its own), and a gallery of `ben-workshop-other.png` / `weavers.jpeg` / `thistle.jpg` illustrating the three retreat-day pillars (craft, craft, nature). `rock-growth.jpg` was considered but is already in use on the podcast home page — not reused here.

Two confirmed real testimonials (Doug S., James C.). All copy preserved verbatim from the incumbent `/r` and, before that, the original GOV.UK home page. Pricing appears twice: a bulletin-ledger table in the FAQ, and a full "Compare your options" table (Checkpoint/Breakthrough/Island Retreat) adapted from the old `options.html` — row labels added, since the original had none.

## Constraints

No React. GOV.UK accessibility discipline kept in spirit (semantic HTML, visible focus states, native `<details>`, skip link) but none of GOV.UK Frontend's classes or stylesheet — this page ships its own system (`assets/css/bulletin.css`, `assets/js/bulletin.js`). Kielder Forest dropped from copy (Mull-only). The old `index.html` was deleted outright, not archived — the user has an independent repo backup and didn't want it retained in-tree.

## Chosen direction

**The Shipping Forecast** — pale marine-bulletin paper (`#f4efe4`), navy ink (`#1b2a3d`), one chart-red signal accent (`#a8362b`) used only for the primary action, em-highlights, and now the comparison table's "Book" links (vs. "Enquire" for the Retreat, same weight, different word, carrying the commitment-level distinction without extra styling). Self-hosted Bitter (slab display) + Source Serif 4 (body) + Spline Sans Mono (data/tabular). Nav is absent from the first viewport, revealing only once the visitor scrolls past the hero. Full reasoning for the direction (including the rejected Bioluminescent Wake round, and why Ordnance Survey/crofting-almanac were rejected as too clichéd/sentimental) is preserved in git history on this file's previous incarnation as `.impeccable/surfaces/r-html.md`.

This surface *is* now the sitewide `DESIGN.md`'s main counter-example: `DESIGN.md` still describes the GOV.UK "Civic Croft" system, which every other page (retreats, podcast, blog, discovery call) still uses. Promoting the home page did not extend the new system anywhere else yet.

## Unresolved

- Every other page — `/retreats`, `/book-a-discovery`, podcast pages, blog — is still on the old GOV.UK visual system. The home page is now a visual outlier on its own site. Worth a deliberate decision on sequencing (podcast pages specifically discussed as a plausible next extension: the "Shipping Forecast" metaphor fits a broadcast archive well, but needs new components — episode list, audio player, prev/next nav — not a copy-paste of home-page components, since podcast pages are Read mode, not Persuade).
- No image-generation comp round was used for this direction; the decision was made via the structured-question channel rather than the visual decision page, per the user's code-first choice.
