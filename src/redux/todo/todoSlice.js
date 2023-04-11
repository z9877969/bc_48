import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    getTodoRequest(state) {
      state.isLoading = true;
    },
    getTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    addRequest(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    addSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    addError(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    removeTodoRequest(state) {
      state.isLoading = true;
    },
    removeTodoSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter((el) => el.id !== payload),
      };
    },
    removeTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    updateStatusRequest(state) {
      state.isLoading = true;
    },
    updateStatusSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.map((el) =>
          el.id !== payload.id ? el : { ...el, isDone: payload.isDone }
        ),
      };
    },
    updateStatusError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
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
});

export const {
  getTodoRequest,
  getTodoSuccess,
  getTodoError,
  addRequest,
  addSuccess,
  addError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
  updateStatusRequest,
  updateStatusSuccess,
  updateStatusError,
  changeFilter,
} = todoSlice.actions;

console.log("getTodoRequest :>> ", getTodoRequest());

export default todoSlice.reducer;
