





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
  playeroption = playerSelection.toLowerCase()

  if (playeroption == "rock" && computerSelection == "rock")
    return "Tie!"
  if (playeroption == "rock" && computerSelection == "papper")
    return "You lose! Papper beats Rock!"
  if (playeroption == "rock" && computerSelection == "scissors")
    return "You won! Rock beats Scissors"
  if (playeroption == "papper" && computerSelection == "rock")
    return "You won! Papper beats Rock"
  if (playeroption == "papper" && computerSelection == "papper")
    return "Tie!"
  if (playeroption == "papper" && computerSelection == "scissors")
    return "You lose! Scissors beats Papper"
  if (playeroption == "scissors" && computerSelection == "rock")
    return "You lose! Rock beats Scissors"
  if (playeroption == "scissors" && computerSelection == "papper")
    return "You won! Scissors beats papper"
  if (playeroption == "scissors" && computerSelection == "scissors")
    return "Tie!"
}
