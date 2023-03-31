// -- ************ --- //
// --- [2023-04-01] --- //
// --- ************ --- //

// Vowel Count
// Description:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function countVowel(str) {
  // MY SOLUTION
  // return str
  //   .toLowerCase()
  //   .split("")
  //   .filter((e) => e == "a" || e == "e" || e == "i" || e == "o" || e == "u")
  //   .length;
  //
  // IMPROVED
  const vowel = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter((e) => vowel.includes(e)).length;
}

let str = "hEello";
console.log(countVowel(str));
