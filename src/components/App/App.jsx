import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "../MainNav/MainNav";
import Counter from "pages/CounterPage";
import TodoPage from "pages/TodoPage";
import { selectorIsAuth } from "redux/auth/authSelectors";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import { useEffect } from "react";
import { getUserData } from "redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <MainNav />
      {isAuth ? (
        <Routes>
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Navigate to={"/counter"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
