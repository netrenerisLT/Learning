const redux = require("redux");

// step 2 = create reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if ((action.type = "increment")) {
    return {
      counter: state.counter + 2,
    };
  }
  if ((action.type = "decrement")) {
    return {
      counter: state.counter - 3,
    };
  }

  return state; //return default state
};

// step 1 = create store
const store = redux.createStore(counterReducer);

// step 3 = create subscription (component)
const counterSubscriber = () => {
  // getstate - method, which available in createStore and gives latest state  snapshot
  const latestState = store.getState();
  console.log(latestState);
};

// step 4 = exec subscription
//tells that countersubscriber functiion must be executed
store.subscribe(counterSubscriber);

// step 5 = dispatch action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
