import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('my-counterelement')
export class MyElement extends LitElement {

static styles=css`
button {
    background-color: #ebf2f7;
    color: #367099;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    width:10px
    height:5px
  }
.count-div {
    color: #0000A0;
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 100px;
  }
`;

@property({type: Number})
paxCount = 0;

    render() {
        return html`
        <div class="adult">
          <button @click=${this._onClickAdd} >+</button>
          <div class="count-div">
        <label><b>${this.paxCount}<b></label>
      </div>
          <button @click=${this._onClickRemove}>-</button>

        </div>
        `;
      }
    
      private _onClickAdd() {
        this.paxCount++;
      }
      private _onClickRemove(){
          if(this.paxCount!=0)
            this.paxCount--;
      }
    }    
    declare global {
        interface HTMLElementTagNameMap {
          'my-counterelement': MyElement;
        }
      }