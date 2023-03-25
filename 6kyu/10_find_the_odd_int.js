// --- ************ --- //
// --- [2023-03-25] --- //
// --- ************ --- //

// Find the odd int
// Description:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// MY SOLUTION
// function findTheOddInt(A) {
//   if (A.length == 1) {
//     return A[0];
//   }

//   for (let i = 0; i < A.length; i++) {
//     let num = [A[i]];
//     for (let j = 0; j < A.length; j++) {
//       if (i != j && A[i] == A[j]) {
//         num.push(A[i]);
//       }
//     }
//     if (num.length % 2 == 1) {
//       return A[i];
//     }
//   }
// }

// SOLUTION FROM CODEWARS
// BITWISE OPERATION USING "XOR"
function findTheOddInt(A) {
  return A.reduce((a, b) => a ^ b);
}

let arr = [20, 5, 1, 1, 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];

console.log(findTheOddInt(arr));
