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

const Cart = () => {
  return (
    <CartContainer isOpen={true}>
      <BtnClose type="button">
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </BtnClose>
      <ProductsList>
        <ProductItem>
          <ProductImage
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <DescrWrapper>
            <h3>ZTE RedMagic</h3>
            <DescrPrice>11999</DescrPrice>
            <DescrCurrency>UAH</DescrCurrency>
          </DescrWrapper>
          <BtnRemove type="button">
            <svg>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </BtnRemove>
          {/* <Button title="Remove" variant={"error"} /> */}
        </ProductItem>
      </ProductsList>
      <Button title={"Submit"} variant="success" />
    </CartContainer>
  );
};

export default Cart;
