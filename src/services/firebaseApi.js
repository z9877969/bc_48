import axios from "axios";

const API_KEY = "AIzaSyB8SlD-pDQ4BnyBtC6Z7-a48eO4FmP0MyE";
const baseUrl = {
  DB: "https://bc-34-be4cc-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) => {
      return { ...todo, id: data.name };
    });
};

export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) =>
      data ? Object.entries(data).map(([id, todo]) => ({ ...todo, id })) : []
    );
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(() => id);
};

export const updateTodoStatusApi = ({ id, isDone }) => {
  return axios
    .patch(`/todo/${id}.json`, { isDone })
    .then(({ data }) => ({ ...data, id }));
};

// axios.defaults.headers.common.Authorization = "Bearer qlkjwrrlkwqrjlkqrjlkwjrq"

export const registerUserApi = ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => ({
      idToken,
      email,
      refreshToken,
      localId,
    }));
};

export const loginUserApi = ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }));
};

export const getUserDataApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post("/accounts:lookup", { idToken }, { params: { key: API_KEY } })
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};

// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH_TOKEN);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { refresh_token: refreshToken, id_token: idToken } }) => ({
      refreshToken,
      idToken,
    }));
};
