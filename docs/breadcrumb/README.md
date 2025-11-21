# 🧭 Breadcrumb Component

Componente de navegación tipo "migas de pan" (breadcrumb) para el Design System de Seguros Bolívar.

## 📋 Características

- ✅ **Accesible**: Usa `aria-label` y `aria-current="page"` para lectores de pantalla
- 📱 **Responsive**: Auto-collapse en móvil (<640px) mostrando solo inicio...final
- 🎨 **Personalizable**: Variables CSS para colores, separadores y espaciado
- ♿ **Accesibilidad**: Soporte para `prefers-contrast` y `prefers-reduced-motion`
- 🌐 **RTL/LTR Ready**: Usa Logical Properties (`inline-size`, `margin-inline`)
- 🔄 **Estados**: Normal, loading, collapsed
- 🎯 **Semántico**: Usa `<nav>` y `<ol>` para estructura correcta

## 🎨 Diseño Seguros Bolívar

Basado en la imagen de referencia:
- Links en **verde** (color primario `#038450`)
- Separadores ">" en gris
- Página actual en gris (no es link)
- Underline en hover

## 📦 Uso Básico

```html
<nav class="sb-ui-breadcrumb" aria-label="Breadcrumb">
  <ol class="sb-ui-breadcrumb__list">
    <li class="sb-ui-breadcrumb__item">
      <a href="#" class="sb-ui-breadcrumb__link">Directorio médico</a>
    </li>
    <li class="sb-ui-breadcrumb__item">
      <a href="#" class="sb-ui-breadcrumb__link">Medicina general</a>
    </li>
    <li class="sb-ui-breadcrumb__item">
      <span class="sb-ui-breadcrumb__current" aria-current="page">
        Perfil médico
      </span>
    </li>
  </ol>
</nav>
```

## 🎭 Variantes

### Auto-Collapse en Móvil

Por defecto, el breadcrumb se colapsa automáticamente en pantallas menores a 640px:

```
Desktop: Inicio > Nivel 2 > Nivel 3 > Nivel 4 > Página actual
Móvil:   Inicio > ... > Página actual
```

### Collapse Forzado

Puedes forzar el collapse en cualquier pantalla:

```html
<nav class="sb-ui-breadcrumb sb-ui-breadcrumb--collapsed" aria-label="Breadcrumb">
  <!-- Solo se mostrarán el primero y el último item -->
</nav>
```

### Sin Collapse

Para evitar el collapse automático en móvil:

```html
<nav class="sb-ui-breadcrumb sb-ui-breadcrumb--no-collapse" aria-label="Breadcrumb">
  <!-- Se mostrarán todos los items incluso en móvil -->
</nav>
```

## 🔄 Estados

### Loading

```html
<nav class="sb-ui-breadcrumb sb-ui-breadcrumb--loading" aria-label="Breadcrumb">
  <!-- Opacity 0.6 y pointer-events: none -->
</nav>
```

## 🎨 Variables CSS Personalizables

```css
.sb-ui-breadcrumb {
  /* Typography */
  --sb-ui-breadcrumb-font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
  --sb-ui-breadcrumb-font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --sb-ui-breadcrumb-font-weight: 400;
  --sb-ui-breadcrumb-line-height: 1.5;

  /* Colors */
  --sb-ui-breadcrumb-link-color: var(--sb-ui-color-primary-base);
  --sb-ui-breadcrumb-link-hover: var(--sb-ui-color-primary-D100);
  --sb-ui-breadcrumb-link-active: var(--sb-ui-color-primary-D200);
  --sb-ui-breadcrumb-current-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
  --sb-ui-breadcrumb-separator-color: var(--sb-ui-color-grayscale-base, #9b9b9b);

  /* Spacing */
  --sb-ui-breadcrumb-gap: clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem);
  --sb-ui-breadcrumb-padding-block: clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem);
  --sb-ui-breadcrumb-padding-inline: 0;

  /* Separator */
  --sb-ui-breadcrumb-separator-content: '>';
  --sb-ui-breadcrumb-separator-margin-inline: clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem);
}
```

## 🎨 Personalización

### Cambiar el Separador

```css
.sb-ui-breadcrumb {
  --sb-ui-breadcrumb-separator-content: '/';
}
```

### Personalizar Colores

```css
.sb-ui-breadcrumb {
  --sb-ui-breadcrumb-link-color: #ff5733;
  --sb-ui-breadcrumb-separator-color: #333;
}
```

## ♿ Accesibilidad

El componente sigue las mejores prácticas de accesibilidad:

### ARIA Attributes

- `aria-label="Breadcrumb"` en el `<nav>`
- `aria-current="page"` en el elemento actual (último)

### Estructura Semántica

```html
<nav aria-label="Breadcrumb">      <!-- Landmark de navegación -->
  <ol>                             <!-- Lista ordenada (camino secuencial) -->
    <li>                           <!-- Item de la lista -->
      <a href="#">Link</a>         <!-- Link navegable -->
    </li>
    <li>
      <span aria-current="page">   <!-- Página actual (no link) -->
        Current
      </span>
    </li>
  </ol>
</nav>
```

### Focus Visible

El componente tiene estados de focus visibles con outline verde:

```css
.sb-ui-breadcrumb__link:focus-visible {
  outline: 2px solid var(--sb-ui-color-secondary-L100);
  outline-offset: 3px;
  border-radius: 2px;
}
```

### Alto Contraste

En modo `prefers-contrast: high`, los links tienen underline visible siempre.

### Movimiento Reducido

En modo `prefers-reduced-motion: reduce`, las transiciones se desactivan.

## 📱 Responsive

### Desktop (>640px)
- Todos los items visibles
- Separadores ">" entre cada item

### Mobile (≤640px)
- Auto-collapse: muestra solo primero...último
- Reduce tamaño de fuente automáticamente

## 🏗️ Arquitectura CSS

El componente usa la arquitectura de capas (`@layer`) del Design System:

```css
@layer reset, tokens, base, states, utilities;
```

- **reset**: Reset de estilos base
- **tokens**: Variables CSS
- **base**: Estilos principales del componente
- **states**: Estados (collapsed, loading)
- **utilities**: Media queries y accesibilidad

## 📚 Ejemplos

Ver `index.html` para ejemplos completos de:
- Breadcrumb básico
- Navegación profunda (múltiples niveles)
- Auto-collapse en móvil
- Collapse forzado
- Estados (loading)
- Sin collapse

## 🌐 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Notas

- El último elemento debe usar `.sb-ui-breadcrumb__current` con `aria-current="page"` (no debe ser un link)
- Los separadores se generan automáticamente con CSS (`::after`)
- El componente es RTL-ready usando Logical Properties
- En móvil (<640px) se auto-colapsa por defecto mostrando solo inicio...final





