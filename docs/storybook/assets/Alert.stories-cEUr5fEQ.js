import{x as s}from"./lit-element-CFKcR9Rr.js";const C={title:"Atoms/Alert",tags:["autodocs"],parameters:{docs:{description:{component:"Componente de alerta versátil con 4 estados principales (info, success, warning, error), 3 estilos de fondo y opciones de interactividad."}}},argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Tipo de alerta (estado)",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño de la alerta",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},styleVariant:{control:"select",options:["default","no-bg","outlined","filled"],description:"Variante de estilo (fondo)",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},title:{control:"text",description:"Título de la alerta",table:{type:{summary:"string"}}},message:{control:"text",description:"Mensaje de la alerta",table:{type:{summary:"string"}}},dismissible:{control:"boolean",description:"Permite cerrar la alerta",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},showIcon:{control:"boolean",description:"Mostrar icono",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},rounded:{control:"boolean",description:"Bordes redondeados",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},modifier:{control:"select",options:["none","minimal","toast","banner","compact"],description:"Modificador visual",table:{type:{summary:"string"},defaultValue:{summary:"none"}}}}},e={args:{variant:"info",size:"medium",styleVariant:"default",title:"Título de la alerta",message:"Este es el mensaje de la alerta que explica lo que está sucediendo.",dismissible:!1,showIcon:!0,rounded:!1,modifier:"none"},render:i=>{const p=["sb-ui-alert",`sb-ui-alert--${i.variant}`,i.size!=="medium"?`sb-ui-alert--${i.size}`:"",i.styleVariant!=="default"?`sb-ui-alert--${i.styleVariant}`:"",i.dismissible?"sb-ui-alert--dismissible":"",i.rounded?"sb-ui-alert--rounded":"",i.modifier!=="none"?`sb-ui-alert--${i.modifier}`:""].filter(Boolean).join(" "),f=t=>"";return s`
      <div style="max-width: 600px;">
        <div class="${p}">
          ${i.showIcon?s` <div class="sb-ui-alert-icon">${f(i.variant)}</div> `:""}

          <div class="sb-ui-alert-content">
            ${i.title?s` <div class="sb-ui-alert-title">${i.title}</div> `:""}
            ${i.message?s` <div class="sb-ui-alert-message">${i.message}</div> `:""}
          </div>

          ${i.dismissible?s`
                <button
                  class="sb-ui-alert-close"
                  type="button"
                  aria-label="Cerrar"
                  @click="${t=>{const r=t.target.closest(".sb-ui-alert");r&&(r.style.display="none")}}"
                >
                  ×
                </button>
              `:""}
        </div>
      </div>
    `}},a={render:()=>s`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .alert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .alert-demo {
        padding: 1rem;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-radius: 8px;
        background: var(--sb-ui-color-grayscale-white, #fff);
      }

      .alert-demo-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: DEFAULT (Con fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante DEFAULT - Con Fondo</h2>
        <p class="matrix-subtitle">
          Estilo por defecto con fondo suave de color. Máxima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Este es un mensaje informativo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Mensaje con botón cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación completada.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación exitosa.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa la información.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa los datos.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Ha ocurrido un error.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error crítico.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: NO-BG (Sin fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante NO-BG - Sin Fondo</h2>
        <p class="matrix-subtitle">
          Sin fondo, solo borde izquierdo de color. Mínima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo, solo borde.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo con cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           RESUMEN Y NOTAS
           ======================================== -->
      <div class="matrix-section" style="background: #fff9e6; border-left: 4px solid #ffa000;">
        <h3 style="margin-top: 0; color: #e65100;">📝 Notas Importantes</h3>
        <ul style="line-height: 1.8; color: #333;">
          <li>
            <strong>Estado por defecto:</strong> INFO es el estado por defecto (no necesitas
            especificar <code>.sb-ui-alert--info</code>).
          </li>
          <li><strong>Estilo por defecto:</strong> Con fondo suave es el estilo por defecto.</li>
          <li>
            <strong>Iconos automáticos:</strong> Los iconos se generan automáticamente por CSS
            usando pseudo-elementos <code>::before</code>.
          </li>
          <li>
            <strong>Contenedor de icono vacío:</strong> El elemento
            <code>&lt;div class="sb-ui-alert-icon"&gt;</code> debe estar completamente vacío.
          </li>
          <li>
            <strong>Iconos por estado:</strong> Info (i), Success (✓), Warning (⚠), Error (✕) se
            agregan automáticamente.
          </li>
          <li>
            <strong>Botón cerrar:</strong> Usa <code>.sb-ui-alert--dismissible</code> para mostrar
            el botón cerrar.
          </li>
          <li>
            <strong>Estructura:</strong> Los iconos y contenido usan <code>sb-ui-alert-icon</code>,
            <code>sb-ui-alert-content</code>, <code>sb-ui-alert-title</code>,
            <code>sb-ui-alert-message</code>.
          </li>
          <li>
            <strong>Accesibilidad:</strong> El botón cerrar incluye
            <code>aria-label="Cerrar"</code> para lectores de pantalla.
          </li>
          <li>
            <strong>Total de Combinaciones:</strong> 4 estados × 4 estilos × 2 opciones =
            <strong>32 combinaciones</strong> de alerta.
          </li>
          <li>
            <strong>Funcionalidad:</strong> El botón cerrar tiene JavaScript para ocultar la alerta
            al hacer clic.
          </li>
        </ul>
      </div>
    </div>
  `};var n,l,o,d,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'medium',
    styleVariant: 'default',
    title: 'Título de la alerta',
    message: 'Este es el mensaje de la alerta que explica lo que está sucediendo.',
    dismissible: false,
    showIcon: true,
    rounded: false,
    modifier: 'none'
  },
  render: args => {
    // Determinar las clases de la alerta
    const classes = ['sb-ui-alert', \`sb-ui-alert--\${args.variant}\`,
    // Siempre incluir la variante, incluso si es 'info'
    args.size !== 'medium' ? \`sb-ui-alert--\${args.size}\` : '', args.styleVariant !== 'default' ? \`sb-ui-alert--\${args.styleVariant}\` : '', args.dismissible ? 'sb-ui-alert--dismissible' : '', args.rounded ? 'sb-ui-alert--rounded' : '', args.modifier !== 'none' ? \`sb-ui-alert--\${args.modifier}\` : ''].filter(Boolean).join(' ');

    // Determinar el icono según la variante
    const getIcon = (_variant: string) => {
      // El CSS ya maneja los iconos automáticamente con ::before
      // Solo retornamos un div vacío que será poblado por CSS
      return '';
    };
    return html\`
      <div style="max-width: 600px;">
        <div class="\${classes}">
          \${args.showIcon ? html\` <div class="sb-ui-alert-icon">\${getIcon(args.variant)}</div> \` : ''}

          <div class="sb-ui-alert-content">
            \${args.title ? html\` <div class="sb-ui-alert-title">\${args.title}</div> \` : ''}
            \${args.message ? html\` <div class="sb-ui-alert-message">\${args.message}</div> \` : ''}
          </div>

          \${args.dismissible ? html\`
                <button
                  class="sb-ui-alert-close"
                  type="button"
                  aria-label="Cerrar"
                  @click="\${(e: Event) => {
      const alertEl = (e.target as HTMLElement).closest('.sb-ui-alert');
      if (alertEl) {
        alertEl.style.display = 'none';
      }
    }}"
                >
                  ×
                </button>
              \` : ''}
        </div>
      </div>
    \`;
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source},description:{story:`## Playground (Interactivo)

Experimenta con todas las combinaciones de la alerta usando los controles interactivos
en el panel inferior. Puedes ajustar estado, tamaño, estilo, contenido y más.`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};var v,u,b,m,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .alert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .alert-demo {
        padding: 1rem;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-radius: 8px;
        background: var(--sb-ui-color-grayscale-white, #fff);
      }

      .alert-demo-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: DEFAULT (Con fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante DEFAULT - Con Fondo</h2>
        <p class="matrix-subtitle">
          Estilo por defecto con fondo suave de color. Máxima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Este es un mensaje informativo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Mensaje con botón cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación completada.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación exitosa.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa la información.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa los datos.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Ha ocurrido un error.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error crítico.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: NO-BG (Sin fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante NO-BG - Sin Fondo</h2>
        <p class="matrix-subtitle">
          Sin fondo, solo borde izquierdo de color. Mínima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo, solo borde.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo con cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           RESUMEN Y NOTAS
           ======================================== -->
      <div class="matrix-section" style="background: #fff9e6; border-left: 4px solid #ffa000;">
        <h3 style="margin-top: 0; color: #e65100;">📝 Notas Importantes</h3>
        <ul style="line-height: 1.8; color: #333;">
          <li>
            <strong>Estado por defecto:</strong> INFO es el estado por defecto (no necesitas
            especificar <code>.sb-ui-alert--info</code>).
          </li>
          <li><strong>Estilo por defecto:</strong> Con fondo suave es el estilo por defecto.</li>
          <li>
            <strong>Iconos automáticos:</strong> Los iconos se generan automáticamente por CSS
            usando pseudo-elementos <code>::before</code>.
          </li>
          <li>
            <strong>Contenedor de icono vacío:</strong> El elemento
            <code>&lt;div class="sb-ui-alert-icon"&gt;</code> debe estar completamente vacío.
          </li>
          <li>
            <strong>Iconos por estado:</strong> Info (i), Success (✓), Warning (⚠), Error (✕) se
            agregan automáticamente.
          </li>
          <li>
            <strong>Botón cerrar:</strong> Usa <code>.sb-ui-alert--dismissible</code> para mostrar
            el botón cerrar.
          </li>
          <li>
            <strong>Estructura:</strong> Los iconos y contenido usan <code>sb-ui-alert-icon</code>,
            <code>sb-ui-alert-content</code>, <code>sb-ui-alert-title</code>,
            <code>sb-ui-alert-message</code>.
          </li>
          <li>
            <strong>Accesibilidad:</strong> El botón cerrar incluye
            <code>aria-label="Cerrar"</code> para lectores de pantalla.
          </li>
          <li>
            <strong>Total de Combinaciones:</strong> 4 estados × 4 estilos × 2 opciones =
            <strong>32 combinaciones</strong> de alerta.
          </li>
          <li>
            <strong>Funcionalidad:</strong> El botón cerrar tiene JavaScript para ocultar la alerta
            al hacer clic.
          </li>
        </ul>
      </div>
    </div>
  \`
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:`## Estados - Matriz Completa de Combinaciones

Matriz completa de la alerta mostrando todas las combinaciones de:
- **4 Estados**: Info (default), Success, Warning, Error
- **4 Variantes de Estilo**: Default (con fondo), No-BG, Outlined, Filled
- **2 Opciones**: Con/Sin botón cerrar

**Total: 32 combinaciones** (4 × 4 × 2)`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};const y=["Playground","Estados"];export{a as Estados,e as Playground,y as __namedExportsOrder,C as default};
