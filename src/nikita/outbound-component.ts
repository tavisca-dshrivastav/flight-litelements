
import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('outbound-component')
export class Outbound extends LitElement {

  arrival: string;
  departure: string;
  arrival_time: string;
  departure_time: string;

  constructor() {
    super();
    this.arrival = 'CPT';
    this.departure = 'DEL';
    this.arrival_time = '04:50 pm';
    this.departure_time = '02:30 am'

  };
  
  static styles = css`
    :host {
      display: block;
      border: solid 10px #DCDCDC;
      padding: 12px;
      max-width: 350px; 
      font-family:Book Antiqua;     
    }
    .change_flight,.title1
    {
      float: left;
      width: 50%;
    }
    .change_flight
    {
      color: #4169E1;
    }
  `;

  @property()
  title = 'Your outbound flight';

  render() {
    return html`     
      <div>
        <p class="title1">${this.title}</p>
        <p class="change_flight"><a href="https://www.w3schools.com/" >Change Flight</a></p>        
      </div>
      <br>
      <div>
      <p><b>(${this.departure}) ${this.departure_time} &rarr; (${this.arrival}) ${this.arrival_time}</b></p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outbound-component': Outbound;
  }
}
