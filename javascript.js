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
    return "Tie!"
  if (playerSelection == "rock" && computerSelection == "papper")
    return "You lose! Papper beats Rock!"
  if (playerSelection == "rock" && computerSelection == "scissors")
    return "You won! Rock beats Scissors"
  if (playerSelection == "papper" && computerSelection == "rock")
    return "You won! Papper beats Rock"
  if (playerSelection == "papper" && computerSelection == "papper")
    return "Tie!"
  if (playerSelection == "papper" && computerSelection == "scissors")
    return "You lose! Scissors beats Papper"
  if (playerSelection == "scissors" && computerSelection == "rock")
    return "You lose! Rock beats Scissors"
  if (playerSelection == "scissors" && computerSelection == "papper")
    return "You won! Scissors beats papper"
  if (playerSelection == "scissors" && computerSelection == "scissors")
    return "Tie!"
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
  for (let counts = 0; counts < 5; counts++) {
    console.log(playRound(input(), computerPlay()))
  }
}

game()
