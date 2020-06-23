import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('brand-amenities')
export class BrandAmenities extends LitElement {
  static styles = css`
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

  @property()
  warning = 'Warning: This fare has restrictions';

  @property()
  warning_message = "Basic economy is not eligible for upgrades"


  render() {
    return html`     
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
}

declare global {
  interface HTMLElementTagNameMap {
    'brand-amenities': BrandAmenities;
  }
}
