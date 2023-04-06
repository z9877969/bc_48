import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";

// const rootReducer = (state = { a: 21, todo: [], c: false }, action) => {
//   if (action.type === "removeTodo") {
//     return {
//       ...state,
//       todo: state.todo.filter((el) => el.id !== action.payload),
//     };
//   }
//   return state;
// };

// const reducerUser = (state = { name: "", email: "" }, action) => {
//   return state;
// };
const userReducer = combineReducers({
  name: (state = null, action) => {
    console.log("reduceruserName");
    return state;
  }, // nameReducer
  email: (state = null, action) => state, // emailReducer
});

const reducerC = (state = null, action) => {
  console.log("reducerC");
  return state;
};

const action = { type: "removeTodo", payload: "qwe" };

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  c: reducerC,
  count: counterReducer,
});

const prerloadState = {
  user: {
    name: "",
    email: "",
  },
  todo: JSON.parse(localStorage.getItem("todo")) || [],
  c: null,
  count: 60,
};

export const store = createStore(
  rootReducer,
  prerloadState,
  composeWithDevTools()
);
