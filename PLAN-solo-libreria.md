# Plan: Rama library-only — librería limpia para producción

**Rama base:** `main`
**Nueva rama:** `library-only`
**Remote actual:** `https://github.com/juancontreras-dev/seguros-bolivar-ui.git`
**Remote destino:** `https://github.com/segurosbolivar/seguros-bolivar-ui-lib.git`

**Ya resuelto antes de este plan:**
- `packages/bundle/assets/fonts/bolivar/` existe con los 10 archivos `.woff2`
- `packages/bundle/src/builder.ts` línea 29 ya apunta a `../assets/fonts/bolivar`

---

## Fase 1 — Crear la rama
**Estado:** ⬜ Pendiente

```bash
git checkout main
git pull origin main
git checkout -b library-only
```

---

## Fase 2 — Eliminar archivos y carpetas
**Estado:** ⬜ Pendiente

Ejecutar cada comando por separado. Si alguno devuelve error "pathspec did not match", ignorarlo y continuar.

```bash
# Paquete de documentación Storybook
git rm -r packages/docs/

# Demos HTML estáticos
git rm -r examples/

# Scripts auxiliares de deploy y copias
git rm scripts/copy-assets.js
git rm scripts/build-site.js
git rm scripts/deploy-gh-pages.js
git rm scripts/dev.sh
git rm scripts/setup.sh
git rm scripts/remove-brand-controls.py

# Configuración de deploy Vercel
git rm vercel.json

# Configuración de Figma Code Connect (desarrollo interno)
git rm figma-code-connect-mappings.json

# Tests e2e (dependían de examples/)
git rm playwright.config.ts

# Reglas de Cursor IDE (no van al repo destino)
git rm -r .cursor/

# Archivos .md de planificación y documentación interna
git rm PLAN-quitar-examples.md
git rm PLAN-solo-libreria.md
git rm PROPUESTA-CURSOR-WORKFLOW.md
git rm QA-component.md
git rm creator-component.md
git rm CDN_SETUP_COMPLETE.md
git rm CODE_CONNECT_CHECKLIST.md
git rm CONTRIBUTING.md
git rm DEPLOYMENT.md
git rm DX-GUIDE.md
git rm FIGMA_CODE_CONNECT_GUIDE.md
git rm FIGMA_CODE_CONNECT_SETUP_COMPLETE.md
git rm INPUT_FIGMA_ALIGNMENT_GUIDE.md
git rm INPUT_FIGMA_ALIGNMENT_REPORT.md
git rm NUEVOS_COMPONENTES_IMPLEMENTADOS.md
git rm PUBLISHING_GUIDE.md
git rm QUICK_REFERENCE_CODE_CONNECT.md
git rm RESUMEN_FIGMA_CODE_CONNECT.md
git rm SCRIPTS_GUIDE.md
git rm SOLUCION_MODAL_GITHUB.md
```

---

## Fase 3 — Modificar `package.json` raíz
**Estado:** ⬜ Pendiente

**Archivo:** `package.json` (raíz del repo)

### 3.1 Reemplazar el bloque `"scripts"` completo

Antes:
```json
"scripts": {
  "build": "pnpm run clean && pnpm exec turbo run build --force --no-cache && pnpm --filter @seguros-bolivar/ui-bundle run copy:all",
  "build:storybook": "pnpm run build && pnpm --filter @seguros-bolivar-ui/docs build-storybook",
  "build:site": "pnpm run build && pnpm run build:storybook && node scripts/build-site.js",
  "check": "pnpm run lint  --fix && pnpm run format:check && pnpm run test",
  "clean": "pnpm exec turbo run clean && node -e \"const fs=require('fs'); ['.turbo','node_modules/.cache','docs'].forEach(d=>fs.rmSync(d,{recursive:true,force:true})); ['examples/dist','packages/docs/.storybook'].forEach(d=>{try{fs.readdirSync(d).filter(f=>f.includes('.min.')).forEach(f=>fs.unlinkSync(d+'/'+f))}catch(e){}})\"",
  "demo": "pnpm run build && cd examples && npx serve -p 3000",
  "demo:subpath": "npx serve . -p 3080",
  "deploy": "pnpm run build:site && node scripts/deploy-gh-pages.js",
  "dev": "./scripts/dev.sh",
  "dev:bundle": "pnpm --filter @seguros-bolivar-ui/bundle dev",
  "dev:demo": "pnpm run build && cd examples && npx serve -p 3000",
  "dev:storybook": "pnpm run build && pnpm --filter @seguros-bolivar-ui/docs storybook",
  "dev:test": "vitest --watch",
  "format": "prettier --write \"**/*.{html,ts,tsx,js,jsx,json,css,md}\"",
  "format:check": "prettier --check \"**/*.{html,ts,tsx,js,jsx,json,css,md}\"",
  "lint": "pnpm exec turbo run lint",
  "lint:fix": "pnpm exec turbo run lint -- --fix && pnpm format",
  "prepare": "husky",
  "release": "changeset publish",
  "setup": "./scripts/setup.sh",
  "storybook": "pnpm run build && pnpm --filter @seguros-bolivar-ui/docs storybook",
  "test": "pnpm exec turbo run test",
  "test:ui": "vitest --ui",
  "test:watch": "vitest --watch",
  "version": "changeset version"
},
```

Después:
```json
"scripts": {
  "build": "pnpm run clean && pnpm exec turbo run build --force --no-cache",
  "check": "pnpm run lint --fix && pnpm run format:check && pnpm run test",
  "clean": "pnpm exec turbo run clean && node -e \"const fs=require('fs'); ['.turbo','node_modules/.cache','docs'].forEach(d=>fs.rmSync(d,{recursive:true,force:true}))\"",
  "dev:test": "vitest --watch",
  "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css}\"",
  "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,json,css}\"",
  "lint": "pnpm exec turbo run lint",
  "lint:fix": "pnpm exec turbo run lint -- --fix && pnpm format",
  "prepare": "husky",
  "release": "changeset publish",
  "test": "pnpm exec turbo run test",
  "test:ui": "vitest --ui",
  "test:watch": "vitest --watch",
  "version": "changeset version"
},
```

### 3.2 Actualizar URLs del repositorio

Antes:
```json
"homepage": "https://github.com/juancontreras-dev/seguros-bolivar-ui#readme",
"bugs": {
  "url": "https://github.com/juancontreras-dev/seguros-bolivar-ui/issues"
},
"repository": {
  "type": "git",
  "url": "https://github.com/juancontreras-dev/seguros-bolivar-ui.git"
},
```

Después:
```json
"homepage": "https://github.com/segurosbolivar/seguros-bolivar-ui-lib#readme",
"bugs": {
  "url": "https://github.com/segurosbolivar/seguros-bolivar-ui-lib/issues"
},
"repository": {
  "type": "git",
  "url": "https://github.com/segurosbolivar/seguros-bolivar-ui-lib.git"
},
```

---

## Fase 4 — Modificar `packages/bundle/package.json`
**Estado:** ⬜ Pendiente

**Archivo:** `packages/bundle/package.json`

### 4.1 Eliminar scripts de copia

Antes (bloque scripts completo):
```json
"scripts": {
  "build": "tsx src/builder.ts",
  "build:copy": "pnpm run build && pnpm run copy:all",
  "copy:all": "node ../../scripts/copy-assets.js all",
  "copy:examples": "node ../../scripts/copy-assets.js examples",
  "copy:storybook": "node ../../scripts/copy-assets.js storybook",
  "dev": "tsx watch src/builder.ts",
  "clean": "node -e \"require('fs').rmSync('dist', {recursive:true, force:true})\"",
  "serve": "npx serve dist -p 3000",
  "prepublishOnly": "pnpm run clean && pnpm run build",
  "publish:dry": "npm publish --dry-run",
  "publish:public": "npm publish --access public"
},
```

Después:
```json
"scripts": {
  "build": "tsx src/builder.ts",
  "dev": "tsx watch src/builder.ts",
  "clean": "node -e \"require('fs').rmSync('dist', {recursive:true, force:true})\"",
  "serve": "npx serve dist -p 3000",
  "prepublishOnly": "pnpm run clean && pnpm run build",
  "publish:dry": "npm publish --dry-run",
  "publish:public": "npm publish --access public"
},
```

### 4.2 Actualizar URLs del repositorio

Antes:
```json
"homepage": "https://github.com/seguros-bolivar/bolivar-ui#readme",
"repository": {
  "type": "git",
  "url": "git+https://github.com/seguros-bolivar/bolivar-ui.git",
  "directory": "packages/bundle"
},
"bugs": {
  "url": "https://github.com/seguros-bolivar/bolivar-ui/issues"
},
```

Después:
```json
"homepage": "https://github.com/segurosbolivar/seguros-bolivar-ui-lib#readme",
"repository": {
  "type": "git",
  "url": "git+https://github.com/segurosbolivar/seguros-bolivar-ui-lib.git",
  "directory": "packages/bundle"
},
"bugs": {
  "url": "https://github.com/segurosbolivar/seguros-bolivar-ui-lib/issues"
},
```

---

## Fase 5 — Modificar `.changeset/config.json`
**Estado:** ⬜ Pendiente

**Archivo:** `.changeset/config.json`

Eliminar `"@seguros-bolivar-ui/docs"` del array `"ignore"` (ese paquete fue eliminado):

```json
"ignore": []
```

---

## Fase 6 — Actualizar `packages/bundle/README.md`
**Estado:** ⬜ Pendiente

**Archivo:** `packages/bundle/README.md`

Reemplazar el contenido completo con las instrucciones de uso npm y CDN (ver contenido en el plan original completo).

Secciones que debe tener:
- Instalación (`npm install @seguros-bolivar/ui-bundle`)
- Uso vía npm (import JS + HTML directo a node_modules)
- Uso vía CDN con jsDelivr (próximamente)
- Tabla de 12 bundles disponibles (6 marcas × 2 temas)
- Ejemplos de componentes: Botones, Input, Badge, Card, Alert, Web Components
- Cómo cambiar marca/tema

---

## Fase 7 — Actualizar lockfile y verificar build
**Estado:** ⬜ Pendiente

```bash
# Actualizar pnpm-lock.yaml (elimina @seguros-bolivar-ui/docs y sus deps)
pnpm install

# Compilar toda la librería
pnpm run build
```

**Si el build falla, NO continuar. Revisar el error antes de seguir.**

Verificar que existen exactamente estos archivos en `packages/bundle/dist/`:

```bash
ls packages/bundle/dist/sb-ui-*.min.css | wc -l
# Esperado: 12

ls packages/bundle/dist/sb-ui-components.min.js
# Esperado: archivo existe

ls packages/bundle/dist/fonts/
# Esperado: archivos .woff2
```

---

## Fase 8 — Commit
**Estado:** ⬜ Pendiente

```bash
git add -A
git commit -m "refactor: library-only — eliminar docs, examples y scripts auxiliares

- Elimina packages/docs/ (Storybook)
- Elimina examples/ (demos HTML)
- Elimina scripts auxiliares de deploy y copia
- Elimina archivos .md de documentación interna
- Elimina .cursor/, playwright.config.ts, vercel.json
- Limpia scripts en package.json raíz y packages/bundle/package.json
- Actualiza URLs al repositorio destino segurosbolivar/seguros-bolivar-ui-lib
- Actualiza packages/bundle/README.md con instrucciones npm y CDN"
```

---

## Fase 9 — Validar que la librería funciona y está limpia
**Estado:** ⬜ Pendiente

**Si cualquier validación falla, NO continuar al paso siguiente — resolver el error primero.**

### 9.1 Validación de archivos generados

```bash
ls packages/bundle/dist/sb-ui-*.min.css | wc -l
# Esperado: 12

ls packages/bundle/dist/sb-ui-components.min.js
# Esperado: archivo existe

ls packages/bundle/dist/fonts/*.woff2 | wc -l
# Esperado: 10

ls packages/bundle/dist/webfonts/ | wc -l
# Esperado: mayor que 0
```

### 9.2 Validación de referencias eliminadas

```bash
grep -r "examples" packages/bundle/src/
# Esperado: sin resultados

grep -rn "storybook\|copy:all\|copy-assets\|build-site\|deploy-gh" package.json packages/bundle/package.json
# Esperado: sin resultados

ls packages/docs/ 2>&1
# Esperado: "No such file or directory"

ls examples/ 2>&1
# Esperado: "No such file or directory"
```

### 9.3 Validación visual en browser

Crear `_test.html` en la raíz (no se commitea — se borra después):

```html
<!DOCTYPE html>
<html data-brand="seguros-bolivar" data-theme="light" lang="es">
<head>
  <meta charset="UTF-8">
  <title>Test librería</title>
  <link rel="stylesheet" href="packages/bundle/dist/sb-ui-seguros-bolivar-light.min.css">
</head>
<body style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem">
  <h1>Test: Seguros Bolívar light</h1>
  <div style="display:flex;gap:1rem;flex-wrap:wrap">
    <button class="sb-ui-button sb-ui-button--primary">Primary stroke</button>
    <button class="sb-ui-button sb-ui-button--fill sb-ui-button--primary">Primary fill</button>
    <button class="sb-ui-button sb-ui-button--secondary">Secondary</button>
    <button class="sb-ui-button sb-ui-button--primary" disabled>Disabled</button>
  </div>
  <div style="display:flex;gap:1rem;flex-wrap:wrap">
    <input class="sb-ui-input" type="text" placeholder="Input normal">
    <input class="sb-ui-input sb-ui-input--error" type="text" value="Input error">
  </div>
  <div style="display:flex;gap:1rem">
    <span class="sb-ui-badge sb-ui-badge--success">Activo</span>
    <span class="sb-ui-badge sb-ui-badge--error">Error</span>
    <span class="sb-ui-badge sb-ui-badge--warning">Warning</span>
    <span class="sb-ui-badge sb-ui-badge--info">Info</span>
  </div>
  <div class="sb-ui-alert sb-ui-alert--success">Alert success — tokens y colores cargados correctamente.</div>
  <div class="sb-ui-card" style="max-inline-size:300px">
    <div class="sb-ui-card__body">Card body content</div>
  </div>
  <p style="font-family:'Bolivar';font-weight:300">Bolivar Light — fuente cargada</p>
  <p style="font-family:'Bolivar';font-weight:700">Bolivar Bold — fuente cargada</p>
  <script type="module" src="packages/bundle/dist/sb-ui-components.min.js"></script>
</body>
</html>
```

```bash
npx serve . -p 3000
# Abrir: http://localhost:3000/_test.html
```

| Elemento | Señal de OK | Señal de fallo |
|----------|-------------|----------------|
| Botones | Colores de marca, estilos stroke y fill | Botones HTML sin estilo |
| Fuente Bolivar | Visiblemente diferente a sans-serif | Idéntico al fallback |
| Badge colores | Verde/rojo/amarillo/azul | Todos del mismo color |
| Alert | Fondo coloreado, texto legible | Sin estilos |
| Card | Borde o sombra, padding visible | Sin estilos |
| Consola browser | Sin errores | Errores `Failed to load` o `Uncaught` |

Una vez verificado:
```bash
rm _test.html
```

### 9.4 Validación de tests unitarios

```bash
pnpm run test
# Esperado: todos los tests pasan, exit code 0
```

---

## Fase 10 — Push al repositorio destino
**Estado:** ⬜ Pendiente

```bash
# Agregar el remote del repositorio destino
git remote add lib https://github.com/segurosbolivar/seguros-bolivar-ui-lib.git

# Push de library-only como main en el repo destino
git push lib library-only:main
```

Si el push falla con "rejected non-fast-forward":
```bash
git push lib library-only:main --force
```
> Solo usar `--force` si el repo destino está vacío o si el usuario confirma que se puede sobrescribir.

---

## Fase 11 — Publicar en npm
**Estado:** ⬜ Pendiente

```bash
cd packages/bundle

# Simular primero — no publica nada
npm publish --dry-run

# Si dry-run no muestra errores, publicar
npm publish --access public
```

---

## Verificación final

| Comando | Resultado esperado |
|---------|-------------------|
| `pnpm run build` | Exit code 0, sin errores |
| `ls packages/bundle/dist/sb-ui-*.min.css \| wc -l` | `12` |
| `ls packages/bundle/dist/sb-ui-components.min.js` | Archivo existe |
| `grep -r "examples" packages/bundle/src/builder.ts` | Sin resultados |
| `grep -r "storybook\|docs" package.json` | Sin resultados |
| `grep -r "copy:all\|copy-assets" package.json packages/bundle/package.json` | Sin resultados |
| `pnpm run test` | Todos los tests pasan |

---

## Archivos críticos modificados

| Archivo | Cambio |
|---------|--------|
| `package.json` | Scripts limpios + URLs actualizadas |
| `packages/bundle/package.json` | Scripts copy eliminados + URLs actualizadas |
| `packages/bundle/README.md` | Reescrito con instrucciones npm y CDN |
| `.changeset/config.json` | Eliminar `@seguros-bolivar-ui/docs` del array `ignore` |
| `pnpm-lock.yaml` | Auto-actualizado con `pnpm install` |
