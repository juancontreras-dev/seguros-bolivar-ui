import type { Preview } from '@storybook/web-components';

// IMPORTANTE: Ya no importamos tokens y atoms por separado
// El nuevo sistema usa bundles completos por marca que se cargan dinámicamente
// Ver decorator abajo que carga el CSS correcto según brand/theme seleccionado

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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

      // Cargar Font Awesome (solo una vez)
      const fontAwesomeId = 'sb-ui-fontawesome-styles';
      if (!document.getElementById(fontAwesomeId)) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.id = fontAwesomeId;
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href =
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        fontAwesomeLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontAwesomeLink);
      }

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

      return story();
    },
  ],
};

export default preview;
