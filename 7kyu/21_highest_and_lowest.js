// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// Highest and Lowest
// Description:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(str) {
  // // MY SOLUTION
  // let arr = [];
  // let splitted = str.split(" ");
  // splitted.forEach((e) => arr.push(+e));
  // arr.sort((a, b) => a - b);
  // return [arr[arr.length - 1], arr[0]].join(" ").toString();
  // SOLUTION FROM CODEWARS
  str = str.split(" ");
  return `${Math.max(...str)} ${Math.min(...str)}`;
}

console.log(highAndLow("1 2 10 3 4 5"));
