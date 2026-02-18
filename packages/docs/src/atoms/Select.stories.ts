import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Select Component
 *
 * Componente de select versátil del Seguros Bolivar UI Design System con diferentes estados, tamaños y opciones de iconos.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Select normal (default) | `.sb-ui-select` | `<select class="sb-ui-select">...</select>` |
 * | Select con error | `.sb-ui-select--error` | `<select class="sb-ui-select sb-ui-select--error">...</select>` |
 * | Select exitoso | `.sb-ui-select--success` | `<select class="sb-ui-select sb-ui-select--success">...</select>` |
 * | Select con advertencia | `.sb-ui-select--warning` | `<select class="sb-ui-select sb-ui-select--warning">...</select>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-select--small` | `<select class="sb-ui-select sb-ui-select--small">...</select>` |
 * | Mediano (default) | `.sb-ui-select--medium` o sin clase | `<select class="sb-ui-select">...</select>` |
 * | Grande | `.sb-ui-select--large` | `<select class="sb-ui-select sb-ui-select--large">...</select>` |
 * | **Con Iconos** | | |
 * | Icono izquierdo | `.sb-ui-select--with-icon-left` | En un `.sb-ui-select-container` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-select--rounded` | `<select class="sb-ui-select sb-ui-select--rounded">...</select>` |
 * | Inline (auto width) | `.sb-ui-select--inline` | `<select class="sb-ui-select sb-ui-select--inline">...</select>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: NORMAL - sin validación especial
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Label**: Usa `sb-ui-select-label` y `sb-ui-select-label--required` para requeridos
 * - **Helper text**: Usa `sb-ui-select-helper` con estados `--error`, `--success`, `--warning`
 * - **Múltiple**: Soporte nativo con atributo `multiple`
 * - **Grupos**: Usa `<optgroup>` para agrupar opciones
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de select versátil con soporte para selección simple/múltiple, grupos de opciones y diferentes estados de validación.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del select',
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
      description: 'Select deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Selección múltiple',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
    hasIcon: {
      control: 'boolean',
      description: 'Incluir icono',
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
 * Experimenta con todas las combinaciones del select usando los controles interactivos
 * en el panel inferior. Puedes ajustar estado, tamaño, opciones y más.
 */
export const Playground: Story = {
  args: {
    state: 'normal',
    size: 'medium',
    label: 'Selecciona una opción',
    required: false,
    disabled: false,
    multiple: false,
    helperText: 'Elige la opción que mejor se adapte a tus necesidades',
    rounded: false,
    hasIcon: false,
  },
  render: (args) => {
    const selectClasses = [
      'sb-ui-select',
      args.state !== 'normal' ? `sb-ui-select--${args.state}` : '',
      args.size !== 'medium' ? `sb-ui-select--${args.size}` : '',
      args.rounded ? 'sb-ui-select--rounded' : '',
      args.hasIcon ? 'sb-ui-select--with-icon-left' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = ['sb-ui-select-label', args.required ? 'sb-ui-select-label--required' : '']
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'sb-ui-select-helper',
      args.state !== 'normal' ? `sb-ui-select-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const selectId = 'playground-select';

    return html`
      <div style="max-width: 400px;">
        <div>
          ${args.label
            ? html` <label class="${labelClasses}" for="${selectId}"> ${args.label} </label> `
            : ''}
          ${args.hasIcon
            ? html`
                <div class="sb-ui-select-container">
                  <select
                    id="${selectId}"
                    class="${selectClasses}"
                    ?required="${args.required}"
                    ?disabled="${args.disabled}"
                    ?multiple="${args.multiple}"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="tech">Tecnología</option>
                    <option value="design">Diseño</option>
                    <option value="business">Negocios</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Ventas</option>
                  </select>
                  <span class="sb-ui-select-icon sb-ui-select-icon--left">📂</span>
                </div>
              `
            : html`
                <select
                  id="${selectId}"
                  class="${selectClasses}"
                  ?required="${args.required}"
                  ?disabled="${args.disabled}"
                  ?multiple="${args.multiple}"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="tech">Tecnología</option>
                  <option value="design">Diseño</option>
                  <option value="business">Negocios</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Ventas</option>
                </select>
              `}
          ${args.helperText ? html` <div class="${helperClasses}">${args.helperText}</div> ` : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz Completa de Combinaciones
 *
 * Matriz completa del select mostrando todas las combinaciones de:
 * - **4 Estados**: Normal (Default), Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **3 Variantes Interactivas**: Default, Hover, Disabled
 *
 * **Total: 36 combinaciones** (4 × 3 × 3)
 */
export const Estados: Story = {
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
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: NORMAL STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">📝 Estado NORMAL - Select</h2>
        <p class="matrix-subtitle">
          Estado por defecto del select sin validación específica. Muestra el borde gris por defecto.
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small">
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select">
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large">
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select
                    class="sb-ui-select sb-ui-select--small"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select
                    class="sb-ui-select"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select
                    class="sb-ui-select sb-ui-select--large"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Helper text
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
        <h2 class="matrix-title">✅ Estado SUCCESS - Select</h2>
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--success">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--success" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--success" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--success" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción válida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
        <h2 class="matrix-title">❌ Estado ERROR - Select</h2>
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--error">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--error" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--error" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--error" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Opción inválida</option>
                  </select>
                  <span class="sb-ui-select-helper">
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
        <h2 class="matrix-title">⚠️ Estado WARNING - Select</h2>
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--warning">
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
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
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--small sb-ui-select--warning" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--warning" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-select-container">
                  <label class="sb-ui-select-label">Label</label>
                  <select class="sb-ui-select sb-ui-select--large sb-ui-select--warning" disabled>
                    <option value="">Selecciona una opción</option>
                    <option value="1" selected>Revisar opción</option>
                  </select>
                  <span class="sb-ui-select-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa esta selección
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
 * ## Características Especiales - Select
 *
 * Muestra características adicionales del select: múltiple, grupos, requerido, con iconos, etc.
 */
export const CaracteristicasEspeciales: Story = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .features-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .feature-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .feature-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }
    </style>

    <div class="features-container">
      <div class="features-grid">
        <!-- Select Requerido -->
        <div class="feature-demo">
          <h3>Requerido</h3>
          <div class="sb-ui-select-container">
            <label class="sb-ui-select-label sb-ui-select-label--required">Selección obligatoria</label>
            <select class="sb-ui-select" required>
              <option value="">Selecciona una opción</option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Campo obligatorio
            </span>
          </div>
        </div>

        <!-- Select Múltiple -->
        <div class="feature-demo">
          <h3>Múltiple</h3>
          <div class="sb-ui-select-container">
            <label class="sb-ui-select-label">Múltiples opciones</label>
            <select class="sb-ui-select" multiple size="4">
              <option value="1">Opción 1</option>
              <option value="2" selected>Opción 2</option>
              <option value="3">Opción 3</option>
              <option value="4" selected>Opción 4</option>
              <option value="5">Opción 5</option>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Mantén Ctrl/Cmd para múltiples
            </span>
          </div>
        </div>

        <!-- Select con Grupos -->
        <div class="feature-demo">
          <h3>Con Grupos</h3>
          <div class="sb-ui-select-container">
            <label class="sb-ui-select-label">Opciones agrupadas</label>
            <select class="sb-ui-select">
              <option value="">Selecciona una opción</option>
              <optgroup label="Tecnología">
                <option value="tech1">Frontend</option>
                <option value="tech2">Backend</option>
                <option value="tech3">DevOps</option>
              </optgroup>
              <optgroup label="Negocios">
                <option value="biz1">Ventas</option>
                <option value="biz2">Marketing</option>
                <option value="biz3">Finanzas</option>
              </optgroup>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Select con optgroup
            </span>
          </div>
        </div>

        <!-- Select con Iconos -->
        <div class="feature-demo">
          <h3>Con Iconos</h3>
          <div>
            <label class="sb-ui-select-label">Selecciona país</label>
            <select class="sb-ui-select">
              <option value="">Selecciona un país</option>
              <option value="co">🇨🇴 Colombia</option>
              <option value="mx">🇲🇽 México</option>
              <option value="ar">🇦🇷 Argentina</option>
              <option value="cl">🇨🇱 Chile</option>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Select con iconos de países
            </span>
          </div>
        </div>

        <!-- Select Rounded -->
        <div class="feature-demo">
          <h3>Bordes Redondeados</h3>
          <div class="sb-ui-select-container">
            <label class="sb-ui-select-label">Select con rounded</label>
            <select class="sb-ui-select sb-ui-select--rounded">
              <option value="">Selecciona una opción</option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Modifier --rounded
            </span>
          </div>
        </div>

        <!-- Select Inline -->
        <div class="feature-demo">
          <h3>Inline (Auto Width)</h3>
          <div class="sb-ui-select-container">
            <label class="sb-ui-select-label">Select inline</label>
            <select class="sb-ui-select sb-ui-select--inline">
              <option value="">Selecciona</option>
              <option value="1">Opción A</option>
              <option value="2">Opción B</option>
            </select>
            <span class="sb-ui-select-helper">
              <i class="fa-solid fa-circle-info"></i>
              Ancho automático
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
};
