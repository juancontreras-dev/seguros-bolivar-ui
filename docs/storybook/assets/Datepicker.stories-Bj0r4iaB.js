import{x as r}from"./lit-element-CFKcR9Rr.js";const j={title:"Molecules/Datepicker",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Datepicker interactivo con calendario. Este es un Web Component que requiere JavaScript."},story:{inline:!1,iframeHeight:"800px"}},viewport:{defaultViewport:"desktop"}},argTypes:{label:{control:"text",description:"Etiqueta del campo",table:{type:{summary:"string"}}},value:{control:"text",description:"Fecha seleccionada (YYYY-MM-DD)",table:{type:{summary:"string"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del datepicker",table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Deshabilitar el datepicker",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},a={args:{label:"Selecciona una fecha",value:"2024-01-15",size:"medium",disabled:!1},parameters:{docs:{story:{iframeHeight:"700px"}}},render:e=>r`
    <div style="padding: 3rem; min-height: 600px;">
      <sb-ui-datepicker
        label="${e.label}"
        value="${e.value}"
        size="${e.size}"
        ?disabled="${e.disabled}"
      ></sb-ui-datepicker>
      
      <div style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;">
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real.
        Los cambios se aplican automáticamente al datepicker.
      </div>
    </div>
  `},i={parameters:{docs:{story:{iframeHeight:"700px"}}},render:()=>{const e=new Date().toISOString().split("T")[0],d=new Date(Date.now()+30*864e5).toISOString().split("T")[0];return r`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Rango Limitado</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Solo puedes seleccionar desde hoy hasta 30 días en el futuro
        </p>
        <sb-ui-datepicker
          label="Fecha de entrega"
          min-date="${e}"
          max-date="${d}"
        ></sb-ui-datepicker>
      </div>
    `}},n={parameters:{docs:{story:{iframeHeight:"700px"}}},render:()=>{const e=new Date().toISOString().split("T")[0],d=new Date(Date.now()+864e5).toISOString().split("T")[0];return r`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Fechas Deshabilitadas</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Hoy y mañana están deshabilitados
        </p>
        <sb-ui-datepicker
          label="Selecciona una fecha"
          disabled-dates="${e},${d}"
        ></sb-ui-datepicker>
      </div>
    `}},t={parameters:{docs:{story:{iframeHeight:"700px"}}},render:()=>r`
    <div style="padding: 3rem; min-height: 600px;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Selección de Rango de Fechas</h3>
      <p style="margin-bottom: 1.5rem; color: #666; font-size: 0.875rem;">
        Selecciona una fecha de inicio y una de fin para definir un período
      </p>
      
      <sb-ui-datepicker
        variant="range"
        label="Período de viaje"
        placeholder="DD/MM/YYYY - DD/MM/YYYY"
      ></sb-ui-datepicker>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <p style="margin: 0 0 0.5rem 0;"><strong>💡 Cómo funciona:</strong></p>
        <ol style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
          <li>Haz clic en el campo o icono de calendario</li>
          <li>Selecciona la <strong>fecha de inicio</strong></li>
          <li>Selecciona la <strong>fecha de fin</strong></li>
          <li>Todas las fechas entre ambas se resaltan</li>
        </ol>
      </div>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>⚙️ Uso:</strong> Agrega el atributo <code style="background: #FFF; padding: 0.125rem 0.25rem; border-radius: 2px;">variant="range"</code> al datepicker:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"
        ><code>&lt;sb-ui-datepicker
  variant="range"
  label="Período"
  placeholder="DD/MM/YYYY - DD/MM/YYYY"
&gt;&lt;/sb-ui-datepicker&gt;</code></pre>
      </div>
    </div>
  `},o={parameters:{docs:{story:{iframeHeight:"1000px"}}},render:()=>r`
    <div style="padding: 3rem; min-height: 800px; display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Small</h4>
        <sb-ui-datepicker label="Fecha (Small)" size="small"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Medium (Default)</h4>
        <sb-ui-datepicker label="Fecha (Medium)" size="medium"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Large</h4>
        <sb-ui-datepicker label="Fecha (Large)" size="large"></sb-ui-datepicker>
      </div>
    </div>
  `},s={parameters:{docs:{story:{iframeHeight:"900px"}}},render:()=>r`
    <div style="padding: 3rem; min-height: 700px; max-width: 800px; margin: 0 auto;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Formulario de Reserva</h3>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <sb-ui-datepicker
          label="Fecha de inicio"
          value="2024-01-15"
        ></sb-ui-datepicker>

        <sb-ui-datepicker
          label="Fecha de fin"
          value="2024-01-20"
        ></sb-ui-datepicker>

        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
          onclick="alert('Formulario enviado!')"
        >
          Confirmar Reserva
        </button>
      </div>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>💡 Nota:</strong> Este componente requiere JavaScript. Asegúrate de incluir el
          script:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto;"
        ><code>&lt;script type="module" src="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  `};var l,c,m,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Selecciona una fecha',
    value: '2024-01-15',
    size: 'medium',
    disabled: false
  },
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: args => html\`
    <div style="padding: 3rem; min-height: 600px;">
      <sb-ui-datepicker
        label="\${args.label}"
        value="\${args.value}"
        size="\${args.size}"
        ?disabled="\${args.disabled}"
      ></sb-ui-datepicker>
      
      <div style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;">
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real.
        Los cambios se aplican automáticamente al datepicker.
      </div>
    </div>
  \`
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Datepicker básico con todas las opciones configurables",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var g,b,h,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: () => {
    const hoy = new Date().toISOString().split('T')[0];
    const maxDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
    return html\`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Rango Limitado</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Solo puedes seleccionar desde hoy hasta 30 días en el futuro
        </p>
        <sb-ui-datepicker
          label="Fecha de entrega"
          min-date="\${hoy}"
          max-date="\${maxDate}"
        ></sb-ui-datepicker>
      </div>
    \`;
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Datepicker con fecha mínima y máxima",...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var x,f,k,D,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: () => {
    const hoy = new Date().toISOString().split('T')[0];
    const manana = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    return html\`
      <div style="padding: 3rem; min-height: 600px;">
        <h3 style="margin-bottom: 1rem; color: #038450;">Datepicker con Fechas Deshabilitadas</h3>
        <p style="margin-bottom: 1rem; color: #666; font-size: 0.875rem;">
          Hoy y mañana están deshabilitados
        </p>
        <sb-ui-datepicker
          label="Selecciona una fecha"
          disabled-dates="\${hoy},\${manana}"
        ></sb-ui-datepicker>
      </div>
    \`;
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"Datepicker con fechas deshabilitadas",...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var S,Y,z,E,M;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 3rem; min-height: 600px;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Selección de Rango de Fechas</h3>
      <p style="margin-bottom: 1.5rem; color: #666; font-size: 0.875rem;">
        Selecciona una fecha de inicio y una de fin para definir un período
      </p>
      
      <sb-ui-datepicker
        variant="range"
        label="Período de viaje"
        placeholder="DD/MM/YYYY - DD/MM/YYYY"
      ></sb-ui-datepicker>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <p style="margin: 0 0 0.5rem 0;"><strong>💡 Cómo funciona:</strong></p>
        <ol style="margin: 0; padding-left: 1.5rem; line-height: 1.6;">
          <li>Haz clic en el campo o icono de calendario</li>
          <li>Selecciona la <strong>fecha de inicio</strong></li>
          <li>Selecciona la <strong>fecha de fin</strong></li>
          <li>Todas las fechas entre ambas se resaltan</li>
        </ol>
      </div>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>⚙️ Uso:</strong> Agrega el atributo <code style="background: #FFF; padding: 0.125rem 0.25rem; border-radius: 2px;">variant="range"</code> al datepicker:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"
        ><code>&lt;sb-ui-datepicker
  variant="range"
  label="Período"
  placeholder="DD/MM/YYYY - DD/MM/YYYY"
&gt;&lt;/sb-ui-datepicker&gt;</code></pre>
      </div>
    </div>
  \`
}`,...(z=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:z.source},description:{story:"Datepicker de rango de fechas",...(M=(E=t.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var w,C,H,$,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '1000px' // Más altura para 3 datepickers
      }
    }
  },
  render: () => html\`
    <div style="padding: 3rem; min-height: 800px; display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Small</h4>
        <sb-ui-datepicker label="Fecha (Small)" size="small"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Medium (Default)</h4>
        <sb-ui-datepicker label="Fecha (Medium)" size="medium"></sb-ui-datepicker>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem; color: #666;">Large</h4>
        <sb-ui-datepicker label="Fecha (Large)" size="large"></sb-ui-datepicker>
      </div>
    </div>
  \`
}`,...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:"Comparación de tamaños",...(T=($=o.parameters)==null?void 0:$.docs)==null?void 0:T.description}}};var R,O,A,I,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '900px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 3rem; min-height: 700px; max-width: 800px; margin: 0 auto;">
      <h3 style="margin-bottom: 1rem; color: #038450;">Formulario de Reserva</h3>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <sb-ui-datepicker
          label="Fecha de inicio"
          value="2024-01-15"
        ></sb-ui-datepicker>

        <sb-ui-datepicker
          label="Fecha de fin"
          value="2024-01-20"
        ></sb-ui-datepicker>

        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
          onclick="alert('Formulario enviado!')"
        >
          Confirmar Reserva
        </button>
      </div>

      <div
        style="margin-top: 2rem; padding: 1rem; background: #FFF3E0; border-left: 4px solid #F57C00; border-radius: 4px;"
      >
        <p style="margin: 0; font-size: 0.875rem; color: #E65100;">
          <strong>💡 Nota:</strong> Este componente requiere JavaScript. Asegúrate de incluir el
          script:
        </p>
        <pre
          style="margin-top: 0.5rem; padding: 0.5rem; background: #FFF; border-radius: 4px; overflow-x: auto;"
        ><code>&lt;script type="module" src="https://unpkg.com/@seguros-bolivar/ui-bundle@latest/dist/sb-ui-components.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  \`
}`,...(A=(O=s.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:"Ejemplo de implementación completa",...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};const q=["Playground","WithMinMax","WithDisabledDates","DateRange","Sizes","CompleteExample"];export{s as CompleteExample,t as DateRange,a as Playground,o as Sizes,n as WithDisabledDates,i as WithMinMax,q as __namedExportsOrder,j as default};
