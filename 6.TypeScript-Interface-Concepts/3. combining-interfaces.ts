// Type: interface
interface CarBattery {
  model: string;
  power: number;
  stockDate: Date;
}

interface Engine {
  model: string;
  power: number;
  stockDate: Date;
}

// union type combining two interfaces
type CombineInterfaces = Engine | CarBattery;

const engine: CombineInterfaces = {
  model: "ENGINE-100",
  power: 45.543,
  stockDate: new Date(),
};

const battery: CombineInterfaces = {
  model: "Battery-100",
  power: 34.543,
  stockDate: new Date(),
};

console.log(engine);
console.log(battery);
