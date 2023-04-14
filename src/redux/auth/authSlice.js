import {
  getUserData,
  loginUser,
  refreshToken,
  registerUser,
} from "./authOperations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  idToken: null,
  localId: null,
  email: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        const { email, localId } = payload;
        state.email = email;
        state.localId = localId;
        state.isAuth = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { refreshToken, idToken } = payload;
        state.idToken = idToken;
        state.refreshToken = refreshToken;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/pending"),
        (state) => {
          console.log("matcher");
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
