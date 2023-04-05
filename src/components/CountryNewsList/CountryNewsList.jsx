import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsList from "../NewsList/NewsList";
import { getCountryNewsapi } from "../../services/newsApi";

const CountryNewsList = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getCountryNewsapi(country)
      .then(({ articles }) => {
        setNews(articles);
      })
      .catch((err) => console.log(err));
  }, [country]);

  return <NewsList news={news} />
};

export default CountryNewsList;
