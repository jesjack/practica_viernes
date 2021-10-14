"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRow = exports.setMathFunction = exports.render = void 0;
var html_pdf_1 = __importDefault(require("html-pdf"));
var ejs_1 = __importDefault(require("ejs"));
var fs_1 = require("fs");
var mathFunction;
var rows = [];
function render() {
    html_pdf_1.default.create(ejs_1.default.render((0, fs_1.readFileSync)('src/table.ejs').toString(), {
        mathFunction: mathFunction,
        rows: rows
    }), {
        format: 'A5'
    }).toFile('output.pdf', function (err) {
        if (err)
            console.error(err);
    });
}
exports.render = render;
function setMathFunction(f) {
    mathFunction = f;
}
exports.setMathFunction = setMathFunction;
function addRow(row) {
    rows.push(row);
}
exports.addRow = addRow;
//# sourceMappingURL=index.js.map