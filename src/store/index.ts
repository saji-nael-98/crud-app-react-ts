import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/slice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
