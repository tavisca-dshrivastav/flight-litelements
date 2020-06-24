var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let SliderComponent = class SliderComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = "";
    }
    render() {
        return html `
        <span class="display-title">${this.title}</span>
        <input type="range" id="slider" name="slider" min="0" max="24"/>
    `;
    }
};
SliderComponent.styles = css `
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
    .display-title {
      display: block;
      padding: 5px;
      max-width: 200px;
    }
  `;
__decorate([
    property({ type: String })
], SliderComponent.prototype, "title", void 0);
SliderComponent = __decorate([
    customElement('slider-component')
], SliderComponent);
export { SliderComponent };
//# sourceMappingURL=slider-component.js.map