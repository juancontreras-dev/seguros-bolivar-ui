import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Stepper Component
 *
 * Componente molecular de pasos progresivos para formularios multi-paso, wizards y flujos de trabajo secuenciales.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Orientación** | | |
 * | Horizontal (default) | `.sb-ui-stepper--horizontal` | `<div class="sb-ui-stepper sb-ui-stepper--horizontal">` |
 * | Vertical | `.sb-ui-stepper--vertical` | `<div class="sb-ui-stepper sb-ui-stepper--vertical">` |
 * | **Tipo de Step** | | |
 * | Números (default) | Sin clase adicional | `<div class="sb-ui-stepper">` |
 * | Iconos | `.sb-ui-stepper--type-icon` | `<div class="sb-ui-stepper sb-ui-stepper--type-icon">` |
 * | Iconos + Badge | `.sb-ui-stepper--type-mix` | `<div class="sb-ui-stepper sb-ui-stepper--type-mix">` |
 * | **Estilo de Línea** | | |
 * | Sólida | Sin clase adicional | `<div class="sb-ui-stepper">` |
 * | Punteada | `.sb-ui-stepper--track-dash` | `<div class="sb-ui-stepper sb-ui-stepper--track-dash">` |
 * | **Estados de Step** | | |
 * | Pendiente (no visitado) | `.sb-ui-stepper__step--empty-default` | Círculo blanco, número/icono gris |
 * | Actual (en progreso) | `.sb-ui-stepper__step--empty-active` | Círculo amarillo, número/icono verde |
 * | Completado | `.sb-ui-stepper__step--filled-default` | Círculo verde, check blanco |
 * | Completado + Activo | `.sb-ui-stepper__step--filled-active` | Círculo verde con borde oscuro |
 *
 * ## 💡 Notas Importantes
 *
 * - **Componente solo CSS**: No requiere JavaScript, es HTML + CSS puro
 * - **Navegación manual**: Debes actualizar las clases de estado según tu lógica
 * - **Líneas siempre verdes (#009056)**: Solo cambia entre sólida (completado) y punteada (pendiente)
 * - **Badge en Mix**: Se posiciona arriba centrado del círculo
 * - **Responsive automático**: Desktop 54-62px, Mobile 40-46px usando clamp()
 * - **RTL-ready**: Usa Logical Properties (inline-size, block-size, etc.)
 *
 * ## 🎯 Anatomía del Componente
 *
 * ```html
 * <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
 *   <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-default">
 *     <div class="sb-ui-stepper__step-circle">
 *       <svg>...check icon...</svg>
 *     </div>
 *     <div class="sb-ui-stepper__step-label">Paso 1</div>
 *     <div class="sb-ui-stepper__step-track"></div>
 *   </div>
 * </div>
 * ```
 *
 * ## 🚀 Ejemplo de Uso con JavaScript
 *
 * ```javascript
 * function updateStepper(currentStep) {
 *   const steps = document.querySelectorAll('.sb-ui-stepper__step');
 *
 *   steps.forEach((step, index) => {
 *     const stepNumber = index + 1;
 *     const circle = step.querySelector('.sb-ui-stepper__step-circle');
 *
 *     step.classList.remove(
 *       'sb-ui-stepper__step--empty-default',
 *       'sb-ui-stepper__step--empty-active',
 *       'sb-ui-stepper__step--filled-default'
 *     );
 *
 *     if (stepNumber < currentStep) {
 *       step.classList.add('sb-ui-stepper__step--filled-default');
 *       circle.innerHTML = '<svg>...check...</svg>';
 *     } else if (stepNumber === currentStep) {
 *       step.classList.add('sb-ui-stepper__step--empty-active');
 *       circle.textContent = stepNumber;
 *     } else {
 *       step.classList.add('sb-ui-stepper__step--empty-default');
 *       circle.textContent = stepNumber;
 *     }
 *   });
 * }
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Stepper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de pasos progresivos para crear flujos de trabajo multi-paso. Incluye 3 tipos (Number, Icon, Mix), 2 orientaciones (Horizontal, Vertical) y 4 estados visuales.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientación del stepper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    type: {
      control: 'select',
      options: ['number', 'icon', 'mix'],
      description: 'Tipo de visualización de los steps',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'number' },
      },
    },
    trackStyle: {
      control: 'select',
      options: ['solid', 'dash'],
      description: 'Estilo de la línea conectora',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dash' },
      },
    },
    currentStep: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'Paso actual (1-indexed)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    totalSteps: {
      control: { type: 'number', min: 2, max: 6 },
      description: 'Total de pasos',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ============================================
// HELPER: SVG Icons
// ============================================
const checkIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
</svg>`;

const userIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  />
</svg>`;

// ============================================
// HELPER: Renderizar Step
// ============================================
function renderStep(
  stepNumber: number,
  currentStep: number,
  label: string,
  type: string = 'number',
  isLast: boolean = false
) {
  const isCompleted = stepNumber < currentStep;
  const isActive = stepNumber === currentStep;
  const isPending = stepNumber > currentStep;

  let stateClass = '';
  let circleContent: any = stepNumber;

  if (isCompleted) {
    stateClass = 'sb-ui-stepper__step--filled-default';
    if (type === 'mix') {
      circleContent = html`
        <div class="sb-ui-stepper__step-circle-badge">${stepNumber}</div>
        ${checkIcon}
      `;
    } else {
      circleContent = checkIcon;
    }
  } else if (isActive) {
    stateClass = 'sb-ui-stepper__step--empty-active';
    if (type === 'icon') {
      circleContent = userIcon;
    } else if (type === 'mix') {
      circleContent = html`
        <div class="sb-ui-stepper__step-circle-badge">${stepNumber}</div>
        ${userIcon}
      `;
    }
  } else {
    stateClass = 'sb-ui-stepper__step--empty-default';
    if (type === 'icon') {
      circleContent = userIcon;
    } else if (type === 'mix') {
      circleContent = html`
        <div class="sb-ui-stepper__step-circle-badge">${stepNumber}</div>
        ${userIcon}
      `;
    }
  }

  return html`
    <div class="sb-ui-stepper__step ${stateClass}">
      <div class="sb-ui-stepper__step-circle" aria-current="${isActive ? 'step' : 'false'}">
        ${circleContent}
      </div>
      <div class="sb-ui-stepper__step-label">${label}</div>
      ${!isLast
        ? html`<div
            class="sb-ui-stepper__step-track"
            style="${isCompleted ? 'border-style: solid' : ''}"
          ></div>`
        : ''}
    </div>
  `;
}

// ============================================
// STORIES
// ============================================

/**
 * ## 1. Number Horizontal (Default)
 *
 * Stepper con números. La configuración más común y simple.
 *
 * **Uso:**
 * - Formularios multi-paso básicos
 * - Procesos lineales
 * - Cuando no necesitas iconos personalizados
 */
export const NumberHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4,
  },
  render: ({ orientation, type, trackStyle, currentStep, totalSteps }) => {
    const orientationClass =
      orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? `sb-ui-stepper--type-${type}` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';

    const steps = [];
    const labels = [
      'Datos Personales',
      'Contacto',
      'Dirección',
      'Confirmación',
      'Finalizar',
      'Pago',
    ];

    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || `Paso ${i}`, type, i === totalSteps));
    }

    return html`
      <div class="sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}">${steps}</div>
    `;
  },
};

/**
 * ## 2. Icon Horizontal
 *
 * Stepper con iconos personalizados. Ideal para flujos con identidad visual clara.
 *
 * **Uso:**
 * - Procesos con pasos diferenciados visualmente
 * - Cuando cada paso tiene un icono representativo
 * - Layouts más visuales y amigables
 *
 * **Tamaños:**
 * - Desktop: 62px
 * - Mobile: 46px
 */
export const IconHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    type: 'icon',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4,
  },
  render: ({ orientation, type, trackStyle, currentStep, totalSteps }) => {
    const orientationClass =
      orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? `sb-ui-stepper--type-${type}` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';

    const steps = [];
    const labels = ['Escoger', 'Datos', 'Confirmar', 'Pagar'];

    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || `Paso ${i}`, type, i === totalSteps));
    }

    return html`
      <div class="sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}">${steps}</div>
    `;
  },
};

/**
 * ## 3. Mix Horizontal (Icon + Badge)
 *
 * Stepper con iconos Y badge numérico arriba centrado. El badge permanece en todos los estados.
 *
 * **Uso:**
 * - Cuando necesitas iconos Y numeración visible
 * - Procesos complejos donde el número del paso importa
 * - Flujos largos (5+ pasos)
 *
 * **Características:**
 * - Badge arriba centrado del círculo
 * - Badge color: #FFCE29 (amarillo oscuro)
 * - Badge permanece incluso cuando el step está completado
 */
export const MixHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    type: 'mix',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4,
  },
  render: ({ orientation, type, trackStyle, currentStep, totalSteps }) => {
    const orientationClass =
      orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? `sb-ui-stepper--type-${type}` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';

    const steps = [];
    const labels = ['Información', 'Documentos', 'Revisión', 'Confirmar'];

    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || `Paso ${i}`, type, i === totalSteps));
    }

    return html`
      <div class="sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}">${steps}</div>
    `;
  },
};

/**
 * ## 4. Vertical Number
 *
 * Stepper con orientación vertical. Ideal para sidebars y layouts con espacio lateral.
 *
 * **Uso:**
 * - Sidebars de aplicaciones
 * - Layouts de 2 columnas (stepper en el lateral)
 * - Cuando tienes espacio vertical disponible
 *
 * **Características:**
 * - Labels alineados a la izquierda del círculo
 * - Líneas verticales entre steps
 * - Mismo sistema de estados que horizontal
 */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 3,
    totalSteps: 4,
  },
  render: ({ orientation, type, trackStyle, currentStep, totalSteps }) => {
    const orientationClass =
      orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? `sb-ui-stepper--type-${type}` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';

    const steps = [];
    const labels = ['Datos Personales', 'Dirección', 'Confirmación', 'Pago'];

    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || `Paso ${i}`, type, i === totalSteps));
    }

    return html`
      <div class="sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}">${steps}</div>
    `;
  },
};

/**
 * ## 5. Estados Individuales
 *
 * Referencia visual de los 4 estados posibles de un step.
 */
export const States: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;"
    >
      <!-- Empty Default -->
      <div>
        <h3 style="color: var(--sb-ui-color-grayscale-D100, #9b9b9b); font-size: 1rem; margin-bottom: 1rem">Empty Default</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          Paso pendiente (no visitado)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-default">
            <div class="sb-ui-stepper__step-circle">1</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Empty Active -->
      <div>
        <h3 style="color: var(--sb-ui-color-secondary-L100, #ffe16f); font-size: 1rem; margin-bottom: 1rem">Empty Active</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          Paso actual (en progreso)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">2</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Filled Default -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); font-size: 1rem; margin-bottom: 1rem">Filled Default</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">Paso completado</p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-default">
            <div class="sb-ui-stepper__step-circle">${checkIcon}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>

      <!-- Filled Active -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-D100, #05794a); font-size: 1rem; margin-bottom: 1rem">Filled Active</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          Completado + activo (poco común)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">${checkIcon}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 6. Ejemplo Completo: Formulario Multi-Paso
 *
 * Ejemplo real de un stepper integrado con formulario y contenido dinámico.
 *
 * **Características:**
 * - Contenido diferente por paso
 * - Navegación con botones Anterior/Siguiente
 * - Botón cambia a "Finalizar" en el último paso
 * - Steps se actualizan automáticamente
 */
export const FormularioMultiPaso: Story = {
  render: () => {
    // Se renderiza con lit-html
    return html`
      <div style="max-width: 800px; margin: 0 auto;">
        <!-- Stepper -->
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash"
          id="story-stepper"
        >
          ${renderStep(1, 1, 'Datos Personales', 'number', false)}
          ${renderStep(2, 1, 'Contacto', 'number', false)}
          ${renderStep(3, 1, 'Dirección', 'number', false)}
          ${renderStep(4, 1, 'Confirmación', 'number', true)}
        </div>

        <!-- Contenido dinámico -->
        <div
          id="story-content"
          style="
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: var(--sb-ui-color-grayscale-L400, #f9f9f9);
            border-radius: 8px;
            min-height: 150px;
          "
        >
          <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-top: 0">Paso 1: Datos Personales</h3>
          <div style="margin-bottom: 1rem">
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem"
              >Nombre completo</label
            >
            <input
              type="text"
              placeholder="Juan Pérez"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
          <div>
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem">Cédula</label>
            <input
              type="text"
              placeholder="1234567890"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
        </div>

        <!-- Controles -->
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            disabled
            style="cursor: not-allowed; opacity: 0.5"
          >
            ← Anterior
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Siguiente →</button>
        </div>

        <!-- Info -->
        <div style="margin-top: 1rem; padding: 1rem; background: #f0f9f4; border-radius: 8px">
          <strong style="color: var(--sb-ui-color-primary-base, #038450)">💡 Tip:</strong> En tu implementación, usa JavaScript para
          actualizar las clases según el paso actual.
        </div>
      </div>
    `;
  },
};

/**
 * ## 7. Playground
 *
 * Experimenta con todas las combinaciones posibles.
 *
 * **Controles disponibles:**
 * - Orientation: horizontal / vertical
 * - Type: number / icon / mix
 * - Track Style: solid / dash
 * - Current Step: 1-6
 * - Total Steps: 2-6
 */
export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4,
  },
  render: ({ orientation, type, trackStyle, currentStep, totalSteps }) => {
    const orientationClass =
      orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? `sb-ui-stepper--type-${type}` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';

    const steps = [];
    const labels = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5', 'Paso 6'];

    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1], type, i === totalSteps));
    }

    return html`
      <div style="max-width: ${orientation === 'vertical' ? '400px' : '100%'}">
        <div class="sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}">${steps}</div>

        <!-- Info de configuración -->
        <div
          style="
            margin-top: 2rem;
            padding: 1rem;
            background: #f9f9f9;
            border-radius: 8px;
            font-size: 0.875rem;
          "
        >
          <p style="margin: 0.5rem 0"><strong>Orientación:</strong> <code>${orientation}</code></p>
          <p style="margin: 0.5rem 0"><strong>Tipo:</strong> <code>${type}</code></p>
          <p style="margin: 0.5rem 0"><strong>Track:</strong> <code>${trackStyle}</code></p>
          <p style="margin: 0.5rem 0">
            <strong>Paso actual:</strong> <code>${currentStep}</code> de <code>${totalSteps}</code>
          </p>
          <p style="margin-top: 1rem; color: var(--sb-ui-color-primary-base, #038450)">
            <strong>Classes:</strong>
            <code style="font-size: 0.75rem; display: block; margin-top: 0.5rem">
              .sb-ui-stepper ${orientationClass} ${typeClass} ${trackClass}
            </code>
          </p>
        </div>
      </div>
    `;
  },
};

/**
 * ## 8. Todos los Tipos (Comparación)
 *
 * Comparación lado a lado de los 3 tipos de stepper.
 */
export const TodosLosTipos: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Number -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">Number (Default)</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          54px desktop / 40px mobile
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${renderStep(1, 2, 'Paso 1', 'number', false)}
          ${renderStep(2, 2, 'Paso 2', 'number', false)}
          ${renderStep(3, 2, 'Paso 3', 'number', false)}
          ${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>

      <!-- Icon -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">Icon</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          62px desktop / 46px mobile
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-icon sb-ui-stepper--track-dash"
        >
          ${renderStep(1, 2, 'Paso 1', 'icon', false)} ${renderStep(2, 2, 'Paso 2', 'icon', false)}
          ${renderStep(3, 2, 'Paso 3', 'icon', false)} ${renderStep(4, 2, 'Paso 4', 'icon', true)}
        </div>
      </div>

      <!-- Mix -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">Mix (Icon + Badge)</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          62px desktop / 46px mobile + badge arriba centrado
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-mix sb-ui-stepper--track-dash"
        >
          ${renderStep(1, 2, 'Paso 1', 'mix', false)} ${renderStep(2, 2, 'Paso 2', 'mix', false)}
          ${renderStep(3, 2, 'Paso 3', 'mix', false)} ${renderStep(4, 2, 'Paso 4', 'mix', true)}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 9. Track Styles (Comparación)
 *
 * Comparación de líneas sólidas vs punteadas.
 */
export const TrackStyles: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Solid -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">Solid (Sin clase --track-dash)</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          Líneas verdes sólidas siempre
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal">
          ${renderStep(1, 2, 'Paso 1', 'number', false)}
          ${renderStep(2, 2, 'Paso 2', 'number', false)}
          ${renderStep(3, 2, 'Paso 3', 'number', false)}
          ${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>

      <!-- Dash -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">Dash (Recomendado)</h3>
        <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base, #666); margin-bottom: 1rem">
          Sólida después de completados, punteada hacia pendientes
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${renderStep(1, 2, 'Paso 1', 'number', false)}
          ${renderStep(2, 2, 'Paso 2', 'number', false)}
          ${renderStep(3, 2, 'Paso 3', 'number', false)}
          ${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 10. Diferentes Números de Pasos
 *
 * El stepper se adapta automáticamente a cualquier número de pasos.
 */
export const DiferentesNumerosDePasos: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- 2 pasos -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">2 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${renderStep(1, 2, 'Paso 1', 'number', false)}
          ${renderStep(2, 2, 'Paso 2', 'number', true)}
        </div>
      </div>

      <!-- 3 pasos -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">3 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${renderStep(1, 2, 'Paso 1', 'number', false)}
          ${renderStep(2, 2, 'Paso 2', 'number', false)}
          ${renderStep(3, 2, 'Paso 3', 'number', true)}
        </div>
      </div>

      <!-- 5 pasos -->
      <div>
        <h3 style="color: var(--sb-ui-color-primary-base, #038450); margin-bottom: 1rem">5 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${renderStep(1, 3, 'Paso 1', 'number', false)}
          ${renderStep(2, 3, 'Paso 2', 'number', false)}
          ${renderStep(3, 3, 'Paso 3', 'number', false)}
          ${renderStep(4, 3, 'Paso 4', 'number', false)}
          ${renderStep(5, 3, 'Paso 5', 'number', true)}
        </div>
      </div>
    </div>
  `,
};
