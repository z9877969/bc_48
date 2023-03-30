import s from "./LabeledInput.module.scss";

const LabeledInput = ({ label, ...inputProps }) => {
  return (
    <label className={s.label}>
      <span className={s.labelTitle}>{label}</span>
      <input {...inputProps} />
    </label>
  );
};

export default LabeledInput;
