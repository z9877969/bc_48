import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  changeFilter,
  removeTodo,
  updateTodoStatus,
} from "./todoActions";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => [...state, payload])
    .addCase(removeTodo, (state, { payload }) =>
      state.filter((el) => el.id !== payload)
    )
    .addCase(updateTodoStatus, (state, { payload }) => {
      return state.map((el) =>
        el.id !== payload ? el : { ...el, isDone: !el.isDone }
      );
    })
    // .addMatcher(
    //   (action) => true,
    //   (state, { payload }) => state
    // )
    // .addDefaultCase((state, { payload }) => state);
});

export const filterReducer = createReducer("all", (builder) => {
  builder.addCase(changeFilter, (state, { payload }) => {
    return payload;
  });
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
