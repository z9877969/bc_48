import { createReducer } from "@reduxjs/toolkit";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./counterActions";

const iS = 200;

// console.log(counterDecrement.toString());

// (state = 200, action) => {return state}
const counterReducer = createReducer(iS, (builder) => {
  builder
    .addCase(counterDecrement, (state, { payload }) => {
      return state - payload;
    })
    .addCase(counterIncrement, (state, { payload }) => {
      return state + payload;
    })
    .addCase(counterReset, () => iS);
});

export default counterReducer;
