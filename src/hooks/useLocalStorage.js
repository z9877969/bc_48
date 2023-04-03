import { useEffect, useState } from "react";

export const useLocalStorage = (initialValues, key) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValues
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
