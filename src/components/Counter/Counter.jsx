import { Component } from "react";
import s from "./Counter.module.css";

// console.log("s :>> ", s);

// const h = (e) => {
//   if (e.target.nodeName !== "BUTTON") return;
//   e.target.dataset.action = "d" && console.log("click decr");
//   e.target.dataset.action = "r" && console.log("click reset");
//   e.target.dataset.action = "i" && console.log("click incr");
// };

class Counter extends Component {
  #iS = {
    count: 25,
    a: 21,
    b: [],
  };

  state = this.#iS;

  handleDecrementClick = () => {
    // this.state.count = 50; // ref1
    this.setState((prevState) => ({ count: prevState.count - 10 }));
    // this.setState((prevState) => ({ count: prevState.count - 10 }));
    // this.setState((prevState) => ({ count: prevState.count - 10 }));
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

// const CounterFn = () => {};

export default Counter;

const o = {
  a: 21,
};

const b = o;

b.a = 54;

console.log("o  :>> ", o);
