import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "redux/error/errorHandler";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (newTodo, thunkApi) => {
    const { localId, idToken } = thunkApi.getState().auth;
    try {
      const todo = await addTodoApi({
        todo: newTodo,
        localId,
        idToken,
      });
      return todo;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: () => addTodo(newTodo) }));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    const { idToken, localId } = thunkApi.getState().auth;
    try {
      const data = await getTodoApi({ localId, idToken });
      return data;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: getTodo }));
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;

      if (!items.length) return true;
      return false;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { idToken, localId } = getState().auth;
    try {
      await removeTodoApi({ id, localId, idToken });
      return id;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      return rejectWithValue(error.meassge);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/updateStatus",
  async (data, { rejectWithValue }) => {
    try {
      const newData = await updateTodoStatusApi(data);
      return newData;
    } catch (error) {
      return rejectWithValue(error.meassge);
    }
  }
);
