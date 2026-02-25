import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Card Component
 *
 * Componente Card del Seguros Bolívar UI Design System para presentar contenido con imagen, texto, precio, botones y footer.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS |
 * |-----------|-----------|
 * | **Contenedor** | |
 * | Card base | `.sb-ui-card` |
 * | Body wrapper (horizontal) | `.sb-ui-card__body` |
 * | **Imagen** | |
 * | Wrapper de imagen | `.sb-ui-card__image` |
 * | Elemento img | `.sb-ui-card__img` |
 * | Badge sobre imagen | `.sb-ui-card__badge` |
 * | Badge success | `.sb-ui-card__badge--success` |
 * | Badge warning | `.sb-ui-card__badge--warning` |
 * | Badge error | `.sb-ui-card__badge--error` |
 * | Badge info | `.sb-ui-card__badge--info` |
 * | Botón flotante (FAB) | `.sb-ui-card__fab` |
 * | **Contenido** | |
 * | Wrapper de contenido | `.sb-ui-card__content` |
 * | Título (16px, bold) | `.sb-ui-card__title` |
 * | Subtítulo (14px, bold) | `.sb-ui-card__subtitle` |
 * | Descripción (14px) | `.sb-ui-card__description` |
 * | Observación (12px) | `.sb-ui-card__observation` |
 * | Wrapper de precio | `.sb-ui-card__price` |
 * | Label del precio | `.sb-ui-card__price-label` |
 * | Valor del precio | `.sb-ui-card__price-value` |
 * | **Acciones** | |
 * | Contenedor de botones | `.sb-ui-card__actions` |
 * | **Footer** | |
 * | Footer con ítems | `.sb-ui-card__footer` |
 * | Ítem del footer | `.sb-ui-card__footer-item` |
 * | **Orientación** | |
 * | Horizontal | `.sb-ui-card--horizontal` |
 * | Imagen a la izquierda | `.sb-ui-card--img-left` |
 * | Imagen a la derecha | `.sb-ui-card--img-right` |
 * | **Modificadores** | |
 * | Botones en fila | `.sb-ui-card--actions-horizontal` |
 * | Sombra elevada | `.sb-ui-card--elevated` |
 * | Solo borde | `.sb-ui-card--outlined` |
 * | Ancho completo | `.sb-ui-card--block` |
 * | **Estados** | |
 * | Interactivo (hover) | `.sb-ui-card--interactive` |
 * | Deshabilitado | `.sb-ui-card--disabled` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Vertical (default)**: Imagen arriba, contenido debajo, botones apilados.
 * - **Horizontal**: Usa `.sb-ui-card__body` para agrupar contenido + acciones en una fila junto a la imagen.
 * - **Badges**: Se posicionan automáticamente sobre la imagen con `position: absolute`.
 * - **FAB**: Botón circular flotante en la esquina superior derecha de la imagen.
 * - **Tokens**: Todos los colores, tipografía y sombras provienen de las variables del design system.
 *
 * ## 🎯 Estructura Completa
 *
 * ```html
 * <!-- Vertical -->
 * <article class="sb-ui-card">
 *   <div class="sb-ui-card__image">
 *     <img class="sb-ui-card__img" src="..." alt="..." />
 *     <span class="sb-ui-card__badge sb-ui-card__badge--success">Tag</span>
 *     <button class="sb-ui-card__fab"><i class="fa-solid fa-plus"></i></button>
 *   </div>
 *   <div class="sb-ui-card__content">
 *     <h3 class="sb-ui-card__title">Título</h3>
 *     <p class="sb-ui-card__subtitle">Subtítulo</p>
 *     <p class="sb-ui-card__description">Descripción</p>
 *     <p class="sb-ui-card__observation">Observación</p>
 *     <div class="sb-ui-card__price">
 *       <span class="sb-ui-card__price-label">Desde:</span>
 *       <span class="sb-ui-card__price-value">$120.000</span>
 *     </div>
 *   </div>
 *   <div class="sb-ui-card__actions">
 *     <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Más info</button>
 *     <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Comprar</button>
 *   </div>
 *   <div class="sb-ui-card__footer">
 *     <div class="sb-ui-card__footer-item"><i class="fa-solid fa-calendar"></i><span>Ene 2026</span></div>
 *     <div class="sb-ui-card__footer-item"><i class="fa-solid fa-clock"></i><span>30 días</span></div>
 *   </div>
 * </article>
 *
 * <!-- Horizontal (usar __body) -->
 * <article class="sb-ui-card sb-ui-card--horizontal sb-ui-card--img-left">
 *   <div class="sb-ui-card__image">...</div>
 *   <div class="sb-ui-card__body">
 *     <div class="sb-ui-card__content">...</div>
 *     <div class="sb-ui-card__actions">...</div>
 *   </div>
 * </article>
 * ```
 */
const meta: Meta = {
  title: 'Componentes HTML y CSS/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente Card para presentar contenido con imagen, texto, precio, botones y footer. Soporta orientación vertical/horizontal, badges, FAB y múltiples modificadores.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal-left', 'horizontal-right'],
      description: 'Orientación y posición de imagen',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    actionsLayout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Disposición de los botones',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    styleVariant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Estilo visual de la card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    badgeVariant: {
      control: 'select',
      options: ['none', 'success', 'warning', 'error', 'info'],
      description: 'Variante del badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
    },
    showImage: {
      control: 'boolean',
      description: 'Mostrar imagen',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showFooter: {
      control: 'boolean',
      description: 'Mostrar footer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showFab: {
      control: 'boolean',
      description: 'Mostrar botón flotante (FAB)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    interactive: {
      control: 'boolean',
      description: 'Habilitar efecto hover interactivo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      control: 'text',
      description: 'Título de la card',
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo de la card',
    },
    description: {
      control: 'text',
      description: 'Texto descriptivo',
    },
    price: {
      control: 'text',
      description: 'Valor del precio',
    },
  },
};

export default meta;
type Story = StoryObj;

const IMG_URL = 'https://picsum.photos/seed/sb-card/400/250';

function renderCard(args: Record<string, unknown>) {
  const isHorizontal = (args.orientation as string) !== 'vertical';
  const cardClasses = [
    'sb-ui-card',
    isHorizontal ? 'sb-ui-card--horizontal' : '',
    args.orientation === 'horizontal-left' ? 'sb-ui-card--img-left' : '',
    args.orientation === 'horizontal-right' ? 'sb-ui-card--img-right' : '',
    args.actionsLayout === 'horizontal' ? 'sb-ui-card--actions-horizontal' : '',
    args.styleVariant !== 'default' ? `sb-ui-card--${args.styleVariant}` : '',
    args.interactive ? 'sb-ui-card--interactive' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const imageBlock =
    args.showImage
      ? html`
          <div class="sb-ui-card__image">
            <img class="sb-ui-card__img" src="${IMG_URL}" alt="Imagen de ejemplo" />
            ${(args.badgeVariant as string) !== 'none'
              ? html`<span class="sb-ui-card__badge sb-ui-card__badge--${args.badgeVariant}">
                  <i class="fa-solid fa-tag"></i> ${(args.badgeVariant as string).charAt(0).toUpperCase() + (args.badgeVariant as string).slice(1)}
                </span>`
              : ''}
            ${args.showFab
              ? html`<button class="sb-ui-card__fab" aria-label="Agregar"><i class="fa-solid fa-plus"></i></button>`
              : ''}
          </div>
        `
      : '';

  const contentBlock = html`
    <div class="sb-ui-card__content">
      <h3 class="sb-ui-card__title">${args.title}</h3>
      <p class="sb-ui-card__subtitle">${args.subtitle}</p>
      <p class="sb-ui-card__description">${args.description}</p>
      <p class="sb-ui-card__observation">*Aplican términos y condiciones</p>
      <div class="sb-ui-card__price">
        <span class="sb-ui-card__price-label">Desde:</span>
        <span class="sb-ui-card__price-value">${args.price}</span>
      </div>
    </div>
  `;

  const actionsBlock = html`
    <div class="sb-ui-card__actions">
      <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Más info</button>
      <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Comprar</button>
    </div>
  `;

  const footerBlock = args.showFooter
    ? html`
        <div class="sb-ui-card__footer">
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-calendar"></i><span>Ene 2026</span></div>
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-clock"></i><span>30 días</span></div>
        </div>
      `
    : '';

  if (isHorizontal) {
    return html`
      <div style="max-width: 700px;">
        <article class="${cardClasses}">
          ${imageBlock}
          <div class="sb-ui-card__body">
            ${contentBlock}
            ${actionsBlock}
          </div>
          ${footerBlock}
        </article>
      </div>
    `;
  }

  return html`
    <div style="max-width: 340px;">
      <article class="${cardClasses}">
        ${imageBlock}
        ${contentBlock}
        ${actionsBlock}
        ${footerBlock}
      </article>
    </div>
  `;
}

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las variantes de la Card usando los controles interactivos.
 */
export const Playground: Story = {
  args: {
    orientation: 'vertical',
    actionsLayout: 'vertical',
    styleVariant: 'default',
    badgeVariant: 'success',
    showImage: true,
    showFooter: true,
    showFab: false,
    interactive: false,
    title: 'Seguro de Hogar',
    subtitle: 'Protege lo que más importa',
    description: 'Cobertura integral para tu hogar y familia.',
    price: '$120.000',
  },
  render: (args) => renderCard(args),
};

/**
 * ## Vertical con imagen
 *
 * Variante por defecto con imagen arriba, contenido y botones apilados verticalmente.
 */
export const VerticalConImagen: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 900px;">
      <article class="sb-ui-card">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/v1/400/250" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--success"><i class="fa-solid fa-tag"></i> Success</span>
          <button class="sb-ui-card__fab" aria-label="Agregar"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Seguro de Hogar</h3>
          <p class="sb-ui-card__subtitle">Protección integral</p>
          <p class="sb-ui-card__description">Cobertura completa para tu hogar y familia.</p>
          <p class="sb-ui-card__observation">*Aplican términos y condiciones</p>
          <div class="sb-ui-card__price">
            <span class="sb-ui-card__price-label">Desde:</span>
            <span class="sb-ui-card__price-value">$120.000</span>
          </div>
        </div>
        <div class="sb-ui-card__actions">
          <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Más info</button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Comprar</button>
        </div>
        <div class="sb-ui-card__footer">
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-calendar"></i><span>Ene 2026</span></div>
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-clock"></i><span>30 días</span></div>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--actions-horizontal">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/v2/400/250" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--warning"><i class="fa-solid fa-bolt"></i> Popular</span>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Seguro de Auto</h3>
          <p class="sb-ui-card__subtitle">Protección vehicular</p>
          <p class="sb-ui-card__description">Tu vehículo protegido con cobertura integral.</p>
          <p class="sb-ui-card__observation">*Consulta coberturas</p>
          <div class="sb-ui-card__price">
            <span class="sb-ui-card__price-label">Desde:</span>
            <span class="sb-ui-card__price-value">$85.000</span>
          </div>
        </div>
        <div class="sb-ui-card__actions">
          <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Detalles</button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Cotizar</button>
        </div>
        <div class="sb-ui-card__footer">
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-shield-halved"></i><span>Premium</span></div>
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-star"></i><span>4.8/5</span></div>
        </div>
      </article>
    </div>
  `,
};

/**
 * ## Vertical sin imagen
 *
 * Card sin sección de imagen. El contenido comienza directamente.
 */
export const VerticalSinImagen: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 700px;">
      <article class="sb-ui-card">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Plan Básico</h3>
          <p class="sb-ui-card__subtitle">Seguro de vida</p>
          <p class="sb-ui-card__description">Protección esencial para ti y tu familia.</p>
          <p class="sb-ui-card__observation">*Sujeto a condiciones de póliza</p>
          <div class="sb-ui-card__price">
            <span class="sb-ui-card__price-label">Desde:</span>
            <span class="sb-ui-card__price-value">$45.000</span>
          </div>
        </div>
        <div class="sb-ui-card__actions">
          <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Ver detalle</button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Cotizar</button>
        </div>
        <div class="sb-ui-card__footer">
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-heart-pulse"></i><span>Vida</span></div>
          <div class="sb-ui-card__footer-item"><i class="fa-solid fa-users"></i><span>Familiar</span></div>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--actions-horizontal">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Plan Premium</h3>
          <p class="sb-ui-card__subtitle">Seguro todo riesgo</p>
          <p class="sb-ui-card__description">Cobertura completa para auto, hogar y vida.</p>
          <p class="sb-ui-card__observation">*Descuento 20% primer año</p>
          <div class="sb-ui-card__price">
            <span class="sb-ui-card__price-label">Desde:</span>
            <span class="sb-ui-card__price-value">$250.000</span>
          </div>
        </div>
        <div class="sb-ui-card__actions">
          <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Comparar</button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Contratar</button>
        </div>
      </article>
    </div>
  `,
};

/**
 * ## Horizontal — Imagen a la izquierda
 *
 * Usa `sb-ui-card--horizontal sb-ui-card--img-left` con `sb-ui-card__body` para agrupar contenido y acciones.
 */
export const HorizontalImagenIzquierda: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 700px;">
      <article class="sb-ui-card sb-ui-card--horizontal sb-ui-card--img-left">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/h1/400/300" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--info"><i class="fa-solid fa-circle-info"></i> Nuevo</span>
        </div>
        <div class="sb-ui-card__body">
          <div class="sb-ui-card__content">
            <h3 class="sb-ui-card__title">Seguro de Auto</h3>
            <p class="sb-ui-card__subtitle">Protección vehicular</p>
            <p class="sb-ui-card__description">Tu vehículo protegido con cobertura integral, asistencia 24/7.</p>
            <p class="sb-ui-card__observation">*Incluye grúa gratuita</p>
            <div class="sb-ui-card__price">
              <span class="sb-ui-card__price-label">Desde:</span>
              <span class="sb-ui-card__price-value">$180.000</span>
            </div>
          </div>
          <div class="sb-ui-card__actions">
            <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Ver planes</button>
            <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Cotizar</button>
          </div>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--horizontal sb-ui-card--img-left sb-ui-card--actions-horizontal">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/h2/400/300" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--error"><i class="fa-solid fa-fire"></i> Oferta</span>
          <button class="sb-ui-card__fab" aria-label="Favorito"><i class="fa-solid fa-heart"></i></button>
        </div>
        <div class="sb-ui-card__body">
          <div class="sb-ui-card__content">
            <h3 class="sb-ui-card__title">Seguro de Viaje</h3>
            <p class="sb-ui-card__subtitle">Viaja sin preocupaciones</p>
            <p class="sb-ui-card__description">Cobertura médica internacional y pérdida de equipaje.</p>
            <div class="sb-ui-card__price">
              <span class="sb-ui-card__price-label">Desde:</span>
              <span class="sb-ui-card__price-value">$65.000</span>
            </div>
          </div>
          <div class="sb-ui-card__actions">
            <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Detalles</button>
            <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Comprar</button>
          </div>
        </div>
      </article>
    </div>
  `,
};

/**
 * ## Horizontal — Imagen a la derecha
 *
 * Usa `sb-ui-card--horizontal sb-ui-card--img-right` para posicionar la imagen al lado derecho.
 */
export const HorizontalImagenDerecha: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 700px;">
      <article class="sb-ui-card sb-ui-card--horizontal sb-ui-card--img-right">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/h3/400/300" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--success"><i class="fa-solid fa-check"></i> Activo</span>
        </div>
        <div class="sb-ui-card__body">
          <div class="sb-ui-card__content">
            <h3 class="sb-ui-card__title">Seguro de Mascotas</h3>
            <p class="sb-ui-card__subtitle">Tu mejor amigo protegido</p>
            <p class="sb-ui-card__description">Cobertura veterinaria, vacunas y emergencias.</p>
            <p class="sb-ui-card__observation">*Perros y gatos de 3 meses a 8 años</p>
            <div class="sb-ui-card__price">
              <span class="sb-ui-card__price-label">Desde:</span>
              <span class="sb-ui-card__price-value">$35.000</span>
            </div>
          </div>
          <div class="sb-ui-card__actions">
            <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Info</button>
            <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Contratar</button>
          </div>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--horizontal sb-ui-card--img-right sb-ui-card--actions-horizontal">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/h4/400/300" alt="Ejemplo" />
        </div>
        <div class="sb-ui-card__body">
          <div class="sb-ui-card__content">
            <h3 class="sb-ui-card__title">Seguro Empresarial</h3>
            <p class="sb-ui-card__subtitle">Protección para tu negocio</p>
            <p class="sb-ui-card__description">Coberturas a medida para PYMES.</p>
            <div class="sb-ui-card__price">
              <span class="sb-ui-card__price-label">Desde:</span>
              <span class="sb-ui-card__price-value">$320.000</span>
            </div>
          </div>
          <div class="sb-ui-card__actions">
            <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Comparar</button>
            <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Asesoría</button>
          </div>
        </div>
      </article>
    </div>
  `,
};

/**
 * ## Variantes de Badge
 *
 * Los badges soportan 4 variantes: `--success`, `--warning`, `--error`, `--info`.
 */
export const BadgeVariantes: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; max-width: 1000px;">
      <article class="sb-ui-card">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/b1/400/200" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--success"><i class="fa-solid fa-check-circle"></i> Success</span>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Badge Success</h3>
          <p class="sb-ui-card__description">Fondo verde con texto oscuro.</p>
        </div>
      </article>

      <article class="sb-ui-card">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/b2/400/200" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--warning"><i class="fa-solid fa-bolt"></i> Warning</span>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Badge Warning</h3>
          <p class="sb-ui-card__description">Fondo amarillo con texto oscuro.</p>
        </div>
      </article>

      <article class="sb-ui-card">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/b3/400/200" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--error"><i class="fa-solid fa-exclamation-triangle"></i> Error</span>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Badge Error</h3>
          <p class="sb-ui-card__description">Fondo rojo con texto blanco.</p>
        </div>
      </article>

      <article class="sb-ui-card">
        <div class="sb-ui-card__image">
          <img class="sb-ui-card__img" src="https://picsum.photos/seed/b4/400/200" alt="Ejemplo" />
          <span class="sb-ui-card__badge sb-ui-card__badge--info"><i class="fa-solid fa-circle-info"></i> Info</span>
        </div>
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Badge Info</h3>
          <p class="sb-ui-card__description">Fondo azul con texto blanco.</p>
        </div>
      </article>
    </div>
  `,
};

/**
 * ## Modificadores de estilo
 *
 * Controla la apariencia: `--elevated`, `--outlined`, `--interactive`.
 */
export const Modificadores: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; max-width: 1000px;">
      <article class="sb-ui-card">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Default</h3>
          <p class="sb-ui-card__description">Sombra estándar del design system (shadow-xs).</p>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--elevated">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Elevated</h3>
          <p class="sb-ui-card__description">Sombra más pronunciada para destacar (shadow-s).</p>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--outlined">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Outlined</h3>
          <p class="sb-ui-card__description">Solo borde, sin sombra.</p>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--interactive">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Interactive</h3>
          <p class="sb-ui-card__description">Hover para ver efecto de elevación.</p>
        </div>
      </article>

      <article class="sb-ui-card sb-ui-card--disabled">
        <div class="sb-ui-card__content">
          <h3 class="sb-ui-card__title">Disabled</h3>
          <p class="sb-ui-card__description">Card deshabilitada (opacidad reducida, sin eventos).</p>
        </div>
      </article>
    </div>
  `,
};
