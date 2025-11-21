import{x as r}from"./lit-element-CFKcR9Rr.js";const G={title:"Foundations/Colors",tags:["autodocs"],parameters:{docs:{description:{component:"Sistema de colores del Seguros Bolivar UI Design System. Cada marca tiene su propia paleta de colores que se adapta automáticamente según los tokens cargados."}}}},i=(e,t,o)=>r`
  <div style="margin-bottom: 1rem;">
    <div
      style="
        width: 100%;
        height: 80px;
        background: var(${t});
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200);
        margin-bottom: 0.5rem;
      "
    ></div>
    <div style="font-weight: 600; margin-bottom: 0.25rem;">${e}</div>
    <div
      style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base); font-family: monospace;"
    >
      ${t}
    </div>
    ${o?r`<div
          style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-D100); margin-top: 0.25rem;"
        >
          ${o}
        </div>`:""}
  </div>
`,a=(e,t)=>r`
  <div style="margin-bottom: 2rem;">
    <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">${e}</h3>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;"
    >
      ${t.map(o=>i(o,`--sb-ui-color-${e.toLowerCase()}-${o}`,o==="base"?"Color principal":""))}
    </div>
  </div>
`,n={render:()=>r`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Primarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color principal de la marca. Se adapta automáticamente según la marca seleccionada en el
        toolbar.
      </p>
      ${a("Primary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
    </div>
  `},s={render:()=>r`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Secundarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color secundario de la marca, usado para acentos y elementos complementarios.
      </p>
      ${a("Secondary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
    </div>
  `},d={render:()=>r`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Terciarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color terciario de la marca, usado para elementos adicionales.
      </p>
      ${a("Tertiary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
    </div>
  `},l={render:()=>r`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Escala de Grises</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Escala neutral usada para textos, fondos y bordes.
      </p>
      ${a("Grayscale",["black","D400","D300","D200","D100","base","L100","L200","L300","L400","white"])}
    </div>
  `},m={render:()=>r`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores de Feedback</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Colores semánticos usados para indicar estados: error, éxito, advertencia e información.
      </p>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-error-base);"
      >
        Error
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${["D400","D300","D200","D100","base","L100","L200","L300","L400"].map(e=>i(e,`--sb-ui-color-feedback-error-${e}`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-success-base);"
      >
        Success
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${["D400","D300","D200","D100","base","L100","L200","L300","L400"].map(e=>i(e,`--sb-ui-color-feedback-success-${e}`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-warning-base);"
      >
        Warning
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${["D400","D300","D200","D100","base","L100","L200","L300","L400"].map(e=>i(e,`--sb-ui-color-feedback-warning-${e}`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-info-base);"
      >
        Info
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${["D400","D300","D200","D100","base","L100","L200","L300","L400"].map(e=>i(e,`--sb-ui-color-feedback-info-${e}`))}
      </div>
    </div>
  `},c={render:()=>r`
    <div style="padding: 2rem;">
      <!-- Brand Info Banner -->
      <div
        style="
          padding: 1.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--sb-ui-color-primary-base) 0%, var(--sb-ui-color-secondary-base) 100%);
          color: white;
          border-radius: 12px;
        "
      >
        <h2 style="margin: 0 0 0.5rem 0;">Todos los Colores del Sistema</h2>
        <p style="margin: 0; opacity: 0.95;">
          <strong>🎨 Tip:</strong> Use el selector de marca en el toolbar superior para ver cómo
          cambian los colores automáticamente.
          <br />
          Cada marca tiene su propia paleta pero mantiene la misma estructura.
        </p>
      </div>

      <!-- Brand Examples -->
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: var(--sb-ui-color-grayscale-L400);
          border-radius: 8px;
        "
      >
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Jelpit</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #2e0063; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #82e778; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Davivienda</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #e1111c; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #4b5c6f; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Cien Cuadras</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #006098; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #ffa533; border-radius: 4px;"></div>
          </div>
        </div>
      </div>

      ${a("Primary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
      ${a("Secondary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
      ${a("Tertiary",["D400","D300","D200","D100","base","L100","L200","L300","L400"])}
      ${a("Grayscale",["black","D400","D300","D200","D100","base","L100","L200","L300","L400","white"])}
    </div>
  `};var p,g,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Primarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color principal de la marca. Se adapta automáticamente según la marca seleccionada en el
        toolbar.
      </p>
      \${renderColorScale('Primary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
    </div>
  \`
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,u,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Secundarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color secundario de la marca, usado para acentos y elementos complementarios.
      </p>
      \${renderColorScale('Secondary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
    </div>
  \`
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var D,L,h;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Terciarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color terciario de la marca, usado para elementos adicionales.
      </p>
      \${renderColorScale('Tertiary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
    </div>
  \`
}`,...(h=(L=d.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var x,f,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Escala de Grises</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Escala neutral usada para textos, fondos y bordes.
      </p>
      \${renderColorScale('Grayscale', ['black', 'D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400', 'white'])}
    </div>
  \`
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,$,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores de Feedback</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Colores semánticos usados para indicar estados: error, éxito, advertencia e información.
      </p>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-error-base);"
      >
        Error
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        \${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map(scale => renderColorSwatch(scale, \`--sb-ui-color-feedback-error-\${scale}\`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-success-base);"
      >
        Success
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        \${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map(scale => renderColorSwatch(scale, \`--sb-ui-color-feedback-success-\${scale}\`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-warning-base);"
      >
        Warning
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        \${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map(scale => renderColorSwatch(scale, \`--sb-ui-color-feedback-warning-\${scale}\`))}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-info-base);"
      >
        Info
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        \${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map(scale => renderColorSwatch(scale, \`--sb-ui-color-feedback-info-\${scale}\`))}
      </div>
    </div>
  \`
}`,...(S=($=m.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var w,E,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem;">
      <!-- Brand Info Banner -->
      <div
        style="
          padding: 1.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--sb-ui-color-primary-base) 0%, var(--sb-ui-color-secondary-base) 100%);
          color: white;
          border-radius: 12px;
        "
      >
        <h2 style="margin: 0 0 0.5rem 0;">Todos los Colores del Sistema</h2>
        <p style="margin: 0; opacity: 0.95;">
          <strong>🎨 Tip:</strong> Use el selector de marca en el toolbar superior para ver cómo
          cambian los colores automáticamente.
          <br />
          Cada marca tiene su propia paleta pero mantiene la misma estructura.
        </p>
      </div>

      <!-- Brand Examples -->
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: var(--sb-ui-color-grayscale-L400);
          border-radius: 8px;
        "
      >
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Jelpit</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #2e0063; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #82e778; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Davivienda</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #e1111c; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #4b5c6f; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Cien Cuadras</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #006098; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #ffa533; border-radius: 4px;"></div>
          </div>
        </div>
      </div>

      \${renderColorScale('Primary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
      \${renderColorScale('Secondary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
      \${renderColorScale('Tertiary', ['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'])}
      \${renderColorScale('Grayscale', ['black', 'D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400', 'white'])}
    </div>
  \`
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const P=["Primary","Secondary","Tertiary","Grayscale","Feedback","AllColors"];export{c as AllColors,m as Feedback,l as Grayscale,n as Primary,s as Secondary,d as Tertiary,P as __namedExportsOrder,G as default};
