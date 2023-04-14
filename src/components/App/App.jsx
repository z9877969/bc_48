import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CounterPage from "pages/CounterPage";
import LoginPage from "pages/LoginPage";
import MainNav from "../MainNav/MainNav";
import RegisterPage from "pages/RegisterPage";
import TodoPage from "pages/TodoPage";
import { getUserData } from "redux/auth/authOperations";
import { selectorIsAuth } from "redux/auth/authSelectors";
import { selectorIsLoading } from "redux/loader/loaderSelectors";
import { useEffect } from "react";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = "/counter" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <MainNav />
      <Routes>
        <Route
          path="/todo"
          element={<PrivateRoute component={<TodoPage />} />}
        />
        <Route
          path="/counter"
          element={<PrivateRoute component={<CounterPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route path="*" element={<Navigate to="/counter" />} />
      </Routes>
    </>
  );
};

export default App;
