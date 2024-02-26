import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem text={item.text} key={item.id + item.text} />
      ))}
    </ul>
  );
};

export default Todos;
