function createUser({
  name,
  isPaid,
  email,
}: {
  name: string;
  isPaid: boolean;
  email?: string;
}): { name: string; isPaid: boolean; email?: string } {
  return { name, isPaid, email }; // Returning an object with the same structure
}

let userInfo = {
  name: "JK",
  isPaid: false,
  email: "jk@gmail.com",
};

const user = createUser(userInfo);
console.log(user);

export {};
