// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// Area or Perimeter
// Description:

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

function areaOrPerimeter(width, length) {
  return width == length ? width * length : 2 * width + 2 * length;
}

console.log(areaOrPerimeter(6, 6));
