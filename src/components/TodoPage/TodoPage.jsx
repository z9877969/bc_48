import { v4 as uuidv4 } from "uuid";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo as todoList } from "../../data/todo";
import { Component } from "react";

const createTodoList = (todo) =>
  Array(15)
    .fill(null)
    .map((el) => ({ ...todo, id: uuidv4() }));

class TodoPage extends Component {
  state = {
    todo: [],
    filter: "all",
    isOpen: false,
  };

  componentDidMount() {
    console.log("TodoPage_CDM");
    // window.addEventListener("keydown", handler)
    const todo = JSON.parse(localStorage.getItem("todo")) || todoList;

    this.setState({ todo });
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("snapshot :>> ", snapshot);
    // if (prevState.todo !== this.state.todo) {
    //   window.scrollTo({
    //     top: snapshot,
    //     behavior: "smooth",
    //   });
    // }

    if (prevState.isOpen !== this.state.isOpen) {
      // this.setState({ filter: "all" });
      this.setState({ isOpen: false });
    }

    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  addTodo = (todo) => {
    this.setState((prev) => ({
      todo: [...prev.todo, todo],
    }));
  };

  addTodoList = (todo) => {
    this.setState((prev) => ({
      todo: [...prev.todo, ...createTodoList(todo)],
    }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((el) => el.id !== id),
    }));
  };

  updateTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

  changeFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterTodoList = () => {
    const { filter, todo } = this.state;
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  render() {
    const { filter } = this.state;

    const filteredTodo = this.filterTodoList();
    console.log("TodoPage_Render");
    return (
      <>
        <ToDoForm addTodo={this.addTodo} addTodoList={this.addTodoList} />
        <button
          type="button"
          onClick={() => this.setState((p) => ({ isOpen: !p.isOpen }))}
        >
          Click - {`${this.state.isOpen}`}
        </button>
        <PrioritySelect filter={filter} changeFilter={this.changeFilter} />
        <ToDoList
          todo={filteredTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus}
        />
      </>
    );
  }
}

export default TodoPage;
