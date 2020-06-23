import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
} from 'lit-element';

@customElement('app-counter')
export class Counter extends LitElement {
  @internalProperty()
  value = 0;

  @property({type: Number})
  min = 0;

  @property({type: Number})
  max = 10;

  @property({type: String})
  title = 'Adult';

  render() {
    return html`
      <div class="counter-component">
        <button
          class="counter-decrement-btn"
          @click=${this.OnDecrement}
          ?disabled=${this.value === this.min}
        >
          -
        </button>
        <label class="counter-value-lbl">${this.value}</label>
        <button
          class="counter-increment-btn"
          @click=${this.OnIncrement}
          ?disabled=${this.value === this.max}
        >
          +
        </button>
      </div>
    `;
  }

  OnIncrement() {
    console.log('On increment');
    if (this.value < this.max) {
      this.value++;
      let event = new CustomEvent('travellerCountChangeEvent', {
        detail: {
          totalTravellerCount: this.value,
          message: 'increment',
          title: this.title,
        },
      });
      this.dispatchEvent(event);
    }
  }
  OnDecrement() {
    console.log('On Decrement');
    if (this.value != this.min) {
      this.value--;
      let event = new CustomEvent('travellerCountChangeEvent', {
        detail: {
          totalTravellerCount: this.value,
          message: 'decrement',
          title: this.title,
        },
      });
      this.dispatchEvent(event);
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'app-counter': Counter;
  }
}
