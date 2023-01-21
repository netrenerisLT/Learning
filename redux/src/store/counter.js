import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

/* ====================== Jeigu naudojam erdux toolkit ====================== */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
export const counterActions = counterSlice.actions;

export default counterSlice;
