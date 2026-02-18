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
      /* Colores - Background (basado en alert.css tokens) */
      --sb-ui-toast-bg-color: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-toast-bg-color-success: var(--sb-ui-color-feedback-success-L400, #e9f6ec);
      --sb-ui-toast-bg-color-info: var(--sb-ui-color-feedback-info-L400, #e5f2ff);
      --sb-ui-toast-bg-color-warning: var(--sb-ui-color-feedback-warning-L400, #fff9e5);
      --sb-ui-toast-bg-color-error: var(--sb-ui-color-feedback-error-L400, #fbebec);

      /* Colores - Border (linea izquierda) */
      --sb-ui-toast-border-color: var(--sb-ui-color-grayscale-L200, #edeef0);
      --sb-ui-toast-border-color-success: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-border-color-info: var(--sb-ui-color-feedback-info-base, #007eff);
      --sb-ui-toast-border-color-warning: var(--sb-ui-color-feedback-warning-base, #ffc100);
      --sb-ui-toast-border-color-error: var(--sb-ui-color-feedback-error-base, #dc3545);

      /* Colores - Text (siempre oscuro) */
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      --sb-ui-toast-title-color: var(--sb-ui-color-grayscale-black, #1b1b1b);

      /* Colores - Icon */
      --sb-ui-toast-icon-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-toast-icon-color-success: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-icon-color-info: var(--sb-ui-color-feedback-info-base, #007eff);
      --sb-ui-toast-icon-color-warning: var(--sb-ui-color-feedback-warning-base, #ffc100);
      --sb-ui-toast-icon-color-error: var(--sb-ui-color-feedback-error-base, #dc3545);

      /* Colores - Close button */
      --sb-ui-toast-close-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-toast-close-color-hover: var(--sb-ui-color-grayscale-D300, #404040);

      /* Espaciado (según especificación Figma como alert.css) */
      --sb-ui-toast-padding-block: 1rem; /* 16px */
      --sb-ui-toast-padding-inline-start: 2rem;
      --sb-ui-toast-padding-inline-end: 1rem;
      --sb-ui-toast-gap: 0.5rem; /* 8px */
      --sb-ui-toast-content-gap: 0.25rem; /* 4px */

      /* Bordes */
      --sb-ui-toast-border-inline-start-width: 4px;
      --sb-ui-toast-border-radius: 8px;

      /* Tipografia */
      --sb-ui-toast-font-family: var(--sb-ui-typography-fontFamily, 'Bolivar', sans-serif);
      --sb-ui-toast-title-font-size: 0.875rem; /* 14px */
      --sb-ui-toast-title-font-weight: 700;
      --sb-ui-toast-message-font-size: 0.875rem; /* 14px */
      --sb-ui-toast-message-font-weight: 400;
      --sb-ui-toast-line-height: 1.4;

      /* Tamanios */
      --sb-ui-toast-min-block-size: 5rem;
      --sb-ui-toast-icon-size: 1.5rem; /* 24px */
      --sb-ui-toast-close-size: 1.75rem; /* 28px */

      /* Sombra */
      --sb-ui-toast-shadow: var(--sb-ui-shadow-s, 1px 4px 4px 0px rgba(115, 115, 115, 0.04), 1px 1px 8px 0px rgba(115, 115, 115, 0.16));

      /* Transiciones */
      --sb-ui-toast-transition: all 0.2s ease;

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
      /* Layout (igual que alert.css) */
      display: flex;
      align-items: flex-start;
      gap: var(--sb-ui-toast-gap);
      position: relative;
      box-sizing: border-box;
      width: 100%;
      min-width: 300px;
      max-width: 484px;

      /* Spacing */
      padding: var(--sb-ui-toast-padding-block) var(--sb-ui-toast-padding-inline-end)
        var(--sb-ui-toast-padding-block) var(--sb-ui-toast-padding-inline-start);

      /* Sizing */
      min-height: var(--sb-ui-toast-min-block-size);

      /* Appearance */
      background-color: var(--sb-ui-toast-bg-color);
      border: none;
      border-radius: var(--sb-ui-toast-border-radius);
      box-shadow: var(--sb-ui-toast-shadow);

      /* Typography */
      font-family: var(--sb-ui-toast-font-family);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-text-color);

      cursor: pointer;
      transition: var(--sb-ui-toast-transition);
    }

    /* Barra de color izquierda (pseudo-elemento) - según Figma */
    .toast::before {
      content: '';
      position: absolute;
      left: 0.5rem; /* 8px */
      top: 50%;
      transform: translateY(-50%);
      width: var(--sb-ui-toast-border-inline-start-width);
      height: calc(100% - 2rem); /* Altura dinámica con margen */
      background-color: var(--sb-ui-toast-border-color);
      border-radius: 8px;
    }

    .toast:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /* Icon */
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sb-ui-toast-icon-size);
      height: var(--sb-ui-toast-icon-size);
      flex-shrink: 0;
      margin-top: 0.125rem;
      position: relative;
    }

    /* Ocultar cualquier contenido dentro del icon container */
    .icon > * {
      display: none;
    }

    /* Content wrapper */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sb-ui-toast-content-gap);
      min-width: 0;
    }

    /* Title */
    .title {
      font-size: var(--sb-ui-toast-title-font-size);
      font-weight: var(--sb-ui-toast-title-font-weight);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-title-color);
      margin: 0;
    }

    /* Message */
    .message {
      font-size: var(--sb-ui-toast-message-font-size);
      font-weight: var(--sb-ui-toast-message-font-weight);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-text-color);
      margin: 0;
    }

    /* Close button */
    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sb-ui-toast-close-size);
      height: var(--sb-ui-toast-close-size);
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 0.25rem; /* 4px */
      transition: color 0.2s ease, background-color 0.2s ease;
      flex-shrink: 0;
      margin-top: 0;
      margin-right: 0;
      padding: 0.25rem;
      position: relative;
    }

    .close:hover {
      background-color: var(--sb-ui-color-grayscale-L400, rgba(247, 247, 247, 0.5));
    }

    .close:focus-visible {
      outline: 3px solid var(--sb-ui-color-secondary-L100);
      outline-offset: 2px;
    }

    /* Ocultar cualquier contenido dentro */
    .close > * {
      display: none;
    }

    /* Icono X con CSS puro usando mask-image (igual que alert.css) */
    .close::before {
      content: '';
      width: 1.125rem;
      height: 1.125rem;
      background-color: var(--sb-ui-toast-close-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    .close:hover::before {
      background-color: var(--sb-ui-toast-close-color-hover);
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

    /* Toast Type Variants - igual que alert.css */
    
    /* Success */
    :host([type='success']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-success);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-success);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-success);
    }

    :host([type='success']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cpath d='M7 12l3 3 7-7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cpath d='M7 12l3 3 7-7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='success']) .progress {
      background-color: var(--sb-ui-toast-border-color-success);
    }

    /* Info */
    :host([type='info']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-info);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-info);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-info);
    }

    :host([type='info']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='12' y1='11' x2='12' y2='17' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='8' r='1' fill='black'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='12' y1='11' x2='12' y2='17' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='8' r='1' fill='black'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='info']) .progress {
      background-color: var(--sb-ui-toast-border-color-info);
    }

    /* Warning */
    :host([type='warning']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-warning);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-warning);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-warning);
    }

    :host([type='warning']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12 2L2 20h20L12 2z' stroke='black' stroke-width='2' stroke-linejoin='round' fill='none'/%3E%3Cline x1='12' y1='9' x2='12' y2='14' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='17' r='1' fill='black'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12 2L2 20h20L12 2z' stroke='black' stroke-width='2' stroke-linejoin='round' fill='none'/%3E%3Cline x1='12' y1='9' x2='12' y2='14' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='17' r='1' fill='black'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='warning']) .progress {
      background-color: var(--sb-ui-toast-border-color-warning);
    }

    /* Error */
    :host([type='error']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-error);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-error);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-error);
    }

    :host([type='error']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='8' y1='8' x2='16' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='16' y1='8' x2='8' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='8' y1='8' x2='16' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='16' y1='8' x2='8' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='error']) .progress {
      background-color: var(--sb-ui-toast-border-color-error);
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
        <!-- Icon (vacío, el CSS genera el icono automáticamente) -->
        <div class="icon" part="icon" aria-hidden="true"></div>

        <div class="content" part="content">
          ${this.title
            ? html`
                <strong class="title" part="title">
                  <slot name="title">${this.title}</slot>
                </strong>
              `
            : ''}
          ${this.message
            ? html`
                <p class="message" part="message">
                  <slot>${this.message}</slot>
                </p>
              `
            : html` <slot></slot> `}

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
              ></button>
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
