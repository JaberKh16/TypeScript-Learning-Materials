let book = {
  title: "Shades Of Sun",
  cost: 20,
};
let pen = {
  title: "Pencil",
  cost: 10,
};

let noteBook = {
  title: "Notebook",
};

// defining an array containing those objects
let items: {}[] = [book, pen, noteBook]; // injecting different shape arrays
console.log(items);

// param: cost is optional thus can be store
// otherwise => Property 'cost' is missing in type '{ title: string; }' but required in type '{ title: string; cost: number; }'.ts(2741)
// let items2: { title: string; cost: number }[] = [book, pen, noteBook];
let items2: { title: string; readonly cost?: number }[] = [book, pen, noteBook];
