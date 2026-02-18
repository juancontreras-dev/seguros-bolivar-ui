# 🤝 Contributing to Seguros Bolivar UI Design System

¡Gracias por tu interés en contribuir al Seguros Bolivar UI Design System! Este documento te guiará a través del proceso de contribución.

## 🚀 Quick Start

### 1. Setup del Proyecto

```bash
# 1. Fork y clonar el repositorio
git clone https://github.com/tu-usuario/seguros-bolivar-ui.git
cd seguros-bolivar-ui

# 2. Setup automático
pnpm run setup
```

El script de setup automáticamente:

- ✅ Verifica Node.js 18+
- ✅ Instala PNPM si no está disponible
- ✅ Instala todas las dependencias
- ✅ Configura git hooks
- ✅ Hace build inicial
- ✅ Verifica que todo funciona

### 2. Desarrollo

```bash
# Modo desarrollo interactivo
pnpm run dev

# O comandos específicos:
pnpm run dev:storybook  # Documentación
pnpm run dev:demo       # Demo en vivo
pnpm run dev:bundle     # Bundle watch
pnpm run dev:test       # Tests en watch
```

## 📁 Estructura del Proyecto

```
seguros-bolivar-ui/
├── packages/
│   ├── tokens/         # 🎨 Design tokens
│   ├── atoms/          # ⚛️ Componentes CSS
│   ├── molecules/      # 🧬 Web Components
│   ├── brand-overrides/# ✨ Overrides por marca
│   ├── bundle/         # 📦 CDN bundles
│   └── docs/           # 📚 Storybook
├── examples/           # 🎮 Demos interactivos
├── scripts/            # 🔧 Scripts de desarrollo
└── .vscode/            # ⚙️ Configuración VSCode
```

## 🎯 Tipos de Contribución

### 🐛 Bug Reports

1. Busca issues existentes primero
2. Usa el template de bug report
3. Incluye pasos para reproducir
4. Especifica marca/tema afectado

### ✨ Feature Requests

1. Describe el caso de uso
2. Explica el beneficio para usuarios
3. Considera impacto en todas las marcas
4. Propón API si es aplicable

### 🔧 Code Contributions

1. **Fork** el repositorio
2. **Crea branch** desde `main`: `git checkout -b feature/mi-feature`
3. **Desarrolla** siguiendo las convenciones
4. **Testa** tu código: `pnpm run check`
5. **Commit** siguiendo conventional commits
6. **Push** y crea Pull Request

## 📐 Convenciones de Código

### CSS/Styling

- **Prefijo**: Todas las clases CSS usan `sb-ui-` (ej: `.sb-ui-button`)
- **Variables**: Todas las CSS variables usan `--sb-ui-` (ej: `--sb-ui-color-primary`)
- **BEM**: Usa metodología BEM para naming
- **Nesting**: CSS nativo con `&` permitido
- **Logical Properties**: Usa `inline-start` en lugar de `left`

```css
/* ✅ Correcto */
.sb-ui-button {
  --sb-ui-button-padding: var(--sb-ui-space-m);
  padding-inline: var(--sb-ui-button-padding);

  &--primary {
    background-color: var(--sb-ui-color-primary-base);
  }
}

/* ❌ Incorrecto */
.button {
  --padding: 16px;
  padding-left: var(--padding);
}
```

### TypeScript

- **Strict mode**: Siempre habilitado
- **Imports**: Usa imports relativos
- **Types**: Exporta tipos cuando sea necesario
- **JSDoc**: Documenta APIs públicas

### Git Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat(atoms): add new badge component
fix(tokens): correct davivienda primary color
docs(storybook): update button documentation
chore(deps): update dependencies
```

Tipos disponibles:

- `feat`: Nueva funcionalidad
- `fix`: Bug fix
- `docs`: Documentación
- `style`: Cambios de formato
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Tareas de mantenimiento

## 🧪 Testing

### Antes de Commit

Los git hooks automáticamente ejecutan:

- ✅ ESLint + Stylelint
- ✅ Prettier formatting
- ✅ Type checking

### Manual Testing

```bash
# Lint completo
pnpm run lint

# Tests unitarios
pnpm run test

# Tests E2E
pnpm run test:e2e

# Verificación completa
pnpm run check
```

### Visual Testing

1. **Storybook**: Verifica componentes en todas las marcas
2. **Demo**: Testa integración completa
3. **Cross-browser**: Chrome, Firefox, Safari

## 🎨 Añadir Nueva Marca

### 1. Design Tokens

```bash
# Crear archivo de tokens
touch packages/tokens/src/primitives/brands/mi-marca.json
```

```json
{
  "color": {
    "primary": {
      "base": { "value": "#your-color" }
    }
  }
}
```

### 2. Brand Overrides (Opcional)

```bash
# Crear directorio de overrides
mkdir packages/brand-overrides/src/mi-marca
touch packages/brand-overrides/src/mi-marca/index.css
```

### 3. Build y Test

```bash
pnpm run build
pnpm run storybook
```

## 🔧 Añadir Nuevo Componente

### 1. Atom (CSS Component)

```bash
# Crear archivo CSS
touch packages/atoms/src/mi-componente.css
```

Estructura básica:

```css
/* packages/atoms/src/mi-componente.css */
.sb-ui-mi-componente {
  /* Estilos base */

  &--variant {
    /* Variante */
  }

  &:hover {
    /* Estados */
  }
}
```

### 2. Molecule (Web Component)

```bash
# Crear componente Lit
touch packages/molecules/src/components/MiComponente.ts
```

### 3. Documentación

```bash
# Crear story
touch packages/docs/src/atoms/MiComponente.stories.ts
```

### 4. Actualizar Exports

Añadir a los `package.json` correspondientes y archivos de índice.

## 🔍 Code Review

### Checklist para PRs

- [ ] **Tests**: Código testeado y funcionando
- [ ] **Docs**: Documentación actualizada
- [ ] **Cross-brand**: Funciona en todas las marcas
- [ ] **Accessibility**: Cumple WCAG AA
- [ ] **Performance**: No impacto negativo
- [ ] **Breaking changes**: Documentados si existen

### Review Process

1. **Automated checks**: CI debe pasar
2. **Manual review**: Al menos 1 aprobación
3. **Testing**: Verificar en Storybook/Demo
4. **Merge**: Squash and merge preferido

## 📚 Recursos

### Documentación

- [Storybook](https://juancontreras-dev.github.io/seguros-bolivar-ui/storybook/) - Documentación interactiva
- [Demo](http://localhost:3000) - Ejemplos en vivo
- [CSS Standards](./docs/guides/CSS_STANDARDS.md) - Convenciones CSS

### Herramientas

- **VSCode**: Configuración incluida en `.vscode/`
- **Extensions**: Lista recomendada en `extensions.json`
- **Tasks**: Tareas predefinidas (Cmd+Shift+P → "Tasks")
- **Debug**: Configuraciones en `launch.json`

### Comandos Útiles

```bash
# Desarrollo
pnpm run dev              # Modo desarrollo interactivo
pnpm run dev:storybook    # Solo Storybook
pnpm run dev:bundle       # Solo bundle watch

# Testing
pnpm run test:watch       # Tests en watch mode
pnpm run test:ui          # UI de tests
pnpm run lint:fix         # Fix automático de lint

# Build
pnpm run build            # Build completo
pnpm run clean            # Limpiar builds
```

## 🆘 Ayuda

### Problemas Comunes

**Error de build:**

```bash
pnpm run clean && pnpm run build
```

**Problemas de dependencias:**

```bash
rm -rf node_modules packages/*/node_modules
pnpm install
```

**Git hooks no funcionan:**

```bash
pnpm exec husky install
```

### Contacto

- 🐛 **Bugs**: [GitHub Issues](https://github.com/tu-usuario/seguros-bolivar-ui/issues)
- 💬 **Preguntas**: [GitHub Discussions](https://github.com/tu-usuario/seguros-bolivar-ui/discussions)
- 📧 **Email**: support@rootblock.com

---

¡Gracias por contribuir al Seguros Bolivar UI Design System! 🎨✨
