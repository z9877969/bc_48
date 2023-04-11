import { memo } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const todo = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);

  const filterTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo();

  return (
    <ul className={s.container}>
      {filteredTodo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
