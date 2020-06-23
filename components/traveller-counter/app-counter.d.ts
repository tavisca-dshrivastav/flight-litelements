import { LitElement } from 'lit-element';
export declare class Counter extends LitElement {
    value: number;
    min: number;
    max: number;
    title: string;
    render(): import("lit-element").TemplateResult;
    OnIncrement(): void;
    OnDecrement(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-counter': Counter;
    }
}
//# sourceMappingURL=app-counter.d.ts.map