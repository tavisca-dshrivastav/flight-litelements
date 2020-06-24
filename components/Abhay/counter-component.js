var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.paxCount = 0;
    }
    render() {
        return html `
        <div class="adult">
          <button @click=${this._onClickAdd} >+</button>
          <div class="count-div">
        <label><b>${this.paxCount}<b></label>
      </div>
          <button @click=${this._onClickRemove}>-</button>

        </div>
        `;
    }
    _onClickAdd() {
        this.paxCount++;
    }
    _onClickRemove() {
        if (this.paxCount != 0)
            this.paxCount--;
    }
};
MyElement.styles = css `
button {
    background-color: #ebf2f7;
    color: #367099;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    width:10px
    height:5px
  }
.count-div {
    color: #0000A0;
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 100px;
  }
`;
__decorate([
    property({ type: Number })
], MyElement.prototype, "paxCount", void 0);
MyElement = __decorate([
    customElement('my-counterelement')
], MyElement);
export { MyElement };
//# sourceMappingURL=counter-component.js.map