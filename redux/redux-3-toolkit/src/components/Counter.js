import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterStore";

const Counter = () => {
  const increaseBy = 10;
  //useselector - selecting wanted store and data
  const counter = useSelector((state) => state.counterProps.counter);
  const randomNumber = useSelector((state) => state.counterProps.random);
  const toggleCounter = useSelector(
    (state) => state.counterProps.toggleCounter
  );
  //useDispatch - dispatch an action againt the store and select witch type to use
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseByHandler = () => {
    dispatch(counterActions.increaseBy({ number: increaseBy }));
  };
  const increaseRandom = () => {
    dispatch(counterActions.increaseRandom());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {toggleCounter && (
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={increaseByHandler}>
              Increase by {increaseBy}
            </button>
            <button onClick={increaseRandom}>
              Increase random by {randomNumber}
            </button>
          </div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Counter;
