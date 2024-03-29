// -- ************ --- //
// --- [2023-04-02] --- //
// --- ************ --- //

// Stop gninnipS My sdroW!
// Description:

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  const splitStr = [];
  str
    .split(" ")
    .forEach((e) =>
      e.length >= 5
        ? splitStr.push(e.split("").reverse().join(""))
        : splitStr.push(e)
    );
  return splitStr.join(" ");
}

const words = "Hey fellow warriors";

console.log(spinWords(words));
