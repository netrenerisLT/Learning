import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterStore";
import authSlice from "./authStore";

const store = configureStore({
  // if we have one reducer, we can do not use object with name
  // reducer: counterSlice.reducer,
  reducer: { counterProps: counterSlice.reducer, authProps: authSlice.reducer },
});
export default store;
