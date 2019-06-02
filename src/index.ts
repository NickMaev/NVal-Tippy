﻿import { NVal, ValidationResult, Field } from "nval";
import tippy, { Instance } from "tippy.js";

var Tippy = tippy;

declare var global: any;

if (Tippy == null) {
    if (global != null) {
        Tippy = global.tippy;
    }
}

export class NValTippy extends NVal {

    private tips: any[] = [];

    public tippyOptions: any;

    constructor(htmlFormElement: HTMLFormElement) {
        super(htmlFormElement);
        this.tippyOptions =
            {
                arrow: true,
                animation: 'fade',
                hideOnClick: false,
                showOnInit: true,
                interactive: true,
                sticky: true
            };
    }

    protected showError(validationResult: ValidationResult): void {

        var self = this;
        setTimeout(() => {
            var element = validationResult.elements[0];
            var opts = { ...self.tippyOptions, content: validationResult.message };
            var tip = Tippy(element, opts) as any;
            self.tips.push(tip);
            if (tip.show) {
                tip.show();
            } else {
                tip.tooltips[0].show();
            }
        }, 200);
    }

    protected hideErrors(fields: Field[]) {
        this.tips.forEach(x => {
            if (x.destroy) {
                x.destroy();
            } else {
                x.destroyAll();
            }
        });
        this.tips = [];
    }
}