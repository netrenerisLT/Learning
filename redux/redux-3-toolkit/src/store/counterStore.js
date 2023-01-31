import { createSlice } from "@reduxjs/toolkit";

//prepares slice of global state, it helps to create different slices for different pieces of codde
const randomGenerated = () => {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
};
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, toggle: false, random: randomGenerated() },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter = state.counter + action.payload.number;
    },
    increaseRandom(state) {
      state.counter = state.counter + state.random;
      state.random = randomGenerated();
    },
    toggleCounter(state) {
      state.random = randomGenerated();
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

//exports  reducers with generated names as selectors
export const counterActions = counterSlice.actions;
export default counterSlice;
