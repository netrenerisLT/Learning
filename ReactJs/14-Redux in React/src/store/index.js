// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counterSlice: counterReducer, authSlice: authReducer }, // use this if we have more than one reducer
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
