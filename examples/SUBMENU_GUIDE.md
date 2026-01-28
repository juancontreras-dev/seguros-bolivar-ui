# Submenu Functionality Guide

## Overview

Se ha agregado funcionalidad de submenus expandibles al menú lateral del dashboard. Estos submenus permiten mostrar variaciones de componentes en una estructura jerárquica.

## ✨ Features Implementadas

### 1. **Submenus Expandibles**
- Los componentes pueden tener submenus que muestren sus variaciones
- Click en el ítem padre expande/colapsa el submenu
- Chevron/flecha rotativa indica estado abierto/cerrado

### 2. **Estilos Visuales**
- Submenus con fondo diferente (L400) para distinguerse
- Línea izquierda en accent para separación visual
- Hover states en items del submenu
- Active states para mostrar página actual

### 3. **Comportamiento**
- Solo un submenu abierto a la vez
- Los items del submenu cierran el sidebar en mobile (< 768px)
- Auto-expansión de submenu si la página actual está en él

## 📝 Estructura HTML

### Componente sin Submenu (Estándar)
```html
<a href="input/" class="sidebar-nav-item">
  <i class="fas fa-keyboard"></i>
  <span>Inputs</span>
</a>
```

### Componente con Submenu
```html
<!-- Button con Submenu -->
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="button-submenu">
  <i class="fas fa-square"></i>
  <span>Botones</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="button-submenu">
  <a href="button/primary.html" class="sidebar-submenu-item">
    <i class="fas fa-star"></i>
    <span>Primary</span>
  </a>
  <a href="button/secondary.html" class="sidebar-submenu-item">
    <i class="fas fa-circle-notch"></i>
    <span>Secondary</span>
  </a>
  <a href="button/error.html" class="sidebar-submenu-item">
    <i class="fas fa-exclamation-circle"></i>
    <span>Error</span>
  </a>
</div>
```

## 🎨 Clases CSS Relacionadas

```css
/* Botón que abre/cierra submenu */
.sidebar-submenu-btn
  - display: flex con gap
  - padding, border, cursor pointer
  - active state con background primario y border-left
  - transition 0.2s ease

.sidebar-submenu-toggle
  - Chevron que rota 90deg cuando abierto
  - transition smooth

/* Contenedor del submenu */
.sidebar-submenu
  - display: none (default)
  - display: flex cuando .open
  - flex-direction: column
  - background L400
  - border-left accent 2px

/* Items dentro del submenu */
.sidebar-submenu-item
  - padding diferente (0.6rem vs 0.75rem)
  - font-size: 0.875rem
  - hover con background L300 y border-left accent
  - active con background L200
```

## 🔧 JavaScript

### Submenu Toggle
```javascript
submenuButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const submenuId = btn.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);
    // Close other submenus
    // Toggle current submenu
  });
});
```

### Auto-Expansion
Si la URL actual coincide con un submenu-item, el submenu se abre automáticamente:
```javascript
if (currentPath.includes(href)) {
  item.classList.add('active');
  // Open parent submenu
}
```

## 📱 Responsive Behavior

- **Desktop (> 768px)**
  - Submenus visibles por defecto
  - Click para expandir/colapsar
  - Sidebar no se cierra al hacer click

- **Mobile (< 768px)**
  - Submenus colapsables
  - Click en submenu-item cierra sidebar
  - Chevron rotación clara indica estado

## 🎯 Variaciones de Componentes

### Botones (Implementado)
- `button/primary.html` - Botón primario
- `button/secondary.html` - Botón secundario
- `button/error.html` - Botón de error

### Próximos Componentes con Variaciones
Otros componentes que podrían tener submenus:
- **Calendar**: datepicker, interactive, test
- **Stepper**: simple, demo
- **Input**: diferentes estados (disabled, error, success)

## ✅ Checklist para Agregar Nuevos Submenus

1. **HTML**
   - [ ] Cambiar `<a>` a `<button class="sidebar-submenu-btn">`
   - [ ] Agregar `data-submenu="component-id"`
   - [ ] Agregar `<i class="fas fa-chevron-right sidebar-submenu-toggle"></i>`
   - [ ] Crear `<div class="sidebar-submenu" id="component-id">`
   - [ ] Dentro: `<a class="sidebar-submenu-item">` para cada variación

2. **Rutas**
   - [ ] Verificar que las rutas de variaciones existan
   - [ ] Ejemplo: `button/primary.html`

3. **Iconos**
   - [ ] Agregar icono appropriado a cada item
   - [ ] Usar Font Awesome 6.4.0

4. **Testing**
   - [ ] Click en botón expande submenu
   - [ ] Click en item de submenu navega
   - [ ] Mobile cierra sidebar automáticamente
   - [ ] Active state aparece correctamente

## 📊 Ejemplo: Agregando Submenu a Calendar

```html
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="calendar-submenu">
  <i class="fas fa-calendar"></i>
  <span>Calendar</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="calendar-submenu">
  <a href="calendar/" class="sidebar-submenu-item">
    <i class="fas fa-calendar-days"></i>
    <span>Default</span>
  </a>
  <a href="calendar/datepicker.html" class="sidebar-submenu-item">
    <i class="fas fa-calendar-days"></i>
    <span>Datepicker</span>
  </a>
  <a href="calendar/interactive.html" class="sidebar-submenu-item">
    <i class="fas fa-calendar-days"></i>
    <span>Interactive</span>
  </a>
</div>
```

## 🔍 Debug Tips

### Submenus no se abren
- Verificar que `data-submenu` coincida con el `id` del submenu
- Verificar que JavaScript se cargó correctamente
- Revisar console para errores

### Estilos incorrectos
- Verificar clases CSS: `.sidebar-submenu-btn`, `.sidebar-submenu`, `.sidebar-submenu-item`
- Verificar variables de color definidas

### Mobile no funciona
- Verificar media query `window.innerWidth <= 768`
- Comprobar que se agregó `addEventListener` a submenu items

## 🎨 Color Variables Usadas

- `--sb-ui-color-primary-base` - Color primario
- `--sb-ui-color-primary-L400` - Fondo hover
- `--sb-ui-color-primary-L300` - Border accent
- `--sb-ui-color-secondary-base` - Border activo
- `--sb-ui-color-grayscale-base` - Texto default
- `--sb-ui-color-grayscale-D100` - Texto oscuro
- `--sb-ui-color-grayscale-L200` - Background activo
- `--sb-ui-color-grayscale-L300` - Background hover
- `--sb-ui-color-grayscale-L400` - Background submenu

## 📈 Performance

- CSS transitions: 0.2s ease (rápido y fluido)
- No hay animaciones complejas
- Event delegation para mejorar eficiencia
- Archivo CSS inline (sin request adicional)

## 🔄 Actualización del Dashboard

El archivo `index.html` ha sido actualizado con:
- **Líneas de CSS**: +70 (Nuevas clases de submenu)
- **Líneas de HTML**: +20 (Estructura de submenu para Button)
- **Líneas de JS**: +40 (Lógica de toggle y auto-expansion)
- **Total**: 1217 líneas (antes: 1151)

## 📚 Referencias

- [Font Awesome 6.4.0](https://fontawesome.com/docs/web/setup/setup-project)
- CSS Grid & Flexbox
- Vanilla JavaScript (sin dependencias)
- Design System Seguros Bolívar

---

**Última actualización**: 2024
**Versión**: 1.0
