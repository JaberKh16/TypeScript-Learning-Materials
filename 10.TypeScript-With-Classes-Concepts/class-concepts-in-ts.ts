class Coder {
  name: string;
  age: number;
  email: string;
  language: string;

  constructor(name: string, age: number, email: string, language: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.language = language;
  }
  public getLanguage() {
    return `Language: ${this.language}`;
  }
}

export { Coder };
