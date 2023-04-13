import { useDispatch } from "react-redux";
import AuthForm from "components/AuthForm/AuthForm";
import { registerUser } from "redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = (dataForm) => {
    dispatch(registerUser(dataForm));
  };

  return <AuthForm onSubmit={handleRegisterUser} btnSubmit="Register" />;
};

export default RegisterPage;
