const pi: 3.1415 = 3.1415;
pi = 3.14; // Not Allowed only accepts 3.1415

let seatAllotment: "aisle" | "middle" | "window";

// assignment of valus can be only the defiined values
seatAllotment = "aisle";

seatAllotment = "crew"; //  Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.ts(2322)

export {};
