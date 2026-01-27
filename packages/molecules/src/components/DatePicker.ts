/**
 * DatePicker Web Component - Seguros Bolivar UI Design System
 *
 * Input field with calendar dropdown
 * Combines: Input + Calendar + Dropdown logic
 *
 * Usage:
 * ```html
 * <sb-ui-datepicker
 *   variant="single"
 *   value="2022-03-15"
 *   placeholder="Seleccionar fecha"
 *   locale="es"
 * ></sb-ui-datepicker>
 * ```
 */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import './Calendar.js';

type DatePickerVariant = 'single' | 'range' | 'multiple';
type DatePickerSize = 'small' | 'medium' | 'large';

@customElement('sb-ui-datepicker')
export class SbUiDatePicker extends LitElement {
  // ============================================================================
  // Properties
  // ============================================================================

  /** DatePicker variant */
  @property({ type: String, reflect: true })
  variant: DatePickerVariant = 'single';

  /** Size: small, medium, large */
  @property({ type: String, reflect: true })
  size: DatePickerSize = 'medium';

  /** Current value (ISO format or comma separated for multiple) */
  @property({ type: String })
  value?: string;

  /** Placeholder text */
  @property({ type: String })
  placeholder: string = 'DD/MM/YYYY';

  /** Label text */
  @property({ type: String })
  label?: string;

  /** Helper text */
  @property({ type: String, attribute: 'helper-text' })
  helperText?: string;

  /** Error state */
  @property({ type: Boolean, reflect: true })
  error: boolean = false;

  /** Error message */
  @property({ type: String, attribute: 'error-message' })
  errorMessage?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /** Readonly state */
  @property({ type: Boolean, reflect: true })
  readonly: boolean = false;

  /** Minimum selectable date */
  @property({ type: String, attribute: 'min-date' })
  minDate?: string;

  /** Maximum selectable date */
  @property({ type: String, attribute: 'max-date' })
  maxDate?: string;

  /** Disabled dates */
  @property({ type: String, attribute: 'disabled-dates' })
  disabledDates?: string;

  /** Locale */
  @property({ type: String })
  locale: string = 'es';

  /** Block (full width) */
  @property({ type: Boolean, reflect: true })
  block: boolean = false;

  // ============================================================================
  // State
  // ============================================================================

  /** Is dropdown open */
  @state()
  private isOpen: boolean = false;

  /** Input reference */
  @query('.sb-ui-datepicker__input')
  private input?: HTMLInputElement;

  // ============================================================================
  // Styles (Empty - uses external CSS)
  // ============================================================================

  createRenderRoot() {
    // Use light DOM instead of shadow DOM to use external CSS
    return this;
  }

  // ============================================================================
  // Lifecycle
  // ============================================================================

  connectedCallback() {
    super.connectedCallback();
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
  }

  // ============================================================================
  // Event Handlers
  // ============================================================================

  private handleInputClick(e: Event) {
    e.stopPropagation();
    if (!this.disabled && !this.readonly) {
      this.toggleDropdown();
    }
  }

  private handleTriggerClick(e: Event) {
    e.stopPropagation();
    if (!this.disabled) {
      this.toggleDropdown();
    }
  }

  private toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dispatchEvent(
        new CustomEvent('datepicker-open', {
          bubbles: true,
          composed: true,
        })
      );
    } else {
      this.dispatchEvent(
        new CustomEvent('datepicker-close', {
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private handleOutsideClick = (e: Event) => {
    if (!this.contains(e.target as Node)) {
      this.isOpen = false;
    }
  };

  private handleCalendarChange(e: CustomEvent): void {
    const detail = e.detail;
    let formattedValue = '';
    let shouldClose = false;

    switch (this.variant) {
      case 'single':
        this.value = detail.date;
        formattedValue = this.formatDate(detail.date);
        shouldClose = true;
        break;

      case 'range':
        if (detail.start && detail.end) {
          this.value = `${detail.start},${detail.end}`;
          formattedValue = `${this.formatDate(detail.start)} - ${this.formatDate(detail.end)}`;
          shouldClose = true;
        }
        break;

      case 'multiple':
        this.value = detail.dates?.join(',');
        formattedValue = detail.dates?.map((d: string) => this.formatDate(d)).join(', ');
        break;
    }

    this.updateInputValue(formattedValue);

    if (shouldClose) {
      setTimeout(() => {
        this.isOpen = false;
      }, 300);
    }

    this.dispatchEvent(
      new CustomEvent('datepicker-change', {
        detail: {
          value: this.value,
          formattedValue,
          ...detail,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleCalendarAccept(e: CustomEvent) {
    this.isOpen = false;
    this.dispatchEvent(
      new CustomEvent('datepicker-accept', {
        detail: e.detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleCalendarCancel() {
    this.isOpen = false;
  }

  private updateInputValue(formattedValue: string) {
    if (this.input) {
      this.input.value = formattedValue;
    }
  }

  // ============================================================================
  // Helpers
  // ============================================================================

  private formatDate(isoDate: string): string {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  }

  private getInitialInputValue(): string {
    if (!this.value) return '';

    if (this.variant === 'single') {
      return this.formatDate(this.value);
    } else if (this.variant === 'range') {
      const [start, end] = this.value.split(',');
      if (start && end) {
        return `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
      return start ? this.formatDate(start) : '';
    } else if (this.variant === 'multiple') {
      const dates = this.value.split(',');
      return dates.map((d) => this.formatDate(d.trim())).join(', ');
    }

    return '';
  }

  // ============================================================================
  // Render
  // ============================================================================

  private renderIcon() {
    return html`
      <svg class="sb-ui-datepicker__icon" viewBox="0 0 24 24">
        <path
          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
        />
      </svg>
    `;
  }

  render() {
    const classes = [
      'sb-ui-datepicker',
      this.size !== 'medium' ? `sb-ui-datepicker--${this.size}` : '',
      this.error ? 'sb-ui-datepicker--error' : '',
      this.disabled ? 'sb-ui-datepicker--disabled' : '',
      this.block ? 'sb-ui-datepicker--block' : '',
      this.isOpen ? 'sb-ui-datepicker--open' : '',
      this.label ? 'sb-ui-datepicker--with-label' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div class=${classes}>
        ${this.label
          ? html`<label class="sb-ui-datepicker__label">${this.label}</label>`
          : nothing}

        <div class="sb-ui-datepicker__wrapper">
          <input
            type="text"
            class="sb-ui-input sb-ui-datepicker__input ${this.error ? 'sb-ui-input--error' : ''}"
            .value=${this.getInitialInputValue()}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${true}
            @click=${this.handleInputClick}
          />

          <button
            type="button"
            class="sb-ui-datepicker__trigger"
            ?disabled=${this.disabled}
            @click=${this.handleTriggerClick}
            aria-label="Abrir calendario"
          >
            ${this.renderIcon()}
          </button>

          <div class="sb-ui-datepicker__dropdown">
            <sb-ui-calendar
              .variant=${this.variant}
              .locale=${this.locale}
              .selectedDate=${this.variant === 'single' ? this.value : undefined}
              .rangeStart=${this.variant === 'range' ? this.value?.split(',')[0] : undefined}
              .rangeEnd=${this.variant === 'range' ? this.value?.split(',')[1] : undefined}
              .selectedDates=${this.variant === 'multiple' ? this.value : undefined}
              .minDate=${this.minDate}
              .maxDate=${this.maxDate}
              .disabledDates=${this.disabledDates}
              .showFooter=${true}
              .size=${this.size}
              @date-change=${this.handleCalendarChange}
              @calendar-accept=${this.handleCalendarAccept}
              @calendar-cancel=${this.handleCalendarCancel}
            ></sb-ui-calendar>
          </div>
        </div>

        ${this.helperText && !this.error
          ? html`<div class="sb-ui-datepicker__helper">${this.helperText}</div>`
          : nothing}
        ${this.error && this.errorMessage
          ? html`<div class="sb-ui-datepicker__error">${this.errorMessage}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-datepicker': SbUiDatePicker;
  }
}

