import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # File Upload Component
 *
 * Componente de carga de archivos del Seguros Bolivar UI Design System con drag & drop y validación.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Zona de carga | `.sb-ui-file-upload-dropzone` | `<div class="sb-ui-file-upload-dropzone">...</div>` |
 * | Cargando archivo | `.sb-ui-file-upload--uploading` | `<div class="sb-ui-file-upload sb-ui-file-upload--uploading">...</div>` |
 * | Archivo cargado | `.sb-ui-file-upload--uploaded` | `<div class="sb-ui-file-upload sb-ui-file-upload--uploaded">...</div>` |
 * | Carga exitosa | `.sb-ui-file-upload--success` | `<div class="sb-ui-file-upload sb-ui-file-upload--success">...</div>` |
 * | Error de carga | `.sb-ui-file-upload--error` | `<div class="sb-ui-file-upload sb-ui-file-upload--error">...</div>` |
 * | **Botones** | | |
 * | Botón de selección | `.sb-ui-file-upload__select-button` | `<button class="sb-ui-button sb-ui-file-upload__select-button">Seleccionar archivo</button>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Drag & Drop**: Soporte nativo para arrastrar y soltar archivos
 * - **Validación**: Validación automática de tipo y tamaño de archivo
 * - **Estados visuales**: Feedback claro de carga, éxito y error
 * - **Accesibilidad**: Completamente accesible con teclado y lectores de pantalla
 * - **Responsive**: Se adapta a diferentes tamaños de pantalla (Desktop/Mobile)
 */
const meta: Meta = {
  title: 'Web Components/File Upload',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de carga de archivos con drag & drop, validación de tipo/tamaño, y múltiples estados visuales (uploading, uploaded, success, error).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Desktop
 *
 * Vista de escritorio del componente de carga de archivos. Incluye zona de drag & drop
 * con icono, instrucciones claras y botón de selección amarillo.
 */
export const Desktop: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .upload-wrapper {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: none;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="upload-wrapper">
        <h2 style="margin-bottom: 1.25rem; color: var(--sb-ui-color-primary-base, #038450); font-size: 1.5rem;">Subir Archivo - Desktop</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); font-size: 1.0625rem;">
          Arrastra y suelta o haz clic para seleccionar
        </p>

        <div class="sb-ui-file-upload">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-file-upload__select-button"
            style="background-color: var(--sb-ui-color-secondary-base); color: var(--sb-ui-color-primary-base); margin-bottom: 1.25rem; padding: 0.75rem 1.5rem; font-size: 1rem;"
          >
            Seleccione un archivo
          </button>

          <div class="sb-ui-file-upload-dropzone" style="border: 2px dashed var(--sb-ui-color-grayscale-L200, #ccc); border-radius: 12px; padding: 4rem 3rem; text-align: center; background: var(--sb-ui-color-grayscale-L400, #fafafa); min-height: 220px;">
            <i class="fa-solid fa-cloud-arrow-up" style="font-size: 4rem; color: var(--sb-ui-color-grayscale-D100, #9b9b9b); margin-bottom: 1.25rem;"></i>
            <p style="font-size: 1.25rem; font-weight: 600; color: var(--sb-ui-color-grayscale-D300, #1b1b1b); margin-bottom: 0.5rem;">
              Arrastra y suelta aquí
            </p>
            <p style="font-size: 1rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); margin-bottom: 0.25rem;">
              Formatos: PDF, DOC, DOCX, JPG, PNG
            </p>
            <p style="font-size: 0.9375rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
              El peso máximo por archivo es de 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Mobile
 *
 * Vista móvil del componente, optimizada para pantallas pequeñas con
 * diseño vertical y elementos táctiles más grandes.
 */
export const Mobile: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
        max-width: 375px;
        margin: 0 auto;
      }
      .upload-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="upload-wrapper">
        <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base, #038450); font-size: 1.375rem;">Subir Archivo</h3>
        <p style="margin-bottom: 1.25rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); font-size: 1rem;">
          Selecciona un archivo desde tu dispositivo
        </p>

        <div class="sb-ui-file-upload">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--block sb-ui-file-upload__select-button"
            style="background-color: var(--sb-ui-color-secondary-base); color: var(--sb-ui-color-primary-base); margin-bottom: 1.25rem; width: 100%; padding: 0.75rem 1.25rem; font-size: 1rem;"
          >
            Seleccionar archivo
          </button>

          <div class="sb-ui-file-upload-dropzone" style="border: 2px dashed var(--sb-ui-color-grayscale-L200, #ccc); border-radius: 12px; padding: 3rem 1.5rem; text-align: center; background: var(--sb-ui-color-grayscale-L400, #fafafa); min-height: 180px;">
            <i class="fa-solid fa-cloud-arrow-up" style="font-size: 3.25rem; color: var(--sb-ui-color-grayscale-D100, #9b9b9b); margin-bottom: 1rem;"></i>
            <p style="font-size: 1.125rem; font-weight: 600; color: var(--sb-ui-color-grayscale-D300, #1b1b1b); margin-bottom: 0.5rem;">
              Toca para subir
            </p>
            <p style="font-size: 0.9375rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); margin-bottom: 0.25rem;">
              PDF, DOC, JPG, PNG
            </p>
            <p style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
              Máximo 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Uploading
 *
 * Estado de carga mostrando el progreso de subida del archivo con
 * spinner y porcentaje de avance.
 */
export const Uploading: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .upload-wrapper {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-width: 720px;
        margin: 0 auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="upload-wrapper">
        <h2 style="margin-bottom: 1.25rem; color: var(--sb-ui-color-primary-base, #038450); font-size: 1.5rem;">Subiendo Archivo...</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); font-size: 1.0625rem;">
          Por favor espera mientras se carga tu archivo
        </p>

        <div class="sb-ui-file-upload sb-ui-file-upload--uploading" style="border: 2px solid var(--sb-ui-color-grayscale-L200, #e1e1e1); border-radius: 12px; padding: 2rem; background: var(--sb-ui-color-feedback-success-L100, #f2f9f6);">
          <div style="display: flex; align-items: center; gap: 1.25rem;">
            <i class="fa-solid fa-spinner fa-spin" style="font-size: 2.5rem; color: var(--sb-ui-color-primary-base, #038450);"></i>
            <div style="flex: 1;">
              <p style="font-weight: 600; font-size: 1.125rem; color: var(--sb-ui-color-grayscale-D300, #1b1b1b); margin-bottom: 0.25rem;">
                documento.pdf
              </p>
              <p style="font-size: 1rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
                Subiendo... 45%
              </p>
            </div>
          </div>
          <div style="width: 100%; height: 8px; background: var(--sb-ui-color-grayscale-L200, #e1e1e1); border-radius: 4px; margin-top: 1.25rem; overflow: hidden;">
            <div style="width: 45%; height: 100%; background: linear-gradient(90deg, var(--sb-ui-color-primary-base, #038450), var(--sb-ui-color-primary-L100, #04a65c)); border-radius: 4px;"></div>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Success
 *
 * Estado de éxito mostrando confirmación de carga exitosa con
 * icono de check y detalles del archivo.
 */
export const Success: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .upload-wrapper {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-width: 720px;
        margin: 0 auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="upload-wrapper">
        <h2 style="margin-bottom: 1.25rem; color: var(--sb-ui-color-primary-base, #038450); font-size: 1.5rem;">¡Archivo Cargado Exitosamente!</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); font-size: 1.0625rem;">
          Tu archivo se ha subido correctamente
        </p>

        <div class="sb-ui-file-upload sb-ui-file-upload--success" style="border: 2px solid var(--sb-ui-color-primary-base, #038450); border-radius: 12px; padding: 2rem; background: var(--sb-ui-color-feedback-success-L100, #f2f9f6);">
          <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 1.25rem;">
              <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--sb-ui-color-primary-base, #038450);"></i>
              <div>
                <p style="font-weight: 600; font-size: 1.125rem; color: var(--sb-ui-color-grayscale-D300, #1b1b1b); margin-bottom: 0.25rem;">
                  documento.pdf
                </p>
                <p style="font-size: 1rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b);">
                  2.5 MB
                </p>
              </div>
            </div>
            <button class="sb-ui-button sb-ui-button--tertiary sb-ui-button--icon-only" style="border: none; background: transparent;">
              <i class="fa-solid fa-xmark" style="font-size: 1.5rem; color: var(--sb-ui-color-grayscale-base, #757575);"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Error
 *
 * Estado de error mostrando mensaje de fallo en la carga con
 * icono de error y opción para reintentar.
 */
export const Error: Story = {
  render: () => html`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .upload-wrapper {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-width: 720px;
        margin: 0 auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="upload-wrapper">
        <h2 style="margin-bottom: 1.25rem; color: var(--sb-ui-color-feedback-error-base, #E63757); font-size: 1.5rem;">Error al Cargar Archivo</h2>
        <p style="margin-bottom: 1.5rem; color: var(--sb-ui-color-grayscale-D200, #5b5b5b); font-size: 1.0625rem;">
          Ha ocurrido un error durante la carga
        </p>

        <div class="sb-ui-file-upload sb-ui-file-upload--error" style="border: 2px solid var(--sb-ui-color-feedback-error-base, #E63757); border-radius: 12px; padding: 2rem; background: var(--sb-ui-color-feedback-error-L100, #FEF5F6);">
          <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 1.25rem;">
              <i class="fa-solid fa-circle-xmark" style="font-size: 2.5rem; color: var(--sb-ui-color-feedback-error-base, #E63757);"></i>
              <div>
                <p style="font-weight: 600; font-size: 1.125rem; color: var(--sb-ui-color-grayscale-D300, #1b1b1b); margin-bottom: 0.25rem;">
                  documento.pdf
                </p>
                <p style="font-size: 1rem; color: var(--sb-ui-color-feedback-error-base, #E63757);">
                  El archivo excede el tamaño máximo permitido
                </p>
              </div>
            </div>
            <button class="sb-ui-button sb-ui-button--primary sb-ui-button--text" style="color: var(--sb-ui-color-feedback-error-base, #E63757); font-size: 1rem;">
              Reintentar
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
};

