import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Spinner Component
 *
 * Componente de spinner/cargador del Seguros Bolivar UI Design System con soporte de progreso dinámico.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Tipos** | | |
 * | Spinner básico (default) | `.sb-ui-spinner` | `<div class="sb-ui-spinner" data-progress="50"></div>` |
 * | Spinner integrado (3 círculos) | `.sb-ui-spinner--integrated` | `<div class="sb-ui-spinner sb-ui-spinner--integrated"></div>` |
 * | Spinner con icono | `.sb-ui-spinner--icon` | Ver ejemplo abajo |
 * | Spinner con icono y texto | `.sb-ui-spinner--icon-text` | Ver ejemplo abajo |
 * | **Modificadores de Velocidad** | | |
 * | Rápido | `.sb-ui-spinner--fast` | `<div class="sb-ui-spinner sb-ui-spinner--fast"></div>` |
 * | Lento | `.sb-ui-spinner--slow` | `<div class="sb-ui-spinner sb-ui-spinner--slow"></div>` |
 * | Pausado | `.sb-ui-spinner--paused` | `<div class="sb-ui-spinner sb-ui-spinner--paused"></div>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Progreso**: Usa `data-progress="0-100"` para controlar el arco del spinner
 * - **Tipo por defecto**: BASIC - spinner simple circular
 * - **Tamaño**: 40x40px (único tamaño)
 * - **Animación**: Rotación infinita suave
 * - **Integrated**: 3 círculos concéntricos con velocidades diferentes
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de spinner para indicar estados de carga con soporte de progreso dinámico (0-100%). Incluye 4 tipos: Basic, Integrated, Icon, Icon-Text.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['basic', 'integrated', 'icon', 'icon-text'],
      description: 'Tipo de spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'basic' },
      },
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progreso del spinner (0-100%) - Solo para tipo "basic"',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    speed: {
      control: 'select',
      options: ['normal', 'fast', 'slow'],
      description: 'Velocidad de rotación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    paused: {
      control: 'boolean',
      description: 'Pausar la animación',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con diferentes tipos, progreso y velocidades del spinner.
 */
export const Playground: Story = {
  args: {
    type: 'basic',
    progress: 50,
    speed: 'normal',
    paused: false,
  },
  render: (args) => {
    const classes = [
      'sb-ui-spinner',
      args.type !== 'basic' ? `sb-ui-spinner--${args.type}` : '',
      args.speed !== 'normal' ? `sb-ui-spinner--${args.speed}` : '',
      args.paused ? 'sb-ui-spinner--paused' : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Para integrated, no usa progress
    const progressAttr = args.type === 'basic' ? args.progress : null;

    return html`
      <div style="display: flex; justify-content: center; padding: 3rem; background: var(--sb-ui-color-grayscale-L400, #fafafa);">
        <div class="${classes}" data-progress="${progressAttr}">
          ${args.type === 'icon' || args.type === 'icon-text'
            ? html`
                <div class="sb-ui-spinner__content">
                  <div class="sb-ui-spinner__icon">
                    <i class="fa-solid fa-check" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
                  </div>
                  ${args.type === 'icon-text'
                    ? html`<div class="sb-ui-spinner__label">OK</div>`
                    : ''}
                </div>
              `
            : ''}
        </div>
      </div>
      ${args.type === 'basic'
        ? html`<div style="text-align: center; color: var(--sb-ui-color-grayscale-base, #666);">
            Progress: ${args.progress}%
          </div>`
        : ''}
    `;
  },
};

/**
 * ## Tipo 1: BASIC Spinner con Progreso
 *
 * Spinner circular simple con gradiente verde. El arco representa el progreso (0-100%).
 */
export const Basic: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: var(--sb-ui-color-primary-base, #038450);">Diferentes Niveles de Progreso</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="0"></div>
          <div class="spinner-demo-label">0%<br />Iniciando</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="25"></div>
          <div class="spinner-demo-label">25%<br />En progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="50"></div>
          <div class="spinner-demo-label">50%<br />Medio camino</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="75"></div>
          <div class="spinner-demo-label">75%<br />Casi listo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="100"></div>
          <div class="spinner-demo-label">100%<br />Completo</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tipo 2: INTEGRATED Spinner (3 Círculos)
 *
 * Spinner con 3 círculos concéntricos que rotan en sentidos alternos:
 * - 🟢 Verde oscuro (#009056) - Anillo externo: 90° - Rota en sentido horario
 * - 🟢 Verde claro (#02D46F) - Anillo medio: 80° - Rota en sentido anti-horario
 * - 🟡 Amarillo (#FFE16F) - Anillo interno: 155° - Rota en sentido horario
 *
 * **Nota:** Los anillos externo e interno rotan en sentido horario, mientras que el anillo medio
 * rota en sentido anti-horario, creando un efecto visual dinámico y fluido.
 */
export const Integrated: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: var(--sb-ui-color-primary-base, #038450);">Spinner Integrado - Rotación Alterna</h3>
      <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-base, #666);">
        Los anillos externo e interno rotan en sentido horario, mientras que el anillo medio rota en sentido anti-horario.
      </p>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="spinner-demo-label">Spinner<br />Integrado</div>
        </div>
      </div>

      <h3 style="margin: 2.5rem 0 1.5rem; color: var(--sb-ui-color-primary-base, #038450);">Diferentes Velocidades</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="spinner-demo-label">Normal<br />Velocidad default</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--fast">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="spinner-demo-label">Fast<br />Velocidad x1.5</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--slow">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="spinner-demo-label">Slow<br />Velocidad /2</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--paused">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="spinner-demo-label">Paused<br />Animación detenida</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tipo 3: ICON Spinner
 *
 * Spinner con icono centrado. El anillo rota alrededor del icono estático.
 * Ideal para mostrar confirmación mientras se procesa.
 */
export const Icon: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: var(--sb-ui-color-primary-base, #038450);">Spinner con Diferentes Iconos</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Check<br />75% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i
                  class="fa-solid fa-cloud-arrow-up"
                  style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"
                ></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Upload<br />50% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="90">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-download" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Download<br />90% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="25">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-sync" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Sync<br />25% Progreso</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tipo 4: ICON-TEXT Spinner
 *
 * Spinner con icono y texto centrados. Combina confirmación visual con mensaje breve.
 */
export const IconText: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: var(--sb-ui-color-primary-base, #038450);">Spinner con Icono y Texto</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div class="spinner-demo-label">100% Complete</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-cloud-arrow-up" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">UP</div>
            </div>
          </div>
          <div class="spinner-demo-label">50% Subiendo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-shield-halved" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">SEC</div>
            </div>
          </div>
          <div class="spinner-demo-label">75% Seguro</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Casos de Uso Prácticos
 *
 * Ejemplos de cómo usar los spinners en contextos reales.
 */
export const CasosDeUso: Story = {
  render: () => html`
    <style>
      .use-cases-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .use-case {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .use-case h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .loading-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .progress-display {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
      }

      .progress-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay con Integrated -->
      <div class="use-case">
        <h3>Loading Overlay - Integrated Spinner</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--integrated">
            <div class="sb-ui-spinner__inner-ring"></div>
          </div>
          <div class="loading-text">Cargando contenido...</div>
        </div>
      </div>

      <!-- Caso 2: Progress Display -->
      <div class="use-case">
        <h3>Upload con Progress - Basic Spinner</h3>
        <div class="progress-display">
          <div class="sb-ui-spinner" data-progress="65"></div>
          <div class="progress-text">
            <strong>Subiendo archivo...</strong><br />
            65% completado (3.2 MB de 5 MB)
          </div>
        </div>
      </div>

      <!-- Caso 3: Success Confirmation -->
      <div class="use-case">
        <h3>Confirmación de Éxito - Icon-Text Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div>
            <strong style="color: var(--sb-ui-color-primary-base, #038450);">¡Operación completada!</strong><br />
            <span style="color: var(--sb-ui-color-grayscale-base, #666);">Tu archivo se ha guardado correctamente</span>
          </div>
        </div>
      </div>

      <!-- Caso 4: Processing -->
      <div class="use-case">
        <h3>Procesando - Icon Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="45">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-gear" style="color: var(--sb-ui-color-primary-base, #038450); font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div>
            <strong>Procesando tu solicitud...</strong><br />
            <span style="color: var(--sb-ui-color-grayscale-base, #666);">Esto puede tomar unos momentos</span>
          </div>
        </div>
      </div>
    </div>
  `,
};
