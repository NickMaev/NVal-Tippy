import tippy from "tippy.js";
var Tippy = tippy;
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
//# sourceMappingURL=tippy-shim.js.map