import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('location-timeline-component')
export class LocationTimeLineComponent extends LitElement {
  
  static styles = css`
    .location-timeline-view {
      display: inline-block;
      text-align: left;
      margin: 10px;
    }

    .time-view {
      display: block;
      font-size: 20px;
    }

    .code-view {
      display: block;
      font-size: 15px;
    }
  `;

  @property({type: String})
  time = "";
  
  @property({type: String})
  code = "";

  render() {
      return html`
        <div class="location-timeline-view">
            <span class="time-view">${this.time}</span>       
            <span class="code-view">${this.code}</span>
        </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'location-timeline-component': LocationTimeLineComponent;
  }
}