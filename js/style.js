// Rock, Paper, Scissors game

function game(){


// create a function getComputerChoice to return ‘rock’, ‘paper’, ‘scissors’ randomly. 

function getComputerChoice () {
	let rock = 0;
	let paper = 1;
	let scissors = 2;
	let randomNumber = Math.floor((Math.random()*3))
	switch (randomNumber) {
			case rock:
				return "rock";
			case paper:
				return "paper";
			case scissors:
				return "scissors";
};
  	
}

// a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection
//- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;

  if (player === computerSelection) {
    return "It's a tie!";
  
  } else if (
    (player === 'rock' && computerSelection === 'scissors') ||
    (player === 'paper' && computerSelection === 'rock') ||
    (player === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } 
  else {
    computerScore +=1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

//  a NEW function called game(). 
// Use the previous function inside 
// of this one to play a 5 round game that keeps score
// and reports a winner or loser at the end.
let noOfPlay = 5;

for (let i = 0; i < noOfPlay; i++) {
    let playerChoice = prompt("Your pick: \n ");
    console.log(playRound(playerChoice, computerSelection));
}

console.log("result: \n", playerScore, computerScore);

}

game();

