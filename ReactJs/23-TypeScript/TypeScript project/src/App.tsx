import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  //usestate is generic fn and we need to tell what kind of data we need to store in state
  //at first deafult value is empty array but then has shape as declared in Todo class
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo)=> {
      return prevTodo.filter(todo => todo.id !== todoId)
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos deleteHandler={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
