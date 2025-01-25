type Employee = {
  readonly id: number;
  readonly name: string;
  department: string | number;
  isActive: boolean;
};

type Manager = {
  readonly id: number;
  readonly name: string;
  department: string | number;
  isActive: boolean;
  employees: Employee[];
};

// creating two type: Employee
const jhon: Employee = {
  id: 1,
  name: "John",
  department: "Physics",
  isActive: true,
};

const jack: Employee = {
  id: 1,
  name: "Jack",
  department: "CSE",
  isActive: true,
};

// defining a type: Manager
const manager: Manager = {
  id: 1001,
  name: "Manager",
  department: "HR",
  isActive: true,
  employees: [jhon, jack],
};

console.log(manager);

// Union => Staff: Employee | Manager
type Staff = Employee | Manager;

const staffInformation = (staff: Staff): void => {
  if ("employees" in staff) {
    console.log(
      `Manager => { ID: ${staff.id}, Name: ${staff.name}, Department: ${staff.department}, Active: ${staff.isActive}, Employees: ${staff.employees.length}`
    );
  } else {
    console.log(
      `Manager => { ID: ${staff.id}, Name: ${staff.name}, Department: ${staff.department}, Active: ${staff.isActive}`
    );
  }
};

staffInformation(jhon);
