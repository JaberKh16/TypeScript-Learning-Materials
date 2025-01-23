"use strict";
/*
    Defining Array
    ==============
    Syntax:

    a. declaring ways:
        i)   let varName: type [] = [];                         // Native type Array
        ii)  let varName: Array<type> = [];                     // Generic type Array
    b. dimension type:
        i) let varName: type[] = [];                            // Single Dimensional Array
        ii) let varName: type[][] = [ [], [], [], [], [] ];    // Multidimensional Array
        
*/
Object.defineProperty(exports, "__esModule", { value: true });
// defining a string type array
var heroes = ["Thor", "Captain America", "Hulk"];
heroes.push("Iron Man"); // inserting item into the string array
console.log(heroes);
// defining a number type array
var dummyNumbers = [1, 234, 34, 32, 53, 12];
dummyNumbers.push(50);
console.log(dummyNumbers);
// definw objects
// return type: string[], number[] # strict pass
var avengerHeroes = {
    avengersFileHeroes: [
        "Iron Man",
        "Captain America",
        "Thor",
        "Hawkeye",
        "Black Widow",
        "Hulk",
    ],
    releaseDates: [2010, 2014, 2015, 2016, 2023, 2022, 2008],
};
console.log(avengerHeroes);
// Initialize an empty array of => type: User
var userArray = [];
// Example: Adding users to the array
userArray.push({ name: "Alice", designation: "Developer", salary: 80000 });
userArray.push({ name: "Bob", designation: "Manager", salary: 95000 });
// userArray.pop(); // pop the last item
console.log(userArray);
