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

// defining a string type array
let heroes: string[] = ["Thor", "Captain America", "Hulk"];
heroes.push("Iron Man"); // inserting item into the string array
console.log(heroes);

// defining a number type array
const dummyNumbers: Array<number> = [1, 234, 34, 32, 53, 12];
dummyNumbers.push(50);
console.log(dummyNumbers);

// definw objects
// return type: string[], number[] # strict pass
const avengerHeroes: { avengersFileHeroes: string[]; releaseDates: number[] } =
  {
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

// type {} example:
// Custom/Generic Type Array => type []
// Define a type {} : Name
type User = {
  name: string;
  designation: string;
  salary: number;
};

// Initialize an empty array of => type: User
const userArray: User[] = [];

// Example: Adding users to the array
userArray.push({ name: "Alice", designation: "Developer", salary: 80000 });
userArray.push({ name: "Bob", designation: "Manager", salary: 95000 });
// userArray.pop(); // pop the last item

console.log(userArray);

export {};
