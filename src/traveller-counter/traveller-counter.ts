import {
  LitElement,
  customElement,
  property,
  html,
  internalProperty,
} from 'lit-element';

@customElement('app-traveller-counter')
export class TravellerCounter extends LitElement {
  @property({type: String})
  title = '';

  @property({type: String})
  subTitle = '';

  @internalProperty()
  totalValue = 0;

  render() {
    return html`
      <div>
        <label>${this.title}</label>
        <label>${this.subTitle}</label>
        <app-counter
          max="10"
          @travellerCountChangeEvent="${this.handleEvent}"
          title="${this.title}"
        ></app-counter>
      </div>
    `;
  }
  handleEvent(e: any) {
    this.totalValue = parseInt(e.detail.totalTravellerCount);
    let event = new CustomEvent('travellerCountChangeEvent', {
      detail: {
        totalTravellerCount: this.totalValue,
        message: e.detail.message,
        title: e.detail.title,
      },
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-traveller-counter': TravellerCounter;
  }
}
