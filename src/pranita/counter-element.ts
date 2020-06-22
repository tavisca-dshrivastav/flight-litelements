import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('counter-element')
export class CounterElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

 
  @property()
  name = 'Pranita';

  
  @property({type: Number})
  count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'counter-element': CounterElement;
  }
}
