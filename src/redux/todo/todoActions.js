import { createAction } from "@reduxjs/toolkit";

// export const addTodo = (todo) => ({
//   type: TODO_ADD,
//   payload: todo,
// });
export const addTodo = createAction("todo/add");

// export const removeTodo = (id) => ({
//   type: TODO_REMOVE,
//   payload: id,
// });
export const removeTodo = createAction("todo/remove");

export const updateTodoStatus = createAction("todo/updateStatus");

export const changeFilter = createAction("todo/changeFilter", (event) => {
  return {
    payload: event.target.value,
  };
});
