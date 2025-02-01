import { Coder } from "./class-concepts-in-ts";

class Programmer extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    email: string,
    language: string
  ) {
    super(name, age, email, language);
    this.computer = computer;
  }
}

const programmer = new Programmer(
  "Pentagon",
  "Charlie",
  25,
  "charlie@gmail.com",
  "C#"
);
console.log(programmer);
