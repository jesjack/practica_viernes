"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var practica_viernes = __importStar(require("./index"));
practica_viernes.setMathFunction('f(x) = { x² - 4 si x < 3 ; 2x - 1 si 3 <= x }');
for (var x = -5; x <= 5; x++) {
    if (x < 3)
        practica_viernes.addRow([x, Math.pow(x, 2) - 4]);
    if (3 >= x)
        practica_viernes.addRow([x, 2 * x - 1]);
}
practica_viernes.render();
var años = 50;
//# sourceMappingURL=index.test.js.map