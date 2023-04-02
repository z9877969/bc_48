import { useEffect, useRef, useState } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo as todoList } from "../../data/todo";

const TodoPage = () => {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) ?? todoList
  );
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo();

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect filter={filter} changeFilter={changeFilter} />
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

export default TodoPage;
