interface TransactionSetupConfigure {
  Pizza: number;
  Books: number;
  Job: number;
  fetchItemsInfo: (items: { [key: string]: number }) => string[];
  printItemsInfo: (itemsList: string[]) => void;
}

const transactionSetupInfo: TransactionSetupConfigure = {
  Pizza: -19,
  Books: 10,
  Job: 21,

  // Properly handling an object as input
  fetchItemsInfo: function (items: { [key: string]: number }): string[] {
    const itemsList: string[] = [];

    // Iterate over the object and push formatted key-value pairs
    for (const [key, value] of Object.entries(items)) {
      itemsList.push(`${key}: ${value}`);
    }

    return itemsList;
  },

  // Properly iterating over array values
  printItemsInfo: (itemsList: string[]): void => {
    for (const item of itemsList) {
      console.log(item);
    }
  },
};

// Creating a valid object to pass
const accessItemList = transactionSetupInfo.fetchItemsInfo({
  Books: transactionSetupInfo.Books,
  Pizza: transactionSetupInfo.Pizza,
  Job: transactionSetupInfo.Job,
});

console.log(accessItemList);
// Expected Output: [ "Books: 10", "Pizza: -19", "Job: 21" ]

transactionSetupInfo.printItemsInfo(accessItemList);
// Expected Output:
// Books: 10
// Pizza: -19
// Job: 21
