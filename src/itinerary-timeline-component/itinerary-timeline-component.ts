 import {LitElement, html, customElement, property, css} from 'lit-element';

 @customElement('itinerary-timeline-component')
 export class ItineraryTimeLineComponent extends LitElement {
   
  static styles = css`

  `;
  
  @property({type: String})
  departureCode = "";

  @property({type: String})
  departureTime = "";

  @property({type: String})
  arrivalCode = "";

  @property({type: String})
  arrivalTime = "";
  
  @property({type: String})
  duration = "";

  @property({type: String})
  stopInformation = "";

  render() {
      return html`
        <div>
           <location-timeline-component code="${this.departureCode}" time="${this.departureTime}"></location-timeline-component>
           <flight-basic-detail-component duration="${this.duration}" stopInfo="${this.stopInformation}" ></flight-basic-detail-component>
           <location-timeline-component code="${this.arrivalCode}" time="${this.arrivalTime}"></location-timeline-component>
        </div>
          
      `;
  }
 }

 declare global {
   interface HTMLElementTagNameMap {
     'itinerary-timeline-component': ItineraryTimeLineComponent;
   }
 }