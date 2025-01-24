// traditional function: function(p1: type , p2: type): void {}
function performAction(name: string, action: number): void {
  if (action === 1) {
    name.toUpperCase();
  }
  if (action === 2) {
    name.toLowerCase();
  }
  console.log(name);
}

const performActionOnString = performAction("TypeScript", 2);

// anynomous function
let loggedUser = (
  name: string,
  password: string,
  isLogged: boolean
): boolean => {
  if (name != undefined && name != "") {
    name = name.toLowerCase();
  }
  if (password != undefined && password != "") {
    if (password === password) {
      isLogged = true;
    }
  }
  return isLogged;
};

loggedUser("JK", "abb22", false);

// arrow function
const fetchData = (name: string, password: string) => {
  const userData = {
    name: name,
    password: password,
  };

  return userData;
};

fetchData("Mr. X", "abb22");
