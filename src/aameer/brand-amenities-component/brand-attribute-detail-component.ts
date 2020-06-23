import {LitElement, customElement, html, property, css} from 'lit-element';

@customElement('brand-attribute-detail-component')
export class BrandAttributeDetailComponent extends LitElement {
  @property({type: String})
  title = '';

  @property({type: String})
  availability = '';

  @property({type: String})
  brand_attributes = '';

  static get styles() {
    return css`
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
    return html`
      <div class="attribute-detail">
        <div class="detail-header">${this.title}</div>
        <div class="detail-body">
          ${this.brand_attributes
            .split(',')
            .map(
              (i) => html`<div class="brand-attribute-section">
                <span class="brand-attribute-icon"
                  >${this.availability === 'free'
                    ? html`&#9989;`
                    : this.availability === 'cash'
                    ? html`&dollar;`
                    : html`&#10060;`} </span
                ><label class="brand-attribute-name">${i}</label>
              </div>`
            )}
        </div>
      </div>
    `;
  }
}
