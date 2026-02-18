# Cursor AI Rules - Seguros Bolívar UI Design System

Esta carpeta contiene reglas específicas para Cursor AI que ayudan a mantener la consistencia del código en el Design System.

## 📁 Archivos de Reglas

### `CSS.mdc`
Estándares CSS generales para el Design System:
- Convenciones de nomenclatura (BEM, CSS Nesting)
- Uso de @layer para control de cascada
- Logical Properties para internacionalización
- Responsive design con clamp()
- Variables CSS y tokens

**Aplicable a**: Todos los archivos CSS en el workspace

### `CSS_OVERRIDE_BRAND.mdc`
Estándares específicos para overrides de marca:
- Selectores basados en `[data-brand='...']`
- Jerarquía de especificidad
- Tokens de marca
- Temas (light/dark)

**Aplicable a**: Todos los archivos CSS en el workspace

## 🔧 Uso

Cursor AI lee automáticamente estos archivos y aplica las reglas al trabajar con archivos CSS en el proyecto.

Las reglas ayudan a:
- Mantener consistencia en el código
- Seguir las mejores prácticas del Design System
- Evitar errores comunes
- Aplicar convenciones de la marca Seguros Bolívar

## 📝 Notas

- Los archivos `.mdc` son Markdown con metadatos específicos de Cursor
- Se aplican automáticamente según el contexto del archivo actual
- Puedes editarlos para ajustar las convenciones del proyecto
