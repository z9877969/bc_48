import { createSlice } from "@reduxjs/toolkit";
import { logout } from "redux/todo/todoSlice";

const iS = 300;

const counterSlice = createSlice({
  name: "counter",
  initialState: iS,
  reducers: {
    decrement(state, { payload }) {
      return state - payload;
    },
    increment(state, { payload }) {
      return state + payload;
    },
    reset() {
      return iS;
    },
  },
});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
