// creating two type: Employee
var jhon = {
    id: 1,
    name: "John",
    department: "Physics",
    isActive: true,
};
var jack = {
    id: 1,
    name: "Jack",
    department: "CSE",
    isActive: true,
};
// defining a type: Manager
var manager = {
    id: 1001,
    name: "Manager",
    department: "HR",
    isActive: true,
    employees: [jhon, jack],
};
console.log(manager);
var staffInformation = function (staff) {
    if ('employees' in staff) {
        console.log("Manager => { ID: ".concat(staff.id, ", Name: ").concat(staff.name, ", Department: ").concat(staff.department, ", Active: ").concat(staff.isActive, ", Employees: ").concat(staff.employees.length));
    }
    else {
        console.log("Manager => { ID: ".concat(staff.id, ", Name: ").concat(staff.name, ", Department: ").concat(staff.department, ", Active: ").concat(staff.isActive));
    }
};
staffInformation(jhon);
