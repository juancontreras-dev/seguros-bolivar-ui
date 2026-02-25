import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Sistema de tipografía del Seguros Bolívar UI Design System.

## Clases base (tamaño)

| Clase | Elemento | Tamaño (Seguros Bolívar) |
|-------|----------|--------------------------|
| \`.sb-ui-heading-h1\` | Título principal | 2.25rem (36px) |
| \`.sb-ui-heading-h2\` | Subtítulo | 2rem (32px) |
| \`.sb-ui-heading-h3\` | Sección | 1.75rem (28px) |
| \`.sb-ui-heading-h4\` | Sub-sección | 1.5rem (24px) |
| \`.sb-ui-heading-h5\` | Detalle | 1.25rem (20px) |
| \`.sb-ui-heading-h6\` | Nota | 1rem (16px) |
| \`.sb-ui-text-body\` | Párrafos | 1rem (16px) |
| \`.sb-ui-text-label\` | Etiquetas | 0.875rem (14px) |
| \`.sb-ui-text-caption\` | Notas auxiliares | 0.75rem (12px) |
| \`.sb-ui-text-button\` | Texto de botones | 1rem (16px) |

## Modificadores de color

\`sb-ui-text--primary\`, \`sb-ui-text--secondary\`, \`sb-ui-text--tertiary\`,
\`sb-ui-text--error\`, \`sb-ui-text--success\`, \`sb-ui-text--warning\`, \`sb-ui-text--info\`,
\`sb-ui-text--black\`, \`sb-ui-text--muted\`, \`sb-ui-text--subtle\`, \`sb-ui-text--white\`

## Modificadores de peso

\`sb-ui-text--light\` (300), \`sb-ui-text--regular\` (400), \`sb-ui-text--medium\` (500),
\`sb-ui-text--semibold\` (600), \`sb-ui-text--bold\` (700)

## Uso

\`\`\`html
<h1 class="sb-ui-heading-h1">Título</h1>
<h2 class="sb-ui-heading-h2 sb-ui-text--primary">Título verde</h2>
<p class="sb-ui-text-body sb-ui-text--muted sb-ui-text--light">Texto sutil</p>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Headings
 *
 * Escala de títulos H1 a H6 del Design System. Los tamaños provienen de los
 * tokens de la marca activa (`--sb-ui-typography-fontSize-h1` … `h6`).
 *
 * Usa el selector de marca en el toolbar para ver cómo cambian los tamaños.
 */
export const Headings: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Headings (H1–H6)</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Cada heading usa el token de tamaño correspondiente de la marca activa.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h1 — 2.25rem</code>
          <h1 class="sb-ui-heading-h1">Heading H1 — Título principal</h1>
        </div>

        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h2 — 2rem</code>
          <h2 class="sb-ui-heading-h2">Heading H2 — Subtítulo</h2>
        </div>

        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h3 — 1.75rem</code>
          <h3 class="sb-ui-heading-h3">Heading H3 — Sección</h3>
        </div>

        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h4 — 1.5rem</code>
          <h4 class="sb-ui-heading-h4">Heading H4 — Sub-sección</h4>
        </div>

        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h5 — 1.25rem</code>
          <h5 class="sb-ui-heading-h5">Heading H5 — Detalle</h5>
        </div>

        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; border-left: 4px solid var(--sb-ui-color-primary-base);">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-heading-h6 — 1rem</code>
          <h6 class="sb-ui-heading-h6">Heading H6 — Nota</h6>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Textos
 *
 * Clases para contenido de cuerpo, etiquetas, notas auxiliares y texto de botones.
 *
 * - **body**: Párrafos y contenido principal (1rem)
 * - **label**: Etiquetas de formulario (0.875rem, semibold)
 * - **caption**: Notas y texto auxiliar (0.75rem)
 * - **button**: Texto para botones (1rem, medium)
 */
export const TextVariants: Story = {
  name: 'Textos (Body, Label, Caption)',
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Variantes de texto</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Clases para diferentes contextos de texto dentro de la interfaz.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-text-body — 1rem, regular (400)</code>
          <p class="sb-ui-text-body">
            Este es el texto de cuerpo estándar del Design System. Úsalo para párrafos, descripciones y contenido principal de cualquier página.
          </p>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-text-label — 0.875rem, semibold (600)</code>
          <span class="sb-ui-text-label">Etiqueta de formulario</span>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-text-caption — 0.75rem, regular (400)</code>
          <span class="sb-ui-text-caption">Texto auxiliar, notas al pie, timestamps</span>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">.sb-ui-text-button — 1rem, medium (500)</code>
          <span class="sb-ui-text-button">Texto para botones y acciones</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Colores de texto
 *
 * Modificadores de color composables con cualquier clase base de tipografía.
 * Los colores provienen de los tokens de la marca activa.
 *
 * ### Uso
 * ```html
 * <h2 class="sb-ui-heading-h2 sb-ui-text--primary">Título verde</h2>
 * <p class="sb-ui-text-body sb-ui-text--error">Mensaje de error</p>
 * ```
 */
export const TextColors: Story = {
  name: 'Colores de texto',
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Colores de texto</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Usa el selector de marca en el toolbar para ver cómo cambian los colores.
      </p>

      <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Brand colors</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--primary</code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--primary">Primary base</h3>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--primary-dark</code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--primary-dark">Primary dark</h3>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--secondary</code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--secondary">Secondary base</h3>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--secondary-dark</code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--secondary-dark">Secondary dark</h3>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--tertiary</code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--tertiary">Tertiary base</h3>
        </div>
      </div>

      <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Feedback colors</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--error</code>
          <p class="sb-ui-text-body sb-ui-text--error">Mensaje de error</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--success</code>
          <p class="sb-ui-text-body sb-ui-text--success">Operación exitosa</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--warning</code>
          <p class="sb-ui-text-body sb-ui-text--warning">Advertencia importante</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--info</code>
          <p class="sb-ui-text-body sb-ui-text--info">Nota informativa</p>
        </div>
      </div>

      <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Escala de grises</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--black</code>
          <p class="sb-ui-text-body sb-ui-text--black">Texto negro (default)</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--muted</code>
          <p class="sb-ui-text-body sb-ui-text--muted">Texto muted (gris oscuro)</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base);">.sb-ui-text--subtle</code>
          <p class="sb-ui-text-body sb-ui-text--subtle">Texto subtle (gris claro)</p>
        </div>
        <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-D300); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-L200);">.sb-ui-text--white</code>
          <p class="sb-ui-text-body sb-ui-text--white">Texto blanco (sobre fondo oscuro)</p>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Pesos de fuente
 *
 * Modificadores de font-weight composables con cualquier clase base.
 *
 * | Clase | Peso |
 * |-------|------|
 * | `.sb-ui-text--light` | 300 |
 * | `.sb-ui-text--regular` | 400 |
 * | `.sb-ui-text--medium` | 500 |
 * | `.sb-ui-text--semibold` | 600 |
 * | `.sb-ui-text--bold` | 700 |
 */
export const FontWeights: Story = {
  name: 'Pesos de fuente',
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Pesos de fuente</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Modificadores para ajustar la jerarquía visual dentro de un mismo tamaño de texto.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${[
          { cls: 'sb-ui-text--light', label: 'Light (300)', desc: 'Textos decorativos, subtítulos suaves' },
          { cls: 'sb-ui-text--regular', label: 'Regular (400)', desc: 'Texto de cuerpo por defecto' },
          { cls: 'sb-ui-text--medium', label: 'Medium (500)', desc: 'Énfasis moderado, botones' },
          { cls: 'sb-ui-text--semibold', label: 'Semibold (600)', desc: 'Labels, subtítulos' },
          { cls: 'sb-ui-text--bold', label: 'Bold (700)', desc: 'Headings, énfasis fuerte' },
        ].map(
          ({ cls, label, desc }) => html`
            <div style="padding: 1rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px; display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
              <code style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-base); min-width: 180px;">.${cls}</code>
              <span class="sb-ui-text-body ${cls}" style="font-size: 1.25rem; flex: 1;">${label}</span>
              <span style="font-size: 0.8rem; color: var(--sb-ui-color-grayscale-D100);">${desc}</span>
            </div>
          `
        )}
      </div>
    </div>
  `,
};

/**
 * ## Combinaciones
 *
 * Las clases son composables: combina tamaño + color + peso para lograr cualquier
 * estilo tipográfico sin escribir CSS.
 *
 * ```html
 * <h2 class="sb-ui-heading-h2 sb-ui-text--primary sb-ui-text--bold">
 *   Título destacado
 * </h2>
 * ```
 */
export const Combinations: Story = {
  name: 'Combinaciones',
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Combinaciones</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Tamaño + color + peso en una sola línea de clases, sin CSS adicional.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-heading-h2 .sb-ui-text--primary .sb-ui-text--bold
          </code>
          <h2 class="sb-ui-heading-h2 sb-ui-text--primary sb-ui-text--bold">H2 Primary Bold</h2>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-heading-h3 .sb-ui-text--secondary .sb-ui-text--medium
          </code>
          <h3 class="sb-ui-heading-h3 sb-ui-text--secondary sb-ui-text--medium">H3 Secondary Medium</h3>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-heading-h4 .sb-ui-text--error .sb-ui-text--semibold
          </code>
          <h4 class="sb-ui-heading-h4 sb-ui-text--error sb-ui-text--semibold">H4 Error Semibold</h4>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-text-body .sb-ui-text--primary .sb-ui-text--medium
          </code>
          <p class="sb-ui-text-body sb-ui-text--primary sb-ui-text--medium">Body Primary Medium — contenido con énfasis en color primario</p>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-text-label .sb-ui-text--secondary .sb-ui-text--bold
          </code>
          <span class="sb-ui-text-label sb-ui-text--secondary sb-ui-text--bold">Label Secondary Bold</span>
        </div>

        <div style="padding: 1.25rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 8px;">
          <code style="font-size: 0.7rem; color: var(--sb-ui-color-grayscale-base); display: block; margin-bottom: 0.5rem;">
            .sb-ui-text-caption .sb-ui-text--subtle .sb-ui-text--regular
          </code>
          <span class="sb-ui-text-caption sb-ui-text--subtle sb-ui-text--regular">Caption subtle — nota auxiliar discreta</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Ejemplo práctico
 *
 * Tarjeta de datos construida usando únicamente clases de la librería:
 * grid para layout, tipografía para textos, colores y pesos como modificadores.
 */
export const PracticalExample: Story = {
  name: 'Ejemplo práctico',
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Ejemplo práctico</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Tarjeta de datos usando clases de tipografía + grid del Design System, sin CSS adicional.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Card 1: Datos del asegurado -->
        <div style="padding: 1.5rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 12px; border: 1px solid var(--sb-ui-color-grayscale-L200);">
          <div class="sb-ui-grid sb-ui-grid-cols-1 sb-ui-gap-2">
            <h3 class="sb-ui-heading-h4 sb-ui-text--primary">Datos del asegurado</h3>
            <span class="sb-ui-text-label">Número de documento</span>
            <p class="sb-ui-text-body sb-ui-text--bold">1.023.456.789</p>
            <span class="sb-ui-text-label">Nombre completo</span>
            <p class="sb-ui-text-body">María Alejandra Rodríguez</p>
            <span class="sb-ui-text-label">Estado de la póliza</span>
            <p class="sb-ui-text-body sb-ui-text--success sb-ui-text--semibold">Activa</p>
            <span class="sb-ui-text-caption sb-ui-text--subtle">Actualizado el 27 de enero de 2026</span>
          </div>
        </div>

        <!-- Card 2: Resumen de pago -->
        <div style="padding: 1.5rem; background: var(--sb-ui-color-grayscale-L400); border-radius: 12px; border: 1px solid var(--sb-ui-color-grayscale-L200);">
          <div class="sb-ui-grid sb-ui-grid-cols-1 sb-ui-gap-2">
            <h3 class="sb-ui-heading-h4 sb-ui-text--primary">Resumen de pago</h3>
            <span class="sb-ui-text-label">Prima mensual</span>
            <p class="sb-ui-heading-h3 sb-ui-text--bold">$245.000</p>
            <span class="sb-ui-text-label">Próximo vencimiento</span>
            <p class="sb-ui-text-body sb-ui-text--warning sb-ui-text--semibold">15 de febrero de 2026</p>
            <span class="sb-ui-text-caption sb-ui-text--muted">Recuerda pagar antes de la fecha límite</span>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Todos los estilos
 *
 * Vista completa de todas las clases de tipografía disponibles, agrupadas
 * por categoría. Usa el selector de marca para ver cómo cambian.
 */
export const AllTypography: Story = {
  name: 'Referencia completa',
  render: () => html`
    <div style="padding: 2rem;">
      <div style="
        padding: 1.5rem;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--sb-ui-color-primary-base) 0%, var(--sb-ui-color-secondary-base) 100%);
        color: white;
        border-radius: 12px;
      ">
        <h2 style="margin: 0 0 0.5rem 0;" class="sb-ui-text--white">Todas las clases de tipografía</h2>
        <p style="margin: 0; opacity: 0.95;">
          Referencia visual completa. Usa el selector de marca en el toolbar para ver cómo
          cambian los estilos automáticamente por marca.
        </p>
      </div>

      <!-- Headings -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Headings</h3>
        <h1 class="sb-ui-heading-h1">sb-ui-heading-h1</h1>
        <h2 class="sb-ui-heading-h2">sb-ui-heading-h2</h2>
        <h3 class="sb-ui-heading-h3">sb-ui-heading-h3</h3>
        <h4 class="sb-ui-heading-h4">sb-ui-heading-h4</h4>
        <h5 class="sb-ui-heading-h5">sb-ui-heading-h5</h5>
        <h6 class="sb-ui-heading-h6">sb-ui-heading-h6</h6>
      </div>

      <!-- Text variants -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Textos</h3>
        <p class="sb-ui-text-body" style="margin-bottom: 0.5rem;">sb-ui-text-body — Párrafo estándar</p>
        <span class="sb-ui-text-label" style="display: block; margin-bottom: 0.5rem;">sb-ui-text-label — Etiqueta</span>
        <span class="sb-ui-text-caption" style="display: block; margin-bottom: 0.5rem;">sb-ui-text-caption — Nota auxiliar</span>
        <span class="sb-ui-text-button" style="display: block;">sb-ui-text-button — Texto de botón</span>
      </div>

      <!-- Colors -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Colores</h3>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <p class="sb-ui-text-body sb-ui-text--primary">sb-ui-text--primary</p>
          <p class="sb-ui-text-body sb-ui-text--primary-dark">sb-ui-text--primary-dark</p>
          <p class="sb-ui-text-body sb-ui-text--secondary">sb-ui-text--secondary</p>
          <p class="sb-ui-text-body sb-ui-text--secondary-dark">sb-ui-text--secondary-dark</p>
          <p class="sb-ui-text-body sb-ui-text--tertiary">sb-ui-text--tertiary</p>
          <p class="sb-ui-text-body sb-ui-text--error">sb-ui-text--error</p>
          <p class="sb-ui-text-body sb-ui-text--success">sb-ui-text--success</p>
          <p class="sb-ui-text-body sb-ui-text--warning">sb-ui-text--warning</p>
          <p class="sb-ui-text-body sb-ui-text--info">sb-ui-text--info</p>
          <p class="sb-ui-text-body sb-ui-text--black">sb-ui-text--black</p>
          <p class="sb-ui-text-body sb-ui-text--muted">sb-ui-text--muted</p>
          <p class="sb-ui-text-body sb-ui-text--subtle">sb-ui-text--subtle</p>
          <div style="background: var(--sb-ui-color-grayscale-D300); padding: 0.5rem; border-radius: 4px; display: inline-block;">
            <p class="sb-ui-text-body sb-ui-text--white">sb-ui-text--white</p>
          </div>
        </div>
      </div>

      <!-- Weights -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">Pesos</h3>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <p class="sb-ui-text-body sb-ui-text--light">sb-ui-text--light (300)</p>
          <p class="sb-ui-text-body sb-ui-text--regular">sb-ui-text--regular (400)</p>
          <p class="sb-ui-text-body sb-ui-text--medium">sb-ui-text--medium (500)</p>
          <p class="sb-ui-text-body sb-ui-text--semibold">sb-ui-text--semibold (600)</p>
          <p class="sb-ui-text-body sb-ui-text--bold">sb-ui-text--bold (700)</p>
        </div>
      </div>
    </div>
  `,
};
