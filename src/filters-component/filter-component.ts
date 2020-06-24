import { LitElement, html, customElement, css} from 'lit-element';

@customElement('filter-component')
export class FilterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
  `;
  
  render() {
    return html`
        <slider-component title="Outbound"></slider-component>
        <slider-component title="Return"></slider-component>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'filter-component': FilterComponent;
  }
}
