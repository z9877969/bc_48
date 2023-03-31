import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo as todoList } from "../../data/todo";
import { Component, useEffect, useRef, useState } from "react";

const TodoPage = ({ qwe }) => {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) ?? []
  );
  const [filter, setFilter] = useState("all");
  // const [a, setA] = useState(() => console.log("useState"));

  const addTodo = (todo) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
    // this.setState(prevState => ({todo: [...prevState.todo, todo]}))
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo();

  const firstRenderRef = useRef(true); // current -> true

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    console.log("UseEffect_TOdo");
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // useEffect(() => {
  //   console.log("UseEffect_Filter");
  // }, [filter]);

  // useEffect(() => {
  //   console.log("UseEffect_firstRender");
  // }, []);

  // useEffect(() => {}, [qwe]);

  console.log("Render");

  return (
    <>
      <ToDoForm
        addTodo={addTodo}
        // todo={todo}
      />
      <PrioritySelect filter={filter} changeFilter={changeFilter} />
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

class TodoPageClass extends Component {
  state = {
    todo: [],
    filter: "all",
  };

  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem("todo")) || todoList;
    this.setState({ todo });
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

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
    const { filter, todo } = this.state;

    const filteredTodo = this.filterTodoList();
    return (
      <>
        <ToDoForm
          addTodo={this.addTodo}
          // todo={todo}
        />
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

// class Component {
//   constructor(props){
//    this.props = props;
//   }
// }

// class Test extends Component {
//   constructor(props) {
//     super(props);
//     // this.props = props;
//   }

//   getValue(){
//     return this.props.a + this.props.b
//   }

//   render(){

//     return <h1>Test - {this.getValue()}</h1>
//   }
// }

// const test = new Test({ a: 2, b: 6 });

// <Test a={2} b={6} />;
