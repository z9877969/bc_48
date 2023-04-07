import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
    },
    updateStatus(state, { payload }) {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id !== payload ? el : { ...el, isDone: !el.isDone }
        ),
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
});

export const { add, remove, updateStatus, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;
