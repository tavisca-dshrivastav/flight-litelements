import { LitElement } from 'lit-element';
export declare class CounterElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    count: number;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'counter-element': CounterElement;
    }
}
//# sourceMappingURL=counter-element.d.ts.map