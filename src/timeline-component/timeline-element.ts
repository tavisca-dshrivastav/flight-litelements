import { LitElement, html, customElement, css, property } from 'lit-element';
enum TimelineElementType
{
    Horizontal = "horizontal",
    Vertical = "vertical"
}

@customElement('timeline-element')
export class TimelineElement extends LitElement {
  static styles = css`
        .horizontal{
            display: flex;
            flex-direction: row;
        }
        .vertical{
            display: flex;
            flex-direction: column;
        }
    `;
    constructor(){
        super();
        this.Type = TimelineElementType.Horizontal.toString();
    }
    @property({type: String})
    public Type = TimelineElementType.Horizontal.toString();
    @property({type: Object})

  render() {
        
    return html`
    <div class="${this.Type}">
        <!-- <div class="text-block-${this.Type}"> -->
        <!-- ${this.Type} -->
        </div>    
        <div class="line-${this.Type}">
        <stoppage-widget Type="${this.Type}"></stoppage-widget>
        </div>    
        <!-- <div class="text-block-${this.Type}"> -->
        <!-- ${this.Type} -->
        </div>   
    </div>    
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'timeline-element': TimelineElement;
  }
}
