// Simple multiplication

// Description:

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function multiplyByEightOrNine(num) {
  return num % 2 === 0 ? num * 8 : num * 9;
}

console.log(multiplyByEightOrNine(5));
