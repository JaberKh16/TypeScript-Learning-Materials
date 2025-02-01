"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var class_concepts_in_ts_1 = require("./class-concepts-in-ts");
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(computer, name, age, email, language) {
        var _this = _super.call(this, name, age, email, language) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    return Programmer;
}(class_concepts_in_ts_1.Coder));
var programmer = new Programmer("Pentagon", "Charlie", 25, "charlie@gmail.com", "C#");
console.log(programmer);
