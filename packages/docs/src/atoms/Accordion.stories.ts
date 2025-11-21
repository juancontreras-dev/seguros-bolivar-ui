import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Accordion Component
 *
 * Componente de acordeón CSS puro del Seguros Bolivar UI Design System usando el elemento nativo `<details>`.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes** | | |
 * | Acordeón primario | `.sb-ui-accordion--primary` | `<details class="sb-ui-accordion sb-ui-accordion--primary">` |
 * | Acordeón secundario | `.sb-ui-accordion--secondary` | `<details class="sb-ui-accordion sb-ui-accordion--secondary">` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-accordion--small` | `<details class="sb-ui-accordion sb-ui-accordion--small">` |
 * | Mediano (default) | `.sb-ui-accordion--medium` o sin clase | `<details class="sb-ui-accordion">` |
 * | Grande | `.sb-ui-accordion--large` | `<details class="sb-ui-accordion sb-ui-accordion--large">` |
 * | **Estados** | | |
 * | Abierto por defecto | `open` | `<details class="sb-ui-accordion" open>` |
 * | Deshabilitado visual | `.sb-ui-accordion--disabled` | `<details class="sb-ui-accordion sb-ui-accordion--disabled">` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Elemento nativo**: Usa `<details>` y `<summary>` (sin JavaScript)
 * - **Icono automático**: El icono de chevron se muestra automáticamente vía CSS
 * - **Accesibilidad**: El elemento `<details>` es accesible por defecto
 * - **Múltiples acordeones**: Cada acordeón funciona independientemente
 * - **Estado abierto**: Usa el atributo `open` en el `<details>`
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <details class="sb-ui-accordion sb-ui-accordion--primary" open>
 *   <summary class="sb-ui-accordion__header">
 *     ¿Cuál es la pregunta?
 *   </summary>
 *   <div class="sb-ui-accordion__content">
 *     Esta es la respuesta con contenido detallado.
 *   </div>
 * </details>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de acordeón CSS puro usando el elemento nativo <details>. Incluye 2 variantes de color (Primary, Secondary), 3 tamaños (Small, Medium, Large) y estados interactivos.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Variante de color del acordeón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del acordeón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    title: {
      control: 'text',
      description: 'Título del acordeón (contenido del summary)',
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      control: 'text',
      description: 'Contenido del acordeón',
      table: {
        type: { summary: 'string' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Abierto por defecto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Apariencia deshabilitada',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showIconStart: {
      control: 'boolean',
      description: 'Mostrar icono al inicio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showActionButton: {
      control: 'boolean',
      description: 'Mostrar botón de acción',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    buttonText: {
      control: 'text',
      description: 'Texto del botón de acción',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del acordeón usando los controles interactivos
 * en el panel inferior. Puedes ajustar variante, tamaño, contenido y estados.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    title: '¿Cuál es tu pregunta?',
    content: 'Esta es la respuesta con contenido detallado. Puedes agregar texto, listas, enlaces y más.',
    showIconStart: true,
    showActionButton: true,
    buttonText: 'Ver más',
    open: false,
    disabled: false,
  },
  render: (args) => {
    const classes = [
      'sb-ui-accordion',
      `sb-ui-accordion--${args.variant}`,
      args.size !== 'medium' ? `sb-ui-accordion--${args.size}` : '',
      args.disabled ? 'sb-ui-accordion--disabled' : '',
      !args.showIconStart ? 'sb-ui-accordion--no-icon-start' : '',
      !args.showActionButton ? 'sb-ui-accordion--no-action' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const buttonVariant = args.variant === 'primary' ? 'primary' : 'secondary';

    return html`
      <div style="max-width: 600px;">
        <details class="${classes}" ?open="${args.open}">
          <summary class="sb-ui-accordion__header">
            ${args.showIconStart
              ? html`<i class="fa-solid fa-globe sb-ui-accordion__icon-start"></i>`
              : ''}
            <span class="sb-ui-accordion__label">${args.title}</span>
            ${args.showActionButton
              ? html`<button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--${buttonVariant} sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  ?disabled="${args.disabled}"
                  @click="${(e: Event) => e.stopPropagation()}"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  ${args.buttonText}
                </button>`
              : ''}
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">${args.content}</div>
        </details>
      </div>
    `;
  },
};

/**
 * ## Primary - Matriz Completa de Combinaciones
 *
 * Matriz completa del acordeón Primary mostrando todas las combinaciones de:
 * - **3 Tamaños**: Small, Medium, Large
 * - **2 Estados**: Cerrado, Abierto
 *
 * **Total: 6 combinaciones** (3 × 2)
 */
export const Primary: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .accordion-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .accordion-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .accordion-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .accordion-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .accordion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .accordion-demo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="accordion-container">
      <!-- ========================================
           SECCIÓN 1: Small
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Primary - Small</h2>
        <p class="accordion-subtitle">Acordeón primario en tamaño pequeño.</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--small">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-info-circle sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Qué es el seguro de vida?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver más
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                El seguro de vida es un producto que protege a tu familia en caso de fallecimiento.
                Puedes elegir entre diferentes coberturas y beneficios adicionales.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--small" open>
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-info-circle sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Qué es el seguro de vida?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver más
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                El seguro de vida es un producto que protege a tu familia en caso de fallecimiento.
                Puedes elegir entre diferentes coberturas y beneficios adicionales.
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: Medium
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Primary - Medium (Default)</h2>
        <p class="accordion-subtitle">Acordeón primario en tamaño mediano (por defecto).</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-handshake sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cómo puedo contratar un seguro?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Contratar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Puedes contratar tu seguro de forma online, por teléfono o en una de nuestras
                oficinas. El proceso es rápido y sencillo, y te guiaremos en cada paso.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary" open>
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-handshake sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cómo puedo contratar un seguro?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Contratar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Puedes contratar tu seguro de forma online, por teléfono o en una de nuestras
                oficinas. El proceso es rápido y sencillo, y te guiaremos en cada paso.
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 3: Large
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Primary - Large</h2>
        <p class="accordion-subtitle">Acordeón primario en tamaño grande.</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--large">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-shield-halved sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Qué coberturas están incluidas?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver coberturas
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Nuestros seguros incluyen coberturas básicas y opcionales. Entre las básicas
                encontrarás fallecimiento, invalidez y enfermedades graves. Las opcionales pueden
                incluir accidentes, hospitalización y más.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--large" open>
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-shield-halved sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Qué coberturas están incluidas?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver coberturas
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Nuestros seguros incluyen coberturas básicas y opcionales. Entre las básicas
                encontrarás fallecimiento, invalidez y enfermedades graves. Las opcionales pueden
                incluir accidentes, hospitalización y más.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Secondary - Matriz Completa de Combinaciones
 *
 * Matriz completa del acordeón Secondary mostrando todas las combinaciones de:
 * - **3 Tamaños**: Small, Medium, Large
 * - **2 Estados**: Cerrado, Abierto
 *
 * **Total: 6 combinaciones** (3 × 2)
 */
export const Secondary: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .accordion-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .accordion-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .accordion-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-secondary-base, #ffe16f);
      }

      .accordion-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .accordion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .accordion-demo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="accordion-container">
      <!-- ========================================
           SECCIÓN 1: Small
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Secondary - Small</h2>
        <p class="accordion-subtitle">Acordeón secundario en tamaño pequeño.</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--secondary sb-ui-accordion--small">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-clock sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cuánto tiempo tarda la aprobación?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver más
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                El proceso de aprobación suele tardar entre 24 y 48 horas hábiles. Te notificaremos
                por email cuando tu seguro esté activo.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details
              class="sb-ui-accordion sb-ui-accordion--secondary sb-ui-accordion--small"
              open
            >
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-clock sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cuánto tiempo tarda la aprobación?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Ver más
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                El proceso de aprobación suele tardar entre 24 y 48 horas hábiles. Te notificaremos
                por email cuando tu seguro esté activo.
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: Medium
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Secondary - Medium (Default)</h2>
        <p class="accordion-subtitle">Acordeón secundario en tamaño mediano (por defecto).</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--secondary">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-file-pen sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Puedo modificar mi póliza?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Modificar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Sí, puedes modificar tu póliza en cualquier momento. Los cambios pueden incluir
                beneficiarios, coberturas adicionales o ajustes en el valor asegurado.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details class="sb-ui-accordion sb-ui-accordion--secondary" open>
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-file-pen sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Puedo modificar mi póliza?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Modificar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Sí, puedes modificar tu póliza en cualquier momento. Los cambios pueden incluir
                beneficiarios, coberturas adicionales o ajustes en el valor asegurado.
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 3: Large
           ======================================== -->
      <div class="accordion-section">
        <h2 class="accordion-title">🎨 Secondary - Large</h2>
        <p class="accordion-subtitle">Acordeón secundario en tamaño grande.</p>

        <div class="accordion-grid">
          <div class="accordion-demo">
            <span class="demo-label">Cerrado (Default)</span>
            <details class="sb-ui-accordion sb-ui-accordion--secondary sb-ui-accordion--large">
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-file-medical sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cómo hago un reclamo?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Reclamar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Para hacer un reclamo, debes comunicarte con nuestro centro de atención al cliente
                disponible 24/7. Tendrás que proporcionar tu número de póliza, documentos de
                identidad y evidencia del siniestro.
              </div>
            </details>
          </div>

          <div class="accordion-demo">
            <span class="demo-label">Abierto</span>
            <details class="sb-ui-accordion sb-ui-accordion--secondary sb-ui-accordion--large" open>
              <summary class="sb-ui-accordion__header">
                <i class="fa-solid fa-file-medical sb-ui-accordion__icon-start"></i>
                <span class="sb-ui-accordion__label">¿Cómo hago un reclamo?</span>
                <button
                  class="sb-ui-accordion__action sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
                  onclick="event.stopPropagation()"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  Reclamar
                </button>
                <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
              </summary>
              <div class="sb-ui-accordion__content">
                Para hacer un reclamo, debes comunicarte con nuestro centro de atención al cliente
                disponible 24/7. Tendrás que proporcionar tu número de póliza, documentos de
                identidad y evidencia del siniestro.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Multiple Accordions - FAQ Example
 *
 * Ejemplo de múltiples acordeones funcionando juntos para crear una sección de preguntas frecuentes (FAQ).
 * Cada acordeón funciona independientemente.
 */
export const MultipleAccordions: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .faq-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .faq-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .faq-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style>

    <div class="faq-container">
      <h2 class="faq-title">Preguntas Frecuentes</h2>
      <p class="faq-subtitle">
        Encuentra respuestas a las preguntas más comunes sobre nuestros seguros.
      </p>

      <div class="faq-list">
        <details class="sb-ui-accordion sb-ui-accordion--primary" open>
          <summary class="sb-ui-accordion__header">
            <span class="sb-ui-accordion__label">¿Qué es un seguro de vida?</span>
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            Un seguro de vida es un contrato entre tú y la compañía aseguradora que garantiza una
            protección económica para tus beneficiarios en caso de fallecimiento. También puede
            incluir coberturas adicionales como invalidez total y enfermedades graves.
          </div>
        </details>

        <details class="sb-ui-accordion sb-ui-accordion--primary">
          <summary class="sb-ui-accordion__header">
            <span class="sb-ui-accordion__label">¿Cómo se calcula la prima?</span>
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            La prima se calcula en base a varios factores: tu edad, estado de salud, ocupación,
            valor asegurado y coberturas adicionales que elijas. Nuestro sistema te dará una
            cotización personalizada en minutos.
          </div>
        </details>

        <details class="sb-ui-accordion sb-ui-accordion--primary">
          <summary class="sb-ui-accordion__header">
            <span class="sb-ui-accordion__label">¿Puedo cambiar mis beneficiarios?</span>
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            Sí, puedes cambiar tus beneficiarios en cualquier momento durante la vigencia de tu
            póliza. Solo necesitas completar un formulario de cambio de beneficiarios y enviarlo a
            través de nuestra plataforma o en una de nuestras oficinas.
          </div>
        </details>

        <details class="sb-ui-accordion sb-ui-accordion--primary">
          <summary class="sb-ui-accordion__header">
            <span class="sb-ui-accordion__label">¿Cuánto tiempo dura el proceso de reclamo?</span>
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            El proceso de reclamo suele tardar entre 5 y 15 días hábiles, dependiendo de la
            complejidad del caso y la documentación proporcionada. Te mantendremos informado del
            estado de tu reclamo en cada etapa del proceso.
          </div>
        </details>

        <details class="sb-ui-accordion sb-ui-accordion--primary">
          <summary class="sb-ui-accordion__header">
            <span class="sb-ui-accordion__label">¿El seguro cubre enfermedades preexistentes?</span>
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            Las enfermedades preexistentes generalmente no están cubiertas durante el primer año de
            vigencia de la póliza. Sin embargo, después de este período de carencia, podrán ser
            cubiertas según los términos y condiciones de tu póliza.
          </div>
        </details>
      </div>
    </div>
  `,
};

