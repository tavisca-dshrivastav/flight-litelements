import {LitElement, customElement, property, html, css} from 'lit-element';

@customElement('app-flight-detail-component')
export class FlightDetailComponent extends LitElement {
  static get styles() {
    return css`
      .flight-detail {
        margin: 1px;
      }
    `;
  }
  @property({type: String})
  airportCode = '';

  @property({type: String})
  time = '';

  @property({type: String})
  meridiem = '';

  render() {
    return html`
      <label class="flight-detail-element">
        <label class="airportCode flight-detail">(${this.airportCode})</label>
        <label class="time flight-detail">${this.time}</label>
        <label class="meridiem flight-detail">${this.meridiem}</label>
      </label>
    `;
  }
}
