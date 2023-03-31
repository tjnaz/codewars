// -- ************ --- //
// --- [2023-04-01] --- //
// --- ************ --- //

// Reversed Strings
// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));
