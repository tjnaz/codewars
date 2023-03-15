// --- ************ --- //
// --- [2023-03-15] --- //
// --- ************ --- //

// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMixedArray(arr) {
  return arr.reduce((acc, e) => (acc += +e), 0);
}

console.log(sumMixedArray(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
