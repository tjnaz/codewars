// --- ************ --- //
// --- [2023-03-15] --- //
// --- ************ --- //

// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function findThirdAngleOfATriangle(first, second) {
  return 180 - (first + second);
}

console.log(findThirdAngleOfATriangle(80, 50));
