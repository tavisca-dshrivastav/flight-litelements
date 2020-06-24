import {LitElement, customElement, html, property , css} from 'lit-element';


export class OrxeCounter extends LitElement {
  @property({type: Number})
  min = 0;

  @property({type: Number})
  max = 0;

  @property({type: Number})
  value = 0;

  @property({type: Number})
  step = 1;

  constructor() {
    super();
    this.value = this.min;
  }

  static get styles() {
    // Write styles in standard CSS
    return css`
    .btn {
        position: none;
        background-color: #008CBA;
        border: none;
        color: white;
        padding: 5px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 22px;
        width:20px
        height:20px
      }
      .center {
        margin: auto;
        width: 50%;
        border: 3px solid #008CBA;
        padding: 5% 5% 5% 50%;
      }
      .lbl{
          padding: 10px 10px;
          font-size:22px;
          margin:5px;
      }
    `;
  }

  render() {
    return html`
      <div class="">
        <button class="btn"
          @click="${this.onDecreaseClicked}"
          ?disabled=${this.min === this.value}
        >
          -
        </button>
        <label class="lbl"> ${this.value} </label>
        <button class="btn"
          @click="${this.onIncreaseCliked}"
          ?disabled=${this.max === this.value}
        >
          +
        </button>
      </div>
    `;
  }

  firstUpdated() {
    this.step = this.step < 0 ? 1 : this.step;
    this.min = this.min < 0 ? 0 : this.min;
    this.max = this.max < 0 ? Infinity : this.max;
    this.value =
      this.value < this.min || this.value > this.max ? this.min : this.value;
  }

  connectedCallback() {    
    super.connectedCallback();
    console.log('connected');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('DisConnected');
  }

  updated(_changedProperties: any) {
    let click = new Event('click');
    this.dispatchEvent(click);
  }

  update(_event: any) {
    super.update(_event);
  }

  onDecreaseClicked() {
    const updatedValue = this.value - this.step;
    this.value = updatedValue >= this.min ? updatedValue : this.value;
  }

  onIncreaseCliked() {
    const updatedValue = this.value + this.step;
    this.value = updatedValue <= this.max ? updatedValue : this.value;
  }
}
