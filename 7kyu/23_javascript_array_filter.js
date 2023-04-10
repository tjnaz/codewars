// -- ************ --- //
// --- [2023-04-10] --- //
// --- ************ --- //

// JavaScript Array Filter
// Description:

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(arr) {
  return arr.filter((e) => e % 2 == 0);
}

console.log(getEvenNumbers([2, 5, 4, 6, 7]));
