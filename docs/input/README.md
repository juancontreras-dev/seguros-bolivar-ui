# 🎨 Input Component - Seguros Bolívar UI Design System

Componente de input moderno construido con **CSS Nesting**, **@layer**, **Logical Properties** y **clamp()** para responsive fluido.

## 📋 Estados

El componente input soporta **8 estados principales**:

1. **Default** - Estado normal con borde gris
2. **Hover** - Cuando el usuario pasa el mouse sobre el input
3. **Focus** - ✅ Borde verde cuando el input tiene foco
4. **Disabled** - Input deshabilitado en gris
5. **Success** - ✅ Borde verde con ícono de verificación
6. **Error** - ❌ Borde rojo con ícono de error
7. **Warning** - ⚠️ Borde amarillo/naranja
8. **View/Read-Only** - Input de solo lectura

## 🎨 Colores Seguros Bolívar

- **Primary (Verde)**: `#009056` (base), `#038450` (D100)
- **Success (Verde)**: `#28a745`
- **Error (Rojo)**: `#dc3545`
- **Warning (Amarillo)**: `#ffc100`
- **Grayscale**: `#1b1b1b` (black), `#9b9b9b` (base), `#e1e1e1` (L200)

## 🏗️ Estructura HTML

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Label txt</label>
  <div style="position: relative">
    <input 
      class="sb-ui-input sb-ui-input--with-icon" 
      type="text" 
      placeholder="Placeholder"
    />
    <span class="sb-ui-input-icon">📋</span>
  </div>
  <span class="sb-ui-input-helper">Help text</span>
</div>
```

## 🎯 Clases CSS

### Clases Base

- `.sb-ui-input-container` - Wrapper del input, label y helper text
- `.sb-ui-input` - Input field principal
- `.sb-ui-input-label` - Label del input
- `.sb-ui-input-helper` - Helper text (con íconos automáticos)
- `.sb-ui-input-icon` - Ícono a la derecha del input

### Modificadores

- `.sb-ui-input--with-icon` - Agrega padding-inline-end para el ícono
- `.sb-ui-input--small` - Tamaño pequeño
- `.sb-ui-input--large` - Tamaño grande
- `.sb-ui-input--rounded` - Bordes más redondeados
- `.sb-ui-input--inline` - Ancho automático (no full width)

### Estados

- `.sb-ui-input--success` - Estado de éxito (borde verde)
- `.sb-ui-input--error` - Estado de error (borde rojo)
- `.sb-ui-input--warning` - Estado de advertencia (borde amarillo)
- `.sb-ui-input--disabled` - Estado deshabilitado

### Label Modifiers

- `.sb-ui-input-label--required` - Añade asterisco rojo (*)
- `.sb-ui-input-label--optional` - Añade texto "(opcional)"

## 🔤 Íconos Helper Text

Los íconos en el helper text cambian automáticamente según el estado:

- **Default**: ℹ️ (información)
- **Success**: ✓ (check)
- **Error**: ⊗ (error/x)

## 🎨 Tamaños

```html
<!-- Small -->
<input class="sb-ui-input sb-ui-input--small" type="text" />

<!-- Medium (default) -->
<input class="sb-ui-input" type="text" />

<!-- Large -->
<input class="sb-ui-input sb-ui-input--large" type="text" />
```

## 📝 Ejemplos Completos

### Input Normal

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Email</label>
  <input 
    class="sb-ui-input" 
    type="email" 
    placeholder="name@example.com"
  />
  <span class="sb-ui-input-helper">Enter your email address</span>
</div>
```

### Input con Ícono

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Password</label>
  <div style="position: relative">
    <input 
      class="sb-ui-input sb-ui-input--with-icon" 
      type="password" 
      placeholder="••••••••"
    />
    <span class="sb-ui-input-icon">🔒</span>
  </div>
  <span class="sb-ui-input-helper">At least 8 characters</span>
</div>
```

### Input Success

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Username</label>
  <div style="position: relative">
    <input 
      class="sb-ui-input sb-ui-input--success sb-ui-input--with-icon" 
      type="text" 
      value="john.doe"
    />
    <span class="sb-ui-input-icon">✓</span>
  </div>
  <span class="sb-ui-input-helper">Username is available</span>
</div>
```

### Input Error

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Email</label>
  <div style="position: relative">
    <input 
      class="sb-ui-input sb-ui-input--error sb-ui-input--with-icon" 
      type="email" 
      value="invalid-email"
    />
    <span class="sb-ui-input-icon">⊗</span>
  </div>
  <span class="sb-ui-input-helper">Please enter a valid email</span>
</div>
```

### Input Required

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label sb-ui-input-label--required">
    Full Name
  </label>
  <input 
    class="sb-ui-input" 
    type="text" 
    placeholder="John Doe"
    required
  />
  <span class="sb-ui-input-helper">This field is required</span>
</div>
```

### Input Disabled

```html
<div class="sb-ui-input-container">
  <label class="sb-ui-input-label">Email</label>
  <input 
    class="sb-ui-input" 
    type="email" 
    placeholder="john@example.com"
    disabled
  />
  <span class="sb-ui-input-helper">This field is disabled</span>
</div>
```

## 🎨 Tipos de Input

El componente soporta todos los tipos nativos de HTML5:

- `type="text"` - Texto
- `type="email"` - Email
- `type="password"` - Contraseña
- `type="number"` - Número
- `type="tel"` - Teléfono
- `type="url"` - URL
- `type="date"` - Fecha
- `type="time"` - Hora
- `type="search"` - Búsqueda

## 🎨 Customización

### Variables CSS Disponibles

Puedes personalizar el input sobrescribiendo estas variables CSS:

```css
[data-brand="seguros-bolivar"] .sb-ui-input {
  /* Colores */
  --sb-ui-input-bg-color: var(--sb-ui-color-grayscale-white);
  --sb-ui-input-text-color: var(--sb-ui-color-grayscale-black);
  --sb-ui-input-border-color: var(--sb-ui-color-grayscale-L200);
  --sb-ui-input-border-focus: var(--sb-ui-color-primary-base);
  
  /* Espaciado */
  --sb-ui-input-padding-inline: 16px;
  --sb-ui-input-padding-block: 12px;
  
  /* Tipografía */
  --sb-ui-input-font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --sb-ui-input-font-weight: 400;
  
  /* Tamaños */
  --sb-ui-input-min-block-size: 44px;
  --sb-ui-input-border-radius: 8px;
}
```

## ♿ Accesibilidad

El componente incluye soporte completo de accesibilidad:

- ✅ **Focus visible**: Outline visible al navegar con teclado
- ✅ **Reduced motion**: Sin animaciones si el usuario lo prefiere
- ✅ **High contrast**: Bordes más gruesos en modo alto contraste
- ✅ **Labels**: Asociación correcta con `for` e `id`
- ✅ **Helper text**: `aria-describedby` para lectores de pantalla
- ✅ **Estados**: `aria-invalid` para errores

## 🌐 Navegadores Soportados

- ✅ Chrome 109+ (CSS Nesting nativo)
- ✅ Firefox 117+ (CSS Nesting nativo)
- ✅ Safari 16.5+ (CSS Nesting nativo)
- ✅ Edge 109+ (CSS Nesting nativo)

## 📱 Responsive

El componente usa `clamp()` para escalar automáticamente:

- **Mobile** (320px - 640px): Tamaños reducidos, font-size mínimo 16px (previene zoom en iOS)
- **Tablet** (641px - 1024px): Tamaños intermedios
- **Desktop** (1025px+): Tamaños completos

## 🚀 Uso

### Incluir el CSS

```html
<!-- Opción 1: Bundle completo de Seguros Bolívar -->
<link rel="stylesheet" href="dist/sb-ui-seguros-bolivar-light.min.css" />

<!-- Opción 2: Solo el componente input -->
<link rel="stylesheet" href="packages/tokens/dist/seguros-bolivar-light.css" />
<link rel="stylesheet" href="packages/atoms/dist/input.css" />
<link rel="stylesheet" href="packages/brand-overrides/src/seguros-bolivar/input.css" />
```

### Aplicar la Marca

```html
<body data-brand="seguros-bolivar">
  <!-- Todos los componentes aquí tendrán el estilo de Seguros Bolívar -->
</body>
```

## 📚 Referencias

- **CSS Standards**: `.cursor/rules/CSS.mdc`
- **Brand Overrides**: `.cursor/rules/CSS_OVERRIDE_BRAND.mdc`
- **Componente Base**: `packages/atoms/src/input.css`
- **Override Seguros Bolívar**: `packages/brand-overrides/src/seguros-bolivar/input.css`
- **Tokens**: `packages/tokens/src/primitives/brands/seguros-bolivar.json`

## 📄 Licencia

MIT © Seguros Bolívar UI Design System

---

**Última actualización:** 2025-01-20  
**Versión:** 1.0.0

