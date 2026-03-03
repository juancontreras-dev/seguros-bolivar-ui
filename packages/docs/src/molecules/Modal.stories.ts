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
 * Ventana modal con 3 variantes de tamaño (Small, Medium, Large). Web Component con slots
 * personalizables, cierre por ESC o backdrop, animaciones y bloqueo de scroll.
 *
 * ## Instalación
 *
 * ```html
 * <!-- CSS -->
 * <link rel="stylesheet" href="sb-ui-seguros-bolivar-light.min.css">
 *
 * <!-- JavaScript (REQUERIDO) -->
 * <script type="module" src="sb-ui-components.min.js"></script>
 *
 * <!-- HTML -->
 * <sb-ui-modal id="mi-modal" title="Confirmar acción" size="small">
 *   <p>Contenido del modal.</p>
 *   <div slot="footer">
 *     <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
 *             onclick="document.getElementById('mi-modal').close()">
 *       Cancelar
 *     </button>
 *     <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
 *             onclick="document.getElementById('mi-modal').close()">
 *       Confirmar
 *     </button>
 *   </div>
 * </sb-ui-modal>
 *
 * <button onclick="document.getElementById('mi-modal').openModal()">
 *   Abrir Modal
 * </button>
 * ```
 *
 * ## Atributos
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `title` | string | — | Título del modal |
 * | `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del modal |
 * | `open` | boolean | `false` | Estado inicial abierto |
 * | `close-on-backdrop` | boolean | `true` | Cierra al hacer clic fuera |
 * | `show-close-button` | boolean | `true` | Muestra el botón X |
 *
 * ## Slots
 *
 * | Slot | Descripción |
 * |------|-------------|
 * | *(default)* | Contenido del body del modal |
 * | `footer` | Botones o acciones del modal |
 * | `header` | Header personalizado (reemplaza `title`) |
 *
 * ## Métodos y Eventos
 *
 * ```javascript
 * const modal = document.getElementById('mi-modal');
 *
 * modal.openModal();  // Abre el modal
 * modal.close();      // Cierra el modal
 *
 * modal.addEventListener('sb-ui-modal-open',  () => console.log('Abierto'));
 * modal.addEventListener('sb-ui-modal-close', () => console.log('Cerrado'));
 * ```
 *
 * ## Tamaños disponibles
 *
 * | Variante | max-inline-size | max-block-size | Atributo |
 * |----------|----------------|----------------|----------|
 * | Small | `min(464px, 90%)` | `45dvb` | `size="small"` |
 * | Medium | `min(716px, 90%)` | `82dvb` | `size="medium"` |
 * | Large | `min(928px, 90%)` | `82dvb` | `size="large"` |
 */
const meta: Meta = {
  title: 'Web Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Ventana modal con 3 variantes de tamaño (Small, Medium, Large). Web Component con slots personalizables, cierre por ESC o backdrop, animaciones y bloqueo de scroll.',
      },
      story: {
        inline: false,
        iframeHeight: '500px',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Small — Confirmación
// ---------------------------------------------------------------------------

/**
 * Modal pequeño ideal para confirmaciones o acciones simples. Ancho máximo ~464px.
 */
export const Small: Story = {
  name: 'Small — Confirmación',
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-small') as any)?.openModal()}"
      >
        <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
        Abrir Small
      </button>
    </div>

    <sb-ui-modal id="modal-small" title="Confirmar acción" size="small">
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Cupcake ipsum dolor sit amet apple pie. Dessert sesame snaps donut sesame snaps tart I love
        wafer I love.
      </p>
      <p style="font-weight: 600;">Esta acción no se puede deshacer.</p>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-small') as any)?.close()}"
        >
          Cancelar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-small') as any)?.close()}"
        >
          Confirmar
        </button>
      </div>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Small — Informativo (sin footer)
// ---------------------------------------------------------------------------

/**
 * Modal pequeño informativo sin footer. Se cierra únicamente con el botón X o la tecla ESC.
 */
export const SmallInfo: Story = {
  name: 'Small — Informativo',
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-small-info') as any)?.openModal()}"
      >
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        Abrir Info
      </button>
    </div>

    <sb-ui-modal id="modal-small-info" title="Información importante" size="small">
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Cupcake ipsum dolor sit amet apple pie. Dessert sesame snaps donut sesame snaps tart I love
        wafer I love. Pie oat cake gingerbread chocolate bar.
      </p>
      <p style="line-height: 1.6;">
        Sweet roll muffin cotton candy cake macaroon I love sesame snaps lemon drops.
      </p>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Medium — Formulario
// ---------------------------------------------------------------------------

/**
 * Modal mediano con formulario. Tamaño por defecto del componente. Ancho máximo ~716px.
 */
export const MediumForm: Story = {
  name: 'Medium — Formulario',
  parameters: {
    docs: { story: { inline: false, iframeHeight: '750px' } },
  },
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-medium-form') as any)?.openModal()}"
      >
        <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
        Abrir Formulario
      </button>
    </div>

    <sb-ui-modal id="modal-medium-form" title="Nuevo contacto" size="medium">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <label style="font-size: 0.875rem; font-weight: 600;">Nombre</label>
            <input
              type="text"
              placeholder="Juan"
              style="padding: 0.5rem 0.75rem; border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0); border-radius: 4px; font-size: 0.875rem; inline-size: 100%; box-sizing: border-box;"
            />
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <label style="font-size: 0.875rem; font-weight: 600;">Apellido</label>
            <input
              type="text"
              placeholder="Pérez"
              style="padding: 0.5rem 0.75rem; border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0); border-radius: 4px; font-size: 0.875rem; inline-size: 100%; box-sizing: border-box;"
            />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <label style="font-size: 0.875rem; font-weight: 600;">Correo electrónico</label>
          <input
            type="email"
            placeholder="juan@ejemplo.com"
            style="padding: 0.5rem 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 0.875rem; inline-size: 100%; box-sizing: border-box;"
          />
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <label style="font-size: 0.875rem; font-weight: 600;">Tipo de seguro</label>
          <select
            style="padding: 0.5rem 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 0.875rem; inline-size: 100%; box-sizing: border-box;"
          >
            <option>Seguro de Vida</option>
            <option>Seguro Vehicular</option>
            <option>Seguro de Hogar</option>
            <option>Seguro de Salud</option>
          </select>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <label style="font-size: 0.875rem; font-weight: 600;">Mensaje</label>
          <textarea
            rows="3"
            placeholder="Describe brevemente lo que necesitas..."
            style="padding: 0.5rem 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 0.875rem; inline-size: 100%; box-sizing: border-box; resize: vertical;"
          ></textarea>
        </div>
      </form>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-medium-form') as any)?.close()}"
        >
          Cancelar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-medium-form') as any)?.close()}"
        >
          Enviar solicitud
        </button>
      </div>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Medium — Detalles
// ---------------------------------------------------------------------------

/**
 * Modal mediano para mostrar detalles de un producto, con estadísticas y lista.
 */
export const MediumDetail: Story = {
  name: 'Medium — Detalles',
  parameters: {
    docs: { story: { inline: false, iframeHeight: '700px' } },
  },
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-medium-detail') as any)?.openModal()}"
      >
        <i class="fa-solid fa-eye" aria-hidden="true"></i>
        Ver Detalles
      </button>
    </div>

    <sb-ui-modal id="modal-medium-detail" title="Seguro de Vida Premium" size="medium">
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Cupcake ipsum dolor sit amet apple pie. Dessert sesame snaps donut sesame snaps tart I love
        wafer I love. Pie oat cake gingerbread chocolate bar apple pie tart danish.
      </p>
      <p style="line-height: 1.6; margin-block-end: 1rem;">
        Sweet roll muffin cotton candy cake macaroon I love sesame snaps lemon drops chocolate bar.
      </p>
      <div
        style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-block-end: 1rem;"
      >
        <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: var(--sb-ui-color-grayscale-base, #757575);">Cobertura</span>
          <p style="font-size: 1.125rem; font-weight: 700; margin-block-start: 0.25rem; color: var(--sb-ui-color-primary-base, #038450);">$500,000</p>
        </div>
        <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: var(--sb-ui-color-grayscale-base, #757575);">Prima anual</span>
          <p style="font-size: 1.125rem; font-weight: 700; margin-block-start: 0.25rem; color: var(--sb-ui-color-primary-base, #038450);">$50,000</p>
        </div>
      </div>
      <ul style="padding-inline-start: 1.25rem; line-height: 1.8;">
        <li>Cobertura de vida completa</li>
        <li>Asistencia médica 24/7</li>
        <li>Cobertura de accidentes personales</li>
        <li>Beneficiarios ilimitados</li>
      </ul>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-medium-detail') as any)?.close()}"
        >
          Cerrar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-medium-detail') as any)?.close()}"
        >
          Contratar ahora
        </button>
      </div>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Medium — Persistente
// ---------------------------------------------------------------------------

/**
 * Modal persistente: sin botón X y sin cierre al hacer clic en el backdrop.
 * El usuario debe elegir una acción explícita. Usa `close-on-backdrop="false"`
 * y `show-close-button="false"`.
 */
export const MediumPersistent: Story = {
  name: 'Medium — Persistente',
  parameters: {
    docs: { story: { inline: false, iframeHeight: '650px' } },
  },
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-persistent') as any)?.openModal()}"
      >
        <i class="fa-solid fa-lock" aria-hidden="true"></i>
        Modal Persistente
      </button>
    </div>

    <sb-ui-modal
      id="modal-persistent"
      title="Acción requerida"
      size="medium"
      close-on-backdrop="false"
      show-close-button="false"
    >
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Cupcake ipsum dolor sit amet apple pie. Dessert sesame snaps donut sesame snaps tart I love
        wafer I love.
      </p>
      <p style="line-height: 1.6;">
        Este modal no se cierra al hacer clic fuera ni tiene botón X. Debes usar los botones de
        acción.
      </p>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-persistent') as any)?.close()}"
        >
          Rechazar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-persistent') as any)?.close()}"
        >
          Aceptar
        </button>
      </div>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Large — Términos y Condiciones
// ---------------------------------------------------------------------------

/**
 * Modal grande con contenido extenso que activa scroll vertical. Ideal para
 * términos y condiciones o políticas de privacidad. Ancho máximo ~928px.
 */
export const LargeTerms: Story = {
  name: 'Large — Términos y Condiciones',
  parameters: {
    docs: { story: { inline: false, iframeHeight: '850px' } },
  },
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-large-terms') as any)?.openModal()}"
      >
        <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
        Abrir Grande
      </button>
    </div>

    <sb-ui-modal
      id="modal-large-terms"
      title="Términos y condiciones del servicio"
      size="large"
    >
      <h4 style="font-weight: 700; margin-block-end: 0.5rem;">1. Aceptación del servicio</h4>
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Cupcake ipsum dolor sit amet apple pie. Dessert sesame snaps donut sesame snaps tart I love
        wafer I love. Pie oat cake gingerbread chocolate bar apple pie tart danish. Sweet roll
        muffin cotton candy cake macaroon I love sesame snaps lemon drops chocolate bar.
      </p>
      <h4 style="font-weight: 700; margin-block-end: 0.5rem; margin-block-start: 1.25rem;">
        2. Modificaciones al acuerdo
      </h4>
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Oat cake souffle gingerbread candy dessert lollipop. I love danish dragee I love I love.
        Tootsie roll jelly-o tiramisu toffee jujubes pie. Sugar plum cookie jelly beans bear claw
        topping gummies oat cake chupa chups.
      </p>
      <h4 style="font-weight: 700; margin-block-end: 0.5rem; margin-block-start: 1.25rem;">
        3. Privacidad y datos personales
      </h4>
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Halvah cake candy canes pastry jelly beans. Chocolate bar jelly toffee ice cream
        cheesecake. Croissant tart muffin chupa chups macaroon. Candy canes brownie cookie souffle
        pudding marzipan fruitcake sesame snaps.
      </p>
      <h4 style="font-weight: 700; margin-block-end: 0.5rem; margin-block-start: 1.25rem;">
        4. Responsabilidades del usuario
      </h4>
      <p style="line-height: 1.6; margin-block-end: 0.75rem;">
        Jelly beans cake bonbon gummi bears chocolate cake carrot cake wafer. Marshmallow donut
        sugar plum jelly-o tiramisu caramels bear claw. Cookie sweet roll gummies brownie tart
        muffin.
      </p>
      <h4 style="font-weight: 700; margin-block-end: 0.5rem; margin-block-start: 1.25rem;">
        5. Limitación de responsabilidad
      </h4>
      <p style="line-height: 1.6;">
        Dragee liquorice brownie cake bonbon gummies. Candy canes marzipan biscuit ice cream.
        Chupa chups wafer cotton candy souffle chocolate bar lemon drops sweet roll cake.
      </p>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-large-terms') as any)?.close()}"
        >
          Rechazar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-large-terms') as any)?.close()}"
        >
          Aceptar términos
        </button>
      </div>
    </sb-ui-modal>
  `,
};

// ---------------------------------------------------------------------------
// Large — Panel de Datos
// ---------------------------------------------------------------------------

/**
 * Modal grande con tabla de datos. Ideal para reportes o listados de información
 * compleja que requieren más espacio horizontal.
 */
export const LargeData: Story = {
  name: 'Large — Panel de Datos',
  parameters: {
    docs: { story: { inline: false, iframeHeight: '800px' } },
  },
  render: () => html`
    <div style="padding: 2rem;">
      <button
        class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--icon-left"
        @click="${() => (document.getElementById('modal-large-data') as any)?.openModal()}"
      >
        <i class="fa-solid fa-table" aria-hidden="true"></i>
        Ver Datos
      </button>
    </div>

    <sb-ui-modal id="modal-large-data" title="Resumen de pólizas activas" size="large">
      <p style="line-height: 1.6; margin-block-end: 1rem;">
        A continuación se presenta un resumen detallado de sus pólizas vigentes.
      </p>
      <table
        style="inline-size: 100%; border-collapse: collapse; font-size: 0.875rem; margin-block-end: 1rem;"
      >
        <thead>
          <tr style="background: var(--sb-ui-color-primary-base, #038450); color: #fff;">
            <th style="padding: 0.5rem 0.75rem; text-align: start; font-weight: 600;">Póliza</th>
            <th style="padding: 0.5rem 0.75rem; text-align: start; font-weight: 600;">Tipo</th>
            <th style="padding: 0.5rem 0.75rem; text-align: end; font-weight: 600;">Prima</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; font-weight: 600;">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-block-end: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);">
            <td style="padding: 0.5rem 0.75rem;">VID-2024-001</td>
            <td style="padding: 0.5rem 0.75rem;">Vida Premium</td>
            <td style="padding: 0.5rem 0.75rem; text-align: end;">$50,000</td>
            <td style="padding: 0.5rem 0.75rem; text-align: center;">
              <span style="display:inline-block; padding: 0.1rem 0.5rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; background: var(--sb-ui-color-feedback-success-L100, #d4edda); color: var(--sb-ui-color-feedback-success-D200, #155724);">Activa</span>
            </td>
          </tr>
          <tr style="border-block-end: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);">
            <td style="padding: 0.5rem 0.75rem;">AUT-2024-015</td>
            <td style="padding: 0.5rem 0.75rem;">Vehicular</td>
            <td style="padding: 0.5rem 0.75rem; text-align: end;">$32,000</td>
            <td style="padding: 0.5rem 0.75rem; text-align: center;">
              <span style="display:inline-block; padding: 0.1rem 0.5rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; background: var(--sb-ui-color-feedback-success-L100, #d4edda); color: var(--sb-ui-color-feedback-success-D200, #155724);">Activa</span>
            </td>
          </tr>
          <tr style="border-block-end: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);">
            <td style="padding: 0.5rem 0.75rem;">HOG-2023-042</td>
            <td style="padding: 0.5rem 0.75rem;">Hogar</td>
            <td style="padding: 0.5rem 0.75rem; text-align: end;">$18,500</td>
            <td style="padding: 0.5rem 0.75rem; text-align: center;">
              <span style="display:inline-block; padding: 0.1rem 0.5rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; background: var(--sb-ui-color-feedback-warning-L100, #fff3cd); color: var(--sb-ui-color-feedback-warning-D200, #856404);">Renovar</span>
            </td>
          </tr>
          <tr style="border-block-end: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);">
            <td style="padding: 0.5rem 0.75rem;">SAL-2024-008</td>
            <td style="padding: 0.5rem 0.75rem;">Salud</td>
            <td style="padding: 0.5rem 0.75rem; text-align: end;">$45,000</td>
            <td style="padding: 0.5rem 0.75rem; text-align: center;">
              <span style="display:inline-block; padding: 0.1rem 0.5rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; background: var(--sb-ui-color-feedback-success-L100, #d4edda); color: var(--sb-ui-color-feedback-success-D200, #155724);">Activa</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style="font-size: 0.8125rem; color: var(--sb-ui-color-grayscale-base, #757575);">
        Sweet roll muffin cotton candy cake macaroon. Oat cake souffle gingerbread candy dessert
        lollipop.
      </p>
      <div slot="footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-large-data') as any)?.close()}"
        >
          Cerrar
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click="${() => (document.getElementById('modal-large-data') as any)?.close()}"
        >
          Descargar PDF
        </button>
      </div>
    </sb-ui-modal>
  `,
};
