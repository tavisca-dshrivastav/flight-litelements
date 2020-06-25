import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('counter-component')
export class CounterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
    .count-button {
      display: inline-block;
      background-color: #35BDDD;
      border: none;
      color: #ffffff;
    }
  `;

  @property({type: Number})
  count = 0;

  render() {
    return html`
      <button 
        class="count-button" 
        @click=${this._onDecrementClick} 
        part="button">
        -
      </button>
      <span 
        class="count-view">
        ${this.count}
      </span>
      <button 
        class="count-button" 
        @click=${this._onIncrementClick} 
        part="button">
        +
      </button>
    `;
  }

  private _onIncrementClick() {
    this.count++;
  }

  private _onDecrementClick() {
    this.count--;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'counter-component': CounterComponent;
  }
}
