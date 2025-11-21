# 📅 Calendar Component - Seguros Bolívar UI Design System

Componente de calendario altamente personalizable con soporte para selección única, múltiple y de rangos.

## 🎯 Características

- ✅ **3 Variantes**: Single, Range, Multiple
- ✅ **Responsive**: Usa `clamp()` para fluid typography y spacing
- ✅ **RTL/LTR Ready**: Logical Properties (`inline-size`, `padding-inline`)
- ✅ **Accesible**: Soporte completo WCAG 2.1 AA
- ✅ **Themeable**: Variables CSS personalizables
- ✅ **Brand-aware**: Overrides específicos por marca

## 🚀 Uso Básico

### Single Date Picker

```html
<div class="sb-ui-calendar" data-variant="single">
  <div class="sb-ui-calendar__header">
    <button class="sb-ui-calendar__nav-button" aria-label="Mes anterior">
      <!-- SVG left arrow -->
    </button>
    <div class="sb-ui-calendar__month-year">Marzo - 2022</div>
    <button class="sb-ui-calendar__nav-button" aria-label="Mes siguiente">
      <!-- SVG right arrow -->
    </button>
  </div>

  <div class="sb-ui-calendar__weekdays">
    <div class="sb-ui-calendar__weekday">Do</div>
    <div class="sb-ui-calendar__weekday">Lu</div>
    <!-- ... más días -->
  </div>

  <div class="sb-ui-calendar__days">
    <button class="sb-ui-calendar__day">1</button>
    <button class="sb-ui-calendar__day sb-ui-calendar__day--selected">15</button>
    <!-- ... más días -->
  </div>

  <div class="sb-ui-calendar__footer">
    <button class="sb-ui-button sb-ui-button--secondary sb-ui-button--small">
      Cancelar
    </button>
    <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small">
      Aceptar
    </button>
  </div>
</div>
```

### Range Date Picker

```html
<div class="sb-ui-calendar sb-ui-calendar--double" data-variant="range">
  <!-- Mes 1 -->
  <div class="sb-ui-calendar__month">
    <!-- Header + Weekdays + Days -->
  </div>

  <!-- Mes 2 -->
  <div class="sb-ui-calendar__month">
    <!-- Header + Weekdays + Days -->
  </div>
</div>
```

### Multiple Date Picker

```html
<div class="sb-ui-calendar" data-variant="multiple">
  <!-- Mismo contenido que single -->
  <!-- Pero permite múltiples días con clase --selected -->
</div>
```

## 🎨 Variantes

### Por Tipo de Selección

| Variante | Data Attribute | Descripción |
|----------|---------------|-------------|
| Single | `data-variant="single"` | Selección de una sola fecha |
| Range | `data-variant="range"` | Selección de rango (inicio-fin) |
| Multiple | `data-variant="multiple"` | Selección de múltiples fechas |

### Por Tamaño

| Clase | Descripción |
|-------|-------------|
| _(default)_ | Tamaño medium estándar |
| `.sb-ui-calendar--small` | Calendario compacto |
| `.sb-ui-calendar--large` | Calendario más grande |

### Modificadores

| Clase | Descripción |
|-------|-------------|
| `.sb-ui-calendar--double` | Dos calendarios lado a lado (para ranges) |
| `.sb-ui-calendar--inline` | Sin border ni shadow |
| `.sb-ui-calendar--no-footer` | Sin botones de acción |

## 📦 Estados de los Días

| Clase | Descripción |
|-------|-------------|
| `.sb-ui-calendar__day--today` | Día actual (borde verde) |
| `.sb-ui-calendar__day--selected` | Día seleccionado |
| `.sb-ui-calendar__day--range-start` | Inicio de rango |
| `.sb-ui-calendar__day--range-end` | Fin de rango |
| `.sb-ui-calendar__day--in-range` | Dentro del rango |
| `.sb-ui-calendar__day--outside` | Fuera del mes actual |
| `.sb-ui-calendar__day--disabled` | Deshabilitado |

## 🎯 Ejemplo Completo: Range Date Picker

```html
<div class="sb-ui-calendar sb-ui-calendar--double" data-variant="range">
  <!-- Mes 1: Marzo -->
  <div class="sb-ui-calendar__month">
    <div class="sb-ui-calendar__header">
      <button class="sb-ui-calendar__nav-button">◀</button>
      <div class="sb-ui-calendar__month-year">Marzo - 2022</div>
      <button class="sb-ui-calendar__nav-button">▶</button>
    </div>

    <div class="sb-ui-calendar__weekdays">
      <div class="sb-ui-calendar__weekday">Do</div>
      <div class="sb-ui-calendar__weekday">Lu</div>
      <div class="sb-ui-calendar__weekday">Ma</div>
      <div class="sb-ui-calendar__weekday">Mi</div>
      <div class="sb-ui-calendar__weekday">Ju</div>
      <div class="sb-ui-calendar__weekday">Vi</div>
      <div class="sb-ui-calendar__weekday">Sa</div>
    </div>

    <div class="sb-ui-calendar__days">
      <!-- Días antes del rango -->
      <button class="sb-ui-calendar__day">1</button>
      <!-- ... -->
      <button class="sb-ui-calendar__day">14</button>

      <!-- Inicio del rango -->
      <button class="sb-ui-calendar__day sb-ui-calendar__day--range-start">15</button>

      <!-- Días dentro del rango -->
      <button class="sb-ui-calendar__day sb-ui-calendar__day--in-range">16</button>
      <button class="sb-ui-calendar__day sb-ui-calendar__day--in-range">17</button>
      <!-- ... -->

      <!-- Fin del rango (en el mes siguiente) -->
    </div>
  </div>

  <!-- Mes 2: Abril -->
  <div class="sb-ui-calendar__month">
    <!-- Similar estructura -->
    <div class="sb-ui-calendar__days">
      <!-- Días dentro del rango -->
      <button class="sb-ui-calendar__day sb-ui-calendar__day--in-range">1</button>
      <!-- ... -->

      <!-- Fin del rango -->
      <button class="sb-ui-calendar__day sb-ui-calendar__day--range-end">8</button>

      <!-- Días después del rango -->
      <button class="sb-ui-calendar__day">9</button>
      <!-- ... -->
    </div>
  </div>
</div>
```

## 🎨 Personalización con CSS Variables

### Colores

```css
/* Selección */
--sb-ui-calendar-day-selected-bg: var(--sb-ui-color-secondary-base);
--sb-ui-calendar-day-selected-color: var(--sb-ui-color-primary-D100);

/* Range */
--sb-ui-calendar-day-range-start-bg: var(--sb-ui-color-secondary-base);
--sb-ui-calendar-day-in-range-bg: var(--sb-ui-color-secondary-L400);

/* Today */
--sb-ui-calendar-day-today-border: 2px solid var(--sb-ui-color-primary-base);

/* Estados hover */
--sb-ui-calendar-day-bg-hover: var(--sb-ui-color-secondary-L400);
--sb-ui-calendar-day-selected-bg-hover: var(--sb-ui-color-secondary-D100);
```

### Tamaños

```css
/* Días */
--sb-ui-calendar-day-size: clamp(36px, 2.2rem + 0.5vw, 44px);

/* Tipografía */
--sb-ui-calendar-month-font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
--sb-ui-calendar-day-font-size: clamp(0.875rem, 0.8rem + 0.2vw, 1rem);

/* Border radius */
--sb-ui-calendar-border-radius: clamp(8px, 0.5rem + 0.5vw, 16px);
--sb-ui-calendar-day-border-radius: clamp(4px, 0.3rem + 0.3vw, 8px);
```

### Espaciado

```css
--sb-ui-calendar-padding: clamp(1rem, 0.8rem + 1vw, 1.5rem);
--sb-ui-calendar-gap: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);
--sb-ui-calendar-grid-gap: clamp(2px, 0.1rem + 0.2vw, 4px);
```

## 🎯 Brand Overrides - Seguros Bolívar

El calendario incluye personalización específica para Seguros Bolívar:

```css
/* Colores de marca */
- Selección: Fondo amarillo (#FCD535), texto verde oscuro (#026838)
- Hover: Amarillo más oscuro (#E3BF2F)
- In-range: Amarillo muy claro (#FFFCF0)
- Today: Borde verde (#038450)

/* Border radius */
- Calendario: 16px (más redondeado)
- Navegación: 50px (circular)
- Días: 8px

/* Focus */
- Outline: 2px verde (#038450)
```

## ♿ Accesibilidad

### Navegación por Teclado

- **Tab**: Navegar entre elementos focusables
- **Enter/Space**: Seleccionar día
- **Arrow Keys**: (Requiere JS) Navegar entre días

### Atributos ARIA

```html
<button
  class="sb-ui-calendar__nav-button"
  aria-label="Mes anterior"
>
  <!-- Icon -->
</button>

<button
  class="sb-ui-calendar__day"
  aria-selected="true"
  aria-label="15 de Marzo, 2022"
>
  15
</button>
```

### Focus Visible

Todos los elementos interactivos tienen outline visible al recibir focus:

```css
&:focus-visible {
  outline: 2px solid var(--sb-ui-color-primary-base);
  outline-offset: 2px;
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  .sb-ui-calendar {
    --sb-ui-calendar-border-width: 2px;
  }

  .sb-ui-calendar__day--today {
    border-width: 3px;
  }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .sb-ui-calendar,
  .sb-ui-calendar__day {
    transition: none;
    animation: none;
  }
}
```

## 📱 Responsive

El calendario es responsive por defecto usando `clamp()`:

```css
/* Mobile */
@media (max-width: 640px) {
  .sb-ui-calendar {
    --sb-ui-calendar-inline-size: 100%;
  }

  .sb-ui-calendar--double {
    flex-direction: column; /* Stack calendarios verticalmente */
  }
}
```

## 🔧 Integración con JavaScript

El componente solo provee los estilos. Para funcionalidad completa, necesitas:

1. **Navegación entre meses**
2. **Selección de fechas** (single/range/multiple)
3. **Validación** (fechas min/max, días deshabilitados)
4. **i18n** (nombres de meses/días en diferentes idiomas)

### Ejemplo básico con JS:

```javascript
const calendar = document.querySelector('.sb-ui-calendar');
const days = calendar.querySelectorAll('.sb-ui-calendar__day');

days.forEach(day => {
  day.addEventListener('click', (e) => {
    const variant = calendar.dataset.variant;

    if (variant === 'single') {
      // Remover selección previa
      days.forEach(d => d.classList.remove('sb-ui-calendar__day--selected'));
      // Seleccionar nuevo
      e.target.classList.add('sb-ui-calendar__day--selected');
    }

    // ... lógica para range y multiple
  });
});
```

## 📚 Ejemplos

Ver `examples/calendar/index.html` para ejemplos completos de:

- ✅ Single date picker
- ✅ Single date picker con indicador de "today"
- ✅ Range date picker (dos meses)
- ✅ Multiple date picker
- ✅ Tamaños (small, default, large)

## 🎨 Storybook

_(Próximamente)_

```bash
pnpm run storybook
```

## 📦 Instalación

### Via CDN

```html
<!-- Seguros Bolívar Light Theme -->
<link
  rel="stylesheet"
  href="https://cdn.tu-domain.com/sb-ui-seguros-bolivar-light.min.css"
/>
```

### Via NPM

```bash
pnpm add @seguros-bolivar-ui/atoms
```

```css
@import '@seguros-bolivar-ui/atoms/calendar.css';
```

## 🐛 Known Issues

- ⚠️ **Requiere JavaScript** para funcionalidad completa (navegación, selección)
- ⚠️ **i18n**: Los nombres de días/meses deben incluirse en el HTML

## 🚀 Roadmap

- [ ] Web Component con funcionalidad completa
- [ ] i18n built-in
- [ ] Validación de fechas (min/max)
- [ ] Keyboard navigation completa
- [ ] Time picker integration
- [ ] Preset ranges (last 7 days, this month, etc.)

## 📝 Changelog

### v1.0.0 (2025-10-31)

- ✅ Componente inicial
- ✅ 3 variantes (single, range, multiple)
- ✅ 3 tamaños (small, medium, large)
- ✅ Brand override para Seguros Bolívar
- ✅ Accesibilidad completa
- ✅ Responsive con clamp()

---

**Autor**: Seguros Bolívar UI Team
**Licencia**: MIT

