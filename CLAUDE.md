# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Seguros Bolívar UI** is a multi-brand enterprise Design System supporting 6 brands (Seguros Bolívar, Davivienda, Jelpit, Cien Cuadras, Doctor Aki, White Label) with light/dark themes. Built with modern CSS (Nesting, @layer, Logical Properties, clamp()) and Lit web components.

This is a **copy-paste ready CSS library**. Users include the CSS bundle via CDN, copy HTML from `examples/`, and get a working component — no build step, no configuration.

## Build & Development Commands

```bash
pnpm install                # Install dependencies (pnpm 8.0.0+, Node 18+)
pnpm run build              # Clean + build all packages (always --force --no-cache) + copy assets
pnpm run demo               # Build + serve examples on port 3000
pnpm run dev:storybook      # Build + launch Storybook on port 6006
pnpm run test               # Run all tests via Turbo
pnpm run lint:fix           # Fix linting + format
pnpm run check              # lint --fix + format:check + test
```

## Architecture

### Monorepo (Turborepo + pnpm workspaces)

Build order follows dependency graph: **tokens → atoms → molecules → brand-overrides → bundle → docs**

| Package | Purpose |
|---------|---------|
| `packages/tokens/` | Design tokens (JSON) → CSS variables |
| `packages/atoms/` | CSS-only components (button, input, tabs, layout system, etc.) |
| `packages/molecules/` | Lit 3 web components (modal, datepicker, toast, etc.) |
| `packages/brand-overrides/` | Brand-specific CSS variable overrides per component |
| `packages/bundle/` | CDN bundles: 6 brands × 2 themes = 12 CSS files |
| `packages/docs/` | Storybook documentation |

### Bundle Generation (`packages/bundle/src/builder.ts`)

- Combines tokens + atoms + molecules + brand-overrides into 12 CSS bundles
- Output: `dist/sb-ui-{brand}-{theme}.min.css` + `dist/sb-ui-components.min.js`
- `scripts/copy-assets.js` copies bundles to `examples/dist/` and `packages/docs/.storybook/`
- **`examples/dist/` files are build artifacts** — never edit them manually, always rebuild

### CSS Architecture

**CSS standards are defined in two Cursor rules files that apply automatically:**
- `.cursor/rules/CSS.mdc` (v3.3.0) — Mandatory CSS architecture rules
- `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` (v2.1.0) — Brand override rules

**Non-negotiable principles:**
- **Logical Properties ONLY**: `inline-size`, `block-size`, `padding-inline`, `margin-block-start` — NEVER `width`, `height`, `padding-left`, `margin-top`
- **clamp() for responsive**: NEVER media queries for sizing — e.g. `font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem)`
- **@layer system** (8-10 layers): `reset → tokens → base → variants → style-variants → brand-overrides → sizes → modifiers → icon-positions → states → utilities`
- **CSS Nesting** with `&` (max 3 levels deep)
- **Prefixes**: all classes `sb-ui-*`, all variables `--sb-ui-*`, BEM format
- **No hardcoded colors**: always `var(--sb-ui-color-*, fallback)`
- **No `!important`**: use `@layer brand-overrides` instead
- **5 states** when defining interactive variables: default, hover, active, disabled, disabled-hover

### Brand Override System

Brands customize components via data attributes and CSS variable overrides:

```html
<html data-brand="seguros-bolivar" data-theme="light">
```

Override files: `packages/brand-overrides/src/{brand}/{component}.css`

```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .sb-ui-button--primary {
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D100);
  }
}
```

Variable naming: `--sb-ui-{component}-{variant}-{style}-{property}-{state}`

Selector patterns by style-variant:
- STROKE (default): `.sb-ui-button--primary`
- FILL: `.sb-ui-button--fill.sb-ui-button--primary`
- TEXT: `.sb-ui-button--text.sb-ui-button--primary`

## Mandatory Workflow for Component Changes

```
1. Update CSS in packages/atoms/src/ or packages/molecules/src/
2. Run: pnpm run build
3. Update examples/{component}/index.html
4. Verify: open HTML in browser, check all variants
5. Commit CSS + examples together (NEVER separately)
```

**Golden Rule**: CSS changes without example updates = INCOMPLETE WORK

### Examples Quality (`examples/` folder)

The `examples/` folder is **user-facing documentation**, not testing. Users copy HTML directly into production.

- Every component needs complete, working HTML examples with ALL variants and states
- Code blocks must contain exact copy-paste HTML
- Working copy buttons: `onclick="copyCode(this)"`
- Must use `data-brand` and `data-theme` attributes
- No demo-only styles, no incomplete examples

### Creating New Atom Component

1. Create `packages/atoms/src/{component}.css` using template from `.cursor/rules/CSS.mdc`
2. Add to exports in `packages/atoms/package.json`
3. Add to `atomsFiles` array in `packages/bundle/src/builder.ts`
4. Create brand overrides if needed (NOT for layout components)
5. Create `examples/{component}/index.html` with all variants

### Adding Brand Override

1. Create `packages/brand-overrides/src/{brand}/{component}.css`
2. Wrap in `@layer brand-overrides { ... }` — only override variables that differ from base
3. Define all 5 states when changing a property
4. Use brand tokens `var(--sb-ui-color-*)`, never hardcode
5. Import from `packages/brand-overrides/src/{brand}/index.css`

## Important Files

- `.cursor/rules/CSS.mdc` — Mandatory CSS rules (applied automatically)
- `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` — Brand override rules (applied automatically)
- `packages/bundle/src/builder.ts` — Bundle generation logic and `atomsFiles` list
- `packages/atoms/src/button.css` — Gold standard component reference
- `packages/brand-overrides/src/seguros-bolivar/index.css` — Brand override imports

## Common Gotchas

1. **Always rebuild after CSS changes**: `pnpm run build` — bundle doesn't auto-update
2. **Data attributes required**: without `data-brand` and `data-theme` on `<html>`, only base styles apply
3. **Layer order matters**: the first `@layer` declaration in the bundle sets cascade order — wrong order breaks everything
4. **Stale Turbo cache**: if builds seem stale, build script already uses `--force --no-cache`
5. **Layout components have no brand overrides** — they are structural, not visual
6. **Breakpoints use `min-inline-size`** media queries (mobile-first), NOT `min-width`
