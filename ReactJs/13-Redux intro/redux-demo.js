const redux = require("redux");

const counterReducer = (currentState = { counter: 10 }, action) => {
  if (action.type === "increment") {
    return {
      counter: currentState.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: currentState.counter - 10,
    };
  }

  return currentState;
};

const store = redux.createStore(counterReducer);

const counterSubcscriber = () => {
  const latestState = store.getState(); //gives latest state snapshot/value
  console.log(latestState);
};

store.subscribe(counterSubcscriber); //expects a functon which'll be executed when state changes

store.dispatch({ type: "increment" }); //dispatch an action
store.dispatch({ type: "decrement" }); //dispatch an action
