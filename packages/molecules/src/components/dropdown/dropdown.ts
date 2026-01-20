import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Dropdown Component (Placeholder)
 * TODO: Implementar funcionalidad completa
 *
 * @element sb-ui-dropdown
 */
@customElement('sb-ui-dropdown')
export class SbUiDropdown extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      --sb-ui-dropdown-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-dropdown-border-radius: 8px;
      --sb-ui-dropdown-padding: 0.75rem 1rem;
    }

    .dropdown {
      border: var(--sb-ui-dropdown-border);
      border-radius: var(--sb-ui-dropdown-border-radius);
      padding: var(--sb-ui-dropdown-padding);
      font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
      cursor: pointer;
      background: var(--sb-ui-color-grayscale-white, #ffffff);
      min-width: 200px;
    }

    .dropdown:hover {
      border-color: var(--sb-ui-color-primary-base, #007acc);
    }

    .dropdown:focus {
      outline: 2px solid var(--sb-ui-color-primary-base, #007acc);
      outline-offset: 2px;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = 'Seleccionar opción';

  override render() {
    return html`
      <div class="dropdown" tabindex="0" role="combobox" aria-label="Dropdown">
        ${this.value || this.placeholder}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-dropdown': SbUiDropdown;
  }
}
