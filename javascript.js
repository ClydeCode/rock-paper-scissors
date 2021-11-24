function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1)
    return "rock"
  if (randomNumber == 2)
    return "papper"
  if (randomNumber == 3)
    return "scissors"
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock")
    return "Tie! Result: " + playerScore + ":" + computerScore
  if (playerSelection == "rock" && computerSelection == "papper")
    return "You lose! Papper beats Rock! Result: " + playerScore + ":" + ++computerScore
  if (playerSelection == "rock" && computerSelection == "scissors")
    return "You won! Rock beats Scissors! Result: " + ++playerScore + ":" + computerScore
  if (playerSelection == "papper" && computerSelection == "rock")
    return "You won! Papper beats Rock! Result: " + ++playerScore + ":" + computerScore
  if (playerSelection == "papper" && computerSelection == "papper")
    return "Tie! Result: " + playerScore + ":" + computerScore
  if (playerSelection == "papper" && computerSelection == "scissors")
    return "You lose! Scissors beats Papper! Result: " + playerScore + ":" + ++computerScore
  if (playerSelection == "scissors" && computerSelection == "rock")
    return "You lose! Rock beats Scissors! Result: " + playerScore + ":" + ++computerScore
  if (playerSelection == "scissors" && computerSelection == "papper")
    return "You won! Scissors beats papper! Result: " + ++playerScore + ":" + computerScore
  if (playerSelection == "scissors" && computerSelection == "scissors")
    return "Tie! Result: " + playerScore + ":" + computerScore
}

function input() {
  while(true) {
  text = prompt("Choose: Rock, Papper or Scissors").toLowerCase()

  if (text == "rock" || text == "papper" || text == "scissors")
    return text
  else
    console.log("Wrong Input!")
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    console.log(playRound(input(), computerPlay()))
  }
}

let playerScore = 0
let computerScore = 0

game()
