# 🔄 Spinner Component

Componente de indicador de carga circular con 4 tipos de variantes.

## 📋 Tipos de Spinner

### 1. **Basic** ✅ (Implementado)

Spinner circular simple con gradiente verde.

```html
<div class="sb-ui-spinner sb-ui-spinner--basic" data-progress="50"></div>
```

### 2. **Integrated** ✅ (Implementado)

Spinner con 3 círculos concéntricos que rotan a velocidades diferentes:

- 🟢 Verde oscuro (#009056) - 2s
- 🟢 Verde claro (#02D46F) - 3s
- 🟡 Amarillo (#FFE16F) - 1.5s

**Nota:** Este spinner NO usa `data-progress`, rota continuamente.

```html
<div class="sb-ui-spinner sb-ui-spinner--integrated"></div>
```

### 3. **Icon** 🚧 (Por implementar)

Spinner con icono centrado.

```html
<div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="50">
  <div class="sb-ui-spinner__icon">
    <!-- SVG icon -->
  </div>
</div>
```

### 4. **Icon-Text** 🚧 (Por implementar)

Spinner con icono y texto centrado.

```html
<div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="50">
  <div class="sb-ui-spinner__icon">
    <!-- SVG icon -->
  </div>
  <span class="sb-ui-spinner__label">Body Label</span>
</div>
```

---

## 🎯 Estados de Progreso

El spinner tiene 4 estados de progreso que representan la vuelta completa:

| Estado     | Porcentaje | Ángulo | Data Attribute        |
| ---------- | ---------- | ------ | --------------------- |
| Progress 1 | 25%        | 90°    | `data-progress="25"`  |
| Progress 2 | 50%        | 180°   | `data-progress="50"`  |
| Progress 3 | 75%        | 270°   | `data-progress="75"`  |
| Progress 4 | 100%       | 360°   | `data-progress="100"` |

---

## 📏 Tamaño

**Default único:** 40x40px (responsive con `clamp(32px, 6vw, 40px)`)

No hay variantes `small`, `medium`, `large`.

---

## ⚡ Velocidad de Animación

### Fast

```html
<div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--fast" data-progress="50"></div>
```

- **Duration:** 0.8s

### Normal (Default)

```html
<div class="sb-ui-spinner sb-ui-spinner--basic" data-progress="50"></div>
```

- **Duration:** 1.2s

### Slow

```html
<div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--slow" data-progress="50"></div>
```

- **Duration:** 2s

### Paused

```html
<div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--paused" data-progress="50"></div>
```

- **Animation:** none

---

## 🎨 Estados de Color

### Default (Verde)

```html
<div class="sb-ui-spinner sb-ui-spinner--basic" data-progress="50"></div>
```

- **Gradient:** `#05794A` → `#009056`

### Error (Rojo)

```html
<div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--error" data-progress="50"></div>
```

- **Gradient:** Feedback Error colors

### Success (Verde Feedback)

```html
<div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--success" data-progress="50"></div>
```

- **Gradient:** Feedback Success colors

---

## 🔧 Control Dinámico con JavaScript

### Actualizar Progreso

```javascript
// Opción 1: Actualizar CSS Variable
const spinner = document.querySelector('.sb-ui-spinner');
spinner.style.setProperty('--sb-ui-spinner-progress', '75');

// Opción 2: Actualizar Data Attribute
spinner.dataset.progress = '75';
```

### Pausar/Reanudar Animación

```javascript
const spinner = document.querySelector('.sb-ui-spinner');

// Pausar
spinner.classList.add('sb-ui-spinner--paused');

// Reanudar
spinner.classList.remove('sb-ui-spinner--paused');
```

### Cambiar Velocidad

```javascript
const spinner = document.querySelector('.sb-ui-spinner');

// Hacer más rápido
spinner.classList.add('sb-ui-spinner--fast');

// Hacer más lento
spinner.classList.remove('sb-ui-spinner--fast');
spinner.classList.add('sb-ui-spinner--slow');
```

---

## 🎨 Variables CSS Personalizables

```css
/* Colores del gradiente */
--sb-ui-spinner-gradient-start: #05794a;
--sb-ui-spinner-gradient-end: #009056;
--sb-ui-spinner-bg-color: #f5f5f5;

/* Tamaños */
--sb-ui-spinner-size: clamp(32px, 6vw, 40px);
--sb-ui-spinner-stroke-width: clamp(3px, 0.5vw, 4px);

/* Animación */
--sb-ui-spinner-duration: 1.2s;

/* Progress (0-100) */
--sb-ui-spinner-progress: 50;
--sb-ui-spinner-angle: calc((var(--sb-ui-spinner-progress) / 100) * 360deg);
```

---

## ♿ Accesibilidad

### Reduced Motion

El spinner respeta `prefers-reduced-motion` y desactiva la animación:

```css
@media (prefers-reduced-motion: reduce) {
  .sb-ui-spinner {
    animation: none;
  }
}
```

### High Contrast

Aumenta el grosor del stroke y añade outline:

```css
@media (prefers-contrast: high) {
  .sb-ui-spinner {
    --sb-ui-spinner-stroke-width: clamp(4px, 0.6vw, 6px);
    outline: 1px solid currentColor;
  }
}
```

### ARIA Attributes (Recomendado)

```html
<div
  class="sb-ui-spinner sb-ui-spinner--basic"
  data-progress="50"
  role="status"
  aria-live="polite"
  aria-label="Cargando, 50% completado"
>
  <span class="sr-only">Cargando...</span>
</div>
```

---

## 📦 Ejemplos de Uso

### Caso 1: Loading State en Botón

```html
<button disabled>
  <div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--small" data-progress="50"></div>
  Cargando...
</button>
```

### Caso 2: Pantalla de Carga

```html
<div class="loading-screen">
  <div class="sb-ui-spinner sb-ui-spinner--basic sb-ui-spinner--large" data-progress="75"></div>
  <p>Cargando tu información...</p>
</div>
```

### Caso 3: Progress Tracker

```html
<div class="progress-tracker">
  <div class="sb-ui-spinner sb-ui-spinner--basic" id="upload-spinner" data-progress="0"></div>
  <p id="upload-text">0% completado</p>
</div>

<script>
  let progress = 0;
  const spinner = document.getElementById('upload-spinner');
  const text = document.getElementById('upload-text');

  const interval = setInterval(() => {
    progress += 10;
    if (progress > 100) progress = 100;

    spinner.style.setProperty('--sb-ui-spinner-progress', progress);
    text.textContent = `${progress}% completado`;

    if (progress === 100) {
      clearInterval(interval);
      spinner.classList.add('sb-ui-spinner--success');
    }
  }, 500);
</script>
```

---

## 🚀 Próximos Pasos

### Paso 2: Implementar `--integrated` (Doble círculo)

- Verde + Amarillo
- Dos capas de progreso

### Paso 3: Implementar `--icon` (Con icono)

- Icono centrado fijo
- Spinner rota alrededor

### Paso 4: Implementar `--icon-text` (Con icono y texto)

- Icono centrado
- Texto debajo del icono
- Ambos fijos mientras el spinner rota

---

## 📊 Especificaciones Técnicas

### Basic Spinner (Progress 1)

- **Width:** 40px
- **Height:** 40px
- **Border Radius:** 1000px (círculo)
- **Gradient:** Linear 180deg, `#05794A` → `#009056`
- **Angle:** 0deg (inicial)
- **Opacity:** 1

### CSS Layers

```css
@layer reset, tokens, base, variants, sizes, modifiers, states, utilities;
```

### Animación

```css
@keyframes sb-ui-spinner-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 🎓 Buenas Prácticas

1. ✅ **Siempre usar `data-progress`** para indicar el estado actual
2. ✅ **Añadir ARIA attributes** para accesibilidad
3. ✅ **Usar modificadores de tamaño** según el contexto
4. ✅ **Respetar `prefers-reduced-motion`**
5. ✅ **Pausar animación** cuando no está visible (performance)

---

**Estado actual:** ✅ Basic Spinner implementado
**Próximo paso:** 🚧 Integrated Spinner

**Archivo:** `packages/atoms/src/spinner.css`
**Ejemplo:** `examples/spinner/index.html`
