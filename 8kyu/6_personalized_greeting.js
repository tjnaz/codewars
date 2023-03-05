// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// Grasshopper - Personalized Message

// Description:

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case return
// name equals owner 'Hello boss'
// otherwise 'Hello guest'

function greeting(name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`;
}

console.log(greeting("hi", "hi"));
