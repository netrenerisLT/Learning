import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const value = 11;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggleShow = useSelector((state) => state.counter.showCounter);

  /* ====================== Naudojant Toolkit ====================== */
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(
      counterActions.increase({
        valueReceived: value,
      })
    );
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  /* ====================== Jeigu naudojam redux ir redux-react modulius tik ====================== */
  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const increaseHandler = () => {
  //   dispatch({ type: "increase", valueReceived: value });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {toggleShow && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by {value}</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
