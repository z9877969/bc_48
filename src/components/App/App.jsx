import { Component } from "react";
import Cart from "../Cart/Cart";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

class App extends Component {
  state = {
    isCartOpen: false,
    products: [],
  };

  handleCartOpen = () => {
    this.setState({ isCartOpen: true });
  };

  handleCloseCart = () => {
    this.setState({ isCartOpen: false });
  };

  addProduct = (newProduct) => {
    this.setState((prevState) => {
      const isProduct = prevState.products.some((el) => el.id === newProduct.id);
      return {
        products: !isProduct
          ? [...prevState.products, { ...newProduct, amount: 1 }]
          : prevState.products.map((el) =>
              el.id === newProduct.id ? { ...el, amount: el.amount + 1 } : el
            ),
      };
    });
  };

  removeProduct = (id) => {
    this.setState((prev) => {
      const product = prev.products.find((el) => el.id === id);
      return {
        products:
          product.amount === 1
            ? prev.products.filter((el) => el.id !== id)
            : prev.products.map((el) =>
                el.id !== id ? el : { ...el, amount: el.amount - 1 }
              ),
      };
    });
  };

  render() {
    const { isCartOpen, products } = this.state;

    return (
      <>
        {/* <Counter /> */}
        <Header handleCartOpen={this.handleCartOpen} />
        <MainPage addProduct={this.addProduct} />

        <Cart
          isCartOpen={isCartOpen}
          products={products}
          handleCloseCart={this.handleCloseCart}
          removeProduct={this.removeProduct}
        />
      </>
    );
  }
}

export default App;
