# 📦 Seguros Bolívar UI Bundle

Sistema de Diseño Multi-Marca para aplicaciones web empresariales de Seguros Bolívar.

## 🚀 Instalación

### Opción 1: NPM (Recomendado)

```bash
npm install @seguros-bolivar/ui-bundle
```

```bash
pnpm add @seguros-bolivar/ui-bundle
```

```bash
yarn add @seguros-bolivar/ui-bundle
```

### Opción 2: CDN (Próximamente)

En futuras versiones estará disponible vía jsDelivr:

```html
<!-- Próximamente -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-seguros-bolivar-light.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"></script>
```

## 📚 Uso Básico

### Uso vía NPM

Después de instalar el paquete, importa los archivos desde `node_modules`:

```html
<!DOCTYPE html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi App - Seguros Bolívar</title>
  
  <!-- CSS del Design System desde node_modules -->
  <link rel="stylesheet" href="node_modules/@seguros-bolivar/ui-bundle/dist/sb-ui-seguros-bolivar-light.min.css">
  
  <!-- Web Components (opcional) -->
  <script type="module" src="node_modules/@seguros-bolivar/ui-bundle/dist/sb-ui-components.min.js"></script>
</head>
<body>
  <!-- Botones -->
  <button class="sb-ui-button sb-ui-button--primary">
    Botón Primary Stroke
  </button>
  
  <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
    Botón Primary Fill
  </button>

  <!-- Input -->
  <input type="text" class="sb-ui-input" placeholder="Escribe aquí">

  <!-- Badge -->
  <span class="sb-ui-badge sb-ui-badge--success">Activo</span>
  
  <!-- Card -->
  <div class="sb-ui-card">
    <div class="sb-ui-card__body">
      Contenido de la tarjeta
    </div>
  </div>

  <!-- Alert -->
  <div class="sb-ui-alert sb-ui-alert--info">
    Este es un mensaje informativo
  </div>

  <!-- Web Components: Datepicker -->
  <sb-ui-datepicker
    label="Fecha de nacimiento"
    placeholder="DD/MM/YYYY">
  </sb-ui-datepicker>
</body>
</html>
```

### Integración con Bundlers (Webpack, Vite, etc.)

```javascript
// En tu archivo principal JS/TS
import '@seguros-bolivar/ui-bundle/dist/sb-ui-seguros-bolivar-light.min.css';
import '@seguros-bolivar/ui-bundle/dist/sb-ui-components.min.js';
```

## 🎨 Bundles Disponibles

El paquete incluye **12 archivos CSS** (6 marcas × 2 temas):

| Marca | Tema Light | Tema Dark |
|-------|-----------|-----------|
| **Seguros Bolívar** | `sb-ui-seguros-bolivar-light.min.css` | `sb-ui-seguros-bolivar-dark.min.css` |
| **Davivienda** | `sb-ui-davivienda-light.min.css` | `sb-ui-davivienda-dark.min.css` |
| **Jelpit** | `sb-ui-jelpit-light.min.css` | `sb-ui-jelpit-dark.min.css` |
| **Cien Cuadras** | `sb-ui-cien-cuadras-light.min.css` | `sb-ui-cien-cuadras-dark.min.css` |
| **Doctor Aki** | `sb-ui-doctor-aki-light.min.css` | `sb-ui-doctor-aki-dark.min.css` |
| **White Label** | `sb-ui-white-label-light.min.css` | `sb-ui-white-label-dark.min.css` |

### Cambiar de Marca/Tema

**Opción 1:** Actualiza el atributo `data-brand` y `data-theme` en el `<html>`:

```html
<!-- Seguros Bolívar Light -->
<html data-brand="seguros-bolivar" data-theme="light">

<!-- Davivienda Dark -->
<html data-brand="davivienda" data-theme="dark">

<!-- Jelpit Light -->
<html data-brand="jelpit" data-theme="light">
```

**Opción 2:** Cambia el archivo CSS importado:

```html
<!-- Cambiar de Seguros Bolívar a Davivienda -->
<link rel="stylesheet" href="node_modules/@seguros-bolivar/ui-bundle/dist/sb-ui-davivienda-light.min.css">
```

## 🎯 Componentes Disponibles

### Botones

```html
<!-- Botones Primary -->
<button class="sb-ui-button sb-ui-button--primary">Primary Stroke</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Primary Fill</button>

<!-- Botones Secondary -->
<button class="sb-ui-button sb-ui-button--secondary">Secondary</button>
<button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Secondary Fill</button>

<!-- Botones Error -->
<button class="sb-ui-button sb-ui-button--error">Error</button>

<!-- Tamaños -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--small">Small</button>
<button class="sb-ui-button sb-ui-button--primary">Medium</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--large">Large</button>

<!-- Estados -->
<button class="sb-ui-button sb-ui-button--primary" disabled>Disabled</button>
```

### Input

```html
<!-- Input normal -->
<input type="text" class="sb-ui-input" placeholder="Escribe aquí">

<!-- Input con error -->
<input type="text" class="sb-ui-input sb-ui-input--error" value="Texto con error">

<!-- Input disabled -->
<input type="text" class="sb-ui-input" disabled placeholder="Disabled">
```

### Badge

```html
<span class="sb-ui-badge sb-ui-badge--success">Activo</span>
<span class="sb-ui-badge sb-ui-badge--error">Error</span>
<span class="sb-ui-badge sb-ui-badge--warning">Advertencia</span>
<span class="sb-ui-badge sb-ui-badge--info">Info</span>
<span class="sb-ui-badge sb-ui-badge--default">Default</span>
```

### Card

```html
<div class="sb-ui-card">
  <div class="sb-ui-card__header">
    <h3>Título de la tarjeta</h3>
  </div>
  <div class="sb-ui-card__body">
    Contenido principal de la tarjeta
  </div>
  <div class="sb-ui-card__footer">
    <button class="sb-ui-button sb-ui-button--primary">Acción</button>
  </div>
</div>
```

### Alert

```html
<div class="sb-ui-alert sb-ui-alert--success">
  Operación exitosa
</div>

<div class="sb-ui-alert sb-ui-alert--error">
  Error al procesar
</div>

<div class="sb-ui-alert sb-ui-alert--warning">
  Advertencia importante
</div>

<div class="sb-ui-alert sb-ui-alert--info">
  Información relevante
</div>
```

### Web Components

```html
<!-- Datepicker -->
<sb-ui-datepicker
  label="Fecha de nacimiento"
  placeholder="DD/MM/YYYY"
  value="2024-01-15">
</sb-ui-datepicker>

<!-- Modal -->
<sb-ui-modal id="my-modal" title="Título del Modal">
  <p>Contenido del modal</p>
</sb-ui-modal>

<!-- Toast -->
<sb-ui-toast message="Operación exitosa" type="success"></sb-ui-toast>

<!-- Stepper -->
<sb-ui-stepper current-step="1">
  <sb-ui-step label="Paso 1"></sb-ui-step>
  <sb-ui-step label="Paso 2"></sb-ui-step>
  <sb-ui-step label="Paso 3"></sb-ui-step>
</sb-ui-stepper>
```

## 📦 Contenido del Bundle

Cada archivo CSS incluye:

- ✅ **Design Tokens** (colores, tipografía, espaciado, sombras)
- ✅ **Componentes Atómicos** (botones, inputs, selects, checkboxes, radios, etc.)
- ✅ **Componentes Moleculares** (modales, dropdowns, toasts, steppers)
- ✅ **Grid System** (12 columnas, responsive)
- ✅ **Utilidades** (espaciado, tipografía, colores)
- ✅ **Fuentes Bolivar** (Light, Regular, SemiBold, Bold, ExtraBold)
- ✅ **Brand Overrides** (estilos específicos por marca)

### Tamaños de Archivos (Gzipped)

| Archivo | Tamaño |
|---------|--------|
| CSS (minificado + gzip) | ~23-27 KB |
| JavaScript (minificado + gzip) | ~16 KB |
| Fuentes WOFF2 (10 archivos) | ~350 KB total |
| **Total aproximado** | **~390 KB** |

## 🔧 Lista Completa de Componentes

### Atoms (CSS)
- Accordion
- Alert
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Checkbox
- FileUpload
- Input
- Menu
- Radio
- Select
- Spinner
- Table
- Tabs
- TextArea
- Toggle

### Molecules (Web Components)
- `<sb-ui-datepicker>`
- `<sb-ui-modal>`
- `<sb-ui-dropdown>`
- `<sb-ui-toast>`
- `<sb-ui-stepper>`

## 🤝 Soporte

- **Issues:** https://github.com/segurosbolivar/seguros-bolivar-ui-lib/issues
- **Repository:** https://github.com/segurosbolivar/seguros-bolivar-ui-lib

## 📄 Licencia

MIT © Seguros Bolívar
