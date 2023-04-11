import { useState, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodoApi } from "services/firebaseApi";
import { addTodo } from "redux/todo/todoOperations";
// import { add as addTodo } from "../../redux/todo/todoSlice";

const initialState = {
  date: "2023-03-31",
  descr: "",
  priority: "",
};

// const addTodo = (newTodo, dispatch) => {
//   dispatch({ type: "request" }); // isLoading: true
//   fetch("", newTodo)
//     .then((data) => dispatch({ type: "success", payload: data })) // isLoading: false | colection.push(payload)
//     .catch((err) => dispatch({ type: "error", payload: err.message })); // isLoading: false | error: payload
// };

// const addTodoOperation = (newTodo) => {
//   return (dispatch, getState) => {
//     dispatch({ type: "request" }); // isLoading: true
//     fetch("", newTodo)
//       .then((data) => dispatch({ type: "success", payload: data })) // isLoading: false | colection.push(payload)
//       .catch((err) => dispatch({ type: "error", payload: err.message })); // isLoading: false | error: payload
//   };
// };

const TodoForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...form, isDone: false, id: uuidv4() };

    dispatch(addTodo(newTodo));

    setForm(initialState);
  };

  console.log("TodoForm_Render");

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
        />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value="low"
            checked={form.priority === "low"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="priority"
            value="medium"
            checked={form.priority === "medium"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
            value="high"
            checked={form.priority === "high"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        {isLoading ? "Loading..." : "Ok"}
      </button>
    </form>
  );
};

export default TodoForm; // memo TodoForm
