/*
    Defining Array
    ==============
    Syntax: 
        i)   let varName: type [] = [];                         // Native type Array
        ii)  let varName: Array<type> = [];                     // Generic type Array
        iii) let varName: type[][] = [ [], [], [], [], [] ];    // Multidimensional Array     
        
*/

let heroes: string[] = ["Thor", "Captain America", "Hulk"];
heroes.push("Iron Man"); // inserting item into the string array
console.log(heroes);

let values: number[] = [1, 234, , 32, 53, 12];
values.push(50);
console.log(values);

export {};
