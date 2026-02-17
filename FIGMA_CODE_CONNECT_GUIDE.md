# Guía de Configuración - Figma Code Connect
## Seguros Bolívar UI Design System

Esta guía te ayudará a conectar todos los componentes del Design System con Figma usando Code Connect.

---

## 📋 Componentes del Repositorio

### **ATOMS (HTML + CSS)** - 21 componentes

| # | Componente Figma | Ruta en Código | Nombre Componente | Framework |
|---|-----------------|----------------|-------------------|-----------|
| 1 | **Accordion** | `packages/atoms/src/accordion.css` | `sb-ui-accordion` | CSS |
| 2 | **Alert** | `packages/atoms/src/alert.css` | `sb-ui-alert` | CSS |
| 3 | **Breadcrumb** | `packages/atoms/src/breadcrumb.css` | `sb-ui-breadcrumb` | CSS |
| 4 | **Button** | `packages/atoms/src/button.css` | `sb-ui-button` | CSS |
| 5 | **Calendar** (estilos) | `packages/atoms/src/calendar.css` | `sb-ui-calendar` / `sb-ui-datepicker` | CSS |
| 6 | **Checkbox** | `packages/atoms/src/checkbox.css` | `sb-ui-checkbox` | CSS |
| 7 | **File Upload** | `packages/atoms/src/file-upload.css` | `sb-ui-file-upload` | CSS |
| 8 | **Input** | `packages/atoms/src/input.css` | `sb-ui-input` | CSS |
| 9 | **Radio** | `packages/atoms/src/radio.css` | `sb-ui-radio` | CSS |
| 10 | **Select** | `packages/atoms/src/select.css` | `sb-ui-select` | CSS |
| 11 | **Spinner** | `packages/atoms/src/spinner.css` | `sb-ui-spinner` | CSS |
| 12 | **Stepper** (estilos) | `packages/atoms/src/stepper.css` | `sb-ui-stepper` | CSS |
| 13 | **Table** | `packages/atoms/src/table.css` | `sb-ui-table` | CSS |
| 14 | **Tabs** | `packages/atoms/src/tabs.css` | `sb-ui-tabs` | CSS |
| 15 | **Textarea** | `packages/atoms/src/textArea.css` | `sb-ui-textarea` | CSS |
| 16 | **Toggle** | `packages/atoms/src/toggle.css` | `sb-ui-toggle` | CSS |
| 17 | **Container** (layout) | `packages/atoms/src/container.css` | `sb-ui-container` | CSS |
| 18 | **Grid** (layout) | `packages/atoms/src/grid.css` | `sb-ui-grid` | CSS |
| 19 | **Columns** (layout) | `packages/atoms/src/columns.css` | `sb-ui-columns` | CSS |
| 20 | **Gutters** (layout) | `packages/atoms/src/gutters.css` | `sb-ui-gutters` | CSS |
| 21 | **CSS Grid** (layout) | `packages/atoms/src/css-grid.css` | `sb-ui-css-grid` | CSS |

### **MOLECULES (Web Components - TypeScript + Lit)** - 6 componentes

| # | Componente Figma | Ruta en Código | Nombre Componente | Framework |
|---|-----------------|----------------|-------------------|-----------|
| 22 | **Alert** (con comportamiento) | `packages/molecules/src/components/alert/alert-behavior.ts` | `SbUiAlert` | TypeScript |
| 23 | **Calendar** (Web Component) | `packages/molecules/src/components/Calendar.ts` | `SbUiCalendar` | TypeScript |
| 24 | **DatePicker** (Web Component) | `packages/molecules/src/components/DatePicker.ts` | `SbUiDatePicker` | TypeScript |
| 25 | **Modal** | `packages/molecules/src/components/modal/modal.ts` | `SbUiModal` | TypeScript |
| 26 | **Toast** | `packages/molecules/src/components/toast/toast.ts` | `SbUiToast` | TypeScript |
| 27 | **Toast Manager** | `packages/molecules/src/components/toast/toast-manager.ts` | `ToastManager` | TypeScript |

---

## 🔧 Pasos para Conectar Cada Componente

### **Para Atoms (CSS)**

1. En Figma, ve al panel de **Code Connect**
2. Selecciona el componente Atom (ej: **Alert**)
3. Haz clic en **"Connect to code component"**
4. Ingresa:
   - **Path**: `packages/atoms/src/alert.css`
   - **Component name**: `sb-ui-alert`
   - **Framework**: Selecciona **CSS**
5. Guarda la conexión

### **Para Molecules (TypeScript)**

1. En Figma, ve al panel de **Code Connect**
2. Selecciona el componente Molecule (ej: **Modal**)
3. Haz clic en **"Connect to code component"**
4. Ingresa:
   - **Path**: `packages/molecules/src/components/modal/modal.ts`
   - **Component name**: `SbUiModal`
   - **Framework**: Selecciona **TypeScript** o **Web Components**
5. Guarda la conexión

---

## 📝 Componentes Faltantes en el Repo

Según la imagen que compartiste, estos componentes están en Figma pero **NO en el repositorio**:

| Componente Figma | Estado | Acción Recomendada |
|-----------------|--------|-------------------|
| **Avatar** ❌ | No existe | Crear `packages/atoms/src/avatar.css` |
| **Badge** ❌ | No existe | Crear `packages/atoms/src/badge.css` |
| **Chip** ❌ | No existe | Crear `packages/atoms/src/chip.css` |
| **Handle slider** ❌ | No existe | Crear `packages/atoms/src/slider.css` o `range.css` |

---

## 🎯 Ejemplo Completo: Conectar Alert

### Paso 1: Localiza el componente en Figma
- Abre el archivo: https://www.figma.com/design/eIuLFSbsNQDepIGOXWLEiW/
- Ve al panel **Code Connect** (Dev Mode)
- Busca **"Alert"** en la lista de Atoms

### Paso 2: Conectar Alert CSS (Atom)
```
Path: packages/atoms/src/alert.css
Component name: sb-ui-alert
Framework: CSS
Label: CSS
```

### Paso 3: (Opcional) Conectar Alert con comportamiento (Molecule)
Si en Figma tienes un Alert interactivo, también puedes crear una segunda conexión:
```
Path: packages/molecules/src/components/alert/alert-behavior.ts
Component name: SbUiAlert
Framework: TypeScript
Label: TypeScript
```

---

## 🚀 Script de Automatización (Opcional)

Si prefieres automatizar esto usando la CLI de Figma Code Connect:

```bash
# Instalar CLI (requiere Node.js)
npm install -g @figma/code-connect

# Configurar
figma-code-connect init

# Crear conexiones automáticas (requiere configuración adicional)
figma-code-connect create
```

**Nota**: La automatización requiere configurar archivos `.figma.ts` para cada componente, lo cual puede ser más complejo que hacerlo manualmente en la interfaz de Figma.

---

## 📊 Resumen de Progreso

### Atoms a conectar: 21
- Accordion
- Alert
- Breadcrumb
- Button
- Calendar
- Checkbox
- File Upload
- Input
- Radio
- Select
- Spinner
- Stepper
- Table
- Tabs
- Textarea
- Toggle
- Container
- Grid
- Columns
- Gutters
- CSS Grid

### Molecules a conectar: 6
- Alert (behavior)
- Calendar (Web Component)
- DatePicker (Web Component)
- Modal
- Toast
- Toast Manager

### Componentes faltantes: 4
- Avatar (pendiente implementar)
- Badge (pendiente implementar)
- Chip (pendiente implementar)
- Handle slider (pendiente implementar)

---

## ❓ Preguntas Frecuentes

**P: ¿Qué pongo en "Component name"?**  
R: Para CSS, usa el nombre de la clase principal (ej: `sb-ui-button`). Para TypeScript, usa el nombre de la clase/export (ej: `SbUiModal`).

**P: ¿Qué framework selecciono?**  
R: Para archivos `.css` → **CSS**. Para archivos `.ts` → **TypeScript** o **Web Components**.

**P: ¿Puedo conectar un componente de Figma a múltiples archivos?**  
R: Sí, si tienes una versión CSS y otra TypeScript del mismo componente, puedes crear dos conexiones con diferentes labels.

**P: ¿Qué hago con los componentes que no existen en el repo?**  
R: Puedes:
1. Implementarlos siguiendo la estructura del Design System
2. Dejarlos sin conectar por ahora
3. Conectarlos a un placeholder comentando que están pendientes

---

## 📞 Siguiente Paso

Una vez que conectes los componentes en Figma, podrás:
- Ver el código directamente desde Figma
- Copiar snippets de código
- Mantener sincronizados diseño y código
- Facilitar la colaboración entre diseño y desarrollo

¿Necesitas ayuda implementando los componentes faltantes (Avatar, Badge, Chip, Slider)?
