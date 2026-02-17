import { SbUiToast } from './toast.js';

export interface ToastOptions {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message?: string;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  size?: 'small' | 'medium' | 'large';
  autoDismiss?: number;
  showClose?: boolean;
  showProgress?: boolean;
  clickable?: boolean;
}

export interface ToastInstance {
  id: string;
  element: SbUiToast;
  container: HTMLElement;
}

/**
 * ToastManager - Singleton para gestionar múltiples toasts
 *
 * Añade cada toast directamente al body. El propio CSS del componente
 * (position: fixed + per-position selectors) maneja el posicionamiento.
 * El manager ajusta el offset vertical cuando hay varios toasts en la misma posición.
 */
export class ToastManager {
  private static instance: ToastManager;
  private toasts: Map<string, ToastInstance> = new Map();
  private counter = 0;

  private constructor() {}

  static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  /**
   * Creates and shows a toast
   */
  show(options: ToastOptions = {}): string {
    const id = `toast-${++this.counter}-${Date.now()}`;
    const position = options.position || 'top-right';

    // Create toast element
    const toast = document.createElement('sb-ui-toast') as SbUiToast;

    // Set properties
    if (options.type) toast.type = options.type;
    if (options.title) toast.title = options.title;
    if (options.message) toast.message = options.message;
    toast.position = position;
    if (options.size) toast.size = options.size;
    if (options.autoDismiss !== undefined) toast.autoDismiss = options.autoDismiss;
    if (options.showClose !== undefined) toast.showClose = options.showClose;
    if (options.showProgress !== undefined) toast.showProgress = options.showProgress;
    if (options.clickable !== undefined) toast.clickable = options.clickable;

    // Append directly to body — the toast's own position: fixed CSS handles placement
    document.body.appendChild(toast);

    // Store instance (container = body, for interface compatibility)
    this.toasts.set(id, { id, element: toast, container: document.body });

    // Setup event listeners
    this.setupToastEventListeners(id, toast);

    // Recalculate stacking offsets for this position
    this.recalculateOffsets(position);

    // Show toast after DOM is ready
    requestAnimationFrame(() => {
      toast.show();
    });

    return id;
  }

  /**
   * Hides a specific toast by ID
   */
  hide(id: string): boolean {
    const instance = this.toasts.get(id);
    if (!instance) return false;
    instance.element.hide();
    return true;
  }

  /**
   * Removes a toast completely
   */
  remove(id: string): boolean {
    const instance = this.toasts.get(id);
    if (!instance) return false;

    const position = instance.element.position;
    instance.element.remove();
    this.toasts.delete(id);

    // Recalculate stacking for remaining toasts at this position
    this.recalculateOffsets(position);

    return true;
  }

  /**
   * Hides all toasts
   */
  hideAll(): void {
    this.toasts.forEach((instance) => instance.element.hide());
  }

  /**
   * Removes all toasts
   */
  removeAll(): void {
    this.toasts.forEach((instance) => instance.element.remove());
    this.toasts.clear();
  }

  /**
   * Gets all active toast IDs
   */
  getActiveToasts(): string[] {
    return Array.from(this.toasts.keys());
  }

  /**
   * Gets toast count by position
   */
  getToastCount(position?: string): number {
    if (!position) return this.toasts.size;
    return Array.from(this.toasts.values()).filter(
      (instance) => instance.element.position === position
    ).length;
  }

  // Convenience methods for different toast types
  success(message: string, options: Omit<ToastOptions, 'type' | 'message'> = {}): string {
    return this.show({ ...options, type: 'success', message });
  }

  error(message: string, options: Omit<ToastOptions, 'type' | 'message'> = {}): string {
    return this.show({ ...options, type: 'error', message });
  }

  warning(message: string, options: Omit<ToastOptions, 'type' | 'message'> = {}): string {
    return this.show({ ...options, type: 'warning', message });
  }

  info(message: string, options: Omit<ToastOptions, 'type' | 'message'> = {}): string {
    return this.show({ ...options, type: 'info', message });
  }

  /**
   * Recalculates vertical stacking offsets for all toasts at a given position.
   * Each toast is offset so they don't overlap.
   */
  private recalculateOffsets(position: string): void {
    const GAP = 8; // px gap between stacked toasts
    const BASE = 16; // 1rem base offset from viewport edge

    const toastsAtPosition = Array.from(this.toasts.values()).filter(
      (instance) => instance.element.position === position
    );

    const isBottom = position.startsWith('bottom');
    const isCenter = position.endsWith('center');

    let accumulated = BASE;

    toastsAtPosition.forEach((instance, index) => {
      const el = instance.element;
      const toastHeight = el.offsetHeight || 72; // fallback height

      if (isBottom) {
        el.style.bottom = `${accumulated}px`;
        el.style.top = '';
      } else {
        el.style.top = `${accumulated}px`;
        el.style.bottom = '';
      }

      // Reset center transforms to avoid conflict with stacking top/bottom
      if (isCenter) {
        el.style.left = '50%';
      }

      if (index < toastsAtPosition.length - 1) {
        accumulated += toastHeight + GAP;
      }
    });
  }

  private setupToastEventListeners(id: string, toast: SbUiToast): void {
    // Auto-remove from manager when hidden
    toast.addEventListener('sb-ui-toast-hide', () => {
      setTimeout(() => {
        this.remove(id);
      }, 300); // Wait for hide animation
    });
  }
}

// Export singleton instance for convenience
export const toastManager = ToastManager.getInstance();

// Global convenience functions
export const showToast = (options: ToastOptions) => toastManager.show(options);
export const showSuccess = (message: string, options?: Omit<ToastOptions, 'type' | 'message'>) =>
  toastManager.success(message, options);
export const showError = (message: string, options?: Omit<ToastOptions, 'type' | 'message'>) =>
  toastManager.error(message, options);
export const showWarning = (message: string, options?: Omit<ToastOptions, 'type' | 'message'>) =>
  toastManager.warning(message, options);
export const showInfo = (message: string, options?: Omit<ToastOptions, 'type' | 'message'>) =>
  toastManager.info(message, options);
export const hideToast = (id: string) => toastManager.hide(id);
export const removeToast = (id: string) => toastManager.remove(id);
export const hideAllToasts = () => toastManager.hideAll();
export const removeAllToasts = () => toastManager.removeAll();
