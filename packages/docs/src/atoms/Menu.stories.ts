import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Menu Component
 *
 * Menú de navegación del Seguros Bolívar UI Design System. **Solo HTML + CSS**, sin JavaScript.
 * Submenús con `<details>` / `<summary>`.
 *
 * ## Variantes
 *
 * | Variante      | Clases | Uso                    |
 * |---------------|--------|------------------------|
 * | Vertical      | `sb-ui-menu` o `sb-ui-menu--vertical` | Sidebar (default) |
 * | Horizontal    | `sb-ui-menu sb-ui-menu--horizontal`   | Barra superior     |
 * | Colapsable    | `sb-ui-menu sb-ui-menu--collapsible`  | Solo iconos; checkbox para colapsar |
 *
 * ## Estructura
 *
 * - `sb-ui-menu__content` → `sb-ui-menu__section` → `sb-ui-menu__section-title` + `sb-ui-menu__list`
 * - Ítems: `sb-ui-menu__item`, `sb-ui-menu__item--active`
 * - Submenú: `sb-ui-menu__details` → `sb-ui-menu__trigger` + `sb-ui-menu__toggle` (chevron) + `sb-ui-menu__submenu` → `sb-ui-menu__submenu-item`
 * - Colapsar sin JS: checkbox `sb-ui-menu__collapse-input` (hermano anterior) + label `sb-ui-menu__collapse-label`
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Menú de navegación vertical, horizontal o colapsable. Solo HTML + CSS; submenús con details/summary. Colapsar con checkbox opcional.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Menú vertical (sidebar)
 *
 * Uso por defecto. Incluye secciones, ítems con iconos y submenús.
 */
export const Vertical: Story = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <div style="font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);">
      <nav class="sb-ui-menu" aria-label="Menú principal">
        <div class="sb-ui-menu__content">
          <div class="sb-ui-menu__section">
            <div class="sb-ui-menu__section-title">Inicio</div>
            <div class="sb-ui-menu__list">
              <a href="#inicio" class="sb-ui-menu__item sb-ui-menu__item--active">
                <i class="fas fa-house" aria-hidden="true"></i>
                <span>Inicio</span>
              </a>
              <details class="sb-ui-menu__details">
                <summary class="sb-ui-menu__trigger">
                  <i class="fas fa-rocket" aria-hidden="true"></i>
                  <span>Guía</span>
                  <i class="sb-ui-menu__toggle fas fa-chevron-right" aria-hidden="true"></i>
                </summary>
                <div class="sb-ui-menu__submenu">
                  <a href="#instalacion" class="sb-ui-menu__submenu-item">
                    <i class="fas fa-download" aria-hidden="true"></i>
                    <span>Instalación</span>
                  </a>
                  <a href="#uso" class="sb-ui-menu__submenu-item sb-ui-menu__submenu-item--active">
                    <i class="fas fa-code" aria-hidden="true"></i>
                    <span>Uso básico</span>
                  </a>
                </div>
              </details>
            </div>
          </div>
          <div class="sb-ui-menu__section">
            <div class="sb-ui-menu__section-title">Componentes</div>
            <div class="sb-ui-menu__list">
              <a href="#input" class="sb-ui-menu__item">
                <i class="fas fa-keyboard" aria-hidden="true"></i>
                <span>Input</span>
              </a>
              <a href="#button" class="sb-ui-menu__item">
                <i class="fas fa-square" aria-hidden="true"></i>
                <span>Botones</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
};

/**
 * ## Menú colapsable
 *
 * Checkbox para colapsar/expandir. En colapsado solo se muestran iconos; submenús dentro del mismo menú.
 */
export const Collapsable: Story = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <div style="font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);">
      <input type="checkbox" id="menu-collapse" class="sb-ui-menu__collapse-input" hidden aria-hidden="true" />
      <label for="menu-collapse" class="sb-ui-menu__collapse-label" aria-label="Colapsar o expandir menú">
        <i class="fas fa-bars" aria-hidden="true"></i>
        <span>Colapsar menú</span>
      </label>
      <nav class="sb-ui-menu sb-ui-menu--collapsible" aria-label="Menú colapsable">
        <div class="sb-ui-menu__content">
          <div class="sb-ui-menu__section">
            <div class="sb-ui-menu__section-title">Inicio</div>
            <div class="sb-ui-menu__list">
              <a href="#inicio" class="sb-ui-menu__item sb-ui-menu__item--active">
                <i class="fas fa-house" aria-hidden="true"></i>
                <span>Inicio</span>
              </a>
              <details class="sb-ui-menu__details">
                <summary class="sb-ui-menu__trigger">
                  <i class="fas fa-rocket" aria-hidden="true"></i>
                  <span>Guía</span>
                  <i class="sb-ui-menu__toggle fas fa-chevron-right" aria-hidden="true"></i>
                </summary>
                <div class="sb-ui-menu__submenu">
                  <a href="#instalacion" class="sb-ui-menu__submenu-item"><i class="fas fa-download" aria-hidden="true"></i><span>Instalación</span></a>
                  <a href="#uso" class="sb-ui-menu__submenu-item"><i class="fas fa-code" aria-hidden="true"></i><span>Uso básico</span></a>
                </div>
              </details>
            </div>
          </div>
          <div class="sb-ui-menu__section">
            <div class="sb-ui-menu__section-title">Opciones</div>
            <div class="sb-ui-menu__list">
              <a href="#input" class="sb-ui-menu__item">
                <i class="fas fa-keyboard" aria-hidden="true"></i>
                <span>Input</span>
              </a>
              <a href="#menu" class="sb-ui-menu__item">
                <i class="fas fa-bars" aria-hidden="true"></i>
                <span>Menu</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
};

/**
 * ## Menú horizontal
 *
 * Ítems en fila; submenús se abren en dropdown debajo del ítem.
 */
export const Horizontal: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <div style="font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);">
      <nav class="sb-ui-menu sb-ui-menu--horizontal" aria-label="Menú horizontal">
        <div class="sb-ui-menu__content">
          <div class="sb-ui-menu__section">
            <div class="sb-ui-menu__list">
              <a href="#inicio" class="sb-ui-menu__item sb-ui-menu__item--active">
                <i class="fas fa-house" aria-hidden="true"></i>
                <span>Inicio</span>
              </a>
              <a href="#input" class="sb-ui-menu__item">
                <i class="fas fa-keyboard" aria-hidden="true"></i>
                <span>Input</span>
              </a>
              <details class="sb-ui-menu__details">
                <summary class="sb-ui-menu__trigger">
                  <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
                  <span>Más</span>
                  <i class="sb-ui-menu__toggle fas fa-chevron-right" aria-hidden="true"></i>
                </summary>
                <div class="sb-ui-menu__submenu">
                  <a href="#a" class="sb-ui-menu__submenu-item"><span>Opción A</span></a>
                  <a href="#b" class="sb-ui-menu__submenu-item"><span>Opción B</span></a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
};
