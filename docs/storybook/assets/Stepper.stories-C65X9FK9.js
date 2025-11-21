import{x as a}from"./lit-element-CFKcR9Rr.js";const Se={title:"Molecules/Stepper",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de pasos progresivos para crear flujos de trabajo multi-paso. Incluye 3 tipos (Number, Icon, Mix), 2 orientaciones (Horizontal, Vertical) y 4 estados visuales."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientación del stepper",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},type:{control:"select",options:["number","icon","mix"],description:"Tipo de visualización de los steps",table:{type:{summary:"string"},defaultValue:{summary:"number"}}},trackStyle:{control:"select",options:["solid","dash"],description:"Estilo de la línea conectora",table:{type:{summary:"string"},defaultValue:{summary:"dash"}}},currentStep:{control:{type:"number",min:1,max:4},description:"Paso actual (1-indexed)",table:{type:{summary:"number"},defaultValue:{summary:1}}},totalSteps:{control:{type:"number",min:2,max:6},description:"Total de pasos",table:{type:{summary:"number"},defaultValue:{summary:4}}}}},k=a`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
</svg>`,P=a`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  />
</svg>`;function e(n,t,d,i="number",o=!1){const l=n<t,c=n===t;let p="",r=n;return l?(p="sb-ui-stepper__step--filled-default",i==="mix"?r=a`
        <div class="sb-ui-stepper__step-circle-badge">${n}</div>
        ${k}
      `:r=k):c?(p="sb-ui-stepper__step--empty-active",i==="icon"?r=P:i==="mix"&&(r=a`
        <div class="sb-ui-stepper__step-circle-badge">${n}</div>
        ${P}
      `)):(p="sb-ui-stepper__step--empty-default",i==="icon"?r=P:i==="mix"&&(r=a`
        <div class="sb-ui-stepper__step-circle-badge">${n}</div>
        ${P}
      `)),a`
    <div class="sb-ui-stepper__step ${p}">
      <div class="sb-ui-stepper__step-circle" aria-current="${c?"step":"false"}">
        ${r}
      </div>
      <div class="sb-ui-stepper__step-label">${d}</div>
      ${o?"":a`<div
            class="sb-ui-stepper__step-track"
            style="${l?"border-style: solid":""}"
          ></div>`}
    </div>
  `}const u={args:{orientation:"horizontal",type:"number",trackStyle:"dash",currentStep:2,totalSteps:4},render:({orientation:n,type:t,trackStyle:d,currentStep:i,totalSteps:o})=>{const l=n==="vertical"?"sb-ui-stepper--vertical":"sb-ui-stepper--horizontal",c=t!=="number"?`sb-ui-stepper--type-${t}`:"",p=d==="dash"?"sb-ui-stepper--track-dash":"",r=[],m=["Datos Personales","Contacto","Dirección","Confirmación","Finalizar","Pago"];for(let s=1;s<=o;s++)r.push(e(s,i,m[s-1]||`Paso ${s}`,t,s===o));return a`
      <div class="sb-ui-stepper ${l} ${c} ${p}">${r}</div>
    `}},b={args:{orientation:"horizontal",type:"icon",trackStyle:"dash",currentStep:2,totalSteps:4},render:({orientation:n,type:t,trackStyle:d,currentStep:i,totalSteps:o})=>{const l=n==="vertical"?"sb-ui-stepper--vertical":"sb-ui-stepper--horizontal",c=t!=="number"?`sb-ui-stepper--type-${t}`:"",p=d==="dash"?"sb-ui-stepper--track-dash":"",r=[],m=["Escoger","Datos","Confirmar","Pagar"];for(let s=1;s<=o;s++)r.push(e(s,i,m[s-1]||`Paso ${s}`,t,s===o));return a`
      <div class="sb-ui-stepper ${l} ${c} ${p}">${r}</div>
    `}},v={args:{orientation:"horizontal",type:"mix",trackStyle:"dash",currentStep:2,totalSteps:4},render:({orientation:n,type:t,trackStyle:d,currentStep:i,totalSteps:o})=>{const l=n==="vertical"?"sb-ui-stepper--vertical":"sb-ui-stepper--horizontal",c=t!=="number"?`sb-ui-stepper--type-${t}`:"",p=d==="dash"?"sb-ui-stepper--track-dash":"",r=[],m=["Información","Documentos","Revisión","Confirmar"];for(let s=1;s<=o;s++)r.push(e(s,i,m[s-1]||`Paso ${s}`,t,s===o));return a`
      <div class="sb-ui-stepper ${l} ${c} ${p}">${r}</div>
    `}},y={args:{orientation:"vertical",type:"number",trackStyle:"dash",currentStep:3,totalSteps:4},render:({orientation:n,type:t,trackStyle:d,currentStep:i,totalSteps:o})=>{const l=n==="vertical"?"sb-ui-stepper--vertical":"sb-ui-stepper--horizontal",c=t!=="number"?`sb-ui-stepper--type-${t}`:"",p=d==="dash"?"sb-ui-stepper--track-dash":"",r=[],m=["Datos Personales","Dirección","Confirmación","Pago"];for(let s=1;s<=o;s++)r.push(e(s,i,m[s-1]||`Paso ${s}`,t,s===o));return a`
      <div class="sb-ui-stepper ${l} ${c} ${p}">${r}</div>
    `}},h={render:()=>a`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;"
    >
      <!-- Empty Default -->
      <div>
        <h3 style="color: #9b9b9b; font-size: 1rem; margin-bottom: 1rem">Empty Default</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Paso pendiente (no visitado)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-default">
            <div class="sb-ui-stepper__step-circle">1</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Empty Active -->
      <div>
        <h3 style="color: #ffe16f; font-size: 1rem; margin-bottom: 1rem">Empty Active</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Paso actual (en progreso)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">2</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Filled Default -->
      <div>
        <h3 style="color: #038450; font-size: 1rem; margin-bottom: 1rem">Filled Default</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">Paso completado</p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-default">
            <div class="sb-ui-stepper__step-circle">${k}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>

      <!-- Filled Active -->
      <div>
        <h3 style="color: #05794a; font-size: 1rem; margin-bottom: 1rem">Filled Active</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Completado + activo (poco común)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">${k}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>
    </div>
  `},f={render:()=>a`
      <div style="max-width: 800px; margin: 0 auto;">
        <!-- Stepper -->
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash"
          id="story-stepper"
        >
          ${e(1,1,"Datos Personales","number",!1)}
          ${e(2,1,"Contacto","number",!1)}
          ${e(3,1,"Dirección","number",!1)}
          ${e(4,1,"Confirmación","number",!0)}
        </div>

        <!-- Contenido dinámico -->
        <div
          id="story-content"
          style="
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: #f9f9f9;
            border-radius: 8px;
            min-height: 150px;
          "
        >
          <h3 style="color: #038450; margin-top: 0">Paso 1: Datos Personales</h3>
          <div style="margin-bottom: 1rem">
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem"
              >Nombre completo</label
            >
            <input
              type="text"
              placeholder="Juan Pérez"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
          <div>
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem">Cédula</label>
            <input
              type="text"
              placeholder="1234567890"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
        </div>

        <!-- Controles -->
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            disabled
            style="cursor: not-allowed; opacity: 0.5"
          >
            ← Anterior
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Siguiente →</button>
        </div>

        <!-- Info -->
        <div style="margin-top: 1rem; padding: 1rem; background: #f0f9f4; border-radius: 8px">
          <strong style="color: #038450">💡 Tip:</strong> En tu implementación, usa JavaScript para
          actualizar las clases según el paso actual.
        </div>
      </div>
    `},g={args:{orientation:"horizontal",type:"number",trackStyle:"dash",currentStep:2,totalSteps:4},render:({orientation:n,type:t,trackStyle:d,currentStep:i,totalSteps:o})=>{const l=n==="vertical"?"sb-ui-stepper--vertical":"sb-ui-stepper--horizontal",c=t!=="number"?`sb-ui-stepper--type-${t}`:"",p=d==="dash"?"sb-ui-stepper--track-dash":"",r=[],m=["Paso 1","Paso 2","Paso 3","Paso 4","Paso 5","Paso 6"];for(let s=1;s<=o;s++)r.push(e(s,i,m[s-1],t,s===o));return a`
      <div style="max-width: ${n==="vertical"?"400px":"100%"}">
        <div class="sb-ui-stepper ${l} ${c} ${p}">${r}</div>

        <!-- Info de configuración -->
        <div
          style="
            margin-top: 2rem;
            padding: 1rem;
            background: #f9f9f9;
            border-radius: 8px;
            font-size: 0.875rem;
          "
        >
          <p style="margin: 0.5rem 0"><strong>Orientación:</strong> <code>${n}</code></p>
          <p style="margin: 0.5rem 0"><strong>Tipo:</strong> <code>${t}</code></p>
          <p style="margin: 0.5rem 0"><strong>Track:</strong> <code>${d}</code></p>
          <p style="margin: 0.5rem 0">
            <strong>Paso actual:</strong> <code>${i}</code> de <code>${o}</code>
          </p>
          <p style="margin-top: 1rem; color: #038450">
            <strong>Classes:</strong>
            <code style="font-size: 0.75rem; display: block; margin-top: 0.5rem">
              .sb-ui-stepper ${l} ${c} ${p}
            </code>
          </p>
        </div>
      </div>
    `}},$={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Number -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Number (Default)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          54px desktop / 40px mobile
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${e(1,2,"Paso 1","number",!1)}
          ${e(2,2,"Paso 2","number",!1)}
          ${e(3,2,"Paso 3","number",!1)}
          ${e(4,2,"Paso 4","number",!0)}
        </div>
      </div>

      <!-- Icon -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Icon</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          62px desktop / 46px mobile
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-icon sb-ui-stepper--track-dash"
        >
          ${e(1,2,"Paso 1","icon",!1)} ${e(2,2,"Paso 2","icon",!1)}
          ${e(3,2,"Paso 3","icon",!1)} ${e(4,2,"Paso 4","icon",!0)}
        </div>
      </div>

      <!-- Mix -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Mix (Icon + Badge)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          62px desktop / 46px mobile + badge arriba centrado
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-mix sb-ui-stepper--track-dash"
        >
          ${e(1,2,"Paso 1","mix",!1)} ${e(2,2,"Paso 2","mix",!1)}
          ${e(3,2,"Paso 3","mix",!1)} ${e(4,2,"Paso 4","mix",!0)}
        </div>
      </div>
    </div>
  `},x={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Solid -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Solid (Sin clase --track-dash)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Líneas verdes sólidas siempre
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal">
          ${e(1,2,"Paso 1","number",!1)}
          ${e(2,2,"Paso 2","number",!1)}
          ${e(3,2,"Paso 3","number",!1)}
          ${e(4,2,"Paso 4","number",!0)}
        </div>
      </div>

      <!-- Dash -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Dash (Recomendado)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Sólida después de completados, punteada hacia pendientes
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${e(1,2,"Paso 1","number",!1)}
          ${e(2,2,"Paso 2","number",!1)}
          ${e(3,2,"Paso 3","number",!1)}
          ${e(4,2,"Paso 4","number",!0)}
        </div>
      </div>
    </div>
  `},S={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- 2 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">2 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${e(1,2,"Paso 1","number",!1)}
          ${e(2,2,"Paso 2","number",!0)}
        </div>
      </div>

      <!-- 3 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">3 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${e(1,2,"Paso 1","number",!1)}
          ${e(2,2,"Paso 2","number",!1)}
          ${e(3,2,"Paso 3","number",!0)}
        </div>
      </div>

      <!-- 5 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">5 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          ${e(1,3,"Paso 1","number",!1)}
          ${e(2,3,"Paso 2","number",!1)}
          ${e(3,3,"Paso 3","number",!1)}
          ${e(4,3,"Paso 4","number",!1)}
          ${e(5,3,"Paso 5","number",!0)}
        </div>
      </div>
    </div>
  `};var z,C,_,D,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4
  },
  render: ({
    orientation,
    type,
    trackStyle,
    currentStep,
    totalSteps
  }) => {
    const orientationClass = orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? \`sb-ui-stepper--type-\${type}\` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';
    const steps = [];
    const labels = ['Datos Personales', 'Contacto', 'Dirección', 'Confirmación', 'Finalizar', 'Pago'];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || \`Paso \${i}\`, type, i === totalSteps));
    }
    return html\`
      <div class="sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}">\${steps}</div>
    \`;
  }
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source},description:{story:`## 1. Number Horizontal (Default)

Stepper con números. La configuración más común y simple.

**Uso:**
- Formularios multi-paso básicos
- Procesos lineales
- Cuando no necesitas iconos personalizados`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var E,I,w,T,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    type: 'icon',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4
  },
  render: ({
    orientation,
    type,
    trackStyle,
    currentStep,
    totalSteps
  }) => {
    const orientationClass = orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? \`sb-ui-stepper--type-\${type}\` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';
    const steps = [];
    const labels = ['Escoger', 'Datos', 'Confirmar', 'Pagar'];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || \`Paso \${i}\`, type, i === totalSteps));
    }
    return html\`
      <div class="sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}">\${steps}</div>
    \`;
  }
}`,...(w=(I=b.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:`## 2. Icon Horizontal

Stepper con iconos personalizados. Ideal para flujos con identidad visual clara.

**Uso:**
- Procesos con pasos diferenciados visualmente
- Cuando cada paso tiene un icono representativo
- Layouts más visuales y amigables

**Tamaños:**
- Desktop: 62px
- Mobile: 46px`,...(A=(T=b.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var M,L,H,N,B;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    type: 'mix',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4
  },
  render: ({
    orientation,
    type,
    trackStyle,
    currentStep,
    totalSteps
  }) => {
    const orientationClass = orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? \`sb-ui-stepper--type-\${type}\` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';
    const steps = [];
    const labels = ['Información', 'Documentos', 'Revisión', 'Confirmar'];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || \`Paso \${i}\`, type, i === totalSteps));
    }
    return html\`
      <div class="sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}">\${steps}</div>
    \`;
  }
}`,...(H=(L=v.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:`## 3. Mix Horizontal (Icon + Badge)

Stepper con iconos Y badge numérico arriba centrado. El badge permanece en todos los estados.

**Uso:**
- Cuando necesitas iconos Y numeración visible
- Procesos complejos donde el número del paso importa
- Flujos largos (5+ pasos)

**Características:**
- Badge arriba centrado del círculo
- Badge color: #FFCE29 (amarillo oscuro)
- Badge permanece incluso cuando el step está completado`,...(B=(N=v.parameters)==null?void 0:N.docs)==null?void 0:B.description}}};var V,j,O,R,J;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 3,
    totalSteps: 4
  },
  render: ({
    orientation,
    type,
    trackStyle,
    currentStep,
    totalSteps
  }) => {
    const orientationClass = orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? \`sb-ui-stepper--type-\${type}\` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';
    const steps = [];
    const labels = ['Datos Personales', 'Dirección', 'Confirmación', 'Pago'];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1] || \`Paso \${i}\`, type, i === totalSteps));
    }
    return html\`
      <div class="sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}">\${steps}</div>
    \`;
  }
}`,...(O=(j=y.parameters)==null?void 0:j.docs)==null?void 0:O.source},description:{story:`## 4. Vertical Number

Stepper con orientación vertical. Ideal para sidebars y layouts con espacio lateral.

**Uso:**
- Sidebars de aplicaciones
- Layouts de 2 columnas (stepper en el lateral)
- Cuando tienes espacio vertical disponible

**Características:**
- Labels alineados a la izquierda del círculo
- Líneas verticales entre steps
- Mismo sistema de estados que horizontal`,...(J=(R=y.parameters)==null?void 0:R.docs)==null?void 0:J.description}}};var U,q,Y,G,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;"
    >
      <!-- Empty Default -->
      <div>
        <h3 style="color: #9b9b9b; font-size: 1rem; margin-bottom: 1rem">Empty Default</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Paso pendiente (no visitado)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-default">
            <div class="sb-ui-stepper__step-circle">1</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Empty Active -->
      <div>
        <h3 style="color: #ffe16f; font-size: 1rem; margin-bottom: 1rem">Empty Active</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Paso actual (en progreso)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--empty-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">2</div>
            <div class="sb-ui-stepper__step-label">Description</div>
          </div>
        </div>
      </div>

      <!-- Filled Default -->
      <div>
        <h3 style="color: #038450; font-size: 1rem; margin-bottom: 1rem">Filled Default</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">Paso completado</p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-default">
            <div class="sb-ui-stepper__step-circle">\${checkIcon}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>

      <!-- Filled Active -->
      <div>
        <h3 style="color: #05794a; font-size: 1rem; margin-bottom: 1rem">Filled Active</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Completado + activo (poco común)
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          <div class="sb-ui-stepper__step sb-ui-stepper__step--filled-active">
            <div class="sb-ui-stepper__step-circle" aria-current="step">\${checkIcon}</div>
            <div class="sb-ui-stepper__step-label">Description</div>
            <div class="sb-ui-stepper__step-track" style="border-style: solid"></div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(Y=(q=h.parameters)==null?void 0:q.docs)==null?void 0:Y.source},description:{story:`## 5. Estados Individuales

Referencia visual de los 4 estados posibles de un step.`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var Q,W,X,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    // Se renderiza con lit-html
    return html\`
      <div style="max-width: 800px; margin: 0 auto;">
        <!-- Stepper -->
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash"
          id="story-stepper"
        >
          \${renderStep(1, 1, 'Datos Personales', 'number', false)}
          \${renderStep(2, 1, 'Contacto', 'number', false)}
          \${renderStep(3, 1, 'Dirección', 'number', false)}
          \${renderStep(4, 1, 'Confirmación', 'number', true)}
        </div>

        <!-- Contenido dinámico -->
        <div
          id="story-content"
          style="
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: #f9f9f9;
            border-radius: 8px;
            min-height: 150px;
          "
        >
          <h3 style="color: #038450; margin-top: 0">Paso 1: Datos Personales</h3>
          <div style="margin-bottom: 1rem">
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem"
              >Nombre completo</label
            >
            <input
              type="text"
              placeholder="Juan Pérez"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
          <div>
            <label style="display: block; font-weight: 700; margin-bottom: 0.5rem">Cédula</label>
            <input
              type="text"
              placeholder="1234567890"
              style="
                width: 100%;
                padding: 0.75rem;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 1rem;
              "
            />
          </div>
        </div>

        <!-- Controles -->
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            disabled
            style="cursor: not-allowed; opacity: 0.5"
          >
            ← Anterior
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Siguiente →</button>
        </div>

        <!-- Info -->
        <div style="margin-top: 1rem; padding: 1rem; background: #f0f9f4; border-radius: 8px">
          <strong style="color: #038450">💡 Tip:</strong> En tu implementación, usa JavaScript para
          actualizar las clases según el paso actual.
        </div>
      </div>
    \`;
  }
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:`## 6. Ejemplo Completo: Formulario Multi-Paso

Ejemplo real de un stepper integrado con formulario y contenido dinámico.

**Características:**
- Contenido diferente por paso
- Navegación con botones Anterior/Siguiente
- Botón cambia a "Finalizar" en el último paso
- Steps se actualizan automáticamente`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var se,te,re,ne,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    type: 'number',
    trackStyle: 'dash',
    currentStep: 2,
    totalSteps: 4
  },
  render: ({
    orientation,
    type,
    trackStyle,
    currentStep,
    totalSteps
  }) => {
    const orientationClass = orientation === 'vertical' ? 'sb-ui-stepper--vertical' : 'sb-ui-stepper--horizontal';
    const typeClass = type !== 'number' ? \`sb-ui-stepper--type-\${type}\` : '';
    const trackClass = trackStyle === 'dash' ? 'sb-ui-stepper--track-dash' : '';
    const steps = [];
    const labels = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5', 'Paso 6'];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(renderStep(i, currentStep, labels[i - 1], type, i === totalSteps));
    }
    return html\`
      <div style="max-width: \${orientation === 'vertical' ? '400px' : '100%'}">
        <div class="sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}">\${steps}</div>

        <!-- Info de configuración -->
        <div
          style="
            margin-top: 2rem;
            padding: 1rem;
            background: #f9f9f9;
            border-radius: 8px;
            font-size: 0.875rem;
          "
        >
          <p style="margin: 0.5rem 0"><strong>Orientación:</strong> <code>\${orientation}</code></p>
          <p style="margin: 0.5rem 0"><strong>Tipo:</strong> <code>\${type}</code></p>
          <p style="margin: 0.5rem 0"><strong>Track:</strong> <code>\${trackStyle}</code></p>
          <p style="margin: 0.5rem 0">
            <strong>Paso actual:</strong> <code>\${currentStep}</code> de <code>\${totalSteps}</code>
          </p>
          <p style="margin-top: 1rem; color: #038450">
            <strong>Classes:</strong>
            <code style="font-size: 0.75rem; display: block; margin-top: 0.5rem">
              .sb-ui-stepper \${orientationClass} \${typeClass} \${trackClass}
            </code>
          </p>
        </div>
      </div>
    \`;
  }
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:`## 7. Playground

Experimenta con todas las combinaciones posibles.

**Controles disponibles:**
- Orientation: horizontal / vertical
- Type: number / icon / mix
- Track Style: solid / dash
- Current Step: 1-6
- Total Steps: 2-6`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ae,ie,pe,le,ce;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Number -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Number (Default)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          54px desktop / 40px mobile
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          \${renderStep(1, 2, 'Paso 1', 'number', false)}
          \${renderStep(2, 2, 'Paso 2', 'number', false)}
          \${renderStep(3, 2, 'Paso 3', 'number', false)}
          \${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>

      <!-- Icon -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Icon</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          62px desktop / 46px mobile
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-icon sb-ui-stepper--track-dash"
        >
          \${renderStep(1, 2, 'Paso 1', 'icon', false)} \${renderStep(2, 2, 'Paso 2', 'icon', false)}
          \${renderStep(3, 2, 'Paso 3', 'icon', false)} \${renderStep(4, 2, 'Paso 4', 'icon', true)}
        </div>
      </div>

      <!-- Mix -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Mix (Icon + Badge)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          62px desktop / 46px mobile + badge arriba centrado
        </p>
        <div
          class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--type-mix sb-ui-stepper--track-dash"
        >
          \${renderStep(1, 2, 'Paso 1', 'mix', false)} \${renderStep(2, 2, 'Paso 2', 'mix', false)}
          \${renderStep(3, 2, 'Paso 3', 'mix', false)} \${renderStep(4, 2, 'Paso 4', 'mix', true)}
        </div>
      </div>
    </div>
  \`
}`,...(pe=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:pe.source},description:{story:`## 8. Todos los Tipos (Comparación)

Comparación lado a lado de los 3 tipos de stepper.`,...(ce=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var de,me,ue,be,ve;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Solid -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Solid (Sin clase --track-dash)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Líneas verdes sólidas siempre
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal">
          \${renderStep(1, 2, 'Paso 1', 'number', false)}
          \${renderStep(2, 2, 'Paso 2', 'number', false)}
          \${renderStep(3, 2, 'Paso 3', 'number', false)}
          \${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>

      <!-- Dash -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">Dash (Recomendado)</h3>
        <p style="font-size: 0.875rem; color: #666; margin-bottom: 1rem">
          Sólida después de completados, punteada hacia pendientes
        </p>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          \${renderStep(1, 2, 'Paso 1', 'number', false)}
          \${renderStep(2, 2, 'Paso 2', 'number', false)}
          \${renderStep(3, 2, 'Paso 3', 'number', false)}
          \${renderStep(4, 2, 'Paso 4', 'number', true)}
        </div>
      </div>
    </div>
  \`
}`,...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:`## 9. Track Styles (Comparación)

Comparación de líneas sólidas vs punteadas.`,...(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.description}}};var ye,he,fe,ge,$e;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- 2 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">2 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          \${renderStep(1, 2, 'Paso 1', 'number', false)}
          \${renderStep(2, 2, 'Paso 2', 'number', true)}
        </div>
      </div>

      <!-- 3 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">3 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          \${renderStep(1, 2, 'Paso 1', 'number', false)}
          \${renderStep(2, 2, 'Paso 2', 'number', false)}
          \${renderStep(3, 2, 'Paso 3', 'number', true)}
        </div>
      </div>

      <!-- 5 pasos -->
      <div>
        <h3 style="color: #038450; margin-bottom: 1rem">5 Pasos</h3>
        <div class="sb-ui-stepper sb-ui-stepper--horizontal sb-ui-stepper--track-dash">
          \${renderStep(1, 3, 'Paso 1', 'number', false)}
          \${renderStep(2, 3, 'Paso 2', 'number', false)}
          \${renderStep(3, 3, 'Paso 3', 'number', false)}
          \${renderStep(4, 3, 'Paso 4', 'number', false)}
          \${renderStep(5, 3, 'Paso 5', 'number', true)}
        </div>
      </div>
    </div>
  \`
}`,...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:`## 10. Diferentes Números de Pasos

El stepper se adapta automáticamente a cualquier número de pasos.`,...($e=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:$e.description}}};const Pe=["NumberHorizontal","IconHorizontal","MixHorizontal","Vertical","States","FormularioMultiPaso","Playground","TodosLosTipos","TrackStyles","DiferentesNumerosDePasos"];export{S as DiferentesNumerosDePasos,f as FormularioMultiPaso,b as IconHorizontal,v as MixHorizontal,u as NumberHorizontal,g as Playground,h as States,$ as TodosLosTipos,x as TrackStyles,y as Vertical,Pe as __namedExportsOrder,Se as default};
