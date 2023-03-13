// --- ************ --- //
// --- [2023-03-13] --- //
// --- ************ --- //

// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeSecondItem(arr) {
  // MY SOLUTION (NOT GOOD!!!)
  // let arr2 = [];
  // arr.map((e, i) => i % 2 == 1 || arr2.push(e));
  // return arr2;

  // SOLUTION FROM THE CODEWARS!!!
  return arr.filter((e, i) => {
    return i % 2 == 0;
  });
}

let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];

console.log(removeSecondItem(arr));
