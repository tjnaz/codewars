// -- ************ --- //
// --- [2023-04-10] --- //
// --- ************ --- //

// Largest pair sum in array
// Description:

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

function sumLargePair(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}

let num = [99, 2, 2, 23, 19];

console.log(sumLargePair(num));
