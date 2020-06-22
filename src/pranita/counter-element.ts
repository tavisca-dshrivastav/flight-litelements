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
 
  @property({type: Number})
  count = 0;

  render() {
    return html`
    <button @click=${this._onClickDecrement} part="button"> - </button>
    ${this.count}
    <button @click=${this._onClickIncrement} part="button"> + </button>

    `;
  }

  private _onClickIncrement() {
    this.count++;
  }
  private _onClickDecrement() {
    this.count--;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'counter-element': CounterElement;
  }
}
