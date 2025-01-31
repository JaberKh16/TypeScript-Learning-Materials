/*
    TypeScript Type Assertion
    =========================
    When you have some idea about variable types typescript could not infer about thats where this concept
    comes.

    Syntax: 
        a. let varName: type = value;
        b. let varName = <type> value

    
*/

//
type one = string;
type two = string | number;
type three = "This";

// another way of declaring
let e = <three>"New Value";
let f = <string | number>"This";

// convert to more or less specific type
let a: one = "Some";
let b = a as two; //less specific type => can be string | number
let c = a as three; // more specific type => a: string and c got a value which also c:string

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let value: string = addOrConcat(2, 2, "concat") as string; // as we know we are returning a string thus assert as string

// be careful - function returning a string but here we saying we are returning a string
let somevalue: number = addOrConcat(2, 2, "concat") as number; // as we know we are returning a string thus assert as number
