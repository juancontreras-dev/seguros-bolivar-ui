# Input Component - Alineación con Figma

## Fecha: 27 de Enero 2026

## Resumen de Cambios

El componente `Input` ha sido completamente alineado con las especificaciones de diseño de Figma para Seguros Bolívar.

## Especificaciones desde Figma

### Dimensiones
- **Altura del input**: 40px (fijo)
- **Padding horizontal (inicio)**: 16px
- **Padding vertical**: 8px
- **Border radius**: 4px
- **Border width**: 1px
- **Gap interno**: 10px

### Tamaños de Iconos
- **Icono principal**: 24px
- **Container del ícono**: 40px × 40px
- **Icono de ayuda**: 16px

### Tipografía
- **Font family**: 'Bolivar' (Regular, weight 400)
- **Font size (input/texto)**: 16px (Body/Regular)
- **Font size (label)**: 14px (Label/Regular)
- **Font size (help text)**: 12px (Caption/Regular)
- **Line height**: 1.4

### Colores - Estado Default
- **Background**: #FFFFFF (Greyscale/White)
- **Border**: #B9B9B9 (Greyscale/-100)
- **Text**: #1B1B1B (Greyscale/Black)
- **Placeholder**: #9B9B9B (Greyscale/Base)
- **Label**: #1B1B1B (Greyscale/Black)
- **Help text**: #414141 (Greyscale/+300)
- **Icon**: #038450 (Primary/Base - verde Bolívar)

### Colores - Estado Hover
- **Border**: #9B9B9B (Greyscale/Base)
- **Placeholder**: #757575 (Greyscale/+100)

### Colores - Estado Focus
- **Border**: #009056 (Primary/Base - verde Bolívar)
- **Box shadow**: 0 0 0 3px rgba(0, 144, 86, 0.1)
- **Icon**: #009056 (Primary/Base)

### Colores - Estado Disabled
- **Background**: #F5F5F5 (Greyscale/-300)
- **Border**: #E1E1E1 (Greyscale/-200)
- **Text**: #9B9B9B (Greyscale/Base)

### Colores - Estado Error
- **Border**: #DC3545 (Alerts/Error/Base)
- **Help text**: #DC3545 (Alerts/Error/Base)
- **Icon**: #038450 (mantiene verde Bolívar)
- **Box shadow**: 0 0 0 3px rgba(220, 53, 69, 0.1)

### Colores - Estado Success
- **Border**: #28A745 (Alerts/Success/Base)
- **Help text**: #279941 (Alerts/Success/+100)
- **Icon**: #038450 (mantiene verde Bolívar)
- **Box shadow**: 0 0 0 3px rgba(40, 167, 69, 0.1)

## Archivos Modificados

### `/packages/atoms/src/input.css`

**Cambios principales:**

1. **Capa TOKENS**: Actualizada con valores exactos desde Figma
   - Altura fija de 40px
   - Padding de 16px (horizontal) y 8px (vertical)
   - Colores precisos para todos los estados (default, hover, focus, disabled)
   - Border radius de 4px
   - Tamaños de iconos: 24px (principal), 16px (helper)

2. **Capa BASE**: Optimizada para usar las nuevas variables
   - Altura fija con `block-size: var(--sb-ui-input-height)`
   - Padding específico para inicio/fin usando logical properties
   - Eliminados valores `clamp()` para respetar especificaciones exactas de Figma
   - Label con modifiers para `--required` y `--optional`

3. **Capa STATES**: Actualizada con colores exactos de Figma
   - Success: border #28A745, help text #279941
   - Error: border y help text #DC3545
   - Warning: mantenido para compatibilidad
   - Disabled: background #F5F5F5, border #E1E1E1
   - Iconos mantienen el verde Bolívar (#038450) en todos los estados

4. **Limpieza de código**:
   - Eliminado código duplicado
   - Comentarios actualizados con referencias a Figma
   - Estructura más clara y mantenible

## Build Status

✅ Build completado exitosamente
- Tokens: ✅
- Atoms: ✅
- Molecules: ✅
- Brand Overrides: ✅
- Bundle: ✅

## Archivos Generados

Todos los bundles de marca se regeneraron correctamente:
- `sb-ui-seguros-bolivar-light.min.css` (278.90 KB)
- `sb-ui-seguros-bolivar-dark.min.css` (278.90 KB)
- Compression: gzip y brotli disponibles

## Comparación Antes/Después

### Antes (valores genéricos con clamp)
```css
--sb-ui-input-padding-inline: clamp(0.8rem, 0.5rem + 1.5vw, 1rem);
--sb-ui-input-padding-block: clamp(0.6rem, 0.4rem + 0.8vw, 0.875rem);
--sb-ui-input-min-block-size: clamp(40px, 8vw, 44px);
--sb-ui-input-border-radius: clamp(6px, 0.4rem + 0.3vw, 8px);
```

### Después (valores exactos de Figma)
```css
--sb-ui-input-height: 40px; /* Altura fija desde Figma */
--sb-ui-input-padding-inline-start: 16px;
--sb-ui-input-padding-block: 8px;
--sb-ui-input-border-radius: 4px;
```

## Próximos Pasos

1. ✅ Componente Input alineado con Figma
2. ⏭️ Crear ejemplos de uso en Storybook
3. ⏭️ Documentación de todos los estados
4. ⏭️ Tests de accesibilidad

## Notas Técnicas

- Se mantiene compatibilidad con logical properties (RTL/LTR)
- CSS Nesting utilizado para mejor organización
- Sistema de capas (@layer) respetado: tokens → base → states → variants
- Todos los colores ahora están codificados con valores exactos de Figma
- Font family: 'Bolivar' como principal, 'Roboto' como fallback

## Validación Figma

El diseño fue obtenido desde:
- **URL**: `https://www.figma.com/design/eIuLFSbsNQDepIGOXWLEiW/RELUX-DSV2-143-SEGUROS-BOL%C3%8DVAR-WEB-%F0%9F%92%9A?node-id=601-5149`
- **Component ID**: `21789:35595` (State=Default, Style=Basic)
- **Versión**: V.2

Todos los estados fueron verificados:
- ✅ Default (21789:35595)
- ✅ Hover (21789:35596)
- ✅ Focus (21789:35597)
- ✅ Active (21789:35598)
- ✅ Disabled (21789:35599)
- ✅ Error (21789:35600)
- ✅ Success (21789:35602)

---

**Última actualización**: 27 de Enero 2026
**Actualizado por**: Cursor AI Assistant
**Estado**: ✅ Completado y validado
