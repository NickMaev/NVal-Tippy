import {NVal, ValidationResult, Field } from "nval";

declare var tippy: any;

export class NValTippy extends NVal {

    tips: any[] = [];

    constructor(htmlFormElement: HTMLFormElement) {
        super(htmlFormElement);
    }

    protected showError(validationResult: ValidationResult): void {
        var self = this;
        setTimeout(() => {
            var element = validationResult.elements[0];
            element.setAttribute("title", validationResult.message);
            var tip = tippy.one(element,
                {
                    arrow: true,
                    animation: 'fade',
                    hideOnClick: false,
                    interactive: true,
                    sticky: true
                });
            self.tips.push(tip);
            tip.show();
        },200)
    }

    protected hideErrors(fields: Field[]) {
        this.tips.forEach(x => x.destroy());
        this.tips = [];
    }
}