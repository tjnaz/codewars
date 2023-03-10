// --- ************ --- //
// --- [2023-03-10] --- //
// --- ************ --- //

// Binary Addition

// Description:

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function binaryAddition(num1, num2) {
  // My solution
  // let num3 = num1 + num2;
  // let binary = [];

  // for (let i = num3; i >= 1; i = Math.floor(i / 2)) {
  //   binary.unshift(Math.round(num3) % 2);
  //   num3 = Math.floor(num3 / 2);
  // }
  // return binary.join("");
  // Solution from codewars
  return (num1 + num2).toString(2);
}

console.log(binaryAddition(5, 5));
