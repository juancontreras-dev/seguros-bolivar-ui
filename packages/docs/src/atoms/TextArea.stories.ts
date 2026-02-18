import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # TextArea Component
 *
 * Componente de textarea versátil del Seguros Bolivar UI Design System con contador de caracteres, auto-resize y diferentes estados.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | TextArea normal (default) | `.sb-ui-textarea` | `<textarea class="sb-ui-textarea"></textarea>` |
 * | TextArea con error | `.sb-ui-textarea--error` | `<textarea class="sb-ui-textarea sb-ui-textarea--error"></textarea>` |
 * | TextArea exitoso | `.sb-ui-textarea--success` | `<textarea class="sb-ui-textarea sb-ui-textarea--success"></textarea>` |
 * | TextArea con advertencia | `.sb-ui-textarea--warning` | `<textarea class="sb-ui-textarea sb-ui-textarea--warning"></textarea>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-textarea--small` | `<textarea class="sb-ui-textarea sb-ui-textarea--small"></textarea>` |
 * | Mediano (default) | `.sb-ui-textarea--medium` o sin clase | `<textarea class="sb-ui-textarea"></textarea>` |
 * | Grande | `.sb-ui-textarea--large` | `<textarea class="sb-ui-textarea sb-ui-textarea--large"></textarea>` |
 * | **Resize** | | |
 * | Sin resize | `.sb-ui-textarea--no-resize` | `<textarea class="sb-ui-textarea sb-ui-textarea--no-resize"></textarea>` |
 * | Auto resize | `.sb-ui-textarea--auto-resize` | `<textarea class="sb-ui-textarea sb-ui-textarea--auto-resize"></textarea>` |
 * | **Modificadores** | | |
 * | Con contador | `.sb-ui-textarea--with-counter` | En un `.sb-ui-textarea-container` |
 * | Bordes redondeados | `.sb-ui-textarea--rounded` | `<textarea class="sb-ui-textarea sb-ui-textarea--rounded"></textarea>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: NORMAL - sin validación especial
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Label**: Usa `sb-ui-textarea-label` y `sb-ui-textarea-label--required` para requeridos
 * - **Helper text**: Usa `sb-ui-textarea-helper` con estados `--error`, `--success`, `--warning`
 * - **Contador de caracteres**: Requiere contenedor `sb-ui-textarea-container` y `maxlength`
 * - **Auto-resize**: Se ajusta automáticamente al contenido del usuario
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div class="sb-ui-textarea-container">
 *   <label class="sb-ui-textarea-label sb-ui-textarea-label--required">Comentarios</label>
 *   <textarea class="sb-ui-textarea sb-ui-textarea--with-counter" maxlength="500"></textarea>
 *   <div class="textarea-footer">
 *     <span class="sb-ui-textarea-helper">
 *       <i class="fa-solid fa-circle-info"></i>
 *       Máximo 500 caracteres
 *     </span>
 *     <span class="sb-ui-textarea-counter">0 / 500</span>
 *   </div>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/TextArea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de textarea versátil con 4 estados de validación (Normal, Error, Success, Warning), 3 tamaños (Small, Medium, Large), contador de caracteres y auto-resize.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder del textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor del textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto del label',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Campo requerido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'TextArea deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Máximo número de caracteres',
      table: {
        type: { summary: 'number' },
      },
    },
    withCounter: {
      control: 'boolean',
      description: 'Mostrar contador de caracteres',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    resize: {
      control: 'select',
      options: ['default', 'none', 'auto', 'horizontal', 'both'],
      description: 'Comportamiento de resize',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
      table: {
        type: { summary: 'string' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Bordes redondeados',
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
 * Experimenta con todas las combinaciones del textarea usando los controles interactivos
 * en el panel inferior. Puedes ajustar estado, tamaño, contador y más.
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
    state: 'normal',
    size: 'medium',
    placeholder: 'Escribe tu mensaje aquí...',
    value: '',
    label: 'Label txt',
    required: false,
    disabled: false,
    maxLength: 200,
    withCounter: false,
    resize: 'default',
    helperText: 'Help text',
    rounded: false,
  },
  render: (args) => {
    const textareaClasses = [
      'sb-ui-textarea',
      args.state !== 'normal' ? `sb-ui-textarea--${args.state}` : '',
      args.size !== 'medium' ? `sb-ui-textarea--${args.size}` : '',
      args.rounded ? 'sb-ui-textarea--rounded' : '',
      args.withCounter ? 'sb-ui-textarea--with-counter' : '',
      args.resize !== 'default'
        ? `sb-ui-textarea--${args.resize === 'none' ? 'no-resize' : args.resize === 'auto' ? 'auto-resize' : `resize-${args.resize}`}`
        : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'sb-ui-textarea-label',
      args.required ? 'sb-ui-textarea-label--required' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'sb-ui-textarea-helper',
      args.state !== 'normal' ? `sb-ui-textarea-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const getHelperIcon = (state: string) => {
      switch (state) {
        case 'success':
          return html`<i class="fa-solid fa-circle-check"></i>`;
        case 'error':
          return html`<i class="fa-solid fa-circle-xmark"></i>`;
        case 'warning':
          return html`<i class="fa-solid fa-triangle-exclamation"></i>`;
        default:
          return html`<i class="fa-solid fa-circle-info"></i>`;
      }
    };

    const textareaId = 'playground-textarea';

    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 500px;">
        <div class="sb-ui-textarea-container">
          ${args.label
            ? html` <label class="${labelClasses}" for="${textareaId}"> ${args.label} </label> `
            : ''}
          <textarea
            id="${textareaId}"
            class="${textareaClasses}"
            placeholder="${args.placeholder || ''}"
            ?required="${args.required}"
            ?disabled="${args.disabled}"
            maxlength="${args.maxLength || ''}"
          >
${args.value || ''}</textarea
          >
          ${args.withCounter
            ? html`
                <div class="textarea-footer">
                  ${args.helperText
                    ? html`
                        <span class="${helperClasses}">
                          ${getHelperIcon(args.state)}
                          ${args.helperText}
                        </span>
                      `
                    : ''}
                  <span class="sb-ui-textarea-counter">0 / ${args.maxLength || 200}</span>
                </div>
              `
            : args.helperText
              ? html`
                  <span class="${helperClasses}">
                    ${getHelperIcon(args.state)}
                    ${args.helperText}
                  </span>
                `
              : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz Completa de Combinaciones
 *
 * Matriz completa del textarea mostrando todas las combinaciones de:
 * - **4 Estados**: Normal (Default), Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **3 Variantes Interactivas**: Default, Hover, Disabled
 *
 * **Total: 36 combinaciones** (4 × 3 × 3)
 */
export const Estados: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #007acc);
        color: white;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.default {
        background: #e3f2fd;
        color: #1565c0;
      }
      .state-label.hover {
        background: #f3e5f5;
        color: #6a1b9a;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      .textarea-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: NORMAL STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">📝 Estado NORMAL - TextArea</h2>
        <p class="matrix-subtitle">
          Estado por defecto del textarea sin validación específica. Muestra el borde gris por
          defecto.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small"
                    placeholder="Placeholder"
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea" placeholder="Placeholder"></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large"
                    placeholder="Placeholder"
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small"
                    placeholder="Placeholder"
                    disabled
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea" placeholder="Placeholder" disabled></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large"
                    placeholder="Placeholder"
                    disabled
                  ></textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: SUCCESS STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">✅ Estado SUCCESS - TextArea</h2>
        <p class="matrix-subtitle">
          Estado de validación exitosa. Muestra borde verde y helper text con icono de check.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--success">
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--success">Valid text</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--success">
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--success">
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--success">Valid text</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--success">
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--success"
                    disabled
                  >
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--success" disabled>
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--success"
                    disabled
                  >
Valid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: ERROR STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">❌ Estado ERROR - TextArea</h2>
        <p class="matrix-subtitle">
          Estado de validación fallida. Muestra borde rojo y helper text con icono de error.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--error">
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--error">Invalid text</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--error">
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--error">
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--error">Invalid text</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--error">
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--error"
                    disabled
                  >
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--error" disabled>
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--error"
                    disabled
                  >
Invalid text</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 4: WARNING STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">⚠️ Estado WARNING - TextArea</h2>
        <p class="matrix-subtitle">
          Estado de advertencia. Muestra borde amarillo y helper text con icono de alerta.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--warning">
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--warning">Check this</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--warning">
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--warning">
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--warning">Check this</textarea>
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--warning">
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--warning"
                    disabled
                  >
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea class="sb-ui-textarea sb-ui-textarea--warning" disabled>
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-textarea-container">
                  <label class="sb-ui-textarea-label">Label txt</label>
                  <textarea
                    class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--warning"
                    disabled
                  >
Check this</textarea
                  >
                  <span class="sb-ui-textarea-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

/**
 * ## Contador de Caracteres - Matriz
 *
 * Muestra textareas con contador de caracteres en diferentes estados.
 */
export const ContadorDeCaracteres: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .counter-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .counter-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .counter-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .counter-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .textarea-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
      }
    </style>

    <div class="counter-container">
      <div class="counter-grid">
        <!-- Con Contador Normal -->
        <div class="counter-demo">
          <h3>Contador Normal (500 max)</h3>
          <div class="sb-ui-textarea-container">
            <label class="sb-ui-textarea-label">Label txt</label>
            <textarea
              class="sb-ui-textarea sb-ui-textarea--with-counter"
              maxlength="500"
              placeholder="Escribe aquí..."
            ></textarea>
            <div class="textarea-footer">
              <span class="sb-ui-textarea-helper">
                <i class="fa-solid fa-circle-info"></i>
                Máximo 500 caracteres
              </span>
              <span class="sb-ui-textarea-counter">0 / 500</span>
            </div>
          </div>
        </div>

        <!-- Contador Small -->
        <div class="counter-demo">
          <h3>Contador Small (200 max)</h3>
          <div class="sb-ui-textarea-container">
            <label class="sb-ui-textarea-label">Label txt</label>
            <textarea
              class="sb-ui-textarea sb-ui-textarea--small sb-ui-textarea--with-counter"
              maxlength="200"
              placeholder="Escribe aquí..."
            ></textarea>
            <div class="textarea-footer">
              <span class="sb-ui-textarea-helper">
                <i class="fa-solid fa-circle-info"></i>
                Máximo 200 caracteres
              </span>
              <span class="sb-ui-textarea-counter">0 / 200</span>
            </div>
          </div>
        </div>

        <!-- Contador Large -->
        <div class="counter-demo">
          <h3>Contador Large (1000 max)</h3>
          <div class="sb-ui-textarea-container">
            <label class="sb-ui-textarea-label">Label txt</label>
            <textarea
              class="sb-ui-textarea sb-ui-textarea--large sb-ui-textarea--with-counter"
              maxlength="1000"
              placeholder="Escribe aquí..."
            ></textarea>
            <div class="textarea-footer">
              <span class="sb-ui-textarea-helper">
                <i class="fa-solid fa-circle-info"></i>
                Máximo 1000 caracteres
              </span>
              <span class="sb-ui-textarea-counter">0 / 1000</span>
            </div>
          </div>
        </div>

        <!-- Con Warning (cerca del límite) -->
        <div class="counter-demo">
          <h3>Con Advertencia (80% usado)</h3>
          <div class="sb-ui-textarea-container">
            <label class="sb-ui-textarea-label">Label txt</label>
            <textarea
              class="sb-ui-textarea sb-ui-textarea--with-counter"
              maxlength="100"
              placeholder="Escribe aquí..."
            >
Este texto ya tiene 81 caracteres y está cerca del límite, por lo que aparece advertencia</textarea
            >
            <div class="textarea-footer">
              <span class="sb-ui-textarea-helper">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Cerca del límite
              </span>
              <span class="sb-ui-textarea-counter sb-ui-textarea-counter--warning">81 / 100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
