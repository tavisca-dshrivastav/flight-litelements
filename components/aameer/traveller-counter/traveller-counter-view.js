var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, internalProperty } from 'lit-element';
import './traveller-counter';
let TravellerCounterView = class TravellerCounterView extends LitElement {
    constructor() {
        super(...arguments);
        this.totalTarveller = 0;
    }
    render() {
        return html `
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
    handleEvent(e) {
        console.log(e);
        if (e.detail.message === 'increment') {
            this.totalTarveller++;
        }
        else {
            this.totalTarveller--;
        }
    }
};
__decorate([
    internalProperty()
], TravellerCounterView.prototype, "totalTarveller", void 0);
TravellerCounterView = __decorate([
    customElement('app-traveller-counter-view')
], TravellerCounterView);
export { TravellerCounterView };
//# sourceMappingURL=traveller-counter-view.js.map