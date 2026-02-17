import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Modal Component - Seguros Bolivar UI Design System
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
 * <sb-ui-modal open title="Mi Modal" size="medium">
 *   <p>Contenido del modal</p>
 *   <div slot="footer">
 *     <button class="sb-ui-button sb-ui-button--tertiary">Cancelar</button>
 *     <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Aceptar</button>
 *   </div>
 * </sb-ui-modal>
 * ```
 */
@customElement('sb-ui-modal')
export class SbUiModal extends LitElement {
  static override styles = css`
    /* ========================================
       TOKENS - CSS Variables
       ======================================== */
    :host {
      /* Backdrop */
      --sb-ui-modal-backdrop-bg: #00000040;

      /* Dialog */
      --sb-ui-modal-bg: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-modal-border-radius: clamp(8px, 0.5rem + 0.5vw, 16px);
      --sb-ui-modal-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

      /* Spacing */
      --sb-ui-modal-padding-inline: clamp(1rem, 0.75rem + 1.5vw, 2rem);
      --sb-ui-modal-padding-block: clamp(0.875rem, 0.7rem + 0.8vw, 1.5rem);
      --sb-ui-modal-gap: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);

      /* Header */
      --sb-ui-modal-title-color: var(--sb-ui-color-primary-D100, #038450);
      --sb-ui-modal-title-font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
      --sb-ui-modal-title-font-weight: 700;
      --sb-ui-modal-header-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);

      /* Close button */
      --sb-ui-modal-close-size: 24px;
      --sb-ui-modal-close-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-modal-close-color-hover: var(--sb-ui-color-grayscale-D400, #282828);

      /* Footer */
      --sb-ui-modal-footer-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-modal-footer-gap: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);

      /* Body */
      --sb-ui-modal-body-color: var(--sb-ui-color-grayscale-D300, #333333);
      --sb-ui-modal-body-font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
      --sb-ui-modal-body-line-height: 1.5;

      /* Sizes - defaults (medium) */
      --sb-ui-modal-max-inline-size: min(716px, 90%);
      --sb-ui-modal-max-block-size: 82dvb;

      /* Transition */
      --sb-ui-modal-transition: opacity 0.2s ease, transform 0.3s ease;

      display: contents;
    }

    :host([hidden]) {
      display: none;
    }

    /* ========================================
       BACKDROP
       ======================================== */
    .sb-ui-modal__backdrop {
      position: fixed;
      inset: 0;
      background: var(--sb-ui-modal-backdrop-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding-block: clamp(1rem, 0.5rem + 2vw, 2rem);
      padding-inline: clamp(0.5rem, 0.25rem + 1.5vw, 1.5rem);
      animation: sb-ui-modal-fade-in 0.2s ease;
    }

    /* ========================================
       DIALOG
       ======================================== */
    .sb-ui-modal__dialog {
      background: var(--sb-ui-modal-bg);
      inline-size: 100%;
      max-inline-size: var(--sb-ui-modal-max-inline-size);
      max-block-size: var(--sb-ui-modal-max-block-size);
      border-radius: var(--sb-ui-modal-border-radius);
      box-shadow: var(--sb-ui-modal-shadow);
      display: flex;
      flex-direction: column;
      animation: sb-ui-modal-slide-up 0.3s ease;
      overflow: hidden;
    }

    /* ========================================
       HEADER
       ======================================== */
    .sb-ui-modal__header {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      border-block-end: var(--sb-ui-modal-header-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--sb-ui-modal-gap);
      flex-shrink: 0;
    }

    .sb-ui-modal__title {
      font-size: var(--sb-ui-modal-title-font-size);
      font-weight: var(--sb-ui-modal-title-font-weight);
      color: var(--sb-ui-modal-title-color);
      margin-block: 0;
      margin-inline: 0;
      line-height: 1.3;
      flex: 1;
    }

    /* ========================================
       CLOSE BUTTON
       ======================================== */
    .sb-ui-modal__close {
      all: unset;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--sb-ui-modal-close-size);
      block-size: var(--sb-ui-modal-close-size);
      font-size: calc(var(--sb-ui-modal-close-size) * 0.75);
      cursor: pointer;
      color: var(--sb-ui-modal-close-color);
      line-height: 1;
      transition: color 0.2s ease;
      flex-shrink: 0;
      border-radius: 4px;

      &:hover {
        color: var(--sb-ui-modal-close-color-hover);
      }

      &:focus-visible {
        outline: 2px solid var(--sb-ui-color-secondary-L100, #ffea9a);
        outline-offset: 2px;
      }
    }

    /* ========================================
       BODY
       ======================================== */
    .sb-ui-modal__body {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      overflow-y: auto;
      flex: 1;
      color: var(--sb-ui-modal-body-color);
      font-size: var(--sb-ui-modal-body-font-size);
      line-height: var(--sb-ui-modal-body-line-height);
    }

    /* ========================================
       FOOTER
       ======================================== */
    .sb-ui-modal__footer {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      border-block-start: var(--sb-ui-modal-footer-border);
      display: flex;
      gap: var(--sb-ui-modal-footer-gap);
      justify-content: center;
      flex-wrap: wrap;
      flex-shrink: 0;
    }

    ::slotted([slot='footer']) {
      display: flex;
      gap: var(--sb-ui-modal-footer-gap, 0.75rem);
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    /* ========================================
       ANIMATIONS
       ======================================== */
    @keyframes sb-ui-modal-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes sb-ui-modal-slide-up {
      from {
        transform: translateY(clamp(20px, 3vw, 50px));
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* ========================================
       ACCESSIBILITY
       ======================================== */
    @media (prefers-reduced-motion: reduce) {
      .sb-ui-modal__backdrop,
      .sb-ui-modal__dialog {
        animation: none;
      }
    }

    @media (prefers-contrast: high) {
      .sb-ui-modal__dialog {
        border: 2px solid currentColor;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  override title = '';

  @property({ type: String, reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

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

    if (changedProperties.has('size')) {
      this._updateSizeTokens();
    }
  }

  private _updateSizeTokens(): void {
    const sizeMap: Record<string, { maxInline: string; maxBlock: string }> = {
      small: {
        maxInline: 'min(464px, 90%)',
        maxBlock: '45dvb',
      },
      medium: {
        maxInline: 'min(716px, 90%)',
        maxBlock: '82dvb',
      },
      large: {
        maxInline: 'min(928px, 90%)',
        maxBlock: '82dvb',
      },
    };

    const config = sizeMap[this.size] || sizeMap.medium;
    this.style.setProperty('--sb-ui-modal-max-inline-size', config.maxInline);
    this.style.setProperty('--sb-ui-modal-max-block-size', config.maxBlock);
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
    this._updateSizeTokens();
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
        class="sb-ui-modal__backdrop"
        part="backdrop"
        @click=${this._handleBackdropClick}
        @keydown=${this._handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="sb-ui-modal__dialog" part="dialog" role="document">
          <div class="sb-ui-modal__header" part="header">
            <h2 id="modal-title" class="sb-ui-modal__title">
              <slot name="header">${this.title}</slot>
            </h2>
            ${this.showCloseButton
              ? html`
                  <button
                    class="sb-ui-modal__close"
                    part="close-button"
                    @click=${this._handleCloseClick}
                    aria-label="Cerrar modal"
                  >
                    &times;
                  </button>
                `
              : ''}
          </div>

          <div class="sb-ui-modal__body" part="body">
            <slot></slot>
          </div>

          <div class="sb-ui-modal__footer" part="footer">
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
