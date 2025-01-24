// traditional function: function(p1: type , p2: type): void {}
function performAction(name, action) {
    if (action === 1) {
        name.toUpperCase();
    }
    if (action === 2) {
        name.toLowerCase();
    }
    console.log(name);
}
var performActionOnString = performAction("TypeScript", 2);
// anynomous function
var loggedUser = function (name, password, isLogged) {
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
var fetchData = function (name, password) {
    var userData = {
        name: name,
        password: password,
    };
    return userData;
};
fetchData("Mr. X", "abb22");
