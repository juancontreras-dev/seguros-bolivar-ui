/**
 * Script de diagnóstico para verificar Font Awesome en spinners
 * Ejecutar en la consola del navegador en http://localhost:3000/spinner/
 */

console.log('=== DIAGNÓSTICO DE FONT AWESOME EN SPINNERS ===\n');

// 1. Verificar si Font Awesome está cargado
console.log('1. VERIFICANDO CARGA DE FONT AWESOME:');
const faLink = document.querySelector('link[href*="font-awesome"]');
if (faLink) {
  console.log('✓ Font Awesome link encontrado:', faLink.href);
} else {
  console.error('✗ Font Awesome NO está cargado en el DOM');
}

// 2. Verificar iconos en el DOM
console.log('\n2. VERIFICANDO ICONOS EN EL DOM:');
const lockIcons = document.querySelectorAll('.fa-solid.fa-lock');
console.log(`Cantidad de iconos fa-lock encontrados: ${lockIcons.length}`);

if (lockIcons.length > 0) {
  const firstIcon = lockIcons[0];
  console.log('Primer icono encontrado:', firstIcon);
  
  // 3. Verificar estilos aplicados
  console.log('\n3. ESTILOS DEL PRIMER ICONO:');
  const styles = window.getComputedStyle(firstIcon);
  console.log('- font-family:', styles.fontFamily);
  console.log('- font-size:', styles.fontSize);
  console.log('- color:', styles.color);
  console.log('- display:', styles.display);
  console.log('- visibility:', styles.visibility);
  console.log('- opacity:', styles.opacity);
  
  // 4. Verificar ::before (donde Font Awesome coloca el icono)
  console.log('\n4. PSEUDO-ELEMENTO ::before:');
  const beforeStyles = window.getComputedStyle(firstIcon, '::before');
  console.log('- content:', beforeStyles.content);
  console.log('- font-family:', beforeStyles.fontFamily);
  console.log('- font-weight:', beforeStyles.fontWeight);
  console.log('- display:', beforeStyles.display);
  
  // 5. Verificar contenedor del spinner
  console.log('\n5. CONTENEDOR DEL ICONO (.sb-ui-spinner__icon):');
  const iconContainer = firstIcon.closest('.sb-ui-spinner__icon');
  if (iconContainer) {
    const containerStyles = window.getComputedStyle(iconContainer);
    console.log('- display:', containerStyles.display);
    console.log('- width:', containerStyles.width);
    console.log('- height:', containerStyles.height);
    console.log('- color:', containerStyles.color);
    console.log('- z-index:', containerStyles.zIndex);
    console.log('- position:', containerStyles.position);
  }
  
  // 6. Verificar spinner content
  console.log('\n6. CONTENEDOR DE CONTENIDO (.sb-ui-spinner__content):');
  const contentContainer = firstIcon.closest('.sb-ui-spinner__content');
  if (contentContainer) {
    const contentStyles = window.getComputedStyle(contentContainer);
    console.log('- display:', contentStyles.display);
    console.log('- z-index:', contentStyles.zIndex);
    console.log('- position:', contentStyles.position);
    console.log('- transform:', contentStyles.transform);
  }
}

// 7. Verificar errores de carga
console.log('\n7. VERIFICANDO ERRORES DE RED:');
console.log('Abre la pestaña Network y busca "font-awesome"');
console.log('Debería haber una petición a cdnjs.cloudflare.com con status 200');

// 8. Test manual - cambiar color del icono
console.log('\n8. TEST MANUAL (cambiar color a rojo):');
if (lockIcons.length > 0) {
  lockIcons[0].style.color = 'red';
  lockIcons[0].style.fontSize = '24px';
  console.log('Si ves el icono en ROJO, Font Awesome está funcionando');
  console.log('Si NO ves nada, Font Awesome NO se está cargando correctamente');
}

console.log('\n=== FIN DEL DIAGNÓSTICO ===');
