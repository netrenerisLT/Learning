const defaultResult = 0;
let currentResults = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResults, calcDescription);
}

function writeToLogEntry(operator, resultBefore, calcNumber, result) {
  const log = {
    operator: operator,
    resultBefore: resultBefore,
    calcNumber: calcNumber,
    finalResult: result,
  };
  logEntries.push(log);
  console.log(logEntries);
}

function add() {
  const beforeResult = currentResults;
  currentResults = currentResults + +userInput.value;
  createAndWriteOutput("+", beforeResult, userInput.value);
  writeToLogEntry("add", beforeResult, userInput.value, currentResults);
}
function subtract() {
  const beforeResult = currentResults;
  currentResults = currentResults - +userInput.value;
  createAndWriteOutput("-", beforeResult, userInput.value);
  writeToLogEntry("substract", beforeResult, userInput.value, currentResults);
}
function multiply() {
  const beforeResult = currentResults;
  currentResults = currentResults * +userInput.value;
  createAndWriteOutput("*", beforeResult, userInput.value);
  writeToLogEntry("multiply", beforeResult, userInput.value, currentResults);
}
function divide() {
  const beforeResult = currentResults;
  currentResults = currentResults / +userInput.value;
  createAndWriteOutput("/", beforeResult, userInput.value);
  writeToLogEntry("divide", beforeResult, userInput.value, currentResults);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
