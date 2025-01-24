// Parameter: object
// Return Type: object
var setUserData = function (obj) {
    var data = {
        name: obj.name,
        email: obj.email,
    };
    return obj;
};
var data = setUserData({ name: "Test", email: "test@gmail.com" });
console.log(data);
