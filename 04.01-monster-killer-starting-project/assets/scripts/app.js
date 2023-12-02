const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "PONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
// const enteredHealth = prompt(
//   "How much health should you and monster have?",
//   "100"
// );
let chosenMaxLife = 20 || parseInt(enteredHealth);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  //check if valid data enterred
  alert("You entered not a number");
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(evt, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: evt,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  switch (evt) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry.target = "game";
      break;
    default:
      logEntry = {};
  }
  // if ((evt = LOG_EVENT_PLAYER_ATTACK)) {
  //   logEntry.target = "MONSTER";
  // } else if ((evt = LOG_EVENT_PLAYER_STRONG_ATTACK)) {
  //   logEntry.target = "MONSTER";
  // } else if ((evt = LOG_EVENT_MONSTER_ATTACK)) {
  //   logEntry.target = "PLAYER";
  // } else if ((evt = LOG_EVENT_PLAYER_HEAL)) {
  //   logEntry.target = "PLAYER";
  // } else if ((evt = LOG_EVENT_GAME_OVER)) {
  //   logEntry = {
  //     event: evt,
  //     value: value,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const userHealthBeforeHit = currentPlayerHealth;
  const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= damageToPlayer;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    damageToPlayer,
    currentMonsterHealth,
    currentPlayerHealth
  );
  // checkif use has bonus life
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = userHealthBeforeHit;
    setPlayerHealth(userHealthBeforeHit);
    alert("Youu used your bonus health");
  }

  // winning condition information
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You WON!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "Player won",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You LOST!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "Monster won",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("DRAW...");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A Draw",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  }
}

function attackMonster(attackType) {
  /* ====================== ternary operator ====================== */
  let maxDamage =
    attackType === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    attackType === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  /* ====================== just if statements ====================== */
  // let maxDamage;
  // let logEvent;
  // if (attackType === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (attackType === MODE_STRONG_ATTACK) {
  //   maxDamage === STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerButton(params) {
  let playerMaxHealth;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    //checks if haelth are not above 80
    alert("You can't heal over your max health");
    playerMaxHealth = chosenMaxLife - currentPlayerHealth;
  } else {
    playerMaxHealth = HEAL_VALUE;
  }
  increasePlayerHealth(playerMaxHealth);
  currentPlayerHealth += playerMaxHealth; //updates player health when healed
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    playerMaxHealth,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function showLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", attackHandler);
healBtn.addEventListener("click", healPlayerButton);
logBtn.addEventListener("click", showLogHandler);
