let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the result of the game
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

// Function to check if the game is over
function checkGameOver() {
    if (playerScore === 3) {
        document.getElementById('finalMessage').textContent = `Congratulations, you won the game!`;
        disableChoices();
    } else if (computerScore === 3) {
        document.getElementById('finalMessage').textContent = `Sorry, the computer won the game.`;
        disableChoices();
    }
}

// Function to disable the choices after the game is over
function disableChoices() {
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = true;
    });
}

// Start the game after name is entered
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    document.getElementById('greetingMessage').textContent = `Let's play, ${name}!`;
    
    // Show the game options
    document.getElementById('game').style.display = 'block';
    document.getElementById('nameForm').style.display = 'none';
});

// Add event listeners to choice buttons
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        if (playerScore < 3 && computerScore < 3) {
            const playerChoice = this.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);

            // Update the result message
            document.getElementById('resultMessage').textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;

            // Update the score
            document.getElementById('playerScore').textContent = playerScore;
            document.getElementById('computerScore').textContent = computerScore;

            // Check if game is over
            checkGameOver();
        }
    });
});