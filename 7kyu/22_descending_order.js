// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// Descending Order
// Description:

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendOrder(num) {
  // let arr = num.toString().split("");
  // return arr.sort((a, b) => b - a).join("");
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendOrder(123456789));
