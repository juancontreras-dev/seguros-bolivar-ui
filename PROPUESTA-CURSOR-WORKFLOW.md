# Propuesta: Automatización de Implementación con seguros-bolivar-ui + Cursor

---

## 1. Contexto del Problema

La librería **seguros-bolivar-ui** funciona como un **kit de piezas Lego**: tiene piezas (componentes) y con esas piezas el desarrollador puede construir cualquier cosa — una página completa, un formulario, un modal, una sección de una pantalla, un widget, un bloque de navegación, o lo que sea que el diseño requiera.

La librería está en constante crecimiento. Los componentes actuales son una fotografía del momento; en el futuro habrá más. El workflow de Cursor no debe estar acoplado a una lista fija.

**El flujo ideal:**
> Desarrollador muestra a Cursor qué quiere construir (descripción, imagen o URL de Figma) → Cursor analiza el diseño, determina qué piezas necesita, valida cuáles existen en la librería → Cursor ensambla el HTML con las piezas disponibles

**El problema actual:**
Las reglas de Cursor existentes son documentación de referencia excelente, pero NO son workflows de agente. Cursor no sabe:
- Qué pasos seguir cuando le piden construir algo (sea lo que sea)
- Cómo analizar un diseño y decidir qué componentes necesita
- Cómo validar si una pieza existe antes de usarla
- Qué hacer cuando una pieza no existe aún en la librería
- Qué constituye una respuesta correcta vs incorrecta

---

## 2. Inventario de lo que ya existe (y está bien)

Las tres reglas clave actúan como **fuentes de verdad complementarias**. Cada una responde una pregunta distinta durante la implementación:

| Archivo | Pregunta que responde | Cuándo consultarlo |
|---------|----------------------|-------------------|
| `.cursor/rules/componentes-01-sb-ui.mdc` | **¿Qué piezas existen y cómo se usan?** — clases HTML, estructura de cada componente, variantes disponibles | Al mapear elementos del diseño a componentes; al obtener el HTML exacto de cada pieza |
| `.cursor/rules/implementacion-01-cdn.mdc` | **¿Cómo se inicializa el entorno?** — URLs CDN, valores válidos de `data-brand` y `data-theme`, qué archivo CSS cargar por marca/tema, cuándo incluir el JS de Web Components | Al armar el `<head>` del HTML y los data attributes del `<html>` |
| `.cursor/rules/variables-01-css.mdc` | **¿Qué tokens usar si se necesita CSS adicional?** — todas las variables `--sb-ui-*` de color, tipografía, espaciado, sombras | Si el output requiere algún CSS propio más allá de las clases de componentes; nunca hardcodear valores |
| `.cursor/rules/CSS.mdc` | **¿Cómo escribir CSS correcto para este sistema?** — arquitectura de capas, logical properties, reglas de nesting | Solo si el output incluye CSS nuevo (brand overrides, extensiones) |
| `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` | **¿Cómo personalizar un componente por marca?** — selectores y estructura de brand overrides | Solo si se necesita sobrescribir estilos de un componente para una marca específica |

**Lo que FALTA:** Un archivo que le diga a Cursor "cuando te pidan construir algo, haz esto" — sin asumir qué es ese algo, y que orqueste cuándo consultar cada una de estas fuentes.

---

## 3. Componentes Disponibles (librería en crecimiento)

> **Regla fundamental:** Esta lista es una referencia orientativa. La **fuente de verdad siempre es `componentes-01-sb-ui.mdc`**. Cursor debe consultarla en el momento de implementar para saber exactamente qué piezas existen. Nunca asumir que un componente existe sin verificarlo.

### Átomos actuales (CSS puro)
| Componente | Clase | Uso |
|-----------|-------|-----|
| Button | `sb-ui-button` | Acciones primarias/secundarias/terciarias |
| Input | `sb-ui-input` | Campos de texto, email, password |
| Select | `sb-ui-select` | Listas desplegables |
| Checkbox | `sb-ui-checkbox` | Selección múltiple |
| Radio | `sb-ui-radio` | Selección única |
| Toggle | `sb-ui-toggle` | Interruptores on/off |
| TextArea | `sb-ui-textarea` | Texto multilínea |
| Accordion | `sb-ui-accordion` | Contenido expandible |
| Alert | `sb-ui-alert` | Mensajes de estado |
| Breadcrumb | `sb-ui-breadcrumb` | Navegación jerárquica |
| Spinner | `sb-ui-spinner` | Indicadores de carga |
| Tabs | `sb-ui-tabs` | Navegación por pestañas |
| Table | `sb-ui-table` | Tablas de datos |
| File Upload | `sb-ui-file-upload` | Subida de archivos |
| Menu | `sb-ui-menu` | Menú de navegación lateral/superior |
| Stepper | `sb-ui-stepper` | Proceso de pasos |
| Avatar | `sb-ui-avatar` | Imágenes de perfil |
| Badge | `sb-ui-badge` | Etiquetas de estado/conteo |
| Chip | `sb-ui-chip` | Etiquetas removibles |
| Slider | `sb-ui-slider` | Selector de rango numérico |
| Typography | `sb-ui-heading`, `sb-ui-body` | Textos con jerarquía visual |
| Container | `sb-ui-container` | Contenedor responsivo |
| Grid | `sb-ui-grid` | Sistema de grillas |
| Calendar | CSS + layout | Calendario visual |
| *(más en el futuro)* | `sb-ui-*` | — |

### Moléculas actuales (Web Components - requieren JS)
| Componente | Tag | Uso |
|-----------|-----|-----|
| Modal | `<sb-ui-modal>` | Ventanas emergentes |
| Toast | `<sb-ui-toast>` | Notificaciones flotantes |
| DatePicker | `<sb-ui-datepicker>` | Selector de fechas |
| Calendar | `<sb-ui-calendar>` | Selector de rango de fechas |
| *(más en el futuro)* | `<sb-ui-*>` | — |

---

## 4. Propuestas de Solución

---

### SOLUCIÓN A — Regla Workflow Mínima
*Para equipos que aún no tienen Figma MCP configurado*

**Qué se crea:** Un archivo nuevo `.cursor/rules/workflow-01-implementar.mdc`

**Cómo funciona:**
El desarrollador describe o muestra lo que quiere construir. Cursor no asume el tipo de output — puede ser una pantalla completa, un componente aislado, una sección, un formulario, lo que sea. Sigue un workflow de 6 pasos:

```
1. ANALIZAR  → Leer la solicitud o diseño y descomponer en elementos visuales
               (sin asumir qué tipo de output es: página, sección, componente, etc.)

2. MAPEAR    → Para cada elemento visual, determinar el componente sb-ui candidato
               [fuente: índice rápido de componentes-01-sb-ui.mdc]

3. VALIDAR   → Confirmar que cada candidato existe actualmente en la librería
               [fuente: catálogo completo de componentes-01-sb-ui.mdc]
               - ✅ Existe → incluirlo en el plan con su HTML exacto
               - ❌ No existe → buscar alternativa disponible o notificar al desarrollador

4. PLANEAR   → Listar los componentes confirmados y cómo se ensamblan
               (antes de escribir una sola línea de HTML)

5. GENERAR   → Ensamblar el HTML:
               - Estructura y clases de componentes [componentes-01-sb-ui.mdc]
               - Setup del <head>: CDN, data-brand, data-theme, JS solo si hay moléculas
                 [implementacion-01-cdn.mdc]
               - Si el output requiere CSS propio: usar variables --sb-ui-* sin excepción
                 [variables-01-css.mdc]

6. VERIFICAR → Checklist de restricciones (ver sección 7)
```

**Ejemplo — lo que se construye lo determina el diseño, no el workflow:**

```
Prompt: "Construye un formulario de contacto con nombre, email, mensaje y botón enviar para Seguros Bolívar"

→ ANALIZAR: elementos = [campo nombre, campo email, área de texto, botón]
→ MAPEAR: Input + Input + TextArea + Button
→ VALIDAR: todos existen en el catálogo ✅
→ GENERAR:

<!doctype html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://juancontreras-dev.github.io/seguros-bolivar-ui/dist/sb-ui-seguros-bolivar-light.min.css">
    <script type="module" src="https://juancontreras-dev.github.io/seguros-bolivar-ui/dist/sb-ui-components.min.js"></script>
  </head>
  <body>
    <div class="sb-ui-container">
      <label class="sb-ui-input__label" for="nombre">Nombre</label>
      <input class="sb-ui-input" type="text" id="nombre">
      <label class="sb-ui-input__label" for="email">Correo electrónico</label>
      <input class="sb-ui-input" type="email" id="email">
      <label class="sb-ui-input__label" for="mensaje">Mensaje</label>
      <textarea class="sb-ui-textarea" id="mensaje"></textarea>
      <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Enviar</button>
    </div>
  </body>
</html>

---

Prompt: "Implementa solo el modal de confirmación de eliminación"

→ ANALIZAR: elementos = [modal con título, texto de advertencia, botón cancelar, botón confirmar]
→ MAPEAR: Modal + Typography + Button (x2)
→ VALIDAR: todos existen ✅
→ GENERAR: solo el fragmento del modal, sin página completa
```

**Esfuerzo de implementación:** 2-3 horas

**Pros:**
- Rápido de implementar
- Funciona sin configurar nada adicional
- Agnóstico al tipo de output: sirve para cualquier cosa que el usuario quiera construir

**Contras:**
- El desarrollador debe describir el diseño con palabras
- No hay lectura automática de Figma

---

### SOLUCIÓN B — Workflow + MCP Figma
*Para equipos con Figma MCP configurado en Cursor*

**Qué se crea:**
1. `.cursor/rules/workflow-01-implementar.mdc` (Solución A)
2. `.cursor/rules/figma-mcp-01-extraccion.mdc` (nuevo)

**Cómo funciona:**
El desarrollador da el URL del frame de Figma. Cursor usa el MCP de Figma para leer la estructura del diseño y ejecuta el mismo workflow de 6 pasos, pero el paso ANALIZAR lo hace automáticamente desde el árbol de capas de Figma.

**Tabla de señales visuales → componente sb-ui candidato:**

> Esta tabla es orientativa. Cursor debe **siempre validar en `componentes-01-sb-ui.mdc`** que el componente candidato existe. La tabla no es exhaustiva — a medida que la librería crezca, se añadirán nuevas señales. Si una señal visual no tiene equivalente disponible, se notifica al desarrollador.

| Señal visual en el diseño | Componente sb-ui candidato |
|--------------------------|---------------------------|
| Campo de texto con label | Input (`sb-ui-input`) + `sb-ui-input__label` |
| Rectángulo clicable con texto | Button (`sb-ui-button` + variante según estilo) |
| Área de texto multilínea | TextArea (`sb-ui-textarea`) |
| Lista desplegable | Select (`sb-ui-select`) |
| Cuadro con marca de verificación | Checkbox (`sb-ui-checkbox`) |
| Círculo seleccionable | Radio (`sb-ui-radio`) |
| Interruptor deslizable on/off | Toggle (`sb-ui-toggle`) |
| Rectángulo con borde + icono + texto de alerta | Alert (`sb-ui-alert`) |
| Ítems colapsables con flecha | Accordion (`sb-ui-accordion`) |
| Ruta de navegación con separadores | Breadcrumb (`sb-ui-breadcrumb`) |
| Círculo girando / animación de carga | Spinner (`sb-ui-spinner`) |
| Pestañas con contenido asociado | Tabs (`sb-ui-tabs`) |
| Filas y columnas con encabezados | Table (`sb-ui-table`) |
| Popup o capa sobre el contenido | Modal (`<sb-ui-modal>`) |
| Notificación flotante temporal | Toast (`<sb-ui-toast>`) |
| Navegación de pasos numerados | Stepper (`sb-ui-stepper`) |
| Círculo con imagen o iniciales de usuario | Avatar (`sb-ui-avatar`) |
| Etiqueta pequeña de estado o conteo | Badge (`sb-ui-badge`) |
| Etiqueta removible | Chip (`sb-ui-chip`) |
| Track con indicador deslizable de rango | Slider (`sb-ui-slider`) |
| Selector de fecha con calendario | DatePicker (`<sb-ui-datepicker>`) |
| Selector de rango de fechas | Calendar (`<sb-ui-calendar>`) |
| Zona de drop para subir archivos | File Upload (`sb-ui-file-upload`) |
| Menú lateral o superior de navegación | Menu (`sb-ui-menu`) |
| Texto de encabezado jerarquizado | Typography (`sb-ui-heading`) |
| Texto de cuerpo | Typography (`sb-ui-body`) |
| Wrapper de ancho máximo responsivo | Container (`sb-ui-container`) |
| Distribución en columnas/filas | Grid (`sb-ui-grid`) |
| Elemento sin equivalente disponible aún | ⚠️ Notificar al desarrollador |

**Ejemplo:**
```
Prompt: "Implementa este diseño: [URL Figma]"

Cursor:
1. mcp_figma.get_file() → lee el árbol de capas
2. Identifica los elementos visuales del frame seleccionado
3. Mapea cada elemento usando la tabla de señales
4. Valida cada candidato en componentes-01-sb-ui.mdc
5. Ensambla el HTML con las piezas confirmadas
   (el output puede ser una pantalla completa, un fragmento, lo que sea que el frame represente)
```

**Prerequisito técnico:**
```json
// .cursor/mcp.json
{
  "figma": {
    "command": "npx",
    "args": ["@figma/mcp-server"],
    "env": {
      "FIGMA_ACCESS_TOKEN": "tu-token-de-figma"
    }
  }
}
```

**Esfuerzo de implementación:** 4-5 horas + 1 hora de configuración de MCP

**Pros:**
- Lectura automática de Figma — el desarrollador no necesita describir nada
- El mapeo es sistemático y reproducible
- Funciona para cualquier tipo de output que el frame de Figma represente

**Contras:**
- Requiere configurar el MCP de Figma
- Necesita token de acceso de Figma

---

### SOLUCIÓN C — Sistema Completo de Reglas de Agente ⭐ RECOMENDADA
*La mejor experiencia para el usuario final*

**Qué se crea/modifica:**

| Acción | Archivo | Propósito |
|--------|---------|-----------|
| CREAR | `workflow-01-implementar.mdc` | Orquestador principal (6 pasos, agnóstico al tipo de output) |
| CREAR | `figma-mcp-01-extraccion.mdc` | Integración Figma automática |
| MODIFICAR | `componentes-01-sb-ui.mdc` | Agregar índice de decisión rápida al inicio |

**El valor diferencial de esta solución:** El índice de decisión rápida.

En lugar de templates fijos (que asumen qué construirá el usuario), el índice le da a Cursor una forma de ir del "elemento visual que veo" al "componente correcto" en milisegundos, sin leer las 81KB completas del catálogo.

**Estructura del índice de decisión rápida** (se agrega al inicio de `componentes-01-sb-ui.mdc`):

```
# ÍNDICE RÁPIDO — Elemento visual → Componente sb-ui

¿Qué ves en el diseño?        → Componente a usar
─────────────────────────────────────────────────
Campo de texto                → sb-ui-input
Área multilínea               → sb-ui-textarea
Lista desplegable             → sb-ui-select
Botón con fondo sólido        → sb-ui-button + --fill
Botón con borde               → sb-ui-button + --stroke (default)
Botón solo texto/link         → sb-ui-button + --text
Alerta / mensaje de estado    → sb-ui-alert
Contenido colapsable          → sb-ui-accordion
Pestañas                      → sb-ui-tabs
Tabla de datos                → sb-ui-table
Popup / overlay               → <sb-ui-modal>
Notificación flotante         → <sb-ui-toast>
Pasos de un proceso           → sb-ui-stepper
Selector de fecha             → <sb-ui-datepicker>
Carga de archivos             → sb-ui-file-upload
Menú de navegación            → sb-ui-menu
Perfil de usuario             → sb-ui-avatar
Etiqueta de estado            → sb-ui-badge
Etiqueta removible            → sb-ui-chip
Selección de rango numérico   → sb-ui-slider
Ruta de navegación            → sb-ui-breadcrumb
Indicador de carga            → sb-ui-spinner
Encabezado / título           → sb-ui-heading
Texto de cuerpo               → sb-ui-body
Contenedor responsivo         → sb-ui-container
Grilla de columnas            → sb-ui-grid

⚠️ Si el elemento no aparece aquí → verificar si fue añadido recientemente
   al catálogo completo. Si no existe, notificar al desarrollador.
```

**Cómo funciona el sistema — dos modos de entrada:**

#### Modo A: con Figma MCP
```
Desarrollador: "Implementa este diseño: [URL Figma]"

Cursor:
1. workflow-01-implementar.mdc   → Activa el flujo de 6 pasos
2. figma-mcp-01-extraccion.mdc  → Lee el frame y extrae los elementos visuales
3. componentes-01-sb-ui.mdc     → Mapea elementos → valida existencia → obtiene HTML exacto
4. implementacion-01-cdn.mdc    → Determina data-brand, data-theme, URL CSS, si incluir JS
5. variables-01-css.mdc         → (si hay CSS adicional) Tokens --sb-ui-* a usar
6. Ensambla el output con solo piezas confirmadas
```

#### Modo B: sin Figma MCP (descripción libre)
```
Desarrollador: "Necesito un formulario de cotización de seguro de vida para
                Seguros Bolívar con: nombre, fecha de nacimiento, cobertura
                deseada (dropdown) y botón cotizar"

Cursor:
1. workflow-01-implementar.mdc  → Activa el flujo de 6 pasos
2. ANALIZAR                     → Descompone la descripción en elementos visuales:
                                  [campo texto, selector fecha, select, botón]
3. componentes-01-sb-ui.mdc    → Mapea (Input, DatePicker, Select, Button)
                                  → Valida existencia → obtiene HTML exacto de cada pieza
4. implementacion-01-cdn.mdc   → data-brand="seguros-bolivar", data-theme="light",
                                  CSS: sb-ui-seguros-bolivar-light.min.css,
                                  JS: incluir (DatePicker es molécula)
5. variables-01-css.mdc        → no se necesita CSS adicional en este caso
6. Ensambla el output:

<!doctype html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://juancontreras-dev.github.io/seguros-bolivar-ui/dist/sb-ui-seguros-bolivar-light.min.css">
    <script type="module" src="https://juancontreras-dev.github.io/seguros-bolivar-ui/dist/sb-ui-components.min.js"></script>
  </head>
  <body>
    <div class="sb-ui-container">
      <label class="sb-ui-input__label" for="nombre">Nombre completo</label>
      <input class="sb-ui-input" type="text" id="nombre">
      <sb-ui-datepicker label="Fecha de nacimiento"></sb-ui-datepicker>
      <label class="sb-ui-select__label" for="cobertura">Cobertura deseada</label>
      <select class="sb-ui-select" id="cobertura">
        <option value="">Selecciona una opción</option>
      </select>
      <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Cotizar</button>
    </div>
  </body>
</html>
```

> **El modo B es tan válido como el modo A.** No tener acceso a Figma no bloquea al desarrollador — puede describir con palabras lo que quiere construir y Cursor identifica las piezas, las valida y las ensambla exactamente igual.

**Esfuerzo de implementación:** 5-7 horas en total

**Pros:**
- Funciona con o sin acceso a Figma — el desarrollador elige su modo de entrada
- Agnóstico al tipo de output — sirve para cualquier cosa que el usuario quiera construir
- El índice rápido elimina la necesidad de leer el catálogo completo para cada mapeo
- Escalable: cuando se añaden componentes a la librería, solo se actualiza el catálogo y el índice
- No tiene lógica hardcodeada de "tipos de página" que se desactualice

**Contras:**
- Mayor esfuerzo inicial
- El índice debe mantenerse sincronizado cuando se añaden componentes

---

## 5. Comparativa Final

| Criterio | Solución A | Solución B | Solución C ⭐ |
|---------|-----------|-----------|------------|
| Facilidad para el usuario final | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Integración con Figma | ❌ Manual | ✅ Automático | ✅ Automático |
| Velocidad de mapeo | Media | Alta | Muy alta |
| Agnóstico al tipo de output | ✅ | ✅ | ✅ |
| Esfuerzo de implementación | Bajo (2-3h) | Medio (4-5h) | Alto (5-7h) |
| Prerequisitos técnicos | Ninguno | MCP Figma | Ninguno (MCP Figma opcional) |
| Mantenimiento futuro | Bajo | Medio | Bajo-medio |
| Calidad de output | Buena | Muy buena | Excelente |

---

## 6. Plan de Implementación por Fases

Si se aprueba la Solución C, el orden de implementación sería:

### Fase 1 (Alta prioridad - 2h)
- Crear `workflow-01-implementar.mdc` con el orquestador de 6 pasos
- Resultado: Cursor sigue un workflow consistente para cualquier tipo de solicitud

### Fase 2 (Alta prioridad - 2h)
- Agregar el índice de decisión rápida al inicio de `componentes-01-sb-ui.mdc`
- Crear `figma-mcp-01-extraccion.mdc` con la tabla de señales visuales
- Resultado: Cursor mapea elementos de diseño a componentes de forma rápida y validada

### Fase 3 (Mantenimiento continuo)
- Cada vez que se añade un componente a la librería: actualizar el índice rápido y la tabla de señales
- Esto garantiza que el sistema siempre refleje el estado actual de la librería

---

## 7. Verificación del Sistema

**Test 1 — Output de pantalla completa:**
```
Prompt: "Construye una pantalla de login para Seguros Bolívar"
Esperado: HTML completo con data-brand="seguros-bolivar", CDN seguros-bolivar-light,
          componentes mapeados desde el diseño descrito
```

**Test 2 — Output de fragmento:**
```
Prompt: "Necesito solo el modal de confirmación con título, mensaje y dos botones"
Esperado: Solo el fragmento del <sb-ui-modal>, sin página completa,
          listo para insertarse en cualquier HTML
```

**Test 3 — Output desde Figma:**
```
Prompt: "Implementa este diseño: [URL Figma]"
Esperado: Cursor lee el frame → identifica elementos → valida contra catálogo →
          genera el HTML que corresponda a lo que el frame representa
          (sin asumir que es una "página" si el frame es solo un componente)
```

**Test 4 — Restricciones:**
El output generado NO debe contener:
- ❌ Colores hexadecimales (#xxx o rgb())
- ❌ Clases CSS que no sean `sb-ui-*`
- ❌ `style=""` con valores de diseño
- ❌ `!important`
- ❌ CSS dentro de `<style>` para estilos de componentes
- ❌ Clases `sb-ui-*` que no existan en `componentes-01-sb-ui.mdc`

**Test 5 — Multi-marca:**
```
Prompt: "Lo mismo pero para Davivienda en tema oscuro"
Esperado: Mismo output pero data-brand="davivienda" data-theme="dark" y CDN davivienda-dark
```

**Test 6 — Componente inexistente:**
```
Prompt: "Incluye un mapa interactivo"
Correcto: Cursor notifica → "sb-ui no tiene actualmente un componente de mapa.
           Piezas disponibles más cercanas: [lista]. ¿Usamos alguna de estas
           o esperamos a que el componente sea añadido a la librería?"
Incorrecto: Cursor inventa clases como sb-ui-map o usa librerías externas sin avisar
```
