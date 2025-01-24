// defining a type
type User = {
  name: string;
  email: string;
  salary: number;
  isActive: boolean;
};

// function uses type as parameter
// function funcName(p: User): User {}
function createUser(user: User): User {
  return user;
}

createUser({
  name: "John",
  email: "jk@gmail.com",
  salary: 20000.0,
  isActive: false,
});

// type function => type defined as function
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = function (c, d) {
  return c * d;
};

export {};
