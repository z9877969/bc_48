import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "services/firebaseApi";
import {
  addError,
  addRequest,
  addSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  updateStatusError,
  updateStatusRequest,
  updateStatusSuccess,
} from "./todoSlice";

export const addTodo = (newTodo) => (dispatch, getState) => {
  dispatch(addRequest());

  addTodoApi(newTodo)
    .then((todo) => dispatch(addSuccess(todo)))
    .catch((err) => dispatch(addError(err.message)));
};

export const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());
  getTodoApi()
    .then((data) => dispatch(getTodoSuccess(data)))
    .catch((err) => dispatch(getTodoError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest());

  removeTodoApi(id)
    .then((id) => dispatch(removeTodoSuccess(id)))
    .catch((err) => dispatch(removeTodoError(err.meassage)));
};

export const updateTodoStatus = (data) => (dispatch) => {
  dispatch(updateStatusRequest());

  updateTodoStatusApi(data)
    .then((data) => dispatch(updateStatusSuccess(data)))
    .catch((err) => dispatch(updateStatusError(err.meassage)));
};
