# AGENTS.md

Marketing homepage exported from Figma ("SNN Design to HTML/CSS"). React 19 +
Vite 7 + Tailwind v4. No backend, no tests, no router library.

The design is a **fixed 1440px artboard**. Almost every awkward-looking pattern in
this repo exists to serve that fact. Read this before changing layout.

## Commands

```bash
npm run dev          # dev server
npm run build        # production build to dist/
npm run snap         # SSR-render <Home/> to normalized HTML
npm run snap:check   # diff current against baseline
npm run snap:base    # re-baseline (do this only when a change is intended)
```

`npm run snap:check` is the only regression guard. `scripts/snapshot-entry.jsx`
sorts class tokens, sorts attributes, and collapses whitespace, so **a class
reorder always passes, but any change to the class set, element tree, coordinate,
or text fails.** It compares markup, not computed styles — a change that alters
layout without touching the emitted class set passes silently.

Note: `.snapshot/` is gitignored, so the baseline does not travel with the repo.
If `snap:check` fails on the first run of a session, the baseline is stale, not
your change. Re-base deliberately rather than reflexively.

## Architecture rules (from the code's own comments)

**`data-flow-item` bands.** Every top-level section renders through
`src/components/ui/FlowSection.jsx`, which must stay the outermost element of its
section and whose `flow` value must not change — `src/styles.css` keys the entire
responsive layout off it. Two kinds sit directly under `.home-page`: full-bleed
bands anchored at `left-0` carrying the section background, and inner content
blocks that carry their own `left`/`w` and must keep both.

**The `left-[` substring hack.** `src/styles.css:23` discriminates the two groups
with `:not([class*="left-["])` — a substring match on the class attribute. So:

- Adding `left-[...]` to a full-bleed band silently stops it widening above 1440px.
- Removing it from an inner content block silently lets it stretch full-bleed.

Nothing in the markup warns you. Check any band you touch against this.

**Above 1440px** the bands stretch to the window while the artboard's own content
stays centered in a 1440px column, via
`margin-left: calc((100% - 1440px) / 2)`. At exactly 1440px the term is 0, so
rendering stays pixel-identical.

**Below 1440px** a flow layout takes over and `styles.css` rewrites every band with
`position/inset/width/height` overrides and `order:` values. There are essentially
**no `sm:`/`md:`/`lg:` Tailwind prefixes anywhere in the components** — all
responsive behavior lives in `styles.css` keyed on `data-*`. Keep it that way.

**Featured divider is desktop-only** by design (`display: none` below 1440px).

## Conventions

- 2-space indent, double quotes under `components/` and `data/`, semicolons,
  trailing commas. `App.jsx`, `main.jsx`, `vite.config.js`, and `index.html` use
  single quotes — that is drift, not a second style. No formatter is installed.
- Default-exported named function components, props destructured in the
  signature, `className` and `...rest` last.
- Variants are **named presets / lookup objects**, never a boolean matrix. See
  `Pill.jsx` `PRESETS`, `GlassCard.jsx` `tones`. Delete a preset once no section
  renders it rather than leaving it as dead surface.
- `hook="data-..."` prop applies a CSS hook via `{...(hook ? { [hook]: true } : {})}`.
  Simple one-off hooks are written literally in the section component instead.
- Class strings go through `cx()` from `src/components/ui/cx.js` (de-duplicates
  tokens, preserves first-appearance order). Not universal — `SiteHeader.jsx`
  skips it entirely.
- JSDoc blocks above components explain **why a prop exists**, citing the design
  markup or the call sites that diverge. Match that: these comments are load-bearing.
- **Never build a Tailwind arbitrary value by interpolation** (`w-[${n}px]`).
  Tailwind only generates what it can see verbatim in source. Pass literal
  tokens as strings instead — see `NewsletterForm.jsx` `fieldWidth`. The one
  deliberate exception is `GlowBlob.jsx`, which composes gradient strings at
  runtime because the value cannot be written statically.
- Font sizes use the `text-[length:18px]` type-hint form, never bare `text-[18px]`.
  Families use the underscore-for-space encoding: `font-['Satoshi',_sans-serif]`.
- Assets are root-absolute strings from `public/` (`/assets/...`, `/fonts/...`).
  No bundler asset pipeline. Filenames are the Figma export's — renaming one
  requires updating every reference.
- `decoding="async"` everywhere; `loading="lazy"` below the fold;
  `fetchPriority="high"` exactly once, on the hero LCP image.

## Things that look like bugs but are not

- **Colors are arbitrary hex literals with no tokens.** There is no `@theme`.
  `bg-[#d4fb20]` and `bg-[#cbfc01]` are two different hexes for what looks like
  one accent; `#f5f5f6` / `#f6f6f6` / `#fafafa` likewise. These come from the
  Figma export. Do **not** normalize them.
- `FlowSection`'s `tag` prop exists because not every band is a `<div>` in the
  design markup: the divider is an `<img>`, the CTA a `<button>`, the footer a
  `<footer>`.
- Placeholder fields are styled `div`s in the source markup. `NewsletterForm`
  keeps the `div` as chrome with a real `<input>` layered inside, so the design's
  look survives while the field stays focusable.
- An `<img>` sized `width: 100%` does not stretch its SVG: default
  `preserveAspectRatio` letterboxes the artwork at natural size, centered. To make
  such a band fill edge-to-edge, paint the background color on the element
  (`bg-[#f5f5f6]` on the featured divider) rather than forcing
  `preserveAspectRatio="none"`, which would distort the art.
- Content defaults often live in the component (`CourseCard.jsx:37` `author`)
  rather than in `src/data/`.

## Known warts

- There are no tests. `snap:check` is the entire safety net, and it compares
  markup rather than computed styles — see the caveat in **Commands**.
- `cx()` is called with a single argument in ~10 places, which gains nothing over
  the raw string. Not worth churning; just don't propagate the habit.
- `SiteHeader.jsx` and several section components skip `cx()` and use raw
  `className` strings. Mixed convention, not a rule.
- Copy is externalized to `src/data/` unevenly: Growth and Testimonials read from
  data, while Hero, Featured and CTA still inline their text. Newer sections
  follow the data/ pattern; older ones don't.
- Some content defaults live in the component (`CourseCard.jsx` `author`,
  `level`) rather than in `src/data/`, so changing a course's author means
  editing the component.

## Assets

`.DS_Store` is gitignored along with `dist/` and `.snapshot/`. Asset filenames
are the Figma export's own (`frame-4-6.svg`, `ellipse-11.webp`), so a rename
means updating every reference across `src/data/` and the components.