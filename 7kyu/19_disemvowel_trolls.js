// -- ************ --- //
// --- [2023-04-01] --- //
// --- ************ --- //

// Disemvowel Trolls
// Description:

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .filter((e) => !vowels.includes(e))
    .join("");
}

const str = "This website is for losers LOL!";

console.log(removeVowels(str));
