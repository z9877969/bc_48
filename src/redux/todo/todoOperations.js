import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "services/firebaseApi";

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
      console.dir(error);
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
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
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
