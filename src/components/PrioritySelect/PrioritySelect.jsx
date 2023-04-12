import { useDispatch, useSelector } from "react-redux";
import { selectorFilter } from "redux/todo/todoSelectors";
import { changeFilter } from "../../redux/todo/todoSlice";
import s from "./PrioritySelect.module.scss";

const PrioritySelect = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorFilter);

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Choose TODO priority:</h3>
      <select
        name="priority"
        className={s.select}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e))}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PrioritySelect;
