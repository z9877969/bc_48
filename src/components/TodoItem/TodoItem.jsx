import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/todo/todoActions";
import s from "../TodoList/TodoList.module.css";

const TodoItem = ({ id, date, title, priority, descr, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
      <p className={`${s.descr} ${true && s.isDone}`}>PRIORITY - {priority}</p>
      <p className={`${s.descr} ${true && s.isDone}`}>{descr}</p>
      <label className={s.status}>
        <input type="checkbox" name="status" checked={isDone} onChange={null} />
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
