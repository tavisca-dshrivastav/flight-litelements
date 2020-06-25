var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let LocationTimeLineComponent = class LocationTimeLineComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.time = "";
        this.code = "";
    }
    render() {
        return html `
        <div class="location-timeline-view">
            <span class="time-view">${this.time}</span>       
            <span class="code-view">${this.code}</span>
        </div>
      `;
    }
};
LocationTimeLineComponent.styles = css `
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
__decorate([
    property({ type: String })
], LocationTimeLineComponent.prototype, "time", void 0);
__decorate([
    property({ type: String })
], LocationTimeLineComponent.prototype, "code", void 0);
LocationTimeLineComponent = __decorate([
    customElement('location-timeline-component')
], LocationTimeLineComponent);
export { LocationTimeLineComponent };
//# sourceMappingURL=location-timeline-component.js.map