import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Accordion Component
 *
 * Componente de acordeón CSS puro usando el elemento nativo `<details>` y `<summary>` (sin JavaScript).
 *
 * ## Dos tipos principales
 *
 * | Tipo | Descripción | Diferencia en HTML |
 * |------|-------------|-------------------|
 * | **Con acción** | Incluye un pill button opcional dentro del header | Agrega `<button class="sb-ui-accordion__action">` |
 * | **Sin acción** | Solo icono + label + chevron | Sin el `<button>` |
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS |
 * |-----------|-----------|
 * | **Variantes de color** | |
 * | Acordeón primario | `.sb-ui-accordion--primary` |
 * | Acordeón secundario | `.sb-ui-accordion--secondary` |
 * | **Tamaños** | |
 * | Pequeño | `.sb-ui-accordion--small` |
 * | Mediano (default) | sin clase de tamaño |
 * | Grande | `.sb-ui-accordion--large` |
 * | **Estados** | |
 * | Abierto | atributo `open` en `<details>` |
 * | Deshabilitado | `.sb-ui-accordion--disabled` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Elemento nativo**: Usa `<details>` y `<summary>` — sin JavaScript
 * - **Pill button propio**: `.sb-ui-accordion__action` tiene su propio estilo, no usa clases de button
 * - **Accesibilidad**: El elemento `<details>` es accesible por defecto
 * - **Múltiples acordeones**: Cada acordeón funciona independientemente
 */
const meta: Meta = {
  title: 'Atoms/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Acordeón CSS puro con elemento nativo &lt;details&gt;. Dos tipos: con botón de acción (pill) y sin botón. Incluye variantes de color (Primary, Secondary), tamaños y estado disabled.',
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
    label: {
      control: 'text',
      description: 'Texto del label en el header',
      table: { type: { summary: 'string' } },
    },
    content: {
      control: 'text',
      description: 'Contenido del acordeón',
      table: { type: { summary: 'string' } },
    },
    open: {
      control: 'boolean',
      description: 'Abierto por defecto',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    withAction: {
      control: 'boolean',
      description: 'Mostrar el pill button de acción',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: true } },
    },
    actionLabel: {
      control: 'text',
      description: 'Texto del botón de acción',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ============================================================
   PLAYGROUND
   ============================================================ */
/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del acordeón usando los controles.
 * Activa/desactiva el **botón de acción** con el control `withAction`.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      source: { format: 'dedent', language: 'html' },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Información general',
    content: 'Aquí va el contenido de información general del proyecto.',
    withAction: true,
    actionLabel: 'Descargar',
    open: false,
    disabled: false,
  },
  render: (args) => {
    const classes = [
      'sb-ui-accordion',
      `sb-ui-accordion--${args.variant}`,
      args.size !== 'medium' ? `sb-ui-accordion--${args.size}` : '',
      args.disabled ? 'sb-ui-accordion--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div style="max-inline-size: 600px;">
        <details class="${classes}" ?open="${args.open}">
          <summary class="sb-ui-accordion__header">
            <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
            <span class="sb-ui-accordion__label">${args.label}</span>
            ${args.withAction
              ? html`<button
                  class="sb-ui-accordion__action"
                  type="button"
                  @click="${(e: Event) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}"
                >
                  <i class="fa-solid fa-circle-down" aria-hidden="true"></i>
                  ${args.actionLabel}
                </button>`
              : ''}
            <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
          </summary>
          <div class="sb-ui-accordion__content">
            <p>${args.content}</p>
          </div>
        </details>
      </div>
    `;
  },
};

/* ============================================================
   CON ACCIÓN
   ============================================================ */
/**
 * ## Con acción
 *
 * Tipo de acordeón con **pill button** (`sb-ui-accordion__action`) dentro del header.
 * El botón tiene su propio estilo definido en los tokens del acordeón — no usa clases del componente Button.
 *
 * El handler del click debe incluir `event.stopPropagation()` y `event.preventDefault()`
 * para que el clic en el botón no abra/cierre el acordeón.
 *
 * ```html
 * <button class="sb-ui-accordion__action" type="button"
 *         onclick="event.stopPropagation(); event.preventDefault();">
 *   <i class="fa-solid fa-circle-down"></i>
 *   Descargar
 * </button>
 * ```
 */
export const ConAccion: Story = {
  name: 'Con acción',
  parameters: {
    docs: { source: { format: 'dedent', language: 'html' } },
  },
  render: () => html`
    <div style="max-inline-size: 600px; display: flex; flex-direction: column; gap: clamp(0.75rem, 0.5rem + 0.5vw, 1rem);">
      <!-- Cerrado -->
      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Información general</span>
          <button
            class="sb-ui-accordion__action"
            type="button"
            onclick="event.stopPropagation(); event.preventDefault();"
          >
            <i class="fa-solid fa-circle-down" aria-hidden="true"></i>
            Descargar
          </button>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>Aquí va el contenido de información general del proyecto.</p>
        </div>
      </details>

      <!-- Cerrado -->
      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Descripción del proyecto</span>
          <button
            class="sb-ui-accordion__action"
            type="button"
            onclick="event.stopPropagation(); event.preventDefault();"
          >
            <i class="fa-solid fa-circle-down" aria-hidden="true"></i>
            Descargar
          </button>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>Descripción detallada del proyecto con sus objetivos y alcance.</p>
        </div>
      </details>

      <!-- Abierto -->
      <details class="sb-ui-accordion sb-ui-accordion--primary" open>
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Información constructiva</span>
          <button
            class="sb-ui-accordion__action"
            type="button"
            onclick="event.stopPropagation(); event.preventDefault();"
          >
            <i class="fa-solid fa-circle-down" aria-hidden="true"></i>
            Descargar
          </button>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </details>
    </div>
  `,
};

/* ============================================================
   SIN ACCIÓN
   ============================================================ */
/**
 * ## Sin acción
 *
 * Tipo de acordeón **sin pill button**: solo icono de inicio, label y chevron.
 * Úsalo cuando el acordeón no necesita una acción secundaria.
 *
 * ```html
 * <details class="sb-ui-accordion sb-ui-accordion--primary">
 *   <summary class="sb-ui-accordion__header">
 *     <i class="fa-solid fa-globe sb-ui-accordion__icon-start"></i>
 *     <span class="sb-ui-accordion__label">Título</span>
 *     <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end"></i>
 *   </summary>
 *   <div class="sb-ui-accordion__content">Contenido.</div>
 * </details>
 * ```
 */
export const SinAccion: Story = {
  name: 'Sin acción',
  parameters: {
    docs: { source: { format: 'dedent', language: 'html' } },
  },
  render: () => html`
    <div style="max-inline-size: 600px; display: flex; flex-direction: column; gap: clamp(0.75rem, 0.5rem + 0.5vw, 1rem);">
      <!-- Cerrado -->
      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Información general</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>Aquí va el contenido de información general del proyecto.</p>
        </div>
      </details>

      <!-- Cerrado -->
      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Descripción del proyecto</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>Descripción detallada del proyecto con sus objetivos y alcance.</p>
        </div>
      </details>

      <!-- Abierto -->
      <details class="sb-ui-accordion sb-ui-accordion--primary" open>
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Información constructiva</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </details>
    </div>
  `,
};

/* ============================================================
   DISABLED
   ============================================================ */
/**
 * ## Disabled
 *
 * Estado deshabilitado con `.sb-ui-accordion--disabled`. El CSS aplica
 * `pointer-events: none` y opacidad reducida — no requiere atributo `disabled` en el `<details>`.
 */
export const Disabled: Story = {
  parameters: {
    docs: { source: { format: 'dedent', language: 'html' } },
  },
  render: () => html`
    <div style="max-inline-size: 600px;">
      <details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--disabled">
        <summary class="sb-ui-accordion__header">
          <i class="fa-solid fa-globe sb-ui-accordion__icon-start" aria-hidden="true"></i>
          <span class="sb-ui-accordion__label">Información general</span>
          <button
            class="sb-ui-accordion__action"
            type="button"
            onclick="event.stopPropagation(); event.preventDefault();"
          >
            <i class="fa-solid fa-circle-down" aria-hidden="true"></i>
            Descargar
          </button>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          <p>Este contenido no es accesible cuando el acordeón está deshabilitado.</p>
        </div>
      </details>
    </div>
  `,
};

/* ============================================================
   FAQ — MÚLTIPLES ACORDEONES
   ============================================================ */
/**
 * ## FAQ — Múltiples acordeones
 *
 * Ejemplo de múltiples acordeones "sin acción" apilados para una sección de preguntas frecuentes.
 * Cada acordeón funciona independientemente.
 */
export const FAQ: Story = {
  name: 'FAQ',
  parameters: {
    docs: { source: { format: 'dedent', language: 'html' } },
  },
  render: () => html`
    <div style="max-inline-size: 800px; display: flex; flex-direction: column; gap: clamp(0.75rem, 0.5rem + 0.5vw, 1rem);">
      <details class="sb-ui-accordion sb-ui-accordion--primary" open>
        <summary class="sb-ui-accordion__header">
          <span class="sb-ui-accordion__label">¿Qué es un seguro de vida?</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
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
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
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
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          Sí, puedes cambiar tus beneficiarios en cualquier momento durante la vigencia de tu
          póliza. Solo necesitas completar un formulario de cambio de beneficiarios y enviarlo
          a través de nuestra plataforma o en una de nuestras oficinas.
        </div>
      </details>

      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <span class="sb-ui-accordion__label">¿Cuánto tiempo dura el proceso de reclamo?</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          El proceso de reclamo suele tardar entre 5 y 15 días hábiles, dependiendo de la
          complejidad del caso y la documentación proporcionada.
        </div>
      </details>

      <details class="sb-ui-accordion sb-ui-accordion--primary">
        <summary class="sb-ui-accordion__header">
          <span class="sb-ui-accordion__label">¿El seguro cubre enfermedades preexistentes?</span>
          <i class="fa-solid fa-chevron-down sb-ui-accordion__icon-end" aria-hidden="true"></i>
        </summary>
        <div class="sb-ui-accordion__content">
          Las enfermedades preexistentes generalmente no están cubiertas durante el primer año de
          vigencia de la póliza. Después de este período de carencia, podrán ser cubiertas según
          los términos y condiciones de tu póliza.
        </div>
      </details>
    </div>
  `,
};
