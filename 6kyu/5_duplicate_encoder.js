// --- ************ --- //
// --- [2023-03-16] --- //
// --- ************ --- //

// Duplicate Encoder
// Description:

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncoder(str2) {
  let duplicates = [];
  let encoded = [];
  let str = str2.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        duplicates.push(str[j]);
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (duplicates.includes(str[i])) {
      encoded.push(")");
    } else {
      encoded.push("(");
    }
  }
  return encoded.join("");
}

console.log(duplicateEncoder("(( @"));
