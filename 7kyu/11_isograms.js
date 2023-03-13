// --- ************ --- //
// --- [2023-03-13] --- //
// --- ************ --- //

// Isograms
// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  let str2 = str.toLowerCase();
  if (str.length == 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str2[i] == str2[j] && i != j) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("qxcgztadnyaew"));
