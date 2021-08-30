"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIMEType = exports.parseContentTypeCharset = exports.parseContentType = void 0;
const tslib_1 = require("tslib");
const whatwg_mimetype_1 = (0, tslib_1.__importDefault)(require("whatwg-mimetype"));
exports.MIMEType = whatwg_mimetype_1.default;
function parseContentType(mimeType) {
    return whatwg_mimetype_1.default.parse(mimeType);
}
exports.parseContentType = parseContentType;
function parseContentTypeCharset(mimeType) {
    var _a;
    return (_a = parseContentType(mimeType)) === null || _a === void 0 ? void 0 : _a.parameters.get("charset");
}
exports.parseContentTypeCharset = parseContentTypeCharset;
exports.default = parseContentType;
//# sourceMappingURL=index.js.map