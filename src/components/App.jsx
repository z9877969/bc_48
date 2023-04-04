import { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import Nav from "./Nav/Nav";
import NewsList from "./NewsList/NewsList";

const IdComponent = () => {
  const { id } = useParams();

  return <h2>content by ID - {id} </h2>;
};

const ProductsList = () => {
  return (
    <>
      <h1>ProductsList</h1>
      <Link to="/product-item/1">Product 1</Link>
      <Link to="/product-item/2">Product 2</Link>
      <Link to="/product-item/3">Product 3</Link>
      <Link to="/product-item/4">Product 4</Link>
      <Link to="/product-item/5">Product 5</Link>
    </>
  );
};

const ProductItem = () => {
  const { productId } = useParams();

  return <h1>ProductsItem - {productId}</h1>;
};

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products-list" element={<ProductsList />} />
        <Route path="/product-item/:productId" element={<ProductItem />} />
        <Route path="/news" element={<NewsPage />}>
          <Route path=":country" element={<NewsList />}>
            <Route path=":id" element={<IdComponent />} />
          </Route>
          {/* <Route path="ua" element={<NewsList country={"UA"} />} />
          <Route path="pl" element={<NewsList country={"PL"} />} />
          <Route path="fr" element={<NewsList country={"FR"} />} />
          <Route path="us" element={<NewsList country={"US"} />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
