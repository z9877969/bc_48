import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "services/firebaseApi";

// export const addTodo = (newTodo) => (dispatch, getState) => {
//   dispatch(addRequest());

//   addTodoApi(newTodo)
//     .then((todo) => dispatch(addSuccess(todo)))
//     .catch((err) => dispatch(addError(err.message)));
// };

export const addTodo = createAsyncThunk(
  "todo/add",
  async (newTodo, thunkApi) => {
    // dispatch({type: "todo/add/pending"}) -> reducer
    try {
      const todo = await addTodoApi(newTodo);
      return todo; // dispatch({type: "todo/add/fulfilled", payload: todo })
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // dispatch({type: "todo/add/rejected", payload: error.message })
    }
  }
);

// export const getTodo = () => (dispatch) => {
//   dispatch(getTodoRequest());
//   getTodoApi()
//     .then((data) => dispatch(getTodoSuccess(data)))
//     .catch((err) => dispatch(getTodoError(err.message)));
// };
export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    // console.log("thunkApi :>> ", thunkApi);
    try {
      const data = await getTodoApi();
      return data;
    } catch (error) {
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

// export const removeTodo = (id) => (dispatch) => {
//   dispatch(removeTodoRequest());

//   removeTodoApi(id)
//     .then((id) => dispatch(removeTodoSuccess(id)))
//     .catch((err) => dispatch(removeTodoError(err.meassage)));
// };
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

// export const updateTodoStatus = (data) => (dispatch) => {
//   dispatch(updateStatusRequest());

//   updateTodoStatusApi(data)
//     .then((data) => dispatch(updateStatusSuccess(data)))
//     .catch((err) => dispatch(updateStatusError(err.meassage)));
// };
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
