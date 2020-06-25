var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let ItinerariesTimeLineComponent = class ItinerariesTimeLineComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.itineraries = [{
                departure: {
                    code: "DEL",
                    time: "02:30 am"
                },
                arrival: {
                    code: "CPT",
                    time: "04:50 pm"
                },
                duration: "14h 20m",
                stopInformation: "1 Stop (ADD)"
            }, {
                departure: {
                    code: "DEL",
                    time: "06:30 am"
                },
                arrival: {
                    code: "CPT",
                    time: "10:50 am"
                },
                duration: "4h 20m",
                stopInformation: "Non Stop"
            }];
    }
    render() {
        return html `
       <div class="itineraries-timeline">
         ${this.itineraries.map(itinerary => html ` 
                <itinerary-timeline-component 
                  departureCode="${itinerary.departure.code}"
                  departureTime="${itinerary.departure.time}"
                  arrivalCode="${itinerary.arrival.code}"
                  arrivalTime="${itinerary.arrival.time}"
                  duration="${itinerary.duration}"
                  stopInformation="${itinerary.stopInformation}"
                ></itinerary-timeline-component>
              `)}
       </div>
     `;
    }
};
__decorate([
    property({ type: Array })
], ItinerariesTimeLineComponent.prototype, "itineraries", void 0);
ItinerariesTimeLineComponent = __decorate([
    customElement('itineraries-timeline-component')
], ItinerariesTimeLineComponent);
export { ItinerariesTimeLineComponent };
//# sourceMappingURL=itineraries-timeline-component.js.map