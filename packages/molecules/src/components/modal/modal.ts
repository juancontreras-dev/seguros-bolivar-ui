import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Modal Component
 *
 * @element sb-ui-modal
 *
 * @fires sb-ui-modal-open - Fired when modal opens
 * @fires sb-ui-modal-close - Fired when modal closes
 *
 * @slot - Default slot for modal content
 * @slot header - Slot for custom header content
 * @slot footer - Slot for custom footer content
 *
 * @csspart backdrop - The modal backdrop
 * @csspart dialog - The modal dialog container
 * @csspart header - The modal header
 * @csspart body - The modal body
 * @csspart footer - The modal footer
 * @csspart close-button - The close button
 *
 * @example
 * ```html
 * <sb-ui-modal open title="Mi Modal">
 *   <p>Contenido del modal</p>
 *   <div slot="footer">
 *     <button>Cancelar</button>
 *     <button>Aceptar</button>
 *   </div>
 * </sb-ui-modal>
 * ```
 */
@customElement('sb-ui-modal')
export class SbUiModal extends LitElement {
  static override styles = css`
    :host {
      --sb-ui-modal-backdrop-bg: rgba(0, 0, 0, 0.5);
      --sb-ui-modal-dialog-bg: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-modal-dialog-width: 500px;
      --sb-ui-modal-dialog-max-width: 90vw;
      --sb-ui-modal-dialog-border-radius: 12px;
      --sb-ui-modal-dialog-shadow: var(--sb-ui-shadow-xl, 0 20px 25px rgba(0, 0, 0, 0.3));
      --sb-ui-modal-padding: 1.5rem;
      --sb-ui-modal-header-border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-modal-footer-border-top: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
    }

    :host([hidden]) {
      display: none;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: var(--sb-ui-modal-backdrop-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
      animation: fadeIn 0.2s ease;
    }

    .dialog {
      background: var(--sb-ui-modal-dialog-bg);
      width: var(--sb-ui-modal-dialog-width);
      max-width: var(--sb-ui-modal-dialog-max-width);
      max-height: 90vh;
      border-radius: var(--sb-ui-modal-dialog-border-radius);
      box-shadow: var(--sb-ui-modal-dialog-shadow);
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s ease;
    }

    .header {
      padding: var(--sb-ui-modal-padding);
      border-bottom: var(--sb-ui-modal-header-border-bottom);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--sb-ui-color-grayscale-D400, #282828);
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      padding: 0.25rem;
      line-height: 1;
      transition: color 0.2s ease;
    }

    .close-button:hover {
      color: var(--sb-ui-color-grayscale-D400, #282828);
    }

    .body {
      padding: var(--sb-ui-modal-padding);
      overflow-y: auto;
      flex: 1;
    }

    .footer {
      padding: var(--sb-ui-modal-padding);
      border-top: var(--sb-ui-modal-footer-border-top);
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .dialog {
        animation: none;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title = '';

  @property({ type: Boolean, attribute: 'close-on-backdrop' })
  closeOnBackdrop = true;

  @property({ type: Boolean, attribute: 'show-close-button' })
  showCloseButton = true;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.open) {
      this._lockScroll();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unlockScroll();
  }

  override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._lockScroll();
        this._dispatchEvent('sb-ui-modal-open');
      } else {
        this._unlockScroll();
        this._dispatchEvent('sb-ui-modal-close');
      }
    }
  }

  private _lockScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private _unlockScroll(): void {
    document.body.style.overflow = '';
  }

  private _handleBackdropClick(e: MouseEvent): void {
    if (this.closeOnBackdrop && e.target === e.currentTarget) {
      this.close();
    }
  }

  private _handleCloseClick(): void {
    this.close();
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.open) {
      this.close();
    }
  }

  private _dispatchEvent(eventName: string, detail?: unknown): void {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Opens the modal
   */
  public openModal(): void {
    this.open = true;
  }

  /**
   * Closes the modal
   */
  public close(): void {
    this.open = false;
  }

  override render() {
    if (!this.open) {
      return html``;
    }

    return html`
      <div
        class="backdrop"
        part="backdrop"
        @click=${this._handleBackdropClick}
        @keydown=${this._handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="dialog" part="dialog" role="document">
          <div class="header" part="header">
            <h2 id="modal-title" class="title">
              <slot name="header">${this.title}</slot>
            </h2>
            ${this.showCloseButton
              ? html`
                  <button
                    class="close-button"
                    part="close-button"
                    @click=${this._handleCloseClick}
                    aria-label="Cerrar modal"
                  >
                    ×
                  </button>
                `
              : ''}
          </div>

          <div class="body" part="body">
            <slot></slot>
          </div>

          <div class="footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-modal': SbUiModal;
  }
}
