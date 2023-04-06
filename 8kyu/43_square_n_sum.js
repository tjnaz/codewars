// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// Square(n) Sum
// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSumArray(arr) {
  return arr.map((e) => e ** 2).reduce((acc, n) => (acc += n), 0);
}

let arr = [1, 2, 5];

console.log(squareSumArray(arr));
