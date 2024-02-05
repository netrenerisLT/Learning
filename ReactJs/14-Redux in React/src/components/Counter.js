import classes from "./Counter.module.css";
import { useSelector,useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch() //const dispatch is a function aagint redux store
  const counter = useSelector((state) => state.counter);

  const incrementHandler=()=> {
    dispatch({type: "increment"})
  }

  const increaseHandler=()=> {
    dispatch({type: "increase", value: 5})
  }
  const decrementHandler=()=> {
    dispatch({type: "decrement"})

  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by</button>
      </div>
    </main>
  );
};

export default Counter;
