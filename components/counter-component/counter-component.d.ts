import { LitElement } from 'lit-element';
export declare class CounterComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    count: number;
    render(): import("lit-element").TemplateResult;
    private _onIncrementClick;
    private _onDecrementClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'counter-component': CounterComponent;
    }
}
//# sourceMappingURL=counter-component.d.ts.map