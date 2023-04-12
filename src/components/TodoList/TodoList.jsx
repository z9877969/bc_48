import { memo } from "react";
import { useSelector } from "react-redux";
import { selectorFilteredTodo } from "redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const filteredTodo = useSelector(selectorFilteredTodo);

  console.log("TodoList_Render");

  return (
    <ul className={s.container}>
      {filteredTodo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
