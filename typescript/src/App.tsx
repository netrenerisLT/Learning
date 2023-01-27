import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoClass from "./models/todoClass";
import { useState } from "react";

function App() {
  const todosHardcoded = [
    new TodoClass("Learn React"),
    new TodoClass("Learn typeScript"),
  ];

  const [todo, setTodo] = useState<TodoClass[]>([]);
  const addTodoFunction = (todoText: string) => {
    const newTodo = new TodoClass(todoText);
    setTodo((prev) => {
      return prev.concat(newTodo);
    });
  };

  return (
    <div>
      {/* <Todos items={["1", "2", "----", "4", "5"]} /> */}
      <Todos items={todosHardcoded} />
      <Todos items={todo} />
      <NewTodo onAddTodo={addTodoFunction} />
    </div>
  );
}

export default App;
