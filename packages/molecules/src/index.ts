/**
 * Seguros Bolívar UI Design System - Molecules
 * Web Components complejos con Lit
 */

import './components/alert/alert-behavior.js';
import './components/file-upload/file-upload-behavior.js';
export { SbUiCalendar } from './components/Calendar.js';
export { SbUiDatePicker } from './components/DatePicker.js';
export { SbUiModal } from './components/modal/modal.js';
import {
  hideAllToasts,
  hideToast,
  removeAllToasts,
  removeToast,
  showError,
  showInfo,
  showSuccess,
  showToast,
  showWarning,
  ToastManager,
} from './components/toast/toast-manager.js';
export type { ToastInstance, ToastOptions } from './components/toast/toast-manager.js';
export {
  hideAllToasts,
  hideToast,
  removeAllToasts,
  removeToast,
  showError,
  showInfo,
  showSuccess,
  showToast,
  showWarning,
  ToastManager,
};
export { SbUiToast } from './components/toast/toast.js';

// Exponer funciones toast en window para uso directo con onclick en HTML
// (evita tener que importar y asignar manualmente cuando se carga el script en el head)
if (typeof window !== 'undefined') {
  (window as any).showToast = showToast;
  (window as any).showSuccess = showSuccess;
  (window as any).showInfo = showInfo;
  (window as any).showWarning = showWarning;
  (window as any).showError = showError;
  (window as any).hideToast = hideToast;
  (window as any).hideAllToasts = hideAllToasts;
  (window as any).removeToast = removeToast;
  (window as any).removeAllToasts = removeAllToasts;
}
