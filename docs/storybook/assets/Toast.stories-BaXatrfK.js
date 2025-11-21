import{x as n}from"./lit-element-CFKcR9Rr.js";var u=Object.freeze,V=Object.defineProperty,e=(c,H)=>u(V(c,"raw",{value:u(c.slice())})),l,d,b,m,p;const J={title:"Molecules/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Sistema de notificaciones toast con múltiples variantes, posiciones y opciones de auto-cierre."}}}},o={render:()=>n(l||(l=e([`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .toast-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .toast-playground h3 {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .button-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }
    </style>

    <div class="toast-playground">
      <h3>Toast Notifications</h3>
      <div class="button-grid">
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
          @click="`,`"
        >
          ✓ Success
        </button>

        <button
          class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
          @click="`,`"
        >
          ✕ Error
        </button>

        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill"
          @click="`,`"
        >
          ⚠ Warning
        </button>

        <button
          class="sb-ui-button sb-ui-button--tertiary sb-ui-button--fill"
          @click="`,`"
        >
          ℹ Info
        </button>
      </div>
    </div>
  `])),()=>{window.showSuccess("Operación exitosa")},()=>{window.showError("Ha ocurrido un error")},()=>{window.showWarning("Advertencia importante")},()=>{window.showInfo("Información útil")})},s={render:()=>n(d||(d=e([`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .variants-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 700px;
        margin: 0 auto;
      }
      .variant-item {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .variant-info h4 {
        margin: 0 0 0.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .variant-info p {
        margin: 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="variants-demo">
      <div class="variant-item">
        <div class="variant-info">
          <h4>✓ Success</h4>
          <p>Operaciones exitosas, confirmaciones</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>✕ Error</h4>
          <p>Errores, fallos en operaciones</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--error sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>⚠ Warning</h4>
          <p>Advertencias, confirmaciones requeridas</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>ℹ Info</h4>
          <p>Información general, tips</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--tertiary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>
    </div>
  `])),()=>{window.showSuccess("Usuario creado correctamente")},()=>{window.showError("No se pudo guardar los cambios")},()=>{window.showWarning("Esta acción no se puede deshacer")},()=>{window.showInfo("Nueva función disponible")})},i={render:()=>n(b||(b=e([`
    <script type="module">
      import { showToast } from '@sb-ui/molecules';
      window.showToast = showToast;
    <\/script>

    <style>
      .positions-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .positions-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 1rem;
      }
      .position-demo {
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
      }
      .position-demo h4 {
        margin: 0 0 0.75rem 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-D100);
      }
    </style>

    <div class="positions-demo">
      <h3 style="margin: 0 0 1.5rem 0; color: var(--sb-ui-color-primary-base);">
        Posiciones Disponibles
      </h3>
      <div class="positions-grid">
        <div class="position-demo">
          <h4>Top Left</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Top Center</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Top Right</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Left</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Center</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Right</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="`,`"
          >
            Mostrar
          </button>
        </div>
      </div>
    </style>
  `])),()=>{window.showToast("Toast arriba izquierda",{position:"top-left",variant:"info"})},()=>{window.showToast("Toast arriba centro",{position:"top-center",variant:"info"})},()=>{window.showToast("Toast arriba derecha",{position:"top-right",variant:"info"})},()=>{window.showToast("Toast abajo izquierda",{position:"bottom-left",variant:"info"})},()=>{window.showToast("Toast abajo centro",{position:"bottom-center",variant:"info"})},()=>{window.showToast("Toast abajo derecha",{position:"bottom-right",variant:"info"})})},t={render:()=>n(m||(m=e([`
    <script type="module">
      import { showToast } from '@sb-ui/molecules';
      window.showToast = showToast;
    <\/script>

    <style>
      .options-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .option-item {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .option-item h4 {
        margin: 0 0 0.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .option-item p {
        margin: 0 0 1rem 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="options-demo">
      <div class="option-item">
        <h4>Auto-cierre Rápido (1s)</h4>
        <p>Toast que se cierra rápidamente después de 1 segundo</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Sin Auto-cierre</h4>
        <p>Toast permanente que debe cerrarse manualmente</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Duración Larga (10s)</h4>
        <p>Toast con tiempo de visualización extendido</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Sin Botón Cerrar</h4>
        <p>Toast que solo se cierra automáticamente</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="`,`"
        >
          Mostrar
        </button>
      </div>
    </div>
  `])),()=>{window.showToast("Me cierro en 1 segundo",{variant:"success",duration:1e3})},()=>{window.showToast("Debes cerrarme manualmente",{variant:"warning",duration:0,closable:!0})},()=>{window.showToast("Me mantengo visible por 10 segundos",{variant:"info",duration:1e4})},()=>{window.showToast("Sin botón cerrar",{variant:"info",closable:!1})})},a={render:()=>n(p||(p=e([`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .multiples-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
      }
      .multiples-demo h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .multiples-demo p {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="multiples-demo">
      <h3>Múltiples Notificaciones</h3>
      <p>Los toasts se apilan verticalmente en la posición elegida</p>
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Mostrar Múltiples Toasts
      </button>
    </div>
  `])),()=>{window.showSuccess("Primera notificación"),setTimeout(()=>window.showWarning("Segunda notificación"),300),setTimeout(()=>window.showError("Tercera notificación"),600),setTimeout(()=>window.showInfo("Cuarta notificación"),900)})},r={render:()=>n`
    <style>
      .code-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .code-section {
        margin-bottom: 2rem;
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .code-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .code-snippet {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        overflow-x: auto;
        border: 1px solid var(--sb-ui-color-grayscale-L200);
      }
    </style>

    <div class="code-demo">
      <div class="code-section">
        <h4>Import & Uso Básico</h4>
        <div class="code-snippet">
// Import de funciones
import { 
  showSuccess, 
  showError, 
  showWarning, 
  showInfo, 
  showToast 
} from '@sb-ui/molecules';

// Uso básico
showSuccess('Operación exitosa');
showError('Ha ocurrido un error');
showWarning('Advertencia importante');
showInfo('Información útil');
        </div>
      </div>

      <div class="code-section">
        <h4>Con Opciones Personalizadas</h4>
        <div class="code-snippet">
// Toast personalizado
showToast('Mensaje personalizado', {
  variant: 'success',           // 'success' | 'error' | 'warning' | 'info'
  position: 'top-right',        // Ver posiciones disponibles
  duration: 5000,               // Duración en ms (0 = no auto-cierre)
  closable: true                // Mostrar botón cerrar
});

// Toast sin auto-cierre
showToast('Mensaje permanente', {
  variant: 'warning',
  duration: 0,
  closable: true
});
        </div>
      </div>

      <div class="code-section">
        <h4>Gestión de Toasts</h4>
        <div class="code-snippet">
import { hideToast, hideAllToasts, removeAllToasts } from '@sb-ui/molecules';

// Ocultar un toast específico
const toast = showSuccess('Mensaje');
hideToast(toast.id);

// Ocultar todos los toasts
hideAllToasts();

// Eliminar todos los toasts del DOM
removeAllToasts();
        </div>
      </div>
    </div>
  `};var w,h,v,f,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .toast-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .toast-playground h3 {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .button-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }
    </style>

    <div class="toast-playground">
      <h3>Toast Notifications</h3>
      <div class="button-grid">
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
          @click="\${() => {
    (window as any).showSuccess('Operación exitosa');
  }}"
        >
          ✓ Success
        </button>

        <button
          class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
          @click="\${() => {
    (window as any).showError('Ha ocurrido un error');
  }}"
        >
          ✕ Error
        </button>

        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill"
          @click="\${() => {
    (window as any).showWarning('Advertencia importante');
  }}"
        >
          ⚠ Warning
        </button>

        <button
          class="sb-ui-button sb-ui-button--tertiary sb-ui-button--fill"
          @click="\${() => {
    (window as any).showInfo('Información útil');
  }}"
        >
          ℹ Info
        </button>
      </div>
    </div>
  \`
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:`## Playground (Interactivo)

Prueba las diferentes funciones del Toast Manager.`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var y,x,T,M,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .variants-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 700px;
        margin: 0 auto;
      }
      .variant-item {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .variant-info h4 {
        margin: 0 0 0.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .variant-info p {
        margin: 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="variants-demo">
      <div class="variant-item">
        <div class="variant-info">
          <h4>✓ Success</h4>
          <p>Operaciones exitosas, confirmaciones</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showSuccess('Usuario creado correctamente');
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>✕ Error</h4>
          <p>Errores, fallos en operaciones</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--error sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showError('No se pudo guardar los cambios');
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>⚠ Warning</h4>
          <p>Advertencias, confirmaciones requeridas</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showWarning('Esta acción no se puede deshacer');
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="variant-item">
        <div class="variant-info">
          <h4>ℹ Info</h4>
          <p>Información general, tips</p>
        </div>
        <button
          class="sb-ui-button sb-ui-button--tertiary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showInfo('Nueva función disponible');
  }}"
        >
          Mostrar
        </button>
      </div>
    </div>
  \`
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source},description:{story:`## Todas las Variantes

Los cuatro tipos de toast disponibles: success, error, warning, info.`,...(E=(M=s.parameters)==null?void 0:M.docs)==null?void 0:E.description}}};var S,k,I,F,W;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import { showToast } from '@sb-ui/molecules';
      window.showToast = showToast;
    <\/script>

    <style>
      .positions-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .positions-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 1rem;
      }
      .position-demo {
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
      }
      .position-demo h4 {
        margin: 0 0 0.75rem 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-D100);
      }
    </style>

    <div class="positions-demo">
      <h3 style="margin: 0 0 1.5rem 0; color: var(--sb-ui-color-primary-base);">
        Posiciones Disponibles
      </h3>
      <div class="positions-grid">
        <div class="position-demo">
          <h4>Top Left</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast arriba izquierda', {
      position: 'top-left',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Top Center</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast arriba centro', {
      position: 'top-center',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Top Right</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast arriba derecha', {
      position: 'top-right',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Left</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast abajo izquierda', {
      position: 'bottom-left',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Center</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast abajo centro', {
      position: 'bottom-center',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>

        <div class="position-demo">
          <h4>Bottom Right</h4>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--small"
            @click="\${() => {
    (window as any).showToast('Toast abajo derecha', {
      position: 'bottom-right',
      variant: 'info'
    });
  }}"
          >
            Mostrar
          </button>
        </div>
      </div>
    </style>
  \`
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:`## Diferentes Posiciones

Los toasts pueden aparecer en 6 posiciones diferentes de la pantalla.`,...(W=(F=i.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var A,z,j,O,$;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import { showToast } from '@sb-ui/molecules';
      window.showToast = showToast;
    <\/script>

    <style>
      .options-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .option-item {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .option-item h4 {
        margin: 0 0 0.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .option-item p {
        margin: 0 0 1rem 0;
        font-size: 0.875rem;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="options-demo">
      <div class="option-item">
        <h4>Auto-cierre Rápido (1s)</h4>
        <p>Toast que se cierra rápidamente después de 1 segundo</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showToast('Me cierro en 1 segundo', {
      variant: 'success',
      duration: 1000
    });
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Sin Auto-cierre</h4>
        <p>Toast permanente que debe cerrarse manualmente</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showToast('Debes cerrarme manualmente', {
      variant: 'warning',
      duration: 0,
      closable: true
    });
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Duración Larga (10s)</h4>
        <p>Toast con tiempo de visualización extendido</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showToast('Me mantengo visible por 10 segundos', {
      variant: 'info',
      duration: 10000
    });
  }}"
        >
          Mostrar
        </button>
      </div>

      <div class="option-item">
        <h4>Sin Botón Cerrar</h4>
        <p>Toast que solo se cierra automáticamente</p>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--small sb-ui-button--fill"
          @click="\${() => {
    (window as any).showToast('Sin botón cerrar', {
      variant: 'info',
      closable: false
    });
  }}"
        >
          Mostrar
        </button>
      </div>
    </div>
  \`
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source},description:{story:`## Con Opciones Personalizadas

Toasts con diferentes duraciones y comportamientos.`,...($=(O=t.parameters)==null?void 0:O.docs)==null?void 0:$.description}}};var D,P,R,C,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import { showSuccess, showError, showWarning, showInfo } from '@sb-ui/molecules';
      window.showSuccess = showSuccess;
      window.showError = showError;
      window.showWarning = showWarning;
      window.showInfo = showInfo;
    <\/script>

    <style>
      .multiples-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
      }
      .multiples-demo h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .multiples-demo p {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-grayscale-base);
      }
    </style>

    <div class="multiples-demo">
      <h3>Múltiples Notificaciones</h3>
      <p>Los toasts se apilan verticalmente en la posición elegida</p>
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    (window as any).showSuccess('Primera notificación');
    setTimeout(() => (window as any).showWarning('Segunda notificación'), 300);
    setTimeout(() => (window as any).showError('Tercera notificación'), 600);
    setTimeout(() => (window as any).showInfo('Cuarta notificación'), 900);
  }}"
      >
        Mostrar Múltiples Toasts
      </button>
    </div>
  \`
}`,...(R=(P=a.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:`## Múltiples Toasts

Ejemplo de cómo se apilan múltiples toasts.`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};var _,q,B,N,U;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .code-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .code-section {
        margin-bottom: 2rem;
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .code-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .code-snippet {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        overflow-x: auto;
        border: 1px solid var(--sb-ui-color-grayscale-L200);
      }
    </style>

    <div class="code-demo">
      <div class="code-section">
        <h4>Import & Uso Básico</h4>
        <div class="code-snippet">
// Import de funciones
import { 
  showSuccess, 
  showError, 
  showWarning, 
  showInfo, 
  showToast 
} from '@sb-ui/molecules';

// Uso básico
showSuccess('Operación exitosa');
showError('Ha ocurrido un error');
showWarning('Advertencia importante');
showInfo('Información útil');
        </div>
      </div>

      <div class="code-section">
        <h4>Con Opciones Personalizadas</h4>
        <div class="code-snippet">
// Toast personalizado
showToast('Mensaje personalizado', {
  variant: 'success',           // 'success' | 'error' | 'warning' | 'info'
  position: 'top-right',        // Ver posiciones disponibles
  duration: 5000,               // Duración en ms (0 = no auto-cierre)
  closable: true                // Mostrar botón cerrar
});

// Toast sin auto-cierre
showToast('Mensaje permanente', {
  variant: 'warning',
  duration: 0,
  closable: true
});
        </div>
      </div>

      <div class="code-section">
        <h4>Gestión de Toasts</h4>
        <div class="code-snippet">
import { hideToast, hideAllToasts, removeAllToasts } from '@sb-ui/molecules';

// Ocultar un toast específico
const toast = showSuccess('Mensaje');
hideToast(toast.id);

// Ocultar todos los toasts
hideAllToasts();

// Eliminar todos los toasts del DOM
removeAllToasts();
        </div>
      </div>
    </div>
  \`
}`,...(B=(q=r.parameters)==null?void 0:q.docs)==null?void 0:B.source},description:{story:`## Código de Ejemplo

Ejemplos de código para usar el Toast Manager.`,...(U=(N=r.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};const K=["Playground","TodasLasVariantes","DiferentesPosiciones","OpcionesPersonalizadas","MultiplesToasts","CodigoDeEjemplo"];export{r as CodigoDeEjemplo,i as DiferentesPosiciones,a as MultiplesToasts,t as OpcionesPersonalizadas,o as Playground,s as TodasLasVariantes,K as __namedExportsOrder,J as default};
