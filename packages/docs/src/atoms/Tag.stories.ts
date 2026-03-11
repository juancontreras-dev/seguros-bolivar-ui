import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Tag Component
 *
 * <div style="display: inline-flex; gap: 0.5rem; margin-bottom: 1rem;">
 *   <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">🎨 CSS PURO</span>
 *   <span style="background: #F3E5F5; color: #7B1FA2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">❌ NO requiere JS</span>
 *   <span style="background: #E8F5E9; color: #388E3C; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">✅ Solo HTML + CSS</span>
 * </div>
 *
 * Etiquetas visuales de estado con iconos para comunicar feedback (error, warning, info, success).
 * Disponibles en 2 tamaños (large y small) con opción de bordes redondeados o rectos, y con o sin iconos.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Tipo** | | |
 * | Tag de error (default) | `.sb-ui-tag--error` | `<span class="sb-ui-tag sb-ui-tag--error">Error</span>` |
 * | Tag de advertencia | `.sb-ui-tag--warning` | `<span class="sb-ui-tag sb-ui-tag--warning">Warning</span>` |
 * | Tag de éxito | `.sb-ui-tag--success` | `<span class="sb-ui-tag sb-ui-tag--success">Success</span>` |
 * | Tag de información | `.sb-ui-tag--info` | `<span class="sb-ui-tag sb-ui-tag--info">Info</span>` |
 * | **Tamaños** | | |
 * | Grande (default) | Sin clase o `.sb-ui-tag` | `<span class="sb-ui-tag sb-ui-tag--error">Error</span>` |
 * | Pequeño | `.sb-ui-tag--small` | `<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">Error</span>` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-tag--rounded` | `<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">Error</span>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Tipo por defecto**: ERROR - fondo rojo (#dc3545) con texto blanco
 * - **Tamaño por defecto**: LARGE (24px altura) - no necesitas especificar la clase
 * - **Border Radius**: Default 6px (large) / 4px (small), Rounded 100px (completamente redondo)
 * - **Con icono**: Coloca un `<i>` antes del texto, el gap se maneja automáticamente
 * - **Sin icono**: Simplemente omite el `<i>` en el HTML
 * - **Colores**: Los colores provienen de las variables de feedback del Design System
 * - **Responsive**: Todos los valores usan `clamp()` para escalado fluido
 *
 * ## 🎯 Ejemplo de Uso
 *
 * ```html
 * <!-- Tag con icono -->
 * <span class="sb-ui-tag sb-ui-tag--error">
 *   <i class="fa-solid fa-circle-exclamation"></i>
 *   Error
 * </span>
 *
 * <!-- Tag sin icono -->
 * <span class="sb-ui-tag sb-ui-tag--success">
 *   Success
 * </span>
 *
 * <!-- Tag pequeño redondeado -->
 * <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">
 *   <i class="fa-solid fa-triangle-exclamation"></i>
 *   Warning
 * </span>
 * ```
 *
 * ## 🎨 Variantes de Color
 *
 * - **Error**: Rojo (#dc3545) con texto blanco - Para errores, notificaciones críticas
 * - **Warning**: Amarillo (#ffc100) con texto oscuro - Para advertencias, precauciones
 * - **Success**: Verde (#69c17d) con texto oscuro - Para confirmaciones, estados positivos
 * - **Info**: Azul (#4da5ff) con texto oscuro - Para información general
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Tag',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Etiquetas visuales de estado con iconos para comunicar feedback (error, warning, info, success). Disponibles en 2 tamaños con bordes opcionales redondeados.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'Tipo de tag (color y propósito)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'error' },
      },
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
      description: 'Tamaño del tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Bordes completamente redondeados (100px)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    content: {
      control: 'text',
      description: 'Texto del tag',
      table: { type: { summary: 'string' } },
    },
    icon: {
      control: 'select',
      options: ['none', 'circle-exclamation', 'triangle-exclamation', 'circle-check', 'circle-info'],
      description: 'Icono Font Awesome a mostrar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
  render: (args: any) => {
    const hasIcon = args.icon !== 'none';
    const iconMap: Record<string, string> = {
      'circle-exclamation': 'fa-solid fa-circle-exclamation',
      'triangle-exclamation': 'fa-solid fa-triangle-exclamation',
      'circle-check': 'fa-solid fa-circle-check',
      'circle-info': 'fa-solid fa-circle-info',
    };
    const classes = [
      'sb-ui-tag',
      `sb-ui-tag--${args.variant}`,
      args.size === 'small' ? 'sb-ui-tag--small' : '',
      args.rounded ? 'sb-ui-tag--rounded' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <span class="${classes}">
        ${hasIcon ? html`<i class="${iconMap[args.icon]}"></i>` : ''}
        ${args.content}
      </span>
    `;
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// PLAYGROUND
// ---------------------------------------------------------------------------

/**
 * ## Playground
 *
 * Experimenta con todas las combinaciones de tipo, tamaño, bordes e iconos.
 * El panel **"Show code"** refleja exactamente el HTML generado por los controles.
 */
export const Playground: Story = {
  args: {
    variant: 'error',
    size: 'large',
    rounded: false,
    content: 'Error',
    icon: 'circle-exclamation',
  },
  parameters: {
    docs: {
      source: { type: 'dynamic', language: 'html' },
    },
  },
};

// ---------------------------------------------------------------------------
// ERROR TAGS
// ---------------------------------------------------------------------------

/**
 * ## Error (Rojo)
 *
 * Tag con fondo rojo (#dc3545) y texto blanco para indicar errores críticos.
 * 8 variantes: 2 tamaños × 2 rounded corners × 2 leftIcon (con/sin icono)
 */
export const Error: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Con icono (Left icon: True) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Con icono (Left icon: True)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error">
              <i class="fa-solid fa-circle-exclamation"></i>
              Error
            </span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">
              <i class="fa-solid fa-circle-exclamation"></i>
              Error
            </span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-exclamation"></i>
              Error
            </span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-exclamation"></i>
              Error
            </span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>

      <!-- Sin icono (Left icon: False) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Sin icono (Left icon: False)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error">Error</span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">Error</span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">Error</span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">Error</span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<!-- === CON ICONO (Left icon: True) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--error">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>

<!-- === SIN ICONO (Left icon: False) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--error">Error</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">Error</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">Error</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">Error</span>`,
        language: 'html',
      },
    },
  },
};

// ---------------------------------------------------------------------------
// WARNING TAGS
// ---------------------------------------------------------------------------

/**
 * ## Warning (Amarillo)
 *
 * Tag con fondo amarillo (#ffc100) y texto oscuro para advertencias.
 * 8 variantes: 2 tamaños × 2 rounded corners × 2 leftIcon (con/sin icono)
 */
export const Warning: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Con icono (Left icon: True) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Con icono (Left icon: True)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Warning
            </span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Warning
            </span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Warning
            </span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Warning
            </span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>

      <!-- Sin icono (Left icon: False) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Sin icono (Left icon: False)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning">Warning</span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">Warning</span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">Warning</span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">Warning</span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<!-- === CON ICONO (Left icon: True) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--warning">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>

<!-- === SIN ICONO (Left icon: False) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--warning">Warning</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">Warning</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">Warning</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">Warning</span>`,
        language: 'html',
      },
    },
  },
};

// ---------------------------------------------------------------------------
// SUCCESS TAGS
// ---------------------------------------------------------------------------

/**
 * ## Success (Verde)
 *
 * Tag con fondo verde (#69c17d) y texto oscuro para confirmaciones.
 * 8 variantes: 2 tamaños × 2 rounded corners × 2 leftIcon (con/sin icono)
 */
export const Success: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Con icono (Left icon: True) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Con icono (Left icon: True)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success">
              <i class="fa-solid fa-circle-check"></i>
              Success
            </span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">
              <i class="fa-solid fa-circle-check"></i>
              Success
            </span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-check"></i>
              Success
            </span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-check"></i>
              Success
            </span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>

      <!-- Sin icono (Left icon: False) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Sin icono (Left icon: False)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success">Success</span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">Success</span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">Success</span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">Success</span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<!-- === CON ICONO (Left icon: True) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--success">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>

<!-- === SIN ICONO (Left icon: False) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--success">Success</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">Success</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">Success</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">Success</span>`,
        language: 'html',
      },
    },
  },
};

// ---------------------------------------------------------------------------
// INFO TAGS
// ---------------------------------------------------------------------------

/**
 * ## Info (Azul)
 *
 * Tag con fondo azul (#4da5ff) y texto oscuro para información neutral.
 * 8 variantes: 2 tamaños × 2 rounded corners × 2 leftIcon (con/sin icono)
 */
export const Info: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Con icono (Left icon: True) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Con icono (Left icon: True)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info">
              <i class="fa-solid fa-circle-info"></i>
              Info
            </span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">
              <i class="fa-solid fa-circle-info"></i>
              Info
            </span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-info"></i>
              Info
            </span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">
              <i class="fa-solid fa-circle-info"></i>
              Info
            </span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>

      <!-- Sin icono (Left icon: False) -->
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #9747ff;">Sin icono (Left icon: False)</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info">Info</span>
            <small style="color: #666;">Large + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">Info</span>
            <small style="color: #666;">Small + Off</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">Info</span>
            <small style="color: #666;">Large + On</small>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">Info</span>
            <small style="color: #666;">Small + On</small>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<!-- === CON ICONO (Left icon: True) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--info">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>

<!-- === SIN ICONO (Left icon: False) === -->

<!-- Large + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--info">Info</span>

<!-- Small + Rounded Off -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">Info</span>

<!-- Large + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">Info</span>

<!-- Small + Rounded On -->
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">Info</span>`,
        language: 'html',
      },
    },
  },
};

// ---------------------------------------------------------------------------
// ALL VARIANTS
// ---------------------------------------------------------------------------

/**
 * ## AllVariants
 *
 * Vista completa de todas las 32 variantes del diseño de Figma.
 * Matriz: 4 colores × 2 tamaños × 2 rounded corners × 2 leftIcon = 32 variantes
 */
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      
      <!-- SECCIÓN: Left Icon TRUE -->
      <div>
        <h2 style="margin-bottom: 2rem; color: #9747ff; border-bottom: 2px solid #9747ff; padding-bottom: 0.5rem;">
          Left icon: True (16 variantes)
        </h2>

        <!-- Error con icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Error</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error">
                <i class="fa-solid fa-circle-exclamation"></i>
                Error
              </span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">
                <i class="fa-solid fa-circle-exclamation"></i>
                Error
              </span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-exclamation"></i>
                Error
              </span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-exclamation"></i>
                Error
              </span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Warning con icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Warning</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Warning
              </span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Warning
              </span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Warning
              </span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Warning
              </span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Success con icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Success</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success">
                <i class="fa-solid fa-circle-check"></i>
                Success
              </span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">
                <i class="fa-solid fa-circle-check"></i>
                Success
              </span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-check"></i>
                Success
              </span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-check"></i>
                Success
              </span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Info con icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Info</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info">
                <i class="fa-solid fa-circle-info"></i>
                Info
              </span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">
                <i class="fa-solid fa-circle-info"></i>
                Info
              </span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-info"></i>
                Info
              </span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">
                <i class="fa-solid fa-circle-info"></i>
                Info
              </span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCIÓN: Left Icon FALSE -->
      <div>
        <h2 style="margin-bottom: 2rem; color: #9747ff; border-bottom: 2px solid #9747ff; padding-bottom: 0.5rem;">
          Left icon: False (16 variantes)
        </h2>

        <!-- Error sin icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Error</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error">Error</span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">Error</span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">Error</span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">Error</span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Warning sin icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Warning</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning">Warning</span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">Warning</span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">Warning</span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">Warning</span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Success sin icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Success</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success">Success</span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">Success</span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">Success</span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">Success</span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>

        <!-- Info sin icono -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Info</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info">Info</span>
              <small style="color: #666;">Large + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">Info</span>
              <small style="color: #666;">Small + Off</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">Info</span>
              <small style="color: #666;">Large + On</small>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
              <span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">Info</span>
              <small style="color: #666;">Small + On</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<!-- MATRIZ COMPLETA: 32 VARIANTES -->

<!-- ========== LEFT ICON: TRUE (16 variantes) ========== -->

<!-- Error con icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--error">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-exclamation"></i>
  Error
</span>

<!-- Warning con icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--warning">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Warning
</span>

<!-- Success con icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--success">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-check"></i>
  Success
</span>

<!-- Info con icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--info">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">
  <i class="fa-solid fa-circle-info"></i>
  Info
</span>

<!-- ========== LEFT ICON: FALSE (16 variantes) ========== -->

<!-- Error sin icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--error">Error</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small">Error</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--rounded">Error</span>
<span class="sb-ui-tag sb-ui-tag--error sb-ui-tag--small sb-ui-tag--rounded">Error</span>

<!-- Warning sin icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--warning">Warning</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small">Warning</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--rounded">Warning</span>
<span class="sb-ui-tag sb-ui-tag--warning sb-ui-tag--small sb-ui-tag--rounded">Warning</span>

<!-- Success sin icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--success">Success</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small">Success</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--rounded">Success</span>
<span class="sb-ui-tag sb-ui-tag--success sb-ui-tag--small sb-ui-tag--rounded">Success</span>

<!-- Info sin icono (4 variantes) -->
<span class="sb-ui-tag sb-ui-tag--info">Info</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small">Info</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--rounded">Info</span>
<span class="sb-ui-tag sb-ui-tag--info sb-ui-tag--small sb-ui-tag--rounded">Info</span>`,
        language: 'html',
      },
    },
  },
};
