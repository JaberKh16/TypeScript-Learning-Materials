/*
    Defining Array
    ==============
    Syntax: 
        i)   let varName: type [] = [];                         // Native type Array
        ii)  let varName: Array<type> = [];                     // Generic type Array
        iii) let varName: type[][] = [ [], [], [], [], [] ];    // Multidimensional Array     
        
*/

// defining a string type array
let heroes: string[] = ["Thor", "Captain America", "Hulk"];
heroes.push("Iron Man"); // inserting item into the string array
console.log(heroes);

// defining a number type array
let values: number[] = [1, 234, , 32, 53, 12];
values.push(50);
console.log(values);

// Custom Type Array => type Array
// Define a User type
type User = {
  name: string;
  designation: string;
  salary: number;
};

// Initialize an empty array of User type
const userArray: User[] = [];

// Example: Adding users to the array
userArray.push({ name: "Alice", designation: "Developer", salary: 80000 });
userArray.push({ name: "Bob", designation: "Manager", salary: 95000 });

console.log(userArray);

export {};
