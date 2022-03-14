function getMaxSumSubarray(arr) {
  try {
    if (!arguments.length) throw new Error("Insert arr");
    if (!Array.isArray(arr)) throw new Error("You insert not Array, please insert array");

    let result = 0;
    let currMax = 0;

    for (let i of arr) {
      currMax += i;
      if (currMax < 0) {
        currMax = 0;
      }
      if (result < currMax) {
        result = currMax;
      }
    }
    return result;
  } catch (error) {
    return error.message;
  }
}
console.log(getMaxSumSubarray());
console.log(getMaxSumSubarray("asdasd"));
console.log(getMaxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(getMaxSumSubarray([1, 2, 3]));
console.log(getMaxSumSubarray([41, 74, 21 - 7, 50, 7]));
console.log(getMaxSumSubarray([1, 2, 3, 4, 5, 7, 6, 8, 9, 10]));
console.log(getMaxSumSubarray([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]));
console.log(getMaxSumSubarray([0]));
