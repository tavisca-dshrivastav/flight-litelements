var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from 'lit-element';
import './flight-detail-component';
let OutBoundFlightComponent = class OutBoundFlightComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.originAirportCode = '';
        this.originTime = '';
        this.originTimeMeridiem = '';
        this.destinationAirportCode = '';
        this.destinationTime = '';
        this.destinationTimeMeridiem = '';
    }
    static get styles() {
        return css `
      .outbound-flight-component {
        border-style: solid;
        border-width: 1px;
        padding: 10px;
        display: inline-block;
      }
      .outbound-flight-component-header {
        margin: 2px;
      }

      .outbound-flight-component-header a {
        float: right;
      }

      .outbound-flight-component-header label {
        float: left;
      }
      .outbound-flight-component-body {
        margin: 2px;
      }
    `;
    }
    _onClick() {
        console.log('clicked');
    }
    render() {
        return html `
      <div class="outbound-flight-component">
        <div class="outbound-flight-component-header">
          <label>${this.title}</label>
          <a href="#" @click=${this._onClick}>Change flight</a>
        </div>
        <div class="outbound-flight-component-body">
          <app-flight-detail-component
            airportCode=${this.originAirportCode}
            time=${this.originTime}
            meridiem=${this.originTimeMeridiem}
          ></app-flight-detail-component>

          <label>-></label>

          <app-flight-detail-component
            airportCode=${this.destinationAirportCode}
            time=${this.destinationTime}
            meridiem=${this.destinationTimeMeridiem}
          ></app-flight-detail-component>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "title", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "originAirportCode", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "originTime", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "originTimeMeridiem", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "destinationAirportCode", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "destinationTime", void 0);
__decorate([
    property({ type: String })
], OutBoundFlightComponent.prototype, "destinationTimeMeridiem", void 0);
OutBoundFlightComponent = __decorate([
    customElement('app-outbound-flight-component')
], OutBoundFlightComponent);
export { OutBoundFlightComponent };
//# sourceMappingURL=outbound-flight-component.js.map