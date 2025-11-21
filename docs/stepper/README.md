# Stepper Component - Ejemplos

Este directorio contiene ejemplos funcionales del componente Stepper usando **bundles de producción**.

## 📂 Archivos

- `demo.html` - Demo interactiva con todas las variantes y estados (USA BUNDLE MINIFICADO)

## 🚀 Cómo Usar

### Opción 1: Abrir directamente

```bash
# Desde el root del proyecto
open examples/stepper/demo.html
```

### Opción 2: Con servidor local

```bash
# Instalar http-server globalmente (si no lo tienes)
npm install -g http-server

# Desde el root del proyecto
http-server -p 8080

# Abre en el navegador
# http://localhost:8080/examples/stepper/demo.html
```

## 🔧 Compilar antes de usar

El demo usa `sb-ui-seguros-bolivar-light.min.css` que debe estar compilado:

```bash
# Compilar bundle (incluye stepper automáticamente)
pnpm --filter @seguros-bolivar-ui/bundle build

# Copiar a examples/dist
cp packages/bundle/dist/*.css examples/dist/
```

## 🎨 Variantes Disponibles

### 1. **Number Horizontal**

Stepper con números, orientación horizontal (default).

```html
<div class="sb-ui-stepper sb-ui-stepper--horizontal">
  <!-- Steps aquí -->
</div>
```

### 2. **Icon Horizontal**

Stepper con iconos personalizados (62px desktop / 46px mobile).

```html
<div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-icon">
  <!-- Steps con iconos -->
</div>
```

### 3. **Mix Horizontal**

Stepper con iconos + badge numérico.

```html
<div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-mix">
  <!-- Steps con badge -->
</div>
```

### 4. **Track Dash**

Línea conectora punteada en lugar de sólida.

```html
<div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
  <!-- Steps aquí -->
</div>
```

### 5. **Vertical**

Orientación vertical ideal para sidebars.

```html
<div class="sb-ui-stepper sb-ui-stepper--vertical">
  <!-- Steps aquí -->
</div>
```

## 🎯 Estados

Cada step puede tener 4 estados:

| Estado         | Clase                                 | Descripción                           |
| -------------- | ------------------------------------- | ------------------------------------- |
| Empty Default  | `sb-ui-stepper__step--empty-default`  | Paso pendiente (no activo)            |
| Empty Active   | `sb-ui-stepper__step--empty-active`   | Paso actual (sin completar)           |
| Filled Default | `sb-ui-stepper__step--filled-default` | Paso completado (no activo)           |
| Filled Active  | `sb-ui-stepper__step--filled-active`  | Paso completado y activo (poco común) |

## 📱 Responsive

El componente usa `clamp()` para ser responsive automáticamente:

- **Desktop:** 54px (number) / 62px (icon/mix)
- **Mobile:** 40px (number) / 46px (icon/mix)
- **Gap:** 32px → 16px en mobile

## 🎨 Variables CSS

Puedes personalizar el stepper con variables CSS:

```css
/* Colores del paso activo (empty-active) */
--sb-ui-stepper-step-empty-active-bg: #fff8e1;
--sb-ui-stepper-step-empty-active-border: #ffd54f;
--sb-ui-stepper-step-empty-active-text: #000;

/* Colores de pasos completados (filled) */
--sb-ui-stepper-step-filled-default-bg: #038450;
--sb-ui-stepper-step-filled-default-border: #038450;
--sb-ui-stepper-step-filled-default-text: #fff;

/* Track (línea) */
--sb-ui-stepper-track-active-color: #038450; /* Verde para completados */
--sb-ui-stepper-track-default-color: #e0e0e0; /* Gris para pendientes */
```

## 🔗 Referencias

- [Documentación completa](../../packages/molecules/src/components/STEPPER_README.md)
- [CSS del componente](../../packages/molecules/src/components/stepper.css)
- [Web Component TypeScript](../../packages/molecules/src/components/Stepper.ts)

## 📝 Notas

- El CSS usa **@layer** para control de cascada
- Usa **Logical Properties** (RTL-ready)
- **Accesible** por defecto (ARIA, keyboard navigation)
- **Sin dependencias** externas

---

**Última actualización:** 2025-01-29
**Versión:** 1.0.0
