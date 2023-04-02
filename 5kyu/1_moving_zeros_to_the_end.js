// -- ************ --- //
// --- [2023-04-02] --- //
// --- ************ --- //

// Moving Zeros To The End
// Description:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  // MY SOLUTION
  // let zero = [];
  // let arrLength = arr.slice().length;

  // for (let i = 0; i < arrLength; i++) {
  //   if (arr.includes(0)) {
  //     arr.splice(arr.indexOf(0), 1);
  //     zero.push(0);
  //   }
  // }

  // IMPROVED
  let nonZero = arr.filter((e) => e !== 0);
  let zero = arr.filter((e) => e === 0);

  return [...nonZero, ...zero];
}

const arr = [null, true, [], "2", {}, null, 1, NaN, +0, 2, NaN, +0];

console.log(moveZeros(arr));
