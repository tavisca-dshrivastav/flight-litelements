import { LitElement } from 'lit-element';
export declare class ItineraryTimeLineComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    departureCode: string;
    departureTime: string;
    arrivalCode: string;
    arrivalTime: string;
    duration: string;
    stopInformation: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'itinerary-timeline-component': ItineraryTimeLineComponent;
    }
}
//# sourceMappingURL=itinerary-timeline-component.d.ts.map