var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property } from 'lit-element';
export class Counter extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 1;
    }
    _onIncrement() {
        this.count++;
    }
    _onDecrement() {
        if (this.count !== 1) {
            this.count--;
        }
    }
    render() {
        return html `
      <button @click=${this._onDecrement}>-</button>
      <div class="count-div">
        <label><b>${this.count}<b></label>
      </div>
      <button @click=${this._onIncrement}>+</button>
    `;
    }
}
Counter.styles = css `
      button {
        position: none;
        background-color: #ADD8E6;
        border: none;
        color: white;
        padding: 5px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        width:10px
        height:10px
      }
      .count-div {
        color: #0000A0;
        display: inline-block;
        text-align: center;
        width: 20px;
        height: 20px;
      }
    `;
__decorate([
    property({ type: Number })
], Counter.prototype, "count", void 0);
customElements.define('my-counter', Counter);
//# sourceMappingURL=my-counter.js.map