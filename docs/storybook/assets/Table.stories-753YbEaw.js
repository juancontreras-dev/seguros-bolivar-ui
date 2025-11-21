import{x as d}from"./lit-element-CFKcR9Rr.js";const D={title:"Atoms/Table",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de tabla versátil con múltiples variantes (striped, bordered, hover, compact) y sistema de paginación integrado."}}}},t={render:()=>d`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Básica</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Tabla estándar con diseño limpio y minimalista
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Admin</td>
                <td><span style="color: #038450; font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>María García</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
                <td><span style="color: #038450; font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carlos López</td>
                <td>carlos@example.com</td>
                <td>Editor</td>
                <td><span style="color: #9b9b9b; font-weight: 600;">Inactivo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},a={render:()=>d`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Striped</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Filas alternadas con fondo gris para mejor legibilidad
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laptop HP</td>
                <td>Electrónica</td>
                <td>$1,200</td>
                <td>15</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Mouse Logitech</td>
                <td>Accesorios</td>
                <td>$25</td>
                <td>50</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Teclado Mecánico</td>
                <td>Accesorios</td>
                <td>$80</td>
                <td>30</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Monitor Dell</td>
                <td>Electrónica</td>
                <td>$350</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},n={render:()=>d`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla con Hover</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Las filas se resaltan al pasar el mouse
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Empresa ABC</td>
                <td>2024-01-15</td>
                <td>$5,000</td>
                <td><span style="color: #038450; font-weight: 600;">Pagado</span></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Corporación XYZ</td>
                <td>2024-01-16</td>
                <td>$3,200</td>
                <td><span style="color: #FFB020; font-weight: 600;">Pendiente</span></td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Sociedad LMN</td>
                <td>2024-01-17</td>
                <td>$1,800</td>
                <td><span style="color: #038450; font-weight: 600;">Pagado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},o={render:()=>d`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla con Paginación</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Sistema de paginación completo con navegación
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Ana Martínez</td>
                <td>Ventas</td>
                <td>ana@segurosbolivar.com</td>
                <td>+57 300 123 4567</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pedro Rodríguez</td>
                <td>Marketing</td>
                <td>pedro@segurosbolivar.com</td>
                <td>+57 300 234 5678</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laura Gómez</td>
                <td>IT</td>
                <td>laura@segurosbolivar.com</td>
                <td>+57 300 345 6789</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Diego Torres</td>
                <td>RRHH</td>
                <td>diego@segurosbolivar.com</td>
                <td>+57 300 456 7890</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carmen Silva</td>
                <td>Finanzas</td>
                <td>carmen@segurosbolivar.com</td>
                <td>+57 300 567 8901</td>
              </tr>
            </tbody>
          </table>

          <div class="sb-ui-table-pagination">
            <button class="sb-ui-table-pagination__button" title="Primera página">
              <i class="fa-solid fa-angles-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Página anterior">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button sb-ui-table-pagination__button--active">
              1
            </button>
            <button class="sb-ui-table-pagination__button">2</button>
            <button class="sb-ui-table-pagination__button">3</button>
            <button class="sb-ui-table-pagination__button">4</button>
            <button class="sb-ui-table-pagination__button">5</button>
            <button class="sb-ui-table-pagination__button" title="Página siguiente">
              <i class="fa-solid fa-angle-right"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Última página">
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `},e={render:()=>d`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Combinada</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Striped + Bordered + Hover + Compact
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped sb-ui-table--bordered sb-ui-table--hover sb-ui-table--compact">
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unit.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRD-001</td>
                <td>Seguro Auto</td>
                <td>1</td>
                <td>$150/mes</td>
                <td>$1,800/año</td>
              </tr>
              <tr>
                <td>PRD-002</td>
                <td>Seguro Hogar</td>
                <td>1</td>
                <td>$80/mes</td>
                <td>$960/año</td>
              </tr>
              <tr>
                <td>PRD-003</td>
                <td>Seguro Vida</td>
                <td>2</td>
                <td>$50/mes</td>
                <td>$1,200/año</td>
              </tr>
              <tr>
                <td>PRD-004</td>
                <td>Seguro Salud</td>
                <td>1</td>
                <td>$120/mes</td>
                <td>$1,440/año</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align: right; font-weight: 700;">Total:</td>
                <td style="font-weight: 700; color: #038450;">$5,400/año</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `};var r,i,s,l,b;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Básica</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Tabla estándar con diseño limpio y minimalista
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Admin</td>
                <td><span style="color: #038450; font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>María García</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
                <td><span style="color: #038450; font-weight: 600;">Activo</span></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carlos López</td>
                <td>carlos@example.com</td>
                <td>Editor</td>
                <td><span style="color: #9b9b9b; font-weight: 600;">Inactivo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  \`
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:`## Tabla Básica

Tabla estándar con diseño limpio y minimalista. Incluye header con fondo gris claro
y filas con separadores sutiles.`,...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.description}}};var c,p,u,h,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Striped</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Filas alternadas con fondo gris para mejor legibilidad
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laptop HP</td>
                <td>Electrónica</td>
                <td>$1,200</td>
                <td>15</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Mouse Logitech</td>
                <td>Accesorios</td>
                <td>$25</td>
                <td>50</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Teclado Mecánico</td>
                <td>Accesorios</td>
                <td>$80</td>
                <td>30</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Monitor Dell</td>
                <td>Electrónica</td>
                <td>$350</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  \`
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:`## Tabla Striped

Tabla con filas alternadas en color gris claro para mejorar la legibilidad
en conjuntos de datos grandes.`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.description}}};var g,y,x,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla con Hover</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Las filas se resaltan al pasar el mouse
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Empresa ABC</td>
                <td>2024-01-15</td>
                <td>$5,000</td>
                <td><span style="color: #038450; font-weight: 600;">Pagado</span></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Corporación XYZ</td>
                <td>2024-01-16</td>
                <td>$3,200</td>
                <td><span style="color: #FFB020; font-weight: 600;">Pendiente</span></td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Sociedad LMN</td>
                <td>2024-01-17</td>
                <td>$1,800</td>
                <td><span style="color: #038450; font-weight: 600;">Pagado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  \`
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`## Tabla con Hover

Tabla que resalta las filas al pasar el mouse, mejorando la experiencia
de usuario al revisar información.`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var w,k,F,_,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla con Paginación</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Sistema de paginación completo con navegación
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--hover sb-ui-table--striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Ana Martínez</td>
                <td>Ventas</td>
                <td>ana@segurosbolivar.com</td>
                <td>+57 300 123 4567</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pedro Rodríguez</td>
                <td>Marketing</td>
                <td>pedro@segurosbolivar.com</td>
                <td>+57 300 234 5678</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Laura Gómez</td>
                <td>IT</td>
                <td>laura@segurosbolivar.com</td>
                <td>+57 300 345 6789</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Diego Torres</td>
                <td>RRHH</td>
                <td>diego@segurosbolivar.com</td>
                <td>+57 300 456 7890</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Carmen Silva</td>
                <td>Finanzas</td>
                <td>carmen@segurosbolivar.com</td>
                <td>+57 300 567 8901</td>
              </tr>
            </tbody>
          </table>

          <div class="sb-ui-table-pagination">
            <button class="sb-ui-table-pagination__button" title="Primera página">
              <i class="fa-solid fa-angles-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Página anterior">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="sb-ui-table-pagination__button sb-ui-table-pagination__button--active">
              1
            </button>
            <button class="sb-ui-table-pagination__button">2</button>
            <button class="sb-ui-table-pagination__button">3</button>
            <button class="sb-ui-table-pagination__button">4</button>
            <button class="sb-ui-table-pagination__button">5</button>
            <button class="sb-ui-table-pagination__button" title="Página siguiente">
              <i class="fa-solid fa-angle-right"></i>
            </button>
            <button class="sb-ui-table-pagination__button" title="Última página">
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source},description:{story:`## Tabla con Paginación

Tabla completa con sistema de paginación integrado. Incluye botones de navegación
para primera, anterior, siguiente y última página.`,...(P=(_=o.parameters)==null?void 0:_.docs)==null?void 0:P.description}}};var T,E,$,S,R;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .story-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }
      .table-wrapper {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .sb-ui-table-container {
        max-width: 100%;
        overflow-x: auto;
      }
    </style>

    <div class="story-container">
      <div class="table-wrapper">
        <h2 style="margin-bottom: 1rem; color: #038450;">Tabla Combinada</h2>
        <p style="margin-bottom: 1.5rem; color: #5b5b5b;">
          Striped + Bordered + Hover + Compact
        </p>

        <div class="sb-ui-table-container">
          <table class="sb-ui-table sb-ui-table--striped sb-ui-table--bordered sb-ui-table--hover sb-ui-table--compact">
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unit.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRD-001</td>
                <td>Seguro Auto</td>
                <td>1</td>
                <td>$150/mes</td>
                <td>$1,800/año</td>
              </tr>
              <tr>
                <td>PRD-002</td>
                <td>Seguro Hogar</td>
                <td>1</td>
                <td>$80/mes</td>
                <td>$960/año</td>
              </tr>
              <tr>
                <td>PRD-003</td>
                <td>Seguro Vida</td>
                <td>2</td>
                <td>$50/mes</td>
                <td>$1,200/año</td>
              </tr>
              <tr>
                <td>PRD-004</td>
                <td>Seguro Salud</td>
                <td>1</td>
                <td>$120/mes</td>
                <td>$1,440/año</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align: right; font-weight: 700;">Total:</td>
                <td style="font-weight: 700; color: #038450;">$5,400/año</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  \`
}`,...($=(E=e.parameters)==null?void 0:E.docs)==null?void 0:$.source},description:{story:`## Tabla Combinada

Ejemplo de tabla combinando múltiples variantes: striped, bordered, hover y compact.
Ideal para interfaces con espacio limitado.`,...(R=(S=e.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};const L=["Basic","Striped","Hover","WithPagination","Combined"];export{t as Basic,e as Combined,n as Hover,a as Striped,o as WithPagination,L as __namedExportsOrder,D as default};
