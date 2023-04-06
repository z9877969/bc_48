import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./counterConstants";

export const counterDecrement = (value) => {
  return { type: COUNTER_DECREMENT, payload: value };
};

export const counterIncrement = (value) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});

export const counterReset = () => ({
  type: COUNTER_RESET,
});
