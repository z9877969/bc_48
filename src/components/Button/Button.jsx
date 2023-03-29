import s from "./Button.module.scss";

const Button = ({ onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      More
    </button>
  );
};

export default Button;
