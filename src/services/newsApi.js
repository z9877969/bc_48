import axios from "axios";

// ?country=us&=
const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";
axios.defaults.baseURL = "https://newsapi.org/v2";

export const getCountryNewsapi = (country) => {
  return axios
    .get("/top-headlines", {
      params: {
        country,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data);
};
