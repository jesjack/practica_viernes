"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_pdf_1 = __importDefault(require("html-pdf"));
var ejs_1 = __importDefault(require("ejs"));
var fs_1 = require("fs");
var child_process_1 = require("child_process");
html_pdf_1.default.create(ejs_1.default.render((0, fs_1.readFileSync)('src/table.ejs').toString(), {}), {
    format: 'A4'
}).toFile('output.pdf', function (err) {
    if (err)
        console.error(err);
    (0, child_process_1.spawnSync)('output.pdf');
});
//# sourceMappingURL=index.test.js.map