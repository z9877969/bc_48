import s from "./Button.module.scss";

const Button = ({ title, type = "button", onClick = null }) => {
  return (
    <button type={type} onClick={onClick} className={s.button}>
      {title}
    </button>
  );
};

export default Button;
