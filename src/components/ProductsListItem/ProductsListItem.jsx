import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./ProductsListItem.module.scss";

const ProductsListItem = ({
  sale: isSale,
  url,
  model,
  price,
  currency,
  addProduct,
  id,
}) => {
  return (
    <li className={s.item}>
      <div className={s.imageWrapper}>
        <p className={clsx(s.sale, isSale && s.saleActive)}>Акція</p>
        <img className={s.image} src={url} alt={model} />
      </div>
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>
        <span className={s.price}>{price ? price : "Товар відсутній"}</span>
        {price > 0 && <span className={s.currency}>{currency}</span>}
      </div>
      <button
        onClick={(e) =>
          addProduct({
            sale: isSale,
            url,
            model,
            price,
            currency,
            id,
          })
        }
        className={s.btnBuy}
        type="button"
      >
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
