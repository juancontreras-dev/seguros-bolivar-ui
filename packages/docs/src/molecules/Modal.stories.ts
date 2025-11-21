import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Modal Component
 *
 * <div style="display: inline-flex; gap: 0.5rem; margin-bottom: 1rem;">
 *   <span style="background: #FFEBEE; color: #C62828; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">⚙️ WEB COMPONENT</span>
 *   <span style="background: #FFF3E0; color: #F57C00; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">✅ Requiere JS</span>
 *   <span style="background: #E8F5E9; color: #388E3C; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">📦 Custom Element</span>
 * </div>
 *
 * Ventana modal con overlay para mostrar contenido flotante. Este es un **Web Component**,
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
 * <sb-ui-modal id="mi-modal" title="Título del Modal">
 *   <div slot="body">
 *     <p>Contenido del modal aquí</p>
 *   </div>
 *   <div slot="footer">
 *     <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Aceptar</button>
 *   </div>
 * </sb-ui-modal>
 *
 * <!-- Botón para abrir: -->
 * <button onclick="document.getElementById('mi-modal').setAttribute('open', 'true')">
 *   Abrir Modal
 * </button>
 * ```
 *
 * ## 📋 Atributos Disponibles
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `title` | string | - | Título del modal |
 * | `open` | boolean | false | Controla si el modal está visible |
 * | `closable` | boolean | true | Si muestra el botón X de cerrar |
 * | `size` | 'small' \| 'medium' \| 'large' | 'medium' | Tamaño del modal |
 *
 * ## 📦 Slots Disponibles
 *
 * | Slot | Descripción |
 * |------|-------------|
 * | `body` | Contenido principal del modal |
 * | `footer` | Botones o acciones del modal |
 *
 * ## 💻 Uso con JavaScript
 *
 * ```javascript
 * // Obtener referencia al modal
 * const modal = document.getElementById('mi-modal');
 *
 * // Abrir modal
 * modal.setAttribute('open', 'true');
 *
 * // Cerrar modal
 * modal.removeAttribute('open');
 *
 * // Escuchar evento de cierre
 * modal.addEventListener('close', () => {
 *   console.log('Modal cerrado');
 * });
 *
 * // Cambiar título dinámicamente
 * modal.setAttribute('title', 'Nuevo Título');
 * ```
 *
 * ## 🎯 Casos de Uso
 *
 * - ✅ Confirmaciones de acciones importantes
 * - ✅ Formularios en ventana flotante
 * - ✅ Detalles de elementos
 * - ✅ Mensajes de éxito/error
 * - ✅ Avisos y notificaciones
 *
 * ## ⚠️ Importante
 *
 * - Este componente **REQUIERE** la importación de JavaScript
 * - No funcionará solo con las clases CSS
 * - Es un `<sb-ui-modal>` custom element
 * - Los cambios en los controles se aplican en tiempo real
 */
const meta: Meta = {
  title: 'Molecules/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Modal interactivo con overlay. Este es un Web Component que requiere JavaScript.',
      },
      story: {
        inline: false,
        iframeHeight: '700px',
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del modal',
      table: {
        type: { summary: 'string' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Controla si el modal está visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Si muestra el botón X de cerrar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del modal',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Modal básico con todas las opciones configurables
 */
export const Playground: Story = {
  args: {
    title: 'Título del Modal',
    open: true,
    closable: true,
    size: 'medium',
  },
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: (args) => html`
    <div style="padding: 2rem; min-height: 600px;">
      <sb-ui-modal
        id="modal-playground"
        title="${args.title}"
        ?open="${args.open}"
        ?closable="${args.closable}"
        size="${args.size}"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333; line-height: 1.6;">
            Este es el contenido del modal. Puedes cambiar el <strong>título</strong>,
            <strong>tamaño</strong>, y si es <strong>cerrable</strong> usando los controles de arriba.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Los cambios se aplican en tiempo real gracias a la reactividad del Web Component.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${() => {
              const modal = document.getElementById('modal-playground') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-playground') as any;
              if (modal) modal.removeAttribute('open');
              alert('¡Acción confirmada!');
            }}"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real. El
        modal se actualiza automáticamente.
      </div>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        style="margin-top: 1rem;"
        @click="${() => {
          const modal = document.getElementById('modal-playground') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Abrir Modal
      </button>
    </div>
  `,
};

/**
 * Modal de confirmación con contenido simple
 */
export const Confirmation: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: () => html`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-confirmation') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirmation" title="¿Estás seguro?" size="small" open="false">
        <div slot="body">
          <p style="margin: 0; color: #333; line-height: 1.6;">
            Esta acción no se puede deshacer. ¿Deseas continuar?
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${() => {
              const modal = document.getElementById('modal-confirmation') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-confirmation') as any;
              if (modal) modal.removeAttribute('open');
              alert('Cuenta eliminada');
            }}"
          >
            Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * Modal con formulario
 */
export const WithForm: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '800px',
      },
    },
  },
  render: () => html`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-form') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Nuevo Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Crear Nuevo Usuario" size="medium" open="false">
        <div slot="body">
          <form style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Nombre
              </label>
              <input
                type="text"
                class="sb-ui-input"
                placeholder="Ingresa el nombre"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Email
              </label>
              <input
                type="email"
                class="sb-ui-input"
                placeholder="usuario@ejemplo.com"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Rol
              </label>
              <select class="sb-ui-select" style="width: 100%;">
                <option>Usuario</option>
                <option>Administrador</option>
                <option>Editor</option>
              </select>
            </div>
          </form>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${() => {
              const modal = document.getElementById('modal-form') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-form') as any;
              if (modal) modal.removeAttribute('open');
              alert('Usuario creado exitosamente');
            }}"
          >
            Crear Usuario
          </button>
        </div>
      </sb-ui-modal>
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
        iframeHeight: '800px',
      },
    },
  },
  render: () => html`
    <div style="padding: 2rem; min-height: 600px; display: flex; gap: 1rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${() => {
          const modal = document.getElementById('modal-small') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Small
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${() => {
          const modal = document.getElementById('modal-medium') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Medium
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${() => {
          const modal = document.getElementById('modal-large') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Large
      </button>

      <!-- Modal Small -->
      <sb-ui-modal id="modal-small" title="Modal Small" size="small" open="false">
        <div slot="body">
          <p style="margin: 0;">Este es un modal pequeño, ideal para confirmaciones rápidas.</p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-small') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Medium -->
      <sb-ui-modal id="modal-medium" title="Modal Medium (Default)" size="medium" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal mediano, el tamaño por defecto. Ideal para formularios y contenido
            general.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-medium') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Large -->
      <sb-ui-modal id="modal-large" title="Modal Large" size="large" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal grande, perfecto para contenido extenso, tablas, o múltiples secciones.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-large') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * Modal sin botón de cerrar
 */
export const NonClosable: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px',
      },
    },
  },
  render: () => html`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-non-closable') as any;
          if (modal) modal.setAttribute('open', 'true');
        }}"
      >
        Abrir Modal No Cerrable
      </button>

      <sb-ui-modal
        id="modal-non-closable"
        title="Acción Requerida"
        size="medium"
        closable="false"
        open="false"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333;">
            Este modal no se puede cerrar haciendo clic fuera o en el botón X. Debes usar los
            botones del footer.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Ideal para acciones críticas que requieren una decisión explícita.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${() => {
              const modal = document.getElementById('modal-non-closable') as any;
              if (modal) modal.removeAttribute('open');
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-non-closable') as any;
              if (modal) modal.removeAttribute('open');
              alert('Acción confirmada');
            }}"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};
