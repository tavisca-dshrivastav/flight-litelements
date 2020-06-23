var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css, property } from 'lit-element';
let StoppageWidget = class StoppageWidget extends LitElement {
    constructor() {
        super(...arguments);
        this.Type = "vertical";
        this.NoOfStoppage = 0;
    }
    render() {
        return html `
        <ul class="${this.Type}">
            ${new Array(this.NoOfStoppage).fill(this.NoOfStoppage).forEach(() => html `<li class="list-${this.Type}">Abc</li>`)}
        </ul> 
    `;
    }
};
StoppageWidget.styles = css `
        .list-vertical{
            border-left: 6px solid black; 
            height: 4em; 
            position:absolute; 
        }
        .list-horizontal{
            border-top: 6px solid black; 
            width: 6em; 
            position:absolute;  
        }
        .list-vertical:before, .list-horizontal:before, .list-vertical:after, .list-horizontal:after{
            content: " ";
            width: 10px;
            height: 10px;
            position: absolute;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            border: 1px solid black;
            background-color: black;       
        }
        .horizontal{
            display: initial
        }
        .vertical{
            display: block
        }
     `;
__decorate([
    property({ type: String })
], StoppageWidget.prototype, "Type", void 0);
__decorate([
    property({ type: Number })
], StoppageWidget.prototype, "NoOfStoppage", void 0);
StoppageWidget = __decorate([
    customElement('stoppage-widget')
], StoppageWidget);
export { StoppageWidget };
//# sourceMappingURL=stoppage-widget.js.map