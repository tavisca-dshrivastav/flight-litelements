
import {LitElement, html, customElement,property css} from 'lit-element';


@customElement('timeline-element')
export class TimeLineElement extends LitElement {

  @property()
  data =[{Origin :"Pune" , Destination :"delhi" , arrival:"2.30 AM",departure:"4.30 AM"},
  {Origin :"Banglore" , Destination :"delhi" , arrival:"6.30 AM",departure:"8.30 AM"}]; 


  static styles = css`
  p,
  label {
      font: 1rem 'Fira Sans', sans-serif;
  }
  
  input {
      margin: .4rem;
  } 
  `;

  render() {
    return html`
    <div >
    ${this.data.map(item => html`
      <div>
      <h2>${item.Origin} (${item.arrival}) &#x2192; ${item.Destination} (${item.departure})</h2> 
      </div>`
    )}
    </div>   
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'timeline-element': TimeLineElement;
  }
}
