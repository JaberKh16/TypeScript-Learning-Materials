"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coder = void 0;
var Coder = /** @class */ (function () {
    function Coder(name, age, email, language) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.language = language;
    }
    Coder.prototype.getLanguage = function () {
        return "Language: ".concat(this.language);
    };
    return Coder;
}());
exports.Coder = Coder;
