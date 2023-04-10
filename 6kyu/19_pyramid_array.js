// -- ************ --- //
// --- [2023-04-10] --- //
// --- ************ --- //

// Pyramid Array
// Description:

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Note: the subarrays should be filled with 1s

function pyramidArray(num) {
  let pyramid = [];
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push(1);
    }
    pyramid.push(row);
  }
  return pyramid;
}

console.log(pyramidArray(3));
