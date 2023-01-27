import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  deleteHandler: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.deleteHandler}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
