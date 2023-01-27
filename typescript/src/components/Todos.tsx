import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";
// import TodoClass from "../models/todoClass";

/* ====================== using hardcoded value ====================== */
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

/* ====================== using props ====================== */
// const Todos: React.FC<{
//   items: TodoClass[];
//   onRemove: (id: string) => void;
// }> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         // <li key={item.id}>{item.text}</li>
//         <TodoItem
//           key={item.id}
//           todoText={item.text}
//           deleteHandler={props.onRemove.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          deleteHandler={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
