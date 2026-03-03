import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Radio Button Component
 *
 * Componente de radio button CSS puro del Seguros Bolivar UI Design System.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Radio básico** | `.sb-ui-radio` | `<label class="sb-ui-radio"><input type="radio" class="sb-ui-radio__input" name="group"><span class="sb-ui-radio__circle"></span><span class="sb-ui-radio__label">Opción</span></label>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-radio--small` | `<label class="sb-ui-radio sb-ui-radio--small">...</label>` |
 * | Mediano (default) | `.sb-ui-radio--medium` o sin clase | `<label class="sb-ui-radio">...</label>` |
 * | Grande | `.sb-ui-radio--large` | `<label class="sb-ui-radio sb-ui-radio--large">...</label>` |
 * | **Estados** | | |
 * | Estado error | `.sb-ui-radio--error` | `<label class="sb-ui-radio sb-ui-radio--error">...</label>` |
 * | **Modificadores** | | |
 * | Sin label | `.sb-ui-radio--no-label` | `<label class="sb-ui-radio sb-ui-radio--no-label">...</label>` |
 * | Ancho completo | `.sb-ui-radio--block` | `<label class="sb-ui-radio sb-ui-radio--block">...</label>` |
 * | Layout vertical | `.sb-ui-radio--vertical` | `<label class="sb-ui-radio sb-ui-radio--vertical">...</label>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estructura HTML**: El radio DEBE seguir la estructura: `<label class="sb-ui-radio"><input type="radio" class="sb-ui-radio__input"><span class="sb-ui-radio__circle"></span><span class="sb-ui-radio__label">Label</span></label>`
 * - **Grupos**: Todos los radios del mismo grupo deben tener el mismo atributo `name`
 * - **Tamaño por defecto**: MEDIUM (18×18px circle, 12×12px inner dot)
 * - **Gap**: 8px fijo entre el círculo y el label en todos los tamaños
 * - **Accesibilidad**: El `<label>` envolvente hace todo el área clickeable
 * - **Estados interactivos**: Hover (halo verde), Pressed (doble halo), Focus (halo verde claro)
 * - **Disabled**: Los radios disabled no muestran halos en hover/focus
 * - **Error**: Solo el border cambia a rojo, el label permanece gris
 *
 * ## 🎯 Ejemplo Completo
 *
 * ```html
 * <label class="sb-ui-radio sb-ui-radio--large">
 *   <input type="radio" class="sb-ui-radio__input" name="payment" value="card" checked>
 *   <span class="sb-ui-radio__circle"></span>
 *   <span class="sb-ui-radio__label">Tarjeta de crédito</span>
 * </label>
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de radio button con 3 tamaños, estados interactivos (hover, pressed, focus, disabled, error), y halos visuales para feedback del usuario.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del radio button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto del label',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Estado seleccionado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      control: 'boolean',
      description: 'Estado de error (border rojo)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    noLabel: {
      control: 'boolean',
      description: 'Sin label visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Ancho completo (100%)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    name: {
      control: 'text',
      description: 'Atributo name del input (para agrupar radios)',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor del radio button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to generate radio HTML
const createRadio = ({
  size = 'medium',
  label = 'Opción',
  checked = false,
  disabled = false,
  error = false,
  noLabel = false,
  block = false,
  name = 'demo-group',
  value = 'option',
}: {
  size?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  noLabel?: boolean;
  block?: boolean;
  name?: string;
  value?: string;
}) => {
  const classes = [
    'sb-ui-radio',
    size !== 'medium' ? `sb-ui-radio--${size}` : '',
    error ? 'sb-ui-radio--error' : '',
    noLabel ? 'sb-ui-radio--no-label' : '',
    block ? 'sb-ui-radio--block' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <label class="${classes}">
      <input
        type="radio"
        class="sb-ui-radio__input"
        name="${name}"
        value="${value}"
        ?checked="${checked}"
        ?disabled="${disabled}"
      />
      <span class="sb-ui-radio__circle"></span>
      ${!noLabel ? html`<span class="sb-ui-radio__label">${label}</span>` : ''}
    </label>
  `;
};

/**
 * ## 🎮 Playground Interactivo
 *
 * Prueba todas las combinaciones posibles del radio button.
 * Cambia los controles en el panel de la derecha para ver el resultado en tiempo real.
 */
export const Playground: Story = {
  args: {
    size: 'medium',
    label: 'Opción de ejemplo',
    checked: false,
    disabled: false,
    error: false,
    noLabel: false,
    block: false,
    name: 'playground',
    value: 'example',
  },
  render: (args) => createRadio(args),
};

/**
 * ## 📐 Tamaños
 *
 * El radio button tiene 3 tamaños disponibles:
 * - **Small**: 16×16px (círculo exterior), 10×10px (punto interior)
 * - **Medium**: 18×18px (círculo exterior), 12×12px (punto interior) - Default
 * - **Large**: 24×24px (círculo exterior), 16×16px (punto interior)
 *
 * El gap entre el círculo y el label es siempre **8px** en todos los tamaños.
 */
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">Small</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${createRadio({
            size: 'small',
            label: 'Unselected',
            name: 'size-small',
            value: 'unselected',
          })}
          ${createRadio({
            size: 'small',
            label: 'Selected',
            checked: true,
            name: 'size-small',
            value: 'selected',
          })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Medium (Default)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${createRadio({
            size: 'medium',
            label: 'Unselected',
            name: 'size-medium',
            value: 'unselected',
          })}
          ${createRadio({
            size: 'medium',
            label: 'Selected',
            checked: true,
            name: 'size-medium',
            value: 'selected',
          })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">Large</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${createRadio({
            size: 'large',
            label: 'Unselected',
            name: 'size-large',
            value: 'unselected',
          })}
          ${createRadio({
            size: 'large',
            label: 'Selected',
            checked: true,
            name: 'size-large',
            value: 'selected',
          })}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## ⚡ Estados Básicos
 *
 * Los radios tienen dos estados principales:
 * - **Unselected**: Círculo blanco con border gris
 * - **Selected**: Círculo blanco con border gris + punto verde interior
 */
export const BasicStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      ${createRadio({ label: 'Unselected', name: 'basic-states', value: 'unselected' })}
      ${createRadio({ label: 'Selected', checked: true, name: 'basic-states', value: 'selected' })}
    </div>
  `,
};

/**
 * ## 🚫 Estado Disabled
 *
 * Los radios disabled:
 * - Border y punto interior: gris (#9B9B9B)
 * - Label: gris (#9B9B9B)
 * - Sin halos en hover/focus
 * - Cursor: `not-allowed`
 */
export const DisabledState: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        ${createRadio({
          label: 'Disabled Unselected',
          disabled: true,
          name: 'disabled',
          value: 'unselected',
        })}
        ${createRadio({
          label: 'Disabled Selected',
          checked: true,
          disabled: true,
          name: 'disabled',
          value: 'selected',
        })}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #f8f9fa; border-left: 4px solid var(--sb-ui-color-grayscale-base, #6c757d); font-family: 'Roboto', sans-serif; font-size: 14px; color: var(--sb-ui-color-grayscale-D100, #495057);"
      >
        💡 <strong>Nota:</strong> Los radios disabled NO muestran halos al hacer hover y el cursor
        es <code>not-allowed</code>.
      </p>
    </div>
  `,
};

/**
 * ## ❌ Estado Error
 *
 * El estado error se usa para validación de formularios:
 * - Border: rojo (#DC3545)
 * - Punto interior (si está selected): rojo (#DC3545)
 * - Label: gris normal (#757575) - NO cambia a rojo
 */
export const ErrorState: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        ${createRadio({
          label: 'Error Unselected',
          error: true,
          name: 'error',
          value: 'unselected',
        })}
        ${createRadio({
          label: 'Error Selected',
          checked: true,
          error: true,
          name: 'error',
          value: 'selected',
        })}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #fff5f5; border-left: 4px solid var(--sb-ui-color-feedback-error-base, #dc3545); font-family: 'Roboto', sans-serif; font-size: 14px; color: var(--sb-ui-color-feedback-error-D200, #721c24);"
      >
        ⚠️ <strong>Importante:</strong> Solo el border y el punto interior cambian a rojo. El label
        permanece gris para mejor legibilidad.
      </p>
    </div>
  `,
};

/**
 * ## 🎨 Estados Interactivos (Hover, Pressed, Focus)
 *
 * Los radios tienen feedback visual mediante halos:
 * - **Hover**: Halo verde claro (32×32px, opacity 0.7)
 * - **Pressed**: Doble halo (outer: 32×32px, inner: 28×28px)
 * - **Focus**: Halo verde más claro (32×32px, opacity 0.7)
 *
 * 💡 Pasa el mouse y haz click en los radios para ver los halos.
 */
export const InteractiveStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Hover State (pasa el mouse)
        </h4>
        ${createRadio({ label: 'Hover me!', name: 'hover', value: 'hover' })}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Pressed State (mantén presionado)
        </h4>
        ${createRadio({ label: 'Click and hold!', name: 'pressed', value: 'pressed' })}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Focus State (usa Tab para navegar)
        </h4>
        ${createRadio({ label: 'Tab here!', name: 'focus', value: 'focus' })}
      </div>

      <p
        style="margin: 0; padding: 12px; background: #e7f5ff; border-left: 4px solid var(--sb-ui-color-info-base, #0c8599); font-family: 'Roboto', sans-serif; font-size: 14px; color: var(--sb-ui-color-info-D100, #0c5460);"
      >
        ℹ️ <strong>Info:</strong> Los halos NO aparecen cuando el radio está disabled.
      </p>
    </div>
  `,
};

/**
 * ## 🔗 Grupos de Radios
 *
 * Los radios se agrupan usando el atributo `name`. Solo uno puede estar seleccionado por grupo.
 */
export const RadioGroups: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Método de Pago
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${createRadio({
            label: 'Tarjeta de crédito',
            checked: true,
            name: 'payment',
            value: 'card',
          })}
          ${createRadio({ label: 'Transferencia bancaria', name: 'payment', value: 'transfer' })}
          ${createRadio({ label: 'PayPal', name: 'payment', value: 'paypal' })}
          ${createRadio({ label: 'Efectivo', name: 'payment', value: 'cash' })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">Tamaño</h4>
        <div style="display: flex; gap: 16px;">
          ${createRadio({ label: 'S', name: 'size', value: 's' })}
          ${createRadio({ label: 'M', checked: true, name: 'size', value: 'm' })}
          ${createRadio({ label: 'L', name: 'size', value: 'l' })}
          ${createRadio({ label: 'XL', name: 'size', value: 'xl' })}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 🔧 Modificadores
 *
 * Modificadores adicionales para casos especiales:
 * - **No Label**: Solo el círculo (útil para casos donde el label es visual en otro lugar)
 * - **Block**: Ancho completo (útil en formularios)
 * - **Vertical**: Label arriba del círculo (útil para textos largos)
 */
export const Modifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          No Label (solo círculo)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${createRadio({ noLabel: true, name: 'no-label', value: 'unselected' })}
          ${createRadio({ checked: true, noLabel: true, name: 'no-label', value: 'selected' })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D200, #333);">
          Block (ancho completo)
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${createRadio({
            label: 'Opción 1',
            block: true,
            checked: true,
            name: 'block',
            value: '1',
          })}
          ${createRadio({ label: 'Opción 2', block: true, name: 'block', value: '2' })}
          ${createRadio({ label: 'Opción 3', block: true, name: 'block', value: '3' })}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 📋 Validación de Formularios
 *
 * Ejemplo de uso del estado error en validación de formularios.
 * El radio se marca como error cuando no se selecciona ninguna opción.
 */
export const FormValidation: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <form
        id="radio-form"
        style="display: flex; flex-direction: column; gap: 20px; padding: 24px; border: 1px solid #dee2e6; border-radius: 8px; background: #f8f9fa;"
      >
        <div>
          <label
            style="display: block; margin-bottom: 8px; font-weight: 500; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D300, #212529);"
          >
            Selecciona una opción *
          </label>
          <div id="radio-group" style="display: flex; flex-direction: column; gap: 12px;">
            ${createRadio({ label: 'Opción A', name: 'required-option', value: 'a' })}
            ${createRadio({ label: 'Opción B', name: 'required-option', value: 'b' })}
            ${createRadio({ label: 'Opción C', name: 'required-option', value: 'c' })}
          </div>
          <span
            id="error-message"
            style="display: none; margin-top: 8px; font-size: 14px; color: var(--sb-ui-color-feedback-error-base, #dc3545); font-family: 'Roboto', sans-serif;"
          >
            ⚠️ Debes seleccionar una opción
          </span>
        </div>

        <button
          type="submit"
          style="padding: 12px 24px; background: #009056; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; font-family: 'Roboto', sans-serif;"
        >
          Enviar
        </button>

        <div
          id="result"
          style="display: none; padding: 12px; background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; color: var(--sb-ui-color-info-D100, #0c5460); font-family: 'Roboto', sans-serif; font-size: 14px;"
        ></div>
      </form>
    </div>

    <script>
      (function () {
        const form = document.getElementById('radio-form');
        const radioGroup = document.getElementById('radio-group');
        const errorMessage = document.getElementById('error-message');
        const result = document.getElementById('result');

        if (form && radioGroup && errorMessage && result) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedRadio = form.querySelector('input[name="required-option"]:checked');
            const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');

            if (!selectedRadio) {
              // Mostrar error
              allRadios.forEach((radio) => radio.classList.add('sb-ui-radio--error'));
              errorMessage.style.display = 'block';
              result.style.display = 'none';
            } else {
              // Limpiar error y mostrar resultado
              allRadios.forEach((radio) => radio.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
              result.style.display = 'block';
              result.textContent = \`✅ Opción seleccionada: \${selectedRadio.value.toUpperCase()}\`;
            }
          });

          // Limpiar error al seleccionar
          const radios = form.querySelectorAll('input[name="required-option"]');
          radios.forEach((radio) => {
            radio.addEventListener('change', () => {
              const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');
              allRadios.forEach((r) => r.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
            });
          });
        }
      })();
    </script>
  `,
};

/**
 * ## 🌍 Ejemplos del Mundo Real
 *
 * Casos de uso comunes en aplicaciones reales.
 */
export const RealWorldExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <!-- Ejemplo 1: Selector de plan -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D300, #212529);">
          Selecciona tu plan
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${createRadio({
              label: 'Plan Básico - $9.99/mes',
              checked: true,
              name: 'plan',
              value: 'basic',
            })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: var(--sb-ui-color-grayscale-base, #6c757d); font-family: 'Roboto', sans-serif;"
            >
              Ideal para uso personal. Incluye 10GB de almacenamiento.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${createRadio({ label: 'Plan Pro - $19.99/mes', name: 'plan', value: 'pro' })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: var(--sb-ui-color-grayscale-base, #6c757d); font-family: 'Roboto', sans-serif;"
            >
              Para equipos pequeños. 100GB de almacenamiento + colaboración.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${createRadio({
              label: 'Plan Enterprise - Contactar',
              name: 'plan',
              value: 'enterprise',
            })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: var(--sb-ui-color-grayscale-base, #6c757d); font-family: 'Roboto', sans-serif;"
            >
              Solución personalizada para grandes organizaciones.
            </p>
          </div>
        </div>
      </div>

      <!-- Ejemplo 2: Opciones de envío -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D300, #212529);">
          Método de envío
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${createRadio({
            label: 'Envío estándar (5-7 días) - Gratis',
            checked: true,
            name: 'shipping',
            value: 'standard',
          })}
          ${createRadio({
            label: 'Envío express (2-3 días) - $9.99',
            name: 'shipping',
            value: 'express',
          })}
          ${createRadio({
            label: 'Envío prioritario (1 día) - $19.99',
            name: 'shipping',
            value: 'priority',
          })}
        </div>
      </div>

      <!-- Ejemplo 3: Pregunta de encuesta -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: var(--sb-ui-color-grayscale-D300, #212529);">
          ¿Cómo calificarías nuestro servicio?
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${createRadio({ label: 'Excelente', name: 'rating', value: 'excellent', size: 'large' })}
          ${createRadio({ label: 'Bueno', name: 'rating', value: 'good', size: 'large' })}
          ${createRadio({ label: 'Regular', name: 'rating', value: 'fair', size: 'large' })}
          ${createRadio({ label: 'Malo', name: 'rating', value: 'poor', size: 'large' })}
        </div>
      </div>
    </div>
  `,
};

/**
 * ## 📊 Matriz Completa de Estados
 *
 * Tabla completa mostrando todas las combinaciones de estados y tamaños.
 */
export const StateMatrix: Story = {
  render: () => html`
    <div style="overflow-x: auto;">
      <table
        style="width: 100%; border-collapse: collapse; font-family: 'Roboto', sans-serif; font-size: 14px;"
      >
        <thead>
          <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
            <th style="padding: 12px; text-align: left; font-weight: 600;">Tamaño</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Unselected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled + Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error + Selected</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Small</td>
            <td style="padding: 16px;">
              ${createRadio({ size: 'small', label: 'Option', name: 'matrix-small-1', value: '1' })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'small',
                label: 'Option',
                checked: true,
                name: 'matrix-small-2',
                value: '2',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'small',
                label: 'Option',
                disabled: true,
                name: 'matrix-small-3',
                value: '3',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'small',
                label: 'Option',
                checked: true,
                disabled: true,
                name: 'matrix-small-4',
                value: '4',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'small',
                label: 'Option',
                error: true,
                name: 'matrix-small-5',
                value: '5',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'small',
                label: 'Option',
                checked: true,
                error: true,
                name: 'matrix-small-6',
                value: '6',
              })}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Medium</td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                name: 'matrix-medium-1',
                value: '1',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                checked: true,
                name: 'matrix-medium-2',
                value: '2',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                disabled: true,
                name: 'matrix-medium-3',
                value: '3',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                checked: true,
                disabled: true,
                name: 'matrix-medium-4',
                value: '4',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                error: true,
                name: 'matrix-medium-5',
                value: '5',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'medium',
                label: 'Option',
                checked: true,
                error: true,
                name: 'matrix-medium-6',
                value: '6',
              })}
            </td>
          </tr>
          <tr>
            <td style="padding: 16px; font-weight: 500;">Large</td>
            <td style="padding: 16px;">
              ${createRadio({ size: 'large', label: 'Option', name: 'matrix-large-1', value: '1' })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'large',
                label: 'Option',
                checked: true,
                name: 'matrix-large-2',
                value: '2',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'large',
                label: 'Option',
                disabled: true,
                name: 'matrix-large-3',
                value: '3',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'large',
                label: 'Option',
                checked: true,
                disabled: true,
                name: 'matrix-large-4',
                value: '4',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'large',
                label: 'Option',
                error: true,
                name: 'matrix-large-5',
                value: '5',
              })}
            </td>
            <td style="padding: 16px;">
              ${createRadio({
                size: 'large',
                label: 'Option',
                checked: true,
                error: true,
                name: 'matrix-large-6',
                value: '6',
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
};

/**
 * ## 💻 Código HTML
 *
 * Ejemplos de código HTML listo para copiar y pegar.
 */
export const CodeExamples: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 32px; font-family: 'Roboto', sans-serif;"
    >
      <div>
        <h4 style="margin: 0 0 12px 0; color: var(--sb-ui-color-grayscale-D300, #212529);">Radio Básico</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="group" value="option"&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Opción&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: var(--sb-ui-color-grayscale-D300, #212529);">Radio con todos los atributos</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio sb-ui-radio--large sb-ui-radio--error"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="payment" value="card" checked disabled&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Tarjeta de crédito&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: var(--sb-ui-color-grayscale-D300, #212529);">Grupo de Radios</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;div&gt;
  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="s"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Small&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="m" checked&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Medium&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="l"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Large&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  `,
};
