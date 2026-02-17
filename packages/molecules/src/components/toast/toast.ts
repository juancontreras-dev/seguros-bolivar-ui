import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Toast Component - Seguros Bolívar UI Design System
 *
 * Componente de notificaciones toast flotantes basado en alert.css
 * Soporta múltiples tipos, posiciones y auto-dismiss
 *
 * @element sb-ui-toast
 *
 * @fires sb-ui-toast-show - Fired when toast is shown
 * @fires sb-ui-toast-hide - Fired when toast is hidden
 * @fires sb-ui-toast-click - Fired when toast is clicked
 *
 * @slot - Default slot for toast content
 * @slot title - Slot for custom title content
 * @slot actions - Slot for custom action buttons
 *
 * @csspart toast - The main toast container
 * @csspart icon - The toast icon
 * @csspart content - The toast content wrapper
 * @csspart title - The toast title
 * @csspart message - The toast message
 * @csspart close - The close button
 * @csspart progress - The auto-dismiss progress bar
 *
 * @example
 * ```html
 * <sb-ui-toast
 *   type="success"
 *   title="¡Éxito!"
 *   message="Operación completada correctamente"
 *   position="top-right"
 *   auto-dismiss="5000">
 * </sb-ui-toast>
 * ```
 */
@customElement('sb-ui-toast')
export class SbUiToast extends LitElement {
  static override styles = css`
    :host {
      /* Importar estilos base de alert.css mediante CSS custom properties */
      --sb-ui-toast-bg-color: var(
        --sb-ui-alert-bg-color,
        var(--sb-ui-color-grayscale-white, #ffffff)
      );
      --sb-ui-toast-text-color: var(
        --sb-ui-alert-text-color,
        var(--sb-ui-color-grayscale-D300, #404040)
      );
      --sb-ui-toast-border-color: var(
        --sb-ui-alert-border-color,
        var(--sb-ui-color-grayscale-L200, #edeef0)
      );
      --sb-ui-toast-shadow: var(--sb-ui-alert-shadow-toast, 0 4px 16px rgba(0, 0, 0, 0.15));
      --sb-ui-toast-border-radius: var(--sb-ui-alert-border-radius, 8px);
      --sb-ui-toast-padding: var(--sb-ui-alert-padding, 1rem);
      --sb-ui-toast-gap: var(--sb-ui-alert-gap, 0.75rem);
      --sb-ui-toast-font-family: var(
        --sb-ui-alert-font-family,
        var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif)
      );
      --sb-ui-toast-transition: var(--sb-ui-alert-transition, all 0.2s ease);

      /* Posicionamiento */
      position: fixed;
      z-index: 1000;
      display: block;
      opacity: 0;
      transform: translateX(100%);
      transition: var(--sb-ui-toast-transition);
    }

    :host([visible]) {
      opacity: 1;
      transform: translateX(0);
    }

    :host([position='top-right']) {
      top: 1rem;
      right: 1rem;
    }

    :host([position='top-left']) {
      top: 1rem;
      left: 1rem;
      transform: translateX(-100%);
    }

    :host([position='top-left'][visible]) {
      transform: translateX(0);
    }

    :host([position='top-center']) {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    }

    :host([position='top-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    :host([position='bottom-right']) {
      bottom: 1rem;
      right: 1rem;
      transform: translateX(100%) translateY(100%);
    }

    :host([position='bottom-right'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-left']) {
      bottom: 1rem;
      left: 1rem;
      transform: translateX(-100%) translateY(100%);
    }

    :host([position='bottom-left'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-center']) {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    }

    :host([position='bottom-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    .toast {
      /* Aplicar estilos base de alert.css */
      display: flex;
      align-items: flex-start;
      gap: var(--sb-ui-toast-gap);
      position: relative;
      box-sizing: border-box;
      min-height: 3rem;
      min-width: 300px;
      max-width: 484px;
      padding: 1rem;
      background-color: var(--sb-ui-toast-bg-color);
      border: 1px solid transparent;
      border-left: 6px solid var(--sb-ui-toast-border-color);
      border-radius: var(--sb-ui-toast-border-radius);
      box-shadow: 1px 4px 4px 0px rgba(115, 115, 115, 0.04), 1px 1px 8px 0px rgba(115, 115, 115, 0.16);
      font-family: var(--sb-ui-typography-fontFamily, 'Bolivar', sans-serif);
      line-height: 1.4;
      color: var(--sb-ui-toast-text-color);
      cursor: pointer;
      transition: var(--sb-ui-toast-transition);
    }

    .toast:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      font-size: 24px;
      flex-shrink: 0;
      margin-top: 0.125rem;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .title {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4;
      margin: 0;
      color: inherit;
      font-family: var(--sb-ui-typography-fontFamily, 'Bolivar', sans-serif);
    }

    .message {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
      color: inherit;
      font-family: var(--sb-ui-typography-fontFamily, 'Bolivar', sans-serif);
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: none;
      border: none;
      color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      border-radius: 4px;
      transition: var(--sb-ui-toast-transition);
      flex-shrink: 0;
      margin-top: -0.125rem;
      margin-right: -0.25rem;
    }

    .close:hover {
      color: var(--sb-ui-color-grayscale-D300, #404040);
      background-color: var(--sb-ui-color-grayscale-L400, rgba(247, 247, 247, 0.5));
    }

    .close:focus-visible {
      outline: 2px solid var(--sb-ui-color-primary-base, #007acc);
      outline-offset: 2px;
    }

    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background-color: var(--sb-ui-color-primary-base, #007acc);
      border-radius: 0 0 var(--sb-ui-toast-border-radius) var(--sb-ui-toast-border-radius);
      transition: width linear;
      opacity: 0.7;
    }

    /* Toast Type Variants */
    :host([type='success']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-success-L400, #e9f6ec);
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      border-left-width: 6px;
    }

    :host([type='success']) .icon::before {
      content: '✓';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: var(--sb-ui-color-grayscale-white, #ffffff);
      border: 2px solid var(--sb-ui-color-feedback-success-base, #28a745);
      color: var(--sb-ui-color-feedback-success-base, #28a745);
      font-size: 14px;
      font-weight: 700;
    }

    :host([type='success']) .progress {
      background-color: var(--sb-ui-color-feedback-success-base, #28a745);
    }

    :host([type='info']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-info-L400, rgba(0, 122, 204, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-info-base, #007acc);
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      border-left-width: 6px;
    }

    :host([type='info']) .icon::before {
      content: 'i';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: var(--sb-ui-color-grayscale-white, #ffffff);
      border: 2px solid var(--sb-ui-color-feedback-info-base, #007acc);
      color: var(--sb-ui-color-feedback-info-base, #007acc);
      font-size: 14px;
      font-weight: 700;
      font-style: italic;
    }

    :host([type='info']) .progress {
      background-color: var(--sb-ui-color-feedback-info-base, #007acc);
    }

    :host([type='warning']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-warning-L400, rgba(255, 193, 7, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-warning-base, #ffc107);
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      border-left-width: 6px;
    }

    :host([type='warning']) .icon::before {
      content: '⚠';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: var(--sb-ui-color-grayscale-white, #ffffff);
      border: 2px solid var(--sb-ui-color-feedback-warning-base, #ffc107);
      color: var(--sb-ui-color-feedback-warning-base, #ffc107);
      font-size: 14px;
      font-weight: 700;
    }

    :host([type='warning']) .progress {
      background-color: var(--sb-ui-color-feedback-warning-base, #ffc107);
    }

    :host([type='error']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-error-L400, rgba(220, 53, 69, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-error-base, #dc3545);
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      border-left-width: 6px;
    }

    :host([type='error']) .icon::before {
      content: '✕';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: var(--sb-ui-color-grayscale-white, #ffffff);
      border: 2px solid var(--sb-ui-color-feedback-error-base, #dc3545);
      color: var(--sb-ui-color-feedback-error-base, #dc3545);
      font-size: 14px;
      font-weight: 700;
    }

    :host([type='error']) .progress {
      background-color: var(--sb-ui-color-feedback-error-base, #dc3545);
    }

    /* Size Variants */
    :host([size='small']) .toast {
      min-height: 2.5rem;
      padding: 0.75rem;
      gap: 0.5rem;
    }

    :host([size='small']) .icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
    }

    :host([size='small']) .title,
    :host([size='small']) .message {
      font-size: 0.8125rem;
    }

    :host([size='small']) .close {
      width: 1.25rem;
      height: 1.25rem;
    }

    :host([size='large']) .toast {
      min-height: 3.5rem;
      padding: 1.25rem;
      gap: 1rem;
    }

    :host([size='large']) .icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    :host([size='large']) .title {
      font-size: 1rem;
    }

    :host([size='large']) .message {
      font-size: 0.9375rem;
    }

    :host([size='large']) .close {
      width: 1.75rem;
      height: 1.75rem;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }

      .toast {
        transition: none;
      }

      .toast:hover {
        transform: none;
      }
    }

    @media (prefers-contrast: high) {
      .toast {
        border-width: 2px;
        border-left-width: 6px;
      }
    }

    /* Mobile Optimization */
    @media (max-width: 640px) {
      :host([position*='top']) {
        top: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(-100%);
      }

      :host([position*='top'][visible]) {
        transform: translateY(0);
      }

      :host([position*='bottom']) {
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(100%);
      }

      :host([position*='bottom'][visible]) {
        transform: translateY(0);
      }

      .toast {
        min-width: auto;
        max-width: none;
      }
    }
  `;

  @property({ type: String, reflect: true })
  type: 'info' | 'success' | 'warning' | 'error' = 'info';

  @property({ type: String, reflect: true })
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'top-right';

  @property({ type: String, reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: String })
  title = '';

  @property({ type: String })
  message = '';

  @property({ type: Boolean, reflect: true })
  visible = false;

  @property({ type: Boolean, attribute: 'show-close' })
  showClose = true;

  @property({ type: Number, attribute: 'auto-dismiss' })
  autoDismiss = 0; // 0 = no auto dismiss, > 0 = ms to auto dismiss

  @property({ type: Boolean, attribute: 'show-progress' })
  showProgress = false;

  @property({ type: Boolean })
  clickable = true;

  @state()
  private _progressWidth = 100;

  private _dismissTimer?: number;
  private _progressTimer?: number;

  override connectedCallback(): void {
    super.connectedCallback();
    // Auto-show when connected if visible is true
    if (this.visible) {
      this._setupAutoDismiss();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearTimers();
  }

  override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('visible')) {
      const previousVisible = changedProperties.get('visible');
      if (this.visible) {
        this._dispatchEvent('sb-ui-toast-show');
        this._setupAutoDismiss();
      } else if (previousVisible === true) {
        // Only fire hide if previously shown (avoids false trigger on initial render)
        this._dispatchEvent('sb-ui-toast-hide');
        this._clearTimers();
      }
    }

    if (changedProperties.has('autoDismiss') && this.visible) {
      this._setupAutoDismiss();
    }
  }

  private _setupAutoDismiss(): void {
    this._clearTimers();

    if (this.autoDismiss > 0) {
      // Setup progress bar animation if enabled
      if (this.showProgress) {
        this._progressWidth = 100;
        this.requestUpdate();

        // Start progress animation
        setTimeout(() => {
          this._progressWidth = 0;
          this.requestUpdate();
        }, 50);
      }

      // Setup auto dismiss timer
      this._dismissTimer = window.setTimeout(() => {
        this.hide();
      }, this.autoDismiss);
    }
  }

  private _clearTimers(): void {
    if (this._dismissTimer) {
      clearTimeout(this._dismissTimer);
      this._dismissTimer = undefined;
    }
    if (this._progressTimer) {
      clearTimeout(this._progressTimer);
      this._progressTimer = undefined;
    }
  }

  private _handleClick(): void {
    if (this.clickable) {
      this._dispatchEvent('sb-ui-toast-click');
    }
  }

  private _handleCloseClick(e: MouseEvent): void {
    e.stopPropagation();
    this.hide();
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.hide();
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
   * Shows the toast
   */
  public show(): void {
    this.visible = true;
  }

  /**
   * Hides the toast
   */
  public hide(): void {
    this.visible = false;
  }

  /**
   * Toggles the toast visibility
   */
  public toggle(): void {
    this.visible = !this.visible;
  }

  /**
   * Pauses auto-dismiss timer (useful on hover)
   */
  public pauseAutoDismiss(): void {
    this._clearTimers();
  }

  /**
   * Resumes auto-dismiss timer
   */
  public resumeAutoDismiss(): void {
    if (this.visible && this.autoDismiss > 0) {
      this._setupAutoDismiss();
    }
  }

  override render() {
    const progressStyle =
      this.showProgress && this.autoDismiss > 0
        ? `width: ${this._progressWidth}%; transition-duration: ${this.autoDismiss}ms;`
        : 'display: none;';

    return html`
      <div
        class="toast"
        part="toast"
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
        @mouseenter=${this.pauseAutoDismiss}
        @mouseleave=${this.resumeAutoDismiss}
        tabindex="0"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="icon" part="icon">
          <slot name="icon"></slot>
        </div>

        <div class="content" part="content">
          ${this.title
            ? html`
                <div class="title" part="title">
                  <slot name="title">${this.title}</slot>
                </div>
              `
            : ''}

          <div class="message" part="message">
            <slot>${this.message}</slot>
          </div>

          <slot name="actions"></slot>
        </div>

        ${this.showClose
          ? html`
              <button
                class="close"
                part="close"
                @click=${this._handleCloseClick}
                aria-label="Cerrar notificación"
                type="button"
              >
                ×
              </button>
            `
          : ''}

        <div class="progress" part="progress" style=${progressStyle}></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-toast': SbUiToast;
  }
}
