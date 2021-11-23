





function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1)
    return "Rock"
  if (randomNumber == 2)
    return "Papper"
  if (randomNumber == 3)
    return "Scissors"
}
