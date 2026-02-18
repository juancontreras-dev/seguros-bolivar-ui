import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Introduction/Welcome',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Seguros Bolívar UI Design System - Sistema de diseño empresarial multi-marca. Esta es la documentación en Storybook: para qué sirve y cómo usarla.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .welcome-page {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        display: flex;
        flex-direction: column;
        gap: clamp(2rem, 4vw, 3rem);
        padding: clamp(2rem, 4vw, 3rem);
        max-width: 1400px;
        margin: 0 auto;
      }
      .welcome-page section {
        margin-block-end: 0;
      }
      .welcome-page h2 {
        font-size: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
        font-weight: 700;
        color: var(--sb-ui-color-grayscale-black);
        margin-block-end: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .welcome-page h2 i { color: var(--sb-ui-color-primary-base); }
      .welcome-page p, .welcome-page li {
        font-size: 1.0625rem;
        line-height: 1.8;
        color: var(--sb-ui-color-grayscale-D100);
      }
      .welcome-page ul { padding-inline-start: 1.5rem; margin-block-end: 1.5rem; }
      .hero-section {
        background: linear-gradient(135deg, var(--sb-ui-color-primary-base) 0%, var(--sb-ui-color-primary-D100) 100%);
        border-radius: 16px;
        padding: clamp(2rem, 4vw, 3rem);
        color: white;
        position: relative;
        overflow: hidden;
      }
      .hero-section::before, .hero-section::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
      }
      .hero-section::before { top: -50px; right: -50px; width: 200px; height: 200px; }
      .hero-section::after { bottom: -30px; left: -30px; width: 150px; height: 150px; background: rgba(255,255,255,0.05); }
      .hero-section__content { position: relative; z-index: 1; }
      .hero-section h1 { font-size: clamp(1.75rem, 2rem + 1vw, 2.5rem); font-weight: 700; margin-block-end: 1rem; display: flex; align-items: center; gap: 0.75rem; }
      .hero-section__lead { font-size: 1.25rem; opacity: 0.95; margin-block-end: 1.5rem; max-inline-size: 700px; line-height: 1.6; color: white; }
      .hero-section p, .hero-section h1, .hero-section a { color: inherit; }
      .hero-section .sb-ui-button { margin-block-end: 0; }
      .hero-cta-wrap { max-inline-size: 20rem; }
      .storybook-purpose-card {
        padding: 1.5rem;
        background: var(--sb-ui-color-grayscale-white);
        border: 1px solid var(--sb-ui-color-grayscale-L300);
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      }
      .storybook-purpose-card h3 { font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; color: var(--sb-ui-color-primary-base); display: flex; align-items: center; gap: 0.5rem; }
      .storybook-purpose-card p { margin: 0; font-size: 0.9375rem; color: var(--sb-ui-color-grayscale-D100); line-height: 1.6; }
      .welcome-purpose-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem 2rem; margin-block-end: 0; }
    </style>

    <div class="welcome-page">
      <!-- Hero (alineado con description.html) -->
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-section__content">
          <h1 id="hero-title">
            <i class="fas fa-cubes" aria-hidden="true"></i>
            Seguros Bolívar UI
          </h1>
          <p class="hero-section__lead">
            El Design System oficial de Seguros Bolívar para construir interfaces digitales consistentes, accesibles y escalables.
          </p>
          <div class="hero-cta-wrap">
            <p style="margin: 0; font-size: 0.9375rem; opacity: 0.95;">
              Este <strong>Storybook</strong> es la documentación interactiva del design system: aquí puedes ver todos los componentes, sus variantes y el código de uso. Usa el <strong>sidebar</strong> para navegar y la <strong>toolbar</strong> (Brand / Theme) para cambiar de marca y tema en vivo.
            </p>
          </div>
        </div>
      </section>

      <!-- ¿Qué es? -->
      <section aria-labelledby="que-es-title">
        <h2 id="que-es-title"><i class="fas fa-circle-info" aria-hidden="true"></i> ¿Qué es Seguros Bolívar UI?</h2>
        <p>
          <strong>Seguros Bolívar UI</strong> es una librería transversal de componentes frontend diseñada para
          <strong>estandarizar, acelerar y gobernar</strong> la construcción de interfaces digitales de la compañía.
          Es el <strong>lenguaje visual y técnico común</strong> de todos los productos digitales de Seguros Bolívar.
        </p>
        <p>
          La librería ofrece <strong>dos tipos de componentes</strong>:
        </p>
        <ul>
          <li><strong>Componentes HTML + CSS:</strong> Clases CSS reutilizables con nomenclatura BEM, ideales para cualquier proyecto sin dependencias de JavaScript.</li>
          <li><strong>Web Components:</strong> Elementos personalizados con funcionalidad interactiva encapsulada (calendarios, datepickers, etc.) que funcionan en cualquier framework.</li>
        </ul>
        <p>
          Además incluye tokens de diseño y un sistema de temas (theming) configurable. Es <strong>independiente de framework</strong>
          (no está atada a Angular, React u otro), lo que la convierte en la base ideal para construir frontends corporativos consistentes.
        </p>
        <p>
          La librería es <strong>multimarca</strong>: soporta aliados actuales (<strong>Seguros Bolívar, Davivienda,
          Jelpit, Cien Cuadras y Doctor Aki</strong>) y futuros, permitiendo cambios globales desde un solo lugar
          mediante temas y tokens.
        </p>
      </section>

      <!-- Para qué sirve este Storybook -->
      <section aria-labelledby="storybook-purpose-title">
        <h2 id="storybook-purpose-title"><i class="fas fa-book" aria-hidden="true"></i> Para qué sirve este Storybook</h2>
        <p style="margin-block-end: 1.25rem;">
          <strong>Storybook</strong> es la herramienta de documentación y desarrollo del design system. Sirve para:
        </p>
        <div class="welcome-purpose-grid">
          <article class="storybook-purpose-card">
            <h3><i class="fas fa-eye" aria-hidden="true"></i> Ver componentes aislados</h3>
            <p>Cada componente se muestra en una página propia con todas sus variantes (tamaños, estados, tipos). Así puedes revisar el diseño sin depender de una aplicación completa.</p>
          </article>
          <article class="storybook-purpose-card">
            <h3><i class="fas fa-palette" aria-hidden="true"></i> Probar marcas y temas</h3>
            <p>En la <strong>toolbar</strong> (arriba) puedes cambiar <strong>Brand</strong> (Seguros Bolívar, Davivienda, Jelpit, etc.) y <strong>Theme</strong> (claro/oscuro). Todos los ejemplos se actualizan al instante.</p>
          </article>
          <article class="storybook-purpose-card">
            <h3><i class="fas fa-code" aria-hidden="true"></i> Copiar código de uso</h3>
            <p>Cada historia muestra el HTML (y a veces los args) que genera el ejemplo. Usa la pestaña <strong>Docs</strong> o el panel de código para copiar el markup y pegarlo en tu proyecto.</p>
          </article>
          <article class="storybook-purpose-card">
            <h3><i class="fas fa-puzzle-piece" aria-hidden="true"></i> Descubrir variantes y props</h3>
            <p>En muchos componentes hay un <strong>Playground</strong> con controles (select, checkbox, etc.) para cambiar variante, tamaño o estado y ver el resultado en vivo.</p>
          </article>
        </div>
        <p style="margin-block-start: 1.25rem; font-size: 0.9375rem; color: var(--sb-ui-color-grayscale-D100);">
          <strong>Navegación:</strong> En el <strong>sidebar izquierdo</strong> encontrarás <em>Introduction</em>, <em>Foundations</em> (colores, layout), <em>Atoms</em> (componentes CSS) y <em>Molecules</em> (Web Components). Haz clic en cualquier ítem para abrir su documentación.
        </p>
      </section>
    </div>
  `,
};
