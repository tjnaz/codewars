// -- ************ --- //
// --- [2023-04-02] --- //
// --- ************ --- //
// TODO: optimisation
// NOTE: all the test cases are passed but there seems to be some "TypeError"
// NOTE: refer below for the complete error report
// TypeError: Cannot read property '0' of undefined
//     at landPerimeter
//     at it
//     at begin
//     at it
//     at /home/codewarrior/index.js:116:3
//     at /runner/frameworks/javascript/cw-2.js:152:11
//     at Promise._execute
//     at Promise._resolveFromExecutor
//     at new Promise
//     at describe
//     at /home/codewarrior/index.js:115:5
//     at /home/codewarrior/index.js:161:5
//     at Object.handleError/

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

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == "X") {
        let row = 4;

        if (i == 0) {
          if (j == 0) {
            if (arr[i][j + 1] == "X") {
              row--;
            }
            if (arr[i + 1][j] == "X") {
              row--;
            }
          } else if (j == arr[i].length - 1) {
            if (arr[i][j - 1] == "X") {
              row--;
            }
            if (arr[i + 1][j] == "X") {
              row--;
            }
          } else {
            if (arr[i][j - 1] == "X") {
              row--;
            }
            if (arr[i + 1][j] == "X") {
              row--;
            }
            if (arr[i][j + 1] == "X") {
              row--;
            }
          }
        } else if (i > 0) {
          if (j == 0) {
            if (i == arr.length - 1) {
              if (arr[i - 1][j] == "X") {
                row--;
              }
              if (arr[i][j + 1] == "X") {
                row--;
              }
            } else {
              if (arr[i - 1][j] == "X") {
                row--;
              }
              if (arr[i][j + 1] == "X") {
                row--;
              }
              if (arr[i + 1][j] == "X") {
                row--;
              }
            }
          } else if (j > 0) {
            if (i == arr.length - 1) {
              if (j == arr[i].length - 1) {
                if (arr[i][j - 1] == "X") {
                  row--;
                }
                if (arr[i - 1][j] == "X") {
                  row--;
                }
              } else {
                if (arr[i][j - 1] == "X") {
                  row--;
                }
                if (arr[i - 1][j] == "X") {
                  row--;
                }
                if (arr[i][j + 1] == "X") {
                  row--;
                }
              }
            } else if (j == arr[i].length - 1) {
              if (arr[i - 1][j] == "X") {
                row--;
              }
              if (arr[i][j - 1] == "X") {
                row--;
              }
              if (arr[i + 1][j] == "X") {
                row--;
              }
            } else {
              if (arr[i][j - 1] == "X") {
                row--;
              }
              if (arr[i][j + 1] == "X") {
                row--;
              }
              if (arr[i - 1][j] == "X") {
                row--;
              }
              if (arr[i + 1][j] == "X") {
                row--;
              }
            }
          }
        }
        perimeter += row;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
}

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']
// should return: "Total land perimeter: 24".

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
// should return: "Total land perimeter: 18"

// [ "OXOOOX",
//   "OXOXOO",
//   "XXOOOX",
//   "OXXXOO",
//   "OOXOOX",
//   "OXOOOO",
//   "OOXOOX",
//   "OOXOOO",
//   "OXOOOO",
//   "OXOOXX"],
// "Total land perimeter: 60"

// [ "OXOOO",
//   "OOXXX",
//   "OXXOO",
//   "XOOOO",
//   "XOOOO",
//   "XXXOO",
//   "XOXOO",
//   "OOOXO",
//   "OXOOX",
//   "XOOOO",
//   "OOOXO"],
// "Total land perimeter: 52"

// ["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"], "Total land perimeter: 40"
// ["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"], "Total land perimeter: 54"
// ["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"], "Total land perimeter: 40"

const arr = [
  "OXOOOX",
  "OXOXOO",
  "XXOOOX",
  "OXXXOO",
  "OOXOOX",
  "OXOOOO",
  "OOXOOX",
  "OOXOOO",
  "OXOOOO",
  "OXOOXX",
];
console.log(findLandPerimeter(arr));
