import { LitElement } from 'lit-element';
export declare class Counter extends LitElement {
    count: number;
    private _onIncrement;
    private _onDecrement;
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-counter': Counter;
    }
}
//# sourceMappingURL=my-counter.d.ts.map