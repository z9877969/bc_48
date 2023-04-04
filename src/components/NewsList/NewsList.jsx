import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getCountryNewsapi } from "../../services/newsApi";

const NewsList = () => {
  // const { country } = useParams();
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getCountryNewsapi(country)
      .then(({ articles }) => {
        setNews(articles);
      })
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <>
      <h2>News {country} </h2>
      <Outlet />
      <ol>
        {news.map(({ title, url }) => (
          <li key={url}>{title}</li>
        ))}
      </ol>
    </>
  );
};

export default NewsList;
