// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// Exes and Ohs

// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function xsAndOs(str) {
  let modStr = str.toLowerCase().split("");
  let x = 0,
    o = 0;

  modStr.forEach((e) => {
    if (e == "x") {
      x += 1;
    } else if (e == "o") {
      o += 1;
    }
  });
  console.log(`x: ${x}, o: ${o}`);
  return x == o;
}

console.log(xsAndOs("xooxXM"));
