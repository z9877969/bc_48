import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import productsValue from "../../data/products.json";
import "./MainPage.css";

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <ProductsFilter />
        <ProductsList products={productsValue} />
      </div>
    </main>
  );
};

export default MainPage;
