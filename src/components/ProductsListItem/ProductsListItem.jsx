import PropTypes from "prop-types";

const ProductsListItem = ({ sale, url, model, price, currency }) => {
  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        <p className={`products__sale ${sale ? "products__sale--active" : ""}`}>
          Акція
        </p>
        <img className="products__image" src={url} alt={model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{model}</h3>
        <span className="products__price">
          {price ? price : "Товар відсутній"}
        </span>
        {price > 0 && <span className="products__currency">{currency}</span>}
      </div>
      <button className="products__btn-buy" type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  sale: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ProductsListItem;
