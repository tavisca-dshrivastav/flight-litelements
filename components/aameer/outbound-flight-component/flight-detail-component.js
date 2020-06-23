var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html, css } from 'lit-element';
let FlightDetailComponent = class FlightDetailComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.airportCode = '';
        this.time = '';
        this.meridiem = '';
    }
    static get styles() {
        return css `
      .flight-detail {
        margin: 1px;
      }
    `;
    }
    render() {
        return html `
      <label class="flight-detail-element">
        <label class="airportCode flight-detail">(${this.airportCode})</label>
        <label class="time flight-detail">${this.time}</label>
        <label class="meridiem flight-detail">${this.meridiem}</label>
      </label>
    `;
    }
};
__decorate([
    property({ type: String })
], FlightDetailComponent.prototype, "airportCode", void 0);
__decorate([
    property({ type: String })
], FlightDetailComponent.prototype, "time", void 0);
__decorate([
    property({ type: String })
], FlightDetailComponent.prototype, "meridiem", void 0);
FlightDetailComponent = __decorate([
    customElement('app-flight-detail-component')
], FlightDetailComponent);
export { FlightDetailComponent };
//# sourceMappingURL=flight-detail-component.js.map