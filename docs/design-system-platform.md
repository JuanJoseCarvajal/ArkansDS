# ArkansDS System Architecture

## Purpose

`/system-architecture` is an internal design system platform for operating the symbolic architecture behind ArkansDS. It is not a style guide. It is a live environment for editing foundations, previewing components, switching themes, inspecting motion and exporting design-to-code assets.

## UX Structure

- Foundations: conceptual operating rules for sign, threshold and return.
- Token Editors: editable values for colors, typography, spacing, radiuses, shadows, opacity, motion, z-index, blur and grid.
- Component Library: live previews, states, usage notes and snippets.
- Motion Architecture: Framer Motion timing guidance and symbolic demos.
- Symbolic Patterns: narrative pacing, hierarchy and perception architecture.
- Live Preview: immersive page chamber where token changes update instantly.
- Export System: JSON tokens, CSS variables and Tailwind config output.

## Component Hierarchy

```txt
app/system-architecture/page.tsx
  components/system/SystemArchitecture.tsx
    TokenEditor
    Foundation cards
    Component intelligence cards
    Motion architecture chamber
    Live preview chamber
    Export panels
  components/ui/system-primitives.tsx
    SystemButton
    SystemPanel
  lib/utils.ts
    cn()
```

## Token Architecture

Tokens are grouped by operational role:

- `colors`: void, graphite, parchment, ash, ember.
- `typography`: display, title, body, mono.
- `spacing`: xs, sm, md, lg.
- `radiuses`: signal, panel, aperture.
- `shadows`: low, high, ember.
- `opacity`: ghost, veil, solid.
- `motion`: fast, ritual, reveal.
- `zIndex`: base, nav, overlay.
- `blur`: glass, aura.
- `grid`: columns, gutter, margin.

Each token is editable, previewable and exportable.

## shadcn/ui Pattern

The system uses shadcn-style local primitives instead of remote generated files:

- `class-variance-authority` for variants.
- `cn()` with `clsx` and `tailwind-merge`.
- Accessible button primitives with focus states.
- Tailwind utilities and CSS variables for visual behavior.

This keeps the platform scalable without coupling it to one generated component snapshot.

## Motion Guidance

Motion follows an initiatic rhythm:

- Fast response: 160ms for control feedback.
- Ritual transition: 420ms for theme and state changes.
- Reveal: 760ms for scroll and narrative entrance.
- Easing: `[0.22, 1, 0.36, 1]` for premium deceleration.

Motion should clarify state changes, not decorate them.

## Export Logic

The current export system produces:

- JSON token object.
- CSS variable map.
- Tailwind `theme.extend` fragment.

Future expansion:

- Copy-to-clipboard actions.
- Versioned token snapshots.
- Component registry metadata.
- Figma Tokens or Tokens Studio compatible output.
- Sanity/Contentful backed design token publishing.

## Folder Structure

```txt
app/
  system-architecture/
    page.tsx
components/
  system/
    SystemArchitecture.tsx
  ui/
    system-primitives.tsx
lib/
  utils.ts
docs/
  design-system-platform.md
```
