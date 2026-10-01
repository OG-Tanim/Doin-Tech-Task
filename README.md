# Home

Marketing homepage exported from Figma with [SNN Design to HTML/CSS](https://www.snn.studio/).

React 19 + Vite 7 + Tailwind v4. No backend, no tests.

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
```

## Layout

The design is a **fixed 1440px artboard**. Above 1440px the full-bleed section
bands stretch to the window while the artboard's own content stays centered in a
1440px column. Below 1440px a flow layout takes over.

All responsive behavior lives in `src/styles.css`, keyed on `data-*` attributes
rather than Tailwind breakpoint prefixes, so the components contain no
`sm:`/`md:`/`lg:` variants. See [AGENTS.md](./AGENTS.md) before changing layout.

## Snapshot regression check

`scripts/snapshot-entry.jsx` server-renders `<Home/>` to normalized HTML and
diffs it against a baseline. This is the project's only regression guard.

```bash
npm run snap:check   # render and diff against .snapshot/baseline.html
npm run snap:base    # re-baseline — only when a change is intended
```

A class *reorder* always passes, since the normalizer sorts class tokens. Any
change to the class set, element tree, a coordinate, or text will fail. It
compares markup rather than computed styles, so a layout change that leaves the
emitted markup untouched passes silently.

`.snapshot/` is gitignored, so a fresh clone has no baseline — run
`npm run snap:base` once to establish one.
