import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import s from "./ProductsList.module.scss";

const ProductsList = (props) => {
  const { products, addProduct } = props;

  return (
    <ul className={s.list}>
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
            addProduct={addProduct}
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
