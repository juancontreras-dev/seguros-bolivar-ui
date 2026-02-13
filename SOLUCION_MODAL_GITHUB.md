# 🔧 Solución: Estilos de Modales no se cargan en GitHub Pages

## 📋 Diagnóstico del Problema

El componente Modal (`sb-ui-modal`) **SÍ está compilado correctamente** con sus estilos incluidos en el Shadow DOM. El problema es que el archivo JavaScript minificado `sb-ui-components.min.js` puede no estar completo o puede haber un problema con el despliegue.

---

## ✅ Solución Paso a Paso

### Paso 1: Instalar pnpm (requerido por el proyecto)

```powershell
# Opción A: Instalar pnpm globalmente usando npm
npm install -g pnpm

# Opción B: Si la opción A falla, usar corepack (incluido con Node.js 16+)
corepack enable
corepack prepare pnpm@8.15.4 --activate
```

### Paso 2: Verificar instalación de pnpm

```powershell
pnpm --version
# Debería mostrar: 8.15.4 (o superior)
```

### Paso 3: Limpiar y reconstruir todo desde cero

```powershell
# Limpiar todo (elimina archivos compilados anteriores)
pnpm run clean

# Instalar dependencias (si es necesario)
pnpm install

# Reconstruir TODOS los paquetes
pnpm run build

# Verificar que sb-ui-components.min.js se generó correctamente
ls packages/bundle/dist/sb-ui-components.min.js
```

### Paso 4: Reconstruir el sitio para GitHub Pages

```powershell
# Reconstruir Storybook
pnpm run build:storybook

# Reconstruir el sitio completo (examples + storybook)
pnpm run build:site

# Verificar que los archivos están en docs/dist/
ls docs/dist/
```

### Paso 5: Probar localmente ANTES de desplegar

```powershell
# Servir el sitio localmente
cd docs
npx serve -p 3000
```

Abre tu navegador en `http://localhost:3000/modal/` y verifica que los modales se vean correctamente con sus estilos.

### Paso 6: Desplegar a GitHub Pages

#### Opción A: Usando el script de despliegue automático

```powershell
# Volver al directorio raíz
cd ..

# Desplegar (esto hace commit y push automático)
pnpm run deploy
```

#### Opción B: Commit y push manual

```powershell
# Agregar cambios
git add .

# Hacer commit
git commit -m "fix: rebuild modal component with styles"

# Push a tu rama
git push origin tu-rama
```

---

## 🔍 Verificación Post-Despliegue

1. Espera 2-5 minutos para que GitHub Pages actualice
2. Visita tu URL de GitHub Pages: `https://TU-USUARIO.github.io/TU-REPO/modal/`
3. Abre las DevTools (F12) → Pestaña "Network"
4. Recarga la página (Ctrl+Shift+R)
5. Verifica que estos archivos se carguen correctamente:
   - ✅ `sb-ui-seguros-bolivar-light.min.css` (200 OK)
   - ✅ `sb-ui-components.min.js` (200 OK)
   - ✅ `components.css` (200 OK)

---

## 🐛 Solución de Problemas Comunes

### Problema 1: "pnpm: command not found"

**Causa:** pnpm no está instalado o no está en el PATH.

**Solución:**
```powershell
npm install -g pnpm
# O usa:
corepack enable
```

### Problema 2: Modal se abre pero sin estilos

**Causa:** El archivo `sb-ui-components.min.js` está corrupto o incompleto.

**Solución:**
```powershell
# Limpiar y reconstruir
pnpm run clean
pnpm run build
pnpm run build:site

# Verificar tamaño del archivo (debe ser > 50 KB)
ls -lh packages/bundle/dist/sb-ui-components.min.js
```

### Problema 3: Error 404 en archivos .min.css o .min.js

**Causa:** Los archivos no se copiaron correctamente a `docs/dist/`

**Solución:**
```powershell
# Verificar que el build del bundle está completo
ls packages/bundle/dist/

# Debería mostrar:
# - sb-ui-*.min.css (12 archivos, uno por cada brand/theme)
# - sb-ui-components.min.js
# - sb-ui-components.min.js.map

# Si faltan archivos, reconstruir:
pnpm run build
```

### Problema 4: Los cambios no se reflejan en GitHub Pages

**Causa:** Caché de GitHub Pages o navegador.

**Solución:**
1. Forzar recarga sin caché: `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
2. Limpiar caché del navegador
3. Esperar 5-10 minutos (GitHub Pages puede tardar en actualizar)
4. Verificar en modo incógnito

---

## 📊 Verificación Técnica del Bundle

Para verificar que el modal está incluido en el bundle de JavaScript:

```powershell
# Buscar "SbUiModal" en el bundle minificado
Select-String -Path "packages/bundle/dist/sb-ui-components.min.js" -Pattern "sb-ui-modal"

# Debería encontrar varias coincidencias
```

Si no encuentra coincidencias, el problema está en el proceso de build.

---

## 🎯 Causa Raíz del Problema

El componente Modal es un **Web Component con Shadow DOM**. Los estilos están encapsulados dentro del componente usando `LitElement.styles`. Esto significa que:

1. ✅ **NO necesitas un archivo `modal.css` externo**
2. ✅ Los estilos se cargan automáticamente cuando se importa el JavaScript
3. ❌ Si el JavaScript no se carga, los estilos tampoco se cargarán

Por lo tanto, el problema **NO es que falten estilos CSS**, sino que:
- El archivo `sb-ui-components.min.js` no se está cargando correctamente
- O el bundle de JavaScript está incompleto

---

## 📝 Checklist de Verificación

Antes de desplegar, verifica:

- [ ] `pnpm --version` muestra 8.x o superior
- [ ] `pnpm run build` se ejecuta sin errores
- [ ] `packages/bundle/dist/sb-ui-components.min.js` existe y pesa > 50 KB
- [ ] `docs/dist/sb-ui-components.min.js` existe (copia del anterior)
- [ ] `docs/dist/sb-ui-seguros-bolivar-light.min.css` existe
- [ ] El modal funciona correctamente en local (`npx serve -p 3000`)
- [ ] Los archivos están commiteados y pusheados a GitHub

---

## 🚀 Comando Rápido (Todo en uno)

Si solo quieres reconstruir y desplegar rápidamente:

```powershell
# Limpiar, construir y desplegar
pnpm run clean && pnpm run build && pnpm run build:storybook && pnpm run build:site && pnpm run deploy
```

---

## 📞 ¿Necesitas más ayuda?

Si después de seguir estos pasos el problema persiste:

1. Revisa los logs de GitHub Actions (si usas despliegue automático)
2. Verifica la configuración de GitHub Pages en Settings → Pages
3. Comprueba que la rama y carpeta sean correctas (main + /docs)

---

**Última actualización:** 2026-02-06
