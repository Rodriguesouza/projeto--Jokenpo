const result = document.querySelector(".result");
const scoreHuman  = document.querySelector("#score-human")
const scoreMachine = document.querySelector("#score-machine")


let humanScoreNumber = 0
let  machineScoreNumber = 0




const playHuman = (humanchoice) => {
  console.log(humanchoice);

  playTheGame(humanchoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log(" Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = " Deu Empate! &#x1F62C;";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {

    humanScoreNumber++
    scoreHuman.innerHTML = humanScoreNumber

    result.innerHTML = " Você Ganhou &#x1F600;"
  } else {
    result.innerHTML = "  Maquina Ganhou ! &#x1F916;"
    machineScoreNumber++
    scoreMachine.innerHTML = machineScoreNumber
  }
}
