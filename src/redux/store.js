import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

// const customLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       // prevState
//       const prevState = store.getState();
//       console.group(action.type);
//       console.log("prevState", prevState);
//       // action
//       console.log("action", action);
//       next(action);
//       // nextState
//       const nextState = store.getState();
//       console.log("nextState :>> ", nextState);
//       console.groupEnd();
//     };
//   };
// };

// const m = (store) => (next) => (action) => {};
// m({ getState: "getState", dispatch: "dispatch" })("next")({ type: "request" });

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: counterReducer,
  },
  // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
  middleware: (getDefaultMiddlewares) => [...getDefaultMiddlewares(), logger],
  devTools: process.env.NODE_ENV !== "production",
});
