import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Usar fullscreen para que el layout se vea correctamente
    docs: {
      canvas: {
        layout: 'fullscreen', // También para el canvas en docs
      },
      description: {
        component: `
Sistema de Layout moderno del Seguros Bolívar UI Design System basado en CSS Grid.

## Componentes del Sistema

El sistema de layout se compone de 5 módulos principales:

- **Container**: Contenedores responsive con max-width por breakpoint
- **Grid**: Sistema de 12 columnas con CSS Grid moderno
- **Columns**: Utilidades de alineación, orden y posición de columnas
- **Gutters**: Escala de gap y utilidades responsive
- **CSS Grid**: Utilidades avanzadas (auto-fit, spanning, place-items)

## Breakpoints

| Breakpoint | Min Width | Container Max Width |
|------------|-----------|---------------------|
| xs         | 0px       | 100%                |
| sm         | 576px     | 540px               |
| md         | 768px     | 720px               |
| lg         | 992px     | 960px               |
| xl         | 1200px    | 1140px              |
| xxl        | 1400px    | 1320px              |

## Características

✨ CSS Grid moderno con 12 columnas  
✨ Responsive mobile-first  
✨ Logical Properties (RTL/LTR)  
✨ clamp() para spacing responsive  
✨ @layer para control de cascada  
✨ Accesibilidad integrada  

## Uso Rápido

\`\`\`html
<!-- Container responsive -->
<div class="sb-ui-container">
  <!-- Grid de 12 columnas -->
  <div class="sb-ui-grid sb-ui-gap-4">
    <!-- Mobile: full width, Tablet: 50%, Desktop: 33% -->
    <div class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4">Columna 1</div>
    <div class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4">Columna 2</div>
    <div class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4">Columna 3</div>
  </div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Container
 *
 * Contenedores responsive con ancho máximo controlado por breakpoint.
 *
 * ### Variantes
 * - `.sb-ui-container`: Responsive (default) - aplica max-width en cada breakpoint
 * - `.sb-ui-container-fluid`: Siempre 100% de ancho
 * - `.sb-ui-container-{sm|md|lg|xl|xxl}`: Responsive desde breakpoint específico
 */
export const Container: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; background: var(--sb-ui-color-grayscale-L400); width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Containers</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100); max-inline-size: 800px;">
        Los containers limitan el ancho máximo del contenido y lo centran horizontalmente.
        Cambia el tamaño de la ventana para ver el comportamiento responsive.
      </p>

      <!-- Container Default -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Default Container (.sb-ui-container)
        </h3>
        <div
          class="sb-ui-container"
          style="background: var(--sb-ui-color-primary-L400); padding: 2rem; border: 2px dashed var(--sb-ui-color-primary-base); min-block-size: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
          <code style="font-size: 1rem; font-weight: 600;">.sb-ui-container</code>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; margin-bottom: 0;">
            Max-width: 540px@sm, 720px@md, 960px@lg, 1140px@xl, 1320px@xxl
          </p>
        </div>
      </div>

      <!-- Container Fluid -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Fluid Container (.sb-ui-container-fluid)
        </h3>
        <div
          class="sb-ui-container-fluid"
          style="background: var(--sb-ui-color-secondary-L400); padding: 2rem; border: 2px dashed var(--sb-ui-color-secondary-base); min-block-size: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
          <code style="font-size: 1rem; font-weight: 600;">.sb-ui-container-fluid</code>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; margin-bottom: 0;">
            Siempre 100% de ancho (sin max-width)
          </p>
        </div>
      </div>

      <!-- Container MD -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Breakpoint Container (.sb-ui-container-md)
        </h3>
        <div
          class="sb-ui-container-md"
          style="background: var(--sb-ui-color-tertiary-L400); padding: 2rem; border: 2px dashed var(--sb-ui-color-tertiary-base); min-block-size: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
          <code style="font-size: 1rem; font-weight: 600;">.sb-ui-container-md</code>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; margin-bottom: 0;">
            100% hasta 767px, luego max-width: 720px
          </p>
        </div>
      </div>

      <!-- Comparison -->
      <div style="margin-bottom: 3rem; background: white; padding: 2rem; border-radius: 8px;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Comparación Visual
        </h3>
        <div style="margin-bottom: 1rem;">
          <small style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Container (limitado):</small>
          <div class="sb-ui-container" style="background: #e3f2fd; padding: 1rem; border-left: 4px solid #2196f3;">
            Este contenedor tiene ancho limitado y se centra
          </div>
        </div>
        <div>
          <small style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Container Fluid (full width):</small>
          <div class="sb-ui-container-fluid" style="background: #fff3e0; padding: 1rem; border-left: 4px solid #ff9800;">
            Este contenedor siempre ocupa el 100% del ancho disponible
          </div>
        </div>
      </div>

      <!-- Nested Example -->
      <div style="background: white; padding: 2rem; border-radius: 8px;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Container con Grid
        </h3>
        <div class="sb-ui-container">
          <div class="sb-ui-grid sb-ui-gap-4">
            <div
              class="sb-ui-col-12 sb-ui-col-md-6"
              style="background: var(--sb-ui-color-primary-L300); padding: 2rem; border-radius: 4px; text-align: center; font-weight: 600;"
            >
              Columna 1
              <div style="font-size: 0.75rem; font-weight: 400; margin-top: 0.5rem;">
                Mobile: 100% | Desktop: 50%
              </div>
            </div>
            <div
              class="sb-ui-col-12 sb-ui-col-md-6"
              style="background: var(--sb-ui-color-secondary-L300); padding: 2rem; border-radius: 4px; text-align: center; font-weight: 600;"
            >
              Columna 2
              <div style="font-size: 0.75rem; font-weight: 400; margin-top: 0.5rem;">
                Mobile: 100% | Desktop: 50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Grid de 12 Columnas
 *
 * Sistema de grid basado en CSS Grid con 12 columnas. Incluye clases responsive
 * para cada breakpoint.
 *
 * ### Uso básico
 * ```html
 * <div class="sb-ui-grid sb-ui-gap-4">
 *   <div class="sb-ui-col-6">50% width</div>
 *   <div class="sb-ui-col-6">50% width</div>
 * </div>
 * ```
 *
 * ### Responsive
 * ```html
 * <div class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4">
 *   Mobile: 100%, Tablet: 50%, Desktop: 33%
 * </div>
 * ```
 */
export const Grid: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Grid de 12 Columnas</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        El grid usa CSS Grid moderno con 12 columnas. Cada columna es responsive y se adapta
        a diferentes tamaños de pantalla.
      </p>

      <!-- Equal Columns -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          12 Columnas Iguales (.sb-ui-col-1 cada una)
        </h3>
        <div class="sb-ui-grid sb-ui-gap-2">
          ${Array.from({ length: 12 }).map(
            (_, i) => html`
              <div
                class="sb-ui-col-1"
                style="background: var(--sb-ui-color-primary-base); color: white; padding: 1rem 0.5rem; text-align: center; font-size: 0.875rem; font-weight: 600; border-radius: 4px;"
              >
                ${i + 1}
              </div>
            `
          )}
        </div>
      </div>

      <!-- Different Sizes -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Diferentes Tamaños de Columnas
        </h3>
        <div class="sb-ui-grid sb-ui-gap-3">
          <div
            class="sb-ui-col-12"
            style="background: var(--sb-ui-color-primary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-12 (100%)
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-6 (50%)
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-6 (50%)
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-4 (33%)
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-4 (33%)
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-4 (33%)
          </div>
          <div
            class="sb-ui-col-3"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-3
          </div>
          <div
            class="sb-ui-col-3"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-3
          </div>
          <div
            class="sb-ui-col-3"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-3
          </div>
          <div
            class="sb-ui-col-3"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1.5rem; text-align: center; font-weight: 600; border-radius: 4px;"
          >
            .sb-ui-col-3
          </div>
        </div>
      </div>

      <!-- Responsive Grid -->
      <div style="margin-bottom: 3rem; padding: 1.5rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Grid Responsive ⭐
        </h3>
        <div style="margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 4px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <p style="margin: 0; font-size: 0.875rem; font-weight: 600;">
            📱 Mobile (XS): 100% de ancho (1 columna)
          </p>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; font-weight: 600;">
            📱 Tablet (MD ≥768px): 50% de ancho (2 columnas)
          </p>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; font-weight: 600;">
            💻 Desktop (LG ≥992px): 33% de ancho (3 columnas)
          </p>
          <code style="display: block; margin-top: 1rem; padding: 0.5rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 4px; font-size: 0.75rem;">
            class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4"
          </code>
        </div>
        <div class="sb-ui-grid sb-ui-gap-4">
          ${Array.from({ length: 6 }).map(
            (_, i) => html`
              <div
                class="sb-ui-col-12 sb-ui-col-md-6 sb-ui-col-lg-4"
                style="background: linear-gradient(135deg, var(--sb-ui-color-primary-base), var(--sb-ui-color-primary-D100)); color: white; padding: 2rem; text-align: center; border-radius: 8px; font-weight: 600; font-size: 1.25rem;"
              >
                Item ${i + 1}
              </div>
            `
          )}
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100); font-style: italic;">
          💡 Tip: Redimensiona la ventana del navegador para ver cómo se adaptan las columnas
        </p>
      </div>

      <!-- Auto Column -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Auto Column
        </h3>
        <div class="sb-ui-grid sb-ui-gap-3">
          <div
            class="sb-ui-col-auto"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1rem;"
          >
            .sb-ui-col-auto (se ajusta al contenido)
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            .sb-ui-col-6
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Breakpoints
 *
 * Sistema de 6 breakpoints mobile-first con `min-width` media queries.
 *
 * Todas las clases de columnas, gutters, columns y css-grid tienen variantes
 * responsive usando sufijos: `-sm-`, `-md-`, `-lg-`, `-xl-`, `-xxl-`.
 */
export const Breakpoints: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Sistema de Breakpoints</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Redimensiona la ventana para ver cómo cambian los layouts en diferentes tamaños.
      </p>

      <!-- Breakpoints Table -->
      <div
        style="overflow-x: auto; margin-bottom: 3rem; border: 1px solid var(--sb-ui-color-grayscale-L200); border-radius: 8px;"
      >
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--sb-ui-color-primary-base); color: white;">
              <th style="padding: 1rem; text-align: left;">Breakpoint</th>
              <th style="padding: 1rem; text-align: left;">Min Width</th>
              <th style="padding: 1rem; text-align: left;">Container Max</th>
              <th style="padding: 1rem; text-align: left;">Sufijo</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--sb-ui-color-grayscale-L200);">
              <td style="padding: 1rem;"><strong>XS</strong> (Extra Small)</td>
              <td style="padding: 1rem;"><code>0px</code></td>
              <td style="padding: 1rem;">100%</td>
              <td style="padding: 1rem;"><em>(sin sufijo)</em></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--sb-ui-color-grayscale-L200);">
              <td style="padding: 1rem;"><strong>SM</strong> (Small)</td>
              <td style="padding: 1rem;"><code>576px</code></td>
              <td style="padding: 1rem;">540px</td>
              <td style="padding: 1rem;"><code>-sm-</code></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--sb-ui-color-grayscale-L200);">
              <td style="padding: 1rem;"><strong>MD</strong> (Medium)</td>
              <td style="padding: 1rem;"><code>768px</code></td>
              <td style="padding: 1rem;">720px</td>
              <td style="padding: 1rem;"><code>-md-</code></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--sb-ui-color-grayscale-L200);">
              <td style="padding: 1rem;"><strong>LG</strong> (Large)</td>
              <td style="padding: 1rem;"><code>992px</code></td>
              <td style="padding: 1rem;">960px</td>
              <td style="padding: 1rem;"><code>-lg-</code></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--sb-ui-color-grayscale-L200);">
              <td style="padding: 1rem;"><strong>XL</strong> (Extra Large)</td>
              <td style="padding: 1rem;"><code>1200px</code></td>
              <td style="padding: 1rem;">1140px</td>
              <td style="padding: 1rem;"><code>-xl-</code></td>
            </tr>
            <tr>
              <td style="padding: 1rem;"><strong>XXL</strong> (Extra Extra Large)</td>
              <td style="padding: 1rem;"><code>1400px</code></td>
              <td style="padding: 1rem;">1320px</td>
              <td style="padding: 1rem;"><code>-xxl-</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Responsive Demo -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Demo Responsive
        </h3>
        <div class="sb-ui-grid sb-ui-gap-3">
          <div
            class="sb-ui-col-12 sb-ui-col-sm-6 sb-ui-col-md-4 sb-ui-col-lg-3 sb-ui-col-xl-2"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Columna Responsive</div>
            <div style="font-size: 0.75rem;">
              XS: 100%<br />
              SM: 50%<br />
              MD: 33%<br />
              LG: 25%<br />
              XL: 16%
            </div>
          </div>
          <div
            class="sb-ui-col-12 sb-ui-col-sm-6 sb-ui-col-md-4 sb-ui-col-lg-3 sb-ui-col-xl-2"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Columna Responsive</div>
            <div style="font-size: 0.75rem;">
              XS: 100%<br />
              SM: 50%<br />
              MD: 33%<br />
              LG: 25%<br />
              XL: 16%
            </div>
          </div>
          <div
            class="sb-ui-col-12 sb-ui-col-sm-6 sb-ui-col-md-4 sb-ui-col-lg-3 sb-ui-col-xl-2"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Columna Responsive</div>
            <div style="font-size: 0.75rem;">
              XS: 100%<br />
              SM: 50%<br />
              MD: 33%<br />
              LG: 25%<br />
              XL: 16%
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Gutters (Gap)
 *
 * Sistema de espaciado con escala de 0-5 para controlar el gap entre elementos.
 *
 * ### Escala
 * - `0`: 0
 * - `1`: 0.25rem (4px)
 * - `2`: 0.5rem (8px)
 * - `3`: 1rem (16px)
 * - `4`: 1.5rem (24px) - responsive con clamp()
 * - `5`: 3rem (48px) - responsive con clamp()
 *
 * ### Utilidades
 * - `.sb-ui-gap-{0-5}`: Gap en ambas direcciones
 * - `.sb-ui-gap-x-{0-5}`: Gap horizontal (column-gap)
 * - `.sb-ui-gap-y-{0-5}`: Gap vertical (row-gap)
 */
export const Gutters: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Gutters (Espaciado)</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Sistema de espaciado con 6 niveles (0-5) para controlar el gap entre elementos del grid.
      </p>

      <!-- Gap Scale -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Escala de Gap (0 = sin espacio, 5 = máximo espacio)
        </h3>
        ${[
          { gap: 0, size: '0' },
          { gap: 1, size: '0.25rem (4px)' },
          { gap: 2, size: '0.5rem (8px)' },
          { gap: 3, size: '1rem (16px)' },
          { gap: 4, size: '1.5rem (24px) - responsive' },
          { gap: 5, size: '3rem (48px) - responsive' },
        ].map(
          ({ gap, size }) => html`
            <div style="margin-bottom: 2rem; padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4 style="margin: 0;">
                  <code style="background: var(--sb-ui-color-primary-base); color: white; padding: 0.25rem 0.75rem; border-radius: 4px;">.sb-ui-gap-${gap}</code>
                </h4>
                <span style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">${size}</span>
              </div>
              <div class="sb-ui-grid sb-ui-gap-${gap}">
                <div
                  class="sb-ui-col-4"
                  style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center; font-weight: 600; border-radius: 4px;"
                >
                  Col 1
                </div>
                <div
                  class="sb-ui-col-4"
                  style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center; font-weight: 600; border-radius: 4px;"
                >
                  Col 2
                </div>
                <div
                  class="sb-ui-col-4"
                  style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center; font-weight: 600; border-radius: 4px;"
                >
                  Col 3
                </div>
              </div>
            </div>
          `
        )}
      </div>

      <!-- Gap X (horizontal) -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Gap Horizontal (Column Gap)
        </h3>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">
          Solo afecta el espacio horizontal entre columnas.
        </p>
        <div class="sb-ui-grid sb-ui-gap-x-5 sb-ui-gap-y-1">
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            Col 1
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            Col 2
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            Col 3
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            Col 4
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            Col 5
          </div>
          <div
            class="sb-ui-col-4"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            Col 6
          </div>
        </div>
        <code style="display: block; margin-top: 0.5rem;"
          >.sb-ui-gap-x-5 .sb-ui-gap-y-1</code
        >
      </div>

      <!-- Gap Y (vertical) -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Gap Vertical (Row Gap)
        </h3>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">
          Solo afecta el espacio vertical entre filas.
        </p>
        <div class="sb-ui-grid sb-ui-gap-x-1 sb-ui-gap-y-5">
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            Row 1
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            Row 1
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            Row 2
          </div>
          <div
            class="sb-ui-col-6"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            Row 2
          </div>
        </div>
        <code style="display: block; margin-top: 0.5rem;"
          >.sb-ui-gap-x-1 .sb-ui-gap-y-5</code
        >
      </div>
    </div>
  `,
};

/**
 * ## Columns Utilities
 *
 * Utilidades para controlar la alineación, orden y posición de columnas dentro
 * del grid.
 *
 * ### Alineación
 * - **Align Self**: `.sb-ui-col-align-self-{start|center|end|stretch}`
 * - **Justify Self**: `.sb-ui-col-justify-self-{start|center|end|stretch}`
 *
 * ### Orden
 * - `.sb-ui-col-order-first` (order: -1)
 * - `.sb-ui-col-order-last` (order: 999)
 * - `.sb-ui-col-order-{1-12}` (order: N)
 *
 * ### Posición
 * - `.sb-ui-col-start-{1-12}`: Inicia en columna N
 * - `.sb-ui-col-start-auto`: Posición automática
 */
export const Columns: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Column Utilities</h2>

      <!-- Align Self -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Align Self (Alineación Vertical)
        </h3>
        <div
          class="sb-ui-grid sb-ui-gap-3"
          style="min-block-size: 200px; background: var(--sb-ui-color-grayscale-L400); padding: 1rem;"
        >
          <div
            class="sb-ui-col-3 sb-ui-col-align-self-start"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">align-self-start</code>
          </div>
          <div
            class="sb-ui-col-3 sb-ui-col-align-self-center"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">align-self-center</code>
          </div>
          <div
            class="sb-ui-col-3 sb-ui-col-align-self-end"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">align-self-end</code>
          </div>
          <div
            class="sb-ui-col-3 sb-ui-col-align-self-stretch"
            style="background: var(--sb-ui-color-feedback-info-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">align-self-stretch</code>
          </div>
        </div>
      </div>

      <!-- Justify Self -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Justify Self (Alineación Horizontal)
        </h3>
        <div class="sb-ui-grid sb-ui-gap-3">
          <div
            class="sb-ui-col-12 sb-ui-col-justify-self-start"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; inline-size: auto;"
          >
            <code>justify-self-start</code>
          </div>
          <div
            class="sb-ui-col-12 sb-ui-col-justify-self-center"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; inline-size: auto;"
          >
            <code>justify-self-center</code>
          </div>
          <div
            class="sb-ui-col-12 sb-ui-col-justify-self-end"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; inline-size: auto;"
          >
            <code>justify-self-end</code>
          </div>
        </div>
      </div>

      <!-- Order -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Order (Reordenamiento)
        </h3>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">
          Los elementos aparecen reordenados visualmente sin cambiar el HTML.
        </p>
        <div class="sb-ui-grid sb-ui-gap-3">
          <div
            class="sb-ui-col-4 sb-ui-col-order-3"
            style="background: var(--sb-ui-color-feedback-error-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600;">Tercero (en HTML)</div>
            <code style="font-size: 0.75rem;">.sb-ui-col-order-3</code>
          </div>
          <div
            class="sb-ui-col-4 sb-ui-col-order-1"
            style="background: var(--sb-ui-color-feedback-success-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600;">Primero (en HTML)</div>
            <code style="font-size: 0.75rem;">.sb-ui-col-order-1</code>
          </div>
          <div
            class="sb-ui-col-4 sb-ui-col-order-2"
            style="background: var(--sb-ui-color-feedback-warning-L300); padding: 1rem; text-align: center;"
          >
            <div style="font-weight: 600;">Segundo (en HTML)</div>
            <code style="font-size: 0.75rem;">.sb-ui-col-order-2</code>
          </div>
        </div>
      </div>

      <!-- Column Start -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Column Start (Posicionamiento)
        </h3>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">
          Define explícitamente en qué columna del grid debe iniciar el elemento.
        </p>
        <div class="sb-ui-grid sb-ui-gap-2">
          <div
            class="sb-ui-col-4 sb-ui-col-start-1"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">.sb-ui-col-start-1</code>
          </div>
          <div
            class="sb-ui-col-4 sb-ui-col-start-5"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">.sb-ui-col-start-5</code>
          </div>
          <div
            class="sb-ui-col-4 sb-ui-col-start-9"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            <code style="font-size: 0.75rem;">.sb-ui-col-start-9</code>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## CSS Grid Utilities
 *
 * Utilidades avanzadas para layouts complejos con CSS Grid.
 *
 * ### Grid Columns
 * - `.sb-ui-grid-cols-{1-6}`: N columnas iguales
 * - `.sb-ui-grid-cols-auto-fit`: Columnas auto-ajustables (min 200px)
 *
 * ### Grid Rows
 * - `.sb-ui-grid-rows-{1-4}`: N filas iguales
 *
 * ### Spanning
 * - `.sb-ui-grid-span-col-{2|3|full}`: Ocupa N columnas
 * - `.sb-ui-grid-span-row-{2|3|full}`: Ocupa N filas
 *
 * ### Placement
 * - `.sb-ui-place-items-{start|center|end|stretch}`
 * - `.sb-ui-place-content-{start|center|end|space-between|space-around|space-evenly}`
 */
export const CSSGrid: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">CSS Grid Utilities</h2>

      <!-- Grid Cols -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Grid Columns
        </h3>
        ${[2, 3, 4].map(
          (cols) => html`
            <div style="margin-bottom: 2rem;">
              <h4 style="margin-bottom: 0.5rem;">
                <code>.sb-ui-grid-cols-${cols}</code> (${cols} columnas iguales)
              </h4>
              <div class="sb-ui-grid-cols-${cols} sb-ui-gap-3">
                ${Array.from({ length: cols }).map(
                  (_, i) => html`
                    <div
                      style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
                    >
                      Col ${i + 1}
                    </div>
                  `
                )}
              </div>
            </div>
          `
        )}
      </div>

      <!-- Auto Fit -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Auto Fit (Responsive Automático)
        </h3>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D100);">
          Las columnas se ajustan automáticamente al espacio disponible (min: 200px).
        </p>
        <div class="sb-ui-grid-cols-auto-fit sb-ui-gap-4">
          ${Array.from({ length: 8 }).map(
            (_, i) => html`
              <div
                style="background: var(--sb-ui-color-secondary-L300); padding: 1.5rem; text-align: center;"
              >
                Item ${i + 1}
              </div>
            `
          )}
        </div>
      </div>

      <!-- Spanning -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Grid Spanning (Colspan/Rowspan)
        </h3>
        <div class="sb-ui-grid-cols-4 sb-ui-gap-3">
          <div
            class="sb-ui-grid-span-col-2"
            style="background: var(--sb-ui-color-primary-L300); padding: 1rem; text-align: center;"
          >
            <code>.sb-ui-grid-span-col-2</code>
            <br />
            (ocupa 2 columnas)
          </div>
          <div
            class="sb-ui-grid-span-col-2"
            style="background: var(--sb-ui-color-secondary-L300); padding: 1rem; text-align: center;"
          >
            <code>.sb-ui-grid-span-col-2</code>
            <br />
            (ocupa 2 columnas)
          </div>
          <div
            class="sb-ui-grid-span-col-full"
            style="background: var(--sb-ui-color-tertiary-L300); padding: 1rem; text-align: center;"
          >
            <code>.sb-ui-grid-span-col-full</code> (ocupa todas las columnas)
          </div>
        </div>
      </div>

      <!-- Place Items -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Place Items (Alineación de Items)
        </h3>
        <div class="sb-ui-grid-cols-2 sb-ui-gap-3">
          ${['start', 'center', 'end', 'stretch'].map(
            (placement) => html`
              <div
                class="sb-ui-grid-cols-2 sb-ui-place-items-${placement} sb-ui-gap-2"
                style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; min-block-size: 150px;"
              >
                <div
                  style="background: var(--sb-ui-color-primary-base); color: white; padding: 0.5rem;"
                >
                  Item
                </div>
                <div
                  style="background: var(--sb-ui-color-secondary-base); color: white; padding: 0.5rem;"
                >
                  Item
                </div>
                <div
                  style="position: absolute; top: 0.5rem; left: 0.5rem; background: white; padding: 0.25rem; font-size: 0.75rem;"
                >
                  <code>.sb-ui-place-items-${placement}</code>
                </div>
              </div>
            `
          )}
        </div>
      </div>

      <!-- Place Content -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Place Content (Alineación de Grid)
        </h3>
        <div class="sb-ui-grid-cols-3 sb-ui-gap-3">
          ${['center', 'space-between', 'space-evenly'].map(
            (placement) => html`
              <div
                class="sb-ui-grid-cols-2 sb-ui-place-content-${placement} sb-ui-gap-2"
                style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; min-block-size: 200px; position: relative;"
              >
                <div
                  style="background: var(--sb-ui-color-primary-base); color: white; padding: 0.5rem; inline-size: 60px; block-size: 60px;"
                ></div>
                <div
                  style="background: var(--sb-ui-color-secondary-base); color: white; padding: 0.5rem; inline-size: 60px; block-size: 60px;"
                ></div>
                <div
                  style="position: absolute; top: 0.5rem; left: 0.5rem; background: white; padding: 0.25rem; font-size: 0.65rem;"
                >
                  <code>.place-content-${placement}</code>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Ejemplos Prácticos
 *
 * Layouts reales combinando diferentes utilidades del sistema.
 */
export const Examples: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <div style="padding: 2rem; width: 100%; box-sizing: border-box;">
      <h2 style="margin-bottom: 1rem;">Ejemplos Prácticos</h2>

      <!-- Dashboard Layout -->
      <div style="margin-bottom: 4rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Dashboard Layout
        </h3>
        <div class="sb-ui-container">
          <div class="sb-ui-grid sb-ui-gap-4">
            <!-- Header -->
            <div
              class="sb-ui-col-12"
              style="background: var(--sb-ui-color-primary-base); color: white; padding: 1.5rem;"
            >
              <h1 style="margin: 0;">Dashboard</h1>
            </div>

            <!-- Sidebar -->
            <div
              class="sb-ui-col-12 sb-ui-col-lg-3"
              style="background: var(--sb-ui-color-grayscale-L400); padding: 1.5rem;"
            >
              <h3>Navegación</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;">Inicio</li>
                <li style="padding: 0.5rem 0;">Reportes</li>
                <li style="padding: 0.5rem 0;">Configuración</li>
              </ul>
            </div>

            <!-- Main Content -->
            <div class="sb-ui-col-12 sb-ui-col-lg-9">
              <div class="sb-ui-grid sb-ui-gap-4">
                ${Array.from({ length: 6 }).map(
                  (_, i) => html`
                    <div
                      class="sb-ui-col-12 sb-ui-col-md-6"
                      style="background: var(--sb-ui-color-secondary-L400); padding: 1.5rem;"
                    >
                      <h4 style="margin-top: 0;">Card ${i + 1}</h4>
                      <p>Contenido de la tarjeta</p>
                    </div>
                  `
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div style="margin-bottom: 4rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Product Grid
        </h3>
        <div class="sb-ui-container">
          <div class="sb-ui-grid-cols-auto-fit sb-ui-gap-4">
            ${Array.from({ length: 8 }).map(
              (_, i) => html`
                <div
                  style="background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; overflow: hidden;"
                >
                  <div
                    style="background: var(--sb-ui-color-primary-L300); block-size: 150px; display: grid; place-items: center; font-size: 2rem; color: var(--sb-ui-color-primary-base);"
                  >
                    🏠
                  </div>
                  <div style="padding: 1rem;">
                    <h4 style="margin-top: 0;">Producto ${i + 1}</h4>
                    <p style="margin-bottom: 0; color: var(--sb-ui-color-grayscale-D100);">
                      $999.99
                    </p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>

      <!-- Form Layout -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">
          Form Layout
        </h3>
        <div class="sb-ui-container-md">
          <div class="sb-ui-grid sb-ui-gap-4">
            <div
              class="sb-ui-col-12"
              style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; border-radius: 4px;"
            >
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;"
                >Nombre completo</label
              >
              <div style="background: white; padding: 0.5rem; border-radius: 4px;">Input</div>
            </div>

            <div
              class="sb-ui-col-12 sb-ui-col-md-6"
              style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; border-radius: 4px;"
            >
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;"
                >Email</label
              >
              <div style="background: white; padding: 0.5rem; border-radius: 4px;">Input</div>
            </div>

            <div
              class="sb-ui-col-12 sb-ui-col-md-6"
              style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; border-radius: 4px;"
            >
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;"
                >Teléfono</label
              >
              <div style="background: white; padding: 0.5rem; border-radius: 4px;">Input</div>
            </div>

            <div
              class="sb-ui-col-12"
              style="background: var(--sb-ui-color-grayscale-L400); padding: 1rem; border-radius: 4px;"
            >
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;"
                >Mensaje</label
              >
              <div
                style="background: white; padding: 0.5rem; border-radius: 4px; min-block-size: 100px;"
              >
                Textarea
              </div>
            </div>

            <div
              class="sb-ui-col-12 sb-ui-col-justify-self-end"
              style="inline-size: auto; background: var(--sb-ui-color-primary-base); color: white; padding: 1rem 2rem; border-radius: 4px; text-align: center;"
            >
              Enviar
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
