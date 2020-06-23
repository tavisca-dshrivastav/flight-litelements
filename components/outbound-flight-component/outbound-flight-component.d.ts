import { LitElement } from 'lit-element';
declare class OutboundFlightComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    departure: string;
    departureTime: string;
    arrival: string;
    arrivalTime: string;
    routeTo: string;
    render(): import("lit-element").TemplateResult;
    _onClick(e: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'outbound-flight-component': OutboundFlightComponent;
    }
}
export {};
//# sourceMappingURL=outbound-flight-component.d.ts.map