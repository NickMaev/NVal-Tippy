import { NVal, ValidationResult, Field } from "nval";
export declare class NValTippy extends NVal {
    private tips;
    tippyOptions: any;
    constructor(htmlFormElement: HTMLFormElement);
    protected showError(validationResult: ValidationResult): void;
    protected hideErrors(fields: Field[]): void;
}
