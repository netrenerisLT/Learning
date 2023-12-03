const startGameBtn = document.getElementById("start-game-btn");

/* ====================== function expression(stored in variable) + anonymous function (without name) ====================== */
const startGame = function () {
  console.log("function expression");
};

startGameBtn.addEventListener("click", startGame);
//another way to call anonymous function
startGameBtn.addEventListener("click", function () {
  console.log("im anonymous");
});
//give the name name for function if you want to show the more detailed error
startGameBtn.addEventListener("click", function showsThisName() {
  console.log("im anonymous");
  ga();
});

/* ====================== function declaration / function statement ====================== */
function startGame2() {
  console.log("function declaration / function statement");
}

startGameBtn.addEventListener("click", startGame2);
