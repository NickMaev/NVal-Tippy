"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var nval_1 = require("nval");
var tippy = require("tippy.js");
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
            var tip = Tippy.one(element, {
                arrow: true,
                animation: 'fade',
                hideOnClick: false,
                interactive: true,
                sticky: true
            });
            self.tips.push(tip);
            tip.show();
        }, 200);
    };
    NValTippy.prototype.hideErrors = function (fields) {
        this.tips.forEach(function (x) { return x.destroy(); });
        this.tips = [];
    };
    return NValTippy;
}(nval_1.NVal));
exports.NValTippy = NValTippy;
//# sourceMappingURL=nvaltippy.js.map