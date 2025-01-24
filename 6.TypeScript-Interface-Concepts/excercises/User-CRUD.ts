interface OperationCRUDOnUserData {
  getSchema: () => object; // function type returning an object
  setupDS: () => string; // function type returining a string
  createUser: () => void; // function type returning a void(nothing)
}

// fetchDataStructure
// storeUserInfo: ()

type UserDataSchema = {
  name: string;
  email: string;
  password: string;
  gender: string[]; // Array of strings
};

const userAvailableOperation: OperationCRUDOnUserData = {
  getSchema: (): UserDataSchema => {
    // Return an object matching the UserDataSchema type
    return {
      name: "Mr. Test",
      email: "test@gmail.com",
      password: "testuser1214",
      gender: ["Male", "Female"],
    };
  },
  setupDS: () => {},
};

export {};
