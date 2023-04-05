import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import AboutPage from "../pages/AboutPage";
// import HomePage from "../pages/HomePage";
// import CountryNewsPage from "../pages/NewsPage";
// import SearchedNewsPage from "../pages/SearchedNewsPage";
// import CountryNewsList from "./CountryNewsList/CountryNewsList";
import MainNav from "./MainNav/MainNav";

const HomePage = lazy(() => import("../pages/HomePage"));
const CountryNewsPage = lazy(() => import("../pages/NewsPage"));
const SearchedNewsPage = lazy(() => import("../pages/SearchedNewsPage"));
const CountryNewsList = lazy(() => import("./CountryNewsList/CountryNewsList"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<CountryNewsPage />}>
            {/* /news/:country -> /news/fr */}
            <Route
              path=":country"
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <CountryNewsList />
                </Suspense>
              }
            />
          </Route>
          <Route path="search-news" element={<SearchedNewsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/some-news/:urlToImage" element={<h1>SomeNews</h1>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;

// const N = ({ to }) => {
//   const navigate = useNavigate();
//   navigate(to);
//   return null;
// };
