import { useDispatch } from "react-redux";
import AuthForm from "components/AuthForm/AuthForm";
import { loginUser } from "redux/auth/authOperations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (dataForm) => {
    dispatch(loginUser(dataForm));
  };

  return <AuthForm onSubmit={handleLoginUser} btnSubmit="Login" />;
};

export default LoginPage;
