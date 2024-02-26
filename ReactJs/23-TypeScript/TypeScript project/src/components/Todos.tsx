import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC<{ items: Todo[]; deleteHandler: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem deleteHandler={props.deleteHandler.bind(null, item.id)} text={item.text} key={item.id + item.text} />
      ))}
    </ul>
  );
};

export default Todos;
