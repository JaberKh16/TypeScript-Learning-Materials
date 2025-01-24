// defining a type
type User = {
  readonly _id: string;
  name: string;
  email: string;
  salary: number;
  isActive: boolean;
  creditCardDetails?: number; // optional property
};

let newUser: User = {
  _id: "Usr-01231",
  name: "Test User",
  email: "test@gmail.com",
  salary: 40000.0,
  isActive: false,
};

// access properties and changes its values
newUser.email = "testusr@gmail.com";
newUser.salary = 30000.0;

// try to change readonly property => Cannot assign to '_id' because it is a read-only property.ts(2540)
newUser._id = "Usr-9123421";

export {};
