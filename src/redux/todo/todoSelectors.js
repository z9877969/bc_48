import { createSelector } from "@reduxjs/toolkit";

export const selectorTodo = (state) => state.todo.items;
export const selectorFilter = (state) => state.todo.filter;
export const selectorIsTodoExist = (state) =>
  Boolean(selectorTodo(state).length);

// export const selectorFilteredTodo = (state) => {
//   console.log("selectorFilteredTodo");
//   const filter = selectorFilter(state);
//   const todo = selectorTodo(state);
//   if (filter === "all") return todo;
//   return todo.filter((el) => el.priority === filter); // ref1 | ref2 | ref3
// };

export const selectorFilteredTodo = createSelector(
  [selectorTodo, selectorFilter],
  (todo, filter) => {
    console.log("selectorFilteredTodo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter); // ref1 | ref2 | ref3
  }
);

// const fn = (a,b) => {
//     return a + b
// }

// fn(1,2) // total -> total
// fn(1,2)
// fn(1,2)
// fn(1,2)
// fn(1,2)
