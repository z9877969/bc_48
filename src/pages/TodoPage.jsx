import ToDoForm from "components/TodoForm/TodoForm";
import ToDoList from "components/TodoList/TodoList";
import PrioritySelect from "components/PrioritySelect/PrioritySelect";
import { useEffect } from "react";
import { getTodo } from "redux/todo/todoOperations";
import { useDispatch, useSelector } from "react-redux";

// const store = {
//   dispatch: () => {} // ref
// }

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
