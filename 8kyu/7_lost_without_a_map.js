// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// Beginner - Lost Without a Map

// Description:

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function double(arr) {
  return arr.map((e) => e * 2);
}

let arr = [1, 5, 3, 7];

console.log(arr);
let doubledArr = double(arr);
console.log(doubledArr);
console.log(arr);
