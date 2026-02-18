import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Toggle Component
 *
 * Componente de toggle/switch versátil del Seguros Bolivar UI Design System con diferentes estilos, animaciones y estados.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Toggle normal (default) | `.sb-ui-toggle` | `<label class="sb-ui-toggle"><input class="sb-ui-toggle-input" /><span class="sb-ui-toggle-slider"></span></label>` |
 * | Toggle con error | `.sb-ui-toggle--error` | `<label class="sb-ui-toggle sb-ui-toggle--error">...</label>` |
 * | Toggle exitoso | `.sb-ui-toggle--success` | `<label class="sb-ui-toggle sb-ui-toggle--success">...</label>` |
 * | Toggle con advertencia | `.sb-ui-toggle--warning` | `<label class="sb-ui-toggle sb-ui-toggle--warning">...</label>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-toggle--small` | `<label class="sb-ui-toggle sb-ui-toggle--small">...</label>` |
 * | Mediano (default) | `.sb-ui-toggle--medium` o sin clase | `<label class="sb-ui-toggle">...</label>` |
 * | Grande | `.sb-ui-toggle--large` | `<label class="sb-ui-toggle sb-ui-toggle--large">...</label>` |
 * | **Estilos** | | |
 * | Switch (default) | Sin clase adicional | `<label class="sb-ui-toggle">...</label>` |
 * | Botón | `.sb-ui-toggle--button` | `<label class="sb-ui-toggle sb-ui-toggle--button">...</label>` |
 * | Checkbox | `.sb-ui-toggle--checkbox` | `<label class="sb-ui-toggle sb-ui-toggle--checkbox">...</label>` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-toggle--rounded` | `<label class="sb-ui-toggle sb-ui-toggle--rounded">...</label>` |
 * | Minimal | `.sb-ui-toggle--minimal` | `<label class="sb-ui-toggle sb-ui-toggle--minimal">...</label>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estructura HTML**: Usa `<label class="sb-ui-toggle">` conteniendo `<input class="sb-ui-toggle-input">` y `<span class="sb-ui-toggle-slider">`
 * - **Label de texto**: Usa `<span class="sb-ui-toggle-label">` dentro del label principal
 * - **Input oculto**: El input real está oculto visualmente pero accesible para lectores de pantalla
 * - **Estilo por defecto**: SWITCH - botón deslizante circular
 * - **Interactividad**: Funciona con clicks en cualquier parte del label
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div class="sb-ui-toggle-container">
 *   <label class="sb-ui-toggle sb-ui-toggle--large sb-ui-toggle--success">
 *     <input type="checkbox" class="sb-ui-toggle-input" checked />
 *     <span class="sb-ui-toggle-slider"></span>
 *     <span class="sb-ui-toggle-label">Activar notificaciones</span>
 *   </label>
 *   <div class="sb-ui-toggle-helper">Descripción del toggle</div>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de toggle/switch versátil con diferentes estilos (switch, button, checkbox), animaciones y estados de validación.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    style: {
      control: 'select',
      options: ['switch', 'button', 'checkbox'],
      description: 'Estilo visual del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'switch' },
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
      description: 'Estado marcado/desmarcado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
      description: 'Toggle deshabilitado',
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
    minimal: {
      control: 'boolean',
      description: 'Estilo minimal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    animation: {
      control: 'select',
      options: ['none', 'bounce', 'pulse'],
      description: 'Tipo de animación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del toggle usando los controles interactivos
 * en el panel inferior. Puedes ajustar estilo, estado, tamaño, animaciones y más.
 */
export const Playground: Story = {
  args: {
    state: 'normal',
    size: 'medium',
    style: 'switch',
    label: 'Activar notificaciones',
    checked: false,
    required: false,
    disabled: false,
    helperText: 'Recibe notificaciones cuando alguien te mencione',
    rounded: false,
    minimal: false,
    animation: 'none',
  },
  render: (args) => {
    const toggleClasses = [
      'sb-ui-toggle',
      args.state !== 'normal' ? `sb-ui-toggle--${args.state}` : '',
      args.size !== 'medium' ? `sb-ui-toggle--${args.size}` : '',
      args.style !== 'switch' ? `sb-ui-toggle--${args.style}` : '',
      args.rounded ? 'sb-ui-toggle--rounded' : '',
      args.minimal ? 'sb-ui-toggle--minimal' : '',
      args.animation !== 'none' ? `sb-ui-toggle--${args.animation}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'sb-ui-toggle-helper',
      args.state !== 'normal' ? `sb-ui-toggle-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div style="max-width: 400px;">
        <div class="sb-ui-toggle-container">
          <label class="${toggleClasses}">
            <input
              type="checkbox"
              class="sb-ui-toggle-input"
              ?checked="${args.checked}"
              ?required="${args.required}"
              ?disabled="${args.disabled}"
            />
            ${args.style === 'button'
              ? html` <span class="sb-ui-toggle-slider"></span> `
              : html`
                  <span class="sb-ui-toggle-slider"></span>
                  ${args.label && args.style !== 'button'
                    ? html` <span class="sb-ui-toggle-label">${args.label}</span> `
                    : ''}
                `}
          </label>

          ${args.helperText ? html` <div class="${helperClasses}">${args.helperText}</div> ` : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz de Combinaciones
 *
 * Matriz del toggle mostrando combinaciones de:
 * - **4 Estados**: Normal, Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **3 Estilos**: Switch, Button, Checkbox
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .toggle-matrix {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .toggle-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .toggle-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .toggle-demo > div {
        margin-bottom: 1rem;
      }

      .toggle-demo > div:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="toggle-matrix">
      <!-- Estados Básicos - OFF -->
      <div class="toggle-demo">
        <h3>Estados Básicos (OFF)</h3>
        <div>
          <label class="sb-ui-toggle">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Normal OFF</span>
          </label>
          <div class="sb-ui-toggle-helper">Estado normal desactivado</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--error">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Error OFF</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--error">Campo con error desactivado</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--success">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Success OFF</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--success">Campo válido desactivado</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--warning">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Warning OFF</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--warning">Advertencia desactivada</div>
        </div>
      </div>

      <!-- Estados Básicos - ON -->
      <div class="toggle-demo">
        <h3>Estados Básicos (ON)</h3>
        <div>
          <label class="sb-ui-toggle">
            <input type="checkbox" class="sb-ui-toggle-input" checked />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Normal ON</span>
          </label>
          <div class="sb-ui-toggle-helper">Estado normal activado (verde)</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--error">
            <input type="checkbox" class="sb-ui-toggle-input" checked />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Error ON</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--error">Campo con error activado (rojo)</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--success">
            <input type="checkbox" class="sb-ui-toggle-input" checked />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Success ON</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--success">Campo válido activado (verde success)</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--warning">
            <input type="checkbox" class="sb-ui-toggle-input" checked />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Warning ON</span>
          </label>
          <div class="sb-ui-toggle-helper sb-ui-toggle-helper--warning">Advertencia activada (amarillo)</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="toggle-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--small">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Small</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--medium">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Medium</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--large">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Large</span>
          </label>
        </div>
      </div>

      <!-- Estilos -->
      <div class="toggle-demo">
        <h3>Estilos</h3>
        <div>
          <label class="sb-ui-toggle">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Switch (default)</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--button">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
          </label>
          <span style="margin-left: 1rem; font-size: 0.875rem; color: #666;">Button style</span>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--checkbox">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Checkbox style</span>
          </label>
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="toggle-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="sb-ui-toggle">
            <input type="checkbox" class="sb-ui-toggle-input" required />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Requerido *</span>
          </label>
          <div class="sb-ui-toggle-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="sb-ui-toggle">
            <input type="checkbox" class="sb-ui-toggle-input" disabled />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Deshabilitado</span>
          </label>
          <div class="sb-ui-toggle-helper">Este toggle está deshabilitado</div>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--rounded">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Rounded</span>
          </label>
        </div>
      </div>

      <!-- Modificadores Visuales -->
      <div class="toggle-demo">
        <h3>Modificadores</h3>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--minimal">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Minimal</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--filled">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Filled</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--outlined">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Outlined</span>
          </label>
        </div>
      </div>

      <!-- Animaciones -->
      <div class="toggle-demo">
        <h3>Animaciones</h3>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--bounce">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Bounce</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--pulse">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Pulse</span>
          </label>
        </div>
      </div>

      <!-- Grupos -->
      <div class="toggle-demo">
        <h3>Grupos de Toggles</h3>
        <div>
          <div class="sb-ui-toggle-group sb-ui-toggle-group--vertical">
            <label class="sb-ui-toggle">
              <input type="checkbox" class="sb-ui-toggle-input" />
              <span class="sb-ui-toggle-slider"></span>
              <span class="sb-ui-toggle-label">Notificaciones push</span>
            </label>
            <label class="sb-ui-toggle">
              <input type="checkbox" class="sb-ui-toggle-input" />
              <span class="sb-ui-toggle-slider"></span>
              <span class="sb-ui-toggle-label">Notificaciones email</span>
            </label>
            <label class="sb-ui-toggle">
              <input type="checkbox" class="sb-ui-toggle-input" />
              <span class="sb-ui-toggle-slider"></span>
              <span class="sb-ui-toggle-label">Notificaciones SMS</span>
            </label>
          </div>
          <div class="sb-ui-toggle-helper">Toggles agrupados</div>
        </div>
      </div>

      <!-- Tamaños Especiales -->
      <div class="toggle-demo">
        <h3>Tamaños Especiales</h3>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--compact">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Compact</span>
          </label>
        </div>
        <div>
          <label class="sb-ui-toggle sb-ui-toggle--prominent">
            <input type="checkbox" class="sb-ui-toggle-input" />
            <span class="sb-ui-toggle-slider"></span>
            <span class="sb-ui-toggle-label">Prominent</span>
          </label>
        </div>
      </div>
    </div>
  `,
};
