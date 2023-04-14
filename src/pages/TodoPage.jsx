import { useDispatch, useSelector } from "react-redux";

import PrioritySelect from "components/PrioritySelect/PrioritySelect";
import ToDoForm from "components/TodoForm/TodoForm";
import ToDoList from "components/TodoList/TodoList";
import { getTodo } from "redux/todo/todoOperations";
import { selectIsLocalId } from "redux/auth/authSelectors";
import { useEffect } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isLacalId = useSelector(selectIsLocalId);

  useEffect(() => {
    isLacalId && dispatch(getTodo());
  }, [dispatch, isLacalId]);

  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
