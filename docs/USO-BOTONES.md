# 🔘 Guía Rápida: Uso de Botones sb-ui-button

## 📋 Reglas Básicas

### 1. **Clase Base (OBLIGATORIA)**

Todos los botones deben tener la clase `.sb-ui-button`:

```html
<button class="sb-ui-button">Botón</button>
```

### 2. **Tipo de Botón (OPCIONAL)**

Define el color/propósito del botón. Si no especificas, usa PRIMARY por defecto:

```html
<button class="sb-ui-button sb-ui-button--primary">Primary</button>
<button class="sb-ui-button sb-ui-button--secondary">Secondary</button>
<button class="sb-ui-button sb-ui-button--tertiary">Tertiary</button>
<button class="sb-ui-button sb-ui-button--error">Error</button>
```

### 3. **Variante de Estilo (OPCIONAL)**

El **default es FILL** (fondo sólido). Solo especifica si quieres STROKE o TEXT:

```html
<!-- FILL / STROKE / TEXT -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Primary Fill</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke">Primary Stroke</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--text">Primary Text</button>
```

### 4. **Tamaño (OPCIONAL)**

El **default es MEDIUM**. Solo especifica si quieres SMALL o LARGE:

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--small">Small</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--medium">Medium (default)</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--large">Large</button>
```

### 5. **Con Iconos (OPCIONAL)**

Especifica la posición del icono:

```html
<!-- Icono a la izquierda -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-left">
  <i class="fa-solid fa-save"></i>
  Guardar
</button>

<!-- Icono a la derecha -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-right">
  Siguiente
  <i class="fa-solid fa-arrow-right"></i>
</button>

<!-- Solo icono (automáticamente redondo 40x40px) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-only" title="Usuario">
  <i class="fa-solid fa-user"></i>
</button>
```

### 6. **Estados (OPCIONAL)**

Usa clases o atributos HTML según el estado:

```html
<!-- Loading -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--loading">Loading...</button>

<!-- Disabled (usa el atributo HTML) -->
<button class="sb-ui-button sb-ui-button--primary" disabled>Disabled</button>
```

---

## ✅ Ejemplos Completos

### Ejemplo 1: Botón Simple

```html
<button class="sb-ui-button sb-ui-button--primary">Aceptar</button>
```

**Resultado**: Botón PRIMARY, FILL (default), MEDIUM (default)

### Ejemplo 2: Botón con Todas las Opciones

```html
<button
  class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke sb-ui-button--large sb-ui-button--icon-left"
>
  <i class="fa-solid fa-download"></i>
  Descargar
</button>
```

**Resultado**: Botón SECONDARY, STROKE, LARGE, con icono a la izquierda

### Ejemplo 3: Botón Icon Only

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-only" title="Editar">
  <i class="fa-solid fa-edit"></i>
</button>
```

**Resultado**: Botón circular 40x40px con solo icono

---

## ❌ Errores Comunes

### ❌ Redundancia con `--fill`

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Botón</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke">Botón</button>
```

### ❌ Redundancia con `--medium`

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--medium">Botón</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--small">Botón</button>
```

### ❌ Múltiples variantes de estilo

```html
<!-- MAL: No puedes tener STROKE y TEXT al mismo tiempo -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke">Botón</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--text">Botón</button>
```

---

## 🎯 Combinaciones Válidas

| Quiero                               | Clases                                                                           |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| Botón primario simple                | `.sb-ui-button .sb-ui-button--primary`                                           |
| Botón secundario con borde           | `.sb-ui-button .sb-ui-button--secondary .sb-ui-button--stroke`                   |
| Botón grande de error                | `.sb-ui-button .sb-ui-button--error .sb-ui-button--large`                        |
| Botón pequeño terciario transparente | `.sb-ui-button .sb-ui-button--tertiary .sb-ui-button--text .sb-ui-button--small` |
| Botón con icono izquierda            | `.sb-ui-button .sb-ui-button--primary .sb-ui-button--icon-left`                  |
| Botón solo icono circular            | `.sb-ui-button .sb-ui-button--primary .sb-ui-button--icon-only`                  |

---

## 🔧 Modificadores Adicionales

### Ancho Completo

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--block">Botón Full Width</button>
```

### Esquinas Cuadradas

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--square">Botón Cuadrado</button>
```

---

## 📚 Resumen de Defaults

- **Tipo**: PRIMARY (si no especificas `--secondary`, `--tertiary`, etc.)
- **Variante**: FILL (fondo sólido)
- **Tamaño**: MEDIUM
- **Sin iconos**: Por defecto no tiene iconos

**Regla de oro**: Solo agrega las clases que necesitas cambiar del default.

---

**Última actualización**: 2025-01-10
