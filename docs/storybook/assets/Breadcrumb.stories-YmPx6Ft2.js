import{x as i}from"./lit-element-CFKcR9Rr.js";const A={title:"Atoms/Breadcrumb",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de navegación breadcrumb que muestra la ruta de navegación actual y permite al usuario volver a páginas anteriores."}}}},a={render:()=>i`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Básico</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 3 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Seguros</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `},r={render:()=>i`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Iconos</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Separadores con iconos de chevron
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">
                <i class="fa-solid fa-house"></i>
                Home
              </a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">Dashboard</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#users">Usuarios</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Perfil</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `},s={render:()=>i`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Largo</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 5 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#insurance">Seguros</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#auto">Autos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `},e={render:()=>i`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Compacto</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Versión simplificada para espacios reducidos
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">
                <i class="fa-solid fa-arrow-left"></i>
                Volver a Dashboard
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `},n={render:()=>i`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .breadcrumb-dropdown {
        display: inline-block;
        position: relative;
      }
      .breadcrumb-dropdown__button {
        background: none;
        border: none;
        color: #038450;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        text-decoration: underline;
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Dropdown</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Menú colapsable para niveles intermedios
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <div class="breadcrumb-dropdown">
                <button class="breadcrumb-dropdown__button">... (3 niveles)</button>
              </div>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `};var b,o,c,l,d;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Básico</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 3 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Seguros</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  \`
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source},description:{story:`## Breadcrumb Básico

Breadcrumb estándar con 3 niveles de navegación. La página actual
no es un link y tiene estilo diferenciado.`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var u,t,m,p,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Iconos</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Separadores con iconos de chevron
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">
                <i class="fa-solid fa-house"></i>
                Home
              </a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">Dashboard</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#users">Usuarios</a>
              <span class="sb-ui-breadcrumb__separator">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Perfil</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  \`
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source},description:{story:`## Breadcrumb con Iconos

Breadcrumb que utiliza iconos de Font Awesome como separadores
en lugar del slash tradicional.`,...(_=(p=r.parameters)==null?void 0:p.docs)==null?void 0:_.description}}};var f,g,h,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Largo</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Navegación con 5 niveles de jerarquía
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#products">Productos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#insurance">Seguros</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#auto">Autos</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  \`
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`## Breadcrumb Largo

Ejemplo de breadcrumb con múltiples niveles de navegación (5 niveles).
En mobile, se puede implementar truncado para ahorrar espacio.`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var x,w,k,B,F;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb Compacto</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Versión simplificada para espacios reducidos
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#dashboard">
                <i class="fa-solid fa-arrow-left"></i>
                Volver a Dashboard
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  \`
}`,...(k=(w=e.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`## Breadcrumb Compacto

Versión compacta del breadcrumb ideal para headers o espacios reducidos.
Solo muestra el nivel anterior y el actual.`,...(F=(B=e.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var P,L,j,S,D;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .breadcrumb-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .breadcrumb-dropdown {
        display: inline-block;
        position: relative;
      }
      .breadcrumb-dropdown__button {
        background: none;
        border: none;
        color: #038450;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        text-decoration: underline;
      }
    </style>

    <div class="story-container">
      <div class="breadcrumb-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Breadcrumb con Dropdown</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Menú colapsable para niveles intermedios
        </p>

        <nav class="sb-ui-breadcrumb" aria-label="breadcrumb">
          <ol class="sb-ui-breadcrumb__list">
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#home">Home</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <div class="breadcrumb-dropdown">
                <button class="breadcrumb-dropdown__button">... (3 niveles)</button>
              </div>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <a class="sb-ui-breadcrumb__link" href="#plans">Planes</a>
              <span class="sb-ui-breadcrumb__separator">/</span>
            </li>
            <li class="sb-ui-breadcrumb__item">
              <span class="sb-ui-breadcrumb__current" aria-current="page">Plan Premium</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  \`
}`,...(j=(L=n.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:`## Breadcrumb con Menú Dropdown

Breadcrumb que incluye un menú dropdown para niveles intermedios,
útil cuando hay muchos niveles de navegación.`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};const E=["Basic","WithIcons","Long","Compact","WithDropdown"];export{a as Basic,e as Compact,s as Long,n as WithDropdown,r as WithIcons,E as __namedExportsOrder,A as default};
