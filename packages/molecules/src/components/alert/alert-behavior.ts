/**
 * Alert Behavior - Seguros Bolívar UI Design System
 *
 * Maneja el cierre de alertas automáticamente via event delegation.
 * El usuario solo necesita incluir el bundle JS — no se requiere JavaScript adicional.
 *
 * Uso:
 *   <button class="sb-ui-alert__close" type="button" aria-label="Cerrar alerta">
 *     <i class="fa-solid fa-xmark" aria-hidden="true"></i>
 *   </button>
 */

function initAlertBehavior(): void {
  document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as Element;
    const closeBtn = target.closest('.sb-ui-alert__close');

    if (!closeBtn) return;

    const alert = closeBtn.closest('.sb-ui-alert');
    if (!alert) return;

    alert.classList.add('sb-ui-alert--fade-out');

    const duration = parseFloat(
      getComputedStyle(alert).getPropertyValue('--sb-ui-alert-fade-duration') || '0.3'
    ) * 1000;

    setTimeout(() => alert.remove(), duration || 300);
  });
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAlertBehavior);
} else {
  initAlertBehavior();
}
