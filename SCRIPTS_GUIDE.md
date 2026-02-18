# 📚 Guía de Scripts NPM - Seguros Bolivar UI Design System

## 🎯 Scripts Esenciales (Uso Diario)

### 🔨 Build

#### `pnpm build`

**Build completo de producción**

```bash
pnpm build
```

- ✅ Limpia cache y builds anteriores
- ✅ Regenera tokens desde JSON
- ✅ Compila atoms (CSS)
- ✅ Genera bundles por marca
- ✅ Copia archivos a `examples/dist/`
- ⏱️ Duración: ~30-60s
- 📝 Usar cuando: Deploy, cambios en tokens, primera instalación

---

### 💻 Desarrollo

#### `pnpm dev`

**Modo watch para desarrollo**

```bash
pnpm dev
```

- ✅ Watch automático de archivos
- ✅ Rebuild incremental
- ✅ Copia automática a examples/
- 🔄 Se ejecuta continuamente
- 📝 Usar cuando: Desarrollando componentes

---

### 🌐 Demo

#### `pnpm demo`

**Servidor local para ejemplos**

```bash
pnpm demo
```

- ✅ Hace build completo primero
- ✅ Levanta servidor en `http://localhost:3000`
- 📂 Sirve carpeta `examples/`
- 📝 Usar cuando: Probar componentes en browser

#### `pnpm demo:open` 🆕

**Demo con apertura automática**

```bash
pnpm demo:open
```

- ✅ Igual que `demo`
- ✅ Abre browser automáticamente
- 📝 Usar cuando: UX mejorada, primera vez

---

### 🧹 Limpieza

#### `pnpm clean`

**Limpia cache y builds**

```bash
pnpm clean
```

- ✅ Elimina `.turbo` cache
- ✅ Elimina `node_modules/.cache`
- ✅ Elimina `examples/dist/*.min.*`
- ✅ Elimina builds de Storybook
- 📝 Usar cuando: Problemas de cache, builds corruptos

---

## 🎨 Scripts de Calidad

### 🔍 Linting

#### `pnpm lint`

**Verifica calidad de código**

```bash
pnpm lint
```

- ✅ ESLint en todos los packages
- ✅ Verifica TypeScript
- ✅ Verifica JavaScript
- 📝 Usar cuando: Antes de commit, PR

---

### ✨ Formateo

#### `pnpm format`

**Formatea código automáticamente**

```bash
pnpm format
```

- ✅ Prettier en todo el repo
- ✅ Formatos: HTML, TS, JS, JSON, CSS, MD
- ✅ Corrige automáticamente
- 📝 Usar cuando: Antes de commit, inconsistencias

---

### ✅ Validación CSS

#### `pnpm validate:css`

**Valida estándares CSS**

```bash
pnpm validate:css
```

- ✅ Verifica nomenclatura BEM
- ✅ Verifica custom properties
- ✅ Verifica logical properties
- ✅ Genera reporte
- 📝 Usar cuando: Cambios en CSS, PR

---

## 🧪 Testing

#### `pnpm test`

**Ejecuta tests unitarios**

```bash
pnpm test
```

- ✅ Vitest en todos los packages
- ✅ Tests de componentes
- ✅ Tests de utilidades
- 📝 Usar cuando: Desarrollo, CI/CD

---

## 📖 Documentación

#### `pnpm storybook`

**Levanta Storybook**

```bash
pnpm storybook
```

- ✅ Build completo primero
- ✅ Storybook en `https://juancontreras-dev.github.io/seguros-bolivar-ui/storybook/`
- ✅ Documentación interactiva
- 📝 Usar cuando: Ver componentes, documentación

---

## 🚀 Flujos de Trabajo Recomendados

### 🔷 Desarrollo de Componente Nuevo

```bash
# 1. Limpia (si es necesario)
pnpm clean

# 2. Build inicial
pnpm build

# 3. Modo watch
pnpm dev

# 4. En otra terminal: demo
pnpm demo:open
```

---

### 🔷 Cambio Rápido en CSS

```bash
# Ya en modo dev? Solo guarda el archivo
# Si no:
pnpm dev
```

---

### 🔷 Cambio en Tokens (JSON)

```bash
# Build completo necesario
pnpm build

# Luego demo
pnpm demo
```

---

### 🔷 Antes de Commit

```bash
# 1. Valida CSS
pnpm validate:css

# 2. Lint
pnpm lint

# 3. Tests (si existen)
pnpm test

# 4. Format (opcional)
pnpm format
```

---

### 🔷 Antes de Deploy/PR

```bash
# Build limpio
pnpm clean
pnpm build

# Validaciones
pnpm lint
pnpm test
pnpm validate:css

# Demo final
pnpm demo
```

---

## 📊 Comparación de Scripts

| Script         | Duración | Cache | Uso                    |
| -------------- | -------- | ----- | ---------------------- |
| `build`        | ~60s     | ❌ No | Producción, deploy     |
| `dev`          | Continuo | ✅ Sí | Desarrollo activo      |
| `demo`         | ~65s     | ❌ No | Probar componentes     |
| `demo:open`    | ~65s     | ❌ No | Primera vez            |
| `validate:css` | ~5s      | -     | Validar estándares CSS |

---

## 💡 Tips de Productividad

### 🔹 Dos Terminales

```bash
# Terminal 1: Watch mode
pnpm dev

# Terminal 2: Demo server
cd examples && npx serve -p 3000
```

### 🔹 Rebuild Rápido

```bash
# Usa dev para cambios incrementales
pnpm dev

# Para rebuild completo (cambios en tokens)
pnpm build
```

### 🔹 Debugging Build

```bash
# Limpia todo y rebuild
pnpm clean && pnpm build

# Si persisten problemas
rm -rf node_modules && pnpm install && pnpm build
```

---

## 🆘 Solución de Problemas

### ❌ "Build falla"

```bash
pnpm clean
pnpm install
pnpm build
```

### ❌ "CSS no se actualiza"

```bash
# Verifica que dev esté corriendo
pnpm dev

# O fuerza rebuild completo
pnpm build
```

### ❌ "Demo no muestra cambios"

```bash
# Ctrl+C para detener demo
# Rebuild y relanza
pnpm build && pnpm demo
```

### ❌ "Conflictos de cache"

```bash
pnpm clean
pnpm build
```

---

## 📝 Notas Finales

- **Siempre usa `pnpm`**, no npm o yarn
- **`build`** hace limpieza completa y regenera todo
- **`dev`** es ideal para desarrollo continuo con watch mode
- **`demo`** siempre hace build completo (garantiza consistencia)
- **`demo:open`** abre el browser automáticamente
- **Validaciones** (lint, css) antes de commit

---

## 🔗 Scripts Internos (No Llamar Directamente)

Estos scripts se ejecutan automáticamente por Turbo:

- `@seguros-bolivar-ui/tokens build` - Genera tokens CSS
- `@seguros-bolivar-ui/atoms build` - Compila atoms CSS
- `@seguros-bolivar-ui/bundle build` - Genera bundles por marca
- `@seguros-bolivar-ui/bundle copy:all` - Copia a examples/ y Storybook

**No es necesario ejecutarlos manualmente.**

---

**Última actualización:** $(date +%Y-%m-%d)  
**Versión:** 1.0.0  
**Autor:** Seguros Bolivar UI Design System Team
