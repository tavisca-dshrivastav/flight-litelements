var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let CounterComponent = class CounterComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <button 
        class="count-button" 
        @click=${this._onDecrementClick} 
        part="button">
        -
      </button>
      <span 
        class="count-view">
        ${this.count}
      </span>
      <button 
        class="count-button" 
        @click=${this._onIncrementClick} 
        part="button">
        +
      </button>
    `;
    }
    _onIncrementClick() {
        this.count++;
    }
    _onDecrementClick() {
        this.count--;
    }
};
CounterComponent.styles = css `
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
    .count-button {
      display: inline-block;
      background-color: #35BDDD;
      border: none;
      color: #ffffff;
    }
  `;
__decorate([
    property({ type: Number })
], CounterComponent.prototype, "count", void 0);
CounterComponent = __decorate([
    customElement('counter-component')
], CounterComponent);
export { CounterComponent };
//# sourceMappingURL=counter-component.js.map