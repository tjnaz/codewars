// --- ************ --- //
// --- [2023-03-27] --- //
// --- ************ --- //

// Counting Duplicates
// Description:
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function countTheDuplicates(str) {
  let formatStr = str.toLowerCase().split("");
  let unique = [];
  let count = 0;

  for (let i = 0; i < formatStr.length - 1; i++) {
    for (let j = i + 1; j < formatStr.length; j++) {
      if (!unique.includes(formatStr[i]) && formatStr[i] == formatStr[j]) {
        unique.push(formatStr[j]);
        count++;
      }
    }
  }
  return count;
}

console.log(countTheDuplicates("aabBcde"));
