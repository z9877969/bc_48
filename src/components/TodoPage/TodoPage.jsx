import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo as todoList } from "../../data/todo";
import { Component } from "react";

class TodoPage extends Component {
  state = {
    todo: todoList,
    filter: "all",
  };

  addTodo = (todo) => {
    this.setState((prev) => ({
      todo: [...prev.todo, todo],
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

    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
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
