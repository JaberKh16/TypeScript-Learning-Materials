// Type: Union
// Keyword: '|'  to seperates other types
// Syntax: let varName: type | type | type
// Accept: any type
// definig an union type => can accept number, string and boolean types value
let score: number | string | boolean = 33;

score = 445;
score = "423";

// defining an array => accept:  number, string, boolean
const data: (number | string | boolean)[] = [1, "this", 24, true];
const data3: any[] = [1, "this", 24, true];

console.log(`value: ${data}, type: ${typeof data}`);
console.log(`value: ${data3}, type: ${typeof data3}`);

export {};
