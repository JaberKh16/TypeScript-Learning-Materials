// Parameter: object
// Return Type: object
const setUserData = (obj) => {
  const data = {
    name: obj.name,
    email: obj.email,
  };
  return obj;
};

const data = setUserData({ name: "Test", email: "test@gmail.com" });
console.log(data);
