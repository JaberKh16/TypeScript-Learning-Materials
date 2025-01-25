// Function
// Params: input: string | number, config: {prop: boolean}
// Return Type: string | number
function processData(
  input: string | number, // string or number
  config: { reverse: boolean } = { reverse: false } // takes {prop: boolean} = { prop: value}
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    // if the config.reverse is true then perform reverse otherwise uppercase
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("") // SOMETHING IS FISSY => ['SOMETHING', 'IS', 'FISSY'] => ['FISSY', 'IS', 'SOMETHING'] => 'FISSY IS SOMETHING'
      : input.toUpperCase(); // SOMETHING IS FISSY
  }
}

console.log(processData(10));
console.log(processData("Something"));
console.log(processData("Something is fissy", { reverse: true }));
