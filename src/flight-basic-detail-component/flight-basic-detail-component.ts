import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('flight-basic-detail-component')
export class FlightBasicDetailComponent extends LitElement {
  
  static styles = css`
    .flight-basic-detail-view {
      display: inline-block;
      margin: 10px;
    }

    .text-view {
      display: block;
      text-align: center;
      font-size: 15px;
      padding: 5px;
    }

    .stop-horizontal-line {
        display: block;
        width: 200px;
        border-top: 2px solid blue;
    }
  `;

  @property({type: String})
  duration = "";
  
  @property({type: String})
  stopInfo = "";

  render() {
      return html`
        <div class="flight-basic-detail-view">
            <span class="text-view">${this.duration}</span>
            <span class="stop-horizontal-line"></span>      
            <span class="text-view">${this.stopInfo}</span>
        </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'flight-basic-detail-component': FlightBasicDetailComponent;
  }
}