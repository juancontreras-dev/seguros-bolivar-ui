# 📊 Dashboard de Componentes

Nueva página mejorada con **menú superior** y **sidebar de navegación** para explorar todos los componentes del Design System.

## 🎯 Características

✨ **Diseño Moderno**
- Menú superior con logo, notificaciones y perfil de usuario
- Sidebar con navegación organizada por categorías
- Layout responsive (mobile, tablet, desktop)
- Scrollbars estilizadas

🎨 **Organización por Categorías**
- **Componentes Básicos**: Botones, Inputs, Selects, etc.
- **Componentes Complejos**: Modal, Calendar, Dropdown, etc.
- **Datos & Feedback**: Tablas, Alerts, Spinner, etc.
- **Otros**: Enlaces rápidos a demos

📱 **Responsive Design**
- Mobile: Hamburger menu + sidebar colapsable
- Tablet: Sidebar comprimido
- Desktop: Layout completo

## 📂 Ubicación

```
examples/
├── dashboard.html      ← Nueva página principal
├── index.html          ← Demo original
├── getting-started.html
└── ... (componentes)
```

## 🚀 Uso

### Abrir en el navegador

```bash
# Si está sirviendo en localhost:3000
http://localhost:3000/dashboard.html
```

### Características interactivas

1. **Menú Hamburger** (Mobile): Abre/cierra el sidebar
2. **Notificaciones**: Icono con badge rojo en el header
3. **Perfil Usuario**: Muestra nombre y empresa
4. **Navegación Lateral**: Links a cada componente
5. **Cards de Componentes**: 
   - Icono y descripción
   - Badges de tipo (CSS, Web Component)
   - Enlace directo a la demo

## 🎨 Estructura HTML

### Header
```html
<header class="header">
  <!-- Logo + Hamburger -->
  <!-- Notificaciones -->
  <!-- Perfil Usuario -->
</header>
```

### Layout
```
┌─────────────────────────────────────┐
│          HEADER                     │
├──────────────┬──────────────────────┤
│              │                      │
│  SIDEBAR     │   CONTENIDO          │
│              │   (Componentes)      │
│              │                      │
└──────────────┴──────────────────────┘
```

## 🛠️ Personalización

### Cambiar marca/tema
En el HTML, modifica el atributo `data-brand`:

```html
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
```

Opciones:
- `seguros-bolivar` (verde + amarillo)
- `davivienda` (rojo)
- `jelpit` (morado)
- `cien-cuadras` (azul)
- `doctor-aki` (verde oliva)
- `white-label` (genérico)

Temas:
- `light` (claro)
- `dark` (oscuro)

### Agregar nuevos componentes

En la sección correspondiente del sidebar, añade:

```html
<a href="mi-componente/" class="sidebar-nav-item">
  <i class="fas fa-icon"></i>
  <span>Mi Componente</span>
</a>
```

Y en el grid de componentes:

```html
<a href="mi-componente/" class="component-card">
  <div class="component-card-header">
    <div class="component-icon">
      <i class="fas fa-icon"></i>
    </div>
    <h3 class="component-title">Mi Componente</h3>
  </div>
  <p class="component-description">Descripción...</p>
  <div class="component-meta">
    <span class="component-badge css">CSS</span>
  </div>
</a>
```

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Cambios |
|-------------|-------|---------|
| Mobile | < 480px | Stack vertical, sidebar full-width |
| Tablet | 481px - 768px | Hamburger menu activo |
| Desktop | > 1024px | Layout completo con sidebar fijo |

## 🎯 Mejoras Respecto a index.html

| Aspecto | Antes | Ahora |
|--------|-------|-------|
| Navegación | Ninguna | Sidebar + Header |
| Organización | Grid plano | Categorías bien definidas |
| Mobile | Header responsive | Hamburger + sidebar colapsable |
| Metadata | Mínima | Badges y categorías |
| Interactividad | Baja | Hover effects, active states |

## 🔗 Enlaces Rápidos

- [Dashboard](./dashboard.html)
- [Demo Original](./index.html)
- [Guía de Inicio](./getting-started.html)
- [Demo Formulario](./form-demo.html)

## 💡 Tips

1. **Menú activo**: Se destaca el componente actual según la URL
2. **Cerrar sidebar en mobile**: Al hacer click en un enlace se cierra automáticamente
3. **Scrollbar personalizado**: Estilos suaves que combinan con el design
4. **Iconos**: Usa Font Awesome 6.4.0 para los iconos

---

**Creado**: 28 de enero de 2026
**Estado**: ✅ Lista para usar
