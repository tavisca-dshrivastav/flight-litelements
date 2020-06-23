import { LitElement, html, css, property } from 'lit-element';

export class Counter extends LitElement {    

    @property({ type: Number })
    count = 1;
  
    private _onIncrement() {
      this.count++;
    }
  
    private _onDecrement() {
      if (this.count !== 1) {
        this.count--;
      }
    }
  
    static styles = css`
      button {
        position: none;
        background-color: #ADD8E6;
        border: none;
        color: white;
        padding: 5px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        width:10px
        height:10px
      }
      .count-div {
        color: #0000A0;
        display: inline-block;
        text-align: center;
        width: 20px;
        height: 20px;
      }
    `;
    render() {
      return html`
      <button @click=${this._onDecrement}>-</button>
      <div class="count-div">
        <label><b>${this.count}<b></label>
      </div>
      <button @click=${this._onIncrement}>+</button>
    `;
    }
}

customElements.define('my-counter', Counter);
declare global {
  interface HTMLElementTagNameMap {
    'my-counter': Counter;
  }
}
