import Header from "../Header/Header";

const TransactionsHistoryPage = ({ transType, changePage }) => {
  const backToMain = () => changePage();
  return <Header title={`Trans history - ${transType}`} onClick={backToMain} />;
};

export default TransactionsHistoryPage;
