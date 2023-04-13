import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    idToken: null,
    localId: null,
    email: null,
    refreshToken: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
          isLoading: false,
        };
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        const { email, localId } = payload;
        state.isLoading = false;
        state.email = email;
        state.localId = localId;
        state.isAuth = true;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
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

export default authSlice.reducer;
