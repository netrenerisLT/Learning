// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const storeInitialState = { counter: 0, showCounter: true };

/* ====================== Jeigu naudojam erdux toolkit ====================== */
const counterSlice = createSlice({
  name: "counter",
  initialState: storeInitialState,
  reducers: {
    increment(state) {
      state.counter++; //galim neperarsyti kitu selectoriu kaip redux paxvyzdyje, nes toolkit naudoja kita library kuris automatiskai sukurria nauja state ir tas objektas yra immutable - perrasomas.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.valueReceived;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

/* ====================== Jeigu naudojam redux ir redux-react modulius tik ====================== */
// const counterReducer = (state = { initialState }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.valueReceived,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;
export default store;
