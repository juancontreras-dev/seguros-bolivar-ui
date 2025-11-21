import{x as s}from"./lit-element-BQ2u6o3f.js";const D={title:"Atoms/Input",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de input versátil con 4 estados de validación (Normal, Error, Success, Warning), 3 tamaños (Small, Medium, Large), múltiples tipos HTML5 y helper text con iconos."}}},argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Tipo de input HTML",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},state:{control:"select",options:["normal","error","success","warning"],description:"Estado de validación del input",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del input",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},placeholder:{control:"text",description:"Texto placeholder del input",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor del input",table:{type:{summary:"string"}}},label:{control:"text",description:"Texto del label",table:{type:{summary:"string"}}},required:{control:"boolean",description:"Campo requerido",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Input deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},helperText:{control:"text",description:"Texto de ayuda",table:{type:{summary:"string"}}},rounded:{control:"boolean",description:"Bordes redondeados",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},inline:{control:"boolean",description:"Ancho automático (inline)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},n={parameters:{docs:{source:{format:"dedent",language:"html"}}},args:{type:"text",state:"normal",size:"medium",placeholder:"Escribe algo aquí...",value:"",label:"Label txt",required:!1,disabled:!1,helperText:"Help text",rounded:!1,inline:!1},render:a=>{const L=["sb-ui-input",a.state!=="normal"?`sb-ui-input--${a.state}`:"",a.size!=="medium"?`sb-ui-input--${a.size}`:"",a.rounded?"sb-ui-input--rounded":"",a.inline?"sb-ui-input--inline":""].filter(Boolean).join(" "),C=["sb-ui-input-label",a.required?"sb-ui-input-label--required":""].filter(Boolean).join(" "),k=["sb-ui-input-helper",a.state!=="normal"?`sb-ui-input-helper--${a.state}`:""].filter(Boolean).join(" "),E=S=>{switch(S){case"success":return s`<i class="fa-solid fa-circle-check"></i>`;case"error":return s`<i class="fa-solid fa-circle-xmark"></i>`;case"warning":return s`<i class="fa-solid fa-triangle-exclamation"></i>`;default:return s`<i class="fa-solid fa-circle-info"></i>`}},l="playground-input";return s`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 400px;">
        <div class="sb-ui-input-container">
          ${a.label?s` <label class="${C}" for="${l}"> ${a.label} </label> `:""}
          <input
            id="${l}"
            class="${L}"
            type="${a.type}"
            placeholder="${a.placeholder||""}"
            value="${a.value||""}"
            ?required="${a.required}"
            ?disabled="${a.disabled}"
          />
          ${a.helperText?s`
                <span class="${k}">
                  ${E(a.state)}
                  ${a.helperText}
                </span>
              `:""}
        </div>
      </div>
    `}},e={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>s`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
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
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #007acc);
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

      .state-label.default {
        background: #e3f2fd;
        color: #1565c0;
      }
      .state-label.hover {
        background: #f3e5f5;
        color: #6a1b9a;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: NORMAL STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">📝 Estado NORMAL - Input</h2>
        <p class="matrix-subtitle">
          Estado por defecto del input sin validación específica. Muestra el borde gris por defecto.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input" type="text" placeholder="Placeholder" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input" type="text" placeholder="Placeholder" disabled />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: SUCCESS STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">✅ Estado SUCCESS - Input</h2>
        <p class="matrix-subtitle">
          Estado de validación exitosa. Muestra borde verde y helper text con icono de check.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: ERROR STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">❌ Estado ERROR - Input</h2>
        <p class="matrix-subtitle">
          Estado de validación fallida. Muestra borde rojo y helper text con icono de error.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input sb-ui-input--error" type="text" value="Invalid" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input sb-ui-input--error" type="text" value="Invalid" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 4: WARNING STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">⚠️ Estado WARNING - Input</h2>
        <p class="matrix-subtitle">
          Estado de advertencia. Muestra borde amarillo y helper text con icono de alerta.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `},i={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>s`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .types-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .types-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .type-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .type-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }
    </style>

    <div class="types-container">
      <div class="types-grid">
        <!-- Text -->
        <div class="type-demo">
          <h3>Text (default)</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Text</label>
            <input class="sb-ui-input" type="text" placeholder="Type text here" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Type de input por defecto
            </span>
          </div>
        </div>

        <!-- Email -->
        <div class="type-demo">
          <h3>Email</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Email</label>
            <input class="sb-ui-input" type="email" placeholder="user@example.com" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Con validación de formato email
            </span>
          </div>
        </div>

        <!-- Password -->
        <div class="type-demo">
          <h3>Password</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Password</label>
            <input class="sb-ui-input" type="password" placeholder="••••••••" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Texto oculto por seguridad
            </span>
          </div>
        </div>

        <!-- Number -->
        <div class="type-demo">
          <h3>Number</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Number</label>
            <input class="sb-ui-input" type="number" placeholder="123" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Solo acepta números
            </span>
          </div>
        </div>

        <!-- Tel -->
        <div class="type-demo">
          <h3>Tel</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Tel</label>
            <input class="sb-ui-input" type="tel" placeholder="+57 300 123 4567" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Optimizado para teléfonos
            </span>
          </div>
        </div>

        <!-- URL -->
        <div class="type-demo">
          <h3>URL</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">URL</label>
            <input class="sb-ui-input" type="url" placeholder="https://example.com" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Valida formato de URL
            </span>
          </div>
        </div>

        <!-- Search -->
        <div class="type-demo">
          <h3>Search</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Search</label>
            <input class="sb-ui-input" type="search" placeholder="Buscar..." />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Con icono de búsqueda
            </span>
          </div>
        </div>
      </div>
    </div>
  `};var t,u,p,r,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  args: {
    type: 'text',
    state: 'normal',
    size: 'medium',
    placeholder: 'Escribe algo aquí...',
    value: '',
    label: 'Label txt',
    required: false,
    disabled: false,
    helperText: 'Help text',
    rounded: false,
    inline: false
  },
  render: args => {
    const inputClasses = ['sb-ui-input', args.state !== 'normal' ? \`sb-ui-input--\${args.state}\` : '', args.size !== 'medium' ? \`sb-ui-input--\${args.size}\` : '', args.rounded ? 'sb-ui-input--rounded' : '', args.inline ? 'sb-ui-input--inline' : ''].filter(Boolean).join(' ');
    const labelClasses = ['sb-ui-input-label', args.required ? 'sb-ui-input-label--required' : ''].filter(Boolean).join(' ');
    const helperClasses = ['sb-ui-input-helper', args.state !== 'normal' ? \`sb-ui-input-helper--\${args.state}\` : ''].filter(Boolean).join(' ');
    const getHelperIcon = (state: string) => {
      switch (state) {
        case 'success':
          return html\`<i class="fa-solid fa-circle-check"></i>\`;
        case 'error':
          return html\`<i class="fa-solid fa-circle-xmark"></i>\`;
        case 'warning':
          return html\`<i class="fa-solid fa-triangle-exclamation"></i>\`;
        default:
          return html\`<i class="fa-solid fa-circle-info"></i>\`;
      }
    };
    const inputId = 'playground-input';
    return html\`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 400px;">
        <div class="sb-ui-input-container">
          \${args.label ? html\` <label class="\${labelClasses}" for="\${inputId}"> \${args.label} </label> \` : ''}
          <input
            id="\${inputId}"
            class="\${inputClasses}"
            type="\${args.type}"
            placeholder="\${args.placeholder || ''}"
            value="\${args.value || ''}"
            ?required="\${args.required}"
            ?disabled="\${args.disabled}"
          />
          \${args.helperText ? html\`
                <span class="\${helperClasses}">
                  \${getHelperIcon(args.state)}
                  \${args.helperText}
                </span>
              \` : ''}
        </div>
      </div>
    \`;
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:`## Playground (Interactivo)

Experimenta con todas las combinaciones del input usando los controles interactivos
en el panel inferior. Puedes ajustar tipo, estado, tamaño y más.`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.description}}};var d,o,b,m,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
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
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #007acc);
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

      .state-label.default {
        background: #e3f2fd;
        color: #1565c0;
      }
      .state-label.hover {
        background: #f3e5f5;
        color: #6a1b9a;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: NORMAL STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">📝 Estado NORMAL - Input</h2>
        <p class="matrix-subtitle">
          Estado por defecto del input sin validación específica. Muestra el borde gris por defecto.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input" type="text" placeholder="Placeholder" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                    style="border-color: var(--sb-ui-color-primary-base);"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small"
                    type="text"
                    placeholder="Placeholder"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input" type="text" placeholder="Placeholder" disabled />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large"
                    type="text"
                    placeholder="Placeholder"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-info"></i>
                    Help text
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: SUCCESS STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">✅ Estado SUCCESS - Input</h2>
        <p class="matrix-subtitle">
          Estado de validación exitosa. Muestra borde verde y helper text con icono de check.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--success"
                    type="text"
                    value="Valid input"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-check"></i>
                    Campo válido
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: ERROR STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">❌ Estado ERROR - Input</h2>
        <p class="matrix-subtitle">
          Estado de validación fallida. Muestra borde rojo y helper text con icono de error.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input sb-ui-input--error" type="text" value="Invalid" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input class="sb-ui-input sb-ui-input--error" type="text" value="Invalid" />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--error"
                    type="text"
                    value="Invalid"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Campo con error
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 4: WARNING STATE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">⚠️ Estado WARNING - Input</h2>
        <p class="matrix-subtitle">
          Estado de advertencia. Muestra borde amarillo y helper text con icono de alerta.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Small</th>
              <th>Medium (Default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Hover State -->
            <tr>
              <td>
                <span class="state-label hover">Hover</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--small sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
              <td>
                <div class="sb-ui-input-container">
                  <label class="sb-ui-input-label">Label txt</label>
                  <input
                    class="sb-ui-input sb-ui-input--large sb-ui-input--warning"
                    type="text"
                    value="Check this"
                    disabled
                  />
                  <span class="sb-ui-input-helper">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Revisa este campo
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  \`
}`,...(b=(o=e.parameters)==null?void 0:o.docs)==null?void 0:b.source},description:{story:`## Estados - Matriz Completa de Combinaciones

Matriz completa del input mostrando todas las combinaciones de:
- **4 Estados**: Normal (Default), Error, Success, Warning
- **3 Tamaños**: Small, Medium, Large
- **3 Variantes Interactivas**: Default, Hover, Disabled

**Total: 36 combinaciones** (4 × 3 × 3)`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};var v,f,x,y,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  render: () => html\`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .types-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .types-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .type-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .type-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }
    </style>

    <div class="types-container">
      <div class="types-grid">
        <!-- Text -->
        <div class="type-demo">
          <h3>Text (default)</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Text</label>
            <input class="sb-ui-input" type="text" placeholder="Type text here" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Type de input por defecto
            </span>
          </div>
        </div>

        <!-- Email -->
        <div class="type-demo">
          <h3>Email</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Email</label>
            <input class="sb-ui-input" type="email" placeholder="user@example.com" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Con validación de formato email
            </span>
          </div>
        </div>

        <!-- Password -->
        <div class="type-demo">
          <h3>Password</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Password</label>
            <input class="sb-ui-input" type="password" placeholder="••••••••" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Texto oculto por seguridad
            </span>
          </div>
        </div>

        <!-- Number -->
        <div class="type-demo">
          <h3>Number</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Number</label>
            <input class="sb-ui-input" type="number" placeholder="123" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Solo acepta números
            </span>
          </div>
        </div>

        <!-- Tel -->
        <div class="type-demo">
          <h3>Tel</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Tel</label>
            <input class="sb-ui-input" type="tel" placeholder="+57 300 123 4567" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Optimizado para teléfonos
            </span>
          </div>
        </div>

        <!-- URL -->
        <div class="type-demo">
          <h3>URL</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">URL</label>
            <input class="sb-ui-input" type="url" placeholder="https://example.com" />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Valida formato de URL
            </span>
          </div>
        </div>

        <!-- Search -->
        <div class="type-demo">
          <h3>Search</h3>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Search</label>
            <input class="sb-ui-input" type="search" placeholder="Buscar..." />
            <span class="sb-ui-input-helper">
              <i class="fa-solid fa-circle-info"></i>
              Con icono de búsqueda
            </span>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`## Tipos de Input - Matriz Completa

Muestra todos los tipos de input HTML5 soportados con sus respectivos iconos.`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};const T=["Playground","Estados","TiposDeInput"];export{e as Estados,n as Playground,i as TiposDeInput,T as __namedExportsOrder,D as default};
