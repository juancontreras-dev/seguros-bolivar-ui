# 📊 Seguros Bolívar UI - Ejemplos & Demostraciones

## 🎯 ACTUALIZACIÓN: 28 de enero 2026

### ✨ **index.html - RENOVADO**

La página principal (`index.html`) ha sido completamente modernizada con:

- ✅ **Header profesional**: Logo, notificaciones (badge), perfil usuario
- ✅ **Sidebar inteligente**: 27 componentes en 4 categorías bien organizadas
- ✅ **Navegación mejorada**: Enlaces directos a cada demo
- ✅ **Layout responsive**: Mobile, tablet, desktop con hamburger menu
- ✅ **Auto-detección**: Marca activo según URL actual
- ✅ **Documentación integrada**: Descripciones y badges informativos
- ✅ **Footer completo**: Enlaces a recursos y componentes

---

## 📁 Estructura Actualizada

---

## 📋 Archivos

```
examples/
├── index.html              → 🏠 Demo principal con navegación
├── button/                 → 🔘 Demos de botones
│   ├── primary.html        → 🔵 Matriz completa botones primarios
│   └── secondary.html      → 🟡 Matriz completa botones secundarios
├── README.md               → Esta guía
├── USO-BOTONES.md          → Guía rápida de uso de botones
└── dist/                   → CSS y JS compilados
    ├── sb-ui-*.min.css     → Bundles por marca (99KB → 9.9KB brotli)
    └── sb-ui-components.min.js → Web Components
```

## 🎨 Demos Disponibles

### 1. **Demo Principal** (`index.html`)

- Vista general de componentes
- Selector interactivo de marca y tema
- Navegación a demos específicos

### 2. **Botones Primarios** (`button/primary.html`)

- Matriz completa: 3 variantes × 6 estados
- Fill, Stroke, Text
- Con iconos (left, right, only)

### 3. **Botones Secundarios** (`button/secondary.html`)

- Matriz completa de secundarios
- Override especial Seguros Bolívar
- 3 variantes × 6 estados

---

## 🚀 Ver Ejemplos

```bash
cd examples
npx serve
```

Abre en el navegador: `http://localhost:3000`

---

## 🎯 ¿Qué Ver?

### 1. **`index.html`** - Demo Principal

- Selector de 6 marcas (White Label, Jelpit, Davivienda, Cien Cuadras, Doctor Aki, Seguros Bolívar)
- Toggle Light/Dark theme
- Ejemplos de botones
- Modal interactivo
- Link a documentación completa de botones

### 2. **`button.html`** - Documentación Completa

- Todos los tipos de botón (Primary, Secondary, Tertiary, Error)
- Todas las variantes (Stroke, Fill, Text)
- Todos los tamaños (Small, Medium, Large)
- Con iconos (Left, Right, Only)
- Estados (Loading, Disabled)

### 3. **`USO-BOTONES.md`** - Guía de Uso

- Reglas básicas de las clases
- Defaults del sistema (FILL, MEDIUM)
- Ejemplos completos
- Errores comunes a evitar

---

## 🔧 Cambiar Marca

### Opción 1: Selector Visual

Usa el dropdown en la página para cambiar entre marcas.

### Opción 2: Data Attribute

Edita el HTML:

```html
<!-- En index.html o button.html, línea 2 -->
<html data-brand="seguros-bolivar" data-theme="light"></html>
```

Marcas disponibles:

- `white-label`
- `jelpit`
- `davivienda`
- `cien-cuadras`
- `doctor-aki`
- `seguros-bolivar`

---

## 📦 Bundle por Marca

Cada marca tiene su propio bundle que incluye:

1. **Tokens**: Colores, tipografía, espaciado de la marca
2. **Atoms**: Componentes base (button, etc.)
3. **Overrides**: Personalizaciones específicas de marca

```html
<!-- Ejemplo: Cargar bundle de Seguros Bolívar Light -->
<link rel="stylesheet" href="dist/sb-ui-seguros-bolivar-light.min.css" />
```

**Tamaño**: ~34KB minificado, ~4.7KB gzip

---

## ✨ Características

- ✅ **6 Marcas** con tokens propios
- ✅ **2 Temas** (Light/Dark) por marca
- ✅ **CSS Puro** para componentes simples
- ✅ **Web Components** para componentes complejos
- ✅ **Data Attributes** para cambio de marca
- ✅ **Persistencia** de marca/tema con localStorage
- ✅ **Navegación fluida** entre páginas con marca sincronizada
- ✅ **Responsive** y accesible

---

## 💾 Persistencia de Marca

La marca y tema seleccionados se guardan automáticamente en `localStorage`:

- Selecciona una marca en `index.html`
- Navega a `button.html`
- ✅ La marca persiste automáticamente

[Ver documentación completa →](./PERSISTENCIA.md)

---

**Última actualización**: 2025-01-10
