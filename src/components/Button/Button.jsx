import clsx from "clsx";
import { ButtonStyled } from "./Button.styled";

const Button = ({ title, variant }) => {
  return <ButtonStyled variant={variant}>{title}</ButtonStyled>;
};

export default Button;

<>
  <Button title="Ok" variant={"success"} />
  <Button title="Cancel" variant={"error"} />
</>;
