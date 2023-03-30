import Container from "../Container/Container";
import LabeledInput from "../LabeledInput/LabeledInput";
import s from "./TransactionForm.module.scss";

const TransactionForm = () => {
  return (
    <section className="section">
      <Container>
        <form className={s.form}>
          <LabeledInput label={"Дата"} type="date" name="date" />
          <LabeledInput label={"Час"} type="time" name="time" />
          <LabeledInput
            label={"Сума"}
            type="text"
            name="sum"
            placeholder="Вкажіть суму"
          />
          <LabeledInput
            label={"Валюта"}
            type="button"
            name="currency"
            value="UAH"
          />
          <LabeledInput
            label={"Коментар"}
            type="text"
            name="text"
            placeholder="Коментар..."
            autoComplete="off"
          />
          <button type="submit" className={s.btnForm}>
            Додати
          </button>
        </form>
      </Container>
    </section>
  );
};

export default TransactionForm;
