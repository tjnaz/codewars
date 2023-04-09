// -- ************ --- //
// --- [2023-04-09] --- //
// --- ************ --- //

// Array plus array
// Description:

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function sumOfTwoArrays(arr1, arr2) {
  return (
    arr1.reduce((acc, num) => (acc += num), 0) +
    arr2.reduce((acc, num) => (acc += num), 0)
  );
}

const arr1 = [1, 5, 3];
const arr2 = [1, 2, 3];

console.log(sumOfTwoArrays(arr1, arr2));
