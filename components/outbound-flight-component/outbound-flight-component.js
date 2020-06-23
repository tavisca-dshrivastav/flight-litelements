var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property } from 'lit-element';
let OutboundFlightComponent = class OutboundFlightComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.departure = "LAS";
        this.departureTime = "02:21 AM";
        this.arrival = "LAX";
        this.arrivalTime = "05:12 AM";
        this.routeTo = "This is route link";
    }
    render() {
        return html `
        <div class="outbound">
            <div class="outbound-header">
                <span class="outbound-text">
                    Your outbound flight
                </span>
                <span class="change-flight" @click="${this._onClick}">
                    Change Flight
                </span>
            </div>
            <div class="outbound-timing">
                
                    <span class="from">(${this.departure}) ${this.departureTime}</span>
                    <span class="arrow">&#x2192;</span>
                    <span class="to">(${this.arrival}) ${this.arrivalTime}</span>
                
            </div>
        </div>
    `;
    }
    ;
    _onClick(e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        console.log(this.routeTo);
    }
};
OutboundFlightComponent.styles = css `
        .outbound {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: space-between;
            flex-flow: column;
        }
        .outbound-text{
            font-family: sans-serif 'Courier New', Courier, monospace;
            font-size: 1.5em; 
        }
        .change-flight{
            text-decoration: underline;
            color: blue;
        }
        .change-flight:hover {
            color: lightblue;
            cursor: pointer;
        }
        .outbound-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: space-between;
           
            flex-flow: row;
        }
        .outbound-timing{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: space-between;
            flex-flow: row;
        }
        .outbound-timing > span {
            padding: .5em;
            margin: .5em;
        }

     `;
__decorate([
    property({ type: String })
], OutboundFlightComponent.prototype, "departure", void 0);
__decorate([
    property({ type: String })
], OutboundFlightComponent.prototype, "departureTime", void 0);
__decorate([
    property({ type: String })
], OutboundFlightComponent.prototype, "arrival", void 0);
__decorate([
    property({ type: String })
], OutboundFlightComponent.prototype, "arrivalTime", void 0);
__decorate([
    property({ type: String })
], OutboundFlightComponent.prototype, "routeTo", void 0);
OutboundFlightComponent = __decorate([
    customElement('outbound-flight-component')
], OutboundFlightComponent);
//# sourceMappingURL=outbound-flight-component.js.map