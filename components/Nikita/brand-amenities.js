var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let BrandAmenities = class BrandAmenities extends LitElement {
    constructor() {
        super(...arguments);
        this.warning = 'Warning: This fare has restrictions';
        this.warning_message = "Basic economy is not eligible for upgrades";
    }
    render() {
        return html `     
      <p><b>${this.warning}</b></p>
      <p>&#9888; ${this.warning_message}</p>
      <div>
        <div class="title">
          <p>Included</p>
          <span class="tick">&#10003;</span> 
          <span>Carry-on-bag</span>
        </div>
        <div class="title">
          <p>Additional cost</p>
          <span>&dollar; Checked bags</span>
        </div>
        <div class="title">
          <p>Not available</p>
          <span class="cross">&#10005;</span> 
          <span>Ticket change</span>
          <br>
          <span class="cross">&#10005;</span>
          <span>Ticket refund</span>
        </div>
      </div>
      <slot></slot>
    `;
    }
};
BrandAmenities.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 270px;      
    }
    div .title{
      display: block;
      border: solid 1px gray;
      padding: 10px;
      max-width: 250px; 
      font-family:Book Antiqua;
    }
    div p{
      font-weight: bold;
      color :#000067;
    }
    .tick
    {
      font-weight: bold;
      color: #32CD32;
    }
    .cross
    {
      color: #FF0000;
    }
  `;
__decorate([
    property()
], BrandAmenities.prototype, "warning", void 0);
__decorate([
    property()
], BrandAmenities.prototype, "warning_message", void 0);
BrandAmenities = __decorate([
    customElement('brand-amenities')
], BrandAmenities);
export { BrandAmenities };
//# sourceMappingURL=brand-amenities.js.map