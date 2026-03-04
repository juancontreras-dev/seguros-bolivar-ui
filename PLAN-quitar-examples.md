# Plan: Limpieza completa — dejar solo lo que la librería necesita

**Fecha:** 2026-03-04
**Rama actual:** `feature/layout-menu`

---

## Objetivo

Eliminar del repositorio todo lo que no es necesario para que la librería funcione: demos HTML, Storybook, scripts de deploy, integraciones externas, archivos de configuración de IDEs, documentación interna y archivos de planificación.

**Criterio:** si lo quitas y `pnpm run build` sigue generando los 12 CSS bundles + JS bundle, se puede eliminar.

---

## Lo que se CONSERVA

| Carpeta / Archivo | Por qué se conserva |
|---|---|
| `packages/tokens/` | Fuente de los design tokens |
| `packages/atoms/` | Componentes CSS |
| `packages/molecules/` | Web components Lit |
| `packages/brand-overrides/` | Overrides por marca |
| `packages/bundle/` | Builder que genera los bundles |
| `package.json` (raíz) | Workspace + scripts de build |
| `pnpm-workspace.yaml` | Define los paquetes del monorepo |
| `pnpm-lock.yaml` | Lockfile de dependencias |
| `turbo.json` | Pipeline de build |
| `tsconfig.base.json` | Config TypeScript base |
| `.changeset/` | Versioning y changelog |
| `.gitignore` | Archivos ignorados por git |
| `.gitattributes` | Configuración de git |
| `.prettierrc.json` | Formato de código |
| `.stylelintrc.json` | Linting de CSS |
| `eslint.config.js` | Linting de JS/TS |
| `.lintstagedrc.json` | Lint automático al hacer commit |
| `.husky/` | Git hooks (pre-commit) |
| `.nvmrc` | Versión de Node requerida |
| `vitest.config.ts` | Configuración de tests unitarios |
| `vitest.setup.ts` | Setup de tests unitarios |
| `LICENSE` | Licencia MIT |
| `README.md` (raíz) | Documentación principal del repo |
| `scripts/pre-publish-check.sh` | Verificación pre-publicación npm |
| `.github/CODEOWNERS` | Asignación de revisores |
| `.github/ISSUE_TEMPLATE/` | Templates para issues |
| `.github/PULL_REQUEST_TEMPLATE.md` | Template para PRs |

---

## Lo que se ELIMINA

### Carpetas completas

| Carpeta | Razón |
|---|---|
| `examples/` | Demos HTML estáticos — no son la librería |
| `packages/docs/` | Storybook — documentación interna, no el bundle |
| `form-io/` | Integración con Form.io — paquete separado, no está en el workspace ni es parte de la librería |
| `.cursor/` | Reglas del IDE Cursor — configuración local de desarrollo |
| `.claude/` | Configuración local de Claude Code — no pertenece al repo |
| `test/` | Carpeta vacía |

### Scripts (`scripts/`)

| Archivo | Razón |
|---|---|
| `scripts/copy-assets.js` | Copiaba bundles a `examples/dist/` y Storybook — ambos se eliminan |
| `scripts/build-site.js` | Armaba el site de ejemplos + Storybook para deploy |
| `scripts/deploy-gh-pages.js` | Publicaba el site en GitHub Pages |
| `scripts/dev.sh` | Abría ejemplos + Storybook en paralelo |
| `scripts/setup.sh` | Setup inicial para contribuidores |
| `scripts/remove-brand-controls.py` | Script Python para Figma Code Connect |

### GitHub Actions (`/.github/workflows/`)

| Archivo | Razón |
|---|---|
| `.github/workflows/ci.yml` | Todo el contenido está comentado — no hace nada |
| `.github/workflows/deploy-site.yml` | Desplegaba Storybook a GitHub Pages — ya no aplica |
| `.github/workflows/pipeline.yml` | Pipeline S3 para otro proyecto (tienda-digital) — no es de esta librería |

### Archivos de configuración de servicios externos

| Archivo | Razón |
|---|---|
| `vercel.json` | Deploy de Storybook en Vercel — se elimina Storybook |
| `figma-code-connect-mappings.json` | Mapeos de Figma Code Connect — herramienta interna de diseño |
| `setup-code-connect.py` | Script Python de Figma Code Connect — herramienta interna |
| `WorkflowFile.json` | Configuración de deploy S3 de otro proyecto (tienda-digital) |
| `playwright.config.ts` | Tests e2e que dependían de `examples/` |
| `package-lock.json` | Lockfile de npm — el proyecto usa pnpm, este archivo es un artefacto |
| `CLAUDE.md` | Instrucciones para Claude Code — configuración local de desarrollo |

### Documentación interna y de planificación

| Archivo | Razón |
|---|---|
| `PLAN-quitar-examples.md` | Este mismo documento — planificación interna |
| `PLAN-solo-libreria.md` | Planificación interna |
| `PROPUESTA-CURSOR-WORKFLOW.md` | Planificación interna |
| `QA-component.md` | Planificación interna |
| `creator-component.md` | Guía interna de creación de componentes |
| `CDN_SETUP_COMPLETE.md` | Registro interno de setup CDN |
| `CODE_CONNECT_CHECKLIST.md` | Checklist interno de Figma Code Connect |
| `CONTRIBUTING.md` | Guía de contribución — no aplica en repo de producción |
| `DEPLOYMENT.md` | Guía de deploy — ya no aplica |
| `DX-GUIDE.md` | Guía interna de developer experience |
| `FIGMA_CODE_CONNECT_GUIDE.md` | Guía de Figma Code Connect |
| `FIGMA_CODE_CONNECT_SETUP_COMPLETE.md` | Registro de setup Figma |
| `INPUT_FIGMA_ALIGNMENT_GUIDE.md` | Guía interna de alineación con Figma |
| `INPUT_FIGMA_ALIGNMENT_REPORT.md` | Reporte interno de alineación con Figma |
| `NUEVOS_COMPONENTES_IMPLEMENTADOS.md` | Registro interno de componentes |
| `PUBLISHING_GUIDE.md` | El README del bundle ya tendrá instrucciones de publicación |
| `QUICK_REFERENCE_CODE_CONNECT.md` | Referencia interna de Figma |
| `RESUMEN_FIGMA_CODE_CONNECT.md` | Resumen interno de Figma |
| `SCRIPTS_GUIDE.md` | Guía de scripts eliminados |
| `SOLUCION_MODAL_GITHUB.md` | Registro interno de fix |

---

## Resumen de impacto

| Categoría | Elementos eliminados |
|---|---|
| Carpetas | 6 (`examples/`, `packages/docs/`, `form-io/`, `.cursor/`, `.claude/`, `test/`) |
| Scripts | 6 archivos en `scripts/` |
| GitHub Actions | 3 workflows |
| Configs externos | 7 archivos |
| Docs internas | 20 archivos `.md` |
| **Total** | **~42 elementos** |

---

## Verificación post-limpieza

```bash
pnpm run build
# Esperado: exit code 0, genera 12 CSS + 1 JS en packages/bundle/dist/

ls packages/bundle/dist/sb-ui-*.min.css | wc -l
# Esperado: 12

pnpm run test
# Esperado: todos los tests pasan
```
