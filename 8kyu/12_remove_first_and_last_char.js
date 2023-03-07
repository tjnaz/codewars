// --- ************ --- //
// --- [2023-03-07] --- //
// --- ************ --- //

// Remove First and Last Character

// Description:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
let str = "Hello";

function removeFirstAndLastChar(str) {
  // let str2 = str.split("");
  // let str3 = str2.splice(1, str2.length - 2);

  return str.slice(1, -1);

  // return str
  //   .split("")
  //   .splice(1, str.length - 2)
  //   .join("");
}

console.log(removeFirstAndLastChar(str));
// removeFirstAndLastChar(str);
console.log(str);
