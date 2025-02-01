var transactionSetup = {
    Pizza: -19,
    Books: 10,
    Job: 21,
    fetchItems: function (items) {
        // empty string []
        var itemsList = [];
        console.log(items); // contains the object
        // push item
        Object.entries(items).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            itemsList.push("".concat(key, ": ").concat(value));
        });
        return itemsList;
    },
    printItems: function (itemsList) {
        for (var _i = 0, itemsList_1 = itemsList; _i < itemsList_1.length; _i++) {
            var item = itemsList_1[_i];
            console.log("Array: ".concat(item));
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
var accessItems = transactionSetup.fetchItems({
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
