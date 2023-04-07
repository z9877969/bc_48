import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

const persistTodoConfig = {
  key: "todo",
  storage,
  // whitelist: ["items"],
  blacklist: ["filter"],
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    todo: persistedTodoReducer,
    count: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
