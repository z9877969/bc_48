import { TODO_ADD, TODO_REMOVE } from "./todoConstants";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    case TODO_REMOVE:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;

const fn = (a = 2) => {
  return a;
};

fn(); // 2
fn(5); // 5
