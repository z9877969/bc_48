import BtnsGroup from "../BtnsGroup/BtnsGroup";
import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";

const MainPage = ({ changePage }) => {
  return (
    <>
      <Header title={"Журнал витрат"} />
      <TransactionForm />
      <BtnsGroup changePage={changePage} />
    </>
  );
};

export default MainPage;
