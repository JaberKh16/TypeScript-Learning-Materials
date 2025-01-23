// order is matter => string, number, boolean
let tupleUser: [string, number, boolean];
tupleUser = ["test", 1421, true];

let rgbColors: [number, number, number] = [255, 150, 255];

type User = [number, string];
const newUser: User = [111, "test@gmail.com"];
newUser[1] = "example@gmail.com";

export {};
