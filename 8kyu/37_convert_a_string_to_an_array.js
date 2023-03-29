// --- ************ --- //
// --- [2023-03-29] --- //
// --- ************ --- //

// Convert a string to an array
// Description:

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(str) {
  return str.split(" ");
}

let str = "Hello my name is Marshall Mathers";

console.log(stringToArray(str));
