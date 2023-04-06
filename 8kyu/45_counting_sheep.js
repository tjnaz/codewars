// -- ************ --- //
// --- [2023-04-05] --- //
// --- ************ --- //

// Counting sheep...
// Description:

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheep(arr) {
  let sheep = 0;
  arr.forEach((e) => (e ? sheep++ : 0));
  return sheep;
}

const sheep = [true, false, true];
console.log(countSheep(sheep));
