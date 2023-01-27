import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

/* ====================== using props ====================== */
// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();

//     // current"!" exclamation mark is used when we are sure that we'll get value
//     const enteredText = inputRef.current!.value;

//     // current"?" question mark is used when we are not sure if we'll get value and if not, value will be "null"
//     // const enteredText = inputRef.current?.value;

//     if (enteredText.trim().length === 0) {
//       return;
//     }

//     props.onAddTodo(enteredText);
//   };

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//       <label htmlFor="text">Todo Text</label>
//       <input type="text" id="text" ref={inputRef} />
//       <button>Add Todo</button>
//     </form>
//   );
// };

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // current"!" exclamation mark is used when we are sure that we'll get value
    const enteredText = inputRef.current!.value;

    // current"?" question mark is used when we are not sure if we'll get value and if not, value will be "null"
    // const enteredText = inputRef.current?.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;