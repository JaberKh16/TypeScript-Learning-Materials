// simple interface
// interface Student {
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// Dynamic Interface
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}

const studentData: Student = {
  name: "Jack",
  GPA: 3.5,
  classes: [101, 79],
};

console.log(studentData);

// missing property
console.log(studentData.test);

// iterate through object
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// keyof does is that creates a union type literals having
for (const key in studentData) {
  console.log(`${key}: ${studentData[key as keyof Student]}`);
}

Object.keys(studentData).map((key) => {
  console.log(studentData[key as keyof typeof studentData]);
});

const logStudentKey = (studentData: Student, key: keyof Student): void => {
  console.log(`Student: ${key}: ${studentData[key]}`);
};
logStudentKey(studentData, 'GPA')
