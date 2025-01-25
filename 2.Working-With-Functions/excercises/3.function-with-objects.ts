// Params: user: { p1: number; p2: string; p3:boolean}
// Return Type: user: { p1: number; p2: string; p3:boolean}
function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  return { id: user.id, name: user.name, isActive: user.isActive };
}

// Comparing WIth Type
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// function define
const createUser2 = (user: User): User => {
  return { id: user.id, name: user.name, isActive: user.isActive };
};
