var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html, internalProperty, } from 'lit-element';
let TravellerCounter = class TravellerCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.subTitle = '';
        this.totalValue = 0;
    }
    render() {
        return html `
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
    handleEvent(e) {
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
};
__decorate([
    property({ type: String })
], TravellerCounter.prototype, "title", void 0);
__decorate([
    property({ type: String })
], TravellerCounter.prototype, "subTitle", void 0);
__decorate([
    internalProperty()
], TravellerCounter.prototype, "totalValue", void 0);
TravellerCounter = __decorate([
    customElement('app-traveller-counter')
], TravellerCounter);
export { TravellerCounter };
//# sourceMappingURL=traveller-counter.js.map