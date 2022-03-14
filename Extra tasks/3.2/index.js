function maxProfit(prices) {
  try {
    if (!arguments.length) throw new Error("Insert arr");
    if (!Array.isArray(prices)) throw new Error("You insert not Array, please insert array");
    if (prices.length <= 1) throw new Error("Array is empty, please put information");

    let maxProfit = 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      profit = prices[i] - prices[i - 1];
      if (profit > 0) {
        maxProfit += profit;
      }
    }
    return maxProfit;
  } catch (error) {
    return error.message;
  }
}
console.log(maxProfit());
console.log(maxProfit("ssdsd"));
console.log(maxProfit([7]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
