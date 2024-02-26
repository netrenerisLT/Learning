import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; deleteHandler: () => void }> = (
  props
) => {
  return (
    <li onClick={props.deleteHandler} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
