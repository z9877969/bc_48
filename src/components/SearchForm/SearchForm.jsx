import { Component } from "react";
import s from "./SearchForm.module.scss";

// = ({ onSubmit }) =>
class SearchForm extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
