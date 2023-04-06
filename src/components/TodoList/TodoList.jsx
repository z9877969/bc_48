import { memo } from "react";
import { useSelector } from "react-redux";
import s from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
