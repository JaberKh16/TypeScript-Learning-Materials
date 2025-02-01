class Coder2 {
  secondLanguages!: string; // non initialize member with type assertion
  constructor(
    public name: string,
    public readonly age: number,
    protected email: string,
    private language: string
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.language = language;
  }

  public getLanguage() {
    return `Language: ${this.language}`;
  }
}

const person = new Coder2("Dave", 23, "test@gmail.com", "English");
console.log(person);
console.log(person.getLanguage());
