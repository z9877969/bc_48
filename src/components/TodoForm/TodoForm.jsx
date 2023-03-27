import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./TodoForm.module.scss";

class ToDoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  state = {
    date: "",
    title: "",
    descr: "",
    priority: "",
    dayPeriods: [],
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (this.state.dayPeriods.length === 2 && checked) return;
      this.setState((prev) => ({
        dayPeriods: checked
          ? [...prev.dayPeriods, value]
          : prev.dayPeriods.filter((el) => el !== value),
      }));
      return;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = { ...this.state, id: uuidv4(), isDone: false };
    this.props.addTodo(todo);
  };

  render() {
    const { date, title, descr, priority, dayPeriods } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            type="date"
            value={date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <div>
          <label>
            Morning
            <input
              type="checkbox"
              name="dayPeriods"
              value="morning"
              checked={dayPeriods.includes("morning")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Afternoon
            <input
              type="checkbox"
              name="dayPeriods"
              value="afternoon"
              checked={dayPeriods.includes("afternoon")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Evening
            <input
              type="checkbox"
              name="dayPeriods"
              value="evening"
              // checked={dayPeriods.includes("evening")}
              checked={dayPeriods.includes("evening")}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

// ToDoForm.propTypes = {
//   addTodo: PropTypes.func.isRequired,
// };

export default ToDoForm;

// class Test {
//   static value = "static value";

//   value = 25;
// }

// const test = new Test();

// console.log("test.value :>> ", test.value);
// console.log("Test.value :>> ", Test.value);
