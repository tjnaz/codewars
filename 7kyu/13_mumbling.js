// --- ************ --- //
// --- [2023-03-16] --- //
// --- ************ --- //

// Mumbling
// Description:

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// MY SOLUTION
function accum(str) {
  let mumble = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    mumble.push(str[i].toUpperCase());
    count++;
    for (let j = 1; j < count; j++) {
      mumble.push(str[i].toLowerCase());
    }
    if (i < str.length - 1) {
      mumble.push("-");
    }
  }

  return mumble.join("");
}

// A VERY ELEGANT SOLUTION USING MAP()
// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

console.log(accum("ZpglnRxqenU"));
