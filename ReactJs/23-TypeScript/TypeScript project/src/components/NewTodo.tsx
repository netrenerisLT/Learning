import React, { useRef } from "react";
import classes from "./NewTodo.module.css"


const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //need to specify which element will be stored to this ref and we need to add starting value (e.x.null)
  const todoRef = useRef<HTMLInputElement>(null);

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    // "?" is used becouse TS don't know if there wll be established a connection between submtForm and the input value from the form (cant get value, before we load the input form and get value)
    //we can use "!" to say that the connecton is established vefore we call for ths value
    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitForm} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
