var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let ItineraryTimeLineComponent = class ItineraryTimeLineComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.departureCode = "";
        this.departureTime = "";
        this.arrivalCode = "";
        this.arrivalTime = "";
        this.duration = "";
        this.stopInformation = "";
    }
    render() {
        return html `
        <div>
           <location-timeline-component code="${this.departureCode}" time="${this.departureTime}"></location-timeline-component>
           <flight-basic-detail-component duration="${this.duration}" stopInfo="${this.stopInformation}" ></flight-basic-detail-component>
           <location-timeline-component code="${this.arrivalCode}" time="${this.arrivalTime}"></location-timeline-component>
        </div>
          
      `;
    }
};
ItineraryTimeLineComponent.styles = css `

  `;
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "departureCode", void 0);
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "departureTime", void 0);
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "arrivalCode", void 0);
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "arrivalTime", void 0);
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "duration", void 0);
__decorate([
    property({ type: String })
], ItineraryTimeLineComponent.prototype, "stopInformation", void 0);
ItineraryTimeLineComponent = __decorate([
    customElement('itinerary-timeline-component')
], ItineraryTimeLineComponent);
export { ItineraryTimeLineComponent };
//# sourceMappingURL=itinerary-timeline-component.js.map