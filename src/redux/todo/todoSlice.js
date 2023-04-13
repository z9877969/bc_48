import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOperations";

const initialState = {
  items: [],
  filter: "all",
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(event) {
        return {
          payload: event.target.value,
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map((el) =>
          el.id !== payload.id ? el : { ...el, ...payload }
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("todo") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { changeFilter, logout } = todoSlice.actions;

export default todoSlice.reducer;
