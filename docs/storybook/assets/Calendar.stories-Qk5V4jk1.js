import{x as a}from"./lit-element-CFKcR9Rr.js";var m=Object.freeze,G=Object.defineProperty,t=(e,n)=>m(G(e,"raw",{value:m(e.slice())})),p,u,g,y,b,v;const K={title:"Atoms/Calendar",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de calendario interactivo Web Component con soporte para selección única, rangos y múltiples fechas."}}},argTypes:{variant:{control:"select",options:["single","range","multiple"],description:"Modo de selección del calendario",table:{type:{summary:"string"},defaultValue:{summary:"single"}}},locale:{control:"text",description:"Idioma del calendario (es-ES, en-US, etc.)",table:{type:{summary:"string"},defaultValue:{summary:"es-ES"}}},minDate:{control:"text",description:"Fecha mínima seleccionable (YYYY-MM-DD)",table:{type:{summary:"string"}}},maxDate:{control:"text",description:"Fecha máxima seleccionable (YYYY-MM-DD)",table:{type:{summary:"string"}}}}},o={args:{variant:"single",locale:"es-ES",minDate:"",maxDate:""},render:e=>a(p||(p=t([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 400px;
        margin: 0 auto;
      }
    </style>

    <div class="calendar-playground">
      <sb-ui-calendar
        variant="`,`"
        locale="`,`"
        min-date="`,`"
        max-date="`,`"
        @calendar-change="`,`"
      ></sb-ui-calendar>

      <div
        style="margin-top: 1rem; padding: 1rem; background: var(--sb-ui-color-grayscale-L300); border-radius: 8px;"
      >
        <strong>Evento:</strong> Revisa la consola para ver los cambios
      </div>
    </div>
  `])),e.variant,e.locale,e.minDate||"",e.maxDate||"",n=>{console.log("Calendar changed:",n.detail)})},i={render:()=>a(u||(u=t([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Simple</h3>
      <sb-ui-calendar
        variant="single"
        locale="es-ES"
        @calendar-change="`,`"
      ></sb-ui-calendar>
      <div class="output" id="output-single">Selecciona una fecha...</div>
    </div>
  `])),e=>{const n=document.getElementById("output-single");n&&(n.textContent=`Fecha seleccionada: ${JSON.stringify(e.detail,null,2)}`)})},r={render:()=>a(g||(g=t([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección de Rango</h3>
      <sb-ui-calendar
        variant="range"
        locale="es-ES"
        @calendar-change="`,`"
      ></sb-ui-calendar>
      <div class="output" id="output-range">Selecciona un rango de fechas...</div>
    </div>
  `])),e=>{const n=document.getElementById("output-range");n&&(n.textContent=`Rango: ${JSON.stringify(e.detail,null,2)}`)})},s={render:()=>a(y||(y=t([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
        max-height: 200px;
        overflow-y: auto;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Múltiple</h3>
      <sb-ui-calendar
        variant="multiple"
        locale="es-ES"
        @calendar-change="`,`"
      ></sb-ui-calendar>
      <div class="output" id="output-multiple">Selecciona múltiples fechas...</div>
    </div>
  `])),e=>{const n=document.getElementById("output-multiple");n&&(n.textContent=`Fechas: ${JSON.stringify(e.detail,null,2)}`)})},l={render:()=>{const e=new Date,n=new Date(e);n.setDate(e.getDate()-7);const c=new Date(e);return c.setDate(e.getDate()+30),a(b||(b=t([`
      <script type="module">
        import '@sb-ui/molecules';
      <\/script>
      <style>
        .calendar-demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      </style>

      <div class="calendar-demo">
        <h3>Calendario con Restricciones</h3>
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: `,`</li>
            <li>Fecha máxima: `,`</li>
          </ul>
        </div>
        <sb-ui-calendar
          variant="single"
          locale="es-ES"
          min-date="`,`"
          max-date="`,`"
        ></sb-ui-calendar>
      </div>
    `])),n.toLocaleDateString("es-ES"),c.toLocaleDateString("es-ES"),n.toISOString().split("T")[0],c.toISOString().split("T")[0])}},d={render:()=>a(v||(v=t([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .locales-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .locale-demo {
        padding: 1rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .locale-demo h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="locales-demo">
      <div class="locale-demo">
        <h4>Español (es-ES)</h4>
        <sb-ui-calendar variant="single" locale="es-ES"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>English (en-US)</h4>
        <sb-ui-calendar variant="single" locale="en-US"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>Français (fr-FR)</h4>
        <sb-ui-calendar variant="single" locale="fr-FR"></sb-ui-calendar>
      </div>
    </div>
  `])))};var f,x,h,S,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'single',
    locale: 'es-ES',
    minDate: '',
    maxDate: ''
  },
  render: args => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 400px;
        margin: 0 auto;
      }
    </style>

    <div class="calendar-playground">
      <sb-ui-calendar
        variant="\${args.variant}"
        locale="\${args.locale}"
        min-date="\${args.minDate || ''}"
        max-date="\${args.maxDate || ''}"
        @calendar-change="\${(e: CustomEvent) => {
    console.log('Calendar changed:', e.detail);
  }}"
      ></sb-ui-calendar>

      <div
        style="margin-top: 1rem; padding: 1rem; background: var(--sb-ui-color-grayscale-L300); border-radius: 8px;"
      >
        <strong>Evento:</strong> Revisa la consola para ver los cambios
      </div>
    </div>
  \`
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:`## Playground (Interactivo)

Experimenta con el calendario y sus diferentes modos de selección.`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var E,F,R,w,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Simple</h3>
      <sb-ui-calendar
        variant="single"
        locale="es-ES"
        @calendar-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-single');
    if (output) {
      output.textContent = \`Fecha seleccionada: \${JSON.stringify(e.detail, null, 2)}\`;
    }
  }}"
      ></sb-ui-calendar>
      <div class="output" id="output-single">Selecciona una fecha...</div>
    </div>
  \`
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:`## Single Selection

Modo de selección única - selecciona una sola fecha a la vez.`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var $,k,I,M,L;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección de Rango</h3>
      <sb-ui-calendar
        variant="range"
        locale="es-ES"
        @calendar-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-range');
    if (output) {
      output.textContent = \`Rango: \${JSON.stringify(e.detail, null, 2)}\`;
    }
  }}"
      ></sb-ui-calendar>
      <div class="output" id="output-range">Selecciona un rango de fechas...</div>
    </div>
  \`
}`,...(I=(k=r.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:`## Range Selection

Modo de selección de rango - selecciona un rango de fechas (inicio y fin).`,...(L=(M=r.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var _,O,Y,A,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
        max-height: 200px;
        overflow-y: auto;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Múltiple</h3>
      <sb-ui-calendar
        variant="multiple"
        locale="es-ES"
        @calendar-change="\${(e: CustomEvent) => {
    const output = document.getElementById('output-multiple');
    if (output) {
      output.textContent = \`Fechas: \${JSON.stringify(e.detail, null, 2)}\`;
    }
  }}"
      ></sb-ui-calendar>
      <div class="output" id="output-multiple">Selecciona múltiples fechas...</div>
    </div>
  \`
}`,...(Y=(O=s.parameters)==null?void 0:O.docs)==null?void 0:Y.source},description:{story:`## Multiple Selection

Modo de selección múltiple - selecciona múltiples fechas individuales.`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var J,N,P,T,U;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7); // 7 días atrás
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30); // 30 días adelante

    return html\`
      <script type="module">
        import '@sb-ui/molecules';
      <\/script>
      <style>
        .calendar-demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      </style>

      <div class="calendar-demo">
        <h3>Calendario con Restricciones</h3>
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: \${minDate.toLocaleDateString('es-ES')}</li>
            <li>Fecha máxima: \${maxDate.toLocaleDateString('es-ES')}</li>
          </ul>
        </div>
        <sb-ui-calendar
          variant="single"
          locale="es-ES"
          min-date="\${minDate.toISOString().split('T')[0]}"
          max-date="\${maxDate.toISOString().split('T')[0]}"
        ></sb-ui-calendar>
      </div>
    \`;
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:`## Con Validación (Min/Max)

Calendario con fechas mínimas y máximas.`,...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var V,z,j,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .locales-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .locale-demo {
        padding: 1rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .locale-demo h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="locales-demo">
      <div class="locale-demo">
        <h4>Español (es-ES)</h4>
        <sb-ui-calendar variant="single" locale="es-ES"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>English (en-US)</h4>
        <sb-ui-calendar variant="single" locale="en-US"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>Français (fr-FR)</h4>
        <sb-ui-calendar variant="single" locale="fr-FR"></sb-ui-calendar>
      </div>
    </div>
  \`
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source},description:{story:"## Diferentes Idiomas\n\nEl calendario soporta múltiples idiomas usando el atributo `locale`.",...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};const Q=["Playground","SingleSelection","RangeSelection","MultipleSelection","ConValidacion","DiferentesIdiomas"];export{l as ConValidacion,d as DiferentesIdiomas,s as MultipleSelection,o as Playground,r as RangeSelection,i as SingleSelection,Q as __namedExportsOrder,K as default};
