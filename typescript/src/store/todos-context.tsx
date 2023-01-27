import React, { useState } from "react";
import TodoClass from "../models/todoClass";

type TodosContextObj = {
  items: TodoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
  const [todo, setTodo] = useState<TodoClass[]>([]);

  const addTodoFunction = (todoText: string) => {
    const newTodo = new TodoClass(todoText);
    setTodo((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodo((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todo,
    addTodo: addTodoFunction,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
