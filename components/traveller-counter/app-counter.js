var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, internalProperty, } from 'lit-element';
let Counter = class Counter extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 0;
        this.min = 0;
        this.max = 10;
        this.title = 'Adult';
    }
    render() {
        return html `
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
};
__decorate([
    internalProperty()
], Counter.prototype, "value", void 0);
__decorate([
    property({ type: Number })
], Counter.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], Counter.prototype, "max", void 0);
__decorate([
    property({ type: String })
], Counter.prototype, "title", void 0);
Counter = __decorate([
    customElement('app-counter')
], Counter);
export { Counter };
//# sourceMappingURL=app-counter.js.map