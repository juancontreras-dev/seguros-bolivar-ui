# 🔧 Cómo Agregar Submenus a Otros Componentes

Este archivo contiene ejemplos y pasos para agregar submenus expandibles a otros componentes del design system.

## 📋 Componentes Candidatos para Submenus

Estos componentes tienen múltiples variaciones que podrían beneficiarse de submenus:

### 1. **Calendar** ✅ Recomendado
**Archivos**:
- `calendar/` - Default
- `calendar/datepicker.html`
- `calendar/interactive.html`
- `calendar/test.html`

**HTML a Agregar**:
```html
<!-- Reemplazar línea en sidebar -->
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
  <a href="calendar/test.html" class="sidebar-submenu-item">
    <i class="fas fa-vial"></i>
    <span>Test</span>
  </a>
</div>
```

**Ubicación en index.html**: Línea ~710 (en sección "Componentes Complejos")

---

### 2. **Stepper** ✅ Recomendado
**Archivos**:
- `stepper/` - Default
- `stepper/simple.html`
- `stepper/demo.html`

**HTML a Agregar**:
```html
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="stepper-submenu">
  <i class="fas fa-arrow-down-1-9"></i>
  <span>Stepper</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="stepper-submenu">
  <a href="stepper/" class="sidebar-submenu-item">
    <i class="fas fa-list-ol"></i>
    <span>Default</span>
  </a>
  <a href="stepper/simple.html" class="sidebar-submenu-item">
    <i class="fas fa-list-ol"></i>
    <span>Simple</span>
  </a>
  <a href="stepper/demo.html" class="sidebar-submenu-item">
    <i class="fas fa-list-ol"></i>
    <span>Demo</span>
  </a>
</div>
```

**Ubicación en index.html**: Línea ~715 (en sección "Componentes Complejos")

---

### 3. **Input** ✅ Posible
**Archivos**:
- `input/` - Default/Standard

**Nota**: Actualmente solo tiene una página. Considere agregar variaciones:
- `input/states.html` - Estados (disabled, error, success, focus)
- `input/sizes.html` - Tamaños (small, medium, large)
- `input/types.html` - Tipos (text, email, password, number)

Si desea agregar estas variaciones:
```html
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="input-submenu">
  <i class="fas fa-keyboard"></i>
  <span>Inputs</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="input-submenu">
  <a href="input/" class="sidebar-submenu-item">
    <i class="fas fa-rectangle-portrait"></i>
    <span>Standard</span>
  </a>
  <a href="input/states.html" class="sidebar-submenu-item">
    <i class="fas fa-rectangle-portrait"></i>
    <span>Estados</span>
  </a>
  <a href="input/sizes.html" class="sidebar-submenu-item">
    <i class="fas fa-rectangle-portrait"></i>
    <span>Tamaños</span>
  </a>
</div>
```

---

### 4. **Select** ✅ Posible
**Archivos**:
- `select/` - Default

**Variaciones Sugeridas**:
- `select/multiselect.html`
- `select/searchable.html`
- `select/with-groups.html`

**HTML**:
```html
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="select-submenu">
  <i class="fas fa-list"></i>
  <span>Selects</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="select-submenu">
  <a href="select/" class="sidebar-submenu-item">
    <i class="fas fa-list"></i>
    <span>Default</span>
  </a>
  <a href="select/multiselect.html" class="sidebar-submenu-item">
    <i class="fas fa-list"></i>
    <span>Multiselect</span>
  </a>
  <a href="select/searchable.html" class="sidebar-submenu-item">
    <i class="fas fa-list"></i>
    <span>Searchable</span>
  </a>
</div>
```

---

### 5. **Alert** ✅ Recomendado
**Archivos**:
- `alert/` - Default (generalmente contiene múltiples variaciones de tipos)

**Nota**: Los alerts generalmente tienen estados (success, warning, error, info). Si están separados en archivos:

```html
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="alert-submenu">
  <i class="fas fa-triangle-exclamation"></i>
  <span>Alerts</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>

<div class="sidebar-submenu" id="alert-submenu">
  <a href="alert/" class="sidebar-submenu-item">
    <i class="fas fa-circle-info"></i>
    <span>Info</span>
  </a>
  <a href="alert/success.html" class="sidebar-submenu-item">
    <i class="fas fa-circle-check"></i>
    <span>Success</span>
  </a>
  <a href="alert/warning.html" class="sidebar-submenu-item">
    <i class="fas fa-circle-exclamation"></i>
    <span>Warning</span>
  </a>
  <a href="alert/error.html" class="sidebar-submenu-item">
    <i class="fas fa-circle-xmark"></i>
    <span>Error</span>
  </a>
</div>
```

---

## 🔍 Análisis de Componentes Actuales

### Con Múltiples Archivos (Perfectos para Submenus)
```
button/
├── primary.html ✅ (Ya tiene submenu)
├── secondary.html ✅
└── error.html ✅

calendar/
├── index.html (default)
├── datepicker.html ⭐
├── interactive.html ⭐
└── test.html ⭐

stepper/
├── index.html (default)
├── simple.html ⭐
└── demo.html ⭐
```

### Con Archivo Único (No necesita submenu ahora)
```
input/ (solo index.html)
textarea/ (solo index.html)
select/ (solo index.html)
checkbox/ (solo index.html)
radio/ (solo index.html)
toggle/ (solo index.html)
modal/ (solo index.html)
dropdown/ (solo index.html)
tabs/ (solo index.html)
breadcrumb/ (solo index.html)
table/ (solo index.html)
alert/ (solo index.html)
spinner/ (solo index.html)
accordion/ (solo index.html)
file-upload/ (solo index.html)
```

---

## 📝 Paso a Paso: Agregar Submenu a Calendar

### Paso 1: Localizar el Componente en index.html
```
Buscar: <a href="calendar/" class="sidebar-nav-item">
```

### Paso 2: Reemplazar el `<a>` con `<button>`
```html
<!-- ANTES -->
<a href="calendar/" class="sidebar-nav-item">
  <i class="fas fa-calendar"></i>
  <span>Calendar</span>
</a>

<!-- DESPUÉS -->
<button class="sidebar-submenu-btn sidebar-nav-item" data-submenu="calendar-submenu">
  <i class="fas fa-calendar"></i>
  <span>Calendar</span>
  <i class="fas fa-chevron-right sidebar-submenu-toggle"></i>
</button>
```

### Paso 3: Agregar el Contenedor del Submenu
```html
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
  <a href="calendar/test.html" class="sidebar-submenu-item">
    <i class="fas fa-vial"></i>
    <span>Test</span>
  </a>
</div>
```

### Paso 4: ✅ ¡Listo!
El JavaScript ya está configurado para manejar:
- Click en botón para expandir/colapsar
- Auto-expansion si estás en esa página
- Mobile auto-close

---

## 🎯 Recomendación Priorizada

### Fase 1 (Inmediata) ✅ Completada
- ✅ Button con Primary, Secondary, Error

### Fase 2 (Próxima)
- ⭐ Calendar (4 variaciones)
- ⭐ Stepper (3 variaciones)

### Fase 3 (Opcional)
- Input (si creas states.html, sizes.html)
- Select (si creas multiselect.html, searchable.html)
- Alert (si están separados por tipo)

---

## 🚀 Quick Implementation Checklist

Para agregar submenu a cualquier componente:

- [ ] 1. Identificar archivos con múltiples variaciones
- [ ] 2. Cambiar `<a>` a `<button class="sidebar-submenu-btn">`
- [ ] 3. Agregar `data-submenu="id-unico"`
- [ ] 4. Agregar flecha: `<i class="fas fa-chevron-right sidebar-submenu-toggle"></i>`
- [ ] 5. Crear `<div class="sidebar-submenu" id="id-unico">`
- [ ] 6. Agregar items: `<a class="sidebar-submenu-item" href="...">`
- [ ] 7. Elegir icono apropiado para cada variación
- [ ] 8. Test: Click en button, click en item, check mobile behavior
- [ ] 9. Verificar active state aparece en página actual

---

## 💡 Tips

### Iconografía para Variaciones
- **States/Estados**: `fa-circle-info`, `fa-circle-check`, `fa-circle-exclamation`, `fa-circle-xmark`
- **Tamaños**: `fa-magnifying-glass-plus`, `fa-magnifying-glass-minus`
- **Tipos**: `fa-font`, `fa-lock`, `fa-at`
- **Demo**: `fa-play`, `fa-vial`
- **Default**: `fa-list` o el icono principal

### Mantener Coherencia
- Usar mismo color para todos los submenus
- Hover/Active states consistentes
- Transiciones suave (0.2s ease)
- Iconos de Font Awesome 6.4.0

### Testing
```javascript
// En console para verificar submenus
document.querySelectorAll('.sidebar-submenu-btn').forEach(btn => {
  console.log(btn.getAttribute('data-submenu'));
});
```

---

**Última actualización**: 2024
**Versión**: 1.0
