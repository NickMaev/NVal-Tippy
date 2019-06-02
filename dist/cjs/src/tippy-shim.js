"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tippy_js_1 = require("tippy.js");
var Tippy = tippy_js_1.default;
if (!Tippy) {
    if (global) {
        Tippy = global.tippy;
    }
}
if (!Tippy) {
    Tippy = require("tippy.js");
}
if (Tippy && typeof Tippy !== "function" && Tippy.default) {
    Tippy = Tippy.default;
}
exports.default = Tippy;
//# sourceMappingURL=tippy-shim.js.map