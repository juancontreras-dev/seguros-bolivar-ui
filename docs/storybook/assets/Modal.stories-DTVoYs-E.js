import{x as s}from"./lit-element-CFKcR9Rr.js";const H={title:"Molecules/Modal",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Modal interactivo con overlay. Este es un Web Component que requiere JavaScript."},story:{inline:!1,iframeHeight:"700px"}},viewport:{defaultViewport:"desktop"}},argTypes:{title:{control:"text",description:"Título del modal",table:{type:{summary:"string"}}},open:{control:"boolean",description:"Controla si el modal está visible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},closable:{control:"boolean",description:"Si muestra el botón X de cerrar",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del modal",table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}}}},e={args:{title:"Título del Modal",open:!0,closable:!0,size:"medium"},parameters:{docs:{story:{iframeHeight:"700px"}}},render:t=>s`
    <div style="padding: 2rem; min-height: 600px;">
      <sb-ui-modal
        id="modal-playground"
        title="${t.title}"
        ?open="${t.open}"
        ?closable="${t.closable}"
        size="${t.size}"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333; line-height: 1.6;">
            Este es el contenido del modal. Puedes cambiar el <strong>título</strong>,
            <strong>tamaño</strong>, y si es <strong>cerrable</strong> usando los controles de arriba.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Los cambios se aplican en tiempo real gracias a la reactividad del Web Component.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${()=>{const o=document.getElementById("modal-playground");o&&o.removeAttribute("open")}}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const o=document.getElementById("modal-playground");o&&o.removeAttribute("open"),alert("¡Acción confirmada!")}}"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real. El
        modal se actualiza automáticamente.
      </div>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        style="margin-top: 1rem;"
        @click="${()=>{const o=document.getElementById("modal-playground");o&&o.setAttribute("open","true")}}"
      >
        Abrir Modal
      </button>
    </div>
  `},n={parameters:{docs:{story:{iframeHeight:"700px"}}},render:()=>s`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="${()=>{const t=document.getElementById("modal-confirmation");t&&t.setAttribute("open","true")}}"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirmation" title="¿Estás seguro?" size="small" open="false">
        <div slot="body">
          <p style="margin: 0; color: #333; line-height: 1.6;">
            Esta acción no se puede deshacer. ¿Deseas continuar?
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${()=>{const t=document.getElementById("modal-confirmation");t&&t.removeAttribute("open")}}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-confirmation");t&&t.removeAttribute("open"),alert("Cuenta eliminada")}}"
          >
            Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `},i={parameters:{docs:{story:{iframeHeight:"800px"}}},render:()=>s`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${()=>{const t=document.getElementById("modal-form");t&&t.setAttribute("open","true")}}"
      >
        Nuevo Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Crear Nuevo Usuario" size="medium" open="false">
        <div slot="body">
          <form style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Nombre
              </label>
              <input
                type="text"
                class="sb-ui-input"
                placeholder="Ingresa el nombre"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Email
              </label>
              <input
                type="email"
                class="sb-ui-input"
                placeholder="usuario@ejemplo.com"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Rol
              </label>
              <select class="sb-ui-select" style="width: 100%;">
                <option>Usuario</option>
                <option>Administrador</option>
                <option>Editor</option>
              </select>
            </div>
          </form>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${()=>{const t=document.getElementById("modal-form");t&&t.removeAttribute("open")}}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-form");t&&t.removeAttribute("open"),alert("Usuario creado exitosamente")}}"
          >
            Crear Usuario
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `},a={parameters:{docs:{story:{iframeHeight:"800px"}}},render:()=>s`
    <div style="padding: 2rem; min-height: 600px; display: flex; gap: 1rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${()=>{const t=document.getElementById("modal-small");t&&t.setAttribute("open","true")}}"
      >
        Small
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${()=>{const t=document.getElementById("modal-medium");t&&t.setAttribute("open","true")}}"
      >
        Medium
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="${()=>{const t=document.getElementById("modal-large");t&&t.setAttribute("open","true")}}"
      >
        Large
      </button>

      <!-- Modal Small -->
      <sb-ui-modal id="modal-small" title="Modal Small" size="small" open="false">
        <div slot="body">
          <p style="margin: 0;">Este es un modal pequeño, ideal para confirmaciones rápidas.</p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-small");t&&t.removeAttribute("open")}}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Medium -->
      <sb-ui-modal id="modal-medium" title="Modal Medium (Default)" size="medium" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal mediano, el tamaño por defecto. Ideal para formularios y contenido
            general.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-medium");t&&t.removeAttribute("open")}}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Large -->
      <sb-ui-modal id="modal-large" title="Modal Large" size="large" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal grande, perfecto para contenido extenso, tablas, o múltiples secciones.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-large");t&&t.removeAttribute("open")}}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `},l={parameters:{docs:{story:{iframeHeight:"700px"}}},render:()=>s`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${()=>{const t=document.getElementById("modal-non-closable");t&&t.setAttribute("open","true")}}"
      >
        Abrir Modal No Cerrable
      </button>

      <sb-ui-modal
        id="modal-non-closable"
        title="Acción Requerida"
        size="medium"
        closable="false"
        open="false"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333;">
            Este modal no se puede cerrar haciendo clic fuera o en el botón X. Debes usar los
            botones del footer.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Ideal para acciones críticas que requieren una decisión explícita.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="${()=>{const t=document.getElementById("modal-non-closable");t&&t.removeAttribute("open")}}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${()=>{const t=document.getElementById("modal-non-closable");t&&t.removeAttribute("open"),alert("Acción confirmada")}}"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `};var r,d,m,u,b;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Título del Modal',
    open: true,
    closable: true,
    size: 'medium'
  },
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: args => html\`
    <div style="padding: 2rem; min-height: 600px;">
      <sb-ui-modal
        id="modal-playground"
        title="\${args.title}"
        ?open="\${args.open}"
        ?closable="\${args.closable}"
        size="\${args.size}"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333; line-height: 1.6;">
            Este es el contenido del modal. Puedes cambiar el <strong>título</strong>,
            <strong>tamaño</strong>, y si es <strong>cerrable</strong> usando los controles de arriba.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Los cambios se aplican en tiempo real gracias a la reactividad del Web Component.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="\${() => {
    const modal = document.getElementById('modal-playground') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-playground') as any;
    if (modal) modal.removeAttribute('open');
    alert('¡Acción confirmada!');
  }}"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>

      <div
        style="margin-top: 1rem; padding: 1rem; background: #E3F2FD; border-radius: 4px; font-size: 0.875rem;"
      >
        <strong>💡 Tip:</strong> Cambia los controles arriba para ver los cambios en tiempo real. El
        modal se actualiza automáticamente.
      </div>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        style="margin-top: 1rem;"
        @click="\${() => {
    const modal = document.getElementById('modal-playground') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Abrir Modal
      </button>
    </div>
  \`
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Modal básico con todas las opciones configurables",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var c,p,y,g,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-confirmation') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirmation" title="¿Estás seguro?" size="small" open="false">
        <div slot="body">
          <p style="margin: 0; color: #333; line-height: 1.6;">
            Esta acción no se puede deshacer. ¿Deseas continuar?
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="\${() => {
    const modal = document.getElementById('modal-confirmation') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-confirmation') as any;
    if (modal) modal.removeAttribute('open');
    alert('Cuenta eliminada');
  }}"
          >
            Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source},description:{story:"Modal de confirmación con contenido simple",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var v,E,x,h,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '800px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-form') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Nuevo Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Crear Nuevo Usuario" size="medium" open="false">
        <div slot="body">
          <form style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Nombre
              </label>
              <input
                type="text"
                class="sb-ui-input"
                placeholder="Ingresa el nombre"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Email
              </label>
              <input
                type="email"
                class="sb-ui-input"
                placeholder="usuario@ejemplo.com"
                style="width: 100%;"
              />
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                Rol
              </label>
              <select class="sb-ui-select" style="width: 100%;">
                <option>Usuario</option>
                <option>Administrador</option>
                <option>Editor</option>
              </select>
            </div>
          </form>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="\${() => {
    const modal = document.getElementById('modal-form') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-form') as any;
    if (modal) modal.removeAttribute('open');
    alert('Usuario creado exitosamente');
  }}"
          >
            Crear Usuario
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(x=(E=i.parameters)==null?void 0:E.docs)==null?void 0:x.source},description:{story:"Modal con formulario",...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};var A,$,I,B,C;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '800px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 2rem; min-height: 600px; display: flex; gap: 1rem;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="\${() => {
    const modal = document.getElementById('modal-small') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Small
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="\${() => {
    const modal = document.getElementById('modal-medium') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Medium
      </button>

      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke"
        @click="\${() => {
    const modal = document.getElementById('modal-large') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Large
      </button>

      <!-- Modal Small -->
      <sb-ui-modal id="modal-small" title="Modal Small" size="small" open="false">
        <div slot="body">
          <p style="margin: 0;">Este es un modal pequeño, ideal para confirmaciones rápidas.</p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-small') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Medium -->
      <sb-ui-modal id="modal-medium" title="Modal Medium (Default)" size="medium" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal mediano, el tamaño por defecto. Ideal para formularios y contenido
            general.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-medium') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>

      <!-- Modal Large -->
      <sb-ui-modal id="modal-large" title="Modal Large" size="large" open="false">
        <div slot="body">
          <p style="margin: 0;">
            Este es un modal grande, perfecto para contenido extenso, tablas, o múltiples secciones.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-large') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cerrar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(I=($=a.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"Comparación de tamaños",...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.description}}};var M,z,F,D,S;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: '700px'
      }
    }
  },
  render: () => html\`
    <div style="padding: 2rem; min-height: 600px;">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-non-closable') as any;
    if (modal) modal.setAttribute('open', 'true');
  }}"
      >
        Abrir Modal No Cerrable
      </button>

      <sb-ui-modal
        id="modal-non-closable"
        title="Acción Requerida"
        size="medium"
        closable="false"
        open="false"
      >
        <div slot="body">
          <p style="margin: 0 0 1rem 0; color: #333;">
            Este modal no se puede cerrar haciendo clic fuera o en el botón X. Debes usar los
            botones del footer.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            Ideal para acciones críticas que requieren una decisión explícita.
          </p>
        </div>
        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--secondary sb-ui-button--stroke"
            @click="\${() => {
    const modal = document.getElementById('modal-non-closable') as any;
    if (modal) modal.removeAttribute('open');
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-non-closable') as any;
    if (modal) modal.removeAttribute('open');
    alert('Acción confirmada');
  }}"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"Modal sin botón de cerrar",...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};const q=["Playground","Confirmation","WithForm","Sizes","NonClosable"];export{n as Confirmation,l as NonClosable,e as Playground,a as Sizes,i as WithForm,q as __namedExportsOrder,H as default};
