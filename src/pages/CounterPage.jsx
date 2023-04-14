import { useEffect, useState } from "react";

import Counter from "components/Counter/Counter";
import axios from "axios";
import { setIsLoading } from "redux/loader/loaderSlice";
import { useDispatch } from "react-redux";
import { useSetIsLoading } from "context/LoaderProvider";

const CounterPage = () => {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);

  const setIsLoading = useSetIsLoading();

  useEffect(() => {
    setIsLoading(true);
    // dispatch(setIsLoading(true));
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6"
      )
      .then(({ data: { articles } }) => setNews(articles))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return <Counter />;
};

export default CounterPage;
