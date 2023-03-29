// ?q=bitcoin&apiKey=

import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2";
const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

// const getSearchedNews = async () => {
//   try {
//     const response = await axios.get("/everything", {
//       params: {
//         q: "bitcoin",
//         apiKey: API_KEY,
//       },
//     });
//     return response.data; // Promise.resolve(response.data)
//   } catch (error) {
//     console.log(error.message);
//     // return undefined; // Promise.resolve(undefined)
//     throw error; // Promise.reject(error)
//   }
// };
export const getSearchedNewsApi = (q, page = 1) => {
  return axios
    .get("/everything", {
      params: {
        q,
        page,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data);
};
