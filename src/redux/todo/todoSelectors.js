import { createSelector } from "@reduxjs/toolkit";

export const selectorTodo = (state) => state.todo.items;
export const selectorFilter = (state) => state.todo.filter;
export const selectorIsTodoExist = (state) =>
  Boolean(selectorTodo(state).length);

export const selectorFilteredTodo = createSelector(
  [selectorTodo, selectorFilter],
  (todo, filter) => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);
