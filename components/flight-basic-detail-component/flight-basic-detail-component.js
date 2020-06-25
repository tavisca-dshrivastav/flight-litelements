var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let FlightBasicDetailComponent = class FlightBasicDetailComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.duration = "";
        this.stopInfo = "";
    }
    render() {
        return html `
        <div class="flight-basic-detail-view">
            <span class="text-view">${this.duration}</span>
            <span class="stop-horizontal-line"></span>      
            <span class="text-view">${this.stopInfo}</span>
        </div>
      `;
    }
};
FlightBasicDetailComponent.styles = css `
    .flight-basic-detail-view {
      display: inline-block;
      margin: 10px;
    }

    .text-view {
      display: block;
      text-align: center;
      font-size: 15px;
      padding: 5px;
    }

    .stop-horizontal-line {
        display: block;
        width: 200px;
        border-top: 2px solid blue;
    }
  `;
__decorate([
    property({ type: String })
], FlightBasicDetailComponent.prototype, "duration", void 0);
__decorate([
    property({ type: String })
], FlightBasicDetailComponent.prototype, "stopInfo", void 0);
FlightBasicDetailComponent = __decorate([
    customElement('flight-basic-detail-component')
], FlightBasicDetailComponent);
export { FlightBasicDetailComponent };
//# sourceMappingURL=flight-basic-detail-component.js.map