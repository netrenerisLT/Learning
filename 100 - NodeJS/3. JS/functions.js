function greetUser(greeting, user = "default") {
  console.log(greeting + " " + user);
}

greetUser("hi", "MM");
greetUser("hi");

function sumUp(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumUp(1, 2));

//REST parameters/arguments, return values merged in to the array
function sumUpRest(...numbers) {
  let result = 0;
  for (const iterator of numbers) {
    result += iterator;
  }
  return result;
}

console.log(sumUpRest(1, 2, 3, 4));

//SPREAD operator, return arrays values into the list
function sumUpSpread(numbers) {
  let result = 0;
  for (const iterator of numbers) {
    result += iterator;
  }
  return result;
}
const number = [1, 2, 3, 4];
console.log(sumUpRest(...number));
