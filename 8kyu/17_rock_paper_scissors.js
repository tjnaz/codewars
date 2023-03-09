// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// Rock Paper Scissors!

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

function rockPaperScissors(p1, p2) {
  p1.toLowerCase();
  p2.toLowerCase();

  // MY SOLUTION <----
  // if (p1 == p2) {
  //   return "Draw!";
  // }

  // if (
  //   (p1 == "scissors" && p2 == "paper") ||
  //   (p1 == "paper" && p2 == "rock") ||
  //   (p1 == "rock" && p2 == "scissors")
  // ) {
  //   return "Player 1 won!";
  // } else {
  //   return "Player 2 won!";
  // }

  // AWESOME SOLUTION FROM CODEWAR
  if (p1 === p2) return "Draw!";
  let rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
console.log(rockPaperScissors("paper", "scissors"));
