import clsx from "clsx";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodoStatus } from "redux/todo/todoOperations";
import { removeTodoApi, updateTodoStatusApi } from "services/firebaseApi";
import { remove, updateStatus } from "../../redux/todo/todoSlice";
import s from "./TodoItem.module.scss";

const TodoItem = ({ id, date, title, priority, descr, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      {title && <h3 className={clsx(s.title, isDone && s.isDone)}>{title}</h3>}
      <p className={clsx(s.descr, isDone && s.isDone)}>PRIORITY - {priority}</p>
      {descr && <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>}
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDone}
          onChange={() => dispatch(updateTodoStatus({ id, isDone: !isDone }))}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => dispatch(removeTodo(id))}>
        Remove
      </button>
    </li>
  );
  // }
};

export default TodoItem;
