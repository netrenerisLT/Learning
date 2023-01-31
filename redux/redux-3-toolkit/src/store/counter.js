import { createStore } from "redux";

const counterReducer = (state = { counter: 0, toggle: false }, action) => {
  if (action.type === "increment") {
    //we need to set toggle too (regardless weren't using it) because we need to return overall state object
    return { counter: state.counter + 1, toggle: state.toggle };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, toggle: state.toggle };
  }
  if (action.type === "increaseBy") {
    return {
      counter: state.counter + action.increaseByNumberProps,
      toggle: state.toggle,
    };
  }
  if (action.type === "toggle") {
    return { toggle: !state.toggle, counter: state.counter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
