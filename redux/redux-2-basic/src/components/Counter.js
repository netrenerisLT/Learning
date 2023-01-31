import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const increasedNumber = 5;
  //useselector - selecting wanted store and data
  const counter = useSelector((state) => state.counter);
  const toggleCounter = useSelector((state) => state.toggle);
  //useDispatch - dispatch an action againt the store and select witch type to use
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseByHandler = () => {
    dispatch({ type: "increaseBy", increaseByNumberProps: increasedNumber });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {toggleCounter && (
        <div>
          <div className={classes.value}>{counter}</div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseByHandler}>
            Increase by {increasedNumber}
          </button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
