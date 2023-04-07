import { createAction } from "@reduxjs/toolkit";

// export const counterDecrement = (value) => {
//   return { type: COUNTER_DECREMENT, payload: value };
// };
export const counterDecrement = createAction("counter/decrement"); // (value) => ({type: "actionType", payload: value})

// export const counterIncrement = (value) => ({
//   type: COUNTER_INCREMENT,
//   payload: value,
// });
export const counterIncrement = createAction("counter/increment");

// export const counterReset = () => ({
//   type: COUNTER_RESET,
// });
export const counterReset = createAction("conter/reset");
