import {
  getUserDataApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "redux/error/errorHandler";
import { logout } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userCreds, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi(userCreds);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCreds, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(userCreds);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const userData = await getUserDataApi(idToken);
      return userData;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getUserData }));
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;

    try {
      const tokens = await refreshTokenApi(refreshToken);

      setTimeout(() => {
        dispatch(cb()); // dispatch(getUserData())
      }, 0);

      return tokens;
    } catch (error) {
      setTimeout(() => {
        dispatch(logout());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
