// Parameter: object
// Return Type: object
type UserInfo = {
  name: string;
  email: string;
};

const setUserInfo = (obj: UserInfo): UserInfo => {
  // Return the object passed in
  return obj;
};

// Create an object with the correct type
const dataObj: UserInfo = { name: "Test", email: "test@gmail.com" };

// Call the function with the object
const userSetdata = setUserInfo(dataObj);

// Log the returned object
console.log(userSetdata);
