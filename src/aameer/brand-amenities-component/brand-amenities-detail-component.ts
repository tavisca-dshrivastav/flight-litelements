import {LitElement, customElement, html, property, css} from 'lit-element';
import './brand-attribute-detail-component';

@customElement('brand-amenities-detail-component')
export class BrandAmenitiesDetails extends LitElement {
  static get styles() {
    return css`
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
  @property({type: String})
  title = '';

  @property({type: String})
  subTitle = '';

  @property()
  data = [
    {availability: 'free', title: 'Included', values: 'Carry-on bag'},
    {availability: 'cash', title: 'Additional cost', values: 'Checked bags'},
    {
      availability: 'noProvided',
      title: 'Not Available',
      values: 'Ticket change,Ticket refund',
    },
  ];

  constructor() {
    super();
  }

  render() {
    return html`
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
          ${this.data.map(
            (i) => html`<brand-attribute-detail-component
                title=${i.title}
                availability=${i.availability}
                brand_attributes=${i.values}
              >
              </brand-attribute-detail-component>
              <i class="border"></i>`
          )}
        </div>
      </div>
    `;
  }
}
