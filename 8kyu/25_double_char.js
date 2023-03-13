// --- ************ --- //
// --- [2023-03-13] --- //
// --- ************ --- //

// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

function doubleChar(str) {
  // MY SOLUTION
  // let str2 = [];
  // str.split("").forEach((e) => str2.push(e) + str2.push(e));
  // return str2.join("");

  // SOLUTION FROM CODEWARS
  return str
    .split("")
    .map((e) => e + e)
    .join("");
}

console.log(doubleChar("hello"));
