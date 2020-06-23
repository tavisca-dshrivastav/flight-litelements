var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let Outbound = class Outbound extends LitElement {
    constructor() {
        super();
        this.title = 'Your outbound flight';
        this.arrival = 'CPT';
        this.departure = 'DEL';
        this.arrival_time = '04:50 pm';
        this.departure_time = '02:30 am';
    }
    ;
    render() {
        return html `     
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
};
Outbound.styles = css `
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
__decorate([
    property()
], Outbound.prototype, "title", void 0);
Outbound = __decorate([
    customElement('outbound-component')
], Outbound);
export { Outbound };
//# sourceMappingURL=outbound-component.js.map