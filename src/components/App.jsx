import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";

class App extends Component {
  state = { query: "" };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    if (this.state.query.length > 0) {
      throw new Error("Query really long");
    }
    return (
      <>
        <SearchForm onSubmit={this.changeQuery} />

        <NewsPage query={this.state.query} />
      </>
    );
  }
}

export default App;
