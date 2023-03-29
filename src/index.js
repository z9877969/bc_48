import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";

class ErrorBoundary extends Component {
  state = { hasError: false };

  // static getDerivedStateFromError(error) {
  //   // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
  //   console.log("error_gDSE :>> ", error);
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  // </React.StrictMode>
);
