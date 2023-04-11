import { createSlice } from "@reduxjs/toolkit";

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

// counter/increment
export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
// (state = 200, action) => {return state}
