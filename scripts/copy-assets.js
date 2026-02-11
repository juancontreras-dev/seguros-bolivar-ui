/**
 * Script para copiar assets del bundle a examples y storybook
 * Compatible con Windows, Linux y macOS
 */

import { existsSync, mkdirSync, readdirSync, copyFileSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_DIR = join(__dirname, '..');
const BUNDLE_DIST = join(ROOT_DIR, 'packages/bundle/dist');
const EXAMPLES_DIST = join(ROOT_DIR, 'examples/dist');
const STORYBOOK_DIR = join(ROOT_DIR, 'packages/docs/.storybook');

function copyToExamples() {
  console.log('📦 Copiando archivos a examples/dist/...');

  // Crear directorio si no existe
  mkdirSync(EXAMPLES_DIST, { recursive: true });

  if (!existsSync(BUNDLE_DIST)) {
    console.error('❌ Error: No existe el directorio bundle/dist. Ejecuta primero: pnpm build');
    process.exit(1);
  }

  // Copiar todos los archivos .css y .js (incluyendo .min.css y .min.js)
  const files = readdirSync(BUNDLE_DIST).filter(f =>
    f.startsWith('sb-ui-') && (f.endsWith('.css') || f.endsWith('.js'))
  );

  let copied = 0;
  files.forEach(file => {
    const src = join(BUNDLE_DIST, file);
    const dest = join(EXAMPLES_DIST, file);
    copyFileSync(src, dest);
    copied++;
  });

  console.log(`✅ ${copied} archivos copiados a examples/dist/`);

  // Copiar carpeta de fuentes (dist/fonts/ → examples/dist/fonts/)
  const fontsSrc = join(BUNDLE_DIST, 'fonts');
  const fontsDest = join(EXAMPLES_DIST, 'fonts');
  if (existsSync(fontsSrc)) {
    cpSync(fontsSrc, fontsDest, { recursive: true });
    const fontFiles = readdirSync(fontsSrc).filter(f => f.endsWith('.woff2'));
    console.log(`✅ ${fontFiles.length} font files copiados a examples/dist/fonts/`);
  }
}

function copyToStorybook() {
  console.log('📦 Copiando archivos a storybook...');

  // Crear directorio si no existe
  mkdirSync(STORYBOOK_DIR, { recursive: true });

  if (!existsSync(BUNDLE_DIST)) {
    console.log('⚠️  Saltando storybook: bundle/dist no existe');
    return;
  }

  // Copiar solo archivos .min.css
  const files = readdirSync(BUNDLE_DIST).filter(f =>
    f.startsWith('sb-ui-') && f.endsWith('.min.css')
  );

  let copied = 0;
  files.forEach(file => {
    const src = join(BUNDLE_DIST, file);
    const dest = join(STORYBOOK_DIR, file);
    copyFileSync(src, dest);
    copied++;
  });

  console.log(`✅ ${copied} archivos CSS copiados a storybook/`);
}

// Ejecutar
const target = process.argv[2] || 'all';

switch (target) {
  case 'examples':
    copyToExamples();
    break;
  case 'storybook':
    copyToStorybook();
    break;
  case 'all':
  default:
    copyToExamples();
    copyToStorybook();
    break;
}

console.log('\n✨ Copia completada!');
