import {LitElement, customElement, html, property , css} from 'lit-element';

export class OrxeOutbound extends LitElement {
    @property({type: String})
    from = "(DEL) 02.30 am";
  
    @property({type: String})
    to = "(BOM) 04.50 pm";
   
    constructor() {
        super();
    }

    static get styles() {
        return css`
        .container {
            position: relative;
            width: 300px;
            height: 70px;
            border: 5px solid #DAE4EC;
            box-sizing: border-box;
          }
          .topleft {
            position: absolute;
            top: 0px;
            left: 10px;
            font-size: 16px;
          } 
          
          .topright {
            position: absolute;
            top: 0px;
            right: 10px;
            font-size: 14px;
          }   
          .bottomleft {
            position: absolute;
            bottom: 8px;
            left: 10px;
            font-size: 16px;
          }
        `;
    }

    render(){
        return html`
        <div class="container">
        <label class="topleft">Your outbound flight</label>
        <a href="https://www.google.com" class="topright">Change flight</a>
        <label class="bottomleft">${this.from} --> ${this.to} </label>
        </div>
        `;

    }
}
