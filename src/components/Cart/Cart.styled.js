import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;

  width: 400px;
  height: 500px;
  background-color: darkslategray;
  overflow-y: scroll;
  padding: 20px 15px 30px;
  z-index: 25;
  transition: transform 0.5s linear;

  ${(props) => {
    return props.isOpen && `transform: translateX(-100%);`;
  }}
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const BtnClose = styled(Button)`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-bottom: 20px;
  background-color: lightslategray;
  border: 1px solid #212121;
  border-radius: 50%;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const ProductItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 100px;
  border: 1px solid #212121;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 100%;
`;

export const DescrWrapper = styled.div`
  margin-left: 20px;
  padding: 10px;
  color: bisque;

  & h3 {
    margin: 0;
  }
`;

const ProductDescr = styled.span`
  color: lightblue;
`;

export const DescrPrice = styled(ProductDescr)`
  font-size: 20px;
`;

export const DescrCurrency = styled(ProductDescr)`
  font-size: 24px;
`;

export const BtnRemove = styled(Button)`
  margin-left: auto;
  padding: 10px;
  border: none;
  background-color: burlywood;
  border-radius: 10px;
  width: 60px;
  height: 60px;
`;
