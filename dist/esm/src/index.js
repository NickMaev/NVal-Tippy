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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { NVal } from "nval";
import tippy from "./tippy-shim";
var NValTippy = (function (_super) {
    __extends(NValTippy, _super);
    function NValTippy(htmlFormElement) {
        var _this = _super.call(this, htmlFormElement) || this;
        _this.tips = [];
        _this.tippyOptions =
            {
                arrow: true,
                animation: 'fade',
                hideOnClick: false,
                showOnInit: true,
                interactive: true,
                sticky: true
            };
        return _this;
    }
    NValTippy.prototype.showError = function (validationResult) {
        var self = this;
        setTimeout(function () {
            var element = validationResult.elements[0];
            var opts = __assign({}, self.tippyOptions, { content: validationResult.message });
            var tip = tippy(element, opts);
            if (tip) {
                self.tips.push(tip);
                if (tip.show) {
                    tip.show();
                }
                else {
                    tip.tooltips[0].show();
                }
            }
        }, 200);
    };
    NValTippy.prototype.hideErrors = function (fields) {
        this.tips.forEach(function (x) {
            if (x) {
                if (x.destroy) {
                    x.destroy();
                }
                else {
                    x.destroyAll();
                }
            }
        });
        this.tips = [];
    };
    return NValTippy;
}(NVal));
export { NValTippy };
//# sourceMappingURL=index.js.map