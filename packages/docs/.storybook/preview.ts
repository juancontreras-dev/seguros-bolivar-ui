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
// TOAST HELPER FUNCTIONS - Expuestas automáticamente por @seguros-bolivar-ui/molecules
// ============================================================================
// NOTA: El paquete molecules ya expone showToast, showSuccess, showError, showWarning,
// showInfo, hideToast, hideAllToasts, removeToast, removeAllToasts en window.
// Ver packages/molecules/src/index.ts líneas 40-50
// ============================================================================
declare global {
  interface Window {
    showToast: (options: any) => string;
    showSuccess: (message: string, options?: any) => string;
    showError: (message: string, options?: any) => string;
    showWarning: (message: string, options?: any) => string;
    showInfo: (message: string, options?: any) => string;
    hideToast: (id: string) => boolean;
    hideAllToasts: () => void;
    removeToast: (id: string) => boolean;
    removeAllToasts: () => void;
    ToastManager: any;
  }
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
      const brand = context.globals.brand || 'seguros-bolivar';
      const theme = context.globals.theme || 'light';

      // Update HTML attributes (canvas iframe)
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

      // Nueva URL para forzar recarga al cambiar theme/brand (evita caché del tema anterior)
      const newHref = `sb-ui-${brand}-${theme}.min.css?t=${theme}`;
      if (styleLink.getAttribute('href') !== newHref) {
        styleLink.setAttribute('href', newHref);
      }

      // Estilos globales para tema dark: fondo y texto del canvas
      const themeStyleId = 'sb-ui-theme-canvas';
      let themeStyle = document.getElementById(themeStyleId) as HTMLStyleElement;
      if (!themeStyle) {
        themeStyle = document.createElement('style');
        themeStyle.id = themeStyleId;
        document.head.appendChild(themeStyle);
      }
      themeStyle.textContent =
        theme === 'dark'
          ? `[data-theme="dark"] { background: var(--sb-ui-color-grayscale-D400, #1a1a1a); color: var(--sb-ui-color-grayscale-L400, #fafafa); }
             [data-theme="dark"] body { background: inherit; color: inherit; min-height: 100vh; }`
          : '';

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
