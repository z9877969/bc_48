import { ButtonStyled } from "./Button.styled";

const Button = ({ title, variant }) => {
  return <ButtonStyled variant={variant}>{title}</ButtonStyled>;
};

export default Button;
