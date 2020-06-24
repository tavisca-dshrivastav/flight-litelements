import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    paxCount: number;
    render(): import("lit-element").TemplateResult;
    private _onClickAdd;
    private _onClickRemove;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-counterelement': MyElement;
    }
}
//# sourceMappingURL=counter-component.d.ts.map