# Guía para Alinear Input con Figma

## Necesito de ti:

Para alinear completamente el componente Input con el diseño de Figma, necesito que me proporciones:

### Opción 1: Node ID del Input en Figma
1. Abre Figma en Dev Mode
2. Selecciona el componente **Input** en el panel lateral
3. Copia la URL que aparece (algo como: `?node-id=123-456`)
4. Pégala aquí

### Opción 2: Screenshot del Input
1. Abre Figma
2. Navega al componente **Input**
3. Toma un screenshot que muestre:
   - Los diferentes estados (Default, Hover, Focus, Error, Success, Disabled)
   - Las medidas/specs (padding, font-size, border-radius, etc.)
   - Los colores exactos
4. Compártelo aquí

### Opción 3: Especificaciones Manuales
Compárteme las especificaciones del Input desde Figma Dev Mode:
- **Tamaño**:
  - Height (altura del input)
  - Padding (horizontal y vertical)
  - Border radius
- **Tipografía**:
  - Font family
  - Font size
  - Font weight
  - Line height
- **Colores**:
  - Border color (default, hover, focus)
  - Background color
  - Text color
  - Placeholder color
- **Estados**:
  - Success (color del borde)
  - Error (color del borde)
  - Disabled (opacidad, colores)

## Lo que tengo actualmente en el código:

```css
/* Tamaños actuales */
--sb-ui-input-min-block-size: clamp(40px, 8vw, 44px);
--sb-ui-input-padding-inline: clamp(0.8rem, 0.5rem + 1.5vw, 1rem);
--sb-ui-input-padding-block: clamp(0.6rem, 0.4rem + 0.8vw, 0.875rem);
--sb-ui-input-border-radius: clamp(6px, 0.4rem + 0.3vw, 8px);

/* Colores actuales */
--sb-ui-input-border-color: #e1e1e1 (gris claro)
--sb-ui-input-border-focus: #007acc (azul - debería ser verde Bolívar)
--sb-ui-input-text-placeholder: #9b9b9b (gris medio)

/* Font actuales */
--sb-ui-input-font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
--sb-ui-input-font-weight: 400;
```

## Lo que voy a ajustar:

Una vez que me proporciones la información, ajustaré:
1. ✅ Tamaños exactos (height, padding, border-radius)
2. ✅ Colores de marca Seguros Bolívar (verde primario en focus/success)
3. ✅ Estados visuales (hover, focus, error, success, disabled)
4. ✅ Tipografía (tamaños, pesos)
5. ✅ Iconos y su posicionamiento
6. ✅ Sombras y efectos
7. ✅ Espaciado entre elementos (label, input, helper text)

---

**¿Qué prefieres hacer? Compárteme el node ID, screenshot o especificaciones manuales.**
