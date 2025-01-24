// Type: Strict
// Syntax: const varName: type/value = value
const pi: 3.1415 = 3.1415;
pi = 3.14; // Not Allowed => accepts 3.1415

// union: string, string , string => 3 values
let seatAllotment: "aisle" | "middle" | "window";

// assignment of valus can be only the defiined values assignable
seatAllotment = "aisle"; // declared values can onlybe assigned
seatAllotment = "crew"; //  Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.ts(2322)

export {};
