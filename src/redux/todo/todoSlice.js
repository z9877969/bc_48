import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOperations";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    logout() {
      return {
        items: [],
        filter: "all",
        isLoading: false,
        error: null,
      };
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
      // .addCase(addTodo.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      // .addCase(addTodo.rejected, (state, { paylaod }) => {
      //   state.isLoading = false;
      //   state.error = paylaod;
      // })
      // .addCase(getTodo.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      // .addCase(getTodo.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
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

export const {
  updateStatusRequest,
  updateStatusSuccess,
  updateStatusError,
  changeFilter,
  logout,
} = todoSlice.actions;

export default todoSlice.reducer;
