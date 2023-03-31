// -- ************ --- //
// --- [2023-03-30] --- //
// --- ************ --- //

// Sum of positive
// Description:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumPositive(arr) {
  // MY SOLUTION
  // let sum = 0;
  // arr.forEach((e) => {
  //   if (e > 0) {
  //     sum += e;
  //   }
  // });
  // return sum;
  //
  // SOLUTION FROM CODEWARS
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(sumPositive([1, -4, 7, 12]));
