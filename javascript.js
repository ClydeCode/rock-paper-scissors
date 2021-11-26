function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1)
    return "rock";
  if (randomNumber == 2)
    return "papper";
  if (randomNumber == 3)
    return "scissors";
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock")
    return "Tie! Player: " + playerScore + ":" + computerScore + " Computer";
  if (playerSelection == "rock" && computerSelection == "papper")
    return "You lose! Papper beats Rock! Player: " + playerScore + ":" + ++computerScore + " Computer";
  if (playerSelection == "rock" && computerSelection == "scissors")
    return "You won! Rock beats Scissors! Player: " + ++playerScore + ":" + computerScore + " Computer";
  if (playerSelection == "papper" && computerSelection == "rock")
    return "You won! Papper beats Rock! Player: " + ++playerScore + ":" + computerScore + " Computer";
  if (playerSelection == "papper" && computerSelection == "papper")
    return "Tie! Player: " + playerScore + ":" + computerScore + " Computer";
  if (playerSelection == "papper" && computerSelection == "scissors")
    return "You lose! Scissors beats Papper! Player: " + playerScore + ":" + ++computerScore + " Computer";
  if (playerSelection == "scissors" && computerSelection == "rock")
    return "You lose! Rock beats Scissors! Player: " + playerScore + ":" + ++computerScore + " Computer";
  if (playerSelection == "scissors" && computerSelection == "papper")
    return "You won! Scissors beats papper! Player: " + ++playerScore + ":" + computerScore + " Computer";
  if (playerSelection == "scissors" && computerSelection == "scissors")
    return "Tie! Player: " + playerScore + ":" + computerScore + " Computer";
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const content = document.querySelector('.res');
const finalContent = document.querySelector('.finalRes');

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    if (finalContent.textContent != null) finalContent.textContent = '';

    if (button.id == 1) content.textContent = (playRound('rock', computerPlay()));
    
    if (button.id == 2) content.textContent = (playRound('papper', computerPlay()));
    
    if (button.id == 3) content.textContent = (playRound('scissors', computerPlay()));
    
    if (playerScore == 5) {
      finalContent.textContent = 'You won this match!';
      resetScore();
    }

    if (computerScore == 5) {
      finalContent.textContent = 'You lose this match!';
      resetScore();
    }
  });
});
