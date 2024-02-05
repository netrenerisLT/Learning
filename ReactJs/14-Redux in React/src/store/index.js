// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++; // redux toolkit auto dublicate state and we can use it like this (overwrite state in immutable way)
    },
    decrement(state) {
      state.counter--;
    },
    increace(state, action) {
      state.counter = state.counter + action.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counterSlice: counterSlice.reducer }, // use this if we have more than one reducer
});
export default store;

// const storeReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1, //we need to create state llike this, because cant to manipulate existing state directly.
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(storeReducer);

// export default store;
