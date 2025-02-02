// simple interface
// interface Student {
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// Dynamic Interface
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Jack",
  GPA: 3.5,
  classes: [101, 79],
};

console.log(student);

// missing property
console.log(student.test);

// iterate through object
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
