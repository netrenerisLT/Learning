const defaultResult = 0;
let currentResults = defaultResult;

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResults, calcDescription);
}

function add() {
  const beforeResult = currentResults;
  currentResults = currentResults + +userInput.value;
  createAndWriteOutput("+", beforeResult, userInput.value);
}
function subtract() {
  const beforeResult = currentResults;
  currentResults = currentResults - +userInput.value;
  createAndWriteOutput("-", beforeResult, userInput.value);
}
function multiply() {
  const beforeResult = currentResults;
  currentResults = currentResults * +userInput.value;
  createAndWriteOutput("*", beforeResult, userInput.value);
}
function divide() {
  const beforeResult = currentResults;
  currentResults = currentResults / +userInput.value;
  createAndWriteOutput("/", beforeResult, userInput.value);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
