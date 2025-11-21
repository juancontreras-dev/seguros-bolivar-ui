# 🚀 Calendar Web Component

Componente de calendario interactivo completo construido con Lit Element.

## ✨ Características Implementadas

### 🎯 Funcionalidad Core

- ✅ **3 Modos de Selección**:
  - `single`: Selección de una sola fecha
  - `range`: Selección de rango de fechas
  - `multiple`: Selección de múltiples fechas independientes

- ✅ **Navegación Completa**:
  - Botones para mes anterior/siguiente
  - Actualización automática de días del mes
  - Doble calendario para rangos (`show-double`)

- ✅ **Keyboard Navigation**:
  - `Arrow Left/Right`: Navegar entre días
  - `Arrow Up/Down`: Navegar una semana arriba/abajo
  - `Home`: Ir al primer día del mes
  - `End`: Ir al último día del mes
  - `Enter/Space`: Seleccionar día
  - Saltar días deshabilitados/outside month automáticamente

### 🌍 Internacionalización (i18n)

- ✅ **Español** (default): Nombres de meses, días, botones
- ✅ **Inglés**: Traducción completa
- ✅ Fácilmente extensible a más idiomas

### 🔒 Validación

- ✅ **Min/Max Date**: Limitar rango seleccionable
- ✅ **Disabled Dates**: Lista de fechas deshabilitadas
- ✅ **Outside Month**: Días fuera del mes actual no seleccionables
- ✅ Validación automática en tiempo real

### 🎨 Customización

- ✅ **Tamaños**: `small`, `medium`, `large`
- ✅ **Footer**: Mostrar/ocultar botones Cancelar/Aceptar
- ✅ **Inline**: Modo sin border/shadow
- ✅ **Double**: Dos calendarios para rangos
- ✅ Respeta brand overrides automáticamente

### 🔔 Custom Events

```typescript
// Día seleccionado
calendar.addEventListener('date-select', (e) => {
  console.log(e.detail); // { date: "2022-03-15", timestamp: ... }
});

// Selección cambió
calendar.addEventListener('date-change', (e) => {
  console.log(e.detail); 
  // Single: { variant: "single", date: "..." }
  // Range: { variant: "range", start: "...", end: "..." }
  // Multiple: { variant: "multiple", dates: [...] }
});

// Mes cambió
calendar.addEventListener('month-change', (e) => {
  console.log(e.detail); // { month: 2, year: 2022, monthName: "Marzo" }
});

// Botón Aceptar
calendar.addEventListener('calendar-accept', (e) => {
  console.log(e.detail); // Datos de selección actual
});

// Botón Cancelar
calendar.addEventListener('calendar-cancel', () => {
  console.log('Cancelled');
});
```

### ♿ Accesibilidad

- ✅ **ARIA Labels**: Cada día tiene label descriptivo
  - "15 de Marzo, 2022, Hoy, Seleccionado"
  - "20 de Marzo, 2022, Inicio del rango"
- ✅ **Focus Management**: Focus visible en elementos interactivos
- ✅ **Tabindex**: Navegación por teclado correcta
- ✅ **Screen Reader Friendly**: Todos los elementos tienen labels apropiados
- ✅ **aria-selected**: Estado de selección expuesto

## 📦 Uso

### Básico - HTML

```html
<sb-ui-calendar
  variant="single"
  selected-date="2022-03-15"
  locale="es"
></sb-ui-calendar>
```

### Avanzado - Con todas las opciones

```html
<sb-ui-calendar
  variant="range"
  range-start="2022-03-15"
  range-end="2022-04-08"
  min-date="2022-01-01"
  max-date="2022-12-31"
  disabled-dates="2022-03-20,2022-03-21"
  size="large"
  locale="es"
  show-double
  show-footer
></sb-ui-calendar>
```

### Programático - JavaScript

```javascript
const calendar = document.querySelector('sb-ui-calendar');

// Cambiar variante
calendar.variant = 'range';

// Establecer fecha
calendar.selectedDate = '2022-03-15';

// Establecer rango
calendar.rangeStart = '2022-03-15';
calendar.rangeEnd = '2022-04-08';

// Múltiples fechas
calendar.selectedDates = '2022-03-15,2022-03-16,2022-03-17';

// Fechas deshabilitadas
calendar.disabledDates = '2022-03-20,2022-03-21,2022-03-22';

// Validación
calendar.minDate = '2022-03-01';
calendar.maxDate = '2022-03-31';

// Opciones de display
calendar.size = 'small'; // small | medium | large
calendar.showDouble = true;
calendar.showFooter = false;
calendar.inline = true;
calendar.locale = 'en';
```

## 🎯 Propiedades (Attributes)

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `variant` | `'single' \| 'range' \| 'multiple'` | `'single'` | Modo de selección |
| `selected-date` | `string` | `undefined` | Fecha seleccionada (ISO: YYYY-MM-DD) |
| `selected-dates` | `string` | `undefined` | Fechas múltiples (comma separated) |
| `range-start` | `string` | `undefined` | Inicio del rango |
| `range-end` | `string` | `undefined` | Fin del rango |
| `min-date` | `string` | `undefined` | Fecha mínima seleccionable |
| `max-date` | `string` | `undefined` | Fecha máxima seleccionable |
| `disabled-dates` | `string` | `undefined` | Fechas deshabilitadas (comma separated) |
| `locale` | `'es' \| 'en'` | `'es'` | Idioma |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño |
| `show-footer` | `boolean` | `true` | Mostrar botones Cancelar/Aceptar |
| `show-double` | `boolean` | `false` | Mostrar dos calendarios |
| `inline` | `boolean` | `false` | Modo inline (sin border/shadow) |

## 🎨 Estilos CSS

El Web Component **NO** incluye estilos inline. Los estilos vienen del CSS externo (`calendar.css` en atoms).

Esto permite:
- ✅ Temas consistentes con el Design System
- ✅ Brand overrides funcionan automáticamente
- ✅ Tamaño del bundle JS más pequeño
- ✅ Customización vía CSS Variables

### CSS Variables Principales

```css
/* Colores de selección */
--sb-ui-calendar-day-selected-bg
--sb-ui-calendar-day-selected-color
--sb-ui-calendar-day-range-start-bg
--sb-ui-calendar-day-in-range-bg

/* Tamaños */
--sb-ui-calendar-day-size
--sb-ui-calendar-border-radius

/* Colores de estados */
--sb-ui-calendar-day-bg-hover
--sb-ui-calendar-day-today-border
```

## 📊 Bundle Size

- **Total JS Bundle**: 58.86 KB (minified)
- **Gzipped**: 14.92 KB
- **Brotli**: 13.18 KB

Incluye:
- Lit Element core
- Calendar component
- Date utilities
- i18n strings
- Keyboard navigation
- Todos los otros Web Components del sistema

## 🚀 Demo Interactiva

Ver `examples/calendar/interactive.html` para demo completa con:

- ✅ Single date picker con controles
- ✅ Range date picker con double calendar
- ✅ Multiple date picker con disabled dates
- ✅ Control programático (JavaScript)
- ✅ Event logs en tiempo real
- ✅ Ejemplos de código

### Abrir Demo

```bash
cd examples/calendar
open interactive.html
```

O servir con:

```bash
cd examples
npx serve -p 3000
# Abrir http://localhost:3000/calendar/interactive.html
```

## 🔧 Desarrollo

### Build

```bash
# Compilar molecules (Web Components)
cd packages/molecules
pnpm run build

# Compilar bundle completo
cd packages/bundle
pnpm run build:copy
```

### Watch Mode

```bash
cd packages/molecules
pnpm run dev
```

### Agregar nuevo idioma

Editar `packages/molecules/src/components/Calendar.ts`:

```typescript
const LOCALES: Record<string, LocaleConfig> = {
  es: { ... },
  en: { ... },
  // Agregar nuevo
  fr: {
    weekdays: ['Dimanche', 'Lundi', ...],
    weekdaysShort: ['Di', 'Lu', ...],
    months: ['Janvier', 'Février', ...],
    monthsShort: ['Jan', 'Fév', ...],
    today: 'Aujourd\'hui',
    cancel: 'Annuler',
    accept: 'Accepter',
  },
};
```

## 🐛 Known Issues

- ⚠️ **Shadow DOM**: Los estilos globales no penetran. Usar CSS externo.
- ⚠️ **Date Format**: Solo soporta ISO format (YYYY-MM-DD)
- ⚠️ **Timezone**: Usa timezone local del navegador

## 🎯 Roadmap

- [ ] Time picker integration
- [ ] Preset ranges (last 7 days, this month, etc.)
- [ ] Year/Month picker modal
- [ ] Week numbers display
- [ ] Drag to select range
- [ ] Mobile gestures (swipe between months)
- [ ] More locales out of the box

## 📚 Recursos

- **Documentación completa**: `examples/calendar/README.md`
- **Código fuente**: `packages/molecules/src/components/Calendar.ts`
- **CSS base**: `packages/atoms/src/calendar.css`
- **Brand override**: `packages/brand-overrides/src/seguros-bolivar/calendar.css`

---

**Creado**: 2025-10-31
**Autor**: Seguros Bolívar UI Team
**Versión**: 1.0.0

