import axios from "axios";

axios.defaults.baseURL = "https://bc-34-be4cc-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios.post("/todo.json", todo).then(({ data }) => {
    return { ...todo, id: data.name };
  });
};

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then(({ data }) =>
      Object.entries(data).map(([id, todo]) => ({ ...todo, id }))
    );
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then(() => id);
};

export const updateTodoStatusApi = ({ id, isDone }) => {
  return axios
    .patch(`/todo/${id}.json`, { isDone })
    .then(({ data }) => ({ ...data, id }));
};
