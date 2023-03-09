// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(str) {
  return str.split("!").join("");
}

console.log(removeExclamationMarks("E!ttnth!"));
