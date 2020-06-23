var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property, css } from 'lit-element';
let BrandAttributeDetailComponent = class BrandAttributeDetailComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.availability = '';
        this.brand_attributes = '';
    }
    static get styles() {
        return css `
      .detail-header {
        margin-bottom: 10px;
        margin-left: 10px;
        margin-top: 10px;
      }
      .brand-attribute-icon {
        margin-right: 5px;
        margin-left: 10px;
      }
      .brand-attribute-section {
        margin: 2px;
      }
      .attribute-detail {
        margin-bottom: 10px;
        margin-left: 10px;
        margin-top: 10px;
      }
    `;
    }
    render() {
        return html `
      <div class="attribute-detail">
        <div class="detail-header">${this.title}</div>
        <div class="detail-body">
          ${this.brand_attributes
            .split(',')
            .map((i) => html `<div class="brand-attribute-section">
                <span class="brand-attribute-icon"
                  >${this.availability === 'free'
            ? html `&#9989;`
            : this.availability === 'cash'
                ? html `&dollar;`
                : html `&#10060;`} </span
                ><label class="brand-attribute-name">${i}</label>
              </div>`)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], BrandAttributeDetailComponent.prototype, "title", void 0);
__decorate([
    property({ type: String })
], BrandAttributeDetailComponent.prototype, "availability", void 0);
__decorate([
    property({ type: String })
], BrandAttributeDetailComponent.prototype, "brand_attributes", void 0);
BrandAttributeDetailComponent = __decorate([
    customElement('brand-attribute-detail-component')
], BrandAttributeDetailComponent);
export { BrandAttributeDetailComponent };
//# sourceMappingURL=brand-attribute-detail-component.js.map