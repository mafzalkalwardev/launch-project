# Design contract

Write this into `DESIGN.md` before any component. If the concept matches the ban list, rewrite it and then build.

## Visual concept

One paragraph tied to this product's domain. Name the motif, the layout idea, and why a stranger would recognize the subject without reading the title.

## Ban list

Reject the concept when it depends on any of these:

- Inter, Roboto, Arial, Open Sans, Lato, Poppins, Montserrat, or Nunito as the only type
- A purple-on-white gradient as the identity
- Three equal feature cards as the whole page
- A centered hero whose only content is a headline, a subhead, and two buttons
- Lorem ipsum or "welcome to our platform"
- Glassmorphism as the entire look
- Emoji used as the icon system
- A sparkle, a robot, or a generic gradient orb as the logo

## Type

One display face and one body face, from Fontshare or a Google family outside the ban list. Record why each face fits this product. Load them with `next/font`, Fontsource, or a documented link. Set a fallback stack.

## Color

One dominant, one accent, one neutral. Derive them from the product domain. Record hex values and where each is used. Put the tokens in CSS variables.

## Layout

One asymmetric or editorial decision that comes from the domain. Examples of the kind of decision, pick one that fits and invent the specifics: a ledger rail, a workshop bench, a route map, a specimen sheet. Say which regions collapse first on a narrow screen.

## Motion

Every animation needs a reason, written next to it in `DESIGN.md`.

- GSAP for scroll-linked sequences and multi-step timelines.
- Framer Motion only when the stack is React, and only for enter, exit, and layout.
- SvelteKit uses GSAP and Svelte transitions. Do not add Framer Motion.
- `prefers-reduced-motion: reduce` disables non-essential motion and keeps state changes instant.

## Responsive

Build and check these widths: 320, 768, 1024, 1440.

- No horizontal scroll at those widths.
- Touch targets at least 44px.
- Text wraps. Images scale inside their frame.
- Verify 320 and 1440 in the browser. Check 768 and 1024 the same way.

## Logo

The mark uses the same dominant and accent colors as the UI. Create it in the media phase when the repo has no logo yet.
