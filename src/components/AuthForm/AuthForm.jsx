import { useState } from "react";
import { loginUserApi } from "services/firebaseApi";

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
    // dispatch(loginUser(form))
    // loginUserApi(form)
    // console.log(form);
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">{btnSubmit}</button>
    </form>
  );
};

export default AuthForm;
