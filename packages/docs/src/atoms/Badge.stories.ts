import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * # Badge Component
 *
 * <div style="display: inline-flex; gap: 0.5rem; margin-bottom: 1rem;">
 *   <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">🎨 CSS PURO</span>
 *   <span style="background: #F3E5F5; color: #7B1FA2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">❌ NO requiere JS</span>
 *   <span style="background: #E8F5E9; color: #388E3C; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">✅ Solo HTML + CSS</span>
 * </div>
 *
 * Indicadores visuales de feedback que comunican estados (error, warning, info, success).
 * Disponibles en 3 tamaños con soporte para texto o icono (son mutuamente excluyentes).
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Tipo** | | |
 * | Badge de error (default) | `.sb-ui-badge--error` | `<span class="sb-ui-badge sb-ui-badge--error">8</span>` |
 * | Badge de advertencia | `.sb-ui-badge--warning` | `<span class="sb-ui-badge sb-ui-badge--warning">8</span>` |
 * | Badge de información | `.sb-ui-badge--info` | `<span class="sb-ui-badge sb-ui-badge--info">8</span>` |
 * | Badge de éxito | `.sb-ui-badge--success` | `<span class="sb-ui-badge sb-ui-badge--success">8</span>` |
 * | **Tamaños** | | |
 * | Grande (default) | `.sb-ui-badge--large` o sin clase | `<span class="sb-ui-badge">8</span>` |
 * | Mediano | `.sb-ui-badge--medium` | `<span class="sb-ui-badge sb-ui-badge--medium">8</span>` |
 * | Pequeño | `.sb-ui-badge--small` | `<span class="sb-ui-badge sb-ui-badge--small">8</span>` |
 * | **Modificadores** | | |
 * | Solo icono | `.sb-ui-badge--icon-only` | `<span class="sb-ui-badge sb-ui-badge--icon-only"><i class="fa-solid fa-check"></i></span>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Tipo por defecto**: ERROR - fondo rojo (#dc3545) con texto blanco
 * - **Tamaño por defecto**: LARGE (20px) - no necesitas especificar la clase
 * - **Border Radius**: Success usa 50px (completamente redondo), otros usan 9px
 * - **Solo icono**: Usa `.sb-ui-badge--icon-only` con un `<i>` dentro — sin texto ni números junto al icono
 * - **Colores**: Los colores provienen de las variables de feedback del Design System
 * - **Responsive**: Todos los valores usan `clamp()` para escalado fluido
 *
 * ## 🎯 Ejemplo de Uso
 *
 * ```html
 * <!-- Badge con texto -->
 * <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--large">8</span>
 *
 * <!-- Badge con icono -->
 * <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--large sb-ui-badge--icon-only">
 *   <i class="fa-solid fa-check"></i>
 * </span>
 * ```
 *
 * ## 🎨 Variantes de Color
 *
 * - **Error**: Rojo (#dc3545) - Para errores, notificaciones críticas
 * - **Warning**: Amarillo (#ffc100) - Para advertencias, precauciones
 * - **Info**: Azul (#4da5ff) - Para información general
 * - **Success**: Verde (#69c17d) - Para confirmaciones, estados positivos
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Indicadores visuales de feedback con 4 tipos (error, warning, info, success) y 3 tamaños disponibles.',
      },
    },
  },
  // argTypes solo para el Playground interactivo
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'Tipo de badge (color y propósito)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'error' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    content: {
      control: 'text',
      description: 'Contenido de texto del badge (número o texto corto)',
      table: { type: { summary: 'string' } },
    },
    icon: {
      control: 'select',
      options: ['none', 'exclamation', 'triangle-exclamation', 'info', 'check'],
      description: 'Icono Font Awesome a mostrar (exclusivo con texto)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
  // render global solo para el Playground
  render: (args: any) => {
    const hasIcon = args.icon !== 'none';
    const iconMap: Record<string, string> = {
      exclamation: 'fa-solid fa-exclamation',
      'triangle-exclamation': 'fa-solid fa-triangle-exclamation',
      info: 'fa-solid fa-info',
      check: 'fa-solid fa-check',
    };
    const classes = [
      'sb-ui-badge',
      `sb-ui-badge--${args.variant}`,
      args.size !== 'large' ? `sb-ui-badge--${args.size}` : '',
      hasIcon ? 'sb-ui-badge--icon-only' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <span class="${classes}">
        ${hasIcon ? html`<i class="${iconMap[args.icon]}"></i>` : args.content}
      </span>
    `;
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// PLAYGROUND — controles interactivos, source dinámico con arg values actuales
// ---------------------------------------------------------------------------

/**
 * ## Playground
 *
 * Experimenta con todas las combinaciones de tipo, tamaño, contenido e iconos.
 * El panel **"Show code"** refleja exactamente el HTML generado por los controles.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      source: { type: 'dynamic', language: 'html' },
    },
  },
  args: {
    variant: 'error',
    size: 'large',
    content: '8',
    icon: 'none',
  },
};

// ---------------------------------------------------------------------------
// STORIES ESTÁTICAS — HTML fijo: source.code = lo que el usuario debe copiar
// ---------------------------------------------------------------------------

// --- Variantes de tipo ---

const errorCode = `<span class="sb-ui-badge sb-ui-badge--error">8</span>`;
/** Badge de error (rojo) — Para notificaciones críticas y alertas. */
export const Error: Story = {
  parameters: { docs: { source: { code: errorCode, language: 'html' } } },
  render: () => html`${unsafeHTML(errorCode)}`,
};

const warningCode = `<span class="sb-ui-badge sb-ui-badge--warning">8</span>`;
/** Badge de advertencia (amarillo) — Para precauciones y alertas informativas. */
export const Warning: Story = {
  parameters: { docs: { source: { code: warningCode, language: 'html' } } },
  render: () => html`${unsafeHTML(warningCode)}`,
};

const infoCode = `<span class="sb-ui-badge sb-ui-badge--info">8</span>`;
/** Badge de información (azul) — Para mensajes informativos generales. */
export const Info: Story = {
  parameters: { docs: { source: { code: infoCode, language: 'html' } } },
  render: () => html`${unsafeHTML(infoCode)}`,
};

const successCode = `<span class="sb-ui-badge sb-ui-badge--success">8</span>`;
/** Badge de éxito (verde) — Para confirmaciones y estados positivos. Bordes completamente redondeados. */
export const Success: Story = {
  parameters: { docs: { source: { code: successCode, language: 'html' } } },
  render: () => html`${unsafeHTML(successCode)}`,
};

// --- Tamaños ---

const smallCode = `<span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--small">8</span>`;
/** Tamaño pequeño (12px) — Para espacios reducidos. */
export const Small: Story = {
  parameters: { docs: { source: { code: smallCode, language: 'html' } } },
  render: () => html`${unsafeHTML(smallCode)}`,
};

const mediumCode = `<span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--medium">8</span>`;
/** Tamaño mediano (16px) — Tamaño intermedio. */
export const Medium: Story = {
  parameters: { docs: { source: { code: mediumCode, language: 'html' } } },
  render: () => html`${unsafeHTML(mediumCode)}`,
};

const largeCode = `<span class="sb-ui-badge sb-ui-badge--error">8</span>`;
/** Tamaño grande (20px) — Tamaño por defecto, más visible. */
export const Large: Story = {
  parameters: { docs: { source: { code: largeCode, language: 'html' } } },
  render: () => html`${unsafeHTML(largeCode)}`,
};

// --- Solo icono ---

const iconOnlyErrorCode = `<span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--icon-only">
  <i class="fa-solid fa-exclamation"></i>
</span>`;
/** Badge solo icono — Error. */
export const IconOnlyError: Story = {
  parameters: { docs: { source: { code: iconOnlyErrorCode, language: 'html' } } },
  render: () => html`${unsafeHTML(iconOnlyErrorCode)}`,
};

const iconOnlyWarningCode = `<span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--icon-only">
  <i class="fa-solid fa-triangle-exclamation"></i>
</span>`;
/** Badge solo icono — Warning. */
export const IconOnlyWarning: Story = {
  parameters: { docs: { source: { code: iconOnlyWarningCode, language: 'html' } } },
  render: () => html`${unsafeHTML(iconOnlyWarningCode)}`,
};

const iconOnlyInfoCode = `<span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--icon-only">
  <i class="fa-solid fa-info"></i>
</span>`;
/** Badge solo icono — Info. */
export const IconOnlyInfo: Story = {
  parameters: { docs: { source: { code: iconOnlyInfoCode, language: 'html' } } },
  render: () => html`${unsafeHTML(iconOnlyInfoCode)}`,
};

const iconOnlySuccessCode = `<span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--icon-only">
  <i class="fa-solid fa-check"></i>
</span>`;
/** Badge solo icono — Success. */
export const IconOnlySuccess: Story = {
  parameters: { docs: { source: { code: iconOnlySuccessCode, language: 'html' } } },
  render: () => html`${unsafeHTML(iconOnlySuccessCode)}`,
};

// ---------------------------------------------------------------------------
// ALL VARIANTS — vista completa, source dinámico captura el bloque completo
// ---------------------------------------------------------------------------

/**
 * ## AllVariants
 *
 * Vista completa de todas las variantes de tipo, tamaño y contenido.
 * Muestra la matriz completa de combinaciones disponibles.
 */
export const AllVariants: Story = {
  parameters: {
    docs: { source: { type: 'dynamic', language: 'html' } },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">

      <div>
        <h3 style="margin-block-end: 1rem; color: var(--sb-ui-color-grayscale-D300);">Error (Rojo)</h3>
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <span class="sb-ui-badge sb-ui-badge--error">8</span>
          <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--icon-only"><i class="fa-solid fa-exclamation"></i></span>
          <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--medium">8</span>
          <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--medium sb-ui-badge--icon-only"><i class="fa-solid fa-exclamation"></i></span>
          <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--small">8</span>
          <span class="sb-ui-badge sb-ui-badge--error sb-ui-badge--small sb-ui-badge--icon-only"><i class="fa-solid fa-exclamation"></i></span>
        </div>
      </div>

      <div>
        <h3 style="margin-block-end: 1rem; color: var(--sb-ui-color-grayscale-D300);">Warning (Amarillo)</h3>
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <span class="sb-ui-badge sb-ui-badge--warning">8</span>
          <span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--icon-only"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--medium">8</span>
          <span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--medium sb-ui-badge--icon-only"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--small">8</span>
          <span class="sb-ui-badge sb-ui-badge--warning sb-ui-badge--small sb-ui-badge--icon-only"><i class="fa-solid fa-triangle-exclamation"></i></span>
        </div>
      </div>

      <div>
        <h3 style="margin-block-end: 1rem; color: var(--sb-ui-color-grayscale-D300);">Info (Azul)</h3>
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <span class="sb-ui-badge sb-ui-badge--info">8</span>
          <span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--icon-only"><i class="fa-solid fa-info"></i></span>
          <span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--medium">8</span>
          <span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--medium sb-ui-badge--icon-only"><i class="fa-solid fa-info"></i></span>
          <span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--small">8</span>
          <span class="sb-ui-badge sb-ui-badge--info sb-ui-badge--small sb-ui-badge--icon-only"><i class="fa-solid fa-info"></i></span>
        </div>
      </div>

      <div>
        <h3 style="margin-block-end: 1rem; color: var(--sb-ui-color-grayscale-D300);">Success (Verde)</h3>
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <span class="sb-ui-badge sb-ui-badge--success">8</span>
          <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--icon-only"><i class="fa-solid fa-check"></i></span>
          <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--medium">8</span>
          <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--medium sb-ui-badge--icon-only"><i class="fa-solid fa-check"></i></span>
          <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--small">8</span>
          <span class="sb-ui-badge sb-ui-badge--success sb-ui-badge--small sb-ui-badge--icon-only"><i class="fa-solid fa-check"></i></span>
        </div>
      </div>

    </div>
  `,
};
