import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Datepicker Component
 *
 * <div style="display: inline-flex; gap: 0.5rem; margin-bottom: 1rem;">
 *   <span style="background: #FFEBEE; color: #C62828; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">⚙️ WEB COMPONENT</span>
 *   <span style="background: #FFF3E0; color: #F57C00; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">✅ Requiere JS</span>
 *   <span style="background: #E8F5E9; color: #388E3C; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">📦 Custom Element</span>
 * </div>
 *
 * Selector de fechas interactivo con calendario desplegable. Este es un **Web Component**,
 * por lo que **requiere importación de JavaScript** además del CSS.
 *
 * ## 🚀 Instalación Completa
 *
 * ```html
 * <!-- 1. Incluye CSS (igual que componentes CSS puros): -->
 * <link rel="stylesheet" href="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-seguros-bolivar-light.min.css">
 *
 * <!-- 2. Incluye JavaScript (REQUERIDO para Web Components): -->
 * <script type="module" src="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"></script>
 *
 * <!-- 3. Usa el custom element: -->
 * <sb-ui-datepicker
 *   label="Selecciona una fecha"
 *   value="2024-01-15"
 *   min-date="2024-01-01"
 *   max-date="2024-12-31"
 * ></sb-ui-datepicker>
 * ```
 *
 * ## 📋 Atributos Disponibles
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `label` | string | - | Etiqueta del campo |
 * | `value` | string | - | Fecha seleccionada (formato: YYYY-MM-DD) |
 * | `variant` | 'single' \| 'range' \| 'multiple' | 'single' | Tipo de selección de fecha |
 * | `placeholder` | string | 'DD/MM/YYYY' | Texto placeholder |
 * | `min-date` | string | - | Fecha mínima permitida |
 * | `max-date` | string | - | Fecha máxima permitida |
 * | `disabled-dates` | string | - | Fechas deshabilitadas (separadas por coma) |
 * | `size` | 'small' \| 'medium' \| 'large' | 'medium' | Tamaño del componente |
 * | `disabled` | boolean | false | Deshabilitar el datepicker |
 * | `required` | boolean | false | Campo requerido |
 *
 * ## 💻 Uso con JavaScript
 *
 * ### Fecha Simple
 * ```javascript
 * const datepicker = document.querySelector('sb-ui-datepicker');
 *
 * // Establecer fecha
 * datepicker.setAttribute('value', '2024-12-25');
 *
 * // Escuchar cambios
 * datepicker.addEventListener('change', (e) => {
 *   console.log('Fecha seleccionada:', e.detail.value);
 *   // Output: "2024-12-25"
 * });
 * ```
 *
 * ### Rango de Fechas
 * ```javascript
 * const rangePicker = document.querySelector('sb-ui-datepicker[variant="range"]');
 *
 * // Establecer rango
 * rangePicker.setAttribute('value', '2024-01-15,2024-01-20');
 *
 * // Escuchar cambios
 * rangePicker.addEventListener('change', (e) => {
 *   const [inicio, fin] = e.detail.value.split(',');
 *   console.log('Fecha inicio:', inicio); // "2024-01-15"
 *   console.log('Fecha fin:', fin);       // "2024-01-20"
 * });
 * ```
 *
 * ### Fechas Deshabilitadas
 * ```javascript
 * const hoy = new Date().toISOString().split('T')[0];
 * const manana = new Date(Date.now() + 86400000).toISOString().split('T')[0];
 * datepicker.setAttribute('disabled-dates', `${hoy},${manana}`);
 * ```
 *
 * ## 🎯 Casos de Uso
 *
 * ### Fecha Simple (`variant="single"`)
 * - ✅ Fecha de nacimiento
 * - ✅ Fecha de entrega
 * - ✅ Filtros de búsqueda
 *
 * ### Rango de Fechas (`variant="range"`)
 * - ✅ Período de vacaciones
 * - ✅ Rango de reporte
 * - ✅ Fecha inicio/fin de proyecto
 * - ✅ Período de estadías en hotel
 *
 * ### Fechas Múltiples (`variant="multiple"`)
 * - ✅ Días de trabajo
 * - ✅ Fechas de eventos
 * - ✅ Horarios disponibles
 *
 * ## ⚠️ Importante
 *
 * - Este componente **REQUIERE** la importación de JavaScript
 * - No funcionará solo con las clases CSS
 * - Es un `<sb-ui-datepicker>` custom element, no un `<input type="date">`
 */
const meta: Meta = {
  title: 'Molecules/Datepicker',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Datepicker interactivo con calendario. Este es un Web Component que requiere JavaScript.',
      },
      story: {
        inline: false, // Mostrar en iframe separado para evitar problemas de z-index
        iframeHeight: '800px', // Altura del iframe
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta del campo',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Fecha seleccionada (YYYY-MM-DD)',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del datepicker',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el datepicker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Datepicker básico con todas las opciones configurables
 */
export const Playground: Story = {
  args: {
    label: 'Selecciona una fecha',
    value: '2024-01-15',
    size: 'medium',
    disabled: false,
  },
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: (args) => html`
    <div style="padding: 3rem; min-height: 600px;">
      <sb-ui-datepicker
        label="${args.label}"
        value="${args.value}"
        size="${args.size}"
        ?disabled="${args.disabled}"
      ></sb-ui-datepicker>
      
      <div style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;">
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real.
        Los cambios se aplican automáticamente al datepicker.
      </div>
    </div>
  `,
};

/**
 * Datepicker con fecha mínima y máxima
 */
export const WithMinMax: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: () => {
    const hoy = new Date().toISOString().split('T')[0];
    const maxDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];

    return html`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Rango Limitado</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Solo puedes seleccionar desde hoy hasta 30 días en el futuro
        </p>
        <sb-ui-datepicker
          label="Fecha de entrega"
          min-date="${hoy}"
          max-date="${maxDate}"
        ></sb-ui-datepicker>
      </div>
    `;
  },
};

/**
 * Datepicker con fechas deshabilitadas
 */
export const WithDisabledDates: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: () => {
    const hoy = new Date().toISOString().split('T')[0];
    const manana = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    return html`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Fechas Deshabilitadas</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Hoy y mañana están deshabilitados
        </p>
        <sb-ui-datepicker
          label="Selecciona una fecha"
          disabled-dates="${hoy},${manana}"
        ></sb-ui-datepicker>
      </div>
    `;
  },
};

/**
 * Datepicker de rango de fechas
 */
export const DateRange: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: () => html`
    <div style="padding: 3rem; min-height: 600px;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Selección de Rango de Fechas</h3>
      <p style="margin-bottom: 1.5rem; color: #666; font-size: 0.875rem;">
        Selecciona una fecha de inicio y una de fin para definir un período
      </p>
      
      <sb-ui-datepicker
        variant="range"
        label="Período de viaje"
        placeholder="DD/MM/YYYY - DD/MM/YYYY"
      ></sb-ui-datepicker>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <p style="margin: 0 0 0.5rem 0;"><strong>💡 Cómo funciona:</strong></p>
        <ol style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
          <li>Haz clic en el campo o icono de calendario</li>
          <li>Selecciona la <strong>fecha de inicio</strong></li>
          <li>Selecciona la <strong>fecha de fin</strong></li>
          <li>Todas las fechas entre ambas se resaltan</li>
        </ol>
      </div>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>⚙️ Uso:</strong> Agrega el atributo <code style="background: #FFF; padding: 0.125rem 0.25rem; border-radius: 2px;">variant="range"</code> al datepicker:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"
        ><code>&lt;sb-ui-datepicker
  variant="range"
  label="Período"
  placeholder="DD/MM/YYYY - DD/MM/YYYY"
&gt;&lt;/sb-ui-datepicker&gt;</code></pre>
      </div>
    </div>
  `,
};

/**
 * Comparación de tamaños
 */
export const Sizes: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '1000px', // Más altura para 3 datepickers
      },
    },
  },
  render: () => html`
    <div style="padding: 3rem; min-height: 800px; display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Small</h4>
        <sb-ui-datepicker label="Fecha (Small)" size="small"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Medium (Default)</h4>
        <sb-ui-datepicker label="Fecha (Medium)" size="medium"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Large</h4>
        <sb-ui-datepicker label="Fecha (Large)" size="large"></sb-ui-datepicker>
      </div>
    </div>
  `,
};

/**
 * Ejemplo de implementación completa
 */
export const CompleteExample: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '900px',
      },
    },
  },
  render: () => html`
    <div style="padding: 3rem; min-height: 700px; max-width: 800px; margin: 0 auto;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Formulario de Reserva</h3>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <sb-ui-datepicker
          label="Fecha de inicio"
          value="2024-01-15"
        ></sb-ui-datepicker>

        <sb-ui-datepicker
          label="Fecha de fin"
          value="2024-01-20"
        ></sb-ui-datepicker>

        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
          onclick="alert('Formulario enviado!')"
        >
          Confirmar Reserva
        </button>
      </div>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>💡 Nota:</strong> Este componente requiere JavaScript. Asegúrate de incluir el
          script:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto;"
        ><code>&lt;script type="module" src="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  `,
};

