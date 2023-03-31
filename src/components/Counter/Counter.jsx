import { Component, useState } from "react";
import s from "./Counter.module.css";

// use
// 

// const useTest = () => {
//   useState()
// }



const Counter = () => {
  // const [value, setValue] = useState(25);
  // const [age, setAge] = useState(32);
  const [count, setCount] = useState(45);

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 10);
    // setCount(prevCount => prevCount - 10); // 45 - 10
    // setCount(prevCount => prevCount - 20); // 45 - 10
    // setCount(prevCount => prevCount - 10); // 45 - 10
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 15);
  };

  const handleReset = () => {
    setCount(0);
  };

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

class CounterClass extends Component {
  state = {
    count: 25,
  };

  handleDecrementClick = () => {
    this.setState((prevState) => ({ count: prevState.count - 10 }));
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            onClick={this.handleDecrementClick}
            className={s.btn}
            type="button"
          >
            -
          </button>
          <button
            onClick={() => {
              this.setState({ count: 0 });
            }}
            className={s.btn}
            type="button"
          >
            0
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                count: prevState.count + 25,
              }));
            }}
            className={s.btn}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
