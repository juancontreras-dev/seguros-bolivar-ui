# 🚀 Developer Experience Guide

Esta guía te ayudará a tener la mejor experiencia de desarrollo con Seguros Bolivar UI Design System.

## ⚡ Quick Start

### 1. Setup Inicial (Una sola vez)

```bash
# Clonar y setup automático
git clone https://github.com/tu-usuario/seguros-bolivar-ui.git
cd seguros-bolivar-ui
pnpm run setup
```

### 2. Desarrollo Diario

```bash
# Modo desarrollo interactivo
pnpm run dev

# Selecciona tu opción:
# 1) 🎨 Storybook (documentación)
# 2) 🎮 Demo (ejemplos)
# 3) 🔧 Bundle Watch
# 4) 🧪 Test Watch
# 5) 🚀 Full Dev (todo junto)
```

## 🛠️ Herramientas Configuradas

### VSCode (Recomendado)

**Configuración automática incluida:**

- ✅ Formateo automático al guardar
- ✅ Lint automático con fix
- ✅ Snippets y autocompletado
- ✅ Tasks predefinidas (Cmd+Shift+P → "Tasks")
- ✅ Debug configurations
- ✅ Extensions recomendadas

**Comandos VSCode útiles:**

- `Cmd+Shift+P` → "Tasks: Run Task" → Ver todas las tareas
- `F5` → Debug Storybook/Bundle/Tests
- `Cmd+Shift+E` → Explorer con file nesting

### Git Hooks Automáticos

**Pre-commit automático:**

- ✅ ESLint + Stylelint con fix
- ✅ Prettier formatting
- ✅ Sort package.json
- ✅ Type checking

```bash
# Los hooks se ejecutan automáticamente, pero también puedes:
pnpm run lint:fix    # Fix manual
pnpm run check       # Verificación completa
```

### Scripts Inteligentes

| Script                   | Descripción                     | Cuándo usar                |
| ------------------------ | ------------------------------- | -------------------------- |
| `pnpm run dev`           | **Modo desarrollo interactivo** | Desarrollo diario          |
| `pnpm run dev:storybook` | Solo Storybook                  | Documentar componentes     |
| `pnpm run dev:demo`      | Solo demo                       | Probar integración         |
| `pnpm run dev:bundle`    | Solo bundle watch               | Desarrollo de tokens/atoms |
| `pnpm run dev:test`      | Tests en watch                  | TDD                        |
| `pnpm run setup`         | Setup completo                  | Primera vez o reset        |
| `pnpm run check`         | Verificación completa           | Antes de PR                |

## 🎯 Flujos de Trabajo

### 🆕 Nuevo Componente

```bash
# 1. Crear branch
git checkout -b feat/nuevo-componente

# 2. Desarrollo con watch
pnpm run dev
# → Selecciona "5) Full Dev"

# 3. Crear componente
# packages/atoms/src/nuevo-componente.css
# packages/docs/src/atoms/NuevoComponente.stories.ts

# 4. Ver en Storybook (auto-reload)
# https://juancontreras-dev.github.io/seguros-bolivar-ui/storybook/

# 5. Commit automático (hooks activos)
git add .
git commit -m "feat(atoms): add nuevo-componente"
```

### 🐛 Bug Fix

```bash
# 1. Reproducir en Storybook/Demo
pnpm run dev:storybook

# 2. Fix con tests en watch
pnpm run dev:test

# 3. Verificar en todas las marcas
# Usar selector de marca en Storybook

# 4. Commit
git commit -m "fix(atoms): correct button padding in dark theme"
```

### 🎨 Nueva Marca

```bash
# 1. Crear tokens
# packages/tokens/src/primitives/brands/nueva-marca.json

# 2. Watch automático
pnpm run dev:bundle

# 3. Ver resultado
pnpm run dev:demo
# → Cambiar marca en selector

# 4. Overrides específicos (opcional)
# packages/brand-overrides/src/nueva-marca/
```

## 🔧 Debugging

### Storybook Debug

```bash
# En VSCode: F5 → "Debug Storybook"
# O manual:
pnpm run dev:storybook
# → https://juancontreras-dev.github.io/seguros-bolivar-ui/storybook/
```

**Debugging tips:**

- Usa el selector de marca/tema en toolbar
- Inspecciona CSS variables en DevTools
- Usa "Docs" tab para ver props automáticas

### Bundle Debug

```bash
# En VSCode: F5 → "Debug Bundle Builder"
# O manual:
pnpm --filter @seguros-bolivar-ui/bundle dev
```

**Debugging tips:**

- Logs detallados en consola
- Archivos generados en `packages/bundle/dist/`
- Source maps incluidos

### CSS Debug

**Variables CSS:**

```css
/* Ver todas las variables activas */
:root {
  /* Inspeccionar en DevTools → Computed */
}

/* Debug específico */
.sb-ui-button {
  border: 1px solid red; /* Temporal para debug */
}
```

**Stylelint debug:**

```bash
# Ver reglas específicas
pnpm --filter @seguros-bolivar-ui/atoms run lint -- --print-config src/button.css
```

## 📊 Performance

### Build Performance

```bash
# Build con análisis
pnpm run build
# → Ver tiempos en consola

# Clean build (si hay problemas)
pnpm run clean && pnpm run build
```

### Bundle Size Analysis

```bash
# Ver tamaños de bundles
ls -la packages/bundle/dist/*.min.*

# Análisis detallado (futuro)
pnpm run analyze
```

## 🧪 Testing Workflow

### Unit Tests

```bash
# Watch mode (recomendado)
pnpm run dev:test

# UI mode
pnpm run test:ui
# → http://localhost:51204
```

### Visual Testing

```bash
# Storybook para visual testing
pnpm run dev:storybook

# Demo para integration testing
pnpm run dev:demo
```

### E2E Testing

```bash
# Ejecutar E2E
pnpm run test:e2e

# Debug E2E
npx playwright test --debug
```

## 🚨 Troubleshooting

### Problemas Comunes

**Build fails:**

```bash
pnpm run clean && pnpm install && pnpm run build
```

**Git hooks no funcionan:**

```bash
pnpm exec husky install
chmod +x .husky/pre-commit
```

**VSCode no detecta configuración:**

```bash
# Recargar window
Cmd+Shift+P → "Developer: Reload Window"
```

**Storybook no carga estilos:**

```bash
pnpm run build  # Regenerar bundles CSS
pnpm run dev:storybook
```

**PNPM workspace issues:**

```bash
rm -rf node_modules packages/*/node_modules
pnpm install
```

### Logs y Debug

**Ver logs detallados:**

```bash
# Turbo logs
pnpm run build --verbose

# Bundle logs
DEBUG=* pnpm --filter @seguros-bolivar-ui/bundle dev

# Storybook logs
pnpm run dev:storybook --verbose
```

## 📚 Recursos Rápidos

### Documentación

- **Storybook**: https://juancontreras-dev.github.io/seguros-bolivar-ui/storybook/ (después de `pnpm run dev:storybook`)
- **Demo**: http://localhost:3000 (después de `pnpm run dev:demo`)
- **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md)
- **CSS Standards**: [docs/guides/CSS_STANDARDS.md](./docs/guides/CSS_STANDARDS.md)

### Comandos de Emergencia

```bash
# Reset completo
rm -rf node_modules packages/*/node_modules .turbo
pnpm install
pnpm run setup

# Fix permisos
chmod +x scripts/*.sh
chmod +x .husky/pre-commit

# Verificar todo
pnpm run check
```

### Shortcuts VSCode

| Shortcut      | Acción             |
| ------------- | ------------------ |
| `Cmd+Shift+P` | Command palette    |
| `Cmd+Shift+E` | File explorer      |
| `Cmd+``       | Terminal           |
| `F5`          | Start debugging    |
| `Cmd+K Cmd+S` | Keyboard shortcuts |

---

## 💡 Tips Pro

1. **Usa `pnpm run dev`** para desarrollo diario - es interactivo
2. **Configura VSCode** - toda la configuración está incluida
3. **Aprovecha los git hooks** - formatean automáticamente
4. **Debug con F5** - configuraciones listas para usar
5. **Usa Storybook** para desarrollo de componentes
6. **Usa Demo** para testing de integración

¡Happy coding! 🎨✨
