import s from "./AuthForm.module.scss";
import { useState } from "react";

const AuthForm = ({ onSubmit, btnSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </label>
      <button type="submit">{btnSubmit}</button>
    </form>
  );
};

export default AuthForm;
