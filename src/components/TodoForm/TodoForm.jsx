import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "redux/todo/todoOperations";
import s from "./TodoForm.module.scss";
import { useFormik } from "formik";

const initialValues = {
  date: "2023-03-31",
  descr: "",
  priority: "",
};

const testFormObj = {
  str: "", //Yup.string().required("Required string"),
  str2: "", // Yup.string().min(5, "Min 5"),
  // str3: "", // Yup.string().max(8, "Max 8"),
};

// const schema = Yup.object(testFormObj);

const validateSchema = async () => {
  const errors = {};
  for (const key in testFormObj) {
    if (key === "str") {
      const schema1 = Yup.string()
        .required("Required string")
        .min(5, "Str min 5");

      try {
        await schema1.validate(testFormObj[key]);
      } catch (error) {
        errors[key] = error.message;
      }
    }
    if (key === "str2") {
      const schema2 = Yup.string().min(5, "Min 5");
      try {
        await schema2.validate(testFormObj[key]);
      } catch (error) {
        errors[key] = error.message;
      }
    }
  }
  return errors;
};

// validateSchema().then((data) => console.log("data :>> ", data));

const validationSchema = Yup.object({
  date: Yup.date().required(),
  descr: Yup.string()
    .min(2, "Must be more than 1 letter")
    .max(25, "Must be less than 26 letter")
    .required("Must be required"),
  priority: Yup.string().required("Priority required"),
});

const TodoForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(addTodo({ ...values, isDone: false }));
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  // console.log("formik :>> ", formik);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
        />
        {touched.date && errors.date && <p>{errors.date}</p>}
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={values.descr}
          onChange={handleChange}
        />
        {touched.date && errors.descr && <p>{errors.descr}</p>}
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value="low"
            checked={values.priority === "low"}
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
            checked={values.priority === "medium"}
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
            checked={values.priority === "high"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
      {touched.priority && errors.priority && <p>{errors.priority}</p>}
      <button className={s.submit} type="submit">
        {isLoading ? "Loading..." : "Ok"}
      </button>
    </form>
  );
};

export default TodoForm;
