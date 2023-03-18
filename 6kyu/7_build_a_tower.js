// --- ************ --- //
// --- [2023-03-17] --- //
// --- ************ --- //

// Build Tower
// Description:
// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// Go challenge Build Tower Advanced once you have finished this :)

function buildATower(floor) {
  let stars = 2 * floor - 1;
  let tower = [];
  // console.log(stars);

  for (let i = 1; i <= stars; i += 2) {
    let char = "";
    for (let j = (stars - i) / 2; j > 0; j--) {
      char += " ";
    }
    for (star = 0; star < i; star++) {
      char += "*";
    }
    for (let k = (stars - i) / 2; k > 0; k--) {
      char += " ";
    }
    tower.push(char);
  }
  return tower;
}

console.log(buildATower(5));
