import{x as i}from"./lit-element-BQ2u6o3f.js";var u=Object.freeze,G=Object.defineProperty,r=(e,a)=>u(G(e,"raw",{value:u(e.slice())})),p,m,b,g,y,f;const Q={title:"Atoms/DatePicker",tags:["autodocs"],parameters:{docs:{description:{component:"Componente DatePicker con input estilizado y calendario desplegable. Soporta selección única, rangos y múltiples fechas."}}},argTypes:{variant:{control:"select",options:["single","range","multiple"],description:"Modo de selección",table:{type:{summary:"string"},defaultValue:{summary:"single"}}},placeholder:{control:"text",description:"Texto placeholder",table:{type:{summary:"string"},defaultValue:{summary:"Seleccionar fecha"}}},disabled:{control:"boolean",description:"Deshabilitar el componente",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},error:{control:"boolean",description:"Estado de error",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},locale:{control:"text",description:"Idioma (es-ES, en-US, etc.)",table:{type:{summary:"string"},defaultValue:{summary:"es-ES"}}}}},o={args:{variant:"single",placeholder:"Seleccionar fecha",disabled:!1,error:!1,locale:"es-ES"},render:e=>i(p||(p=r([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .datepicker-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
      }
    </style>

    <div class="datepicker-playground">
      <label class="sb-ui-input-label">Fecha</label>
      <sb-ui-date-picker
        variant="`,`"
        placeholder="`,`"
        ?disabled="`,`"
        ?error="`,`"
        locale="`,`"
        @datepicker-change="`,`"
      ></sb-ui-date-picker>
      <div class="output" id="output-playground">Selecciona una fecha...</div>
    </div>
  `])),e.variant,e.placeholder,e.disabled,e.error,e.locale,a=>{const n=document.getElementById("output-playground");n&&(n.textContent=JSON.stringify(a.detail,null,2))})},t={render:()=>i(m||(m=r([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Fecha de nacimiento</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          @datepicker-change="`,`"
        ></sb-ui-date-picker>
        <div class="output" id="output-single">No hay fecha seleccionada</div>
      </div>
    </div>
  `])),e=>{const a=document.getElementById("output-single");a&&(a.textContent=`Seleccionado: ${e.detail.formattedValue||"ninguno"}`)})},s={render:()=>i(b||(b=r([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Rango de fechas</label>
        <sb-ui-date-picker
          variant="range"
          placeholder="Seleccionar rango"
          @datepicker-change="`,`"
        ></sb-ui-date-picker>
        <div class="output" id="output-range">No hay rango seleccionado</div>
      </div>
    </div>
  `])),e=>{const a=document.getElementById("output-range");a&&(a.textContent=`Rango: ${e.detail.formattedValue||"ninguno seleccionado"}`)})},l={render:()=>i(g||(g=r([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .demo-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <h4>Normal</h4>
        <label class="sb-ui-input-label">Fecha de viaje</label>
        <sb-ui-date-picker variant="single" placeholder="Seleccionar fecha"></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Disabled</h4>
        <label class="sb-ui-input-label">Fecha bloqueada</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="No disponible"
          disabled
        ></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Error</h4>
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha requerida</label>
        <sb-ui-date-picker variant="single" placeholder="Campo obligatorio" error></sb-ui-date-picker>
        <span class="sb-ui-input-helper sb-ui-input-helper--error">
          <i class="fa-solid fa-circle-xmark"></i>
          Este campo es obligatorio
        </span>
      </div>
    </div>
  `])))},d={render:()=>{const e=new Date,a=new Date(e),n=new Date(e);return n.setDate(e.getDate()+30),i(y||(y=r([`
      <script type="module">
        import '@sb-ui/molecules';
      <\/script>
      <style>
        .demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
      </style>

      <div class="demo">
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: Hoy (`,`)</li>
            <li>Fecha máxima: `,`</li>
          </ul>
        </div>

        <label class="sb-ui-input-label">Seleccionar fecha de reserva</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="Solo próximos 30 días"
          min-date="`,`"
          max-date="`,`"
        ></sb-ui-date-picker>
      </div>
    `])),e.toLocaleDateString("es-ES"),n.toLocaleDateString("es-ES"),a.toISOString().split("T")[0],n.toISOString().split("T")[0])}},c={render:()=>i(f||(f=r([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .form-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .form-demo h3 {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .form-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>

    <div class="form-demo">
      <h3>Reserva de Viaje</h3>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de salida</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="departure"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de regreso</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="return"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label">Rango alternativo</label>
        <sb-ui-date-picker variant="range" placeholder="Seleccionar rango"></sb-ui-date-picker>
      </div>

      <div class="form-actions">
        <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Buscar</button>
        <button class="sb-ui-button sb-ui-button--tertiary">Cancelar</button>
      </div>
    </div>
  `])))};var v,h,x,k,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'single',
    placeholder: 'Seleccionar fecha',
    disabled: false,
    error: false,
    locale: 'es-ES'
  },
  render: args => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .datepicker-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
      }
    </style>

    <div class="datepicker-playground">
      <label class="sb-ui-input-label">Fecha</label>
      <sb-ui-date-picker
        variant="\${args.variant}"
        placeholder="\${args.placeholder}"
        ?disabled="\${args.disabled}"
        ?error="\${args.error}"
        locale="\${args.locale}"
        @datepicker-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-playground');
    if (output) {
      output.textContent = JSON.stringify(e.detail, null, 2);
    }
  }}"
      ></sb-ui-date-picker>
      <div class="output" id="output-playground">Selecciona una fecha...</div>
    </div>
  \`
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:`## Playground (Interactivo)

Experimenta con el DatePicker y sus diferentes configuraciones.`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var D,F,E,w,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Fecha de nacimiento</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          @datepicker-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-single');
    if (output) {
      output.textContent = \`Seleccionado: \${e.detail.formattedValue || 'ninguno'}\`;
    }
  }}"
        ></sb-ui-date-picker>
        <div class="output" id="output-single">No hay fecha seleccionada</div>
      </div>
    </div>
  \`
}`,...(E=(F=t.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:`## Single Selection

DatePicker en modo de selección única (más común).`,...(R=(w=t.parameters)==null?void 0:w.docs)==null?void 0:R.description}}};var Y,C,$,V,_;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Rango de fechas</label>
        <sb-ui-date-picker
          variant="range"
          placeholder="Seleccionar rango"
          @datepicker-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-range');
    if (output) {
      output.textContent = \`Rango: \${e.detail.formattedValue || 'ninguno seleccionado'}\`;
    }
  }}"
        ></sb-ui-date-picker>
        <div class="output" id="output-range">No hay rango seleccionado</div>
      </div>
    </div>
  \`
}`,...($=(C=s.parameters)==null?void 0:C.docs)==null?void 0:$.source},description:{story:`## Range Selection

DatePicker en modo rango para seleccionar fechas de inicio y fin.`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var M,P,I,L,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .demo-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <h4>Normal</h4>
        <label class="sb-ui-input-label">Fecha de viaje</label>
        <sb-ui-date-picker variant="single" placeholder="Seleccionar fecha"></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Disabled</h4>
        <label class="sb-ui-input-label">Fecha bloqueada</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="No disponible"
          disabled
        ></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Error</h4>
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha requerida</label>
        <sb-ui-date-picker variant="single" placeholder="Campo obligatorio" error></sb-ui-date-picker>
        <span class="sb-ui-input-helper sb-ui-input-helper--error">
          <i class="fa-solid fa-circle-xmark"></i>
          Este campo es obligatorio
        </span>
      </div>
    </div>
  \`
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:`## Estados

Diferentes estados del DatePicker (normal, disabled, error).`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.description}}};var N,z,O,B,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30);
    return html\`
      <script type="module">
        import '@sb-ui/molecules';
      <\/script>
      <style>
        .demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
      </style>

      <div class="demo">
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: Hoy (\${today.toLocaleDateString('es-ES')})</li>
            <li>Fecha máxima: \${maxDate.toLocaleDateString('es-ES')}</li>
          </ul>
        </div>

        <label class="sb-ui-input-label">Seleccionar fecha de reserva</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="Solo próximos 30 días"
          min-date="\${minDate.toISOString().split('T')[0]}"
          max-date="\${maxDate.toISOString().split('T')[0]}"
        ></sb-ui-date-picker>
      </div>
    \`;
  }
}`,...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:`## Con Validación

DatePicker con fechas mínimas y máximas.`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.description}}};var T,A,H,J,U;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .form-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .form-demo h3 {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .form-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>

    <div class="form-demo">
      <h3>Reserva de Viaje</h3>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de salida</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="departure"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de regreso</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="return"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label">Rango alternativo</label>
        <sb-ui-date-picker variant="range" placeholder="Seleccionar rango"></sb-ui-date-picker>
      </div>

      <div class="form-actions">
        <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Buscar</button>
        <button class="sb-ui-button sb-ui-button--tertiary">Cancelar</button>
      </div>
    </div>
  \`
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source},description:{story:`## Formulario Completo

Ejemplo de DatePicker integrado en un formulario.`,...(U=(J=c.parameters)==null?void 0:J.docs)==null?void 0:U.description}}};const W=["Playground","SingleSelection","RangeSelection","Estados","ConValidacion","FormularioCompleto"];export{d as ConValidacion,l as Estados,c as FormularioCompleto,o as Playground,s as RangeSelection,t as SingleSelection,W as __namedExportsOrder,Q as default};
