import "./App.css";

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (constructor: string) {
    const element = document.getElementById(hookId);
    const person = new constructor();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = person.name
    }
  };
}

// @Logger("logging person")
@withTemplate("<h1>Changed text inside with decorator</h1>", "app")
class Person {
  name = "John";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

function App() {
  return <div id="app">save again, to see difference</div>;
}

export default App;
