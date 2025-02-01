// Case: Need Of Index Signatures => [index: type ] = value:type
interface TransactionSetup {
  Pizza: number;
  Books: number;
  Job: number;
  fetchItems: (items: object) => string[];
  printItems: (items: string[]) => void;
}

const transactionSetup: TransactionSetup = {
  Pizza: -19,
  Books: 10,
  Job: 21,
  fetchItems: function (items: object): string[] {
    // empty string []
    const itemsList: string[] = [];
    console.log(items); // contains the object
    // push item
    Object.entries(items).forEach(([key, value]) => {
      itemsList.push(`${key}: ${value}`);
    });

    return itemsList;
  },
  printItems: (itemsList: string[]): void => {
    for (const item of itemsList) {
      console.log(`Array: ${item}`);
    }
  },
};

console.log(transactionSetup);
// console.log(
//   transactionSetup.fetchItems([
//     transactionSetup.Books,
//     transactionSetup.Pizza,
//     transactionSetup.Job,
//   ])
// );

// set items
const accessItems = transactionSetup.fetchItems({
  Item1: transactionSetup.Books,
  Item2: transactionSetup.Pizza,
  Item3: transactionSetup.Job,
});
// console.log(accessItems); // { Item1: 10,  Item2: -19, Item3: 21 }
console.log(transactionSetup.printItems(accessItems));

// interface Transaction {
//   [index: string]: number; // Key is a string, value is a number
// }

// const TransactionObj: Transaction = {
//   Pizza: -19,
//   Books: 10,
//   Job: 21,
// };

// const accessItems = (transactions: Transaction): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction]; // Corrected property access
//   }
//   return total;
// };

// console.log(accessItems(TransactionObj)); // Corrected function name
