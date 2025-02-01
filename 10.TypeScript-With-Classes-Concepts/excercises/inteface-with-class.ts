interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guiterist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}}`;
  }
}

const guitarist = new Guiterist("Robert", "guiter");
console.log(guitarist);
console.log(guitarist.play("strums"));
