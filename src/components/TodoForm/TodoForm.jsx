import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./TodoForm.module.scss";

const TodoForm = ({ addTodo }) => {
  // const [date, setDate] = useState("2023-03-31");
  // const [title, setTitle] = useState("");
  // const [descr, setDescr] = useState("");
  // const [priority, setPriority] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log("name :>> ", name);
  //   console.log("value :>> ", value);
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "title":
  //       setTitle(value);
  //       break;
  //     case "descr":
  //       setDescr(value);
  //       break;
  //     case "priority":
  //       setPriority(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const [form, setForm] = useState({
    date: "2023-03-31",
    title: "",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...form, isDone: false, id: uuidv4() });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
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
            checked={form.priority === "low"}
            onChange={handleChange}
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
            checked={form.priority === "medium"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
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
            checked={form.priority === "high"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

// const authFormOptions = [
//   {
//     type: "text",
//     label: "Emeil",
//     placeholder: "Enter email",
//     name: "email",
//   },
//   {
//     type: "text",
//     label: "Password",
//     placeholder: "Enter password",
//     name: "password",
//   },
//   {
//     type: "text",
//     label: "ConfirmPassword",
//     placeholder: "Enter password",
//     name: "confirmPassword",
//   },
// ];

// const Form = ({ formOptions, initialValues }) => {
//   const [form, setForm] = useState(initialValues);
//   // useState()
//   // useState()
//   // useState()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   return (
//     <form>
//       {formOptions.map((el) => (
//         <>
//           <p>{el.label}</p>
//           <input
//             type={el.type}
//             name={el.name}
//             value={form[el.name]}
//             onChange={handleChange}
//           />
//         </>
//       ))}
//     </form>
//   );
// };

// <Form
//   formOptions={authFormOptions}
//   initialValues={{
//     email: "",
//     password: "",
//     confirmPassword: "",
//   }}
// />;

// class ToDoFormClass extends Component {
//   static propTypes = {
//     addTodo: PropTypes.func.isRequired,
//   };

//   state = {
//     date: "",
//     title: "",
//     descr: "",
//     priority: "",
//   };

//   handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     // target -> input ->
//     if (type === "checkbox") {
//       if (this.state.dayPeriods.length === 2 && checked) return;
//       this.setState((prev) => ({
//         dayPeriods: checked
//           ? [...prev.dayPeriods, value]
//           : prev.dayPeriods.filter((el) => el !== value),
//       }));
//       return;
//     }

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const todo = { ...this.state, id: uuidv4(), isDone: false };
//     this.props.addTodo(todo);
//   };

//   render() {
//     const { date, title, descr, priority } = this.state;

//     // console.log(this.props.todo);

//     return null;
//   }
// }

export default TodoForm;
