import{x as t}from"./lit-element-BQ2u6o3f.js";var d=Object.freeze,H=Object.defineProperty,e=(n,o)=>d(H(n,"raw",{value:d(n.slice())})),c,m,b,p,f,y;const Q={title:"Molecules/Modal",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de modal con slots personalizables, cierre por ESC/backdrop, bloqueo de scroll y animaciones suaves."}}},argTypes:{open:{control:"boolean",description:"Mostrar/ocultar el modal",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},title:{control:"text",description:"Título del modal",table:{type:{summary:"string"},defaultValue:{summary:""}}},closeOnBackdrop:{control:"boolean",description:"Cerrar al hacer clic en el backdrop",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showCloseButton:{control:"boolean",description:"Mostrar botón cerrar (×)",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}}},a={args:{open:!1,title:"Título del Modal",closeOnBackdrop:!0,showCloseButton:!0},render:n=>t(c||(c=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .modal-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="modal-demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Abrir Modal
      </button>

      <sb-ui-modal
        id="modal-playground"
        ?open="`,`"
        title="`,`"
        ?close-on-backdrop="`,`"
        ?show-close-button="`,`"
      >
        <p>Este es el contenido del modal. Puedes poner cualquier contenido aquí.</p>

        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="`,`"
          >
            Cancelar
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `])),()=>{const o=document.getElementById("modal-playground");o&&o.openModal()},n.open,n.title,n.closeOnBackdrop,n.showCloseButton,()=>{const o=document.getElementById("modal-playground");o&&o.close()})},i={render:()=>t(m||(m=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Abrir Modal Básico
      </button>

      <sb-ui-modal id="modal-basic" title="Información Importante">
        <p>Este es un modal básico con título y contenido simple.</p>
        <p>
          Puedes cerrar este modal haciendo clic fuera de él, presionando ESC o usando el botón de
          cerrar (×).
        </p>
      </sb-ui-modal>
    </div>
  `])),()=>{const n=document.getElementById("modal-basic");n&&n.openModal()})},s={render:()=>t(b||(b=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Abrir Modal con Footer
      </button>

      <sb-ui-modal id="modal-footer" title="Confirmar Acción">
        <p>¿Estás seguro de que deseas continuar con esta acción?</p>
        <p>Esta operación no se puede deshacer.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="`,`"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="`,`"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `])),()=>{const n=document.getElementById("modal-footer");n&&n.openModal()},()=>{const n=document.getElementById("modal-footer");n&&n.close()},()=>{const n=document.getElementById("modal-footer");n&&(n.close(),alert("Acción confirmada"))})},l={render:()=>t(p||(p=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      .warning-content {
        padding: 1rem;
        background: var(--sb-ui-color-feedback-warning-L400);
        border-left: 4px solid var(--sb-ui-color-feedback-warning-base);
        border-radius: 4px;
        margin-bottom: 1rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="`,`"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirm" title="⚠️ Confirmar Eliminación">
        <div class="warning-content">
          <strong>Advertencia:</strong> Esta acción es permanente y no se puede deshacer.
        </div>
        <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
        <p>Perderás acceso a todos tus datos y configuraciones.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="`,`"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="`,`"
          >
            Sí, Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `])),()=>{const n=document.getElementById("modal-confirm");n&&n.openModal()},()=>{const n=document.getElementById("modal-confirm");n&&n.close()},()=>{const n=document.getElementById("modal-confirm");n&&(n.close(),alert("Cuenta eliminada"))})},r={render:()=>t(f||(f=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Agregar Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Nuevo Usuario">
        <form
          @submit="`,`"
        >
          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Nombre completo</label>
            <input class="sb-ui-input" type="text" placeholder="Juan Pérez" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Email</label>
            <input class="sb-ui-input" type="email" placeholder="juan@example.com" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label">Rol</label>
            <select class="sb-ui-select">
              <option value="">Seleccionar rol</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
              <option value="guest">Invitado</option>
            </select>
          </div>

          <div slot="footer" class="footer-actions">
            <button
              type="button"
              class="sb-ui-button sb-ui-button--tertiary"
              @click="`,`"
            >
              Cancelar
            </button>
            <button type="submit" class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
              Crear Usuario
            </button>
          </div>
        </form>
      </sb-ui-modal>
    </div>
  `])),()=>{const n=document.getElementById("modal-form");n&&n.openModal()},n=>{n.preventDefault();const o=document.getElementById("modal-form");o&&(o.close(),alert("Usuario creado"))},()=>{const n=document.getElementById("modal-form");n&&n.close()})},u={render:()=>t(y||(y=e([`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .long-content p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="`,`"
      >
        Ver Términos y Condiciones
      </button>

      <sb-ui-modal id="modal-long" title="Términos y Condiciones">
        <div class="long-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit.
          </p>
        </div>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="`,`"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="`,`"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `])),()=>{const n=document.getElementById("modal-long");n&&n.openModal()},()=>{const n=document.getElementById("modal-long");n&&n.close()},()=>{const n=document.getElementById("modal-long");n&&(n.close(),alert("Términos aceptados"))})};var g,v,E,x,q;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Título del Modal',
    closeOnBackdrop: true,
    showCloseButton: true
  },
  render: args => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .modal-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="modal-demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-playground');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Abrir Modal
      </button>

      <sb-ui-modal
        id="modal-playground"
        ?open="\${args.open}"
        title="\${args.title}"
        ?close-on-backdrop="\${args.closeOnBackdrop}"
        ?show-close-button="\${args.showCloseButton}"
      >
        <p>Este es el contenido del modal. Puedes poner cualquier contenido aquí.</p>

        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="\${() => {
    const modal = document.getElementById('modal-playground');
    if (modal) {
      (modal as any).close();
    }
  }}"
          >
            Cancelar
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source},description:{story:`## Playground (Interactivo)

Experimenta con el modal y sus diferentes configuraciones.`,...(q=(x=a.parameters)==null?void 0:x.docs)==null?void 0:q.description}}};var C,B,h,k,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-basic');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Abrir Modal Básico
      </button>

      <sb-ui-modal id="modal-basic" title="Información Importante">
        <p>Este es un modal básico con título y contenido simple.</p>
        <p>
          Puedes cerrar este modal haciendo clic fuera de él, presionando ESC o usando el botón de
          cerrar (×).
        </p>
      </sb-ui-modal>
    </div>
  \`
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source},description:{story:`## Modal Básico

Modal simple con título y contenido.`,...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.description}}};var I,F,A,$,w;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-footer');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Abrir Modal con Footer
      </button>

      <sb-ui-modal id="modal-footer" title="Confirmar Acción">
        <p>¿Estás seguro de que deseas continuar con esta acción?</p>
        <p>Esta operación no se puede deshacer.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="\${() => {
    const modal = document.getElementById('modal-footer');
    if (modal) {
      (modal as any).close();
    }
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-footer');
    if (modal) {
      (modal as any).close();
      alert('Acción confirmada');
    }
  }}"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(A=(F=s.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:`## Con Footer Personalizado

Modal con botones de acción en el footer.`,...(w=($=s.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var S,P,R,_,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      .warning-content {
        padding: 1rem;
        background: var(--sb-ui-color-feedback-warning-L400);
        border-left: 4px solid var(--sb-ui-color-feedback-warning-base);
        border-radius: 4px;
        margin-bottom: 1rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-confirm');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirm" title="⚠️ Confirmar Eliminación">
        <div class="warning-content">
          <strong>Advertencia:</strong> Esta acción es permanente y no se puede deshacer.
        </div>
        <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
        <p>Perderás acceso a todos tus datos y configuraciones.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="\${() => {
    const modal = document.getElementById('modal-confirm');
    if (modal) {
      (modal as any).close();
    }
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-confirm');
    if (modal) {
      (modal as any).close();
      alert('Cuenta eliminada');
    }
  }}"
          >
            Sí, Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:`## Modal de Confirmación

Modal para confirmaciones destructivas o importantes.`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var U,D,T,z,N;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-form');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Agregar Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Nuevo Usuario">
        <form
          @submit="\${(e: Event) => {
    e.preventDefault();
    const modal = document.getElementById('modal-form');
    if (modal) {
      (modal as any).close();
      alert('Usuario creado');
    }
  }}"
        >
          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Nombre completo</label>
            <input class="sb-ui-input" type="text" placeholder="Juan Pérez" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Email</label>
            <input class="sb-ui-input" type="email" placeholder="juan@example.com" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label">Rol</label>
            <select class="sb-ui-select">
              <option value="">Seleccionar rol</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
              <option value="guest">Invitado</option>
            </select>
          </div>

          <div slot="footer" class="footer-actions">
            <button
              type="button"
              class="sb-ui-button sb-ui-button--tertiary"
              @click="\${() => {
    const modal = document.getElementById('modal-form');
    if (modal) {
      (modal as any).close();
    }
  }}"
            >
              Cancelar
            </button>
            <button type="submit" class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
              Crear Usuario
            </button>
          </div>
        </form>
      </sb-ui-modal>
    </div>
  \`
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:`## Modal con Formulario

Modal que contiene un formulario completo.`,...(N=(z=r.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var O,L,V,J,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <script type="module">
      import '@sb-ui/molecules';
    <\/script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .long-content p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="\${() => {
    const modal = document.getElementById('modal-long');
    if (modal) {
      (modal as any).openModal();
    }
  }}"
      >
        Ver Términos y Condiciones
      </button>

      <sb-ui-modal id="modal-long" title="Términos y Condiciones">
        <div class="long-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit.
          </p>
        </div>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="\${() => {
    const modal = document.getElementById('modal-long');
    if (modal) {
      (modal as any).close();
    }
  }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="\${() => {
    const modal = document.getElementById('modal-long');
    if (modal) {
      (modal as any).close();
      alert('Términos aceptados');
    }
  }}"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  \`
}`,...(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source},description:{story:`## Modal con Contenido Largo

Modal con scroll interno para contenido extenso.`,...(G=(J=u.parameters)==null?void 0:J.docs)==null?void 0:G.description}}};const W=["Playground","ModalBasico","ConFooterPersonalizado","ModalConfirmacion","ModalConFormulario","ContenidoLargo"];export{s as ConFooterPersonalizado,u as ContenidoLargo,i as ModalBasico,r as ModalConFormulario,l as ModalConfirmacion,a as Playground,W as __namedExportsOrder,Q as default};
