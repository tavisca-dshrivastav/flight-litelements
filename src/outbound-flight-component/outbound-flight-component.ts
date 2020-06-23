import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('outbound-flight-component')
class OutboundFlightComponent extends LitElement{
    static styles = css`
        .outbound {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: space-between;
            flex-flow: column;
        }
        .outbound-text{
            font-family: sans-serif 'Courier New', Courier, monospace;
            font-size: 1.5em; 
        }
        .change-flight{
            text-decoration: underline;
            color: blue;
        }
        .change-flight:hover {
            color: lightblue;
            cursor: pointer;
        }
        .outbound-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: space-between;
           
            flex-flow: row;
        }
        .outbound-timing{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: space-between;
            flex-flow: row;
        }
        .outbound-timing > span {
            padding: .5em;
            margin: .5em;
        }

     `;
    
    @property({type: String})
    departure = "LAS";
    @property({type: String})
    departureTime = "02:21 AM";
    @property({type: String})
    arrival = "LAX";
    @property({type: String})
    arrivalTime = "05:12 AM";
    
    
    @property({type: String})
    routeTo = "This is route link";

    render() {
        return html`
        <div class="outbound">
            <div class="outbound-header">
                <span class="outbound-text">
                    Your outbound flight
                </span>
                <span class="change-flight" @click="${this._onClick}">
                    Change Flight
                </span>
            </div>
            <div class="outbound-timing">
                
                    <span class="from">(${this.departure}) ${this.departureTime}</span>
                    <span class="arrow">&#x2192;</span>
                    <span class="to">(${this.arrival}) ${this.arrivalTime}</span>
                
            </div>
        </div>
    `
    };

    _onClick(e: any){
        e?.preventDefault();
        console.log(this.routeTo);

    }
}


declare global {
    interface HTMLElementTagNameMap {
      'outbound-flight-component': OutboundFlightComponent;
    }
  }