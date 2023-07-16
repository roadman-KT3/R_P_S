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
    let reset = document.getElementById("reset-btn");

    
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
    if ((playerScore || computerScore) < 5){
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
        else{
            results.textContent = `Game Over`;
        }
    };
    
    reset.addEventListener('click', () =>
    {
        player.textContent = `Player Score: ${playerScore = 0}`
        computer.textContent = `Computer Score: ${computerScore = 0}`
                
    }) 
    
};

