# 📂 Accordion Component

Componente acordeón expandible/colapsable del Seguros Bolívar UI Design System.

## 🎨 Características

- ✅ **Expandible/Colapsable**: Usa el elemento nativo `<details>` para máxima accesibilidad
- ✅ **Múltiples estados**: Default, Hover, Pressed, Focused, Expanded, Disabled
- ✅ **2 Variantes**: Primary (verde) y Secondary (amarillo)
- ✅ **3 Tamaños**: Small, Medium (default), Large
- ✅ **Iconos personalizables**: Soporte para icono inicial, botón de acción e icono de expansión
- ✅ **Modificadores**: Ocultar iconos o botones según necesidad
- ✅ **Totalmente accesible**: Funciona con teclado, lectores de pantalla y cumple WCAG
- ✅ **Responsive**: Usa `clamp()` para ajuste fluido
- ✅ **CSS Nesting y @layer**: Arquitectura moderna y mantenible

## 📋 Uso Básico

```html
<!-- Accordion completo con todos los elementos -->
<details class="sb-ui-accordion sb-ui-accordion--primary">
  <summary class="sb-ui-accordion__header">
    <span class="sb-ui-accordion__icon-start">🌐</span>
    <span class="sb-ui-accordion__label">Label text</span>
    <button 
      class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
      onclick="event.stopPropagation()"
    >
      Button
    </button>
    <span class="sb-ui-accordion__icon-end">▼</span>
  </summary>
  <div class="sb-ui-accordion__content">
    <p>Tu contenido aquí</p>
  </div>
</details>
```

## 🎯 Variantes

### Primary (Verde - Default)
```html
<details class="sb-ui-accordion sb-ui-accordion--primary">
  <!-- contenido -->
</details>
```

### Secondary (Amarillo)
```html
<details class="sb-ui-accordion sb-ui-accordion--secondary">
  <!-- contenido -->
</details>
```

## 📏 Tamaños

```html
<!-- Small -->
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--small">
  <!-- contenido -->
</details>

<!-- Medium (default) -->
<details class="sb-ui-accordion sb-ui-accordion--primary">
  <!-- contenido -->
</details>

<!-- Large -->
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--large">
  <!-- contenido -->
</details>
```

## 🎨 Modificadores

### Sin icono inicial
```html
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--no-icon-start">
  <!-- contenido -->
</details>
```

### Sin botón de acción
```html
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--no-action">
  <!-- contenido -->
</details>
```

### Minimal (solo texto y flecha)
```html
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--no-icon-start sb-ui-accordion--no-action">
  <!-- contenido -->
</details>
```

## 🔒 Estado Disabled

```html
<details class="sb-ui-accordion sb-ui-accordion--primary sb-ui-accordion--disabled">
  <summary class="sb-ui-accordion__header">
    <span class="sb-ui-accordion__icon-start">🌐</span>
    <span class="sb-ui-accordion__label">Label text</span>
    <button 
      class="sb-ui-accordion__action sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
      disabled
    >
      Button
    </button>
    <span class="sb-ui-accordion__icon-end">▼</span>
  </summary>
  <div class="sb-ui-accordion__content">
    <p>Contenido no accesible</p>
  </div>
</details>
```

## 📂 Grupo de Accordions (FAQ)

```html
<!-- Múltiples accordions para FAQs o secciones -->
<details class="sb-ui-accordion sb-ui-accordion--primary">
  <summary class="sb-ui-accordion__header">
    <span class="sb-ui-accordion__icon-start">❓</span>
    <span class="sb-ui-accordion__label">¿Pregunta 1?</span>
    <span class="sb-ui-accordion__icon-end">▼</span>
  </summary>
  <div class="sb-ui-accordion__content">
    <p>Respuesta 1</p>
  </div>
</details>

<details class="sb-ui-accordion sb-ui-accordion--primary">
  <summary class="sb-ui-accordion__header">
    <span class="sb-ui-accordion__icon-start">❓</span>
    <span class="sb-ui-accordion__label">¿Pregunta 2?</span>
    <span class="sb-ui-accordion__icon-end">▼</span>
  </summary>
  <div class="sb-ui-accordion__content">
    <p>Respuesta 2</p>
  </div>
</details>
```

## 🎯 Estados Interactivos

| Estado | Descripción |
|--------|-------------|
| **Default** | Estado por defecto (cerrado) |
| **Hover** | Al pasar el mouse sobre el header |
| **Pressed** | Al hacer click en el header |
| **Focused** | Al navegar con teclado (Tab) |
| **Expanded** | Cuando el accordion está abierto (atributo `open`) |
| **Disabled** | No interactivo, sin click |

## ♿ Accesibilidad

- ✅ **Navegación por teclado**:
  - `Tab` / `Shift+Tab`: Navegar entre accordions
  - `Enter` / `Space`: Expandir/colapsar
  - `Escape`: Colapsar (comportamiento nativo)
  
- ✅ **Lectores de pantalla**: 
  - El elemento `<details>` es semántico y accesible por defecto
  - El estado expanded/collapsed se anuncia automáticamente
  
- ✅ **Focus visible**: Outline verde visible con `focus-visible`

- ✅ **Alto contraste**: Borde más grueso en modo alto contraste

- ✅ **Reducción de movimiento**: Sin animaciones si `prefers-reduced-motion: reduce`

## 🎨 Personalización con Brand Overrides

Para Seguros Bolívar, el accordion usa:

- **Border radius**: 16px
- **Padding**: 24px horizontal, 16px vertical
- **Colores primary**: Verde (#038450)
- **Colores secondary**: Amarillo (#FAE100)
- **Min height**: 64px

Para personalizar en otras marcas:

```css
[data-brand='tu-marca'] .sb-ui-accordion {
  --sb-ui-accordion-border-radius: 12px;
  --sb-ui-accordion-padding-inline: 20px;
  --sb-ui-accordion-padding-block: 12px;
}

@layer brand-overrides {
  [data-brand='tu-marca'] .sb-ui-accordion--primary {
    --sb-ui-accordion-border-color: var(--sb-ui-color-primary-base);
    --sb-ui-accordion-border-hover: var(--sb-ui-color-primary-D100);
    --sb-ui-accordion-text-color: var(--sb-ui-color-primary-D100);
  }
}
```

## 📦 Archivos

- **Base**: `packages/atoms/src/accordion.css`
- **Override SB**: `packages/brand-overrides/src/seguros-bolivar/accordion.css`
- **Demo**: `examples/accordion/index.html`

## 🚀 Demo

Abre `examples/accordion/index.html` en tu navegador para ver todos los estados y variantes en acción.

## 🔗 Referencias

- [MDN - details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [WCAG 2.1 - Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- CSS Nesting Module
- CSS @layer Cascade Control

---

**Última actualización**: 2025-01-16  
**Versión**: 1.0.0  
**Seguros Bolívar UI Design System**

