import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import Theme from "./components/Theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Theme>
    <App />
  </Theme>
  // </React.StrictMode>
);
