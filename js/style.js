// Rock, Paper, Scissors game



if (typeof document !== 'undefined') {
    // variables for the game.
    let playerChoice;
    let computerChoice;
    let randomNumber = Math.floor((Math.random()*3));
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let results = document.getElementById("output");
    let playerScore = 0;
    let computerScore = 0;
    let player = document.querySelector("#playerScore");
    let computer = document.querySelector("#computerScore");
    let noOfPlay = 5;


    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) =>{button.addEventListener('click', () =>
    {
        playerChoice = document.getElementById("playerSelection");
        playerChoice.textContent = `Player Selects: ${button.id}`; 
        playRound(button.id, computerChoice);
        //game();
        
        //playerChoice = button.id;
    })});

    switch (randomNumber) {
        case rock:
            computerChoice = "rock";
        case paper:
            computerChoice = "paper";
        case scissors:
            computerChoice = "scissors";
        };
              
        //console.log(computerChoice);
        computerSelect = document.getElementById("computerSelection");
        computerSelect.textContent = `Computer Selects: ${computerChoice}`

        
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        results.textContent = `It's a tie! you choose ${playerSelection} and computer choose ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerScore ++;
            player.textContent = `Player Score: ${playerScore}`
            computer.textContent = `Computer Score: ${computerScore}`
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        } 
        else {
            computerScore ++;
            player.textContent = `Player Score: ${playerScore}`
            computer.textContent = `Computer Score: ${computerScore}`
            results.textContent =`You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    // if (playerScore === 5) {
    //     results.textContent = 'Player wins!';
    // } else if (computerScore === 5) {
    //     results.textContent = 'Computer wins!';
    // }

    
     
    
    }
    
    

// // // Display the results of the game
// // const resultsDiv = document.querySelector('.results');

// // function displayResults(message) {
// //   message = game();
// //   const p = document.createElement('p');
// //   p.textContent = message;
// //   resultsDiv.appendChild(p);
// // }

// // // Replace all console.log statements with displayResults, for example:

// // displayResults(`Player: ${playerSelection} | Computer: ${computerSelection}`);

// //  a NEW function called game(). 
// // Use the previous function inside 
// // of this one to play a 5 round game that keeps score
// // and reports a winner or loser at the end.

