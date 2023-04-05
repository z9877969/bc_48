import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button/Button";
import NewsList from "../components/NewsList/NewsList";
import SearchForm from "../components/SearchForm/SearchForm";
import { getSearchedNewsApi } from "../services/newsApi";

const SearchedNewsPage = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useSearchParams();

  const query = search.get("query"); // location.search
  const page = search.get("page");

  const changePage = () => {
    setSearch({ query, page: Number(page) + 1 });
  };

  useEffect(() => {
    if (!query) return;
    getSearchedNewsApi(query, page)
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [query, page]);

  return (
    <>
      <SearchForm />
      {news.length > 0 && <NewsList news={news} />}
      {news.length > 0 && <Button title={"Load More"} onClick={changePage} />}
    </>
  );
};

export default SearchedNewsPage;
