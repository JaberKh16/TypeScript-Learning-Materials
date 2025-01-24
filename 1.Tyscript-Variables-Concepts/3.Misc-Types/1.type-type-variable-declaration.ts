// variable type: type
// properties: string, string, number
type User = {
  name: string;
  designation: string;
  salary: number;
};

// createn a type instance
// return-types : { string, string, number }
const userData: User = {
  name: "Test",
  designation: "Software Engineer",
  salary: 4000.0,
};

console.log(userData);
console.log(typeof userData);
