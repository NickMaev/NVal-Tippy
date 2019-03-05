var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { NVal } from "nval";
import tippy from "tippy.js";
var Tippy = tippy;
if (Tippy == null) {
    if (global != null) {
        Tippy = global.tippy;
    }
}
var NValTippy = (function (_super) {
    __extends(NValTippy, _super);
    function NValTippy(htmlFormElement) {
        var _this = _super.call(this, htmlFormElement) || this;
        _this.tips = [];
        return _this;
    }
    NValTippy.prototype.showError = function (validationResult) {
        var self = this;
        setTimeout(function () {
            var element = validationResult.elements[0];
            element.setAttribute("title", validationResult.message);
            var tip = Tippy(element, {
                arrow: true,
                animation: 'fade',
                hideOnClick: false,
                interactive: true,
                sticky: true
            });
            self.tips.push(tip);
            tip.tooltips[0].show();
        }, 200);
    };
    NValTippy.prototype.hideErrors = function (fields) {
        this.tips.forEach(function (x) { return x.destroyAll(); });
        this.tips = [];
    };
    return NValTippy;
}(NVal));
export { NValTippy };
//# sourceMappingURL=nvaltippy.js.map