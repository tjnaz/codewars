// --- ************ --- //
// --- [2023-03-29] --- //
// --- ************ --- //

// Find the smallest integer in the array
// Description:

// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findTheSmallestInt(arr) {
  // return arr.sort((a, b) => a - b)[0];
  return Math.min(...arr);
}

console.log(findTheSmallestInt([1, 0, 5]));
