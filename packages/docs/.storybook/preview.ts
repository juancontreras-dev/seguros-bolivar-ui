import type { Preview } from '@storybook/web-components';

// IMPORTANTE: Ya no importamos tokens y atoms por separado
// El nuevo sistema usa bundles completos por marca que se cargan dinámicamente
// Ver decorator abajo que carga el CSS correcto según brand/theme seleccionado

// ============================================================================
// WEB COMPONENTS (Molecules) - Importación global para Storybook
// ============================================================================
// NOTA: Solo los componentes complejos (Modal, Calendar, Datepicker) necesitan
// esta importación JavaScript. Los componentes CSS puros (Button, Input, etc.)
// NO necesitan importación de JS.
// ============================================================================
import '@seguros-bolivar-ui/molecules';

// ============================================================================
// TOAST HELPER FUNCTIONS - Global para onclick y Storybook
// ============================================================================
declare global {
  interface Window {
    showToast: (type: string, position: string) => void;
    showSuccess: (message: string, position?: string) => void;
    showError: (message: string, position?: string) => void;
    showWarning: (message: string, position?: string) => void;
    showInfo: (message: string, position?: string) => void;
  }
}

// Toast helper functions
window.showSuccess = function (message: string, position: string = 'top-right') {
  createToast('success', message, position);
};

window.showError = function (message: string, position: string = 'top-right') {
  createToast('error', message, position);
};

window.showWarning = function (message: string, position: string = 'top-right') {
  createToast('warning', message, position);
};

window.showInfo = function (message: string, position: string = 'top-right') {
  createToast('info', message, position);
};

// Original showToast function - Sobrecarga para soportar ambas firmas
window.showToast = function (
  typeOrMessage: string,
  positionOrOptions?: string | { position?: string; variant?: string }
) {
  let type: string;
  let message: string;
  let position: string = 'top-right';

  // Determinar si es la forma antigua (type, position) o nueva (message, options)
  if (typeof positionOrOptions === 'object' && positionOrOptions !== null) {
    // Nueva forma: showToast(message, {position, variant})
    message = typeOrMessage;
    type = positionOrOptions.variant || 'info';
    position = positionOrOptions.position || 'top-right';
  } else {
    // Forma antigua: showToast(type, position)
    type = typeOrMessage;
    position = (positionOrOptions as string) || 'top-right';

    const defaultMessages: Record<string, string> = {
      success: 'Tu solicitud ha sido procesada correctamente.',
      error: 'No se pudo completar la operación. Intenta nuevamente.',
      warning: 'Por favor, revisa los datos antes de continuar.',
      info: 'Tienes una nueva notificación importante.',
    };

    message = defaultMessages[type] || 'Notificación';
  }

  createToast(type, message, position);
};

function createToast(type: string, message: string, position: string) {
  const positionClasses: Record<string, string> = {
    'top-left': 'sb-ui-alert--toast-top-left',
    'top-center': 'sb-ui-alert--toast-top-center',
    'top-right': '',
    'bottom-left': 'sb-ui-alert--toast-bottom-left',
    'bottom-center': 'sb-ui-alert--toast-bottom-center',
    'bottom-right': 'sb-ui-alert--toast-bottom-right',
  };

  const titles: Record<string, string> = {
    success: '¡Éxito!',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información',
  };

  const positionClass = positionClasses[position] || '';
  const title = titles[type] || 'Notificación';

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `sb-ui-alert sb-ui-alert--${type} sb-ui-alert--toast ${positionClass} sb-ui-alert--fade-in`;
  toast.setAttribute('role', 'alert');

  toast.innerHTML = `
    <div class="sb-ui-alert-icon"></div>
    <div class="sb-ui-alert-content">
      <div class="sb-ui-alert-title">${title}</div>
      <div class="sb-ui-alert-message">${message}</div>
    </div>
    <button class="sb-ui-alert-close" aria-label="Cerrar notificación">×</button>
  `;

  // Add to body
  document.body.appendChild(toast);

  // Close button handler
  const closeBtn = toast.querySelector('.sb-ui-alert-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      removeToastElement(toast);
    });
  }

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      removeToastElement(toast);
    }
  }, 5000);
}

function removeToastElement(toast: HTMLElement) {
  toast.classList.add('sb-ui-alert--fade-out');
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'padded', // Layout normal para la mayoría de componentes
    docs: {
      canvas: {
        sourceState: 'shown', // Mostrar código por defecto
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
  },
  globalTypes: {
    brand: {
      description: 'Brand theme',
      defaultValue: 'seguros-bolivar',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'white-label', title: 'White Label' },
          { value: 'jelpit', title: 'Jelpit' },
          { value: 'davivienda', title: 'Davivienda' },
          { value: 'cien-cuadras', title: 'Cien Cuadras' },
          { value: 'doctor-aki', title: 'Doctor Aki' },
          { value: 'seguros-bolivar', title: 'Seguros Bolívar' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const brand = context.globals.brand || 'jelpit';
      const theme = context.globals.theme || 'light';

      // Update HTML attributes
      document.documentElement.setAttribute('data-brand', brand);
      document.documentElement.setAttribute('data-theme', theme);

      // Cargar dinámicamente el bundle completo de la marca
      const brandStyleId = 'sb-ui-brand-styles';
      let styleLink = document.getElementById(brandStyleId) as HTMLLinkElement;

      if (!styleLink) {
        styleLink = document.createElement('link');
        styleLink.id = brandStyleId;
        styleLink.rel = 'stylesheet';
        document.head.appendChild(styleLink);
      }

      // Cargar desde publicDir configurado en main.ts
      // Usar ruta relativa sin '/' inicial para compatibilidad con GitHub Pages
      // Esto funciona tanto en /storybook/ como en /
      styleLink.href = `sb-ui-${brand}-${theme}.min.css`;

      // Renderizar la story
      const storyResult = story();

      // Para Web Components: asegurar que se actualicen cuando cambien los args
      if (context.args && typeof storyResult === 'object') {
        // Esperar a que el DOM se actualice
        setTimeout(() => {
          // Buscar todos los Web Components custom y forzar actualización
          const customElements = document.querySelectorAll(
            'sb-ui-datepicker, sb-ui-calendar, sb-ui-modal'
          );
          customElements.forEach((el: any) => {
            // Aplicar args manualmente si el componente no reacciona
            if (context.args && el) {
              Object.keys(context.args).forEach((key) => {
                const value = context.args[key];
                // Intentar setear como propiedad
                if (key in el) {
                  el[key] = value;
                }
                // También intentar como atributo
                if (typeof value === 'boolean') {
                  if (value) {
                    el.setAttribute(key, '');
                  } else {
                    el.removeAttribute(key);
                  }
                } else if (value !== null && value !== undefined) {
                  el.setAttribute(key, String(value));
                }
              });
              // Forzar actualización si el componente lo soporta
              if (typeof el.requestUpdate === 'function') {
                el.requestUpdate();
              }
            }
          });
        }, 10);
      }

      return storyResult;
    },
  ],
};

export default preview;
