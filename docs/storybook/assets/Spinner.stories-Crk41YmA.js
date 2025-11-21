import{x as s}from"./lit-element-CFKcR9Rr.js";const U={title:"Atoms/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de spinner para indicar estados de carga con soporte de progreso dinámico (0-100%). Incluye 4 tipos: Basic, Integrated, Icon, Icon-Text."}}},argTypes:{type:{control:"select",options:["basic","integrated","icon","icon-text"],description:"Tipo de spinner",table:{type:{summary:"string"},defaultValue:{summary:"basic"}}},progress:{control:{type:"range",min:0,max:100,step:1},description:'Progreso del spinner (0-100%) - Solo para tipo "basic"',table:{type:{summary:"number"},defaultValue:{summary:50}}},speed:{control:"select",options:["normal","fast","slow"],description:"Velocidad de rotación",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},paused:{control:"boolean",description:"Pausar la animación",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},i={args:{type:"basic",progress:50,speed:"normal",paused:!1},render:n=>{const R=["sb-ui-spinner",n.type!=="basic"?`sb-ui-spinner--${n.type}`:"",n.speed!=="normal"?`sb-ui-spinner--${n.speed}`:"",n.paused?"sb-ui-spinner--paused":""].filter(Boolean).join(" "),A=n.type==="basic"?n.progress:null;return s`
      <div style="display: flex; justify-content: center; padding: 3rem; background: #fafafa;">
        <div class="${R}" data-progress="${A}">
          ${n.type==="icon"||n.type==="icon-text"?s`
                <div class="sb-ui-spinner__content">
                  <div class="sb-ui-spinner__icon">
                    <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
                  </div>
                  ${n.type==="icon-text"?s`<div class="sb-ui-spinner__label">OK</div>`:""}
                </div>
              `:""}
        </div>
      </div>
      ${n.type==="basic"?s`<div style="text-align: center; color: #666;">
            Progress: ${n.progress}%
          </div>`:""}
    `}},e={render:()=>s`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Diferentes Niveles de Progreso</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="0"></div>
          <div class="spinner-demo-label">0%<br />Iniciando</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="25"></div>
          <div class="spinner-demo-label">25%<br />En progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="50"></div>
          <div class="spinner-demo-label">50%<br />Medio camino</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="75"></div>
          <div class="spinner-demo-label">75%<br />Casi listo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="100"></div>
          <div class="spinner-demo-label">100%<br />Completo</div>
        </div>
      </div>
    </div>
  `},r={render:()=>s`
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Diferentes Velocidades</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated"></div>
          <div class="spinner-demo-label">Normal<br />Velocidades default</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--fast"></div>
          <div class="spinner-demo-label">Fast<br />Velocidad x1.5</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--slow"></div>
          <div class="spinner-demo-label">Slow<br />Velocidad /2</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--paused"></div>
          <div class="spinner-demo-label">Paused<br />Animación detenida</div>
        </div>
      </div>
    </div>
  `},a={render:()=>s`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Spinner con Diferentes Iconos</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Check<br />75% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i
                  class="fa-solid fa-cloud-arrow-up"
                  style="color: #038450; font-size: 20px;"
                ></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Upload<br />50% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="90">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-download" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Download<br />90% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="25">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-sync" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Sync<br />25% Progreso</div>
        </div>
      </div>
    </div>
  `},o={render:()=>s`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Spinner con Icono y Texto</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div class="spinner-demo-label">100% Complete</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-cloud-arrow-up" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">UP</div>
            </div>
          </div>
          <div class="spinner-demo-label">50% Subiendo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-shield-halved" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">SEC</div>
            </div>
          </div>
          <div class="spinner-demo-label">75% Seguro</div>
        </div>
      </div>
    </div>
  `},d={render:()=>s`
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
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .loading-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .progress-display {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
      }

      .progress-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay con Integrated -->
      <div class="use-case">
        <h3>Loading Overlay - Integrated Spinner</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--integrated"></div>
          <div class="loading-text">Cargando contenido...</div>
        </div>
      </div>

      <!-- Caso 2: Progress Display -->
      <div class="use-case">
        <h3>Upload con Progress - Basic Spinner</h3>
        <div class="progress-display">
          <div class="sb-ui-spinner" data-progress="65"></div>
          <div class="progress-text">
            <strong>Subiendo archivo...</strong><br />
            65% completado (3.2 MB de 5 MB)
          </div>
        </div>
      </div>

      <!-- Caso 3: Success Confirmation -->
      <div class="use-case">
        <h3>Confirmación de Éxito - Icon-Text Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div>
            <strong style="color: #038450;">¡Operación completada!</strong><br />
            <span style="color: #666;">Tu archivo se ha guardado correctamente</span>
          </div>
        </div>
      </div>

      <!-- Caso 4: Processing -->
      <div class="use-case">
        <h3>Procesando - Icon Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="45">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-gear" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div>
            <strong>Procesando tu solicitud...</strong><br />
            <span style="color: #666;">Esto puede tomar unos momentos</span>
          </div>
        </div>
      </div>
    </div>
  `};var l,t,c,p,v;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'basic',
    progress: 50,
    speed: 'normal',
    paused: false
  },
  render: args => {
    const classes = ['sb-ui-spinner', args.type !== 'basic' ? \`sb-ui-spinner--\${args.type}\` : '', args.speed !== 'normal' ? \`sb-ui-spinner--\${args.speed}\` : '', args.paused ? 'sb-ui-spinner--paused' : ''].filter(Boolean).join(' ');

    // Para integrated, no usa progress
    const progressAttr = args.type === 'basic' ? args.progress : null;
    return html\`
      <div style="display: flex; justify-content: center; padding: 3rem; background: #fafafa;">
        <div class="\${classes}" data-progress="\${progressAttr}">
          \${args.type === 'icon' || args.type === 'icon-text' ? html\`
                <div class="sb-ui-spinner__content">
                  <div class="sb-ui-spinner__icon">
                    <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
                  </div>
                  \${args.type === 'icon-text' ? html\`<div class="sb-ui-spinner__label">OK</div>\` : ''}
                </div>
              \` : ''}
        </div>
      </div>
      \${args.type === 'basic' ? html\`<div style="text-align: center; color: #666;">
            Progress: \${args.progress}%
          </div>\` : ''}
    \`;
  }
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source},description:{story:`## Playground (Interactivo)

Experimenta con diferentes tipos, progreso y velocidades del spinner.`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.description}}};var m,u,b,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Diferentes Niveles de Progreso</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="0"></div>
          <div class="spinner-demo-label">0%<br />Iniciando</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="25"></div>
          <div class="spinner-demo-label">25%<br />En progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="50"></div>
          <div class="spinner-demo-label">50%<br />Medio camino</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="75"></div>
          <div class="spinner-demo-label">75%<br />Casi listo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner" data-progress="100"></div>
          <div class="spinner-demo-label">100%<br />Completo</div>
        </div>
      </div>
    </div>
  \`
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:`## Tipo 1: BASIC Spinner con Progreso

Spinner circular simple con gradiente verde. El arco representa el progreso (0-100%).`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var y,x,h,_,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Diferentes Velocidades</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated"></div>
          <div class="spinner-demo-label">Normal<br />Velocidades default</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--fast"></div>
          <div class="spinner-demo-label">Fast<br />Velocidad x1.5</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--slow"></div>
          <div class="spinner-demo-label">Slow<br />Velocidad /2</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--integrated sb-ui-spinner--paused"></div>
          <div class="spinner-demo-label">Paused<br />Animación detenida</div>
        </div>
      </div>
    </div>
  \`
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:`## Tipo 2: INTEGRATED Spinner (3 Círculos)

Spinner con 3 círculos concéntricos que rotan a velocidades diferentes:
- 🟢 Verde oscuro (#009056) - 2s
- 🟢 Verde claro (#02D46F) - 3s
- 🟡 Amarillo (#FFE16F) - 1.5s

**Nota:** Este spinner NO usa progreso, rota continuamente.`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.description}}};var w,D,k,C,P;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Spinner con Diferentes Iconos</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Check<br />75% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i
                  class="fa-solid fa-cloud-arrow-up"
                  style="color: #038450; font-size: 20px;"
                ></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Upload<br />50% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="90">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-download" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Download<br />90% Progreso</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="25">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-sync" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div class="spinner-demo-label">Sync<br />25% Progreso</div>
        </div>
      </div>
    </div>
  \`
}`,...(k=(D=a.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:`## Tipo 3: ICON Spinner

Spinner con icono centrado. El anillo rota alrededor del icono estático.
Ideal para mostrar confirmación mientras se procesa.`,...(P=(C=a.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};var I,F,z,E,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
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
        color: var(--sb-ui-color-grayscale-D200, #333);
        text-align: center;
      }
    </style>

    <div class="spinner-demo-container">
      <h3 style="margin-bottom: 1.5rem; color: #038450;">Spinner con Icono y Texto</h3>
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div class="spinner-demo-label">100% Complete</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="50">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-cloud-arrow-up" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">UP</div>
            </div>
          </div>
          <div class="spinner-demo-label">50% Subiendo</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="75">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-shield-halved" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">SEC</div>
            </div>
          </div>
          <div class="spinner-demo-label">75% Seguro</div>
        </div>
      </div>
    </div>
  \`
}`,...(z=(F=o.parameters)==null?void 0:F.docs)==null?void 0:z.source},description:{story:`## Tipo 4: ICON-TEXT Spinner

Spinner con icono y texto centrados. Combina confirmación visual con mensaje breve.`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var L,$,O,V,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .loading-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .progress-display {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
      }

      .progress-text {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay con Integrated -->
      <div class="use-case">
        <h3>Loading Overlay - Integrated Spinner</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--integrated"></div>
          <div class="loading-text">Cargando contenido...</div>
        </div>
      </div>

      <!-- Caso 2: Progress Display -->
      <div class="use-case">
        <h3>Upload con Progress - Basic Spinner</h3>
        <div class="progress-display">
          <div class="sb-ui-spinner" data-progress="65"></div>
          <div class="progress-text">
            <strong>Subiendo archivo...</strong><br />
            65% completado (3.2 MB de 5 MB)
          </div>
        </div>
      </div>

      <!-- Caso 3: Success Confirmation -->
      <div class="use-case">
        <h3>Confirmación de Éxito - Icon-Text Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon-text" data-progress="100">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-check" style="color: #038450; font-size: 20px;"></i>
              </div>
              <div class="sb-ui-spinner__label">OK</div>
            </div>
          </div>
          <div>
            <strong style="color: #038450;">¡Operación completada!</strong><br />
            <span style="color: #666;">Tu archivo se ha guardado correctamente</span>
          </div>
        </div>
      </div>

      <!-- Caso 4: Processing -->
      <div class="use-case">
        <h3>Procesando - Icon Spinner</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--icon" data-progress="45">
            <div class="sb-ui-spinner__content">
              <div class="sb-ui-spinner__icon">
                <i class="fa-solid fa-gear" style="color: #038450; font-size: 20px;"></i>
              </div>
            </div>
          </div>
          <div>
            <strong>Procesando tu solicitud...</strong><br />
            <span style="color: #666;">Esto puede tomar unos momentos</span>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source},description:{story:`## Casos de Uso Prácticos

Ejemplos de cómo usar los spinners en contextos reales.`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.description}}};const j=["Playground","Basic","Integrated","Icon","IconText","CasosDeUso"];export{e as Basic,d as CasosDeUso,a as Icon,o as IconText,r as Integrated,i as Playground,j as __namedExportsOrder,U as default};
