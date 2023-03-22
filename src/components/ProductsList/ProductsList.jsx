import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";

const ProductsList = (props) => {
  const { products } = props;

  return (
    <ul className="products">
      {products.map(({ id, url, price, currency, model, type, sale }) => {
        return (
          <ProductsListItem
            key={id}
            id={id}
            url={url}
            price={price}
            currency={currency}
            model={model}
            type={type}
            sale={sale}
          />
        );
      })}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
