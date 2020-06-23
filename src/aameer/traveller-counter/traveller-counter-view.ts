import {LitElement, customElement, html, internalProperty} from 'lit-element';
import './traveller-counter';

@customElement('app-traveller-counter-view')
export class TravellerCounterView extends LitElement {
  @internalProperty()
  totalTarveller = 0;

  render() {
    return html`
      <div class=".app-traveller-counter-view">
        <div class=".total-traveller">
          <label>Total Travellers: ${this.totalTarveller}</label>
        </div>
        <div>
          <app-traveller-counter
            title="Adult"
            subTitle="18+"
            @travellerCountChangeEvent="${this.handleEvent}"
          ></app-traveller-counter>
        </div>
        <div>
          <app-traveller-counter
            title="Child"
            subTitle="2-17"
            @travellerCountChangeEvent="${this.handleEvent}"
          ></app-traveller-counter>
        </div>
        <div>
          <app-traveller-counter
            title="Infant"
            subTitle="0-1"
            @travellerCountChangeEvent="${this.handleEvent}"
          ></app-traveller-counter>
        </div>
      </div>
    `;
  }

  handleEvent(e: any) {
    console.log(e);
    if (e.detail.message === 'increment') {
      this.totalTarveller++;
    } else {
      this.totalTarveller--;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-traveller-counter-view': TravellerCounterView;
  }
}
