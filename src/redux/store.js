import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: counterReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
