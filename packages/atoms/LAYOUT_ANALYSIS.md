# Análisis del módulo Layout - Seguros Bolívar UI

## Resumen

El layout de la librería está en `packages/atoms/src/` y se compone de **5 archivos** que se importan en este orden en `index.css`:

1. **container.css** – Contenedores con ancho máximo por breakpoint  
2. **grid.css** – Grid de 12 columnas + columnas responsivas  
3. **columns.css** – Utilidades de alineación, orden y posición de columnas  
4. **gutters.css** – Escala de gap y utilidades responsive  
5. **css-grid.css** – Utilidades avanzadas (columnas/filas, auto-fit, place-items/content)

---

## 1. Container (`container.css`)

### Funcionalidad

| Clase | Comportamiento |
|-------|-----------------|
| `.sb-ui-container` | Contenedor responsive: `max-inline-size` por breakpoint (sm → xxl), centrado con `margin-inline: auto`, padding con `clamp()`. |
| `.sb-ui-container-fluid` | Siempre 100% de ancho; no aplica `max-inline-size` en ningún breakpoint. |
| `.sb-ui-container-sm` | Hasta 575px: 100%. Desde 576px: aplica max-width de ese breakpoint y superiores (igual que default). |
| `.sb-ui-container-md` | Hasta 767px: 100%. Desde 768px: max 720px. |
| `.sb-ui-container-lg` | Hasta 991px: 100%. Desde 992px: max 960px. |
| `.sb-ui-container-xl` | Hasta 1199px: 100%. Desde 1200px: max 1140px. |
| `.sb-ui-container-xxl` | Hasta 1399px: 100%. Desde 1400px: max 1320px. |

### Breakpoints y max-width

| Breakpoint | min-inline-size | max-inline-size |
|------------|-----------------|-----------------|
| sm | 576px | 540px |
| md | 768px | 720px |
| lg | 992px | 960px |
| xl | 1200px | 1140px |
| xxl | 1400px | 1320px |

### Buenas prácticas

- Uso de `@layer` (reset, tokens, base, utilities).
- Variables en `:root`: `--sb-ui-container-padding-inline`, `--sb-ui-container-max-inline-size-*`.
- Solo logical properties: `inline-size`, `max-inline-size`, `padding-inline`, `margin-inline`.
- Accesibilidad: `prefers-contrast: high` (outline), `prefers-reduced-motion: reduce`.
- Reset con `all: unset` + `box-sizing: border-box`.

### Posible mejora

- Los valores de breakpoint (576, 768, 992, 1200, 1400) se repiten en container, grid, columns y gutters. Se podría centralizar en un `breakpoints.css` con variables `--sb-ui-breakpoint-sm`, etc., y usar `@custom-media` o variables en `min-inline-size` para tener una única fuente de verdad.

---

## 2. Grid (`grid.css`)

### Funcionalidad

- **Contenedor:** `.sb-ui-grid` → `display: grid`, `grid-template-columns: repeat(12, 1fr)`, `gap` por variable.
- **Columnas base:** `.sb-ui-col-1` … `.sb-ui-col-12` (span 1 a 12), `.sb-ui-col-auto`.
- **Columnas por breakpoint:** `.sb-ui-col-{sm|md|lg|xl|xxl}-{1..12}` y `-auto` en cada breakpoint (min-inline-size: 576, 768, 992, 1200, 1400).

### Tokens (en `.sb-ui-grid`)

- `--sb-ui-grid-columns: 12`
- `--sb-ui-grid-gap: var(--sb-ui-gap-4, 1.5rem)` → depende de gutters.

### Buenas prácticas

- Layers: reset, tokens, base, utilities.
- Logical: `inline-size`, `min-inline-size` en media.
- Reset con `all: unset` y `box-sizing` en el grid y en `& > *`.
- Accesibilidad: high contrast (outline en grid e hijos), reduced motion.

### Interacción con Gutters

- Si al mismo elemento le añades `.sb-ui-grid` y `.sb-ui-gap-3`, la regla de gutters (que va después en `index.css`) gana y el gap queda definido por la utilidad. Comportamiento esperado.

---

## 3. Columns (`columns.css`)

### Funcionalidad

Utilidades para **hijos** de un grid (alineación, orden, inicio de columna):

| Grupo | Clases | Propiedad CSS |
|-------|--------|----------------|
| Align self | `sb-ui-col-align-self-{start|center|end|stretch}` | `align-self` |
| Justify self | `sb-ui-col-justify-self-{start|center|end|stretch}` | `justify-self` |
| Order | `sb-ui-col-order-{first|last|1..5}` | `order` |
| Column start | `sb-ui-col-start-{1..12|auto}` | `grid-column-start` |

Cada grupo tiene variantes por breakpoint: `-sm-`, `-md-`, `-lg-`, `-xl-`, `-xxl-`.

### Buenas prácticas

- Layers: reset, base, utilities (sin tokens; son utilidades puras).
- Uso de `align-self` / `justify-self` (estándar en grid).
- Mismos breakpoints que el resto del layout.
- High contrast y reduced motion documentados (sin cambios visuales necesarios en este archivo).

### Nota RTL

- `grid-column-start` con número hace referencia al primer track en la dirección del flujo; en grid el flujo ya es lógico, por lo que no se requieren propiedades extra para RTL en este archivo.

---

## 4. Gutters (`gutters.css`)

### Funcionalidad

- **Escala de spacing en `:root`:**  
  `--sb-ui-gap-0` (0) … `--sb-ui-gap-5` (3rem).  
  Valores: 0, 0.25rem, 0.5rem, 1rem, 1.5rem, 3rem.
- **Gap total:** `.sb-ui-gap-{0..5}` → `gap: var(--sb-ui-gap-*)`.
- **Gap inline (columnas):** `.sb-ui-gap-x-{0..5}` → `column-gap`.
- **Gap block (filas):** `.sb-ui-gap-y-{0..5}` → `row-gap`.
- Todas con variantes por breakpoint: `-sm-`, `-md-`, `-lg-`, `-xl-`, `-xxl-`.

### Buenas prácticas

- Variables en `:root` para que cualquier componente pueda usar `--sb-ui-gap-*`.
- `column-gap` y `row-gap` son la forma estándar de controlar gap en grid/flex; no hay equivalentes “solo lógicos” en CSS todavía.
- Layers: reset, tokens, base, utilities.

---

## 5. CSS Grid utilities (`css-grid.css`)

### Funcionalidad

Utilidades que **no** incluyen `display: grid` por defecto; se combinan entre sí o con `.sb-ui-grid`:

| Grupo | Clases | Uso |
|-------|--------|-----|
| Columnas | `.sb-ui-grid-cols-{1..6}` | `display: grid` + `grid-template-columns: repeat(N, 1fr)`. |
| Auto-fit | `.sb-ui-grid-cols-auto-fit` | `repeat(auto-fit, minmax(min(200px, 100%), 1fr))`. |
| Filas | `.sb-ui-grid-rows-{1..4}` | Solo `grid-template-rows`; hay que usar también una clase que ponga `display: grid` (p. ej. `sb-ui-grid-cols-*`). |
| Span col | `.sb-ui-grid-span-col-{2|3|full}` | `grid-column: span 2` etc. |
| Span row | `.sb-ui-grid-span-row-{2|3|full}` | `grid-row: span 2` etc. |
| Place items | `.sb-ui-place-items-{start|center|end|stretch}` | `place-items`. |
| Place content | `.sb-ui-place-content-{start|center|end|space-between|space-around|space-evenly}` | `place-content`. |

### Buenas prácticas

- Layers: reset, base, utilities.
- Logical: `min-inline-size` en media (en otros archivos); aquí se usan propiedades estándar de grid.
- Auto-fit con `minmax(min(200px, 100%), 1fr)` evita overflow en viewports pequeños.
- Accesibilidad: high contrast (outline en `[class*='sb-ui-grid-']`), reduced motion.

### Dependencia entre clases

- `.sb-ui-grid-rows-*` y `.sb-ui-place-*` deben usarse en elementos que ya tengan `display: grid` (p. ej. con `.sb-ui-grid-cols-*` o `.sb-ui-grid`).

---

## Orden de importación y cascada

En `index.css` el orden es:

1. container  
2. grid  
3. columns  
4. gutters  
5. css-grid  

Consecuencias relevantes:

- **Gutters** puede sobrescribir el `gap` de `.sb-ui-grid` si se usan ambas clases en el mismo elemento.
- **css-grid** no redefine el grid de 12 columnas; es un conjunto adicional de utilidades (columnas fijas, auto-fit, rows, place-*).

---

## Checklist de estándares del Design System

| Criterio | container | grid | columns | gutters | css-grid |
|----------|-----------|------|---------|---------|----------|
| Prefijo `sb-ui-` | Sí | Sí | Sí | Sí | Sí |
| Variables `--sb-ui-*` | Sí | Sí | N/A | Sí | N/A |
| @layer | Sí | Sí | Sí | Sí | Sí |
| Logical properties | Sí | Sí | Parcial* | Parcial** | Sí (donde aplica) |
| Breakpoints unificados | 576…1400 | 576…1400 | 576…1400 | 576…1400 | N/A |
| prefers-contrast | Sí | Sí | Comentado | Comentado | Sí |
| prefers-reduced-motion | Sí | Sí | Comentado | Comentado | Sí |
| Documentación en cabecera | Sí | Sí | Sí | Sí | Sí |

\* columns: `align-self`, `justify-self`, `order`, `grid-column-start` son estándar en grid.  
\** gutters: `column-gap` / `row-gap` son la API actual de CSS para gap.

---

## Recomendaciones

1. **Breakpoints centralizados**  
   Crear un archivo (p. ej. `breakpoints.css` o dentro de tokens) que defina solo variables o custom media para 576, 768, 992, 1200, 1400, y que container, grid, columns y gutters los referencien. Así se mantiene una sola fuente de verdad.

2. **Tokens de container**  
   Valorar mover `--sb-ui-container-*` de `:root` a `.sb-ui-container` si se quiere acotar el alcance de las variables solo al componente (opcional; con `:root` también es válido).

3. **css-grid y documentación**  
   Dejar explícito en comentarios o en la guía que:
   - `.sb-ui-grid-rows-*` y `.sb-ui-place-*` requieren un contexto con `display: grid` (p. ej. `.sb-ui-grid-cols-*` o `.sb-ui-grid`).
   - `.sb-ui-grid-cols-*` ya incluye `display: grid`.

4. **Ejemplos**  
   Los ejemplos en `examples/` (breakpoints, container, grid, columns, gutters, css-grid) son de documentación; los estilos de “página” (tablas, cards, títulos) pueden seguir en `components.css` o en cada ejemplo. Lo importante es que las clases de layout usadas en los ejemplos sean solo las de la librería (sin duplicar reglas de layout en el ejemplo).

---

## Cambio realizado en la librería

- **columns.css:** se añadió un bloque vacío `@layer reset { }` con comentario para mantener coherencia con el resto de archivos que declaran la capa `reset`.
