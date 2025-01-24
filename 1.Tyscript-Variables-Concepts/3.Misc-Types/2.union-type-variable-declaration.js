"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type: Union
// Keyword: '|'  to seperates other types
// Syntax: let varName: type | type | type
// Accept: any type
// definig an union type => can accept number, string and boolean types value
var score = 33;
score = 445;
score = "423";
// defining an array => accept:  number, string, boolean
var data = [1, "this", 24, true];
var data3 = [1, "this", 24, true];
console.log("value: ".concat(data, ", type: ").concat(typeof data));
console.log("value: ".concat(data3, ", type: ").concat(typeof data3));
