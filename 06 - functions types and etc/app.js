const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "THERE WAS A DRAW";
const RESULT_PLAYER_WINS = "PLAYER IS WINNER!";
const RESULT_COMPUTER_WINS = "COMPUTER IS WINNER!";
let gameIsRunning = false;

const getPlayerSelection = function () {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("Invalid choice, try again.");
    return getPlayerSelection();
  }
  return selection;
};

const getComputerChoice = function () {
  let randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else return SCISSORS;
};

/* ====================== arrow function ====================== */
const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === SCISSORS && pChoice === ROCK) ||
    (cChoice === PAPER && pChoice === SCISSORS)
  ) {
    return RESULT_PLAYER_WINS;
  } else return RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener("click", function () {
  //stops from game rerunning
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  console.log("Game is starting");
  const playerChoice = getPlayerSelection();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, and therefore you `;
  winner === RESULT_DRAW
    ? (message = message + "had a draw.")
    : winner === RESULT_PLAYER_WINS
    ? (message = message + "had win.")
    : (message = message + "lost.");
  console.log(message);
  gameIsRunning = false;
});
