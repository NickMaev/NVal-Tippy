import {NVal, ValidationResult, Field } from "nval";
import * as tippy from "tippy.js";

var Tippy = tippy;

declare var global: any;

//declare var tippy: any;
if (Tippy == null) {
    if (global != null) {
        Tippy = global.tippy;
    }
}

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
            var tip = Tippy.one(element,
                {
                    arrow: true,
                    animation: 'fade',
                    hideOnClick: false,
                    interactive: true,
                    sticky: true
                });
            self.tips.push(tip);
            tip.show();
        }, 200)
    }

    protected hideErrors(fields: Field[]) {
        this.tips.forEach(x => x.destroy());
        this.tips = [];
    }
}