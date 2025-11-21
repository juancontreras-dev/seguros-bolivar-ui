import{x as a}from"./lit-element-CFKcR9Rr.js";var f=Object.freeze,Fe=Object.defineProperty,Be=(n,x)=>f(Fe(n,"raw",{value:f(x||n.slice())})),y;const Ce={title:"Atoms/Radio",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de radio button con 3 tamaños, estados interactivos (hover, pressed, focus, disabled, error), y halos visuales para feedback del usuario."}}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"Tamaño del radio button",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},label:{control:"text",description:"Texto del label",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Estado seleccionado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Estado deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},error:{control:"boolean",description:"Estado de error (border rojo)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},noLabel:{control:"boolean",description:"Sin label visible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},block:{control:"boolean",description:"Ancho completo (100%)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},name:{control:"text",description:"Atributo name del input (para agrupar radios)",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor del radio button",table:{type:{summary:"string"}}}}},e=({size:n="medium",label:x="Opción",checked:ke=!1,disabled:De=!1,error:Se=!1,noLabel:g=!1,block:_e=!1,name:Oe="demo-group",value:Le="option"})=>{const we=["sb-ui-radio",n!=="medium"?`sb-ui-radio--${n}`:"",Se?"sb-ui-radio--error":"",g?"sb-ui-radio--no-label":"",_e?"sb-ui-radio--block":""].filter(Boolean).join(" ");return a`
    <label class="${we}">
      <input
        type="radio"
        class="sb-ui-radio__input"
        name="${Oe}"
        value="${Le}"
        ?checked="${ke}"
        ?disabled="${De}"
      />
      <span class="sb-ui-radio__circle"></span>
      ${g?"":a`<span class="sb-ui-radio__label">${x}</span>`}
    </label>
  `},l={args:{size:"medium",label:"Opción de ejemplo",checked:!1,disabled:!1,error:!1,noLabel:!1,block:!1,name:"playground",value:"example"},render:n=>e(n)},r={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Small</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${e({size:"small",label:"Unselected",name:"size-small",value:"unselected"})}
          ${e({size:"small",label:"Selected",checked:!0,name:"size-small",value:"selected"})}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Medium (Default)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${e({size:"medium",label:"Unselected",name:"size-medium",value:"unselected"})}
          ${e({size:"medium",label:"Selected",checked:!0,name:"size-medium",value:"selected"})}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Large</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${e({size:"large",label:"Unselected",name:"size-large",value:"unselected"})}
          ${e({size:"large",label:"Selected",checked:!0,name:"size-large",value:"selected"})}
        </div>
      </div>
    </div>
  `},o={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      ${e({label:"Unselected",name:"basic-states",value:"unselected"})}
      ${e({label:"Selected",checked:!0,name:"basic-states",value:"selected"})}
    </div>
  `},t={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        ${e({label:"Disabled Unselected",disabled:!0,name:"disabled",value:"unselected"})}
        ${e({label:"Disabled Selected",checked:!0,disabled:!0,name:"disabled",value:"selected"})}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #f8f9fa; border-left: 4px solid #6c757d; font-family: 'Roboto', sans-serif; font-size: 14px; color: #495057;"
      >
        💡 <strong>Nota:</strong> Los radios disabled NO muestran halos al hacer hover y el cursor
        es <code>not-allowed</code>.
      </p>
    </div>
  `},i={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        ${e({label:"Error Unselected",error:!0,name:"error",value:"unselected"})}
        ${e({label:"Error Selected",checked:!0,error:!0,name:"error",value:"selected"})}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #fff5f5; border-left: 4px solid #dc3545; font-family: 'Roboto', sans-serif; font-size: 14px; color: #721c24;"
      >
        ⚠️ <strong>Importante:</strong> Solo el border y el punto interior cambian a rojo. El label
        permanece gris para mejor legibilidad.
      </p>
    </div>
  `},s={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Hover State (pasa el mouse)
        </h4>
        ${e({label:"Hover me!",name:"hover",value:"hover"})}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Pressed State (mantén presionado)
        </h4>
        ${e({label:"Click and hold!",name:"pressed",value:"pressed"})}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Focus State (usa Tab para navegar)
        </h4>
        ${e({label:"Tab here!",name:"focus",value:"focus"})}
      </div>

      <p
        style="margin: 0; padding: 12px; background: #e7f5ff; border-left: 4px solid #0c8599; font-family: 'Roboto', sans-serif; font-size: 14px; color: #0c5460;"
      >
        ℹ️ <strong>Info:</strong> Los halos NO aparecen cuando el radio está disabled.
      </p>
    </div>
  `},d={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Método de Pago
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${e({label:"Tarjeta de crédito",checked:!0,name:"payment",value:"card"})}
          ${e({label:"Transferencia bancaria",name:"payment",value:"transfer"})}
          ${e({label:"PayPal",name:"payment",value:"paypal"})}
          ${e({label:"Efectivo",name:"payment",value:"cash"})}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Tamaño</h4>
        <div style="display: flex; gap: 16px;">
          ${e({label:"S",name:"size",value:"s"})}
          ${e({label:"M",checked:!0,name:"size",value:"m"})}
          ${e({label:"L",name:"size",value:"l"})}
          ${e({label:"XL",name:"size",value:"xl"})}
        </div>
      </div>
    </div>
  `},p={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          No Label (solo círculo)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          ${e({noLabel:!0,name:"no-label",value:"unselected"})}
          ${e({checked:!0,noLabel:!0,name:"no-label",value:"selected"})}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Block (ancho completo)
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${e({label:"Opción 1",block:!0,checked:!0,name:"block",value:"1"})}
          ${e({label:"Opción 2",block:!0,name:"block",value:"2"})}
          ${e({label:"Opción 3",block:!0,name:"block",value:"3"})}
        </div>
      </div>
    </div>
  `},c={render:()=>a(y||(y=Be([`
    <div style="max-width: 400px;">
      <form
        id="radio-form"
        style="display: flex; flex-direction: column; gap: 20px; padding: 24px; border: 1px solid #dee2e6; border-radius: 8px; background: #f8f9fa;"
      >
        <div>
          <label
            style="display: block; margin-bottom: 8px; font-weight: 500; font-family: 'Roboto', sans-serif; color: #212529;"
          >
            Selecciona una opción *
          </label>
          <div id="radio-group" style="display: flex; flex-direction: column; gap: 12px;">
            `,`
            `,`
            `,`
          </div>
          <span
            id="error-message"
            style="display: none; margin-top: 8px; font-size: 14px; color: #dc3545; font-family: 'Roboto', sans-serif;"
          >
            ⚠️ Debes seleccionar una opción
          </span>
        </div>

        <button
          type="submit"
          style="padding: 12px 24px; background: #009056; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; font-family: 'Roboto', sans-serif;"
        >
          Enviar
        </button>

        <div
          id="result"
          style="display: none; padding: 12px; background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; color: #0c5460; font-family: 'Roboto', sans-serif; font-size: 14px;"
        ></div>
      </form>
    </div>

    <script>
      (function () {
        const form = document.getElementById('radio-form');
        const radioGroup = document.getElementById('radio-group');
        const errorMessage = document.getElementById('error-message');
        const result = document.getElementById('result');

        if (form && radioGroup && errorMessage && result) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedRadio = form.querySelector('input[name="required-option"]:checked');
            const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');

            if (!selectedRadio) {
              // Mostrar error
              allRadios.forEach((radio) => radio.classList.add('sb-ui-radio--error'));
              errorMessage.style.display = 'block';
              result.style.display = 'none';
            } else {
              // Limpiar error y mostrar resultado
              allRadios.forEach((radio) => radio.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
              result.style.display = 'block';
              result.textContent = \`✅ Opción seleccionada: \${selectedRadio.value.toUpperCase()}\`;
            }
          });

          // Limpiar error al seleccionar
          const radios = form.querySelectorAll('input[name="required-option"]');
          radios.forEach((radio) => {
            radio.addEventListener('change', () => {
              const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');
              allRadios.forEach((r) => r.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
            });
          });
        }
      })();
    <\/script>
  `],[`
    <div style="max-width: 400px;">
      <form
        id="radio-form"
        style="display: flex; flex-direction: column; gap: 20px; padding: 24px; border: 1px solid #dee2e6; border-radius: 8px; background: #f8f9fa;"
      >
        <div>
          <label
            style="display: block; margin-bottom: 8px; font-weight: 500; font-family: 'Roboto', sans-serif; color: #212529;"
          >
            Selecciona una opción *
          </label>
          <div id="radio-group" style="display: flex; flex-direction: column; gap: 12px;">
            `,`
            `,`
            `,`
          </div>
          <span
            id="error-message"
            style="display: none; margin-top: 8px; font-size: 14px; color: #dc3545; font-family: 'Roboto', sans-serif;"
          >
            ⚠️ Debes seleccionar una opción
          </span>
        </div>

        <button
          type="submit"
          style="padding: 12px 24px; background: #009056; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; font-family: 'Roboto', sans-serif;"
        >
          Enviar
        </button>

        <div
          id="result"
          style="display: none; padding: 12px; background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; color: #0c5460; font-family: 'Roboto', sans-serif; font-size: 14px;"
        ></div>
      </form>
    </div>

    <script>
      (function () {
        const form = document.getElementById('radio-form');
        const radioGroup = document.getElementById('radio-group');
        const errorMessage = document.getElementById('error-message');
        const result = document.getElementById('result');

        if (form && radioGroup && errorMessage && result) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedRadio = form.querySelector('input[name="required-option"]:checked');
            const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');

            if (!selectedRadio) {
              // Mostrar error
              allRadios.forEach((radio) => radio.classList.add('sb-ui-radio--error'));
              errorMessage.style.display = 'block';
              result.style.display = 'none';
            } else {
              // Limpiar error y mostrar resultado
              allRadios.forEach((radio) => radio.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
              result.style.display = 'block';
              result.textContent = \\\`✅ Opción seleccionada: \\\${selectedRadio.value.toUpperCase()}\\\`;
            }
          });

          // Limpiar error al seleccionar
          const radios = form.querySelectorAll('input[name="required-option"]');
          radios.forEach((radio) => {
            radio.addEventListener('change', () => {
              const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');
              allRadios.forEach((r) => r.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
            });
          });
        }
      })();
    <\/script>
  `])),e({label:"Opción A",name:"required-option",value:"a"}),e({label:"Opción B",name:"required-option",value:"b"}),e({label:"Opción C",name:"required-option",value:"c"}))},u={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <!-- Ejemplo 1: Selector de plan -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          Selecciona tu plan
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${e({label:"Plan Básico - $9.99/mes",checked:!0,name:"plan",value:"basic"})}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Ideal para uso personal. Incluye 10GB de almacenamiento.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${e({label:"Plan Pro - $19.99/mes",name:"plan",value:"pro"})}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Para equipos pequeños. 100GB de almacenamiento + colaboración.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            ${e({label:"Plan Enterprise - Contactar",name:"plan",value:"enterprise"})}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Solución personalizada para grandes organizaciones.
            </p>
          </div>
        </div>
      </div>

      <!-- Ejemplo 2: Opciones de envío -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          Método de envío
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${e({label:"Envío estándar (5-7 días) - Gratis",checked:!0,name:"shipping",value:"standard"})}
          ${e({label:"Envío express (2-3 días) - $9.99",name:"shipping",value:"express"})}
          ${e({label:"Envío prioritario (1 día) - $19.99",name:"shipping",value:"priority"})}
        </div>
      </div>

      <!-- Ejemplo 3: Pregunta de encuesta -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          ¿Cómo calificarías nuestro servicio?
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${e({label:"Excelente",name:"rating",value:"excellent",size:"large"})}
          ${e({label:"Bueno",name:"rating",value:"good",size:"large"})}
          ${e({label:"Regular",name:"rating",value:"fair",size:"large"})}
          ${e({label:"Malo",name:"rating",value:"poor",size:"large"})}
        </div>
      </div>
    </div>
  `},m={render:()=>a`
    <div style="overflow-x: auto;">
      <table
        style="width: 100%; border-collapse: collapse; font-family: 'Roboto', sans-serif; font-size: 14px;"
      >
        <thead>
          <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
            <th style="padding: 12px; text-align: left; font-weight: 600;">Tamaño</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Unselected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled + Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error + Selected</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Small</td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",name:"matrix-small-1",value:"1"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",checked:!0,name:"matrix-small-2",value:"2"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",disabled:!0,name:"matrix-small-3",value:"3"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",checked:!0,disabled:!0,name:"matrix-small-4",value:"4"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",error:!0,name:"matrix-small-5",value:"5"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"small",label:"Option",checked:!0,error:!0,name:"matrix-small-6",value:"6"})}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Medium</td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",name:"matrix-medium-1",value:"1"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",checked:!0,name:"matrix-medium-2",value:"2"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",disabled:!0,name:"matrix-medium-3",value:"3"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",checked:!0,disabled:!0,name:"matrix-medium-4",value:"4"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",error:!0,name:"matrix-medium-5",value:"5"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"medium",label:"Option",checked:!0,error:!0,name:"matrix-medium-6",value:"6"})}
            </td>
          </tr>
          <tr>
            <td style="padding: 16px; font-weight: 500;">Large</td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",name:"matrix-large-1",value:"1"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",checked:!0,name:"matrix-large-2",value:"2"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",disabled:!0,name:"matrix-large-3",value:"3"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",checked:!0,disabled:!0,name:"matrix-large-4",value:"4"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",error:!0,name:"matrix-large-5",value:"5"})}
            </td>
            <td style="padding: 16px;">
              ${e({size:"large",label:"Option",checked:!0,error:!0,name:"matrix-large-6",value:"6"})}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `},b={render:()=>a`
    <div
      style="display: flex; flex-direction: column; gap: 32px; font-family: 'Roboto', sans-serif;"
    >
      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Radio Básico</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="group" value="option"&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Opción&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Radio con todos los atributos</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio sb-ui-radio--large sb-ui-radio--error"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="payment" value="card" checked disabled&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Tarjeta de crédito&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Grupo de Radios</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;div&gt;
  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="s"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Small&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="m" checked&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Medium&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="l"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Large&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  `};var v,h,R,$,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Opción de ejemplo',
    checked: false,
    disabled: false,
    error: false,
    noLabel: false,
    block: false,
    name: 'playground',
    value: 'example'
  },
  render: args => createRadio(args)
}`,...(R=(h=l.parameters)==null?void 0:h.docs)==null?void 0:R.source},description:{story:`## 🎮 Playground Interactivo

Prueba todas las combinaciones posibles del radio button.
Cambia los controles en el panel de la derecha para ver el resultado en tiempo real.`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.description}}};var z,k,D,S,_;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Small</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          \${createRadio({
    size: 'small',
    label: 'Unselected',
    name: 'size-small',
    value: 'unselected'
  })}
          \${createRadio({
    size: 'small',
    label: 'Selected',
    checked: true,
    name: 'size-small',
    value: 'selected'
  })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Medium (Default)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          \${createRadio({
    size: 'medium',
    label: 'Unselected',
    name: 'size-medium',
    value: 'unselected'
  })}
          \${createRadio({
    size: 'medium',
    label: 'Selected',
    checked: true,
    name: 'size-medium',
    value: 'selected'
  })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Large</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          \${createRadio({
    size: 'large',
    label: 'Unselected',
    name: 'size-large',
    value: 'unselected'
  })}
          \${createRadio({
    size: 'large',
    label: 'Selected',
    checked: true,
    name: 'size-large',
    value: 'selected'
  })}
        </div>
      </div>
    </div>
  \`
}`,...(D=(k=r.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:`## 📐 Tamaños

El radio button tiene 3 tamaños disponibles:
- **Small**: 16×16px (círculo exterior), 10×10px (punto interior)
- **Medium**: 18×18px (círculo exterior), 12×12px (punto interior) - Default
- **Large**: 24×24px (círculo exterior), 16×16px (punto interior)

El gap entre el círculo y el label es siempre **8px** en todos los tamaños.`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.description}}};var O,L,w,F,B;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      \${createRadio({
    label: 'Unselected',
    name: 'basic-states',
    value: 'unselected'
  })}
      \${createRadio({
    label: 'Selected',
    checked: true,
    name: 'basic-states',
    value: 'selected'
  })}
    </div>
  \`
}`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:`## ⚡ Estados Básicos

Los radios tienen dos estados principales:
- **Unselected**: Círculo blanco con border gris
- **Selected**: Círculo blanco con border gris + punto verde interior`,...(B=(F=o.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var M,C,P,q,A;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        \${createRadio({
    label: 'Disabled Unselected',
    disabled: true,
    name: 'disabled',
    value: 'unselected'
  })}
        \${createRadio({
    label: 'Disabled Selected',
    checked: true,
    disabled: true,
    name: 'disabled',
    value: 'selected'
  })}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #f8f9fa; border-left: 4px solid #6c757d; font-family: 'Roboto', sans-serif; font-size: 14px; color: #495057;"
      >
        💡 <strong>Nota:</strong> Los radios disabled NO muestran halos al hacer hover y el cursor
        es <code>not-allowed</code>.
      </p>
    </div>
  \`
}`,...(P=(C=t.parameters)==null?void 0:C.docs)==null?void 0:P.source},description:{story:`## 🚫 Estado Disabled

Los radios disabled:
- Border y punto interior: gris (#9B9B9B)
- Label: gris (#9B9B9B)
- Sin halos en hover/focus
- Cursor: \`not-allowed\``,...(A=(q=t.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var j,I,G,T,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        \${createRadio({
    label: 'Error Unselected',
    error: true,
    name: 'error',
    value: 'unselected'
  })}
        \${createRadio({
    label: 'Error Selected',
    checked: true,
    error: true,
    name: 'error',
    value: 'selected'
  })}
      </div>
      <p
        style="margin: 0; padding: 12px; background: #fff5f5; border-left: 4px solid #dc3545; font-family: 'Roboto', sans-serif; font-size: 14px; color: #721c24;"
      >
        ⚠️ <strong>Importante:</strong> Solo el border y el punto interior cambian a rojo. El label
        permanece gris para mejor legibilidad.
      </p>
    </div>
  \`
}`,...(G=(I=i.parameters)==null?void 0:I.docs)==null?void 0:G.source},description:{story:`## ❌ Estado Error

El estado error se usa para validación de formularios:
- Border: rojo (#DC3545)
- Punto interior (si está selected): rojo (#DC3545)
- Label: gris normal (#757575) - NO cambia a rojo`,...(U=(T=i.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var V,H,N,W,X;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Hover State (pasa el mouse)
        </h4>
        \${createRadio({
    label: 'Hover me!',
    name: 'hover',
    value: 'hover'
  })}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Pressed State (mantén presionado)
        </h4>
        \${createRadio({
    label: 'Click and hold!',
    name: 'pressed',
    value: 'pressed'
  })}
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Focus State (usa Tab para navegar)
        </h4>
        \${createRadio({
    label: 'Tab here!',
    name: 'focus',
    value: 'focus'
  })}
      </div>

      <p
        style="margin: 0; padding: 12px; background: #e7f5ff; border-left: 4px solid #0c8599; font-family: 'Roboto', sans-serif; font-size: 14px; color: #0c5460;"
      >
        ℹ️ <strong>Info:</strong> Los halos NO aparecen cuando el radio está disabled.
      </p>
    </div>
  \`
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:`## 🎨 Estados Interactivos (Hover, Pressed, Focus)

Los radios tienen feedback visual mediante halos:
- **Hover**: Halo verde claro (32×32px, opacity 0.7)
- **Pressed**: Doble halo (outer: 32×32px, inner: 28×28px)
- **Focus**: Halo verde más claro (32×32px, opacity 0.7)

💡 Pasa el mouse y haz click en los radios para ver los halos.`,...(X=(W=s.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};var J,K,Q,Y,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Método de Pago
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          \${createRadio({
    label: 'Tarjeta de crédito',
    checked: true,
    name: 'payment',
    value: 'card'
  })}
          \${createRadio({
    label: 'Transferencia bancaria',
    name: 'payment',
    value: 'transfer'
  })}
          \${createRadio({
    label: 'PayPal',
    name: 'payment',
    value: 'paypal'
  })}
          \${createRadio({
    label: 'Efectivo',
    name: 'payment',
    value: 'cash'
  })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">Tamaño</h4>
        <div style="display: flex; gap: 16px;">
          \${createRadio({
    label: 'S',
    name: 'size',
    value: 's'
  })}
          \${createRadio({
    label: 'M',
    checked: true,
    name: 'size',
    value: 'm'
  })}
          \${createRadio({
    label: 'L',
    name: 'size',
    value: 'l'
  })}
          \${createRadio({
    label: 'XL',
    name: 'size',
    value: 'xl'
  })}
        </div>
      </div>
    </div>
  \`
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"## 🔗 Grupos de Radios\n\nLos radios se agrupan usando el atributo `name`. Solo uno puede estar seleccionado por grupo.",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,ne,le,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          No Label (solo círculo)
        </h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          \${createRadio({
    noLabel: true,
    name: 'no-label',
    value: 'unselected'
  })}
          \${createRadio({
    checked: true,
    noLabel: true,
    name: 'no-label',
    value: 'selected'
  })}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-family: 'Roboto', sans-serif; color: #333;">
          Block (ancho completo)
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          \${createRadio({
    label: 'Opción 1',
    block: true,
    checked: true,
    name: 'block',
    value: '1'
  })}
          \${createRadio({
    label: 'Opción 2',
    block: true,
    name: 'block',
    value: '2'
  })}
          \${createRadio({
    label: 'Opción 3',
    block: true,
    name: 'block',
    value: '3'
  })}
        </div>
      </div>
    </div>
  \`
}`,...(ne=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:`## 🔧 Modificadores

Modificadores adicionales para casos especiales:
- **No Label**: Solo el círculo (útil para casos donde el label es visual en otro lugar)
- **Block**: Ancho completo (útil en formularios)
- **Vertical**: Label arriba del círculo (útil para textos largos)`,...(re=(le=p.parameters)==null?void 0:le.docs)==null?void 0:re.description}}};var oe,te,ie,se,de;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width: 400px;">
      <form
        id="radio-form"
        style="display: flex; flex-direction: column; gap: 20px; padding: 24px; border: 1px solid #dee2e6; border-radius: 8px; background: #f8f9fa;"
      >
        <div>
          <label
            style="display: block; margin-bottom: 8px; font-weight: 500; font-family: 'Roboto', sans-serif; color: #212529;"
          >
            Selecciona una opción *
          </label>
          <div id="radio-group" style="display: flex; flex-direction: column; gap: 12px;">
            \${createRadio({
    label: 'Opción A',
    name: 'required-option',
    value: 'a'
  })}
            \${createRadio({
    label: 'Opción B',
    name: 'required-option',
    value: 'b'
  })}
            \${createRadio({
    label: 'Opción C',
    name: 'required-option',
    value: 'c'
  })}
          </div>
          <span
            id="error-message"
            style="display: none; margin-top: 8px; font-size: 14px; color: #dc3545; font-family: 'Roboto', sans-serif;"
          >
            ⚠️ Debes seleccionar una opción
          </span>
        </div>

        <button
          type="submit"
          style="padding: 12px 24px; background: #009056; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; font-family: 'Roboto', sans-serif;"
        >
          Enviar
        </button>

        <div
          id="result"
          style="display: none; padding: 12px; background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; color: #0c5460; font-family: 'Roboto', sans-serif; font-size: 14px;"
        ></div>
      </form>
    </div>

    <script>
      (function () {
        const form = document.getElementById('radio-form');
        const radioGroup = document.getElementById('radio-group');
        const errorMessage = document.getElementById('error-message');
        const result = document.getElementById('result');

        if (form && radioGroup && errorMessage && result) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedRadio = form.querySelector('input[name="required-option"]:checked');
            const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');

            if (!selectedRadio) {
              // Mostrar error
              allRadios.forEach((radio) => radio.classList.add('sb-ui-radio--error'));
              errorMessage.style.display = 'block';
              result.style.display = 'none';
            } else {
              // Limpiar error y mostrar resultado
              allRadios.forEach((radio) => radio.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
              result.style.display = 'block';
              result.textContent = \\\`✅ Opción seleccionada: \\\${selectedRadio.value.toUpperCase()}\\\`;
            }
          });

          // Limpiar error al seleccionar
          const radios = form.querySelectorAll('input[name="required-option"]');
          radios.forEach((radio) => {
            radio.addEventListener('change', () => {
              const allRadios = radioGroup.querySelectorAll('.sb-ui-radio');
              allRadios.forEach((r) => r.classList.remove('sb-ui-radio--error'));
              errorMessage.style.display = 'none';
            });
          });
        }
      })();
    <\/script>
  \`
}`,...(ie=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:`## 📋 Validación de Formularios

Ejemplo de uso del estado error en validación de formularios.
El radio se marca como error cuando no se selecciona ninguna opción.`,...(de=(se=c.parameters)==null?void 0:se.docs)==null?void 0:de.description}}};var pe,ce,ue,me,be;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <!-- Ejemplo 1: Selector de plan -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          Selecciona tu plan
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            \${createRadio({
    label: 'Plan Básico - $9.99/mes',
    checked: true,
    name: 'plan',
    value: 'basic'
  })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Ideal para uso personal. Incluye 10GB de almacenamiento.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            \${createRadio({
    label: 'Plan Pro - $19.99/mes',
    name: 'plan',
    value: 'pro'
  })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Para equipos pequeños. 100GB de almacenamiento + colaboración.
            </p>
          </div>

          <div
            style="padding: 16px; border: 2px solid #dee2e6; border-radius: 8px; transition: border-color 0.2s;"
          >
            \${createRadio({
    label: 'Plan Enterprise - Contactar',
    name: 'plan',
    value: 'enterprise'
  })}
            <p
              style="margin: 8px 0 0 34px; font-size: 14px; color: #6c757d; font-family: 'Roboto', sans-serif;"
            >
              Solución personalizada para grandes organizaciones.
            </p>
          </div>
        </div>
      </div>

      <!-- Ejemplo 2: Opciones de envío -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          Método de envío
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          \${createRadio({
    label: 'Envío estándar (5-7 días) - Gratis',
    checked: true,
    name: 'shipping',
    value: 'standard'
  })}
          \${createRadio({
    label: 'Envío express (2-3 días) - $9.99',
    name: 'shipping',
    value: 'express'
  })}
          \${createRadio({
    label: 'Envío prioritario (1 día) - $19.99',
    name: 'shipping',
    value: 'priority'
  })}
        </div>
      </div>

      <!-- Ejemplo 3: Pregunta de encuesta -->
      <div style="max-width: 500px;">
        <h4 style="margin: 0 0 16px 0; font-family: 'Roboto', sans-serif; color: #212529;">
          ¿Cómo calificarías nuestro servicio?
        </h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          \${createRadio({
    label: 'Excelente',
    name: 'rating',
    value: 'excellent',
    size: 'large'
  })}
          \${createRadio({
    label: 'Bueno',
    name: 'rating',
    value: 'good',
    size: 'large'
  })}
          \${createRadio({
    label: 'Regular',
    name: 'rating',
    value: 'fair',
    size: 'large'
  })}
          \${createRadio({
    label: 'Malo',
    name: 'rating',
    value: 'poor',
    size: 'large'
  })}
        </div>
      </div>
    </div>
  \`
}`,...(ue=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:`## 🌍 Ejemplos del Mundo Real

Casos de uso comunes en aplicaciones reales.`,...(be=(me=u.parameters)==null?void 0:me.docs)==null?void 0:be.description}}};var xe,ge,fe,ye,ve;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => html\`
    <div style="overflow-x: auto;">
      <table
        style="width: 100%; border-collapse: collapse; font-family: 'Roboto', sans-serif; font-size: 14px;"
      >
        <thead>
          <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
            <th style="padding: 12px; text-align: left; font-weight: 600;">Tamaño</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Unselected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Disabled + Selected</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error</th>
            <th style="padding: 12px; text-align: left; font-weight: 600;">Error + Selected</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Small</td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    name: 'matrix-small-1',
    value: '1'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    checked: true,
    name: 'matrix-small-2',
    value: '2'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    disabled: true,
    name: 'matrix-small-3',
    value: '3'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    checked: true,
    disabled: true,
    name: 'matrix-small-4',
    value: '4'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    error: true,
    name: 'matrix-small-5',
    value: '5'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'small',
    label: 'Option',
    checked: true,
    error: true,
    name: 'matrix-small-6',
    value: '6'
  })}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 16px; font-weight: 500;">Medium</td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    name: 'matrix-medium-1',
    value: '1'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    checked: true,
    name: 'matrix-medium-2',
    value: '2'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    disabled: true,
    name: 'matrix-medium-3',
    value: '3'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    checked: true,
    disabled: true,
    name: 'matrix-medium-4',
    value: '4'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    error: true,
    name: 'matrix-medium-5',
    value: '5'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'medium',
    label: 'Option',
    checked: true,
    error: true,
    name: 'matrix-medium-6',
    value: '6'
  })}
            </td>
          </tr>
          <tr>
            <td style="padding: 16px; font-weight: 500;">Large</td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    name: 'matrix-large-1',
    value: '1'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    checked: true,
    name: 'matrix-large-2',
    value: '2'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    disabled: true,
    name: 'matrix-large-3',
    value: '3'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    checked: true,
    disabled: true,
    name: 'matrix-large-4',
    value: '4'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    error: true,
    name: 'matrix-large-5',
    value: '5'
  })}
            </td>
            <td style="padding: 16px;">
              \${createRadio({
    size: 'large',
    label: 'Option',
    checked: true,
    error: true,
    name: 'matrix-large-6',
    value: '6'
  })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
}`,...(fe=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:`## 📊 Matriz Completa de Estados

Tabla completa mostrando todas las combinaciones de estados y tamaños.`,...(ve=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};var he,Re,$e,Ee,ze;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-direction: column; gap: 32px; font-family: 'Roboto', sans-serif;"
    >
      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Radio Básico</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="group" value="option"&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Opción&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Radio con todos los atributos</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;label class="sb-ui-radio sb-ui-radio--large sb-ui-radio--error"&gt;
  &lt;input type="radio" class="sb-ui-radio__input" name="payment" value="card" checked disabled&gt;
  &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
  &lt;span class="sb-ui-radio__label"&gt;Tarjeta de crédito&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #212529;">Grupo de Radios</h4>
        <pre
          style="background: #f8f9fa; padding: 16px; border-radius: 4px; overflow-x: auto; margin: 0; border: 1px solid #dee2e6;"
        ><code>&lt;div&gt;
  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="s"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Small&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="m" checked&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Medium&lt;/span&gt;
  &lt;/label&gt;

  &lt;label class="sb-ui-radio"&gt;
    &lt;input type="radio" class="sb-ui-radio__input" name="size" value="l"&gt;
    &lt;span class="sb-ui-radio__circle"&gt;&lt;/span&gt;
    &lt;span class="sb-ui-radio__label"&gt;Large&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  \`
}`,...($e=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:$e.source},description:{story:`## 💻 Código HTML

Ejemplos de código HTML listo para copiar y pegar.`,...(ze=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:ze.description}}};const Pe=["Playground","Sizes","BasicStates","DisabledState","ErrorState","InteractiveStates","RadioGroups","Modifiers","FormValidation","RealWorldExamples","StateMatrix","CodeExamples"];export{o as BasicStates,b as CodeExamples,t as DisabledState,i as ErrorState,c as FormValidation,s as InteractiveStates,p as Modifiers,l as Playground,d as RadioGroups,u as RealWorldExamples,r as Sizes,m as StateMatrix,Pe as __namedExportsOrder,Ce as default};
