import { Component } from "react";
import { ErrorBoundary } from "..";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";
// import { ErrorBoundary } from "../index";

class App extends Component {
  state = { query: "" };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    console.log("RENDER_APP");

    // if (this.state.query.length > 0) {
    //   throw new Error("Query so long");
    // }

    return (
      <div className="App">
        <SearchForm onSubmit={this.changeQuery} />
        {/* <ErrorBoundary> */}
          <NewsPage query={this.state.query} />
        {/* </ErrorBoundary> */}
      </div>
    );
  }
}

export default App;
