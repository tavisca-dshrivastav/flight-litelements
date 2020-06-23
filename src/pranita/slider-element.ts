
import {LitElement, html, customElement, css} from 'lit-element';


@customElement('slider-element')
export class SliderElement extends LitElement {
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
    <input type="range" id="slider" name="slider"
    min="0" max="24">
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slider-element': SliderElement;
  }
}
