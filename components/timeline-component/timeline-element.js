var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css, property } from 'lit-element';
var TimelineElementType;
(function (TimelineElementType) {
    TimelineElementType["Horizontal"] = "horizontal";
    TimelineElementType["Vertical"] = "vertical";
})(TimelineElementType || (TimelineElementType = {}));
let TimelineElement = class TimelineElement extends LitElement {
    constructor() {
        super();
        this.Type = TimelineElementType.Horizontal.toString();
        this.Type = TimelineElementType.Horizontal.toString();
    }
    render() {
        return html `
    <div class="${this.Type}">
        <div class="text-block-${this.Type}">
        </div>    
        <div class="line-${this.Type}">
        <stoppage-widget Type="${this.Type}" NoOfStoppage="5"></stoppage-widget>
        </div>    
        <div class="text-block-${this.Type}">
        ${this.Type}
        </div>   
    </div>    
    `;
    }
};
TimelineElement.styles = css `
        .horizontal{
            display: flex;
            flex-direction: row;
        }
        .vertical{
            display: flex;
            flex-direction: column;
        }
    `;
__decorate([
    property({ type: String })
], TimelineElement.prototype, "Type", void 0);
TimelineElement = __decorate([
    customElement('timeline-element')
], TimelineElement);
export { TimelineElement };
//# sourceMappingURL=timeline-element.js.map