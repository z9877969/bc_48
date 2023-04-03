const Button = ({ type, onClick, className, title }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
