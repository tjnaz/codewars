// -- ************ --- //
// --- [2023-04-02] --- //
// --- ************ --- //

// Land perimeter
// Description:

// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']

// should return: "Total land perimeter: 24".

// Following input:

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

// should return: "Total land perimeter: 18"

function findLandPerimeter(arr) {
  let perimeter = 0;
  // let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr.length);
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i].length);
      if (arr[i][j] == "X") {
        // count++;
        // console.log(count);
        let row = 4;
        if (i == 0) {
          if (arr[i + 1][j] == "X") {
            // console.log("i=0");
            row--;
          }
        }

        if (i == arr.length - 1) {
          if (arr[i - 1][j] == "X") {
            row--;
          }
        }

        if (j == 0) {
          if (arr[i][j + 1]) {
            row--;
          }
        }

        if (j == arr[i].length - 1) {
          if (arr[i][j - 1] == "X") {
            row--;
          }
        }

        if (i > 0 && i < arr.length - 1 && j > 0 && j < arr[i].length - 1) {
          if (arr[i][j - 1] == "X") {
            row--;
          }

          if (arr[i][j - 1] == "X") {
            row--;
          }

          if (arr[i - 1][j] == "X") {
            row--;
          }

          if (arr[i + 1][j] == "X") {
            row--;
          }
        }
        perimeter += row;
      }
    }
  }
  return perimeter;
}

// ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']

// should return: "Total land perimeter: 24".

// Following input:

// ['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO']

// should return: "Total land perimeter: 18"

const arr = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];
console.log(findLandPerimeter(arr));
