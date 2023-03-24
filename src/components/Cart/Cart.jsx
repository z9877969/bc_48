import PropTypes from "prop-types";
import {
  BtnClose,
  CartContainer,
  ProductsList,
  ProductItem,
  ProductImage,
  DescrWrapper,
  DescrPrice,
  DescrCurrency,
  BtnRemove,
} from "./Cart.styled";
import sprite from "../../assets/icons/sprite.svg";
import Button from "../Button/Button";

const Cart = ({ isCartOpen, handleCloseCart, products, removeProduct }) => {
  // state = {isCartOpen: false}
  return (
    <CartContainer isOpen={isCartOpen}>
      <BtnClose type="button" onClick={handleCloseCart}>
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </BtnClose>
      <ProductsList>
        {products.map(({ url, model, price, currency, amount, id }) => (
          <ProductItem key={id}>
            <ProductImage src={url} alt={model} />
            <DescrWrapper>
              <h3>{model}</h3>
              <DescrPrice>{price}</DescrPrice>
              <DescrCurrency>{currency}</DescrCurrency>
            </DescrWrapper>
            <span>Amount: {amount}</span>
            <BtnRemove type="button" onClick={() => removeProduct(id)}>
              <svg>
                <use href={sprite + "#icon-bin2"}></use>
              </svg>
            </BtnRemove>
          </ProductItem>
        ))}
      </ProductsList>
      {products.length > 0 && <Button title={"Submit"} variant="success" />}
    </CartContainer>
  );
};

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default Cart;
