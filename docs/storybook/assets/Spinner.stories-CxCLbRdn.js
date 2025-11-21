import{x as r}from"./lit-element-BQ2u6o3f.js";const D={title:"Atoms/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de spinner para indicar estados de carga. Soporta 3 variantes de color y 3 tamaños."}}},argTypes:{variant:{control:"select",options:["primary","secondary","white"],description:"Variante de color del spinner",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del spinner",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}}},n={args:{variant:"primary",size:"medium"},render:a=>{const z=["sb-ui-spinner",`sb-ui-spinner--${a.variant}`,a.size!=="medium"?`sb-ui-spinner--${a.size}`:""].filter(Boolean).join(" ");return r`
      <div style="display: flex; justify-content: center; padding: 3rem;">
        <div class="${z}"></div>
      </div>
    `}},e={render:()=>r`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Small (16px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Medium (24px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Large (32px)</div>
        </div>
      </div>
    </div>
  `},i={render:()=>r`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-item--dark {
        background: var(--sb-ui-color-grayscale-D300, #222);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .spinner-demo-label--white {
        color: var(--sb-ui-color-grayscale-white, #fff);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Primary</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--secondary"></div>
          <div class="spinner-demo-label">Secondary</div>
        </div>

        <div class="spinner-demo-item spinner-demo-item--dark">
          <div class="sb-ui-spinner sb-ui-spinner--white"></div>
          <div class="spinner-demo-label spinner-demo-label--white">White</div>
        </div>
      </div>
    </div>
  `},s={render:()=>r`
    <style>
      .use-cases-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .use-case {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .use-case h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .use-case-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: var(--sb-ui-color-primary-base, #007acc);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: not-allowed;
        opacity: 0.7;
      }

      .loading-text {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay -->
      <div class="use-case">
        <h3>Loading Overlay</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
        </div>
      </div>

      <!-- Caso 2: Loading Button -->
      <div class="use-case">
        <h3>Button Loading State</h3>
        <button class="loading-button">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--white"></div>
          Cargando...
        </button>
      </div>

      <!-- Caso 3: Inline Loading -->
      <div class="use-case">
        <h3>Inline Loading Text</h3>
        <div class="loading-text">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <span>Procesando tu solicitud...</span>
        </div>
      </div>

      <!-- Caso 4: Card Loading -->
      <div class="use-case">
        <h3>Card Loading</h3>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <p style="margin: 0; color: var(--sb-ui-color-grayscale-base);">
            Cargando contenido...
          </p>
        </div>
      </div>
    </div>
  `};var o,d,l,t,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium'
  },
  render: args => {
    const classes = ['sb-ui-spinner', \`sb-ui-spinner--\${args.variant}\`, args.size !== 'medium' ? \`sb-ui-spinner--\${args.size}\` : ''].filter(Boolean).join(' ');
    return html\`
      <div style="display: flex; justify-content: center; padding: 3rem;">
        <div class="\${classes}"></div>
      </div>
    \`;
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:`## Playground (Interactivo)

Experimenta con diferentes tamaños y colores del spinner.`,...(p=(t=n.parameters)==null?void 0:t.docs)==null?void 0:p.description}}};var c,m,u,v,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Small (16px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Medium (24px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Large (32px)</div>
        </div>
      </div>
    </div>
  \`
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:`## Todos los Tamaños

Comparación de los tres tamaños disponibles del spinner.`,...(g=(v=e.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var b,y,f,x,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-item--dark {
        background: var(--sb-ui-color-grayscale-D300, #222);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .spinner-demo-label--white {
        color: var(--sb-ui-color-grayscale-white, #fff);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Primary</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--secondary"></div>
          <div class="spinner-demo-label">Secondary</div>
        </div>

        <div class="spinner-demo-item spinner-demo-item--dark">
          <div class="sb-ui-spinner sb-ui-spinner--white"></div>
          <div class="spinner-demo-label spinner-demo-label--white">White</div>
        </div>
      </div>
    </div>
  \`
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:`## Todas las Variantes

Comparación de las tres variantes de color disponibles.`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var w,L,k,C,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .use-cases-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .use-case {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .use-case h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .use-case-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: var(--sb-ui-color-primary-base, #007acc);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: not-allowed;
        opacity: 0.7;
      }

      .loading-text {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay -->
      <div class="use-case">
        <h3>Loading Overlay</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
        </div>
      </div>

      <!-- Caso 2: Loading Button -->
      <div class="use-case">
        <h3>Button Loading State</h3>
        <button class="loading-button">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--white"></div>
          Cargando...
        </button>
      </div>

      <!-- Caso 3: Inline Loading -->
      <div class="use-case">
        <h3>Inline Loading Text</h3>
        <div class="loading-text">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <span>Procesando tu solicitud...</span>
        </div>
      </div>

      <!-- Caso 4: Card Loading -->
      <div class="use-case">
        <h3>Card Loading</h3>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <p style="margin: 0; color: var(--sb-ui-color-grayscale-base);">
            Cargando contenido...
          </p>
        </div>
      </div>
    </div>
  \`
}`,...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:`## Casos de Uso

Ejemplos comunes de uso del spinner en diferentes contextos.`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};const T=["Playground","Tamaños","Variantes","CasosDeUso"];export{s as CasosDeUso,n as Playground,e as Tamaños,i as Variantes,T as __namedExportsOrder,D as default};
