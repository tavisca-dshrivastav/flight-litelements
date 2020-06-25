import { LitElement } from 'lit-element';
export declare class ItineraryTimeLineComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    itinerary: {
        arrival: {
            code: string;
            dateTime: string;
        };
        departure: {
            code: string;
            dateTime: string;
        };
        duration: string;
        stopInformation: string;
    };
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'itinerary-timeline-component': ItineraryTimeLineComponent;
    }
}
//# sourceMappingURL=itinerary-timeline-component.d.ts.map