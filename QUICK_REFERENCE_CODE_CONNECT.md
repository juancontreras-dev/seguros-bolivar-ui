# Quick Reference - Figma Code Connect
## Seguros Bolívar UI Design System

---

## 🎯 Configuración Rápida para Atoms (CSS)

### Formato para cada Atom:
```
Path: packages/atoms/src/[NOMBRE].css
Component name: sb-ui-[NOMBRE]
Framework: CSS
Label: CSS
```

### Lista de Atoms (21 implementados):

| Componente Figma | Path | Component Name |
|-----------------|------|----------------|
| Accordion | `packages/atoms/src/accordion.css` | `sb-ui-accordion` |
| Alert | `packages/atoms/src/alert.css` | `sb-ui-alert` |
| Breadcrumb | `packages/atoms/src/breadcrumb.css` | `sb-ui-breadcrumb` |
| Button | `packages/atoms/src/button.css` | `sb-ui-button` |
| Calendar | `packages/atoms/src/calendar.css` | `sb-ui-calendar` |
| Checkbox | `packages/atoms/src/checkbox.css` | `sb-ui-checkbox` |
| File Upload | `packages/atoms/src/file-upload.css` | `sb-ui-file-upload` |
| Input | `packages/atoms/src/input.css` | `sb-ui-input` |
| Radio | `packages/atoms/src/radio.css` | `sb-ui-radio` |
| Select | `packages/atoms/src/select.css` | `sb-ui-select` |
| Spinner | `packages/atoms/src/spinner.css` | `sb-ui-spinner` |
| Stepper | `packages/atoms/src/stepper.css` | `sb-ui-stepper` |
| Table | `packages/atoms/src/table.css` | `sb-ui-table` |
| Tabs | `packages/atoms/src/tabs.css` | `sb-ui-tabs` |
| Textarea | `packages/atoms/src/textArea.css` | `sb-ui-textarea` |
| Toggle | `packages/atoms/src/toggle.css` | `sb-ui-toggle` |
| Container | `packages/atoms/src/container.css` | `sb-ui-container` |
| Grid | `packages/atoms/src/grid.css` | `sb-ui-grid` |
| Columns | `packages/atoms/src/columns.css` | `sb-ui-columns` |
| Gutters | `packages/atoms/src/gutters.css` | `sb-ui-gutters` |
| CSS Grid | `packages/atoms/src/css-grid.css` | `sb-ui-css-grid` |

---

## 🎯 Configuración Rápida para Molecules (TypeScript)

### Formato para cada Molecule:
```
Path: packages/molecules/src/components/[CARPETA]/[ARCHIVO].ts
Component name: [NombreClase]
Framework: TypeScript
Label: TypeScript
```

### Lista de Molecules (6 implementados):

| Componente Figma | Path | Component Name |
|-----------------|------|----------------|
| Alert (Interactive) | `packages/molecules/src/components/alert/alert-behavior.ts` | `SbUiAlert` |
| Calendar | `packages/molecules/src/components/Calendar.ts` | `SbUiCalendar` |
| DatePicker | `packages/molecules/src/components/DatePicker.ts` | `SbUiDatePicker` |
| Modal | `packages/molecules/src/components/modal/modal.ts` | `SbUiModal` |
| Toast | `packages/molecules/src/components/toast/toast.ts` | `SbUiToast` |
| Toast Manager | `packages/molecules/src/components/toast/toast-manager.ts` | `ToastManager` |

---

## ❌ Componentes Faltantes (4)

Estos componentes están en Figma pero NO en el repo:

1. **Avatar** → Necesita implementación en `packages/atoms/src/avatar.css`
2. **Badge** → Necesita implementación en `packages/atoms/src/badge.css`
3. **Chip** → Necesita implementación en `packages/atoms/src/chip.css`
4. **Handle Slider** → Necesita implementación en `packages/atoms/src/slider.css`

---

## 🚀 Pasos para Conectar (Resumen)

1. **Abre Figma** → Dev Mode
2. **Panel Code Connect** → Lateral derecho
3. **Selecciona componente** → Ej: "Alert"
4. **Click** → "Connect to code component"
5. **Copia y pega** de la tabla de arriba:
   - Path
   - Component name
   - Framework
6. **Guarda** → ✅ Listo

---

## 📚 Archivos de Referencia

- `FIGMA_CODE_CONNECT_GUIDE.md` - Guía completa paso a paso
- `figma-code-connect-mappings.json` - JSON con toda la configuración
- `CODE_CONNECT_CHECKLIST.md` - Checklist para marcar progreso
- `setup-code-connect.py` - Script Python para visualizar y generar archivos

---

## 💡 Tips

- **Copia exacta**: Los paths deben ser exactos (respeta mayúsculas/minúsculas)
- **Componentes layout**: Container, Grid, Columns, etc. también son importantes
- **Multiple labels**: Puedes conectar un componente a CSS y TypeScript (ej: Alert)
- **Case sensitive**: `sb-ui-button` ≠ `sb-ui-Button`

---

**Archivo Figma**: https://www.figma.com/design/eIuLFSbsNQDepIGOXWLEiW/
**File Key**: `eIuLFSbsNQDepIGOXWLEiW`
