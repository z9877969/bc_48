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
import themeReducer from "./theme/themeSlice";
import authReducer from "./auth/authSlice";

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
