// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// String repeat
// Description:

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Description:

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Description:

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStringNTimes(n, str) {
  let repeatedStr = "";
  for (let i = 0; i < n; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log(repeatStringNTimes(2, "oof"));
