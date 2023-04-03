import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTodo = () => {
  const [todo, setTodo] = useLocalStorage([], "todo");

  const addTodo = useCallback(
    (todo) => {
      setTodo((prevTodo) => [...prevTodo, todo]);
    },
    [setTodo]
  ); // render1 -> ref1 | rerender -> ref2

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
    },
    [setTodo]
  );

  const updateTodoStatus = useCallback(
    (id) => {
      setTodo((prevTodo) =>
        prevTodo.map((el) =>
          el.id === id ? { ...el, isDone: !el.isDone } : el
        )
      );
    },
    [setTodo]
  );

  return { todo, addTodo, removeTodo, updateTodoStatus };
};
