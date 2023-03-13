// --- ************ --- //
// --- [2023-03-13] --- //
// --- ************ --- //

// Who likes it?
// Description:

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function whoLikeIt(arr) {
  if (arr.length == 0) {
    return `no one likes this`;
  } else if (arr.length == 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length == 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length == 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}

// let arr = []; //-->  "no one likes this"
// let arr = ["Peter"]; //-->  "Peter likes this"
// let arr = ["Jacob", "Alex"]; //-->  "Jacob and Alex like this"
// let arr = ["Max", "John", "Mark"]; //-->  "Max, John and Mark like this"
let arr = ["Alex", "Jacob", "Mark", "Max"]; //-->  "Alex, Jacob and 2 others like this"

console.log(whoLikeIt(arr));
