import {
  memo,
  PureComponent,
  useCallback,
  // useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo as todoList } from "../../data/todo";
import {
  useToggleBg,
  // WrapperContext
} from "../../context/ChangeBgProvider";
import Button from "../Button/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useTodo } from "../../hooks/useTodo";

const TodoPage = () => {
  // const toggleColor = useContext(WrapperContext);
  const toggleBg = useToggleBg();

  const { removeTodo, todo, addTodo, updateTodoStatus } = useTodo();
  const [filter, setFilter] = useLocalStorage("all", "filter");

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodo = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  // const filteredTodo = filterTodo();

  console.log("Render TodoPage");

  return (
    <>
      <Button onClick={toggleBg} title={"change color"} />
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

// const fn = (a, b) => {
//   return a + b;
// };

// fn(1, 2) ; // -> 3
// fn(3, 4) ; // -> 7
// fn(3, 4) ; // -> 7

// const uSECallback = (cb, arr) => {
//   let memoArr = null;
//   let memoCb = null;
//   const arrStr = JSON.stringify(arr);
//   if (memoArr !== arrStr) {
//     memoArr = arrStr;
//     memoCb = cb;
//   }
//   // arr -

//   return memoCb;
// };

// const fn = () => {
//   return (() => 1 + 2)() + (() => 5 * 6)();
// };

// fn()
