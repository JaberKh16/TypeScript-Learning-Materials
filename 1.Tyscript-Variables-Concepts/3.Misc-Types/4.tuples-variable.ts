// Type : Tuple\
// Keyword: []
// Syntax: let varName: [type, type, type ]
// Condition: order of type is matter => string, number, boolean
let tupleUser: [string, number, boolean]; // misc types
tupleUser = ["test", 1421, true];

let rgbColors: [number, number, number] = [255, 150, 255];

//
type User = [number, string];
const newUser: User = [111, "test@gmail.com"];

// assign value needs to follow orders
newUser[1] = "example@gmail.com";

export {};
