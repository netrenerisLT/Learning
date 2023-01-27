import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
// import TodoClass from "./models/todoClass";
// import { useState } from "react";

function App() {
  // const todosHardcoded = [
  //   new TodoClass("Learn React"),
  //   new TodoClass("Learn typeScript"),
  // ];
  return (
    /* ====================== using props ====================== */
    // <div>
    //   {/* <Todos items={["1", "2", "----", "4", "5"]} /> */}
    //   {/* <Todos items={todosHardcoded}  /> */}
    //   <NewTodo onAddTodo={addTodoFunction} />
    //   <Todos items={todo} onRemove={removeTodoHandler} />
    // </div>
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
