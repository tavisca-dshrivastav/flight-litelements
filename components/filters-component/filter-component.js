var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let FilterComponent = class FilterComponent extends LitElement {
    render() {
        return html `
        <slider-component title="Outbound"></slider-component>
        <slider-component title="Return"></slider-component>
    `;
    }
};
FilterComponent.styles = css `
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
  `;
FilterComponent = __decorate([
    customElement('filter-component')
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=filter-component.js.map