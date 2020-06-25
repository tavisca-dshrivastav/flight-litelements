import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('slider-component')
export class SliderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
    .display-title {
      display: block;
      padding: 5px;
      max-width: 200px;
    }
  `;

  @property({ type: String })
  title = "";
  
  render() {
    return html`
        <span class="display-title">${this.title}</span>
        <input type="range" id="slider" name="slider" min="0" max="24"/>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slider-component': SliderComponent;
  }
}
