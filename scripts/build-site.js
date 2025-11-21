#!/usr/bin/env node

/**
 * Build Site Script
 * 
 * Prepara el sitio completo para despliegue:
 * - Copia examples/ a docs/
 * - Copia storybook-static/ a docs/storybook/
 * - Crea index.html de redirección
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 Building site for deployment...\n');

// 1. Limpiar carpeta docs/
console.log('📁 Step 1: Cleaning docs/ folder...');
const docsDir = join(rootDir, 'docs');
if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
  console.log('   ✅ Cleaned existing docs/ folder');
}
mkdirSync(docsDir, { recursive: true });
console.log('   ✅ Created fresh docs/ folder\n');

// 2. Copiar examples/ a docs/
console.log('📁 Step 2: Copying examples/ to docs/...');
const examplesDir = join(rootDir, 'examples');
if (!existsSync(examplesDir)) {
  console.error('   ❌ ERROR: examples/ folder not found!');
  process.exit(1);
}

cpSync(examplesDir, docsDir, {
  recursive: true,
  filter: (src) => {
    // Excluir node_modules, .git, etc.
    return !src.includes('node_modules') && !src.includes('.git') && !src.includes('.DS_Store');
  }
});
console.log('   ✅ Copied examples/ to docs/\n');

// 3. Copiar archivos del bundle a docs/dist/
console.log('📁 Step 3: Copying bundle files to docs/dist/...');
const bundleDistDir = join(rootDir, 'packages/bundle/dist');
const docsDistDir = join(docsDir, 'dist');

if (!existsSync(bundleDistDir)) {
  console.error('   ❌ ERROR: Bundle dist/ folder not found!');
  console.error('   Make sure "pnpm run build" was successful.');
  process.exit(1);
}

// Crear carpeta dist en docs y copiar archivos
mkdirSync(docsDistDir, { recursive: true });
cpSync(bundleDistDir, docsDistDir, {
  recursive: true,
  filter: (src) => {
    // Solo copiar archivos .min.css, .min.js y .min.js.map
    return src.endsWith('.min.css') || 
           src.endsWith('.min.js') || 
           src.endsWith('.min.js.map') ||
           src.includes('dist');
  }
});
console.log('   ✅ Copied bundle files to docs/dist/\n');

// 4. Copiar storybook-static/ a docs/storybook/
console.log('📁 Step 4: Copying Storybook to docs/storybook/...');
const storybookDir = join(rootDir, 'packages/docs/storybook-static');
if (!existsSync(storybookDir)) {
  console.warn('   ⚠️  WARNING: Storybook build not found. Run "pnpm run build:storybook" first.');
  console.warn('   Skipping Storybook copy...\n');
} else {
  const storybookDestDir = join(docsDir, 'storybook');
  cpSync(storybookDir, storybookDestDir, { recursive: true });
  console.log('   ✅ Copied Storybook to docs/storybook/\n');
}

// 5. Verificar que dist/ existe en docs/
console.log('📁 Step 5: Verifying dist/ folder...');
const distDir = join(docsDir, 'dist');
if (!existsSync(distDir)) {
  console.error('   ❌ ERROR: dist/ folder not found in docs/!');
  console.error('   Make sure bundle files were copied correctly.');
  process.exit(1);
}

// Verificar que hay archivos CSS y JS
const cssFiles = readdirSync(distDir).filter(f => f.endsWith('.min.css'));
const jsFiles = readdirSync(distDir).filter(f => f.endsWith('.min.js'));

if (cssFiles.length === 0 || jsFiles.length === 0) {
  console.error('   ❌ ERROR: No CSS or JS files found in dist/!');
  console.error('   CSS files:', cssFiles.length);
  console.error('   JS files:', jsFiles.length);
  process.exit(1);
}

console.log(`   ✅ dist/ folder verified (${cssFiles.length} CSS, ${jsFiles.length} JS files)\n`);

// 6. Crear .nojekyll para GitHub Pages
console.log('📄 Step 6: Creating .nojekyll file...');
writeFileSync(join(docsDir, '.nojekyll'), '');
console.log('   ✅ Created .nojekyll (disables Jekyll processing)\n');

// 7. Crear CNAME si es necesario (opcional)
// Si tienes un dominio personalizado, descomenta esto:
// console.log('📄 Step 7: Creating CNAME file...');
// writeFileSync(join(docsDir, 'CNAME'), 'tu-dominio.com');
// console.log('   ✅ Created CNAME\n');

// 8. Generar reporte
console.log('📊 Build Summary:');
console.log('   📁 Output directory: docs/');
console.log('   🌐 Main site: docs/index.html');
console.log('   📖 Storybook: docs/storybook/index.html');
console.log('   📦 Assets: docs/dist/');
console.log(`   📄 Files: ${cssFiles.length} CSS bundles, ${jsFiles.length} JS files`);
console.log('');

console.log('✨ Site build completed successfully!\n');
console.log('Next steps:');
console.log('  1. Test locally: cd docs && npx serve -p 3000');
console.log('  2. Deploy: pnpm run deploy');
console.log('  3. Or commit and push to GitHub (if using GitHub Actions)\n');

