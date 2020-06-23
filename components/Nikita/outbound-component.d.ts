import { LitElement } from 'lit-element';
export declare class Outbound extends LitElement {
    arrival: string;
    departure: string;
    arrival_time: string;
    departure_time: string;
    constructor();
    static styles: import("lit-element").CSSResult;
    title: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'outbound-component': Outbound;
    }
}
//# sourceMappingURL=outbound-component.d.ts.map