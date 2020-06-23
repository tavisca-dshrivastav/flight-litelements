import {LitElement, customElement, html, css, property} from 'lit-element';
import './flight-detail-component';

@customElement('app-outbound-flight-component')
export class OutBoundFlightComponent extends LitElement {
  static get styles() {
    return css`
      .outbound-flight-component {
        border-style: solid;
        border-width: 1px;
        padding: 10px;
        display: inline-block;
      }
      .outbound-flight-component-header {
        margin: 2px;
      }

      .outbound-flight-component-header a {
        float: right;
      }

      .outbound-flight-component-header label {
        float: left;
      }
      .outbound-flight-component-body {
        margin: 2px;
      }
    `;
  }

  @property({type: String})
  title = '';

  @property({type: String})
  originAirportCode = '';

  @property({type: String})
  originTime = '';

  @property({type: String})
  originTimeMeridiem = '';

  @property({type: String})
  destinationAirportCode = '';

  @property({type: String})
  destinationTime = '';

  @property({type: String})
  destinationTimeMeridiem = '';

  _onClick() {
    console.log('clicked');
  }

  render() {
    return html`
      <div class="outbound-flight-component">
        <div class="outbound-flight-component-header">
          <label>${this.title}</label>
          <a href="#" @click=${this._onClick}>Change flight</a>
        </div>
        <div class="outbound-flight-component-body">
          <app-flight-detail-component
            airportCode=${this.originAirportCode}
            time=${this.originTime}
            meridiem=${this.originTimeMeridiem}
          ></app-flight-detail-component>

          <label>-></label>

          <app-flight-detail-component
            airportCode=${this.destinationAirportCode}
            time=${this.destinationTime}
            meridiem=${this.destinationTimeMeridiem}
          ></app-flight-detail-component>
        </div>
      </div>
    `;
  }
}
