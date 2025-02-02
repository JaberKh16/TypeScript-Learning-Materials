// Interface Definition
interface DailyTransaction {
  items: string[];
  prices: number[];
  combineItems(items: string[], prices: number[]): object;
}

// Object Implementation
const dailyTransactionItems: DailyTransaction = {
  items: ["Veges", "Electrical Gadgets", "Clothes"],
  prices: [100, 200, 300],

  combineItems(items: string[], prices: number[]): object {
    const combinedInfo: { [key: string]: number } = {}; // Define object with key-value pairs

    for (let i = 0; i < items.length; i++) {
      combinedInfo[items[i]] = prices[i]; // Assign price to each item
    }

    return combinedInfo; // Return the mapped object
  },
};

// ✅ Testing the function
console.log(
  dailyTransactionItems.combineItems(
    dailyTransactionItems.items,
    dailyTransactionItems.prices
  )
);
