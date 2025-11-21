import{x as s}from"./lit-element-BQ2u6o3f.js";const R={title:"Atoms/Tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de tabs versátil con 3 variantes visuales (Track, Button, Folder), 2 orientaciones (Horizontal, Vertical), soporte para iconos y descripciones."}}},argTypes:{variant:{control:"select",options:["track","button","folder"],description:"Variante visual del tab",table:{type:{summary:"string"},defaultValue:{summary:"track"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientación de los tabs",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},withIcons:{control:"boolean",description:"Incluir iconos en los tabs",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},withDescriptions:{control:"boolean",description:"Incluir descripciones en los tabs",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}}},t={parameters:{docs:{source:{format:"dedent",language:"html"}}},args:{variant:"track",orientation:"horizontal",withIcons:!0,withDescriptions:!0},render:o=>{const L=["sb-ui-tabs",`sb-ui-tabs--${o.variant}`,`sb-ui-tabs--${o.orientation}`].filter(Boolean).join(" ");return s`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 800px;">
        <div class="${L}">
          ${[{icon:"fa-home",title:"Home",description:"Página principal",active:!0},{icon:"fa-user",title:"Profile",description:"Tu perfil",active:!1},{icon:"fa-cog",title:"Settings",description:"Configuración",active:!1}].map(e=>s`
              <button
                class="sb-ui-tabs__item ${e.active?"sb-ui-tabs__item--active":""}"
                @click="${H=>{const b=H.currentTarget,c=b.parentElement;c&&(c.querySelectorAll(".sb-ui-tabs__item").forEach(E=>{E.classList.remove("sb-ui-tabs__item--active")}),b.classList.add("sb-ui-tabs__item--active"))}}"
              >
                ${o.withIcons?s`<i class="sb-ui-tabs__icon fa-solid ${e.icon}"></i>`:""}
                <div class="sb-ui-tabs__content">
                  <span class="sb-ui-tabs__title">${e.title}</span>
                  ${o.withDescriptions?s`<span class="sb-ui-tabs__description">${e.description}</span>`:""}
                </div>
              </button>
            `)}
        </div>
      </div>
    `}},a={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>s`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           HORIZONTAL - Solo títulos
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Solo Títulos)</h2>
        <p class="tabs-subtitle">Tabs horizontales solo con títulos, sin iconos ni descripciones.</p>
        <span class="demo-label">Solo títulos</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Home</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Profile</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Settings</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Disabled</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `},i={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>s`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-secondary-base, #ffe16f);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `},n={parameters:{docs:{source:{format:"dedent",language:"html"}}},render:()=>s`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-grayscale-D200, #333);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `};var l,r,u,_,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html'
      }
    }
  },
  args: {
    variant: 'track',
    orientation: 'horizontal',
    withIcons: true,
    withDescriptions: true
  },
  render: args => {
    const classes = ['sb-ui-tabs', \`sb-ui-tabs--\${args.variant}\`, \`sb-ui-tabs--\${args.orientation}\`].filter(Boolean).join(' ');
    const tabs = [{
      icon: 'fa-home',
      title: 'Home',
      description: 'Página principal',
      active: true
    }, {
      icon: 'fa-user',
      title: 'Profile',
      description: 'Tu perfil',
      active: false
    }, {
      icon: 'fa-cog',
      title: 'Settings',
      description: 'Configuración',
      active: false
    }];
    return html\`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 800px;">
        <div class="\${classes}">
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
                \${args.withIcons ? html\`<i class="sb-ui-tabs__icon fa-solid \${tab.icon}"></i>\` : ''}
                <div class="sb-ui-tabs__content">
                  <span class="sb-ui-tabs__title">\${tab.title}</span>
                  \${args.withDescriptions ? html\`<span class="sb-ui-tabs__description">\${tab.description}</span>\` : ''}
                </div>
              </button>
            \`)}
        </div>
      </div>
    \`;
  }
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source},description:{story:`## Playground (Interactivo)

Experimenta con todas las combinaciones de tabs usando los controles interactivos
en el panel inferior. Puedes ajustar variante, orientación, iconos y descripciones.`,...(d=(_=t.parameters)==null?void 0:_.docs)==null?void 0:d.description}}};var p,m,v,f,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           HORIZONTAL - Solo títulos
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Solo Títulos)</h2>
        <p class="tabs-subtitle">Tabs horizontales solo con títulos, sin iconos ni descripciones.</p>
        <span class="demo-label">Solo títulos</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Home</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Profile</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Settings</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Disabled</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source},description:{story:`## Track Variant - Matriz Completa

Variante con línea indicadora inferior/lateral según la orientación.
Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var h,y,T,D,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-secondary-base, #ffe16f);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:`## Button Variant - Matriz Completa

Variante con fondo amarillo/crema cuando está activo.
Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var z,C,w,k,V;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-grayscale-D200, #333);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  \`
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:`## Folder Variant - Matriz Completa

Variante estilo carpeta sin indicador visible.
Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.`,...(V=(k=n.parameters)==null?void 0:k.docs)==null?void 0:V.description}}};const j=["Playground","TrackVariant","ButtonVariant","FolderVariant"];export{i as ButtonVariant,n as FolderVariant,t as Playground,a as TrackVariant,j as __namedExportsOrder,R as default};
