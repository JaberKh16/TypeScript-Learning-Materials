/*
    Variable Types In General
    =========================
    - Has two types normally:
        i) Primitive
        ii) Non-primitive

    `TypeScript Types
    ================
    Typescript has different types of variables in it stack. Some of the types are the following:
        a) Primitive Types:
            i) Number ii) String iii) Boolean iv) Null v) Undefined
        
        b) Non-primitive Types:
            i) Array ii) Object  iii) Tuples
        
        c) Other Primitives:
            i) Void ii) Any iii) Never iv) unknown
        

    Defining Variables In Typescript
    ================================
    
        Syntax: let variableName: type = value;

*/

// defining a string
// typescript way declaration
let msg: string = "Message for you typescript";
console.log(msg);

// can't do tyepscript will inform => Type 'number' is not assignable to type 'string'.ts(2322)
msg = 5;

// define a number
let userId: number = 3242.2323;

// define a boolean
let isLogged: boolean = false;

// typescript intellisense to detect type => even define variable in traditional js
const data = {
  title: "TypeScript",
  version: "5.7.3",
  releaseDate: 2023,
};

data.title = 323; // Type 'number' is not assignable to type 'string'.ts(2322)
data.isBetter = "something"; // Property 'isBetter' does not exist on type '{ title: string; version: string; releaseDate: number; }'.ts(2339)

export {};
