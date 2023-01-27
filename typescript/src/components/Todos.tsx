import React from "react";
import TodoClass from "../models/todoClass";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//we merging "items" props atribute with "props.children" atribute in functional componnents
// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };
const Todos: React.FC<{ items: TodoClass[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
