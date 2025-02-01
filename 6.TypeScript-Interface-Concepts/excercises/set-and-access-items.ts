interface TransactionSetupInfo {
  Pizza: number;
  Books: number;
  Job: number;
  setItemsInfo: (items: object) => string[];
  printItems: (items: string[]) => void;
}

const transactionSetupConfigure: TransactionSetupInfo = {
  Pizza: -19,
  Books: 10,
  Job: 21,
  setItemsInfo: function (items: object): string[] {
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

console.log(transactionSetupConfigure);
// console.log(
//   transactionSetupConfigure.fetchItems([
//     transactionSetupConfigure.Books,
//     transactionSetupConfigure.Pizza,
//     transactionSetupConfigure.Job,
//   ])
// );

// set items
const setAccessItems = transactionSetupConfigure.setItemsInfo({
  Item1: transactionSetupConfigure.Books,
  Item2: transactionSetupConfigure.Pizza,
  Item3: transactionSetupConfigure.Job,
});
// console.log(accessItems); // { Item1: 10,  Item2: -19, Item3: 21 }
console.log(transactionSetupConfigure.printItems(setAccessItems));
