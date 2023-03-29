import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";

class App extends Component {
  state = { query: "" };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    console.log("RENDER_APP");

    return (
      <div className="App">
        <SearchForm onSubmit={this.changeQuery} />

        <NewsPage query={this.state.query} />
      </div>
    );
  }
}

export default App;
