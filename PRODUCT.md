# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences served roughly equally, not one primary with a secondary:

- **Individuals at a crossroads** — a career decision, a business challenge, or a personal transition — seeking outside perspective and a concrete next step (the Checkpoint / Breakthrough buyer).
- **Team and business leaders** bringing facilitated design-thinking to their own team or organisation, often after first experiencing it individually (the Island Retreat / repeat-engagement buyer).

## Product Purpose

The Clarity Lab Method® is a tiered coaching and facilitation service that applies design-thinking frameworks — borrowed from commercial agency and consultancy practice — to help people and teams reframe a stuck problem and leave with a stated action plan. Success is a client moving from "stuck or uncertain" to "clear next steps," not open-ended therapeutic support.

## Positioning

"Freeing design-thinking tools from the confines of specialist consultancies so everyone can benefit" — the claim is access to genuinely agency-grade frameworks at individual/small-team scale, not generic life coaching or wellness retreat framing.

## Operating Context

Three tiers, escalating in depth and commitment:

- **Checkpoint** — 1-hour remote coaching call, no prep, £65, booked via Calendly popup.
- **Breakthrough** — 2-hour remote workshop with a prep call and worksheet, £495, booked via Calendly popup.
- **Island Retreat** — 3-day immersive, in-person on the Isle of Mull (plus an online variant for those who can't travel), £1,450, booked by email enquiry. Kielder Forest is paused for now — Mull only.

Delivered as a static Jekyll site (`claritylab.uk`, custom domain via CNAME, no server-side app). Site also carries a methodology blog (`_posts`) and a long-running interview podcast (`_podcasts`, `/pod`).

**Home page funnel logic** (confirmed 2026-08-18, replacing an earlier Checkpoint-first funnel after it underperformed): the hero leads with the Retreat and its CTA is a free discovery call, not a direct purchase — a £1,450 decision needs a conversation first. Checkpoint and Breakthrough, lower commitment and lower price, get direct self-serve booking links instead. Any future page touching pricing/booking should preserve this distinction rather than giving every tier the same CTA treatment.

## Capabilities and Constraints

- Static Jekyll site. No JavaScript framework — React is deliberately excluded as a standing principle across all of the user's projects (opposition to Meta-originated technology), not just this one.
- Currently built on the **GOV.UK Design System** (`govuk-*` components, GOV.UK Frontend), chosen for its WCAG-audited accessibility, the user's fluency with it, and the option to prototype quickly with the GOV.UK Prototype Kit.
- **Decision: keep the engine, open the paint.** The accessibility patterns, semantic HTML, CSS architecture (BEM, focus states), and no-React server-rendered approach are a durable technical foundation to preserve. The GOV.UK *visual skin* is not binding brand identity — future design work may move the surface away from a government-service look. The current implementation already fights that look (inline colour overrides, a hand-rolled video hero, ad hoc classes like `inyourface` layered onto `govuk-heading-xl`), which is a sign the visual world wants to move, not that the framework choice is wrong.

## Brand Commitments

- "Clarity Lab Method®" is a trademarked name — preserve exact wording and the ® mark in copy.
- No React, and no other Meta-originated technology, as a standing constraint across the user's projects, independent of this one.

## Evidence on Hand

- Two real customer testimonials on the homepage (Doug S., University Lecturer; James C., Product Director) — genuine quotes, usable as evidence.
- Pricing set in `_config.yml`: £65 (Checkpoint), £495 (Breakthrough), £1,450 (Island Retreat).
- A 93-image moodboard at `/mood` (`assets/i/concept-moodboard/`) is raw, uncurated reference material, not a resolved visual direction. Sampling confirms strong "terroir of Mull" material exists — croft/pub interiors, loch and boat photography, hand-woven wool textiles with hand-chalked pricing — alongside clearly off-brand strays (a corporate headshot card, a non-Scottish forest-cove photo, generic stock workshop imagery). Future design work should treat this folder as inspiration to mine, not content to ship as-is.
- Retreat locations: a croft by the sea on the Isle of Mull, and an online-only variant. Kielder Forest is paused for now.
- Named external references the user is drawing on for art direction: Archipelago Folkschool (archipelagofolkschool.org) for documentary, unstyled, craft-heritage photography; Banjo Beale's Isle of Mull interior design work for confident use of colour and pattern.
- `assets/i/` is not a reliably-real photo library: `croft-workshop.png` (a workshop/whiteboard scene, superficially plausible) was confirmed by the user on 2026-08-18 to be AI-generated (Midjourney) despite sitting alongside genuine photography with no naming convention distinguishing the two. Before treating any image in that folder as real evidence, confirm with the user rather than inferring from filename or subject plausibility. Known-real, user-vetted: `stevie-mull.jpeg`, `fionphort-pano.jpeg`, `ben-workshop-other.png`, `weavers.jpeg` (all referenced in the user's own pre-redesign copy), plus `kitchen-workshop-c.jpg` (a real, informal team-conversation photo the user added on 2026-08-18 — black and white, candid, not Mull-specific; works as a small supporting image, not as a page hero). `kitchen-workshop-a.jpg` also exists, added at the same time, not yet placed anywhere — unconfirmed whether it's meant as an alternate crop/take of the same real moment. `croft-workshop.png` is known-fake — do not reuse. Everything else in the folder is unverified.
- Fionnphort has three files as of 2026-08-18: `fionphort-pano-alt.jpeg` (8033×3920, ~9.1MB) is the full-resolution master — keep as source, never link directly (too heavy to ship). `fionphort-pano-hero.jpeg` (2560×1249, ~744KB, resized from the master) is the actual asset `/r`'s hero uses. `fionphort-pano.jpeg` carries the same resized content (kept at this path only because three old draft pages — `r-rev-preston.html`, `r-colour-tests.html`, `r-rev-22-Mar.html` — reference it directly; not linked from anywhere live). The original low-resolution `fionphort-pano-old.jpeg` (1600×526) was deleted — it was the cause of a visible blur when used as a hero background at real display sizes.

## Product Principles

1. **Real over staged.** Documentary photography of actual Mull people, places, and materials (the wool mill, the boatbuilder, moss, seaweed) is what makes the authenticity claim credible — especially to the American audience the brand draws. Stock or AI-generated imagery undermines that claim.
2. **Consultancy-grade thinking, not generic coaching.** The method's credibility rests on genuinely being borrowed from commercial design-thinking practice.
3. **Accessibility is non-negotiable; it is not a visual identity.** Keep GOV.UK's accessibility discipline without letting its government-service look stand in for the brand's own visual world.
4. **No React / no Meta-originated tooling** is a durable technical constraint, not a per-project choice.
5. **Serve both journeys equally** — the individual-in-crisis and the team-leader-bringing-facilitation — neither is secondary to the other.

## Accessibility & Inclusion

WCAG 2.x AA, inherited from GOV.UK Frontend's component patterns. This standard is explicit and durable — preserve it through any future visual redesign, independent of whether the GOV.UK visual skin itself is kept.
