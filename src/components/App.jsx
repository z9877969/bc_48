import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";
// import { ErrorBoundary } from "../index";

class App extends Component {
  state = { query: "" };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    // if (this.state.query.length > 0) {
    //   throw new Error("Query so long");
    // }

    return (
      <div className="App">
        <SearchForm onSubmit={this.changeQuery} />

        <NewsPage query={this.state.query} />
      </div>
    );
  }
}

export default App;
