import tippy from "tippy.js";

declare var global: any;

// Code above provides compatibility 
// for different versions of the tippy.js.

var Tippy = tippy as any;

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

export default Tippy;