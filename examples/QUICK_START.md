# 🚀 Quick Start - Dashboard

## 📍 Acceso Directo

```
🌐 http://localhost:3000/dashboard.html
```

---

## 🎨 Estructura (30 segundos)

```
HEADER
│
├─ Logo + Hamburger (mobile)
├─ Notificaciones (🔔 badge)
├─ Mensajes (📧)
├─ Configuración (⚙️)
└─ Perfil usuario (👤)

SIDEBAR (Navegación)
│
├─ Componentes Básicos
│  ├─ Botones
│  ├─ Inputs
│  ├─ Textarea
│  ├─ Selects
│  ├─ Checkboxes
│  ├─ Radios
│  └─ Toggle
│
├─ Componentes Complejos
│  ├─ Modal
│  ├─ Dropdown
│  ├─ Calendar
│  ├─ Tabs
│  ├─ Stepper
│  └─ Breadcrumb
│
├─ Datos & Feedback
│  ├─ Tablas
│  ├─ Alerts
│  ├─ Spinner
│  ├─ Accordion
│  └─ File Upload
│
└─ Otros
   ├─ Inicio
   ├─ Guía Inicio
   └─ Demo Formulario

CONTENIDO
│
└─ Cards de componentes
   └─ [Icono] Título + Descripción + Badges
```

---

## 🎯 Lo que puedes hacer

| Acción | Resultado |
|--------|-----------|
| Click en **☰** | Abre/cierra sidebar (mobile) |
| Click en **componente** | Navega a demo |
| Click en **🔔** | Muestra notificaciones |
| Click en **👤** | Muestra perfil |
| Resize ventana | Layout se adapta |

---

## 📱 Responsive

```
DESKTOP (>1024px)  │  TABLET (768-1024px)  │  MOBILE (<768px)
─────────────────  │  ──────────────────   │  ────────────────
Sidebar fijo      │  Sidebar activo      │  Sidebar modal
Grid 3 cols       │  Grid 2 cols         │  Grid 1 col
Header normal     │  Header normal       │  Header comprimido
Hamburger ❌      │  Hamburger ✅        │  Hamburger ✅
```

---

## 🎨 Personalización (30 segundos)

### Cambiar marca
```html
<!-- En dashboard.html línea 1 -->
<html data-brand="seguros-bolivar" data-theme="light">

<!-- Opciones: -->
- seguros-bolivar (verde) ← Por defecto
- davivienda (rojo)
- jelpit (morado)
- cien-cuadras (azul)
- doctor-aki (verde oliva)
- white-label (genérico)
```

### Cambiar tema
```html
<!-- Reemplaza "light" por "dark" -->
<html data-brand="seguros-bolivar" data-theme="dark">
```

---

## 📚 Agregar Nuevo Componente

### 1. En sidebar (aprox. línea 480)
```html
<a href="mi-componente/" class="sidebar-nav-item">
  <i class="fas fa-icono"></i>
  <span>Mi Componente</span>
</a>
```

### 2. En grid de contenido
```html
<a href="mi-componente/" class="component-card">
  <div class="component-card-header">
    <div class="component-icon">
      <i class="fas fa-icono"></i>
    </div>
    <h3 class="component-title">Mi Componente</h3>
  </div>
  <p class="component-description">
    Descripción del componente...
  </p>
  <div class="component-meta">
    <span class="component-badge css">CSS</span>
    <span class="component-badge">Categoría</span>
  </div>
</a>
```

---

## 🎨 Colores CSS Variables

```css
/* Disponibles en el CSS del Design System */
var(--sb-ui-color-primary-base)      /* Verde Bolívar */
var(--sb-ui-color-secondary-base)    /* Amarillo */
var(--sb-ui-color-grayscale-white)   /* Blanco */
var(--sb-ui-color-grayscale-L400)    /* Gris claro */
var(--sb-ui-color-grayscale-base)    /* Gris medio */
var(--sb-ui-color-grayscale-D100)    /* Gris oscuro */
var(--sb-ui-color-warning-base)      /* Naranja */
```

---

## 📂 Archivos Relacionados

```
examples/
├── dashboard.html                    ← Abre esto 🌐
├── NUEVO_DASHBOARD_SUMMARY.md       ← Resumen completo
├── DASHBOARD_GUIDE.md               ← Guía detallada
├── DASHBOARD_IMPROVEMENTS.md        ← Detalles técnicos
├── index.html                        ← Demo original
├── getting-started.html              ← Guía inicio
└── form-demo.html                    ← Demo formulario
```

---

## 🔥 Tips

1. **Abrir DevTools** (F12) y probar responsive
2. **Cambiar brand** en línea 1 para ver diferentes temas
3. **Click en hamburger** en mobile para ver sidebar modal
4. **Hover en cards** para ver efecto elevación
5. **Abrir en teléfono** para ver experiencia móvil completa

---

## ✅ Checklist

- [x] Header con notificaciones y perfil
- [x] Sidebar con 4 categorías
- [x] 27 componentes catalogados
- [x] Cards interactivas
- [x] Responsive mobile/tablet/desktop
- [x] Hamburger menu funcional
- [x] Auto-detección de componente activo
- [x] Iconos Font Awesome
- [x] Diseño profesional
- [x] Zero dependencias (solo CDN)

---

**Versión**: 1.0  
**Estado**: ✅ Listo para usar  
**URL**: http://localhost:3000/dashboard.html
