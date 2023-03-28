import { Component, PureComponent } from "react";
import s from "../TodoList/TodoList.module.css";

class TodoItem extends PureComponent {
  //   static getDerivedStateFromProps(newProps, curState) {
  //     if (newProps.priority === "low") {
  //       return { ...curState, count: 10 };
  //     }
  //     return null;
  //   }

  #intervalId;

  state = {
    count: 0,
  };

  componentDidMount() {
    this.#intervalId = setInterval(() => {
      console.log("item");
      this.setState((p) => ({
        count: p.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.#intervalId);
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     const newPropsStr = JSON.stringify(newProps);
  //     const newStateStr = JSON.stringify(newState);
  //     const curSateStr = JSON.stringify(this.state);
  //     const curPropsStr = JSON.stringify(this.props);
  //     if (newPropsStr !== curPropsStr || newStateStr !== curSateStr) return true;
  //     return false; // no render
  //   }

  //   componentDidMount() {
  //     console.log("CDM");
  //   }

  render() {
    const {
      id,
      date,
      title,
      priority,
      descr,
      isDone,
      updateTodoStatus,
      removeTodo,
    } = this.props;

    // console.log("TodoItem_Render");

    return (
      <li key={id} className={s.toDoItem}>
        <p className={s.date}>{date}</p>
        <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
        <h3>Count: {this.state.count}</h3>
        <p className={`${s.descr} ${true && s.isDone}`}>
          PRIORITY - {priority}
        </p>
        <p className={`${s.descr} ${true && s.isDone}`}>{descr}</p>
        <label className={s.status}>
          <input
            type="checkbox"
            name="status"
            checked={isDone}
            onChange={() => updateTodoStatus(id)}
          />
          Done
        </label>
        <button className={s.todoBtn} onClick={(e) => removeTodo(id)}>
          Remove
        </button>
      </li>
    );
  }
}

export default TodoItem;
