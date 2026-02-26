/**
 * File Upload Behavior - Seguros Bolívar UI Design System
 *
 * Provee drag & drop y apertura del selector de archivos automáticamente.
 * El usuario solo necesita incluir el bundle JS — no se requiere JavaScript adicional.
 *
 * Estructura HTML requerida:
 *   <div class="sb-ui-file-upload-wrapper">
 *     <input type="file" class="sb-ui-file-upload-input" hidden />
 *     <div class="sb-ui-file-upload-dropzone">...</div>
 *     <!-- opción A: label con for (nativo, sin JS para el botón) -->
 *     <label for="fileInput" class="sb-ui-button sb-ui-file-upload__select-button">Seleccionar</label>
 *     <!-- opción B: button (el behavior conecta el click) -->
 *     <button type="button" class="sb-ui-button sb-ui-file-upload__select-button">Seleccionar</button>
 *   </div>
 *
 * Evento emitido:
 *   wrapper.addEventListener('sb-ui-file-upload-change', (e) => {
 *     console.log(e.detail.files); // FileList
 *   });
 *
 * Para contenido dinámico:
 *   window.initFileUploadBehavior();
 */

function initFileUploadBehavior(): void {
  document.querySelectorAll<HTMLElement>('.sb-ui-file-upload-wrapper').forEach((wrapper) => {
    const input = wrapper.querySelector<HTMLInputElement>('input[type="file"]');
    const dropzone = wrapper.querySelector<HTMLElement>('.sb-ui-file-upload-dropzone');
    const btn = wrapper.querySelector<HTMLButtonElement>('button.sb-ui-file-upload__select-button');

    if (!input || !dropzone) return;

    // Botón <button> (no label[for]) → abrir selector de archivos
    btn?.addEventListener('click', () => input.click());

    // Click en dropzone → abrir selector de archivos
    dropzone.addEventListener('click', () => input.click());

    // Drag & Drop con contador para evitar flickering al pasar sobre elementos hijos
    let dragCounter = 0;

    dropzone.addEventListener('dragenter', (e: DragEvent) => {
      e.preventDefault();
      dragCounter++;
      dropzone.classList.add('is-dragover');
    });

    // Necesario para permitir el drop en el navegador
    dropzone.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
    });

    dropzone.addEventListener('dragleave', () => {
      dragCounter--;
      if (dragCounter === 0) dropzone.classList.remove('is-dragover');
    });

    dropzone.addEventListener('drop', (e: DragEvent) => {
      e.preventDefault();
      dragCounter = 0;
      dropzone.classList.remove('is-dragover');

      const files = e.dataTransfer?.files;
      if (!files?.length) return;

      // input.files es read-only — asignar via DataTransfer
      const dt = new DataTransfer();
      Array.from(files).forEach((f) => dt.items.add(f));
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Evento personalizado para que la app reaccione al cambio de archivos
    input.addEventListener('change', () => {
      wrapper.dispatchEvent(
        new CustomEvent('sb-ui-file-upload-change', {
          bubbles: true,
          detail: { files: input.files },
        })
      );
    });
  });
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFileUploadBehavior);
} else {
  initFileUploadBehavior();
}

// Exponer para re-inicializar wrappers añadidos dinámicamente
if (typeof window !== 'undefined') {
  (window as any).initFileUploadBehavior = initFileUploadBehavior;
}
