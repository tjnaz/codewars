// -- ************ --- //
// --- [2023-03-29] --- //
// --- ************ --- //

// Sort array by string length
// Description:

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortArrayByStringLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];

console.log(sortArrayByStringLength(arr));