import{x as a}from"./lit-element-BQ2u6o3f.js";var m=Object.freeze,be=Object.defineProperty,d=(e,p)=>m(be(e,"raw",{value:m(e.slice())})),u,x,h,k,g;const me={title:"Atoms/Checkbox",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de checkbox versátil con estados completos (normal, error, disabled, focus, indeterminate), 3 tamaños, efectos hover/pressed Material Design y accesibilidad nativa."}}},argTypes:{label:{control:"text",description:"Texto del label",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Estado marcado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Estado deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},error:{control:"boolean",description:"Estado de error (validación fallida)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Estado indeterminado (para checkbox padre)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del checkbox",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},noLabel:{control:"boolean",description:"Sin label (solo checkbox)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},block:{control:"boolean",description:"Ancho completo (modificador)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},s={parameters:{docs:{source:{format:"dedent",language:"html"}}},args:{label:"Option text",checked:!1,disabled:!1,error:!1,indeterminate:!1,size:"medium",noLabel:!1,block:!1},render:e=>{const p=["sb-ui-checkbox",e.size!=="medium"?`sb-ui-checkbox--${e.size}`:"",e.error?"sb-ui-checkbox--error":"",e.noLabel?"sb-ui-checkbox--no-label":"",e.block?"sb-ui-checkbox--block":""].filter(Boolean).join(" ");return a(u||(u=d([`
      <label class="`,`" id="playground-checkbox">
        <input
          type="checkbox"
          class="sb-ui-checkbox__input"
          ?checked=`,`
          ?disabled=`,`
        />
        <span class="sb-ui-checkbox__box"></span>
        `,`
      </label>

      <script>
        // Set indeterminate state if needed
        setTimeout(() => {
          const checkbox = document.querySelector('#playground-checkbox input');
          if (checkbox) {
            checkbox.indeterminate = `,`;
          }
        }, 0);
      <\/script>
    `])),p,e.checked,e.disabled,e.noLabel?"":a`<span class="sb-ui-checkbox__label">${e.label}</span>`,e.indeterminate)}},n={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.5rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #009056);
        color: white;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.enabled {
        background: #e8f5e9;
        color: #2e7d32;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      .hint-text {
        font-size: 0.875rem;
        color: #666;
        font-style: italic;
        margin-top: 0.5rem;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           MATRIZ 2x2 - ESTADOS BÁSICOS
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">☑️ Matriz de Estados Básicos (2×2)</h2>
        <p class="matrix-subtitle">
          Combinaciones fundamentales: Unchecked/Checked × Enabled/Disabled
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Unchecked</th>
              <th>Checked</th>
            </tr>
          </thead>
          <tbody>
            <!-- ENABLED -->
            <tr>
              <td>
                <span class="state-label enabled">Enabled</span>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Unchecked option</span>
                </label>
                <p class="hint-text">Pasa el mouse para ver el halo verde</p>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Checked option</span>
                </label>
                <p class="hint-text">Click para desmarcar</p>
              </td>
            </tr>

            <!-- DISABLED -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Disabled unchecked</span>
                </label>
                <p class="hint-text">Box blanco + border gris (#9B9B9B)</p>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked disabled />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Disabled checked</span>
                </label>
                <p class="hint-text">Box gris + checkmark blanca</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `},o={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .size-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .size-card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        text-align: center;
      }

      .size-card h4 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .size-card .spec {
        font-size: 0.75rem;
        color: #999;
        margin-bottom: 1rem;
        font-family: 'Courier New', monospace;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">📏 Tamaños del Checkbox</h2>
        <p class="matrix-subtitle">Tres tamaños disponibles para diferentes contextos de uso</p>

        <div class="size-grid">
          <!-- SMALL -->
          <div class="size-card">
            <h4>Small</h4>
            <p class="spec">16×16px • Gap 6px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small unchecked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small checked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small disabled</span>
              </label>
            </div>
          </div>

          <!-- MEDIUM -->
          <div class="size-card">
            <h4>Medium (Default)</h4>
            <p class="spec">20×20px • Gap 8px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium unchecked</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium checked</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium disabled</span>
              </label>
            </div>
          </div>

          <!-- LARGE -->
          <div class="size-card">
            <h4>Large</h4>
            <p class="spec">24×24px • Gap 12px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large unchecked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large checked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large disabled</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},c={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-feedback-error-base, #dc3545);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #666;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .hint-text {
        font-size: 0.75rem;
        color: #999;
        margin-top: 0.5rem;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">🔴 Estado Error</h2>
        <p class="matrix-subtitle">
          Border rojo (#DC3545) para indicar validación fallida. El texto del label se mantiene
          gris.
        </p>

        <div class="grid">
          <!-- Error Unchecked -->
          <div class="card">
            <h4>Error - Unchecked</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Campo obligatorio *</span>
              </label>
              <p class="hint-text">Border rojo, background blanco, texto gris</p>
            </div>
          </div>

          <!-- Error Checked -->
          <div class="card">
            <h4>Error - Checked</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Error pero marcado</span>
              </label>
              <p class="hint-text">Background rojo, checkmark blanca</p>
            </div>
          </div>

          <!-- Error Disabled -->
          <div class="card">
            <h4>Error + Disabled</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Error y deshabilitado</span>
              </label>
              <p class="hint-text">Disabled tiene prioridad visual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},i={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a(x||(x=d([`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .code-hint {
        font-size: 0.75rem;
        color: #666;
        background: #f5f5f5;
        padding: 0.5rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        margin-top: 1rem;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">✨ Estados Especiales</h2>
        <p class="matrix-subtitle">Indeterminate, Loading y Readonly para casos de uso avanzados</p>

        <div class="grid">
          <!-- INDETERMINATE -->
          <div class="card">
            <h4>Indeterminate State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" id="indeterminate-demo" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Select all (partial)</span>
              </label>
              <p class="code-hint">checkbox.indeterminate = true</p>
            </div>
          </div>

          <!-- LOADING -->
          <div class="card">
            <h4>Loading State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--loading">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Saving changes...</span>
              </label>
              <p class="code-hint">.sb-ui-checkbox--loading</p>
            </div>
          </div>

          <!-- READONLY -->
          <div class="card">
            <h4>Readonly State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--readonly">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Read-only setting</span>
              </label>
              <p class="code-hint">.sb-ui-checkbox--readonly</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Set indeterminate state
      setTimeout(() => {
        const checkbox = document.getElementById('indeterminate-demo');
        if (checkbox) {
          checkbox.indeterminate = true;
        }
      }, 0);
    <\/script>
  `])))},r={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .card {
        padding: 2rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        text-align: center;
      }

      .card h4 {
        margin-bottom: 0.5rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .card .instruction {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 1.5rem;
      }

      .card kbd {
        padding: 2px 6px;
        background: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
        font-size: 0.85em;
      }

      .spec-box {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        border-left: 4px solid var(--sb-ui-color-primary-base);
        margin-top: 1rem;
        text-align: left;
      }

      .spec-box .spec-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }

      .spec-box .spec-item {
        font-size: 0.75rem;
        color: #666;
        font-family: 'Courier New', monospace;
        margin: 0.25rem 0;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">✨ Efectos Interactivos</h2>
        <p class="matrix-subtitle">Halos Material Design que aparecen en hover, pressed y focus</p>

        <div class="grid">
          <!-- HOVER -->
          <div class="card">
            <h4>Hover Effect</h4>
            <p class="instruction">Pasa el mouse sobre el checkbox</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Hover me</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Especificaciones:</p>
              <p class="spec-item">• Background: #F2F9F6</p>
              <p class="spec-item">• Size: 32×32px</p>
              <p class="spec-item">• Opacity: 0.7</p>
              <p class="spec-item">• Position: top -7px, left -7px</p>
            </div>
          </div>

          <!-- PRESSED -->
          <div class="card">
            <h4>Pressed Effect</h4>
            <p class="instruction">Mantén presionado el checkbox</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Press me</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Doble Halo:</p>
              <p class="spec-item">Outer: 32×32px #F2F9F6</p>
              <p class="spec-item">Inner: 28×28px #E5F4EE</p>
              <p class="spec-item">Ambos: opacity 0.7</p>
            </div>
          </div>

          <!-- FOCUS -->
          <div class="card">
            <h4>Focus Effect</h4>
            <p class="instruction">Presiona <kbd>Tab</kbd> para navegar</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Focus me with Tab</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Halo de Focus:</p>
              <p class="spec-item">• Background: #E5F4EE</p>
              <p class="spec-item">• Size: 32×32px</p>
              <p class="spec-item">• Opacity: 0.7</p>
              <p class="spec-item">• WCAG 2.1 AA compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},t={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a(h||(h=d([`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #666;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .example-group.row {
        flex-direction: row;
        justify-content: center;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">🔧 Modificadores de Layout</h2>
        <p class="matrix-subtitle">Ajusta el layout del checkbox según el contexto de uso</p>

        <div class="grid">
          <!-- NO LABEL -->
          <div class="card">
            <h4>Sin Label (.--no-label)</h4>
            <div class="example-group row">
              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
              </label>
            </div>
          </div>

          <!-- BLOCK -->
          <div class="card">
            <h4>Ancho Completo (.--block)</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--block">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Ocupa todo el ancho disponible</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--block">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Full width checkbox</span>
              </label>
            </div>
          </div>

          <!-- VERTICAL -->
          <div class="card">
            <h4>Layout Vertical (.--vertical)</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--vertical">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label"
                  >Este es un texto muy largo que se beneficia del layout vertical con el label
                  arriba del checkbox</span
                >
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Set indeterminate state
      setTimeout(() => {
        const checkbox = document.getElementById('indeterminate-demo');
        if (checkbox) {
          checkbox.indeterminate = true;
        }
      }, 0);
    <\/script>
  `])))},l={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a(k||(k=d([`
    <style>
      .demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
        font-size: 0.875rem;
      }

      .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        font-family: inherit;
      }

      .form-input:focus {
        outline: 2px solid var(--sb-ui-color-primary-base);
        outline-offset: 2px;
      }

      .checkbox-container {
        padding: 1rem;
        background: #fafafa;
        border-radius: 8px;
        margin-bottom: 1.5rem;
      }

      .error-message {
        display: none;
        margin-top: 0.5rem;
        margin-left: 28px;
        color: #dc3545;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .error-message.visible {
        display: block;
      }

      .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }

      .form-result {
        display: none;
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-top: 1rem;
      }

      .form-result.visible {
        display: block;
      }

      .form-result.success {
        background: #e8f5e9;
        color: #2e7d32;
        border: 2px solid #4caf50;
      }

      .form-result.error {
        background: transparent;
        color: #333;
      }

      .sb-ui-button {
        padding: 0.75rem 1.5rem;
        border: 1px solid;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .sb-ui-button--primary {
        background: var(--sb-ui-color-primary-base, #009056);
        color: white;
        border-color: var(--sb-ui-color-primary-base, #009056);
      }

      .sb-ui-button--secondary {
        background: transparent;
        color: var(--sb-ui-color-primary-base, #009056);
        border-color: #e0e0e0;
      }

      .sb-ui-button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    </style>

    <div class="demo-container">
      <h2 class="demo-title">📝 Formulario de Registro</h2>
      <p class="demo-subtitle">
        Intenta enviar sin aceptar los términos para ver el estado de error
      </p>

      <form id="validation-demo-form">
        <!-- Nombre -->
        <div class="form-group">
          <label class="form-label" for="val-name">Nombre completo *</label>
          <input
            type="text"
            id="val-name"
            class="form-input"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label class="form-label" for="val-email">Email *</label>
          <input
            type="email"
            id="val-email"
            class="form-input"
            placeholder="tu@email.com"
            required
          />
        </div>

        <!-- Términos y Condiciones -->
        <div class="checkbox-container">
          <label class="sb-ui-checkbox" id="val-terms-label">
            <input type="checkbox" class="sb-ui-checkbox__input" id="val-terms" />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">
              Acepto los
              <a href="#" style="color: var(--sb-ui-color-primary-base)">términos y condiciones</a>
              *
            </span>
          </label>
          <p class="error-message" id="val-terms-error">
            ⚠️ Debes aceptar los términos y condiciones para continuar
          </p>
        </div>

        <!-- Botones -->
        <div class="form-actions">
          <button type="button" class="sb-ui-button sb-ui-button--secondary" id="val-reset">
            Limpiar
          </button>
          <button type="submit" class="sb-ui-button sb-ui-button--primary">Enviar</button>
        </div>

        <!-- Resultado -->
        <div class="form-result" id="val-result"></div>
      </form>
    </div>

    <script>
      setTimeout(() => {
        const form = document.getElementById('validation-demo-form');
        const termsCheckbox = document.getElementById('val-terms');
        const termsLabel = document.getElementById('val-terms-label');
        const termsError = document.getElementById('val-terms-error');
        const resultDiv = document.getElementById('val-result');
        const resetBtn = document.getElementById('val-reset');

        // Mostrar error
        function showError() {
          termsLabel.classList.add('sb-ui-checkbox--error');
          termsError.classList.add('visible');
        }

        // Ocultar error
        function hideError() {
          termsLabel.classList.remove('sb-ui-checkbox--error');
          termsError.classList.remove('visible');
        }

        // Al cambiar el checkbox, quitar error
        termsCheckbox.addEventListener('change', () => {
          if (termsCheckbox.checked) {
            hideError();
          }
        });

        // Submit del formulario
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          // Validar checkbox
          if (!termsCheckbox.checked) {
            showError();
            resultDiv.className = 'form-result visible error';
            resultDiv.innerHTML = '⚠️ <strong>Error:</strong> Debes aceptar los términos.';
            return;
          }

          // Éxito
          hideError();
          resultDiv.className = 'form-result visible success';
          resultDiv.innerHTML = '✅ <strong>¡Formulario enviado!</strong> Términos aceptados.';

          setTimeout(() => {
            resultDiv.classList.remove('visible');
          }, 3000);
        });

        // Reset
        resetBtn.addEventListener('click', () => {
          form.reset();
          hideError();
          resultDiv.classList.remove('visible');
        });
      }, 0);
    <\/script>
  `])))},b={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>a(g||(g=d([`
    <style>
      .examples-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .example-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .example-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .example-description {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 1.5rem;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }
    </style>

    <div class="examples-container">
      <!-- FORMULARIO DE REGISTRO -->
      <div class="example-section">
        <h3 class="example-title">📝 Formulario de Registro</h3>
        <p class="example-description">Checkboxes para términos y preferencias de usuario</p>

        <div class="example-group">
          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" required />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Acepto los términos y condiciones *</span>
          </label>

          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Deseo recibir notificaciones por email</span>
          </label>

          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" checked />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Suscribirme al newsletter (opcional)</span>
          </label>
        </div>
      </div>

      <!-- FILTROS -->
      <div class="example-section">
        <h3 class="example-title">🔍 Filtros de Búsqueda</h3>
        <p class="example-description">Selección múltiple de opciones de filtrado</p>

        <div class="grid">
          <div>
            <strong style="display: block; margin-bottom: 1rem; color: #333;"
              >Disponibilidad</strong
            >
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">En stock</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Con descuento</span>
              </label>
            </div>
          </div>

          <div>
            <strong style="display: block; margin-bottom: 1rem; color: #333;">Precio</strong>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Menos de $50</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">$50 - $100</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Más de $100</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLA CON SELECCIÓN -->
      <div class="example-section">
        <h3 class="example-title">📊 Tabla con Selección Múltiple</h3>
        <p class="example-description">Checkboxes sin label para tablas compactas</p>

        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f5f5; border-bottom: 2px solid #e0e0e0;">
              <th style="padding: 1rem; text-align: center; width: 60px;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" id="select-all" />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </th>
              <th style="padding: 1rem; text-align: left;">Producto</th>
              <th style="padding: 1rem; text-align: center;">Precio</th>
              <th style="padding: 1rem; text-align: center;">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem;">Producto A</td>
              <td style="padding: 1rem; text-align: center;">$49.99</td>
              <td style="padding: 1rem; text-align: center;">✓ Disponible</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem;">Producto B</td>
              <td style="padding: 1rem; text-align: center;">$79.99</td>
              <td style="padding: 1rem; text-align: center;">✓ Disponible</td>
            </tr>
            <tr>
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem; opacity: 0.6;">Producto C</td>
              <td style="padding: 1rem; text-align: center; opacity: 0.6;">$99.99</td>
              <td style="padding: 1rem; text-align: center; opacity: 0.6;">✗ Agotado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <script>
      setTimeout(() => {
        const selectAll = document.getElementById('select-all');
        if (selectAll) {
          selectAll.indeterminate = true;
        }
      }, 0);
    <\/script>
  `])))};var f,y,_,v,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  args: {
    label: 'Option text',
    checked: false,
    disabled: false,
    error: false,
    indeterminate: false,
    size: 'medium',
    noLabel: false,
    block: false
  },
  render: args => {
    // Determinar las clases del checkbox
    const classes = ['sb-ui-checkbox', args.size !== 'medium' ? \`sb-ui-checkbox--\${args.size}\` : '', args.error ? 'sb-ui-checkbox--error' : '', args.noLabel ? 'sb-ui-checkbox--no-label' : '', args.block ? 'sb-ui-checkbox--block' : ''].filter(Boolean).join(' ');

    // Generar el HTML del checkbox
    const checkboxHtml = html\`
      <label class="\${classes}" id="playground-checkbox">
        <input
          type="checkbox"
          class="sb-ui-checkbox__input"
          ?checked=\${args.checked}
          ?disabled=\${args.disabled}
        />
        <span class="sb-ui-checkbox__box"></span>
        \${!args.noLabel ? html\`<span class="sb-ui-checkbox__label">\${args.label}</span>\` : ''}
      </label>

      <script>
        // Set indeterminate state if needed
        setTimeout(() => {
          const checkbox = document.querySelector('#playground-checkbox input');
          if (checkbox) {
            checkbox.indeterminate = \${args.indeterminate};
          }
        }, 0);
      <\/script>
    \`;
    return checkboxHtml;
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source},description:{story:`## Playground (Interactivo)

Experimenta con todas las combinaciones del checkbox usando los controles interactivos
en el panel inferior. Puedes ajustar tamaño, estados (checked, disabled, error, indeterminate) y modificadores.`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var D,L,z,w,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.5rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #009056);
        color: white;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.enabled {
        background: #e8f5e9;
        color: #2e7d32;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      .hint-text {
        font-size: 0.875rem;
        color: #666;
        font-style: italic;
        margin-top: 0.5rem;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           MATRIZ 2x2 - ESTADOS BÁSICOS
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">☑️ Matriz de Estados Básicos (2×2)</h2>
        <p class="matrix-subtitle">
          Combinaciones fundamentales: Unchecked/Checked × Enabled/Disabled
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Unchecked</th>
              <th>Checked</th>
            </tr>
          </thead>
          <tbody>
            <!-- ENABLED -->
            <tr>
              <td>
                <span class="state-label enabled">Enabled</span>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Unchecked option</span>
                </label>
                <p class="hint-text">Pasa el mouse para ver el halo verde</p>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Checked option</span>
                </label>
                <p class="hint-text">Click para desmarcar</p>
              </td>
            </tr>

            <!-- DISABLED -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Disabled unchecked</span>
                </label>
                <p class="hint-text">Box blanco + border gris (#9B9B9B)</p>
              </td>
              <td>
                <label class="sb-ui-checkbox">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked disabled />
                  <span class="sb-ui-checkbox__box"></span>
                  <span class="sb-ui-checkbox__label">Disabled checked</span>
                </label>
                <p class="hint-text">Box gris + checkmark blanca</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  \`
}`,...(z=(L=n.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:`## Estados Básicos - Matriz 2×2

Matriz completa del checkbox mostrando todas las combinaciones de:
- **2 Estados de Selección**: Unchecked, Checked
- **2 Estados de Disponibilidad**: Enabled, Disabled

**Total: 4 combinaciones base** (2 × 2)

Cada combinación incluye estados interactivos: Default, Hover, Pressed, Focus`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.description}}};var S,C,B,A,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .size-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .size-card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        text-align: center;
      }

      .size-card h4 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .size-card .spec {
        font-size: 0.75rem;
        color: #999;
        margin-bottom: 1rem;
        font-family: 'Courier New', monospace;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">📏 Tamaños del Checkbox</h2>
        <p class="matrix-subtitle">Tres tamaños disponibles para diferentes contextos de uso</p>

        <div class="size-grid">
          <!-- SMALL -->
          <div class="size-card">
            <h4>Small</h4>
            <p class="spec">16×16px • Gap 6px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small unchecked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small checked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--small">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Small disabled</span>
              </label>
            </div>
          </div>

          <!-- MEDIUM -->
          <div class="size-card">
            <h4>Medium (Default)</h4>
            <p class="spec">20×20px • Gap 8px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium unchecked</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium checked</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Medium disabled</span>
              </label>
            </div>
          </div>

          <!-- LARGE -->
          <div class="size-card">
            <h4>Large</h4>
            <p class="spec">24×24px • Gap 12px</p>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large unchecked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large checked</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--large">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Large disabled</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:`## Tamaños - Small, Medium, Large

El checkbox viene en 3 tamaños:
- **Small**: 16×16px (compacto para tablas y listas densas)
- **Medium**: 20×20px (default, ideal para formularios)
- **Large**: 24×24px (para interfaces táctiles o énfasis)`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var R,T,M,O,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-feedback-error-base, #dc3545);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #666;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .hint-text {
        font-size: 0.75rem;
        color: #999;
        margin-top: 0.5rem;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">🔴 Estado Error</h2>
        <p class="matrix-subtitle">
          Border rojo (#DC3545) para indicar validación fallida. El texto del label se mantiene
          gris.
        </p>

        <div class="grid">
          <!-- Error Unchecked -->
          <div class="card">
            <h4>Error - Unchecked</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Campo obligatorio *</span>
              </label>
              <p class="hint-text">Border rojo, background blanco, texto gris</p>
            </div>
          </div>

          <!-- Error Checked -->
          <div class="card">
            <h4>Error - Checked</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Error pero marcado</span>
              </label>
              <p class="hint-text">Background rojo, checkmark blanca</p>
            </div>
          </div>

          <!-- Error Disabled -->
          <div class="card">
            <h4>Error + Disabled</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--error">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Error y deshabilitado</span>
              </label>
              <p class="hint-text">Disabled tiene prioridad visual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(M=(T=c.parameters)==null?void 0:T.docs)==null?void 0:M.source},description:{story:`## Estado Error - Validación de Formularios

El estado error muestra:
- **Border rojo** (#DC3545) para indicar validación fallida
- **Halos rojos** en hover/pressed
- **Texto del label** mantiene color gris (#757575) - solo el border es rojo
- **Background checked** en rojo cuando está marcado con error

Ideal para mostrar campos obligatorios sin marcar o validaciones fallidas.`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var N,H,j,$,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .code-hint {
        font-size: 0.75rem;
        color: #666;
        background: #f5f5f5;
        padding: 0.5rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        margin-top: 1rem;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">✨ Estados Especiales</h2>
        <p class="matrix-subtitle">Indeterminate, Loading y Readonly para casos de uso avanzados</p>

        <div class="grid">
          <!-- INDETERMINATE -->
          <div class="card">
            <h4>Indeterminate State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" id="indeterminate-demo" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Select all (partial)</span>
              </label>
              <p class="code-hint">checkbox.indeterminate = true</p>
            </div>
          </div>

          <!-- LOADING -->
          <div class="card">
            <h4>Loading State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--loading">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Saving changes...</span>
              </label>
              <p class="code-hint">.sb-ui-checkbox--loading</p>
            </div>
          </div>

          <!-- READONLY -->
          <div class="card">
            <h4>Readonly State</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--readonly">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Read-only setting</span>
              </label>
              <p class="code-hint">.sb-ui-checkbox--readonly</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Set indeterminate state
      setTimeout(() => {
        const checkbox = document.getElementById('indeterminate-demo');
        if (checkbox) {
          checkbox.indeterminate = true;
        }
      }, 0);
    <\/script>
  \`
}`,...(j=(H=i.parameters)==null?void 0:H.docs)==null?void 0:j.source},description:{story:`## Estados Especiales - Indeterminate, Loading, Readonly

Estados avanzados del checkbox:
- **Indeterminate**: Para checkbox padre en selección múltiple (línea horizontal)
- **Loading**: Durante operaciones asíncronas (animación pulse)
- **Readonly**: Solo lectura, no editable`,...(V=($=i.parameters)==null?void 0:$.docs)==null?void 0:V.description}}};var U,q,G,W,Y;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .card {
        padding: 2rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        text-align: center;
      }

      .card h4 {
        margin-bottom: 0.5rem;
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .card .instruction {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 1.5rem;
      }

      .card kbd {
        padding: 2px 6px;
        background: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
        font-size: 0.85em;
      }

      .spec-box {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        border-left: 4px solid var(--sb-ui-color-primary-base);
        margin-top: 1rem;
        text-align: left;
      }

      .spec-box .spec-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }

      .spec-box .spec-item {
        font-size: 0.75rem;
        color: #666;
        font-family: 'Courier New', monospace;
        margin: 0.25rem 0;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">✨ Efectos Interactivos</h2>
        <p class="matrix-subtitle">Halos Material Design que aparecen en hover, pressed y focus</p>

        <div class="grid">
          <!-- HOVER -->
          <div class="card">
            <h4>Hover Effect</h4>
            <p class="instruction">Pasa el mouse sobre el checkbox</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Hover me</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Especificaciones:</p>
              <p class="spec-item">• Background: #F2F9F6</p>
              <p class="spec-item">• Size: 32×32px</p>
              <p class="spec-item">• Opacity: 0.7</p>
              <p class="spec-item">• Position: top -7px, left -7px</p>
            </div>
          </div>

          <!-- PRESSED -->
          <div class="card">
            <h4>Pressed Effect</h4>
            <p class="instruction">Mantén presionado el checkbox</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Press me</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Doble Halo:</p>
              <p class="spec-item">Outer: 32×32px #F2F9F6</p>
              <p class="spec-item">Inner: 28×28px #E5F4EE</p>
              <p class="spec-item">Ambos: opacity 0.7</p>
            </div>
          </div>

          <!-- FOCUS -->
          <div class="card">
            <h4>Focus Effect</h4>
            <p class="instruction">Presiona <kbd>Tab</kbd> para navegar</p>
            <label class="sb-ui-checkbox">
              <input type="checkbox" class="sb-ui-checkbox__input" />
              <span class="sb-ui-checkbox__box"></span>
              <span class="sb-ui-checkbox__label">Focus me with Tab</span>
            </label>

            <div class="spec-box">
              <p class="spec-title">Halo de Focus:</p>
              <p class="spec-item">• Background: #E5F4EE</p>
              <p class="spec-item">• Size: 32×32px</p>
              <p class="spec-item">• Opacity: 0.7</p>
              <p class="spec-item">• WCAG 2.1 AA compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(G=(q=r.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:`## Efectos Interactivos - Hover, Pressed, Focus

Efectos visuales Material Design:
- **Hover**: Halo verde claro (#F2F9F6) de 32×32px detrás del checkbox
- **Pressed**: Doble halo concéntrico (outer 32px + inner 28px)
- **Focus**: Halo verde medio (#E5F4EE) visible con navegación por teclado

Los halos NO aparecen cuando el checkbox está disabled.`,...(Y=(W=r.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var K,Z,J,Q,X;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .card {
        padding: 1.5rem;
        background: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .card h4 {
        margin-bottom: 1rem;
        color: #666;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .example-group.row {
        flex-direction: row;
        justify-content: center;
      }
    </style>

    <div class="matrix-container">
      <div class="matrix-section">
        <h2 class="matrix-title">🔧 Modificadores de Layout</h2>
        <p class="matrix-subtitle">Ajusta el layout del checkbox según el contexto de uso</p>

        <div class="grid">
          <!-- NO LABEL -->
          <div class="card">
            <h4>Sin Label (.--no-label)</h4>
            <div class="example-group row">
              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                <span class="sb-ui-checkbox__box"></span>
              </label>
            </div>
          </div>

          <!-- BLOCK -->
          <div class="card">
            <h4>Ancho Completo (.--block)</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--block">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Ocupa todo el ancho disponible</span>
              </label>

              <label class="sb-ui-checkbox sb-ui-checkbox--block">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Full width checkbox</span>
              </label>
            </div>
          </div>

          <!-- VERTICAL -->
          <div class="card">
            <h4>Layout Vertical (.--vertical)</h4>
            <div class="example-group">
              <label class="sb-ui-checkbox sb-ui-checkbox--vertical">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label"
                  >Este es un texto muy largo que se beneficia del layout vertical con el label
                  arriba del checkbox</span
                >
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Set indeterminate state
      setTimeout(() => {
        const checkbox = document.getElementById('indeterminate-demo');
        if (checkbox) {
          checkbox.indeterminate = true;
        }
      }, 0);
    <\/script>
  \`
}`,...(J=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:J.source},description:{story:`## Modificadores - Sin Label, Block, Vertical

Modificadores para ajustar el layout del checkbox:
- **No Label**: Solo el checkbox sin texto (útil para tablas)
- **Block**: Ocupa todo el ancho disponible
- **Vertical**: Label arriba del checkbox (para textos largos)`,...(X=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var ee,ae,se,ne,oe;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
        font-size: 0.875rem;
      }

      .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        font-family: inherit;
      }

      .form-input:focus {
        outline: 2px solid var(--sb-ui-color-primary-base);
        outline-offset: 2px;
      }

      .checkbox-container {
        padding: 1rem;
        background: #fafafa;
        border-radius: 8px;
        margin-bottom: 1.5rem;
      }

      .error-message {
        display: none;
        margin-top: 0.5rem;
        margin-left: 28px;
        color: #dc3545;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .error-message.visible {
        display: block;
      }

      .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }

      .form-result {
        display: none;
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-top: 1rem;
      }

      .form-result.visible {
        display: block;
      }

      .form-result.success {
        background: #e8f5e9;
        color: #2e7d32;
        border: 2px solid #4caf50;
      }

      .form-result.error {
        background: transparent;
        color: #333;
      }

      .sb-ui-button {
        padding: 0.75rem 1.5rem;
        border: 1px solid;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .sb-ui-button--primary {
        background: var(--sb-ui-color-primary-base, #009056);
        color: white;
        border-color: var(--sb-ui-color-primary-base, #009056);
      }

      .sb-ui-button--secondary {
        background: transparent;
        color: var(--sb-ui-color-primary-base, #009056);
        border-color: #e0e0e0;
      }

      .sb-ui-button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    </style>

    <div class="demo-container">
      <h2 class="demo-title">📝 Formulario de Registro</h2>
      <p class="demo-subtitle">
        Intenta enviar sin aceptar los términos para ver el estado de error
      </p>

      <form id="validation-demo-form">
        <!-- Nombre -->
        <div class="form-group">
          <label class="form-label" for="val-name">Nombre completo *</label>
          <input
            type="text"
            id="val-name"
            class="form-input"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label class="form-label" for="val-email">Email *</label>
          <input
            type="email"
            id="val-email"
            class="form-input"
            placeholder="tu@email.com"
            required
          />
        </div>

        <!-- Términos y Condiciones -->
        <div class="checkbox-container">
          <label class="sb-ui-checkbox" id="val-terms-label">
            <input type="checkbox" class="sb-ui-checkbox__input" id="val-terms" />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">
              Acepto los
              <a href="#" style="color: var(--sb-ui-color-primary-base)">términos y condiciones</a>
              *
            </span>
          </label>
          <p class="error-message" id="val-terms-error">
            ⚠️ Debes aceptar los términos y condiciones para continuar
          </p>
        </div>

        <!-- Botones -->
        <div class="form-actions">
          <button type="button" class="sb-ui-button sb-ui-button--secondary" id="val-reset">
            Limpiar
          </button>
          <button type="submit" class="sb-ui-button sb-ui-button--primary">Enviar</button>
        </div>

        <!-- Resultado -->
        <div class="form-result" id="val-result"></div>
      </form>
    </div>

    <script>
      setTimeout(() => {
        const form = document.getElementById('validation-demo-form');
        const termsCheckbox = document.getElementById('val-terms');
        const termsLabel = document.getElementById('val-terms-label');
        const termsError = document.getElementById('val-terms-error');
        const resultDiv = document.getElementById('val-result');
        const resetBtn = document.getElementById('val-reset');

        // Mostrar error
        function showError() {
          termsLabel.classList.add('sb-ui-checkbox--error');
          termsError.classList.add('visible');
        }

        // Ocultar error
        function hideError() {
          termsLabel.classList.remove('sb-ui-checkbox--error');
          termsError.classList.remove('visible');
        }

        // Al cambiar el checkbox, quitar error
        termsCheckbox.addEventListener('change', () => {
          if (termsCheckbox.checked) {
            hideError();
          }
        });

        // Submit del formulario
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          // Validar checkbox
          if (!termsCheckbox.checked) {
            showError();
            resultDiv.className = 'form-result visible error';
            resultDiv.innerHTML = '⚠️ <strong>Error:</strong> Debes aceptar los términos.';
            return;
          }

          // Éxito
          hideError();
          resultDiv.className = 'form-result visible success';
          resultDiv.innerHTML = '✅ <strong>¡Formulario enviado!</strong> Términos aceptados.';

          setTimeout(() => {
            resultDiv.classList.remove('visible');
          }, 3000);
        });

        // Reset
        resetBtn.addEventListener('click', () => {
          form.reset();
          hideError();
          resultDiv.classList.remove('visible');
        });
      }, 0);
    <\/script>
  \`
}`,...(se=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:`## Validación de Formulario - Demo Interactivo

Ejemplo real de validación de formulario con checkbox obligatorio.
Muestra cómo aplicar dinámicamente el estado error cuando la validación falla.`,...(oe=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ce,ie,re,te,le;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <style>
      .examples-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .example-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .example-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #009056);
      }

      .example-description {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 1.5rem;
      }

      .example-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }
    </style>

    <div class="examples-container">
      <!-- FORMULARIO DE REGISTRO -->
      <div class="example-section">
        <h3 class="example-title">📝 Formulario de Registro</h3>
        <p class="example-description">Checkboxes para términos y preferencias de usuario</p>

        <div class="example-group">
          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" required />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Acepto los términos y condiciones *</span>
          </label>

          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Deseo recibir notificaciones por email</span>
          </label>

          <label class="sb-ui-checkbox">
            <input type="checkbox" class="sb-ui-checkbox__input" checked />
            <span class="sb-ui-checkbox__box"></span>
            <span class="sb-ui-checkbox__label">Suscribirme al newsletter (opcional)</span>
          </label>
        </div>
      </div>

      <!-- FILTROS -->
      <div class="example-section">
        <h3 class="example-title">🔍 Filtros de Búsqueda</h3>
        <p class="example-description">Selección múltiple de opciones de filtrado</p>

        <div class="grid">
          <div>
            <strong style="display: block; margin-bottom: 1rem; color: #333;"
              >Disponibilidad</strong
            >
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">En stock</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Con descuento</span>
              </label>
            </div>
          </div>

          <div>
            <strong style="display: block; margin-bottom: 1rem; color: #333;">Precio</strong>
            <div class="example-group">
              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Menos de $50</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" checked />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">$50 - $100</span>
              </label>

              <label class="sb-ui-checkbox">
                <input type="checkbox" class="sb-ui-checkbox__input" />
                <span class="sb-ui-checkbox__box"></span>
                <span class="sb-ui-checkbox__label">Más de $100</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLA CON SELECCIÓN -->
      <div class="example-section">
        <h3 class="example-title">📊 Tabla con Selección Múltiple</h3>
        <p class="example-description">Checkboxes sin label para tablas compactas</p>

        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f5f5; border-bottom: 2px solid #e0e0e0;">
              <th style="padding: 1rem; text-align: center; width: 60px;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" id="select-all" />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </th>
              <th style="padding: 1rem; text-align: left;">Producto</th>
              <th style="padding: 1rem; text-align: center;">Precio</th>
              <th style="padding: 1rem; text-align: center;">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" checked />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem;">Producto A</td>
              <td style="padding: 1rem; text-align: center;">$49.99</td>
              <td style="padding: 1rem; text-align: center;">✓ Disponible</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem;">Producto B</td>
              <td style="padding: 1rem; text-align: center;">$79.99</td>
              <td style="padding: 1rem; text-align: center;">✓ Disponible</td>
            </tr>
            <tr>
              <td style="padding: 1rem; text-align: center;">
                <label class="sb-ui-checkbox sb-ui-checkbox--no-label">
                  <input type="checkbox" class="sb-ui-checkbox__input" disabled />
                  <span class="sb-ui-checkbox__box"></span>
                </label>
              </td>
              <td style="padding: 1rem; opacity: 0.6;">Producto C</td>
              <td style="padding: 1rem; text-align: center; opacity: 0.6;">$99.99</td>
              <td style="padding: 1rem; text-align: center; opacity: 0.6;">✗ Agotado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <script>
      setTimeout(() => {
        const selectAll = document.getElementById('select-all');
        if (selectAll) {
          selectAll.indeterminate = true;
        }
      }, 0);
    <\/script>
  \`
}`,...(re=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:re.source},description:{story:`## Casos de Uso Reales

Ejemplos de uso del checkbox en contextos reales:
- **Formularios**: Términos y condiciones, preferencias, opciones
- **Filtros**: Selección múltiple de opciones
- **Listas**: Selección de items
- **Configuración**: Toggle de settings`,...(le=(te=b.parameters)==null?void 0:te.docs)==null?void 0:le.description}}};const ue=["Playground","BasicStates","Sizes","ErrorState","SpecialStates","InteractiveEffects","Modifiers","FormValidation","RealWorldExamples"];export{n as BasicStates,c as ErrorState,l as FormValidation,r as InteractiveEffects,t as Modifiers,s as Playground,b as RealWorldExamples,o as Sizes,i as SpecialStates,ue as __namedExportsOrder,me as default};
