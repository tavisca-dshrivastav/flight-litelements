import { LitElement } from 'lit-element';
export declare class ItinerariesTimeLineComponent extends LitElement {
    itineraries: {
        departure: {
            code: string;
            time: string;
        };
        arrival: {
            code: string;
            time: string;
        };
        duration: string;
        stopInformation: string;
    }[];
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'itineraries-timeline-component': ItinerariesTimeLineComponent;
    }
}
//# sourceMappingURL=itineraries-timeline-component.d.ts.map