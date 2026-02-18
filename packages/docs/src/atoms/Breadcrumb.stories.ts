import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Breadcrumb Component
 *
 * Componente de navegación breadcrumb del Seguros Bolivar UI Design System.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estructura** | | |
 * | Contenedor de breadcrumb | `.sb-ui-breadcrumb` | `<nav class="sb-ui-breadcrumb">...</nav>` |
 * | Lista de items | `.sb-ui-breadcrumb__list` | `<ol class="sb-ui-breadcrumb__list">...</ol>` |
 * | Item individual | `.sb-ui-breadcrumb__item` | `<li class="sb-ui-breadcrumb__item">...</li>` |
 * | Link de navegación | `.sb-ui-breadcrumb__link` | `<a class="sb-ui-breadcrumb__link" href="#">Home</a>` |
 * | Página actual | `.sb-ui-breadcrumb__current` | `<span class="sb-ui-breadcrumb__current">Current Page</span>` |
 * | Separador | `.sb-ui-breadcrumb__separator` | `<span class="sb-ui-breadcrumb__separator">/</span>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Accesibilidad**: Usa `<nav>` con `aria-label="breadcrumb"` y `<ol>` para la lista
 * - **Página actual**: Debe usar `aria-current="page"` para indicar la ubicación actual
 * - **Separadores**: Usan `/` por defecto pero se pueden personalizar con iconos
 * - **Responsive**: Se adapta automáticamente en dispositivos móviles
 * - **Truncado**: Los breadcrumbs largos pueden truncarse con elipsis
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de navegación breadcrumb que muestra la ruta de navegación actual y permite al usuario volver a páginas anteriores.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Breadcrumb Básico
 *
 * Breadcrumb estándar con 3 niveles de navegación. La página actual
 * no es un link y tiene estilo diferenciado.
 */
export const Basic: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Básico</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 3 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Seguros</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};

/**
 * ## Breadcrumb con Iconos
 *
 * Breadcrumb que utiliza iconos de Font Awesome como separadores
 * en lugar del slash tradicional.
 */
export const WithIcons: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Iconos</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Separadores con iconos de chevron
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">
                <i class="fa-solid fa-house"></i>
                Home
              </a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">Dashboard</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#users">Usuarios</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Perfil</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};

/**
 * ## Breadcrumb Largo
 *
 * Ejemplo de breadcrumb con múltiples niveles de navegación (5 niveles).
 * En mobile, se puede implementar truncado para ahorrar espacio.
 */
export const Long: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Largo</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 5 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#insurance">Seguros</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#auto">Autos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};

/**
 * ## Breadcrumb Compacto
 *
 * Versión compacta del breadcrumb ideal para headers o espacios reducidos.
 * Solo muestra el nivel anterior y el actual.
 */
export const Compact: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Compacto</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Versión simplificada para espacios reducidos
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">
                <i class="fa-solid fa-arrow-left"></i>
                Volver a Dashboard
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};

/**
 * ## Breadcrumb con Menú Dropdown
 *
 * Breadcrumb que incluye un menú dropdown para niveles intermedios,
 * útil cuando hay muchos niveles de navegación.
 */
export const WithDropdown: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .breadcrumb-dropdown {
        display: inline-block;
        position: relative;
      }
      .breadcrumb-dropdown__button {
        background: none;
        border: none;
        color: #038450;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        text-decoration: underline;
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Dropdown</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Menú colapsable para niveles intermedios
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <div class="breadcrumb-dropdown">
                <button class="breadcrumb-dropdown__button">... (3 niveles)</button>
              </div>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};

