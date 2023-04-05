import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import s from "./SearchForm.module.scss";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useSearchParams(); // location.search

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ query: input, page: 1 });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="input"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
