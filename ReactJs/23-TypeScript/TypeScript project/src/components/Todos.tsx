import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          deleteHandler={todosCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id + item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
