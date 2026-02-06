# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Seguros Bolívar UI** is a multi-brand enterprise Design System supporting 6 brands (Seguros Bolívar, Davivienda, Jelpit, Cien Cuadras, Doctor Aki, White Label) with light/dark themes. Built with modern CSS (Nesting, @layer, Logical Properties, clamp()) and Lit web components.

## Build & Development Commands

### Setup
```bash
pnpm install          # Install dependencies (pnpm 8.0.0+ required)
./scripts/setup.sh    # Initial project setup
```

### Development
```bash
pnpm run dev          # Start development mode (runs ./scripts/dev.sh)
pnpm run dev:storybook # Build + launch Storybook on port 6006
pnpm run demo         # Build + serve examples on port 3000
```

### Building
```bash
pnpm run build        # Clean + build all packages via Turbo + copy bundle assets
pnpm run clean        # Remove all build artifacts (.turbo, node_modules/.cache, docs, dist)
```

### Testing & Quality
```bash
pnpm run test         # Run all tests via Turbo
pnpm run test:watch   # Watch mode for tests
pnpm run test:ui      # Vitest UI interface
pnpm run lint         # Lint all packages via Turbo
pnpm run lint:fix     # Fix linting issues + format code
pnpm run format       # Format with Prettier
pnpm run check        # Run lint --fix + format:check + test
```

### Publishing & Deployment
```bash
pnpm run build:site   # Build production site (bundle + Storybook + static site)
pnpm run deploy       # Deploy to GitHub Pages
pnpm run version      # Update package versions (changesets)
pnpm run release      # Publish packages to npm (changesets)
```

## Architecture

### Monorepo Structure (Turborepo + pnpm workspaces)

```
packages/
├── tokens/           # Design tokens (JSON) → CSS variables
├── atoms/            # CSS-only components:
│   ├── Layout:       container, grid, columns, gutters, css-grid
│   └── UI:           button, input, select, table, etc.
├── molecules/        # Lit web components (modal, datepicker, toast)
├── brand-overrides/  # Brand-specific CSS variable overrides
├── bundle/           # CDN bundles (combines all packages)
└── docs/             # Storybook documentation
```

### Package Dependencies
- **tokens** → Foundation (no dependencies)
- **atoms** → Depends on tokens
- **molecules** → Depends on atoms + tokens (uses Lit)
- **brand-overrides** → Depends on atoms (overrides CSS variables)
- **bundle** → Depends on atoms + molecules + tokens (builds CDN files)
- **docs** → Depends on all packages (Storybook)

### Build Process

1. **Turbo Pipeline** (turbo.json): Orchestrates builds with dependency graph
   - Build order: tokens → atoms → molecules → brand-overrides → bundle → docs
   - Caching: All build outputs cached except `dev` and `clean` tasks

2. **Bundle Generation** (packages/bundle/src/builder.ts):
   - Creates 12 CSS bundles: 6 brands × 2 themes (light/dark)
   - Minifies CSS with cssnano + PurgeCSS
   - Bundles web components with esbuild
   - Output: `dist/sb-ui-{brand}-{theme}.min.css` + `dist/sb-ui-components.min.js`

3. **Asset Distribution** (scripts/copy-assets.js):
   - Copies bundles to `examples/dist/` and `packages/docs/.storybook/`
   - Run via `pnpm --filter @seguros-bolivar-ui/bundle run copy:all`

### CSS Architecture

**Critical: Always follow `.cursor/rules/CSS.mdc` (v3.3.0) and `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` (v2.1.0)**

#### Core Principles
- **CSS @layer System**: 8-10 layers controlling cascade priority
  - Order: `reset → tokens → base → variants → style-variants → brand-overrides → sizes → modifiers → icon-positions → states → utilities`
  - Brand overrides use `@layer brand-overrides` (no `!important` needed)

- **Logical Properties Only**: Never use physical properties
  - ❌ `width`, `height`, `padding-left`, `margin-top`
  - ✅ `inline-size`, `block-size`, `padding-inline-start`, `margin-block-start`

- **Responsive with clamp()**: No media queries for sizing
  - Example: `font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);`

- **CSS Nesting**: Always use `&` (max 3 levels deep)

- **Naming Convention**: All classes/variables prefixed `sb-ui-` or `--sb-ui-`
  - Classes: BEM format `.sb-ui-button--primary`
  - Variables: `--sb-ui-button-bg-color`

#### Brand Override System

Brands customize components by overriding CSS variables via data attributes:

```html
<html data-brand="seguros-bolivar" data-theme="light">
```

Brand overrides in `packages/brand-overrides/src/{brand}/{component}.css`:
```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .sb-ui-button--primary {
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D100);
    --sb-ui-button-primary-stroke-text-hover: var(--sb-ui-color-secondary-D100);
  }
}
```

**Variable Naming Pattern**: `--sb-ui-{component}-{variant}-{style}-{property}-{state}`
- Example: `--sb-ui-button-primary-fill-bg-hover`
- States: default, hover, active, disabled, disabled-hover (new in v2.1.0)

### Web Components (Molecules)

Built with Lit (version 3.1.2+), located in `packages/molecules/src/components/`:
- **Components**: Modal, DatePicker, Calendar, Dropdown, Toast, ToastManager, Stepper
- **Custom Elements**: Registered as `<sb-ui-modal>`, `<sb-ui-datepicker>`, etc.
- **Build**: TypeScript → Vite → bundled ES modules
- **Testing**: Vitest for unit tests

### Design Tokens

JSON tokens in `packages/tokens/src/` converted to CSS variables:
- **Structure**: `primitives/brands/{brand}.json` → brand-specific colors
- **Output**: CSS variables like `--sb-ui-color-primary-base`, `--sb-ui-color-grayscale-L100`
- **Tokens**: Colors, typography, spacing, shadows, radius

## Key Patterns

### Layout System Components

The design system includes a comprehensive layout system with 6 components:

**1. Breakpoints (Documentation Only)**
- 6 responsive breakpoints: xs (0px), sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px)
- Mobile-first approach: all responsive utilities use `min-inline-size` media queries
- Example page with interactive breakpoint detector

**2. Containers**
- Responsive containers: `.sb-ui-container` (responsive), `.sb-ui-container-fluid` (100% width)
- Breakpoint-specific: `.sb-ui-container-{sm|md|lg|xl|xxl}` for container from specific breakpoint
- Max-widths: sm (540px), md (720px), lg (960px), xl (1140px), xxl (1320px)
- Auto-centering with `margin-inline: auto` and responsive padding with `clamp()`

**3. Grid (12-Column System)**
- CSS Grid-based (not flexbox): `display: grid; grid-template-columns: repeat(12, 1fr)`
- Column classes: `.sb-ui-col-{1-12}` for mobile, `.sb-ui-col-{breakpoint}-{1-12}` for responsive
- Example: `.sb-ui-col-12 .sb-ui-col-md-6 .sb-ui-col-lg-4` (mobile full → tablet 50% → desktop 33%)
- Auto columns: `.sb-ui-col-auto` for content-based width

**4. Columns (Alignment & Ordering)**
- Alignment: `.sb-ui-col-align-self-{start|center|end|stretch}` (vertical)
- Justification: `.sb-ui-col-justify-self-{start|center|end|stretch}` (horizontal)
- Ordering: `.sb-ui-col-order-{first|last|1-5}` for visual reordering
- Positioning: `.sb-ui-col-start-{1-12}` for explicit column placement

**5. Gutters (Spacing)**
- Gap scale 0-5: `--sb-ui-gap-0` (0), `--sb-ui-gap-1` (4px), `--sb-ui-gap-2` (8px), `--sb-ui-gap-3` (16px), `--sb-ui-gap-4` (24px, default), `--sb-ui-gap-5` (48px)
- Utilities: `.sb-ui-gap-{0-5}` (both), `.sb-ui-gap-x-{0-5}` (horizontal), `.sb-ui-gap-y-{0-5}` (vertical)
- Responsive: `.sb-ui-gap-{breakpoint}-{0-5}` for breakpoint-specific spacing

**6. CSS Grid (Advanced Utilities)**
- Equal columns: `.sb-ui-grid-cols-{1-6}` (e.g., `.sb-ui-grid-cols-3` = 3 equal columns)
- Auto-fit: `.sb-ui-grid-cols-auto-fit` with `minmax(min(200px, 100%), 1fr)`
- Spanning: `.sb-ui-grid-span-col-{2|3|full}`, `.sb-ui-grid-span-row-{2|3|full}`
- Placement: `.sb-ui-place-items-{center|start|end}`, `.sb-ui-place-content-{center|space-between|space-around}`

**Important Notes:**
- Layout components do NOT have brand overrides (structural, not visual)
- All use logical properties (inline-size, block-size, padding-inline, margin-block)
- Responsive with mobile-first `min-inline-size` media queries
- Include mandatory accessibility: `prefers-reduced-motion`, `prefers-contrast`

### Creating New Atom Component

1. Create `packages/atoms/src/{component}.css` using template from `.cursor/rules/CSS.mdc`
2. Define `@layer reset, tokens, base, variants, sizes, modifiers, states, utilities`
3. Use only logical properties and clamp() for responsive values
4. Add to exports in `packages/atoms/package.json`
5. Add to `atomsFiles` array in `packages/bundle/src/builder.ts` for bundle inclusion
6. Create brand overrides in `packages/brand-overrides/src/{brand}/{component}.css` if needed (NOT for layout)

### Creating Brand Override

1. Only override CSS variables that differ from base component
2. Always use `@layer brand-overrides { ... }`
3. Define all 5 states when changing a property: default, hover, active, disabled, disabled-hover
4. Use brand tokens: `var(--sb-ui-color-*)`, never hardcode colors
5. Selector pattern:
   - STROKE: `.sb-ui-button--primary`
   - FILL: `.sb-ui-button--fill.sb-ui-button--primary`
   - TEXT: `.sb-ui-button--text.sb-ui-button--primary`

### Adding Web Component

1. Create component in `packages/molecules/src/components/{name}/`
2. Extend `LitElement` and define shadow DOM styles
3. Register with `customElements.define('sb-ui-{name}', ComponentClass)`
4. Export from `packages/molecules/src/index.ts`
5. Add to exports in `packages/molecules/package.json`

## Important Files

- **CSS Standards**: `.cursor/rules/CSS.mdc` - MANDATORY CSS architecture rules
- **Brand Override Standards**: `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` - Brand customization rules
- **Build Pipeline**: `turbo.json` - Turborepo task definitions
- **Bundle Builder**: `packages/bundle/src/builder.ts` - CDN bundle generation logic
- **Package Manager**: `pnpm-workspace.yaml` - Workspace configuration

## Common Gotchas

1. **Always rebuild after CSS changes**: Bundle doesn't auto-update; run `pnpm run build`
2. **Data attributes required**: Without `data-brand` and `data-theme`, only base styles apply
3. **Layer order matters**: Wrong `@layer` declaration breaks cascade (check console for warnings)
4. **No physical properties**: Using `width` instead of `inline-size` violates standards
5. **Disabled hover states**: Since v2.1.0, always define `-disabled-hover` variables for better UX
6. **Turbo cache**: If builds seem stale, use `pnpm run build -- --force --no-cache`

## CDN Usage

Published to npm as `@seguros-bolivar/ui-bundle`. Users load via unpkg/jsDelivr:

```html
<html data-brand="seguros-bolivar" data-theme="light">
  <link rel="stylesheet" href="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-seguros-bolivar-light.min.css">
  <script type="module" src="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"></script>
</html>
```

## Reference Documentation

- **README.md**: User-facing documentation, installation, usage examples
- **PUBLISHING_GUIDE.md**: NPM publishing workflow
- **DEPLOYMENT.md**: GitHub Pages deployment for Storybook
- **CONTRIBUTING.md**: Contribution guidelines (CSS standards, commit conventions)
- **packages/atoms/BUTTON_REFERENCE.md**: Complete button component example
