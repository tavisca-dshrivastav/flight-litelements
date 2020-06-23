import { LitElement } from 'lit-element';
import './app-counter';
export declare class TravellerCounter extends LitElement {
    title: string;
    subTitle: string;
    totalValue: number;
    render(): import("lit-element").TemplateResult;
    handleEvent(e: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-traveller-counter': TravellerCounter;
    }
}
//# sourceMappingURL=traveller-counter.d.ts.map