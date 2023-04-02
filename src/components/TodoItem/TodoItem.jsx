import { useEffect, useState, useRef } from "react";
import s from "../TodoList/TodoList.module.css";

const TodoItem = ({
  id,
  date,
  title,
  priority,
  descr,
  isDone,
  updateTodoStatus,
  removeTodo,
}) => {
  const [count, setCount] = useState(0);

  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <li key={id} className={s.toDoItem}>
      <button
        type="button"
        onClick={() => clearInterval(intervalIdRef.current)}
      >
        Stop
      </button>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
      <h3>Count: {count}</h3>
      <p className={`${s.descr} ${true && s.isDone}`}>PRIORITY - {priority}</p>
      <p className={`${s.descr} ${true && s.isDone}`}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDone}
          onChange={() => updateTodoStatus(id)}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={(e) => removeTodo(id)}>
        Remove
      </button>
    </li>
  );
  // }
};

export default TodoItem;
