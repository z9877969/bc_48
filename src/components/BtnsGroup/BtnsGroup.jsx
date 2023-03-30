import Container from "../Container/Container";
import { BtnsWrapper, Button } from "./BtnsGroup.styled";

const options = [
  {
    titile: "Всі витрати",
    type: "button",
    redirectTo: "expense",
    f: "g",
  },
  {
    titile: "Всі доходи",
    type: "button",
    redirectTo: "income",
    f: "n",
  },
];

const BtnsGroup = ({ changePage }) => {
  return (
    <section>
      <Container>
        <BtnsWrapper>
          {options.map((el) => (
            <Button
              key={el.redirectTo}
              onClick={() => changePage(el.redirectTo)}
              type={el.type}
            >
              {el.titile}
            </Button>
          ))}
          {/* <Button onClick={() => changePage("expense")} type="button">
            Всі витрати
          </Button>
          <Button onClick={() => changePage("income")} type="button">
            Всі доходи
          </Button> */}
        </BtnsWrapper>
      </Container>
    </section>
  );
};

export default BtnsGroup;
