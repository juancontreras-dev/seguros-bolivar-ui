# Validación: Copy-Paste Ready con CDN (Seguros Bolívar UI)

**Contexto:** Desarrollador externo con `index.html` vacío que solo carga el bundle CSS de la marca seguros-bolivar tema light (Inicio Rápido vía CDN).

**Ámbito analizado:** `examples/columns/`, `examples/breadcrumb/`, `examples/tabs/` y dependencias en `examples/components.css`.

---

## 1. Verificación de dependencias

### Estilos que **NO** forman parte de `@seguros-bolivar/ui-bundle`

| Origen | Clases / estilos | Uso |
|--------|-------------------|-----|
| **examples/components.css** (no está en el bundle) | `*`, `body`, `.component-container`, `.component-header`, `.variant-title`, `.component-title-icon`, `.component-description`, `.variant-section`, `.states-table`, `.state-label*`, `.sb-ui-code-block*`, `.storybook-reference*`, media responsive para estas clases | Layout y presentación de la **página de demo** (títulos, secciones, bloques de código, tablas de estados). |
| **columns/index.html** `<style>` | `.demo-grid`, `.demo-item`, `.demo-item-tall`, `.copy-btn` | Solo para el **marco visual del demo** (grid de 3 columnas, cajas verdes, botón copiar). |
| **breadcrumb/index.html** `<style>` | `.breadcrumb-demo-item`, `.breadcrumb-comparison-grid`, `.breadcrumb-comparison-item`, `.practice-card*`, `.mobile-demo` | Contenedores y tarjetas del **demo** (comparativas, buenas prácticas). |
| **tabs/index.html** `<style>` | `.tabs-demo-container`, `.tabs-demo-label`, `.tab-content`, `.tab-panel` | Contenedor del demo y **estilos del contenido de los paneles** (no del componente Tabs en sí). |

Conclusión: El bundle **no** incluye `components.css` ni los `<style>` de cada ejemplo. Esos estilos son solo para la documentación. Los componentes en sí (clases `sb-ui-*` de columns, breadcrumb, tabs) **sí** están en el bundle (atoms: `columns.css`, `breadcrumb.css`, `tabs.css`).

---

## 2. Consistencia de clases – “Alineación Vertical” (Columns)

- **Snippet mostrado en el demo:**
  ```html
  <div class="sb-ui-grid">
    <div class="sb-ui-col-align-self-start">Alineado al inicio</div>
  </div>
  ```
- En el demo, el **efecto visual** se ve dentro de un grid de 3 columnas con cajas verdes (`.demo-grid`, `.demo-item`, `.demo-item-tall`). Esas clases **no** están en el bundle y **no** forman parte del snippet.

Si se copia **solo** el snippet en un `index.html` que únicamente carga el bundle:

- **Sí se verá correcto** a nivel de componente: `sb-ui-grid` y `sb-ui-col-align-self-start` están en el bundle; la alineación vertical se aplica.
- **No** se verá igual al marco del demo (sin el recuadro punteado ni las 3 cajas verdes), porque ese marco es solo decorativo y no está documentado como parte del código a copiar.

No hay dependencia oculta del snippet en clases de utilidad o contenedores externos no documentados: el snippet es autocontenido respecto al bundle.

---

## 3. Comportamiento de capas (`@layer`)

- En atoms (p. ej. `columns.css`, `breadcrumb.css`, `tabs.css`) se usa `@layer` (reset, base, utilities, etc.).
- En CSS, las reglas **sin** capa ganan sobre las que están **dentro** de una capa.

Riesgo:

- Si el usuario incluye estilos **sin** `@layer` (hojas propias o inline) que afecten los mismos elementos que la librería, puede **superar por cascada** a los estilos del bundle y “romper” la apariencia del componente.
- Ejemplo: un `div { display: block; }` sin capa puede anular un `display: grid` definido en una capa del bundle.

Recomendación para documentación: indicar que, para evitar que estilos propios pisen los componentes, se eviten selectores que apunten a los mismos elementos que la librería, o se coloquen los estilos del usuario en una capa que venga **antes** en el orden de capas (p. ej. `@layer user;` y cargar el bundle después).

---

## 4. Resultado: ¿Copy-Paste Ready al 100%?

- **Sí**, para el **contenido real del snippet** (solo clases `sb-ui-*` del bundle):
  - **Columns:** copiar el HTML del código mostrado (p. ej. `sb-ui-grid` + `sb-ui-col-align-self-*`) y pegarlo en una página que solo carga el bundle hace que el componente se vea y se comporte correctamente, aunque el “marco” del demo (grid punteado, cajas verdes) no esté.
  - **Breadcrumb:** el markup del breadcrumb (`.sb-ui-breadcrumb`, `.sb-ui-breadcrumb__list`, etc.) es portable; los contenedores del demo (comparativas, prácticas) no son parte del componente.
  - **Tabs:** la barra de pestañas (`.sb-ui-tabs`, `.sb-ui-tabs__item`, etc.) es portable; el contenido de los paneles (`.tab-content`, `.tab-panel`) es estilo de demo, no del bundle.

Fallas de portabilidad (si se busca “verse exactamente como el demo”):

| Componente / página | Falla de portabilidad |
|---------------------|------------------------|
| **Columns** | El **marco visual** del demo (grid de 3 columnas con borde punteado y cajas verdes) usa `.demo-grid`, `.demo-item`, `.demo-item-tall`, que no están en el bundle. El **snippet documentado** no los incluye y no debe hacerlo; el componente en sí es portable. |
| **Breadcrumb** | Sin falla: el snippet del breadcrumb es portable. Lo que no está en el bundle son los contenedores de la página (comparativas, tarjetas do/don’t). |
| **Tabs** | El **contenido de los paneles** (estilos de `.tab-content`, `.tab-panel`) es solo del demo. La barra de tabs (`.sb-ui-tabs`, `.sb-ui-tabs__item`) es portable. |
| **Cualquier página de examples/** | Toda la **estructura de la página** (título, descripción, secciones, bloques de código, tablas de estados) depende de `components.css` y de `<style>` locales, que **no** forman parte del bundle. Eso es esperado: el bundle solo incluye componentes; la “página de documentación” no. |

---

## 5. Resumen ejecutivo

- El **sistema es Copy-Paste Ready** para el **código de componente** que se muestra en los snippets (Columns, Breadcrumb, Tabs), usando solo el bundle CDN.
- Los demos usan **estilos extra** (en `components.css` y en `<style>` de cada HTML) **solo para la presentación de la documentación**, no para el comportamiento del componente.
- No se encontraron dependencias de clases de utilidad o contenedores **no documentados** en el snippet que impidan que el código copiado funcione solo con el bundle.
- **Riesgo de capas:** estilos del usuario sin `@layer` pueden sobrescribir estilos del bundle; se recomienda documentar buenas prácticas con `@layer` o selectores que no pisen los componentes.

**Recomendación:** En la guía de “Inicio Rápido” o en una sección de “Uso con CDN”, aclarar que:
1. Los snippets mostrados en cada componente son los que deben copiarse y solo requieren el CSS del bundle.
2. El aspecto “de la página completa” del demo (títulos, secciones, recuadros, bloques de código) no está en el bundle y no es necesario para usar el componente.

---

## 6. Ajustes realizados

Según las recomendaciones anteriores, se aplicaron estos cambios en la documentación:

| Ubicación | Cambio |
|-----------|--------|
| **guide/installation.html** | Tras el bloque "Inicio Rápido - Solo CDN" se añadió una caja informativa **"Uso con CDN – Copy-Paste de componentes"** que indica: (1) los snippets de cada componente son los que hay que copiar y solo requieren el CSS del bundle (y el script si es Web Component); (2) el aspecto de la página completa del demo no está en el bundle y no es necesario. |
| **guide/installation.html** | Tras "Ventajas del CDN" se añadió una caja de advertencia **"Tus propios estilos y la cascada CSS"** que explica el uso de `@layer` en la librería, el riesgo de que estilos sin capa pisen el bundle, y recomienda evitar selectores que afecten a los mismos elementos o usar `@layer user;` y cargar el bundle después. |
| **guide/components.html** | En el Tip inferior se añadió que los snippets son **copy-paste ready** y que solo se necesita el CSS del bundle (y el script si aplica); el resto del diseño de la página de demo no está en el bundle. |
