// definig an union type => can accept number, string and boolean types value
let score: number | string | boolean = 33;

score = 445;

score = "423";

// defining an array => can accept number, string and boolean types value
const data: (number | string | boolean)[] = [1, "this", 24, true];
const data3: any[] = [1, "this", 24, true];

export {};
