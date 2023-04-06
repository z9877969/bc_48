import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

const iS = 0;

const counterReducer = (state = null, action) => {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - action.payload;
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_RESET:
      return iS;
    default:
      return state;
  }
};

export default counterReducer;
