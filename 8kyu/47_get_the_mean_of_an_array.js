// -- ************ --- //
// --- [2023-04-09] --- //
// --- ************ --- //

// Get the mean of an array
// Description:

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function findAverage(scores) {
  return Math.floor(
    scores.reduce((acc, score) => (acc += score)) / scores.length
  );
}

const scores = [1, 5, 87, 45, 8, 8];

console.log(findAverage(scores));
