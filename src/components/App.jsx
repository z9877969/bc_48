import { Component } from "react";
import MainPage from "./MainPage/MainPage";
import TransactionsHistoryPage from "./TransactionsHistoryPage/TransactionsHistoryPage";

class App extends Component {
  state = {
    activePage: "main", // income | expense
  };

  changePage = (activePage = "main") => {
    this.setState({ activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        {activePage === "main" && <MainPage changePage={this.changePage} />}
        {activePage === "income" && (
          <TransactionsHistoryPage
            transType={activePage}
            changePage={this.changePage}
          />
        )}
        {activePage === "expense" && (
          <TransactionsHistoryPage
            transType={activePage}
            changePage={this.changePage}
          />
        )}
      </>
    );
  }
}

export default App;
