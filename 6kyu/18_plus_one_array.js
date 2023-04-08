// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// +1 Array
// Description:

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

function plusOne(arr) {
  let oneUp = [];
  let tens = false;
  if (arr.length == 0) {
    return null;
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < 0 || arr[i] > 9) {
        return null;
      } else {
      }
      if (arr[arr.length - 1] != 9) {
        i == arr.length - 1 ? oneUp.unshift(arr[i] + 1) : oneUp.unshift(arr[i]);
      } else {
        if (i == arr.length - 1) {
          oneUp.unshift(0);
          tens = true;
        } else if (tens && arr[i] == 9) {
          oneUp.unshift(0);
        } else if (tens) {
          oneUp.unshift(arr[i] + 1);
          tens = false;
        } else {
          oneUp.unshift(arr[i]);
        }
      }
    }
  }
  if (tens) {
    oneUp.unshift(1);
  }
  return oneUp;
}

// let arr = [4, 3, 2, 5]; // would return [4, 3, 2, 6]
// let arr = [1, 2, 3, 9]; // would return [1, 2, 4, 0]
// let arr = [9, 9, 9, 9]; // would return [1, 0, 0, 0, 0]
let arr = [-9, 0, 1, 3, 7]; // would return [0, 1, 3, 8]

console.log(plusOne(arr));
