import { LitElement, html, customElement, css, property, internalProperty } from 'lit-element';

@customElement('stoppage-widget')
export class StoppageWidget extends LitElement {
  static styles = css`
        .list-vertical{
            border-left: 6px solid black; 
            height: 4em; 
            position:absolute; 
        }
        .list-horizontal{
            border-top: 6px solid black; 
            width: 6em; 
            position:absolute;  
        }
        .list-vertical:before, .list-horizontal:before, .list-vertical:after, .list-horizontal:after{
            content: " ";
            width: 10px;
            height: 10px;
            position: absolute;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            border: 1px solid black;
            background-color: black;       
        }
        .horizontal{
            display: initial
        }
        .vertical{
            display: block
        }
     `;
   
   @property({type: String})
    public Type = "horizontal";
   
    @internalProperty()
    private stops: string[]=["AA", "KK"];
    
    @property({type: Number})
    public noOfStops = 0;
  render() {
    return html`
        <ul class="${this.Type}">
            ${ this.stops.map(x => html`<li class="list-${this.Type}">${x}</li>`)}
        </ul> 
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stoppage-widget': StoppageWidget;
  }
}
