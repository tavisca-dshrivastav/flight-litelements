var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { Itinerary } from '../model/itinerary';
let ItineraryTimeLineComponent = class ItineraryTimeLineComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.itinerary = {
            arrival: {
                code: "",
                dateTime: ""
            },
            departure: {
                code: "",
                dateTime: ""
            },
            duration: "5",
            stopInformation: ""
        };
    }
    render() {
        return html `
          <span>${this.itinerary.duration}</span>    
      `;
    }
};
ItineraryTimeLineComponent.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property({ type: Itinerary, attribute: false })
], ItineraryTimeLineComponent.prototype, "itinerary", void 0);
ItineraryTimeLineComponent = __decorate([
    customElement('itinerary-timeline-component')
], ItineraryTimeLineComponent);
export { ItineraryTimeLineComponent };
//# sourceMappingURL=itinerary-timeline-component.js.map