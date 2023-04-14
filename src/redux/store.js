import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
import loaderReducer from "./loader/loaderSlice";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";
import todoReducer from "./todo/todoSlice";

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const persistedAuthReducer = persistReducer(authPersistConfigs, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    todo: todoReducer,
    count: counterReducer,
    theme: themeReducer,
    isLoading: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
