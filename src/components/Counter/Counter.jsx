import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/counterSlice";
// import {
//   counterDecrement,
//   counterIncrement,
//   counterReset,
// } from "../../redux/counter/counterActions";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleDecrement = () => {
    // dispatch(counterDecrement(20));
    dispatch(decrement(20)); // {type: "qwe/decrement", payload: 20}
  };

  const handleIncrement = () => {
    // dispatch(counterIncrement(45));
    dispatch(increment(45));
  };

  const handleReset = () => {
    // dispatch(counterReset());
    dispatch(reset());
  };

  useEffect(() => {
    // fetch().then(d => dispatch({type: "counter/init", payload: d}))
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button onClick={handleDecrement} className={s.btn} type="button">
          -
        </button>
        <button onClick={handleReset} className={s.btn} type="button">
          0
        </button>
        <button onClick={handleIncrement} className={s.btn} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
