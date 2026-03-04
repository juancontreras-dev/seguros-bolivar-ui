# Cursor AI Rules - Seguros Bolívar UI Design System

Esta carpeta contiene reglas específicas para Cursor AI que ayudan a mantener la consistencia del código en el Design System.

## 📁 Archivos de Reglas

### `CSS.mdc`
Estándares CSS generales para el Design System:
- Convenciones de nomenclatura (BEM, CSS Nesting nativo con `&`)
- Uso de `@layer` para control de cascada (8–10 capas)
- Logical Properties para internacionalización (RTL/LTR)
- Responsive design con `clamp()`
- Variables CSS con prefijo `--sb-ui-`

**Aplicable a**: Todos los archivos CSS del proyecto

### `CSS_OVERRIDE_BRAND.mdc`
Estándares para overrides de marca:
- Selectores basados en `[data-brand='...']`
- Uso de `@layer brand-overrides` (sin `!important`)
- Tokens de marca con `var(--sb-ui-*)`
- 6 marcas: white-label, jelpit, davivienda, cien-cuadras, doctor-aki, seguros-bolivar

**Aplicable a**: `packages/brand-overrides/**/*.css`

### `componentes-01-sb-ui.mdc`
Catálogo completo de componentes del Design System:
- Lista de átomos CSS y moléculas Web Components
- Estructura HTML, clases BEM y variantes de cada componente
- Restricciones: no sobrescribir `.sb-ui-*`, no duplicar elementos existentes

**Aplicable a**: `**/*.html`, `**/*.css`, `**/*.mdx`

### `variables-01-css.mdc`
Catálogo de variables CSS del sistema:
- Todas las variables `--sb-ui-*` disponibles (colores, tipografía, espaciado, sombras)
- Equivalencias Figma → `--sb-ui-*`

**Aplicable a**: `**/*.css`, `packages/atoms/**/*.css`, `packages/molecules/**/*.css`

### `workflow-01-implementar.mdc`
Workflow de 6 pasos para construir artefactos HTML usando la librería como piezas Lego:
- PASO 1: Analizar el diseño (Figma MCP o descripción)
- PASO 2: Mapear elementos → componentes `sb-ui-*`
- PASO 3: Verificar disponibilidad en `componentes-01-sb-ui.mdc`
- PASO 4: Identificar layout
- PASO 5: Generar HTML (CDN setup, layout, componentes)
- PASO 6: Revisar accesibilidad y checklist final
- Incluye URLs CDN por marca/tema, API de moléculas y cambio dinámico de marca

**Aplicable a**: `**/*.html`, `**/*.md`, `**/*.mdx`

### `CODE_SIMPLIFIER.mdc`
Simplificador de código: revisa el código recién modificado y aplica las convenciones del proyecto para mejorar claridad y mantenibilidad sin cambiar funcionalidad.

**Aplicable a**: Todo el workspace

## 🔧 Uso

Cursor AI lee automáticamente estos archivos y aplica las reglas al trabajar con archivos en el proyecto.

## 📝 Notas

- Los archivos `.mdc` son Markdown con metadatos específicos de Cursor
- Se aplican automáticamente según el contexto del archivo actual
- `alwaysApply: true` en todos los archivos — activos en todo momento
