import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Tabs Component
 *
 * <div style="display: inline-flex; gap: 0.5rem; margin-bottom: 1rem;">
 *   <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">🎨 CSS PURO</span>
 *   <span style="background: #FFF3E0; color: #F57C00; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">⚡ JS opcional</span>
 *   <span style="background: #E8F5E9; color: #388E3C; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">✅ Solo HTML + CSS</span>
 * </div>
 *
 * Componente de tabs (pestañas) del Seguros Bolivar UI Design System con 3 variaciones visuales.
 * **Solo requiere CSS**, pero puedes agregar JavaScript simple para interactividad (cambiar tabs).
 *
 * ## 🚀 Instalación Rápida
 *
 * ```html
 * <!-- 1. Incluye el CSS: -->
 * <link rel="stylesheet" href="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-seguros-bolivar-light.min.css">
 *
 * <!-- 2. HTML básico: -->
 * <div class="sb-ui-tabs sb-ui-tabs--track">
 *   <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
 *     <span class="sb-ui-tabs__title">Tab 1</span>
 *   </button>
 *   <button class="sb-ui-tabs__item">
 *     <span class="sb-ui-tabs__title">Tab 2</span>
 *   </button>
 * </div>
 *
 * <!-- 3. JavaScript para interactividad (opcional): -->
 * <script>
 * document.querySelectorAll('.sb-ui-tabs__item').forEach(tab => {
 *   tab.addEventListener('click', function() {
 *     this.parentElement.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
 *       item.classList.remove('sb-ui-tabs__item--active');
 *     });
 *     this.classList.add('sb-ui-tabs__item--active');
 *   });
 * });
 * </script>
 * ```
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes** | | |
 * | Track (línea inferior) | `.sb-ui-tabs--track` | `<div class="sb-ui-tabs sb-ui-tabs--track">` |
 * | Button (fondo amarillo) | `.sb-ui-tabs--button` | `<div class="sb-ui-tabs sb-ui-tabs--button">` |
 * | Folder (carpeta) | `.sb-ui-tabs--folder` | `<div class="sb-ui-tabs sb-ui-tabs--folder">` |
 * | **Estados** | | |
 * | Tab activo | `.sb-ui-tabs__item--active` | `<button class="sb-ui-tabs__item sb-ui-tabs__item--active">` |
 *
 * ## 💡 Especificaciones Técnicas
 *
 * ### Track Variant
 * - **Altura:** 48px
 * - **Ancho:** 152px
 * - **Indicador:** Línea verde inferior (border-bottom)
 * - **Iconos:** NO incluye
 * - **Active BG:** Verde claro (#F2F9F6)
 * - **Font Title:** 0.875rem (14px)
 * - **Font Description:** 0.6875rem (11px)
 *
 * ### Button Variant
 * - **Altura:** 72px
 * - **Ancho:** 146px
 * - **Border-radius:** 8px
 * - **Iconos:** SÍ (20px)
 * - **Active BG:** Amarillo (#FFE16F)
 * - **Active Text:** Verde (#038450), font-weight 700
 *
 * ### Folder Variant
 * - **Altura:** 72px
 * - **Ancho:** 146px
 * - **Border-radius:** 8px 8px 0 0 (solo arriba)
 * - **Iconos:** SÍ (20px)
 * - **Active BG:** Verde claro (#F2F9F6)
 * - **Active Text:** Verde (#038450), font-weight 700
 *
 * ## 🎯 Ejemplo de Estructura
 *
 * ```html
 * <!-- Track: Sin iconos, con title y description -->
 * <div class="sb-ui-tabs sb-ui-tabs--track">
 *   <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
 *     <span class="sb-ui-tabs__title">Title</span>
 *     <span class="sb-ui-tabs__description">Description</span>
 *   </button>
 * </div>
 *
 * <!-- Button/Folder: Con icono, title y description -->
 * <div class="sb-ui-tabs sb-ui-tabs--button">
 *   <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
 *     <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
 *     <span class="sb-ui-tabs__title">Title</span>
 *     <span class="sb-ui-tabs__description">Description</span>
 *   </button>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de tabs con 3 variantes visuales: Track (línea inferior, 48px), Button (fondo amarillo, 72px) y Folder (estilo carpeta, 72px). Cada variante tiene dimensiones y estilos específicos.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['track', 'button', 'folder'],
      description: 'Variante visual del tab',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'track' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con las 3 variantes de tabs. Cada una tiene su propia identidad visual y dimensiones específicas.
 */
export const Playground: Story = {
  args: {
    variant: 'track',
  },
  render: (args) => {
    const showIcons = args.variant === 'button' || args.variant === 'folder';

    const tabs = [
      { title: 'Seguros', description: 'Protección total', active: true },
      { title: 'Inversiones', description: 'Haz crecer tu dinero', active: false },
      { title: 'Créditos', description: 'Financia proyectos', active: false },
      { title: 'Ahorros', description: 'Planifica tu futuro', active: false },
      { title: 'Pensiones', description: 'Retiro seguro', active: false },
    ];

    return html`
      <div style="max-width: 800px; padding: 2rem; background: #fafafa;">
        <div class="sb-ui-tabs sb-ui-tabs--${args.variant}">
          ${tabs.map(
            (tab) => html`
              <button
                class="sb-ui-tabs__item ${tab.active ? 'sb-ui-tabs__item--active' : ''}"
                @click="${(e: Event) => {
                  const target = e.currentTarget as HTMLElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                      item.classList.remove('sb-ui-tabs__item--active');
                    });
                    target.classList.add('sb-ui-tabs__item--active');
                  }
                }}"
              >
                ${showIcons ? html`<i class="sb-ui-tabs__icon fa-solid fa-globe"></i>` : ''}
                <span class="sb-ui-tabs__title">${tab.title}</span>
                <span class="sb-ui-tabs__description">${tab.description}</span>
              </button>
            `,
          )}
        </div>
      </div>
    `;
  },
};

/**
 * ## Track Variant (48px)
 *
 * Tabs con línea verde inferior como indicador. Altura de 48px, ancho de 152px.
 * **NO incluye iconos**, solo título y descripción.
 */
export const TrackVariant: Story = {
  render: () => html`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Track - Estados</h2>
        <p class="tabs-demo-subtitle">
          Línea verde inferior. Sin iconos. 48px altura × 152px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 48px</li>
            <li><strong>Ancho:</strong> 152px</li>
            <li><strong>Indicador:</strong> Border-bottom verde (3px)</li>
            <li><strong>Iconos:</strong> NO</li>
            <li><strong>Font Title:</strong> 0.875rem (14px)</li>
            <li><strong>Font Description:</strong> 0.6875rem (11px)</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--track">
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Button Variant (72px)
 *
 * Tabs con apariencia de botones y fondo amarillo cuando están activos.
 * Altura de 72px, ancho de 146px. **Incluye iconos de 20px**.
 */
export const ButtonVariant: Story = {
  render: () => html`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #ffe16f;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #fffaf0;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #ffe16f;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Button - Estados</h2>
        <p class="tabs-demo-subtitle">
          Fondo amarillo activo. Con iconos. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Amarillo (#FFE16F)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--button">
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Folder Variant (72px)
 *
 * Tabs estilo carpeta con border-radius solo en la parte superior.
 * Altura de 72px, ancho de 146px. **Incluye iconos de 20px**.
 */
export const FolderVariant: Story = {
  render: () => html`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Folder - Estados</h2>
        <p class="tabs-demo-subtitle">
          Estilo carpeta con border-radius solo arriba. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px 8px 0 0 (solo arriba)</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Verde claro (#F2F9F6)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--folder">
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Title</span>
            <span class="sb-ui-tabs__description">Description</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Title</span>
            <span class="sb-ui-tabs__description">Description</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Title</span>
            <span class="sb-ui-tabs__description">Description</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Title</span>
            <span class="sb-ui-tabs__description">Description</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${(e: Event) => {
              const target = e.currentTarget as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                  item.classList.remove('sb-ui-tabs__item--active');
                });
                target.classList.add('sb-ui-tabs__item--active');
              }
            }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Title</span>
            <span class="sb-ui-tabs__description">Description</span>
          </button>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Comparación de las 3 Variantes
 *
 * Vista lado a lado de las 3 variantes para comparar sus diferencias visuales y dimensiones.
 */
export const Comparison: Story = {
  render: () => html`
    <style>
      .comparison-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .comparison-item {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .comparison-item h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 700;
      }

      .comparison-item .spec-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .comparison-item--track h3 {
        color: #038450;
      }
      .comparison-item--track .spec-badge {
        background: #f2f9f6;
        color: #038450;
      }

      .comparison-item--button h3 {
        color: #c99700;
      }
      .comparison-item--button .spec-badge {
        background: #fffaf0;
        color: #c99700;
      }

      .comparison-item--folder h3 {
        color: #666;
      }
      .comparison-item--folder .spec-badge {
        background: #f5f5f5;
        color: #666;
      }
    </style>

    <div class="comparison-container">
      <h2 style="margin-bottom: 2rem; color: #038450; text-align: center;">
        Comparación de Variantes
      </h2>

      <div class="comparison-grid">
        <!-- Track -->
        <div class="comparison-item comparison-item--track">
          <h3>Track</h3>
          <span class="spec-badge">48px × 152px | No iconos</span>

          <div class="sb-ui-tabs sb-ui-tabs--track">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Button -->
        <div class="comparison-item comparison-item--button">
          <h3>Button</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--button">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Folder -->
        <div class="comparison-item comparison-item--folder">
          <h3>Folder</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--folder">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${(e: Event) => {
                const target = e.currentTarget as HTMLElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                    item.classList.remove('sb-ui-tabs__item--active');
                  });
                  target.classList.add('sb-ui-tabs__item--active');
                }
              }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
};
