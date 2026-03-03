import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Table Component
 *
 * Componente de tabla del Seguros Bolivar UI Design System con paginación y múltiples variantes.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes** | | |
 * | Tabla básica | `.sb-ui-table` | `<table class="sb-ui-table">...</table>` |
 * | Tabla con rayas | `.sb-ui-table--striped` | `<table class="sb-ui-table sb-ui-table--striped">...</table>` |
 * | Tabla con bordes | `.sb-ui-table--bordered` | `<table class="sb-ui-table sb-ui-table--bordered">...</table>` |
 * | Tabla con hover | `.sb-ui-table--hover` | `<table class="sb-ui-table sb-ui-table--hover">...</table>` |
 * | Tabla compacta | `.sb-ui-table--compact` | `<table class="sb-ui-table sb-ui-table--compact">...</table>` |
 * | **Paginación** | | |
 * | Contenedor de paginación | `.sb-ui-table-pagination` | `<div class="sb-ui-table-pagination">...</div>` |
 * | Botón de paginación | `.sb-ui-table-pagination__button` | `<button class="sb-ui-table-pagination__button">...</button>` |
 * | Botón activo | `.sb-ui-table-pagination__button--active` | `<button class="sb-ui-table-pagination__button sb-ui-table-pagination__button--active">1</button>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Responsive**: La tabla se adapta automáticamente a diferentes tamaños de pantalla
 * - **Accesibilidad**: Los checkboxes y inputs son completamente accesibles
 * - **Paginación**: Sistema de navegación con botones de primera, anterior, siguiente y última página
 * - **Hover**: Opción para resaltar filas al pasar el mouse
 * - **Striped**: Opción para alternar colores de fondo en las filas
 * - **Bordered**: Opción para mostrar bordes entre celdas
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de tabla versátil con múltiples variantes (striped, bordered, hover, compact) y sistema de paginación integrado.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Tabla Básica
 *
 * Tabla estándar con diseño limpio y minimalista. Incluye header con fondo gris claro
 * y filas con separadores sutiles.
 */
export const Basic: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450);">Tabla Básica</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
          Tabla estándar con diseño limpio y minimalista
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Admin</td>
                <td><span style="color: var(--sb-ui-color-primary-base, #038450); font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>María García</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
                <td><span style="color: var(--sb-ui-color-primary-base, #038450); font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carlos López</td>
                <td>carlos@example.com</td>
                <td>Editor</td>
                <td><span style="color: var(--sb-ui-color-grayscale-D100, #9b9b9b); font-weight: 600;">Inactivo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tabla Striped
 *
 * Tabla con filas alternadas en color gris claro para mejorar la legibilidad
 * en conjuntos de datos grandes.
 */
export const Striped: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450);">Tabla Striped</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
          Filas alternadas con fondo gris para mejor legibilidad
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laptop HP</td>
                <td>Electrónica</td>
                <td>$1,200</td>
                <td>15</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Mouse Logitech</td>
                <td>Accesorios</td>
                <td>$25</td>
                <td>50</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Teclado Mecánico</td>
                <td>Accesorios</td>
                <td>$80</td>
                <td>30</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Monitor Dell</td>
                <td>Electrónica</td>
                <td>$350</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tabla con Hover
 *
 * Tabla que resalta las filas al pasar el mouse, mejorando la experiencia
 * de usuario al revisar información.
 */
export const Hover: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450);">Tabla con Hover</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
          Las filas se resaltan al pasar el mouse
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Empresa ABC</td>
                <td>2024-01-15</td>
                <td>$5,000</td>
                <td><span style="color: var(--sb-ui-color-primary-base, #038450); font-weight: 600;">Pagado</span></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Corporación XYZ</td>
                <td>2024-01-16</td>
                <td>$3,200</td>
                <td><span style="color: var(--sb-ui-color-feedback-warning-base, #FFB020); font-weight: 600;">Pendiente</span></td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Sociedad LMN</td>
                <td>2024-01-17</td>
                <td>$1,800</td>
                <td><span style="color: var(--sb-ui-color-primary-base, #038450); font-weight: 600;">Pagado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tabla con Paginación
 *
 * Tabla completa con sistema de paginación integrado. Incluye botones de navegación
 * para primera, anterior, siguiente y última página.
 */
export const WithPagination: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450);">Tabla con Paginación</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
          Sistema de paginación completo con navegación
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Ana Martínez</td>
                <td>Ventas</td>
                <td>ana@segurosbolivar.com</td>
                <td>+57 300 123 4567</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pedro Rodríguez</td>
                <td>Marketing</td>
                <td>pedro@segurosbolivar.com</td>
                <td>+57 300 234 5678</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laura Gómez</td>
                <td>IT</td>
                <td>laura@segurosbolivar.com</td>
                <td>+57 300 345 6789</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Diego Torres</td>
                <td>RRHH</td>
                <td>diego@segurosbolivar.com</td>
                <td>+57 300 456 7890</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carmen Silva</td>
                <td>Finanzas</td>
                <td>carmen@segurosbolivar.com</td>
                <td>+57 300 567 8901</td>
              </tr>
            </tbody>
          </table>

          <div class="sb-ui-table-pagination">
            <button class="sb-ui-table-pagination__button" title="Primera página">
              <i class="fa-solid fa-angles-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Página anterior">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button sb-ui-table-pagination__button--active">
              1
            </button>
            <button class="sb-ui-table-pagination__button">2</button>
            <button class="sb-ui-table-pagination__button">3</button>
            <button class="sb-ui-table-pagination__button">4</button>
            <button class="sb-ui-table-pagination__button">5</button>
            <button class="sb-ui-table-pagination__button" title="Página siguiente">
              <i class="fa-solid fa-angle-right"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Última página">
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Tabla Combinada
 *
 * Ejemplo de tabla combinando múltiples variantes: striped, bordered, hover y compact.
 * Ideal para interfaces con espacio limitado.
 */
export const Combined: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450);">Tabla Combinada</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
          Striped + Bordered + Hover + Compact
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped sb-ui-table--bordered sb-ui-table--hover sb-ui-table--compact">
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unit.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRD-001</td>
                <td>Seguro Auto</td>
                <td>1</td>
                <td>$150/mes</td>
                <td>$1,800/año</td>
              </tr>
              <tr>
                <td>PRD-002</td>
                <td>Seguro Hogar</td>
                <td>1</td>
                <td>$80/mes</td>
                <td>$960/año</td>
              </tr>
              <tr>
                <td>PRD-003</td>
                <td>Seguro Vida</td>
                <td>2</td>
                <td>$50/mes</td>
                <td>$1,200/año</td>
              </tr>
              <tr>
                <td>PRD-004</td>
                <td>Seguro Salud</td>
                <td>1</td>
                <td>$120/mes</td>
                <td>$1,440/año</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align: right; font-weight: 700;">Total:</td>
                <td style="font-weight: 700; color: var(--sb-ui-color-primary-base, #038450);">$5,400/año</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};

