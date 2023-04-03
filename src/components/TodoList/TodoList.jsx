import PropTypes from "prop-types";
import s from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { memo } from "react";

const TodoList = ({ todo = [], removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
  removeTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
};

export default memo(TodoList);
