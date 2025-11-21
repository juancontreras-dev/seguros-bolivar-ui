# 📊 Table Component

Componente de tabla con paginación y variaciones estándar estilo Bootstrap para el Design System de Seguros Bolívar.

## 📁 Archivos

- **Base CSS:** `packages/atoms/src/table.css`
- **Brand Override:** `packages/brand-overrides/src/seguros-bolivar/table.css`
- **Ejemplo:** `examples/table/index.html`

## 🎨 Variantes Disponibles

### 1. Tabla Básica
```html
<div class="sb-ui-table-container">
  <table class="sb-ui-table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 2. Tabla Striped (Rayas Alternadas)
```html
<table class="sb-ui-table sb-ui-table--striped">
  <!-- ... -->
</table>
```

### 3. Tabla Bordered (Con Bordes)
```html
<table class="sb-ui-table sb-ui-table--bordered">
  <!-- ... -->
</table>
```

### 4. Tabla Hover (Efecto Hover)
```html
<table class="sb-ui-table sb-ui-table--hover">
  <!-- ... -->
</table>
```

### 5. Tabla Compact (Espaciado Reducido)
```html
<table class="sb-ui-table sb-ui-table--compact">
  <!-- ... -->
</table>
```

### 6. Combinación de Variantes
```html
<table class="sb-ui-table sb-ui-table--striped sb-ui-table--hover sb-ui-table--bordered">
  <!-- ... -->
</table>
```

## 🔘 Paginación

```html
<div class="sb-ui-table-pagination">
  <!-- Navegación: Primera página -->
  <button class="sb-ui-table-pagination__button" disabled>
    <i class="fa-solid fa-angles-left"></i>
  </button>
  
  <!-- Navegación: Página anterior -->
  <button class="sb-ui-table-pagination__button" disabled>
    <i class="fa-solid fa-angle-left"></i>
  </button>
  
  <!-- Números de página -->
  <button class="sb-ui-table-pagination__button sb-ui-table-pagination__button--active">
    1
  </button>
  <button class="sb-ui-table-pagination__button">2</button>
  <button class="sb-ui-table-pagination__button">3</button>
  
  <!-- Navegación: Página siguiente -->
  <button class="sb-ui-table-pagination__button">
    <i class="fa-solid fa-angle-right"></i>
  </button>
  
  <!-- Navegación: Última página -->
  <button class="sb-ui-table-pagination__button">
    <i class="fa-solid fa-angles-right"></i>
  </button>
  
  <!-- Selector de filas por página -->
  <select class="sb-ui-table-pagination__select">
    <option value="10">10</option>
    <option value="25">25</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>
```

## 📌 Alineación de Celdas

```html
<!-- Alineado a la izquierda (default) -->
<td class="sb-ui-table__cell--start">Texto</td>

<!-- Centrado -->
<td class="sb-ui-table__cell--center">Texto</td>

<!-- Alineado a la derecha -->
<td class="sb-ui-table__cell--end">$1,000,000</td>
```

## ✅ Checkboxes e Inputs en Tabla

### Checkboxes
```html
<table class="sb-ui-table">
  <thead>
    <tr>
      <th>
        <input type="checkbox" id="select-all" />
      </th>
      <th>Nombre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>Dato</td>
    </tr>
  </tbody>
</table>
```

### Inputs Editables
```html
<td>
  <input type="text" value="150000000" />
</td>

<td>
  <input type="number" value="90" style="width: 60px" />
</td>
```

## 🎯 Fila Seleccionada

```html
<tr class="sb-ui-table__row--selected">
  <td>Contenido seleccionado</td>
</tr>
```

## 🎨 Estilos de Seguros Bolívar

### Header
- Fondo: `#FAFAFA`
- Texto: `#5B5B5B`
- Font weight: `600`

### Paginación
- Botón activo: Fondo `#FFE16F` (amarillo), Texto `#038450` (verde)
- Botón normal: Fondo `#FFFFFF`, Borde `#E1E1E1`
- Botón hover: Fondo `#FFFCF0`
- Botón disabled: Fondo `#F5F5F5`, Texto `#9B9B9B`

### Colores de Fila
- Hover: `#F2F9F6` (verde claro)
- Seleccionada: `#F2F9F6` (verde claro)
- Striped (alternada): `#FAFAFA`

## 📏 Variables CSS Personalizables

```css
/* Colores */
--sb-ui-table-bg
--sb-ui-table-text
--sb-ui-table-border
--sb-ui-table-header-bg
--sb-ui-table-header-text
--sb-ui-table-row-hover-bg
--sb-ui-table-row-selected-bg
--sb-ui-table-row-striped-bg

/* Espaciado */
--sb-ui-table-padding-block
--sb-ui-table-padding-inline

/* Tipografía */
--sb-ui-table-font-family
--sb-ui-table-font-size
--sb-ui-table-line-height

/* Bordes */
--sb-ui-table-border-width
--sb-ui-table-border-radius

/* Paginación */
--sb-ui-pagination-btn-size
--sb-ui-pagination-btn-bg
--sb-ui-pagination-btn-border
--sb-ui-pagination-btn-text
--sb-ui-pagination-btn-active-bg
--sb-ui-pagination-btn-active-text
```

## ♿ Accesibilidad

- ✅ Soporte para `prefers-reduced-motion`
- ✅ Soporte para `prefers-contrast: high`
- ✅ Focus visible con outline claro
- ✅ Estados disabled claramente identificables
- ✅ Responsive en móviles

## 🎯 Casos de Uso

1. **Listado de Pólizas:** Tabla con checkboxes, estado de póliza, valores asegurados
2. **Coberturas:** Tabla editable con inputs para porcentajes y valores
3. **Empleados:** Tabla con hover para selección de filas
4. **Productos:** Tabla con acciones (editar/eliminar) por fila
5. **Reportes:** Tabla compacta con muchos datos

## 📚 Ejemplos en Demo

La página de ejemplos (`examples/table/index.html`) incluye:

1. ✅ Tabla Básica con checkboxes e inputs (replica tu imagen)
2. ✅ Tabla Striped con badges de estado
3. ✅ Tabla Bordered con botones de acción
4. ✅ Tabla Hover para selección interactiva
5. ✅ Tabla Compact para mostrar más datos
6. ✅ Tabla Combinada con todas las variantes
7. ✅ Paginación funcional con botones amarillos

## 🚀 Uso Rápido

```html
<!DOCTYPE html>
<html data-brand="seguros-bolivar">
<head>
  <link rel="stylesheet" href="../dist/sb-ui-seguros-bolivar-light.min.css">
</head>
<body>
  <div class="sb-ui-table-container">
    <table class="sb-ui-table sb-ui-table--striped sb-ui-table--hover">
      <!-- Tu tabla aquí -->
    </table>
  </div>
  
  <div class="sb-ui-table-pagination">
    <!-- Tu paginación aquí -->
  </div>
</body>
</html>
```

## 📝 Notas

- Los botones de paginación son circulares (`border-radius: 50%`)
- El botón activo tiene fondo amarillo y texto verde
- Los inputs dentro de la tabla heredan los estilos del input component
- Los checkboxes tienen accent-color verde (#038450)
- La tabla es responsive y se adapta a móviles

