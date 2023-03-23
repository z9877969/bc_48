import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import productsValue from "../../data/products.json";
// import "./MainPage.css";

const containerStyles = {
  width: "840px",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
};

const MainPage = () => {
  return (
    <main>
      <div style={containerStyles}>
        <ProductsFilter />
        <ProductsList products={productsValue} />
      </div>
    </main>
  );
};

export default MainPage;
