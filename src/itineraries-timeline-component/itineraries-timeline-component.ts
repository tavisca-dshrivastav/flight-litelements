
 import { LitElement, html, customElement, property } from 'lit-element';

 @customElement('itineraries-timeline-component')
 export class ItinerariesTimeLineComponent extends LitElement {

    @property({type: Array})
    itineraries = [{
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
    },{
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

   render() {
     return html`
       <div class="itineraries-timeline">
         ${
            this.itineraries.map(itinerary => 
              html` 
                <itinerary-timeline-component 
                  departureCode="${itinerary.departure.code}"
                  departureTime="${itinerary.departure.time}"
                  arrivalCode="${itinerary.arrival.code}"
                  arrivalTime="${itinerary.arrival.time}"
                  duration="${itinerary.duration}"
                  stopInformation="${itinerary.stopInformation}"
                ></itinerary-timeline-component>
              `
            )
         }
       </div>
     `;
   }
 }

 declare global {
   interface HTMLElementTagNameMap {
     'itineraries-timeline-component': ItinerariesTimeLineComponent;
   }
 }

