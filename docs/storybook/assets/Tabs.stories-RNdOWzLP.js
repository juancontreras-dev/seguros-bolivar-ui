import{x as e}from"./lit-element-CFKcR9Rr.js";const B={title:"Atoms/Tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de tabs con 3 variantes visuales: Track (línea inferior, 48px), Button (fondo amarillo, 72px) y Folder (estilo carpeta, 72px). Cada variante tiene dimensiones y estilos específicos."}}},argTypes:{variant:{control:"select",options:["track","button","folder"],description:"Variante visual del tab",table:{type:{summary:"string"},defaultValue:{summary:"track"}}}}},i={args:{variant:"track"},render:a=>{const t=a.variant==="button"||a.variant==="folder",s=[{title:"Seguros",description:"Protección total",active:!0},{title:"Inversiones",description:"Haz crecer tu dinero",active:!1},{title:"Créditos",description:"Financia proyectos",active:!1},{title:"Ahorros",description:"Planifica tu futuro",active:!1},{title:"Pensiones",description:"Retiro seguro",active:!1}];return e`
      <div style="max-width: 800px; padding: 2rem; background: #fafafa;">
        <div class="sb-ui-tabs sb-ui-tabs--${a.variant}">
          ${s.map(n=>e`
              <button
                class="sb-ui-tabs__item ${n.active?"sb-ui-tabs__item--active":""}"
                @click="${I=>{const l=I.currentTarget,m=l.parentElement;m&&(m.querySelectorAll(".sb-ui-tabs__item").forEach(M=>{M.classList.remove("sb-ui-tabs__item--active")}),l.classList.add("sb-ui-tabs__item--active"))}}"
              >
                ${t?e`<i class="sb-ui-tabs__icon fa-solid fa-globe"></i>`:""}
                <span class="sb-ui-tabs__title">${n.title}</span>
                <span class="sb-ui-tabs__description">${n.description}</span>
              </button>
            `)}
        </div>
      </div>
    `}},r={render:()=>e`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Track - Estados</h2>
        <p class="tabs-demo-subtitle">
          Línea verde inferior. Sin iconos. 48px altura × 152px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 48px</li>
            <li><strong>Ancho:</strong> 152px</li>
            <li><strong>Indicador:</strong> Border-bottom verde (3px)</li>
            <li><strong>Iconos:</strong> NO</li>
            <li><strong>Font Title:</strong> 0.875rem (14px)</li>
            <li><strong>Font Description:</strong> 0.6875rem (11px)</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--track">
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  `},o={render:()=>e`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #ffe16f;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #fffaf0;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #ffe16f;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Button - Estados</h2>
        <p class="tabs-demo-subtitle">
          Fondo amarillo activo. Con iconos. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Amarillo (#FFE16F)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--button">
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  `},c={render:()=>e`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Folder - Estados</h2>
        <p class="tabs-demo-subtitle">
          Estilo carpeta con border-radius solo arriba. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px 8px 0 0 (solo arriba)</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Verde claro (#F2F9F6)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--folder">
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  `},b={render:()=>e`
    <style>
      .comparison-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .comparison-item {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .comparison-item h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 700;
      }

      .comparison-item .spec-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .comparison-item--track h3 {
        color: #038450;
      }
      .comparison-item--track .spec-badge {
        background: #f2f9f6;
        color: #038450;
      }

      .comparison-item--button h3 {
        color: #c99700;
      }
      .comparison-item--button .spec-badge {
        background: #fffaf0;
        color: #c99700;
      }

      .comparison-item--folder h3 {
        color: #666;
      }
      .comparison-item--folder .spec-badge {
        background: #f5f5f5;
        color: #666;
      }
    </style>

    <div class="comparison-container">
      <h2 style="margin-bottom: 2rem; color: #038450; text-align: center;">
        Comparación de Variantes
      </h2>

      <div class="comparison-grid">
        <!-- Track -->
        <div class="comparison-item comparison-item--track">
          <h3>Track</h3>
          <span class="spec-badge">48px × 152px | No iconos</span>

          <div class="sb-ui-tabs sb-ui-tabs--track">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Button -->
        <div class="comparison-item comparison-item--button">
          <h3>Button</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--button">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Folder -->
        <div class="comparison-item comparison-item--folder">
          <h3>Folder</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--folder">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="${a=>{const t=a.currentTarget,s=t.parentElement;s&&(s.querySelectorAll(".sb-ui-tabs__item").forEach(n=>{n.classList.remove("sb-ui-tabs__item--active")}),t.classList.add("sb-ui-tabs__item--active"))}}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `};var p,u,d,_,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'track'
  },
  render: args => {
    const showIcons = args.variant === 'button' || args.variant === 'folder';
    const tabs = [{
      title: 'Seguros',
      description: 'Protección total',
      active: true
    }, {
      title: 'Inversiones',
      description: 'Haz crecer tu dinero',
      active: false
    }, {
      title: 'Créditos',
      description: 'Financia proyectos',
      active: false
    }, {
      title: 'Ahorros',
      description: 'Planifica tu futuro',
      active: false
    }, {
      title: 'Pensiones',
      description: 'Retiro seguro',
      active: false
    }];
    return html\`
      <div style="max-width: 800px; padding: 2rem; background: #fafafa;">
        <div class="sb-ui-tabs sb-ui-tabs--\${args.variant}">
          \${tabs.map(tab => html\`
              <button
                class="sb-ui-tabs__item \${tab.active ? 'sb-ui-tabs__item--active' : ''}"
                @click="\${(e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const parent = target.parentElement;
      if (parent) {
        parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
          item.classList.remove('sb-ui-tabs__item--active');
        });
        target.classList.add('sb-ui-tabs__item--active');
      }
    }}"
              >
                \${showIcons ? html\`<i class="sb-ui-tabs__icon fa-solid fa-globe"></i>\` : ''}
                <span class="sb-ui-tabs__title">\${tab.title}</span>
                <span class="sb-ui-tabs__description">\${tab.description}</span>
              </button>
            \`)}
        </div>
      </div>
    \`;
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:`## Playground (Interactivo)

Experimenta con las 3 variantes de tabs. Cada una tiene su propia identidad visual y dimensiones específicas.`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.description}}};var f,v,x,E,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Track - Estados</h2>
        <p class="tabs-demo-subtitle">
          Línea verde inferior. Sin iconos. 48px altura × 152px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 48px</li>
            <li><strong>Ancho:</strong> 152px</li>
            <li><strong>Indicador:</strong> Border-bottom verde (3px)</li>
            <li><strong>Iconos:</strong> NO</li>
            <li><strong>Font Title:</strong> 0.875rem (14px)</li>
            <li><strong>Font Description:</strong> 0.6875rem (11px)</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--track">
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`## Track Variant (48px)

Tabs con línea verde inferior como indicador. Altura de 48px, ancho de 152px.
**NO incluye iconos**, solo título y descripción.`,...(h=(E=r.parameters)==null?void 0:E.docs)==null?void 0:h.description}}};var y,L,k,T,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #ffe16f;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #fffaf0;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #ffe16f;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Button - Estados</h2>
        <p class="tabs-demo-subtitle">
          Fondo amarillo activo. Con iconos. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Amarillo (#FFE16F)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--button">
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(k=(L=o.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:`## Button Variant (72px)

Tabs con apariencia de botones y fondo amarillo cuando están activos.
Altura de 72px, ancho de 146px. **Incluye iconos de 20px**.`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var S,$,F,q,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .tabs-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .tabs-demo-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-demo-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #038450;
      }

      .tabs-demo-subtitle {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .tabs-demo-specs {
        background: #f2f9f6;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #038450;
      }

      .tabs-demo-specs ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.875rem;
        color: #333;
      }

      .tabs-demo-specs li {
        margin-bottom: 0.25rem;
      }
    </style>

    <div class="tabs-demo-container">
      <div class="tabs-demo-section">
        <h2 class="tabs-demo-title">Folder - Estados</h2>
        <p class="tabs-demo-subtitle">
          Estilo carpeta con border-radius solo arriba. 72px altura × 146px ancho.
        </p>

        <div class="tabs-demo-specs">
          <ul>
            <li><strong>Altura:</strong> 72px</li>
            <li><strong>Ancho:</strong> 146px</li>
            <li><strong>Border-radius:</strong> 8px 8px 0 0 (solo arriba)</li>
            <li><strong>Iconos:</strong> SÍ (20px)</li>
            <li><strong>Active BG:</strong> Verde claro (#F2F9F6)</li>
            <li><strong>Active Text:</strong> Verde (#038450), bold</li>
          </ul>
        </div>

        <div class="sb-ui-tabs sb-ui-tabs--folder">
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Seguros</span>
            <span class="sb-ui-tabs__description">Protección total</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Inversiones</span>
            <span class="sb-ui-tabs__description">Haz crecer dinero</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Créditos</span>
            <span class="sb-ui-tabs__description">Financia proyectos</span>
          </button>
          <button
            class="sb-ui-tabs__item"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Ahorros</span>
            <span class="sb-ui-tabs__description">Planifica futuro</span>
          </button>
          <button
            class="sb-ui-tabs__item sb-ui-tabs__item--active"
            @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
          >
            <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
            <span class="sb-ui-tabs__title">Pensiones</span>
            <span class="sb-ui-tabs__description">Retiro seguro</span>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(F=($=c.parameters)==null?void 0:$.docs)==null?void 0:F.source},description:{story:`## Folder Variant (72px)

Tabs estilo carpeta con border-radius solo en la parte superior.
Altura de 72px, ancho de 146px. **Incluye iconos de 20px**.`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.description}}};var z,H,P,D,C;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .comparison-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: #fafafa;
      }

      .comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .comparison-item {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .comparison-item h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 700;
      }

      .comparison-item .spec-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .comparison-item--track h3 {
        color: #038450;
      }
      .comparison-item--track .spec-badge {
        background: #f2f9f6;
        color: #038450;
      }

      .comparison-item--button h3 {
        color: #c99700;
      }
      .comparison-item--button .spec-badge {
        background: #fffaf0;
        color: #c99700;
      }

      .comparison-item--folder h3 {
        color: #666;
      }
      .comparison-item--folder .spec-badge {
        background: #f5f5f5;
        color: #666;
      }
    </style>

    <div class="comparison-container">
      <h2 style="margin-bottom: 2rem; color: #038450; text-align: center;">
        Comparación de Variantes
      </h2>

      <div class="comparison-grid">
        <!-- Track -->
        <div class="comparison-item comparison-item--track">
          <h3>Track</h3>
          <span class="spec-badge">48px × 152px | No iconos</span>

          <div class="sb-ui-tabs sb-ui-tabs--track">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Button -->
        <div class="comparison-item comparison-item--button">
          <h3>Button</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--button">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>

        <!-- Folder -->
        <div class="comparison-item comparison-item--folder">
          <h3>Folder</h3>
          <span class="spec-badge">72px × 146px | Con iconos 20px</span>

          <div class="sb-ui-tabs sb-ui-tabs--folder">
            <button
              class="sb-ui-tabs__item sb-ui-tabs__item--active"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
            <button
              class="sb-ui-tabs__item"
              @click="\${(e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.sb-ui-tabs__item').forEach(item => {
        item.classList.remove('sb-ui-tabs__item--active');
      });
      target.classList.add('sb-ui-tabs__item--active');
    }
  }}"
            >
              <i class="fa-solid fa-globe sb-ui-tabs__icon"></i>
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:`## Comparación de las 3 Variantes

Vista lado a lado de las 3 variantes para comparar sus diferencias visuales y dimensiones.`,...(C=(D=b.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};const R=["Playground","TrackVariant","ButtonVariant","FolderVariant","Comparison"];export{o as ButtonVariant,b as Comparison,c as FolderVariant,i as Playground,r as TrackVariant,R as __namedExportsOrder,B as default};
