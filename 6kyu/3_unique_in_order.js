// --- ************ --- //
// --- [2023-03-14] --- //
// --- ************ --- //

// Unique In Order
// Description:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(seq) {
  let unique = [];
  if (seq.length == 0) {
    return unique;
  }
  unique.push(seq[0]);
  for (let i = 1; i < seq.length; i++) {
    seq[i] != seq[i - 1] && unique.push(seq[i]);
  }

  return unique;
}

console.log(uniqueInOrder([]));
