import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Cart />
    </>
  );
};

// React.createElement(); // -> 1 el

export default App;
