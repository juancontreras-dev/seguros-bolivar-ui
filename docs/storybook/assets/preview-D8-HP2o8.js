import{i as A,a as S,x as d,E as _}from"./lit-element-CFKcR9Rr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,R=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),I=new WeakMap;let J=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(R&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=I.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&I.set(t,e))}return e}toString(){return this.cssText}};const X=e=>new J(typeof e=="string"?e:e+"",void 0,q),W=(e,t)=>{if(R)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),a=O.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=s.cssText,e.appendChild(i)}},j=R?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return X(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:H,defineProperty:K,getOwnPropertyDescriptor:Z,getOwnPropertyNames:G,getOwnPropertySymbols:Q,getPrototypeOf:tt}=Object,w=globalThis,B=w.trustedTypes,et=B?B.emptyScript:"",L=w.reactiveElementPolyfillSupport,E=(e,t)=>e,P={toAttribute(e,t){switch(t){case Boolean:e=e?et:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},U=(e,t)=>!H(e,t),N={attribute:!0,type:String,converter:P,reflect:!1,useDefault:!1,hasChanged:U};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=N){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,s);a!==void 0&&K(this.prototype,t,a)}}static getPropertyDescriptor(t,s,i){const{get:a,set:r}=Z(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get:a,set(o){const l=a==null?void 0:a.call(this);r==null||r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??N}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const s=this.properties,i=[...G(s),...Q(s)];for(const a of i)this.createProperty(a,s[a])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,a]of s)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const a=this._$Eu(s,i);a!==void 0&&this._$Eh.set(a,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)s.unshift(j(a))}else t!==void 0&&s.push(j(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return W(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){var i;const a=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,a);if(r!==void 0&&a.reflect===!0){const o=(((i=a.converter)==null?void 0:i.toAttribute)!==void 0?a.converter:P).toAttribute(s,a.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,s){var i,a;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=r.getPropertyOptions(o),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:P;this._$Em=o;const f=c.fromAttribute(s,l.type);this[o]=f??((a=this._$Ej)==null?void 0:a.get(o))??f,this._$Em=null}}requestUpdate(t,s,i){var a;if(t!==void 0){const r=this.constructor,o=this[t];if(i??(i=r.getPropertyOptions(t)),!((i.hasChanged??U)(o,s)||i.useDefault&&i.reflect&&o===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:a,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??s??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,o]of a){const{wrapped:l}=o,c=this[r];l!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,o,c)}}let s=!1;const i=this._$AL;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),(t=this._$EO)==null||t.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(i)):this._$EM()}catch(a){throw s=!1,this._$EM(),a}s&&this._$AE(i)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[E("elementProperties")]=new Map,$[E("finalized")]=new Map,L==null||L({ReactiveElement:$}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:U},it=(e=st,t,s)=>{const{kind:i,metadata:a}=s;let r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),i==="accessor"){const{name:o}=s;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,c,e)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(i==="setter"){const{name:o}=s;return function(l){const c=this[o];t.call(this,l),this.requestUpdate(o,c,e)}}throw Error("Unsupported decorator location: "+i)};function n(e){return(t,s)=>typeof s=="object"?it(e,t,s):((i,a,r)=>{const o=a.hasOwnProperty(r);return a.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(a,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){return n({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(e,t){return(s,i,a)=>{const r=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(e))??null};return at(s,i,{get(){return r(this)}})}}var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,u=(e,t,s,i)=>{for(var a=i>1?void 0:i?nt(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&ot(t,s,a),a};const F={es:{weekdays:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],weekdaysShort:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],today:"Hoy",cancel:"Cancelar",accept:"Aceptar"},en:{weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",cancel:"Cancel",accept:"Accept"}};let h=class extends S{constructor(){super(...arguments),this.variant="single",this.size="medium",this.locale="es",this.showFooter=!0,this.showDouble=!1,this.inline=!1,this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear(),this.secondMonth=new Date().getMonth()+1,this.secondYear=new Date().getFullYear(),this.internalSelectedDates=[]}connectedCallback(){super.connectedCallback(),this.initializeDates(),this.updateSecondMonth()}updated(e){if(super.updated(e),e.has("selectedDate")&&this.selectedDate){const t=this.parseDate(this.selectedDate);t&&(this.internalSelectedDates=[t],this.currentMonth=t.getUTCMonth(),this.currentYear=t.getUTCFullYear())}if(e.has("selectedDates")&&this.selectedDates&&(this.internalSelectedDates=this.selectedDates.split(",").map(t=>this.parseDate(t.trim())).filter(t=>t!==null)),e.has("rangeStart")&&this.rangeStart){const t=this.parseDate(this.rangeStart);this.internalRangeStart=t??void 0}if(e.has("rangeEnd")&&this.rangeEnd){const t=this.parseDate(this.rangeEnd);this.internalRangeEnd=t??void 0}}createRenderRoot(){return this}parseDate(e){if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const s=parseInt(t[0],10),i=parseInt(t[1],10)-1,a=parseInt(t[2],10);if(isNaN(s)||isNaN(i)||isNaN(a))return null;const r=new Date(Date.UTC(s,i,a,12,0,0));return isNaN(r.getTime())?null:r}formatDate(e){return e.toISOString().split("T")[0]}isSameDay(e,t){return!e||!t?!1:e.getUTCDate()===t.getUTCDate()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCFullYear()===t.getUTCFullYear()}isToday(e){const t=new Date,s=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),12,0,0));return this.isSameDay(e,s)}isDateInRange(e,t,s){if(!t||!s)return!1;const i=e.getTime();return i>t.getTime()&&i<s.getTime()}isDateDisabled(e){if(this.minDate){const t=this.parseDate(this.minDate);if(t&&e<t)return!0}if(this.maxDate){const t=this.parseDate(this.maxDate);if(t&&e>t)return!0}if(this.disabledDates){const t=this.disabledDates.split(",").map(i=>i.trim()),s=this.formatDate(e);if(t.includes(s))return!0}return!1}initializeDates(){if(this.selectedDate){const e=this.parseDate(this.selectedDate);e&&(this.internalSelectedDates=[e],this.currentMonth=e.getUTCMonth(),this.currentYear=e.getUTCFullYear())}if(this.selectedDates&&(this.internalSelectedDates=this.selectedDates.split(",").map(e=>this.parseDate(e.trim())).filter(e=>e!==null)),this.rangeStart){const e=this.parseDate(this.rangeStart);this.internalRangeStart=e??void 0}if(this.rangeEnd){const e=this.parseDate(this.rangeEnd);this.internalRangeEnd=e??void 0}}updateSecondMonth(){this.secondMonth=this.currentMonth+1,this.secondYear=this.currentYear,this.secondMonth>11&&(this.secondMonth=0,this.secondYear++)}getDaysInMonth(e,t){return new Date(t,e+1,0).getDate()}getFirstDayOfMonth(e,t){return new Date(t,e,1).getDay()}generateCalendarDays(e,t){const s=this.getDaysInMonth(e,t),i=this.getFirstDayOfMonth(e,t),a=this.getDaysInMonth(e-1,t),r=[];for(let l=i-1;l>=0;l--){const c=a-l,f=new Date(Date.UTC(t,e-1,c,12,0,0));r.push(this.createDateInfo(f,!0))}for(let l=1;l<=s;l++){const c=new Date(Date.UTC(t,e,l,12,0,0));r.push(this.createDateInfo(c,!1))}const o=7-r.length%7;if(o<7)for(let l=1;l<=o;l++){const c=new Date(Date.UTC(t,e+1,l,12,0,0));r.push(this.createDateInfo(c,!0))}return r}createDateInfo(e,t){const s=this.internalSelectedDates.some(o=>this.isSameDay(o,e)),i=this.isSameDay(e,this.internalRangeStart),a=this.isSameDay(e,this.internalRangeEnd),r=this.isDateInRange(e,this.internalRangeStart,this.internalRangeEnd);return{date:e,day:e.getUTCDate(),month:e.getUTCMonth(),year:e.getUTCFullYear(),isToday:this.isToday(e),isSelected:s,isInRange:r,isRangeStart:i,isRangeEnd:a,isOutsideMonth:t,isDisabled:this.isDateDisabled(e)}}handlePrevMonth(){this.currentMonth--,this.currentMonth<0&&(this.currentMonth=11,this.currentYear--),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleNextMonth(){this.currentMonth++,this.currentMonth>11&&(this.currentMonth=0,this.currentYear++),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleMonthChange(e){const t=e.target;this.currentMonth=parseInt(t.value,10),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleYearChange(e){const t=e.target;this.currentYear=parseInt(t.value,10),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleDayClick(e){if(e.isDisabled||e.isOutsideMonth)return;const t=e.date;switch(this.variant){case"single":this.internalSelectedDates=[t],this.dispatchDateSelectEvent(t),this.dispatchDateChangeEvent();break;case"multiple":const s=this.internalSelectedDates.findIndex(i=>this.isSameDay(i,t));s>=0?this.internalSelectedDates.splice(s,1):this.internalSelectedDates.push(t),this.internalSelectedDates=[...this.internalSelectedDates],this.dispatchDateSelectEvent(t),this.dispatchDateChangeEvent();break;case"range":!this.internalRangeStart||this.internalRangeStart&&this.internalRangeEnd?(this.internalRangeStart=t,this.internalRangeEnd=void 0):(t<this.internalRangeStart?(this.internalRangeEnd=this.internalRangeStart,this.internalRangeStart=t):this.internalRangeEnd=t,this.dispatchDateChangeEvent()),this.requestUpdate();break}}handleKeyDown(e,t,s){const i=this.generateCalendarDays(this.currentMonth,this.currentYear);switch(e.key){case"Enter":case" ":e.preventDefault(),this.handleDayClick(t);break;case"ArrowLeft":e.preventDefault(),this.focusPreviousDay(s,i);break;case"ArrowRight":e.preventDefault(),this.focusNextDay(s,i);break;case"ArrowUp":e.preventDefault(),this.focusDayAbove(s,i);break;case"ArrowDown":e.preventDefault(),this.focusDayBelow(s,i);break;case"Home":e.preventDefault(),this.focusFirstDay(i);break;case"End":e.preventDefault(),this.focusLastDay(i);break}}focusPreviousDay(e,t){let s=e-1;for(;s>=0&&(t[s].isDisabled||t[s].isOutsideMonth);)s--;s>=0&&this.focusDayButton(s)}focusNextDay(e,t){let s=e+1;for(;s<t.length&&(t[s].isDisabled||t[s].isOutsideMonth);)s++;s<t.length&&this.focusDayButton(s)}focusDayAbove(e,t){const s=e-7;s>=0&&!t[s].isDisabled&&!t[s].isOutsideMonth&&this.focusDayButton(s)}focusDayBelow(e,t){const s=e+7;s<t.length&&!t[s].isDisabled&&!t[s].isOutsideMonth&&this.focusDayButton(s)}focusFirstDay(e){const t=e.findIndex(s=>!s.isDisabled&&!s.isOutsideMonth);t>=0&&this.focusDayButton(t)}focusLastDay(e){const t=e.slice().reverse().findIndex(s=>!s.isDisabled&&!s.isOutsideMonth);if(t>=0){const s=e.length-1-t;this.focusDayButton(s)}}focusDayButton(e){this.updateComplete.then(()=>{var t;const s=(t=this.shadowRoot)==null?void 0:t.querySelector(`.sb-ui-calendar__day:nth-child(${e+1})`);s==null||s.focus()})}handleCancel(){this.dispatchEvent(new CustomEvent("calendar-cancel",{bubbles:!0,composed:!0}))}handleAccept(){this.dispatchEvent(new CustomEvent("calendar-accept",{bubbles:!0,composed:!0,detail:this.getSelectionData()}))}dispatchDateSelectEvent(e){this.dispatchEvent(new CustomEvent("date-select",{detail:{date:this.formatDate(e),timestamp:e.getTime()},bubbles:!0,composed:!0}))}dispatchDateChangeEvent(){this.dispatchEvent(new CustomEvent("date-change",{detail:this.getSelectionData(),bubbles:!0,composed:!0}))}dispatchMonthChangeEvent(){this.dispatchEvent(new CustomEvent("month-change",{detail:{month:this.currentMonth,year:this.currentYear,monthName:this.getLocaleConfig().months[this.currentMonth]},bubbles:!0,composed:!0}))}getSelectionData(){switch(this.variant){case"single":return{variant:"single",date:this.internalSelectedDates[0]?this.formatDate(this.internalSelectedDates[0]):null};case"multiple":return{variant:"multiple",dates:this.internalSelectedDates.map(e=>this.formatDate(e))};case"range":return{variant:"range",start:this.internalRangeStart?this.formatDate(this.internalRangeStart):null,end:this.internalRangeEnd?this.formatDate(this.internalRangeEnd):null};default:return{}}}getLocaleConfig(){return F[this.locale]||F.es}getYearRange(){const e=new Date().getFullYear(),t=e-100,s=e+50,i=[];for(let a=t;a<=s;a++)i.push(a);return i}getDayClasses(e){const t=["sb-ui-calendar__day"];return e.isToday&&t.push("sb-ui-calendar__day--today"),e.isSelected&&t.push("sb-ui-calendar__day--selected"),e.isRangeStart&&t.push("sb-ui-calendar__day--range-start"),e.isRangeEnd&&t.push("sb-ui-calendar__day--range-end"),e.isInRange&&t.push("sb-ui-calendar__day--in-range"),e.isOutsideMonth&&t.push("sb-ui-calendar__day--outside"),e.isDisabled&&t.push("sb-ui-calendar__day--disabled"),t.join(" ")}getAriaLabel(e){const t=this.getLocaleConfig(),s=t.months[e.month];let i=`${e.day} de ${s}, ${e.year}`;return e.isToday&&(i+=`, ${t.today}`),e.isSelected&&(i+=", Seleccionado"),e.isRangeStart&&(i+=", Inicio del rango"),e.isRangeEnd&&(i+=", Fin del rango"),i}renderNavIcon(e){return e==="left"?d`
        <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      `:d`
      <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    `}renderMonth(e,t){const s=this.getLocaleConfig(),i=this.generateCalendarDays(e,t),a=this.getYearRange();return d`
      <div class="sb-ui-calendar__month">
        <div class="sb-ui-calendar__header">
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handlePrevMonth}
            aria-label="Mes anterior"
          >
            ${this.renderNavIcon("left")}
          </button>
          <div class="sb-ui-calendar__month-year">
            <select
              class="sb-ui-select sb-ui-calendar__month-select"
              .value=${e.toString()}
              @change=${this.handleMonthChange}
              aria-label="Seleccionar mes"
            >
              ${s.months.map((r,o)=>d`<option value=${o} ?selected=${o===e}>${r}</option>`)}
            </select>
            <select
              class="sb-ui-select sb-ui-calendar__year-select"
              .value=${t.toString()}
              @change=${this.handleYearChange}
              aria-label="Seleccionar año"
            >
              ${a.map(r=>d`<option value=${r} ?selected=${r===t}>${r}</option>`)}
            </select>
          </div>
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handleNextMonth}
            aria-label="Mes siguiente"
          >
            ${this.renderNavIcon("right")}
          </button>
        </div>

        <div class="sb-ui-calendar__weekdays">
          ${s.weekdaysShort.map(r=>d`<div class="sb-ui-calendar__weekday">${r}</div>`)}
        </div>

        <div class="sb-ui-calendar__days">
          ${i.map((r,o)=>d`
              <button
                class=${this.getDayClasses(r)}
                @click=${()=>this.handleDayClick(r)}
                @keydown=${l=>this.handleKeyDown(l,r,o)}
                ?disabled=${r.isDisabled||r.isOutsideMonth}
                aria-label=${this.getAriaLabel(r)}
                aria-selected=${r.isSelected}
                tabindex=${r.isSelected||o===0&&!this.internalSelectedDates.length?"0":"-1"}
              >
                ${r.day}
              </button>
            `)}
        </div>
      </div>
    `}renderFooter(){if(!this.showFooter)return _;const e=this.getLocaleConfig();return d`
      <div class="sb-ui-calendar__footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--small"
          @click=${this.handleCancel}
        >
          ${e.cancel}
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click=${this.handleAccept}
        >
          ${e.accept}
        </button>
      </div>
    `}render(){const e=this.size!=="medium"?`sb-ui-calendar--${this.size}`:"",t=this.showDouble&&this.variant==="range"?"sb-ui-calendar--double":"",s=this.inline?"sb-ui-calendar--inline":"",i=this.showFooter?"":"sb-ui-calendar--no-footer",a=["sb-ui-calendar",e,t,s,i].filter(Boolean).join(" ");return d`
      <div class=${a} data-variant=${this.variant}>
        ${this.renderMonth(this.currentMonth,this.currentYear)}
        ${this.showDouble&&this.variant==="range"?this.renderMonth(this.secondMonth,this.secondYear):_}
        ${this.renderFooter()}
      </div>
    `}};u([n({type:String,reflect:!0})],h.prototype,"variant",2);u([n({type:String,reflect:!0})],h.prototype,"size",2);u([n({type:String,attribute:"selected-date"})],h.prototype,"selectedDate",2);u([n({type:String,attribute:"selected-dates"})],h.prototype,"selectedDates",2);u([n({type:String,attribute:"range-start"})],h.prototype,"rangeStart",2);u([n({type:String,attribute:"range-end"})],h.prototype,"rangeEnd",2);u([n({type:String,attribute:"min-date"})],h.prototype,"minDate",2);u([n({type:String,attribute:"max-date"})],h.prototype,"maxDate",2);u([n({type:String,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);u([n({type:String})],h.prototype,"locale",2);u([n({type:Boolean,attribute:"show-footer"})],h.prototype,"showFooter",2);u([n({type:Boolean,attribute:"show-double"})],h.prototype,"showDouble",2);u([n({type:Boolean,reflect:!0})],h.prototype,"inline",2);u([v()],h.prototype,"currentMonth",2);u([v()],h.prototype,"currentYear",2);u([v()],h.prototype,"secondMonth",2);u([v()],h.prototype,"secondYear",2);u([v()],h.prototype,"internalSelectedDates",2);u([v()],h.prototype,"internalRangeStart",2);u([v()],h.prototype,"internalRangeEnd",2);h=u([k("sb-ui-calendar")],h);var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,b=(e,t,s,i)=>{for(var a=i>1?void 0:i?ct(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&lt(t,s,a),a};let p=class extends S{constructor(){super(...arguments),this.variant="single",this.size="medium",this.placeholder="DD/MM/YYYY",this.error=!1,this.disabled=!1,this.readonly=!1,this.locale="es",this.block=!1,this.isOpen=!1,this.handleOutsideClick=e=>{this.contains(e.target)||(this.isOpen=!1)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleOutsideClick)}handleInputClick(e){e.stopPropagation(),!this.disabled&&!this.readonly&&this.toggleDropdown()}handleTriggerClick(e){e.stopPropagation(),this.disabled||this.toggleDropdown()}toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen?this.dispatchEvent(new CustomEvent("datepicker-open",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("datepicker-close",{bubbles:!0,composed:!0}))}handleCalendarChange(e){var t,s;const i=e.detail;let a="";this.variant==="single"?(this.value=i.date,a=this.formatDate(i.date),this.updateInputValue(a),setTimeout(()=>{this.isOpen=!1},300)):this.variant==="range"?i.start&&i.end&&(this.value=`${i.start},${i.end}`,a=`${this.formatDate(i.start)} - ${this.formatDate(i.end)}`,this.updateInputValue(a),setTimeout(()=>{this.isOpen=!1},300)):this.variant==="multiple"&&(this.value=(t=i.dates)==null?void 0:t.join(","),a=(s=i.dates)==null?void 0:s.map(r=>this.formatDate(r)).join(", "),this.updateInputValue(a)),this.dispatchEvent(new CustomEvent("datepicker-change",{detail:{value:this.value,formattedValue:a,...i},bubbles:!0,composed:!0}))}handleCalendarAccept(e){this.isOpen=!1,this.dispatchEvent(new CustomEvent("datepicker-accept",{detail:e.detail,bubbles:!0,composed:!0}))}handleCalendarCancel(){this.isOpen=!1}updateInputValue(e){this.input&&(this.input.value=e)}formatDate(e){if(!e)return"";const[t,s,i]=e.split("-");return`${i}/${s}/${t}`}getInitialInputValue(){if(!this.value)return"";if(this.variant==="single")return this.formatDate(this.value);if(this.variant==="range"){const[e,t]=this.value.split(",");return e&&t?`${this.formatDate(e)} - ${this.formatDate(t)}`:e?this.formatDate(e):""}else if(this.variant==="multiple")return this.value.split(",").map(e=>this.formatDate(e.trim())).join(", ");return""}renderIcon(){return d`
      <svg class="sb-ui-datepicker__icon" viewBox="0 0 24 24">
        <path
          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
        />
      </svg>
    `}render(){var e,t;const s=["sb-ui-datepicker",this.size!=="medium"?`sb-ui-datepicker--${this.size}`:"",this.error?"sb-ui-datepicker--error":"",this.disabled?"sb-ui-datepicker--disabled":"",this.block?"sb-ui-datepicker--block":"",this.isOpen?"sb-ui-datepicker--open":"",this.label?"sb-ui-datepicker--with-label":""].filter(Boolean).join(" ");if(this.variant,this.locale,this.size,this.variant==="single"&&this.value)this.value;else if(this.variant==="range"&&this.value){const[i,a]=this.value.split(",")}else this.variant==="multiple"&&this.value&&this.value;return this.minDate&&this.minDate,this.maxDate&&this.maxDate,this.disabledDates&&this.disabledDates,d`
      <div class=${s}>
        ${this.label?d`
              <label class="sb-ui-datepicker__label" style="
                  display: block;
                  font-weight: 600;
                  font-size: 0.875rem;
                  color: var(--sb-ui-color-grayscale-black);
                  margin-bottom: 0.25rem;
                ">
                ${this.label}
              </label>
            `:_}

        <div class="sb-ui-datepicker__wrapper">
          <input
            type="text"
            class="sb-ui-input sb-ui-datepicker__input ${this.error?"sb-ui-input--error":""}"
            .value=${this.getInitialInputValue()}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${!0}
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
              .selectedDate=${this.variant==="single"?this.value:void 0}
              .rangeStart=${this.variant==="range"?(e=this.value)==null?void 0:e.split(",")[0]:void 0}
              .rangeEnd=${this.variant==="range"?(t=this.value)==null?void 0:t.split(",")[1]:void 0}
              .selectedDates=${this.variant==="multiple"?this.value:void 0}
              .minDate=${this.minDate}
              .maxDate=${this.maxDate}
              .disabledDates=${this.disabledDates}
              .showFooter=${!0}
              .size=${this.size}
              @date-change=${this.handleCalendarChange}
              @calendar-accept=${this.handleCalendarAccept}
              @calendar-cancel=${this.handleCalendarCancel}
            ></sb-ui-calendar>
          </div>
        </div>

        ${this.helperText&&!this.error?d`
              <div
                class="sb-ui-datepicker__helper"
                style="
                  font-size: 0.75rem;
                  color: var(--sb-ui-color-grayscale-base);
                  margin-top: 0.25rem;
                "
              >
                ${this.helperText}
              </div>
            `:_}
        ${this.error&&this.errorMessage?d`
              <div
                class="sb-ui-datepicker__error"
                style="
                  font-size: 0.75rem;
                  color: var(--sb-ui-color-feedback-error-base);
                  margin-top: 0.25rem;
                "
              >
                ${this.errorMessage}
              </div>
            `:_}
      </div>
    `}};b([n({type:String,reflect:!0})],p.prototype,"variant",2);b([n({type:String,reflect:!0})],p.prototype,"size",2);b([n({type:String})],p.prototype,"value",2);b([n({type:String})],p.prototype,"placeholder",2);b([n({type:String})],p.prototype,"label",2);b([n({type:String,attribute:"helper-text"})],p.prototype,"helperText",2);b([n({type:Boolean,reflect:!0})],p.prototype,"error",2);b([n({type:String,attribute:"error-message"})],p.prototype,"errorMessage",2);b([n({type:Boolean,reflect:!0})],p.prototype,"disabled",2);b([n({type:Boolean,reflect:!0})],p.prototype,"readonly",2);b([n({type:String,attribute:"min-date"})],p.prototype,"minDate",2);b([n({type:String,attribute:"max-date"})],p.prototype,"maxDate",2);b([n({type:String,attribute:"disabled-dates"})],p.prototype,"disabledDates",2);b([n({type:String})],p.prototype,"locale",2);b([n({type:Boolean,reflect:!0})],p.prototype,"block",2);b([v()],p.prototype,"isOpen",2);b([rt(".sb-ui-datepicker__input")],p.prototype,"input",2);p=b([k("sb-ui-datepicker")],p);var dt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,z=(e,t,s,i)=>{for(var a=i>1?void 0:i?ht(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&dt(t,s,a),a};let C=class extends S{constructor(){super(...arguments),this.value="",this.placeholder="Seleccionar fecha"}render(){return d`
      <div class="date-picker" tabindex="0" role="button" aria-label="Seleccionar fecha">
        ${this.value||this.placeholder}
      </div>
    `}};C.styles=A`
    :host {
      display: block;
      --sb-ui-date-picker-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-date-picker-border-radius: 8px;
      --sb-ui-date-picker-padding: 0.75rem 1rem;
    }

    .date-picker {
      border: var(--sb-ui-date-picker-border);
      border-radius: var(--sb-ui-date-picker-border-radius);
      padding: var(--sb-ui-date-picker-padding);
      font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
      cursor: pointer;
      background: var(--sb-ui-color-grayscale-white, #ffffff);
    }

    .date-picker:hover {
      border-color: var(--sb-ui-color-primary-base, #007acc);
    }

    .date-picker:focus {
      outline: 2px solid var(--sb-ui-color-primary-base, #007acc);
      outline-offset: 2px;
    }
  `;z([n({type:String})],C.prototype,"value",2);z([n({type:String})],C.prototype,"placeholder",2);C=z([k("sb-ui-date-picker")],C);var ut=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Y=(e,t,s,i)=>{for(var a=i>1?void 0:i?pt(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&ut(t,s,a),a};let x=class extends S{constructor(){super(...arguments),this.value="",this.placeholder="Seleccionar opción"}render(){return d`
      <div class="dropdown" tabindex="0" role="combobox" aria-label="Dropdown">
        ${this.value||this.placeholder}
      </div>
    `}};x.styles=A`
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
  `;Y([n({type:String})],x.prototype,"value",2);Y([n({type:String})],x.prototype,"placeholder",2);x=Y([k("sb-ui-dropdown")],x);var bt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,M=(e,t,s,i)=>{for(var a=i>1?void 0:i?mt(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&bt(t,s,a),a};let y=class extends S{constructor(){super(...arguments),this.open=!1,this.title="",this.closeOnBackdrop=!0,this.showCloseButton=!0}connectedCallback(){super.connectedCallback(),this.open&&this._lockScroll()}disconnectedCallback(){super.disconnectedCallback(),this._unlockScroll()}updated(e){e.has("open")&&(this.open?(this._lockScroll(),this._dispatchEvent("sb-ui-modal-open")):(this._unlockScroll(),this._dispatchEvent("sb-ui-modal-close")))}_lockScroll(){document.body.style.overflow="hidden"}_unlockScroll(){document.body.style.overflow=""}_handleBackdropClick(e){this.closeOnBackdrop&&e.target===e.currentTarget&&this.close()}_handleCloseClick(){this.close()}_handleKeyDown(e){e.key==="Escape"&&this.open&&this.close()}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}openModal(){this.open=!0}close(){this.open=!1}render(){return this.open?d`
      <div
        class="backdrop"
        part="backdrop"
        @click=${this._handleBackdropClick}
        @keydown=${this._handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="dialog" part="dialog" role="document">
          <div class="header" part="header">
            <h2 id="modal-title" class="title">
              <slot name="header">${this.title}</slot>
            </h2>
            ${this.showCloseButton?d`
                  <button
                    class="close-button"
                    part="close-button"
                    @click=${this._handleCloseClick}
                    aria-label="Cerrar modal"
                  >
                    ×
                  </button>
                `:""}
          </div>

          <div class="body" part="body">
            <slot></slot>
          </div>

          <div class="footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `:d``}};y.styles=A`
    :host {
      --sb-ui-modal-backdrop-bg: rgba(0, 0, 0, 0.5);
      --sb-ui-modal-dialog-bg: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-modal-dialog-width: 500px;
      --sb-ui-modal-dialog-max-width: 90vw;
      --sb-ui-modal-dialog-border-radius: 12px;
      --sb-ui-modal-dialog-shadow: var(--sb-ui-shadow-xl, 0 20px 25px rgba(0, 0, 0, 0.3));
      --sb-ui-modal-padding: 1.5rem;
      --sb-ui-modal-header-border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-modal-footer-border-top: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
    }

    :host([hidden]) {
      display: none;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: var(--sb-ui-modal-backdrop-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
      animation: fadeIn 0.2s ease;
    }

    .dialog {
      background: var(--sb-ui-modal-dialog-bg);
      width: var(--sb-ui-modal-dialog-width);
      max-width: var(--sb-ui-modal-dialog-max-width);
      max-height: 90vh;
      border-radius: var(--sb-ui-modal-dialog-border-radius);
      box-shadow: var(--sb-ui-modal-dialog-shadow);
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s ease;
    }

    .header {
      padding: var(--sb-ui-modal-padding);
      border-bottom: var(--sb-ui-modal-header-border-bottom);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--sb-ui-color-grayscale-D400, #282828);
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      padding: 0.25rem;
      line-height: 1;
      transition: color 0.2s ease;
    }

    .close-button:hover {
      color: var(--sb-ui-color-grayscale-D400, #282828);
    }

    .body {
      padding: var(--sb-ui-modal-padding);
      overflow-y: auto;
      flex: 1;
    }

    .footer {
      padding: var(--sb-ui-modal-padding);
      border-top: var(--sb-ui-modal-footer-border-top);
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .dialog {
        animation: none;
      }
    }
  `;M([n({type:Boolean,reflect:!0})],y.prototype,"open",2);M([n({type:String})],y.prototype,"title",2);M([n({type:Boolean,attribute:"close-on-backdrop"})],y.prototype,"closeOnBackdrop",2);M([n({type:Boolean,attribute:"show-close-button"})],y.prototype,"showCloseButton",2);y=M([k("sb-ui-modal")],y);var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,g=(e,t,s,i)=>{for(var a=i>1?void 0:i?ft(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,s,a):o(a))||a);return i&&a&&gt(t,s,a),a};let m=class extends S{constructor(){super(...arguments),this.type="info",this.position="top-right",this.size="medium",this.title="",this.message="",this.visible=!1,this.showClose=!0,this.autoDismiss=0,this.showProgress=!1,this.clickable=!0,this._progressWidth=100}connectedCallback(){super.connectedCallback(),this.visible&&this._setupAutoDismiss()}disconnectedCallback(){super.disconnectedCallback(),this._clearTimers()}updated(e){e.has("visible")&&(this.visible?(this._dispatchEvent("sb-ui-toast-show"),this._setupAutoDismiss()):(this._dispatchEvent("sb-ui-toast-hide"),this._clearTimers())),e.has("autoDismiss")&&this.visible&&this._setupAutoDismiss()}_setupAutoDismiss(){this._clearTimers(),this.autoDismiss>0&&(this.showProgress&&(this._progressWidth=100,this.requestUpdate(),setTimeout(()=>{this._progressWidth=0,this.requestUpdate()},50)),this._dismissTimer=window.setTimeout(()=>{this.hide()},this.autoDismiss))}_clearTimers(){this._dismissTimer&&(clearTimeout(this._dismissTimer),this._dismissTimer=void 0),this._progressTimer&&(clearTimeout(this._progressTimer),this._progressTimer=void 0)}_handleClick(){this.clickable&&this._dispatchEvent("sb-ui-toast-click")}_handleCloseClick(e){e.stopPropagation(),this.hide()}_handleKeyDown(e){e.key==="Escape"&&this.hide()}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}show(){this.visible=!0}hide(){this.visible=!1}toggle(){this.visible=!this.visible}pauseAutoDismiss(){this._clearTimers()}resumeAutoDismiss(){this.visible&&this.autoDismiss>0&&this._setupAutoDismiss()}render(){const e=this.showProgress&&this.autoDismiss>0?`width: ${this._progressWidth}%; transition-duration: ${this.autoDismiss}ms;`:"display: none;";return d`
      <div
        class="toast"
        part="toast"
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
        @mouseenter=${this.pauseAutoDismiss}
        @mouseleave=${this.resumeAutoDismiss}
        tabindex="0"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="icon" part="icon">
          <slot name="icon"></slot>
        </div>

        <div class="content" part="content">
          ${this.title?d`
                <div class="title" part="title">
                  <slot name="title">${this.title}</slot>
                </div>
              `:""}

          <div class="message" part="message">
            <slot>${this.message}</slot>
          </div>

          <slot name="actions"></slot>
        </div>

        ${this.showClose?d`
              <button
                class="close"
                part="close"
                @click=${this._handleCloseClick}
                aria-label="Cerrar notificación"
                type="button"
              >
                ×
              </button>
            `:""}

        <div class="progress" part="progress" style=${e}></div>
      </div>
    `}};m.styles=A`
    :host {
      /* Importar estilos base de alert.css mediante CSS custom properties */
      --sb-ui-toast-bg-color: var(
        --sb-ui-alert-bg-color,
        var(--sb-ui-color-grayscale-white, #ffffff)
      );
      --sb-ui-toast-text-color: var(
        --sb-ui-alert-text-color,
        var(--sb-ui-color-grayscale-D300, #404040)
      );
      --sb-ui-toast-border-color: var(
        --sb-ui-alert-border-color,
        var(--sb-ui-color-grayscale-L200, #edeef0)
      );
      --sb-ui-toast-shadow: var(--sb-ui-alert-shadow-toast, 0 4px 16px rgba(0, 0, 0, 0.15));
      --sb-ui-toast-border-radius: var(--sb-ui-alert-border-radius, 8px);
      --sb-ui-toast-padding: var(--sb-ui-alert-padding, 1rem);
      --sb-ui-toast-gap: var(--sb-ui-alert-gap, 0.75rem);
      --sb-ui-toast-font-family: var(
        --sb-ui-alert-font-family,
        var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif)
      );
      --sb-ui-toast-transition: var(--sb-ui-alert-transition, all 0.2s ease);

      /* Posicionamiento */
      position: fixed;
      z-index: 1000;
      display: block;
      opacity: 0;
      transform: translateX(100%);
      transition: var(--sb-ui-toast-transition);
    }

    :host([visible]) {
      opacity: 1;
      transform: translateX(0);
    }

    :host([position='top-right']) {
      top: 1rem;
      right: 1rem;
    }

    :host([position='top-left']) {
      top: 1rem;
      left: 1rem;
      transform: translateX(-100%);
    }

    :host([position='top-left'][visible]) {
      transform: translateX(0);
    }

    :host([position='top-center']) {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    }

    :host([position='top-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    :host([position='bottom-right']) {
      bottom: 1rem;
      right: 1rem;
      transform: translateX(100%) translateY(100%);
    }

    :host([position='bottom-right'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-left']) {
      bottom: 1rem;
      left: 1rem;
      transform: translateX(-100%) translateY(100%);
    }

    :host([position='bottom-left'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-center']) {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    }

    :host([position='bottom-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    .toast {
      /* Aplicar estilos base de alert.css */
      display: flex;
      align-items: flex-start;
      gap: var(--sb-ui-toast-gap);
      position: relative;
      box-sizing: border-box;
      min-height: 3rem;
      min-width: 300px;
      max-width: 400px;
      padding: var(--sb-ui-toast-padding);
      background-color: var(--sb-ui-toast-bg-color);
      border: 1px solid var(--sb-ui-toast-border-color);
      border-left: 4px solid var(--sb-ui-toast-border-color);
      border-radius: var(--sb-ui-toast-border-radius);
      box-shadow: var(--sb-ui-toast-shadow);
      font-family: var(--sb-ui-toast-font-family);
      line-height: 1.25;
      color: var(--sb-ui-toast-text-color);
      cursor: pointer;
      transition: var(--sb-ui-toast-transition);
    }

    .toast:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      font-size: 1.25rem;
      flex-shrink: 0;
      margin-top: 0.125rem;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 0;
    }

    .title {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.25;
      margin: 0;
      color: inherit;
    }

    .message {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25;
      margin: 0;
      color: inherit;
      opacity: 0.8;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      background: none;
      border: none;
      color: var(--sb-ui-color-grayscale-base, #d9d9d9);
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      border-radius: 4px;
      transition: var(--sb-ui-toast-transition);
      flex-shrink: 0;
      margin-top: -0.125rem;
      margin-right: -0.25rem;
    }

    .close:hover {
      color: var(--sb-ui-color-grayscale-D300, #404040);
      background-color: var(--sb-ui-color-grayscale-L400, rgba(247, 247, 247, 0.5));
    }

    .close:focus-visible {
      outline: 2px solid var(--sb-ui-color-primary-base, #007acc);
      outline-offset: 2px;
    }

    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background-color: var(--sb-ui-color-primary-base, #007acc);
      border-radius: 0 0 var(--sb-ui-toast-border-radius) var(--sb-ui-toast-border-radius);
      transition: width linear;
      opacity: 0.7;
    }

    /* Toast Type Variants */
    :host([type='success']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-success-L400, rgba(40, 167, 69, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-text-color: var(--sb-ui-color-feedback-success-base, #28a745);
    }

    :host([type='success']) .icon::before {
      content: '✓';
      color: var(--sb-ui-color-feedback-success-base, #28a745);
    }

    :host([type='success']) .progress {
      background-color: var(--sb-ui-color-feedback-success-base, #28a745);
    }

    :host([type='info']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-info-L400, rgba(0, 122, 204, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-info-base, #007acc);
      --sb-ui-toast-text-color: var(--sb-ui-color-feedback-info-base, #007acc);
    }

    :host([type='info']) .icon::before {
      content: 'i';
      font-style: italic;
      font-weight: 600;
      color: var(--sb-ui-color-feedback-info-base, #007acc);
    }

    :host([type='info']) .progress {
      background-color: var(--sb-ui-color-feedback-info-base, #007acc);
    }

    :host([type='warning']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-warning-L400, rgba(255, 193, 7, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-warning-base, #ffc107);
      --sb-ui-toast-text-color: var(--sb-ui-color-feedback-warning-base, #ffc107);
    }

    :host([type='warning']) .icon::before {
      content: '⚠';
      color: var(--sb-ui-color-feedback-warning-base, #ffc107);
    }

    :host([type='warning']) .progress {
      background-color: var(--sb-ui-color-feedback-warning-base, #ffc107);
    }

    :host([type='error']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-color-feedback-error-L400, rgba(220, 53, 69, 0.1));
      --sb-ui-toast-border-color: var(--sb-ui-color-feedback-error-base, #dc3545);
      --sb-ui-toast-text-color: var(--sb-ui-color-feedback-error-base, #dc3545);
    }

    :host([type='error']) .icon::before {
      content: '✕';
      color: var(--sb-ui-color-feedback-error-base, #dc3545);
    }

    :host([type='error']) .progress {
      background-color: var(--sb-ui-color-feedback-error-base, #dc3545);
    }

    /* Size Variants */
    :host([size='small']) .toast {
      min-height: 2.5rem;
      padding: 0.75rem;
      gap: 0.5rem;
    }

    :host([size='small']) .icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
    }

    :host([size='small']) .title,
    :host([size='small']) .message {
      font-size: 0.8125rem;
    }

    :host([size='small']) .close {
      width: 1.25rem;
      height: 1.25rem;
    }

    :host([size='large']) .toast {
      min-height: 3.5rem;
      padding: 1.25rem;
      gap: 1rem;
    }

    :host([size='large']) .icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    :host([size='large']) .title {
      font-size: 1rem;
    }

    :host([size='large']) .message {
      font-size: 0.9375rem;
    }

    :host([size='large']) .close {
      width: 1.75rem;
      height: 1.75rem;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }

      .toast {
        transition: none;
      }

      .toast:hover {
        transform: none;
      }
    }

    @media (prefers-contrast: high) {
      .toast {
        border-width: 2px;
        border-left-width: 6px;
      }
    }

    /* Mobile Optimization */
    @media (max-width: 640px) {
      :host([position*='top']) {
        top: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(-100%);
      }

      :host([position*='top'][visible]) {
        transform: translateY(0);
      }

      :host([position*='bottom']) {
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(100%);
      }

      :host([position*='bottom'][visible]) {
        transform: translateY(0);
      }

      .toast {
        min-width: auto;
        max-width: none;
      }
    }
  `;g([n({type:String,reflect:!0})],m.prototype,"type",2);g([n({type:String,reflect:!0})],m.prototype,"position",2);g([n({type:String,reflect:!0})],m.prototype,"size",2);g([n({type:String})],m.prototype,"title",2);g([n({type:String})],m.prototype,"message",2);g([n({type:Boolean,reflect:!0})],m.prototype,"visible",2);g([n({type:Boolean,attribute:"show-close"})],m.prototype,"showClose",2);g([n({type:Number,attribute:"auto-dismiss"})],m.prototype,"autoDismiss",2);g([n({type:Boolean,attribute:"show-progress"})],m.prototype,"showProgress",2);g([n({type:Boolean})],m.prototype,"clickable",2);g([v()],m.prototype,"_progressWidth",2);m=g([k("sb-ui-toast")],m);window.showSuccess=function(e,t="top-right"){T("success",e,t)};window.showError=function(e,t="top-right"){T("error",e,t)};window.showWarning=function(e,t="top-right"){T("warning",e,t)};window.showInfo=function(e,t="top-right"){T("info",e,t)};window.showToast=function(e,t){let s,i,a="top-right";typeof t=="object"&&t!==null?(i=e,s=t.variant||"info",a=t.position||"top-right"):(s=e,a=t||"top-right",i={success:"Tu solicitud ha sido procesada correctamente.",error:"No se pudo completar la operación. Intenta nuevamente.",warning:"Por favor, revisa los datos antes de continuar.",info:"Tienes una nueva notificación importante."}[s]||"Notificación"),T(s,i,a)};function T(e,t,s){const i={"top-left":"sb-ui-alert--toast-top-left","top-center":"sb-ui-alert--toast-top-center","top-right":"","bottom-left":"sb-ui-alert--toast-bottom-left","bottom-center":"sb-ui-alert--toast-bottom-center","bottom-right":"sb-ui-alert--toast-bottom-right"},a={success:"¡Éxito!",error:"Error",warning:"Advertencia",info:"Información"},r=i[s]||"",o=a[e]||"Notificación",l=document.createElement("div");l.className=`sb-ui-alert sb-ui-alert--${e} sb-ui-alert--toast ${r} sb-ui-alert--fade-in`,l.setAttribute("role","alert"),l.innerHTML=`
    <div class="sb-ui-alert-icon"></div>
    <div class="sb-ui-alert-content">
      <div class="sb-ui-alert-title">${o}</div>
      <div class="sb-ui-alert-message">${t}</div>
    </div>
    <button class="sb-ui-alert-close" aria-label="Cerrar notificación">×</button>
  `,document.body.appendChild(l);const c=l.querySelector(".sb-ui-alert-close");c&&c.addEventListener("click",()=>{V(l)}),setTimeout(()=>{document.body.contains(l)&&V(l)},5e3)}function V(e){e.classList.add("sb-ui-alert--fade-out"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},300)}const yt={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"padded",docs:{canvas:{sourceState:"shown"}},viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1440px",height:"900px"}}},defaultViewport:"desktop"}},globalTypes:{brand:{description:"Brand theme",defaultValue:"seguros-bolivar",toolbar:{title:"Brand",icon:"paintbrush",items:[{value:"white-label",title:"White Label"},{value:"jelpit",title:"Jelpit"},{value:"davivienda",title:"Davivienda"},{value:"cien-cuadras",title:"Cien Cuadras"},{value:"doctor-aki",title:"Doctor Aki"},{value:"seguros-bolivar",title:"Seguros Bolívar"}],dynamicTitle:!0}},theme:{description:"Theme mode",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:[{value:"light",title:"Light",icon:"sun"},{value:"dark",title:"Dark",icon:"moon"}],dynamicTitle:!0}}},decorators:[(e,t)=>{const s=t.globals.brand||"jelpit",i=t.globals.theme||"light";document.documentElement.setAttribute("data-brand",s),document.documentElement.setAttribute("data-theme",i);const a="sb-ui-brand-styles";let r=document.getElementById(a);r||(r=document.createElement("link"),r.id=a,r.rel="stylesheet",document.head.appendChild(r)),r.href=`sb-ui-${s}-${i}.min.css`;const o=e();return t.args&&typeof o=="object"&&setTimeout(()=>{document.querySelectorAll("sb-ui-datepicker, sb-ui-calendar, sb-ui-modal").forEach(c=>{t.args&&c&&(Object.keys(t.args).forEach(f=>{const D=t.args[f];f in c&&(c[f]=D),typeof D=="boolean"?D?c.setAttribute(f,""):c.removeAttribute(f):D!=null&&c.setAttribute(f,String(D))}),typeof c.requestUpdate=="function"&&c.requestUpdate())})},10),o}]};export{yt as default};
