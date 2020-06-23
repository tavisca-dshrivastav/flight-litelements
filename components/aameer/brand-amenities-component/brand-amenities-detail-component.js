var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property, css } from 'lit-element';
import './brand-attribute-detail-component';
let BrandAmenitiesDetails = class BrandAmenitiesDetails extends LitElement {
    constructor() {
        super();
        this.title = '';
        this.subTitle = '';
        this.data = [
            { availability: 'free', title: 'Included', values: 'Carry-on bag' },
            { availability: 'cash', title: 'Additional cost', values: 'Checked bags' },
            {
                availability: 'noProvided',
                title: 'Not Available',
                values: 'Ticket change,Ticket refund',
            },
        ];
    }
    static get styles() {
        return css `
      .brand-amenities-detail {
        display: inline-block;
        border: solid 1px black;
      }
      .brand-amenities-detail-body {
        border: solid 1px gray;
        margin: 20px;
      }
      .brand-amenities-detail-head {
        margin: 20px;
      }
      .brand-amenities-detail-head-title {
        font-weight: bold;
      }
      .brand-attributes {
        border: solid 1px black;
      }
      .border {
        border: solid 1px gray;
        display: block;
      }
    `;
    }
    render() {
        return html `
      <div class="brand-amenities-detail">
        <div class="brand-amenities-detail-head">
          <div>
            <label class="brand-amenities-detail-head-title"
              >${this.title}</label
            >
          </div>
          <div>
            <i class="sub-title-icon">!</i>
            <label class="brand-amenities-detail-head-subTitle"
              >${this.subTitle}</label
            >
          </div>
        </div>
        <div class="brand-amenities-detail-body">
          ${this.data.map((i) => html `<brand-attribute-detail-component
                title=${i.title}
                availability=${i.availability}
                brand_attributes=${i.values}
              >
              </brand-attribute-detail-component>
              <i class="border"></i>`)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], BrandAmenitiesDetails.prototype, "title", void 0);
__decorate([
    property({ type: String })
], BrandAmenitiesDetails.prototype, "subTitle", void 0);
__decorate([
    property()
], BrandAmenitiesDetails.prototype, "data", void 0);
BrandAmenitiesDetails = __decorate([
    customElement('brand-amenities-detail-component')
], BrandAmenitiesDetails);
export { BrandAmenitiesDetails };
//# sourceMappingURL=brand-amenities-detail-component.js.map