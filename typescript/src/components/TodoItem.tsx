import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoText: string }> = (props) => {
  const deleteHandler = () => {};

  return (
    <li className={classes.item} onClick={deleteHandler}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
