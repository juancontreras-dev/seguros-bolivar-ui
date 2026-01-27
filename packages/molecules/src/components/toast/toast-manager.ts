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
 * Permite crear, mostrar y gestionar toasts de forma centralizada
 * Evita solapamientos y mantiene un stack ordenado por posición
 */
export class ToastManager {
  private static instance: ToastManager;
  private toasts: Map<string, ToastInstance> = new Map();
  private containers: Map<string, HTMLElement> = new Map();
  private counter = 0;

  private constructor() {
    // Singleton pattern
  }

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
    if (options.position) toast.position = options.position;
    if (options.size) toast.size = options.size;
    if (options.autoDismiss !== undefined) toast.autoDismiss = options.autoDismiss;
    if (options.showClose !== undefined) toast.showClose = options.showClose;
    if (options.showProgress !== undefined) toast.showProgress = options.showProgress;
    if (options.clickable !== undefined) toast.clickable = options.clickable;

    // Get or create container for this position
    const container = this.getOrCreateContainer(position);

    // Add to container
    container.appendChild(toast);

    // Store instance
    this.toasts.set(id, { id, element: toast, container });

    // Setup event listeners
    this.setupToastEventListeners(id, toast);

    // Show toast after a brief delay to ensure DOM is ready
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

    instance.element.remove();
    this.toasts.delete(id);

    // Clean up empty containers
    this.cleanupEmptyContainers();

    return true;
  }

  /**
   * Hides all toasts
   */
  hideAll(): void {
    this.toasts.forEach((instance) => {
      instance.element.hide();
    });
  }

  /**
   * Removes all toasts
   */
  removeAll(): void {
    this.toasts.forEach((instance) => {
      instance.element.remove();
    });
    this.toasts.clear();
    this.cleanupAllContainers();
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

  private getOrCreateContainer(position: string): HTMLElement {
    let container = this.containers.get(position);

    if (!container) {
      container = document.createElement('div');
      container.className = `sb-ui-toast-container sb-ui-toast-container--${position}`;
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-label', `Notificaciones ${position.replace('-', ' ')}`);

      // Apply container styles
      this.applyContainerStyles(container, position);

      // Add to body
      document.body.appendChild(container);
      this.containers.set(position, container);
    }

    return container;
  }

  private applyContainerStyles(container: HTMLElement, position: string): void {
    // Base styles
    container.style.position = 'fixed';
    container.style.zIndex = '1000';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '0.5rem';
    container.style.maxWidth = '400px';
    container.style.minWidth = '300px';
    container.style.pointerEvents = 'none';

    // Position-specific styles
    switch (position) {
      case 'top-right':
        container.style.top = '1rem';
        container.style.right = '1rem';
        break;
      case 'top-left':
        container.style.top = '1rem';
        container.style.left = '1rem';
        break;
      case 'top-center':
        container.style.top = '1rem';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        break;
      case 'bottom-right':
        container.style.bottom = '1rem';
        container.style.right = '1rem';
        container.style.flexDirection = 'column-reverse';
        break;
      case 'bottom-left':
        container.style.bottom = '1rem';
        container.style.left = '1rem';
        container.style.flexDirection = 'column-reverse';
        break;
      case 'bottom-center':
        container.style.bottom = '1rem';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        container.style.flexDirection = 'column-reverse';
        break;
    }

    // Mobile responsive styles
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    if (mediaQuery.matches) {
      this.applyMobileStyles(container, position);
    }

    // Listen for media query changes
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        this.applyMobileStyles(container, position);
      } else {
        this.applyDesktopStyles(container, position);
      }
    });
  }

  private applyMobileStyles(container: HTMLElement, position: string): void {
    container.style.left = '0.5rem';
    container.style.right = '0.5rem';
    container.style.maxWidth = 'none';
    container.style.minWidth = 'auto';
    container.style.transform = 'none';

    if (position.includes('top')) {
      container.style.top = '0.5rem';
      container.style.bottom = 'auto';
    } else {
      container.style.bottom = '0.5rem';
      container.style.top = 'auto';
    }
  }

  private applyDesktopStyles(container: HTMLElement, position: string): void {
    // Reset to original desktop styles
    this.applyContainerStyles(container, position);
  }

  private setupToastEventListeners(id: string, toast: SbUiToast): void {
    // Auto-remove when hidden
    toast.addEventListener('sb-ui-toast-hide', () => {
      setTimeout(() => {
        this.remove(id);
      }, 300); // Wait for hide animation
    });

    // Re-enable pointer events for the toast itself
    toast.style.pointerEvents = 'auto';
  }

  private cleanupEmptyContainers(): void {
    this.containers.forEach((container, position) => {
      if (container.children.length === 0) {
        container.remove();
        this.containers.delete(position);
      }
    });
  }

  private cleanupAllContainers(): void {
    this.containers.forEach((container) => {
      container.remove();
    });
    this.containers.clear();
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
